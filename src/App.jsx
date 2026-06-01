import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Clipboard,
  Dumbbell,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { coach, programs, proof, stats, testimonials, workflow } from './siteData'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    await navigator.clipboard.writeText(coach.wechat)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/88 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Go to homepage">
            <span className="grid size-10 place-items-center rounded-lg bg-lime-300 text-zinc-950">
              <Dumbbell size={22} strokeWidth={2.4} />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-white">
                {coach.name}
              </span>
              <span className="block text-xs text-zinc-400">{coach.city} coaching</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#programs">
              Programs
            </a>
            <a className="hover:text-white" href="#results">
              Results
            </a>
            <a className="hover:text-white" href="#workflow">
              Workflow
            </a>
            <a
              className="rounded-lg bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-lime-200"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <button
            className="grid size-10 place-items-center rounded-lg border border-white/15 text-white md:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 pb-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-3 pt-4 text-sm text-zinc-200">
              {['programs', 'results', 'workflow', 'contact'].map((item) => (
                <a
                  key={item}
                  className="rounded-lg border border-white/10 px-4 py-3 capitalize"
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(190,242,100,0.18),transparent_30%),linear-gradient(135deg,rgba(244,63,94,0.14),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-sm font-medium text-lime-200">
                <Sparkles size={16} />
                Tailwind master template
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
                {coach.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{coach.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-semibold text-zinc-950 hover:bg-lime-200"
                  href="#contact"
                >
                  {coach.primaryCta}
                  <ArrowRight size={18} />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white hover:border-white/40"
                  href="#programs"
                >
                  {coach.secondaryCta}
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <strong className="block text-3xl text-white">{item.value}</strong>
                    <span className="mt-1 block text-sm text-zinc-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(132,204,22,0.22),transparent_32%)]" />
              <div className="absolute left-8 top-8 rounded-lg bg-white px-4 py-3 text-zinc-950 shadow-2xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Current focus</p>
                <p className="text-lg font-semibold">Strength + posture</p>
              </div>
              <div className="absolute inset-x-8 bottom-8 rounded-lg border border-white/10 bg-zinc-950/82 p-5 backdrop-blur">
                <p className="text-sm uppercase tracking-wide text-lime-200">Replace this visual later</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Use a real coach photo here</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  This hero block is intentionally built without stock images, so the master template stays clean until
                  you add a client photo.
                </p>
              </div>
              <div className="absolute right-8 top-32 grid gap-3">
                {['Fat loss', 'Muscle gain', 'Posture'].map((tag) => (
                  <span key={tag} className="rounded-lg bg-zinc-950/80 px-4 py-2 text-sm text-zinc-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="border-y border-white/10 bg-white py-16 text-zinc-950 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Programs</p>
              <h2 className="mt-3 text-4xl font-semibold">Reusable service cards for each coach.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {programs.map((program) => (
                <article key={program.title} className="rounded-lg border border-zinc-200 p-6">
                  <Star className="text-rose-500" size={22} />
                  <h3 className="mt-5 text-2xl font-semibold">{program.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{program.detail}</p>
                  <p className="mt-6 text-sm font-semibold text-zinc-950">{program.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="bg-zinc-950 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-lime-200">Trust</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Proof blocks keep the page believable.</h2>
              <div className="mt-8 grid gap-3">
                {proof.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-zinc-300">
                    <Check className="text-lime-300" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-semibold text-lime-200">{item.result}</p>
                  <blockquote className="mt-4 text-xl leading-8 text-white">"{item.quote}"</blockquote>
                  <p className="mt-5 text-sm text-zinc-400">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-zinc-100 py-16 text-zinc-950 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Workflow</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold">The simple rule: edit data first, layout second.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {workflow.map((item, index) => (
                <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                  <span className="grid size-9 place-items-center rounded-lg bg-zinc-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm leading-6 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 text-zinc-950 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold">Client-ready contact section.</h2>
              <div className="mt-8 grid gap-4 text-zinc-700">
                <p className="flex items-center gap-3">
                  <MapPin size={20} />
                  {coach.location}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  {coach.phone}
                </p>
                <button
                  className="flex w-fit items-center gap-3 rounded-lg border border-zinc-200 px-4 py-3 text-left hover:border-zinc-400"
                  type="button"
                  onClick={copyWechat}
                >
                  <Clipboard size={20} />
                  WeChat: {coach.wechat}
                  <span className="text-sm font-semibold text-rose-600">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <form className="rounded-lg border border-zinc-200 p-6 shadow-sm">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  Name
                  <input className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900" />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Phone / WeChat
                  <input className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-medium">
                Goal
                <textarea
                  className="min-h-32 rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900"
                  placeholder="Fat loss, muscle gain, posture, or private training..."
                />
              </label>
              <button
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 font-semibold text-white hover:bg-zinc-800"
                type="button"
              >
                Submit demo form
                <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-sm text-zinc-500">
                Static demo form. Connect FormSubmit, Web3Forms, or your own backend before real use.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 px-5 py-8 text-sm text-zinc-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>{coach.name} fitness landing template</p>
          <p>Built with Vite, React, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
