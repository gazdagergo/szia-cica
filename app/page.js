'use client'
import {useEffect, useRef} from "react";
import Image from "next/image";

export default function Home() {
  const synth = useRef(null);

  useEffect(() => {
    synth.current = new SpeechSynthesisUtterance();
    synth.current.lang = 'hu-HU'
  }, []);

  const handleSpeechClick = () => {
    synth.current.text = "Elmondom az ábécét. A, Á, B, C, CS, D, DZ, DZSÉ, E, É, F, G, GYÉ, H, I, Í, J, K, L, JÉ, M, N, ENNY, O, Ó, Ö, Ő, P, Q, R, S, ESSZ, T, TYÉ, U, Ú, Ü, Ű, V, W, Z, ZSÉ";
    speechSynthesis.speak(synth.current);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Szia Cica.

      <Image src="/cica.jpg" alt="cica" width={543} height={360} />
      <button className="border-2 border-gray-500 bg-gray-200 p-3" onClick={handleSpeechClick}>Mondd el az ÁBÉCÉT</button>
    </main>
  )
}
