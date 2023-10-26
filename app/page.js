'use client'
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function Home() {
  const synth = useRef(null);

  useEffect(() => {
    synth.current = new SpeechSynthesisUtterance();
    synth.current.lang = 'hu-HU'
  }, []);

  const [value, setValue] = useState('')

  const speech = (text) => {
    synth.current.text = text
    speechSynthesis.speak(synth.current);
  }

  const handleSendClick = () => {
    if  (value.toLowerCase().includes("szia")) {
      speech("Szia, téged hogy hívnak?")
    }
    else if (value.toLowerCase().includes("ábécé")) {
      speech("Elmondom az ábécét. A, Á, B, C, CS, D, DZ, DZSÉ, E, É, F, G, GYÉ, H, I, Í, J, K, L, JÉ, M, N, ENNY, O, Ó, Ö, Ő, P, Q, R, S, ESSZ, T, TYÉ, U, Ú, Ü, Ű, V, W, X, Y, Z, ZSÉ");
    }
    else if (value.toLowerCase().includes("vers")) {
      setTimeout(() => speech("Rendben. Elmondom Petőfi Sándor Itt van az ősz, itt van újra című versének az első két versszakát."), 0)
      setTimeout(() => speech("Itt van az ősz, itt van ujra,\n" +
        "sszép, mint mindig, énnekem.\n" +
        "Tudja isten, hogy mi okból\n" +
        "Szeretem? de szeretem.\n" +
        " \n" +
        "Kiülök a dombtetőre,\n" +
        "Innen nézek szerteszét,\n" +
        "shallgatom a fák lehulló\n" +
        "Levelének lágy neszét."), 4000)
    }
    else if (value.split(" ").length <= 1) {
      speech(`Szia ${value}. Mit szeretnél?`)
    }
    else {
      speech(`Sajnos ezt még nem tudom megválaszolni`)
    }
    setValue('')

  }

  const handleKeyUp = (e) => {
    if (e.code === "Enter") {
      handleSendClick()
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/cica.jpg" alt="cica" width={543} height={360} />
      <input className="w-full border-2 border-gray-400 p-3 my-3 rounded-xl" value={value} onChange={({ target }) => setValue(target.value)} onKeyUp={handleKeyUp} />
      <button className="border-2 border-gray-500 bg-gray-200 p-3" onClick={handleSendClick}>Küld</button>
    </main>
  )
}
