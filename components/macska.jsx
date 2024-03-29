'use client'
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {askGPT} from "@/functions/askGPT";
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom';
import Head from "next/head";


function Submit({ children, ...rest }) {
  const status = useFormStatus();
  return <button type="submit" style={{ color: status.pending ? "darkgray" : "inherit" }} {...rest} disabled={status.pending}>{children}</button>
}

function Input(props) {
  const status = useFormStatus();
  return <input disabled={status.pending} className="w-full border-2 border-gray-400 p-3 my-3 rounded-xl" style={{ color: status.pending ? 'gray' : 'inherit', backgroundImage: status.pending ? "url('/spinner.gif')" : "none", backgroundSize: "40px 40px", backgroundRepeat: "no-repeat", backgroundPosition: "center right 10px" }} {...props} />
}

const initialState = {
  message: null,
}
export default function Macska() {
  const synth = useRef(null);
  const [state, formAction] = useFormState(askGPT, initialState)
  const [spaeking, setSpeaking] = useState(false)

  useEffect(() => {
    synth.current = new SpeechSynthesisUtterance();
    synth.current.lang = 'hu-HU'
    synth.current.addEventListener("end", (event) => {
      setSpeaking(false)
    });
  }, []);

  const [value, setValue] = useState('')

  const speech = (text) => {
    synth.current.text = text
    speechSynthesis.speak(synth.current);
  }

  useEffect(() => {
    speech(state)
    setSpeaking(value)
    setValue('')
  }, [state]);


  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/cica-talk.gif"
          as="image"
        />
      </Head>
      <Image src={spaeking ? "/cica-talk.gif" : "/cica.jpg"} alt="cica" width={543} height={360} />
      <form action={formAction} className="w-full text-center">
        <Input name="question" value={value} onChange={({ target }) => setValue(target.value)} />
        <Submit className="border-2 border-gray-500 bg-gray-200 p-3">Kérdés küldése</Submit>
      </form>
    </>
  )
}
