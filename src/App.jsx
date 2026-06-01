import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Clipboard,
  Dumbbell,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react'
import {
  about,
  brand,
  coach,
  contact,
  formCopy,
  hero,
  media,
  navItems,
  philosophy,
  pricing,
  results,
  sectionCopy,
  services,
  socialLinks,
  specialties,
  stats,
  targetClients,
} from './siteData'

function SectionHeader({ eyebrow, title, children, dark = false }) {
  return (
    <div className="max-w-3xl">
      <p className={dark ? 'text-sm font-semibold uppercase tracking-wide text-lime-200' : 'text-sm font-semibold uppercase tracking-wide text-rose-600'}>
        {eyebrow}
      </p>
      <h2 className={dark ? 'mt-3 text-3xl font-semibold text-white md:text-4xl' : 'mt-3 text-3xl font-semibold text-zinc-950 md:text-4xl'}>
        {title}
      </h2>
      {children && <div className={dark ? 'mt-4 text-zinc-300' : 'mt-4 text-zinc-600'}>{children}</div>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    await navigator.clipboard.writeText(contact.wechat)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label={brand.name}>
            <span className="grid size-10 place-items-center rounded-lg bg-lime-300 text-zinc-950">
              <Dumbbell size={22} strokeWidth={2.4} />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-white">
                {brand.name}
              </span>
              <span className="block text-xs text-zinc-400">{brand.headerSubtitle}</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} className="hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-lime-200 md:inline-flex"
            href="#contact"
          >
            {coach.primaryCta}
          </a>

          <button
            className="grid size-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 pb-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-3 pt-4 text-sm text-zinc-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-lg border border-white/10 px-4 py-3"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(190,242,100,0.15),transparent_28%),linear-gradient(135deg,rgba(244,63,94,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 md:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-sm font-medium text-lime-200">
                <Sparkles size={16} />
                {hero.eyebrow}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {coach.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">{coach.intro}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {specialties.map((item) => (
                  <span key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">
                    {item.title}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-3 font-semibold text-zinc-950 hover:bg-lime-200"
                  href="#contact"
                >
                  {coach.primaryCta}
                  <ArrowRight size={18} />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white hover:border-white/40"
                  href="#pricing"
                >
                  {coach.secondaryCta}
                </a>
              </div>

            </div>

            <div className="grid gap-3 lg:self-start">
              <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 md:min-h-[340px] lg:min-h-[360px]">
                {media.heroSrc && (
                  <img
                    className="absolute inset-0 h-full w-full object-contain"
                    src={media.heroSrc}
                    alt={media.heroAlt}
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),transparent_46%),radial-gradient(circle_at_76%_28%,rgba(132,204,22,0.14),transparent_32%)]" />
              </div>
              <div className="rounded-lg border border-white/10 bg-zinc-950/84 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-lime-200">{hero.mediaLabel}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{hero.mediaTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{hero.mediaBody}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {hero.mediaStats.map((item) => (
                    <div key={item.label} className="rounded-lg bg-white/[0.06] p-3">
                      <strong className="block text-xl text-white">{item.value}</strong>
                      <span className="text-xs text-zinc-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-start-1 lg:row-start-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <strong className="block text-2xl text-white md:text-3xl">{item.value}</strong>
                  <span className="mt-1 block text-sm text-zinc-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specialties" className="border-y border-white/10 bg-white py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader eyebrow={sectionCopy.specialties.eyebrow} title={sectionCopy.specialties.title} />
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {specialties.map((item) => (
                <article key={item.title} className="rounded-lg border border-zinc-200 p-6">
                  <Target className="text-rose-500" size={22} />
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="bg-zinc-100 py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <SectionHeader eyebrow={sectionCopy.clients.eyebrow} title={sectionCopy.clients.title}>
              <p>{about.body}</p>
            </SectionHeader>
            <div className="grid gap-3 sm:grid-cols-2">
              {targetClients.map((item) => (
                <p key={item} className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-zinc-700 shadow-sm">
                  <Check className="mt-0.5 shrink-0 text-rose-500" size={18} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <SectionHeader eyebrow={about.eyebrow} title={about.title} />
              <div className="mt-7 grid gap-3">
                {about.highlights.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-zinc-700">
                    <ShieldCheck className="text-lime-600" size={20} />
                    {item}
                  </p>
                ))}
              </div>
              {media.trainingSrc && (
                <div className="mt-7 rounded-lg border border-zinc-800 bg-zinc-950 p-2">
                  <img
                    className="aspect-square w-full rounded-md object-contain"
                    src={media.trainingSrc}
                    alt={media.trainingAlt}
                  />
                </div>
              )}
            </div>
            <div id="method" className="rounded-lg bg-zinc-950 p-6 text-white md:p-8">
              <SectionHeader eyebrow={philosophy.eyebrow} title={philosophy.title} dark />
              <div className="mt-7 grid gap-4">
                {philosophy.points.map((point) => (
                  <article key={point.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-zinc-950 py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader eyebrow={sectionCopy.services.eyebrow} title={sectionCopy.services.title} dark />
            <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{service.detail}</p>
                  <div className="mt-6 grid gap-3">
                    {service.includes.map((item) => (
                      <p key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                        <Check className="text-lime-300" size={18} />
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader eyebrow={sectionCopy.pricing.eyebrow} title={sectionCopy.pricing.title} />
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {pricing.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    plan.featured
                      ? 'rounded-lg border-2 border-zinc-950 bg-zinc-950 p-6 text-white shadow-xl'
                      : 'rounded-lg border border-zinc-200 p-6'
                  }
                >
                  <p className={plan.featured ? 'text-sm font-semibold text-lime-200' : 'text-sm font-semibold text-rose-600'}>
                    {plan.name}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">{plan.price}</h3>
                  <p className={plan.featured ? 'mt-3 leading-7 text-zinc-300' : 'mt-3 leading-7 text-zinc-600'}>
                    {plan.description}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {plan.features.map((item) => (
                      <p key={item} className={plan.featured ? 'flex items-center gap-3 text-sm text-zinc-200' : 'flex items-center gap-3 text-sm text-zinc-700'}>
                        <Check className={plan.featured ? 'text-lime-300' : 'text-rose-500'} size={18} />
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="bg-zinc-100 py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader eyebrow={sectionCopy.results.eyebrow} title={sectionCopy.results.title} />
            {media.progressSrc && (
              <img
                className="mt-9 aspect-[3/2] w-full rounded-lg bg-white object-contain shadow-sm"
                src={media.progressSrc}
                alt={media.resultAlt}
              />
            )}
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {results.map((item) => (
                <article key={item.name} className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-rose-600">{item.result}</p>
                  <blockquote className="mt-4 text-lg leading-8 text-zinc-900">"{item.quote}"</blockquote>
                  <p className="mt-5 text-sm font-semibold text-zinc-950">{item.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.profile}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-14 text-zinc-950 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionHeader eyebrow={contact.eyebrow} title={contact.title}>
                <p>{contact.intro}</p>
              </SectionHeader>
              <div className="mt-7 grid gap-4 text-zinc-700">
                <p className="flex items-center gap-3">
                  <MapPin size={20} />
                  {contact.location}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  {contact.phone}
                </p>
                <button
                  className="flex w-fit items-center gap-3 rounded-lg border border-zinc-200 px-4 py-3 text-left hover:border-zinc-400"
                  type="button"
                  onClick={copyWechat}
                >
                  <Clipboard size={20} />
                  {contact.channelLabel}: {contact.wechat}
                  <span className="text-sm font-semibold text-rose-600">{copied ? contact.copied : contact.cta}</span>
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a key={item.label} className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:border-zinc-500" href={item.href}>
                    <MessageCircle size={16} />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <form className="rounded-lg border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold">{formCopy.title}</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  {formCopy.nameLabel}
                  <input className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900" />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  {formCopy.contactLabel}
                  <input className="rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-medium">
                {formCopy.goalLabel}
                <textarea
                  className="min-h-32 rounded-lg border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-900"
                  placeholder={formCopy.goalPlaceholder}
                />
              </label>
              <button
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 font-semibold text-white hover:bg-zinc-800"
                type="button"
              >
                {formCopy.button}
                <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-sm text-zinc-500">{formCopy.helper}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 px-5 py-8 text-sm text-zinc-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>{brand.name}</p>
          <p>{brand.tagline}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
