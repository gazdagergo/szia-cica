'use client'
import {useEffect} from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    console.log(voices)
  }, []);

  const handleSpeechClick = () => {
    let utterance = new SpeechSynthesisUtterance("Elmondom az ábécét. A, Á, B, C, CS, D, DZ, DZSÉ, E, É, F, G, GYÉ, H, I, Í, J, K, L, JÉ, M, N, ENNY, O, Ó, Ö, Ő, P, Q, R, S, ESSZ, T, TYÉ, U, Ú, Ü, Ű, V, W, Z, ZSÉ");
    utterance.lang = 'hu-HU'
    speechSynthesis.speak(utterance);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Szia Cica.

      <Image src="/cica.jpg" alt="cica" width={543} height={360} />
      <button className="border-2 border-gray-500 bg-gray-200 p-3" onClick={handleSpeechClick}>Mondd el az ÁBÉCÉT</button>
    </main>
  )
}
