"use client";
import BabysitterSlider from "../components/BabysitterSlider";
import { useState } from "react";

const faqs = [
  {
    question: "Come vengono selezionate le babysitter?",
    answer: "Le babysitter sono selezionate da un team interno e seguono corsi di formazione specifici prima di entrare nel network.",
  },
  {
    question: "Cosa succede se la mia babysitter non è disponibile?",
    answer: "La piattaforma assegna automaticamente la persona più adatta tra quelle disponibili, garantendo continuità.",
  },
  {
    question: "Come posso prenotare?",
    answer: "Accedi al calendario, seleziona giorno e fascia oraria, esprimi le tue preferenze: il sistema fa il resto.",
  },
  {
    question: "Come funziona il pagamento?",
    answer: "Gestione pagamenti e ricevute direttamente dalla web app, nessuna burocrazia.",
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-gradient-to-br from-pastelPink via-pastelBlue to-pastelPurple flex flex-col items-center px-4 py-8 font-sans">
      {/* Hero */}
      <div className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 mb-12 flex flex-col gap-8 border border-blue-50">
        <header className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight text-center leading-tight drop-shadow-lg">
            Babysitter professionali, sempre disponibili
          </h1>
          <p className="text-lg text-gray-600 text-center font-medium max-w-xl mt-4">
            La nostra piattaforma seleziona, forma e gestisce il team di babysitter per la tua famiglia. Prenota in pochi click, ricevi assistenza e continuità: 
            <span className="font-semibold text-purple-600">la sicurezza che meriti, ogni giorno.</span>
          </p>
        </header>
        {/* Vantaggi cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-pastelBlue rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-blue-700 text-xl mb-2">Team certificato</span>
            <span className="text-gray-700 text-center">Selezione interna e formazione per babysitter di qualità, con feedback e aggiornamenti continui.</span>
          </div>
          <div className="bg-pastelPink rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-pink-700 text-xl mb-2">Prenotazione facile</span>
            <span className="text-gray-700 text-center">Calendario smart e preferenze: scegli giorno, orario e la piattaforma fa tutto per te.</span>
          </div>
          <div className="bg-pastelTeal rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-teal-700 text-xl mb-2">Sostituzione garantita</span>
            <span className="text-gray-700 text-center">In caso di imprevisto, il sistema assegna subito una sostituita qualificata e aggiornata.</span>
          </div>
          <div className="bg-pastelPurple rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="font-bold text-purple-700 text-xl mb-2">Supporto smart</span>
            <span className="text-gray-700 text-center">Gestione online, pagamenti e assistenza tutto da web app. Nessuna burocrazia, solo servizio.</span>
          </div>
        </div>
        {/* Vetrina slider babysitter */}
        <BabysitterSlider />
        {/* Testimonial */}
        <div className="mt-8 mb-4 p-6 bg-white rounded-2xl border border-pastelBlue shadow flex flex-col items-center gap-3">
          <h2 className="text-xl font-extrabold text-purple-600">Cosa dicono le famiglie:</h2>
          <p className="italic text-gray-600 text-center">“Il servizio mi ha salvato più volte in emergenza. Babysitter sempre preparate, assistenza rapida, esperienza da consigliare a tutte le mamme!”</p>
          <span className="text-sm text-blue-600 font-bold">— Sara B., Milano</span>
        </div>
        {/* FAQ interattiva */}
        <section className="mt-10">
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
          <div className="mt-2 text-gray-600 text-sm">Vuoi collaborare? <a href="/lavora-con-noi" className="text-blue-700 underline hover:text-pink-500">Scopri le opportunità</a></div>
        </div>
        {/* Footer */}
        <footer className="text-xs text-gray-400 mt-8 text-center font-medium">
          &copy; 2025 Babysitting App • Sicurezza, continuità, serenità sempre garantite.
        </footer>
      </div>
    </main>
  );
}

