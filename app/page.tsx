// app/page.tsx
"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-10 border border-blue-50">
        
        {/* Hero & Headline */}
        <header className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-4xl font-black text-blue-600 tracking-tight text-center drop-shadow-lg leading-tight">
            La Babysitter giusta, sempre quando serve
          </h1>
          <p className="text-base text-gray-500 text-center font-medium max-w-xl">
            Servizio affidabile, professionale e gestito: Babysitter selezionate, pronte a coprire ogni esigenza, anche nei momenti imprevisti. Nessun contatto diretto: 
            <span className="font-semibold text-purple-600">la piattaforma garantisce selezione, formazione e sostituzione immediata.</span>
          </p>
        </header>

        {/* Sezioni Informative */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-pink-100 rounded-2xl p-6 shadow hover:scale-105 transition">
            <span className="text-pink-500 text-xl font-extrabold">Team selezionato</span>
            <ul className="text-sm text-gray-600 list-disc mt-3 pl-4">
              <li>Tutte le babysitter vengono intervistate e formate con corsi appositi.</li>
              <li>Controlli costanti e aggiornamenti professionali.</li>
              <li>Esperienza verificata e feedback reali.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-blue-100 rounded-2xl p-6 shadow hover:scale-105 transition">
            <span className="text-blue-500 text-xl font-extrabold">Prenotazione flessibile</span>
            <ul className="text-sm text-gray-600 list-disc mt-3 pl-4">
              <li>Seleziona giorno e orario in pochi click dal calendario interattivo.</li>
              <li>Indica le tue priorità: avrai sempre la babysitter disponibile più adatta.</li>
              <li>Gestione delle urgenze e coperture rapide.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-purple-100 rounded-2xl p-6 shadow hover:scale-105 transition">
            <span className="text-purple-500 text-xl font-extrabold">Sostituzione garantita</span>
            <ul className="text-sm text-gray-600 list-disc mt-3 pl-4">
              <li>In caso di problemi, la piattaforma assegna subito una sostituta di pari livello.</li>
              <li>Supporto 24/7 del team amministrativo.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-teal-100 rounded-2xl p-6 shadow hover:scale-105 transition">
            <span className="text-teal-500 text-xl font-extrabold">Gestione centralizzata</span>
            <ul className="text-sm text-gray-600 list-disc mt-3 pl-4">
              <li>Tutto tramite web app mobile-first, facile e veloce.</li>
              <li>Pagamenti e notifiche integrate.</li>
              <li>Assistenza rapida e chat privata con l'amministrazione.</li>
            </ul>
          </div>
        </section>

        {/* Perché scegliere noi */}
        <section className="bg-white rounded-2xl p-8 shadow-md border border-purple-50">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-3 tracking-wide">
            Perché scegliere Babysitting App?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700 font-medium">
            <li>
              <span className="font-semibold text-blue-500">Più sicurezza: </span>
              Il servizio non fa solo matching, ma si occupa della selezione, formazione e gestione di ogni babysitter.
            </li>
            <li>
              <span className="font-semibold text-pink-500">Zero imprevisti: </span>
              La continuità è garantita da sostituzioni rapide in caso di assenza.
            </li>
            <li>
              <span className="font-semibold text-teal-500">Esperienza semplificata: </span>
              Prenotazione, pagamenti e gestione tutto in un’unica piattaforma mobile.
            </li>
            <li>
              <span className="font-semibold text-purple-500">Supporto costante: </span>
              Un team dedicato sempre al tuo fianco, per ogni dubbio e necessità.
            </li>
          </ul>
        </section>
        
        {/* Call to Action / Faq */}
        <section className="flex flex-col items-center gap-4 mt-4">
          <a
            href="/signup"
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold py-4 px-10 rounded-2xl shadow-xl text-lg hover:brightness-110 transition duration-200"
          >
            Richiedi una Demo Gratuita
          </a>
          <div className="text-sm text-gray-600 text-center max-w-lg">
            Vuoi sapere di più? Consulta la <a href="/faq" className="text-blue-600 underline hover:text-purple-600">pagina FAQ</a> oppure <a href="/contatti" className="text-pink-600 underline hover:text-purple-600">contattaci</a> senza impegno.
          </div>
        </section>
        
        {/* Footer */}
        <footer className="text-xs text-gray-400 mt-8 text-center font-medium">
          &copy; 2025 Babysitting App • Garantiamo professionalità, sicurezza e assistenza.  
        </footer>
      </div>
    </main>
  );
}
