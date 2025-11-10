"use client";
import BabysitterSlider from "../components/BabysitterSlider";
import { useState } from "react";

const faqs = [
  {
    question: "Come vengono selezionate le babysitter?",
    answer: "Tutte le nostre babysitter sono selezionate con colloqui e formazione interna, per garantire affidabilità e professionalità.",
  },
  {
    question: "Cosa succede se la babysitter non è disponibile?",
    answer: "Il servizio trova e assegna subito un'altra professionista disponibile, per garantire sempre una copertura.",
  },
  {
    question: "Come funziona la prenotazione?",
    answer: "Scegli data, fascia oraria e preferenze, al resto pensa la piattaforma.",
  },
  {
    question: "Come posso pagare il servizio?",
    answer: "Pagamenti e ricevute sono gestiti online direttamente dall'app, zero burocrazia.",
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen font-sans bg-gradient-to-br from-pastelPink via-pastelBlue to-pastelPurple flex flex-col items-center px-4 py-10">

      {/* HERO */}
      <section className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 mb-12 flex flex-col gap-8 border border-pastelBlue text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg mb-4">
          Babysitter di qualità, sempre disponibili
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-2">
          Prenota in pochi click, ottieni sicurezza, assistenza e continuità per la tua famiglia. Gestiamo tutto per te—dal matching, ai pagamenti, alle sostituzioni.
        </p>
        {/* Vantaggi cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-pastelBlue rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-blue-700 text-xl mb-2">Team selezionato</span>
            <span className="text-gray-700 text-center">Solo babysitter certificate e costantemente aggiornate.</span>
          </div>
          <div className="bg-pastelPink rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-pink-700 text-xl mb-2">Prenotazione smart</span>
            <span className="text-gray-700 text-center">Calendario interattivo, scelte rapide, copertura di emergenza garantita.</span>
          </div>
          <div className="bg-pastelTeal rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-teal-700 text-xl mb-2">Pagamenti digitali</span>
            <span className="text-gray-700 text-center">Gestione integrata di pagamenti e ricevute online, nessuna burocrazia.</span>
          </div>
          <div className="bg-pastelPurple rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-purple-700 text-xl mb-2">Supporto 7/7</span>
            <span className="text-gray-700 text-center">Chat e assistenza dedicate, sempre disponibili.</span>
          </div>
        </div>
      </section>

      {/* SLIDER PROFILI BABYSITTER */}
      <BabysitterSlider />
      
      {/* TESTIMONIAL */}
      <section className="w-full max-w-2xl mt-10 mb-4 p-6 bg-white rounded-2xl border border-pastelBlue shadow flex flex-col items-center gap-3">
        <h2 className="text-xl font-extrabold text-purple-600">Dicono di noi:</h2>
        <p className="italic text-gray-600 text-center">“Babysitter preparate, assistenza veloce e pagamenti digitali: mi sento veramente tranquilla!”</p>
        <span className="text-sm text-blue-600 font-bold">— Paola, Milano</span>
      </section>

      {/* FAQ INTERATTIVA */}
      <section className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Domande frequenti</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-pastelPurple rounded-xl shadow p-4">
              <button
                className="w-full text-left font-semibold text-purple-700 text-lg"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.question}
              </button>
              {open === idx && (
                <div className="mt-2 text-gray-700 text-base px-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href="/contattaci"
          className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold py-4 px-10 rounded-2xl shadow-xl text-lg hover:brightness-110 transition duration-200"
        >
          Richiedi una demo gratuita
        </a>
        <div className="mt-2 text-gray-600 text-sm">
          Vuoi collaborare? <a href="/lavora-con-noi" className="text-blue-700 underline hover:text-pink-500">Scopri le opportunità</a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-xs text-gray-400 mt-8 text-center font-medium mb-4">
        &copy; 2025 Babysitting App • Design pastel, sicurezza premium, assistenza continua.
      </footer>
    </main>
  );
}

