"use client";
import { motion } from "framer-motion";

const navItems = ["Plataforma", "Benefícios", "Preços", "FAQ"];
const menuItems = ["Home", "Documentos", "Contrato", "Pagamentos", "Suporte"];
const msgs = [
  { text: "Opa! Consegue me ajudar?", mine: false, time: "2:34 PM" },
  { text: "Claro!", mine: true, time: "2:34 PM" },
  { text: "Eita, que rápido kkkk", mine: false, time: "2:35 PM" },
  { text: "Pode se acostumar. Esse é o padrão Conta Dev 😄", mine: true, time: "2:35 PM" },
];
const logos = ["Spotify", "Nubank", "Toptal", "Deel", "99"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0F]">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.07) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-[-80px] left-[32%] w-[500px] h-[500px] rounded-full bg-purple-800/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-60px] w-[300px] h-[300px] rounded-full bg-purple-900/15 blur-[80px] pointer-events-none" />

      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#7C3AED] flex items-center justify-center font-black text-white text-xs">C</div>
          <span className="text-white font-bold text-sm">ContaDev</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href={"#" + item.toLowerCase()} className="text-gray-500 hover:text-white text-xs transition-colors">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Login</a>
          <a href="#contato" className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">Fale com um especialista</a>
        </div>
      </header>

      <div className="relative z-10 flex-1 flex items-center px-8 py-12 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-[380px] z-10">
          <h1 className="text-white text-4xl font-extrabold leading-[1.15] mb-4">
            Contabilidade para devs,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">com menos burocracia</span>{" "}
            e mais controle da sua PJ
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-sm">
            Centralize sua operação em uma plataforma, fale com especialistas que entendem seu cenário e descubra quanto você pode economizar.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contato" className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105">Fale com um especialista</a>
            <a href="#precos" className="text-gray-500 hover:text-white text-sm transition-colors">Ver planos →</a>
          </div>
        </motion.div>

        <div className="flex-1 relative ml-8" style={{ height: "360px" }}>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="absolute top-0 right-[-32px] w-[480px] bg-[#0F0F18] border border-purple-900/25 rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 50px rgba(124,58,237,0.1)" }}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <span className="text-white text-xs font-bold">Dashboard</span>
              <span className="bg-[#7C3AED] text-white text-[9px] font-bold px-3 py-1 rounded-md">EMITIR NOTA</span>
            </div>
            <div className="flex">
              <div className="w-[80px] bg-[#0A0A10] border-r border-white/5 py-3">
                <div className="w-5 h-5 rounded-md bg-[#7C3AED] flex items-center justify-center text-white text-[8px] font-black mx-auto mb-3">C</div>
                {menuItems.map((item, i) => (
                  <div key={item} className={"flex items-center gap-2 px-3 py-2 " + (i === 0 ? "bg-purple-900/20" : "")}>
                    <div className={"w-1 h-1 rounded-full " + (i === 0 ? "bg-[#7C3AED]" : "bg-gray-700")} />
                    <span className={"text-[8px] " + (i === 0 ? "text-purple-300" : "text-gray-600")}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1 p-3">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[["Total Faturado","R$75.000","Mês Atual"],["Valor de Impostos","R$0,00","Mês Atual"],["Notas Emitidas","2","Mês Atual"]].map(([l,v,s]) => (
                    <div key={l} className="bg-[#13131E] border border-white/5 rounded-lg p-2">
                      <p className="text-gray-600 text-[7px] mb-1">{l}</p>
                      <p className="text-white font-bold text-[10px]">{v}</p>
                      <p className="text-gray-600 text-[7px] mt-1">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#13131E] border border-white/5 rounded-lg p-3">
                  <p className="text-gray-600 text-[8px] mb-2">total Faturado</p>
                  <div className="relative h-14 overflow-hidden">
                    <svg viewBox="0 0 300 56" preserveAspectRatio="none" className="w-full h-full">
                      <defs>
                        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <path d="M0 54 C30 52,60 48,90 42 C120 36,150 28,180 18 C210 10,240 6,300 2 L300 56 L0 56 Z" fill="url(#cg)" />
                      <path d="M0 54 C30 52,60 48,90 42 C120 36,150 28,180 18 C210 10,240 6,300 2" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent pointer-events-none" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="absolute top-1/2 -translate-y-1/2 left-8 z-20 w-[150px] bg-[#111118] rounded-[26px] p-2" style={{ border: "2.5px solid rgba(255,255,255,0.14)", boxShadow: "0 0 0 1px rgba(124,58,237,0.3), 0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(124,58,237,0.2)" }}>
            <div className="w-10 h-[6px] bg-[#111118] border-2 border-white/10 rounded-sm mx-auto mb-2" />
            <div className="bg-[#0A0A0F] rounded-[18px] p-2">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold text-[7px] flex-shrink-0">C</div>
                <div>
                  <p className="text-white text-[7px] font-semibold">ContaDev</p>
                  <p className="text-green-400 text-[6px]">online agora</p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {msgs.map((m, i) => (
                  <div key={i} className={"flex " + (m.mine ? "justify-end" : "justify-start")}>
                    <div className="flex flex-col" style={{ alignItems: m.mine ? "flex-end" : "flex-start", maxWidth: "90px" }}>
                      <span className={"text-[7px] px-2 py-1 leading-tight " + (m.mine ? "bg-[#7C3AED] text-white" : "bg-white/10 text-gray-300")} style={{ borderRadius: m.mine ? "9px 9px 2px 9px" : "9px 9px 9px 2px" }}>{m.text}</span>
                      <span className="text-[5.5px] text-gray-600 mt-0.5">{m.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-8 h-[3px] bg-white/10 rounded-full mx-auto mt-2" />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="relative z-10 border-t border-white/5 py-4 px-8">
        <div className="flex items-center gap-6">
          <span className="text-gray-700 text-[10px] whitespace-nowrap">Usado por profissionais de:</span>
          <div className="flex items-center gap-6">
            {logos.map((l) => (
              <span key={l} className="text-gray-700 font-semibold text-xs hover:text-gray-500 transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
