import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Camera, CheckCircle2, ChevronRight, Clock3, MapPin, MessageCircle, ShieldCheck, Sparkles, Smartphone, Users2, Workflow } from 'lucide-react'
import Brand from '../components/Brand'

const modules = [
  { icon: Camera, title: 'Incidencias con IA', text: 'Una foto basta. CivIA propone categoría, ubicación y departamento responsable.' },
  { icon: MessageCircle, title: 'Asistente ciudadano', text: 'Respuestas claras sobre trámites, ayudas, horarios y servicios municipales.' },
  { icon: MapPin, title: 'Avisos por barrio', text: 'Comunicaciones segmentadas por zona, intereses y nivel de urgencia.' },
  { icon: Workflow, title: 'Integración modular', text: 'Conecta con gestores de incidencias, sede electrónica, agenda y datos abiertos.' }
]

export default function Landing() {
  return <div className="min-h-screen overflow-hidden">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Brand compact />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-civic-800 md:flex">
          <a href="#solucion">Solución</a><a href="#beneficios">Beneficios</a><a href="#implantacion">Implantación</a>
        </nav>
        <div className="flex gap-2">
          <Link to="/admin" className="hidden rounded-xl px-4 py-2 text-sm font-bold text-civic-900 sm:block">Panel municipal</Link>
          <Link to="/app" className="rounded-xl bg-civic-900 px-4 py-2 text-sm font-bold text-white">Probar demo</Link>
        </div>
      </div>
    </header>

    <main>
      <section className="hero-grid relative pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 lg:grid-cols-[1.05fr_.95fr] lg:pb-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-civic-200 bg-white/80 px-4 py-2 text-sm font-bold text-civic-700"><Sparkles size={16}/> GovTech centrada en las personas</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[.96] tracking-[-.05em] text-civic-900 md:text-7xl">El ayuntamiento, más cerca. La ciudadanía, mejor atendida.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">CivIA reúne incidencias, avisos y atención municipal en una experiencia móvil sencilla, accesible y conectable con los sistemas del ayuntamiento.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/app" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-civic-900 px-6 py-4 font-bold text-white shadow-soft">Probar experiencia ciudadana <ArrowRight size={19}/></Link>
              <Link to="/admin" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-civic-200 bg-white px-6 py-4 font-bold text-civic-900">Ver panel municipal <ChevronRight size={19}/></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-civic-500"/> iPhone, Android y web</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-civic-500"/> Sin instalación obligatoria</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-civic-500"/> Despliegue modular</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-8 top-20 h-44 w-44 rounded-full bg-amberx/20 blur-3xl"/>
            <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-civic-300/30 blur-3xl"/>
            <div className="relative grid gap-5 sm:grid-cols-[.82fr_1.18fr]">
              <div className="rounded-[2.5rem] bg-civic-900 p-3 phone-shell sm:mt-14">
                <div className="rounded-[2rem] bg-[#f7f9f8] p-5">
                  <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-300"/>
                  <div className="text-xs font-bold text-slate-400">Bon dia, Marta</div>
                  <div className="mt-1 text-xl font-black text-civic-900">Santa Perpètua</div>
                  <button className="mt-5 w-full rounded-3xl bg-civic-900 p-5 text-left text-white">
                    <Camera/><div className="mt-7 text-lg font-bold">Comunicar incidencia</div><div className="mt-1 text-xs text-white/60">Haz una foto y CivIA te guía</div>
                  </button>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm"><MessageCircle size={20}/><div className="mt-5 text-sm font-bold">Preguntar</div></div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm"><MapPin size={20}/><div className="mt-5 text-sm font-bold">Avisos</div></div>
                  </div>
                </div>
              </div>
              <div className="self-center rounded-4xl border border-white bg-white/90 p-6 shadow-soft">
                <div className="flex items-center justify-between"><div><div className="text-xs font-bold uppercase tracking-wider text-slate-400">Panel municipal</div><div className="mt-1 text-xl font-black text-civic-900">Actividad de hoy</div></div><Building2 className="text-civic-500"/></div>
                <div className="mt-6 grid grid-cols-2 gap-3"><Kpi value="38" label="Incidencias"/><Kpi value="92%" label="En plazo"/></div>
                <div className="mt-5 rounded-3xl bg-civic-50 p-5">
                  <div className="flex h-32 items-end gap-2">{[35,58,42,82,64,93,72].map((v,i)=><div key={i} className="flex-1 rounded-t-lg bg-civic-500" style={{height:`${v}%`,opacity:.55+i*.06}}/>)}</div>
                  <div className="mt-3 flex justify-between text-[10px] font-bold text-slate-400"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 p-4"><div className="grid h-10 w-10 place-items-center rounded-xl bg-amberx/20"><Clock3 size={20}/></div><div><div className="text-sm font-bold">1 h 42 min</div><div className="text-xs text-slate-500">Tiempo medio de respuesta</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucion" className="mx-auto max-w-7xl px-5 py-24">
        <div className="max-w-3xl"><div className="text-sm font-black uppercase tracking-[.2em] text-civic-500">Una plataforma, varios módulos</div><h2 className="mt-4 text-4xl font-black tracking-tight text-civic-900 md:text-5xl">No es otra app municipal. Es una nueva capa de relación ciudadana.</h2></div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{modules.map(({icon:Icon,title,text})=><div key={title} className="rounded-4xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-civic-100 text-civic-700"><Icon/></div><h3 className="mt-7 text-xl font-black text-civic-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>
      </section>

      <section id="beneficios" className="bg-civic-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div><div className="text-sm font-black uppercase tracking-[.2em] text-civic-300">Impacto directo</div><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Menos fricción para el vecino. Más información útil para el ayuntamiento.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2"><Benefit icon={Users2} title="Atención más accesible" text="Canal único y lenguaje claro."/><Benefit icon={Clock3} title="Menos llamadas" text="Respuestas inmediatas a consultas repetitivas."/><Benefit icon={ShieldCheck} title="Gobernanza y control" text="Trazabilidad, permisos y auditoría."/><Benefit icon={Smartphone} title="Una sola experiencia" text="PWA para móvil, tablet y ordenador."/></div>
        </div>
      </section>

      <section id="implantacion" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><div className="text-sm font-black uppercase tracking-[.2em] text-civic-500">Implantación progresiva</div><h2 className="mt-4 text-4xl font-black tracking-tight text-civic-900">Empezar pequeño, medir y ampliar.</h2><p className="mt-5 leading-8 text-slate-600">El piloto puede comenzar con incidencias, avisos y asistente sobre información pública. Las integraciones avanzadas se incorporan después.</p></div>
          <div className="grid gap-4">{['Piloto con datos y procesos públicos','Conexión con el gestor de incidencias','Identificación, trámites y carpeta ciudadana'].map((x,i)=><div key={x} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-civic-900 font-black text-white">{i+1}</div><div><div className="font-black text-civic-900">{x}</div><div className="mt-1 text-sm leading-6 text-slate-500">Fase {i+1}, adaptable a los sistemas y prioridades del municipio.</div></div></div>)}</div>
        </div>
      </section>

      <section className="px-5 pb-24"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-amberx p-8 md:p-14"><div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><h2 className="text-3xl font-black tracking-tight text-civic-900 md:text-4xl">Prueba ahora la experiencia completa.</h2><p className="mt-3 text-civic-900/70">Navega como ciudadano o entra en el panel de gestión municipal.</p></div><div className="flex flex-wrap gap-3"><Link to="/app" className="rounded-2xl bg-civic-900 px-6 py-4 font-bold text-white">Demo ciudadana</Link><Link to="/admin" className="rounded-2xl bg-white px-6 py-4 font-bold text-civic-900">Panel municipal</Link></div></div></div></section>
    </main>

    <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between"><Brand compact/><div className="text-sm text-slate-500">Demo conceptual · Datos simulados · 2026</div></div></footer>
  </div>
}

function Kpi({value,label}:{value:string,label:string}) { return <div className="rounded-2xl border border-slate-100 p-4"><div className="text-2xl font-black text-civic-900">{value}</div><div className="text-xs text-slate-500">{label}</div></div> }
function Benefit({icon:Icon,title,text}:{icon:any,title:string,text:string}) { return <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><Icon className="text-amberx"/><div className="mt-5 font-black">{title}</div><div className="mt-2 text-sm leading-6 text-white/60">{text}</div></div> }
