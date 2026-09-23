import { useState } from 'react'

const HERO_IMG = '/fotky/hero-menzi-muck-jizera.webp'
const RIVERBED_IMG = '/fotky/koryto-cisteni-reky.webp'
const ABOUT_IMG = '/fotky/o-mne-tomas-martinec-technika.webp'
const CONTACT_EMAIL = 'tmstavby@seznam.cz'
const ADDRESS_QUERY = 'Na+V%C3%A1pence+765,+468+22+%C5%BDelezn%C3%BD+Brod'
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`
const MAPS_EMBED = `https://www.google.com/maps?q=${ADDRESS_QUERY}&z=14&output=embed`

const machines = [
  {
    img: '/fotky/technika-menzi-muck-a61.webp',
    name: 'Menzi Muck A61',
    type: 'Kráčivé rypadlo',
    desc: 'Rypadlo pro svahy, koryta řek a místa, kam se běžná technika nedostane. Pracuje ve vodě, na strmém svahu i v úzkém profilu.',
  },
  {
    img: '/fotky/technika-sany-sy50u.webp',
    name: 'Sany SY50U',
    type: 'Minirypadlo',
    desc: 'Kompaktní pásové minirypadlo pro výkopy základů, přípojek a inženýrských sítí i ve stísněných prostorech u domu.',
  },
  {
    img: '/fotky/technika-freza-na-skalu.webp',
    name: 'Skalní fréza a drapák',
    type: 'Příslušenství',
    desc: 'Frézování skály a betonu bez trhacích prací, drapák na skládání kamenných zdí a manipulaci s kamenem.',
  },
]

const jobs = [
  'Vykopat rýhu pro kabely',
  'Srovnat zahradu',
  'Vykopat jímku',
  'Vykopat vodovod nebo přípojku',
  'Skrýt ornici',
  'Vysvahovat násyp',
  'Vyčistit příkop',
  'Naložit paletu cementu, dlažby nebo tvárnic',
  'Vyprostit uvízlou techniku',
  'Naložit zeminu na minidempr',
  'Rozprostřít beton u finišeru',
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 26h28M6 26V14l10-10 10 10v12" />
        <rect x="12" y="18" width="8" height="8" />
        <path d="M4 10l2-4h20l2 4" />
      </svg>
    ),
    title: 'Zemní a výkopové práce',
    desc: 'Výkopy pro základy, sítě, jímky, rýhy. Minirypadlo i těžká technika.',
    accent: 'clay',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="4" width="24" height="18" rx="2" />
        <path d="M4 14h24M12 4v18M4 22l4 6h16l4-6" />
      </svg>
    ),
    title: 'Zakládání staveb',
    desc: 'Příprava a výkopy pro základové desky, pásy a patky.',
    accent: 'clay',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M4 28V8l6-6h12l6 6v20" />
        <path d="M2 28h28M10 28V16h12v12" />
      </svg>
    ),
    title: 'Opěrné zdi',
    desc: 'Stavba opěrných a zárubních zdí, terénní úpravy svahů.',
    accent: 'clay',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M4 28h24M4 20h24M16 4v24M8 4v8M24 4v8" />
        <circle cx="8" cy="16" r="3" />
        <circle cx="24" cy="16" r="3" />
      </svg>
    ),
    title: 'Inženýrské sítě',
    desc: 'Výkopy a pokládka vodovodů, kanalizací, přípojek.',
    accent: 'clay',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="16" cy="10" r="4" />
        <path d="M10 10H4l-2 8h10M22 10h6l2 8H20M8 18l4 10h8l4-10" />
      </svg>
    ),
    title: 'Demoliční práce',
    desc: 'Bourání staveb, základů, zdí. Odvoz suti.',
    accent: 'clay',
  },
]

const galleryItems = [
  { img: '/fotky/realizace-cisteni-koryta-reky.webp', caption: 'Čištění koryta řeky' },
  { img: '/fotky/realizace-kamenna-operna-zed.webp', caption: 'Kamenná opěrná zeď' },
  { img: '/fotky/realizace-vykop-site-podel-silnice.webp', caption: 'Výkop pro inženýrské sítě podél silnice' },
  { img: '/fotky/realizace-cisteni-rybnika.webp', caption: 'Odbahnění rybníka' },
  { img: '/fotky/realizace-skladana-kamenna-zed.webp', caption: 'Skládaná kamenná zeď u cesty' },
  { img: '/fotky/realizace-frezovani-skaly.webp', caption: 'Frézování skály v příkopu' },
  { img: '/fotky/realizace-svah-nad-silnici.webp', caption: 'Terénní úpravy svahu nad silnicí' },
  { img: '/fotky/realizace-operna-zed-bloky.webp', caption: 'Opěrná zeď z kamenných bloků' },
  { img: '/fotky/realizace-pokladka-potrubi.webp', caption: 'Pokládka potrubí' },
  { img: '/fotky/realizace-vycistene-koryto-potoka.webp', caption: 'Vyčištěné koryto potoka' },
  { img: '/fotky/realizace-zajisteni-svahu.webp', caption: 'Zajištění svahu' },
  { img: '/fotky/realizace-nakladka-zeminy.webp', caption: 'Nakládka zeminy' },
  { img: '/fotky/realizace-kamenna-zed-drapak.webp', caption: 'Stavba kamenné zdi drapákem' },
  { img: '/fotky/realizace-uprava-brehu.webp', caption: 'Úprava břehu' },
  { img: '/fotky/technika-menzi-muck-a61-svah.webp', caption: 'Menzi Muck na svahu' },
]

const regions = [
  'Železný Brod', 'Semily', 'Jablonec nad Nisou', 'Turnov', 'Tanvald', 'Liberec',
  'Jilemnice', 'Lomnice nad Popelkou', 'Malá Skála', 'Jizerské hory', 'Český ráj', 'Krkonoše',
]

const faq = [
  {
    q: 'Jak rychle dokážete přijet?',
    a: 'U havárií zpravidla tentýž den, kdykoliv včetně noci a víkendů. Zavolejte na 737 846 426 a řeknu vám rovnou, kdy můžu být na místě.',
  },
  {
    q: 'Kolik stojí zemní práce?',
    a: 'Cena závisí na druhu práce, terénu a rozsahu. Po telefonu nebo po prohlídce místa dostanete nezávaznou cenovou nabídku bez skrytých položek.',
  },
  {
    q: 'Kde všude pracujete?',
    a: 'Sídlím v Železném Brodě a pokrývám celý Liberecký kraj: Semily, Jablonec nad Nisou, Turnov, Tanvald, Liberec, Jilemnice a okolí Jizerských hor a Českého ráje.',
  },
  {
    q: 'Dostane se vaše technika i do svahu nebo do vody?',
    a: 'Ano. Kráčivé rypadlo Menzi Muck A61 pracuje ve strmém svahu, v korytě řeky i v bahně rybníka. Minirypadlo Sany SY50U se vejde na zahradu i do stísněných míst u domu.',
  },
  {
    q: 'Děláte i malé zakázky pro soukromníky?',
    a: 'Ano. Výkop pro přípojku nebo jímku, srovnání zahrady, vyčištění příkopu nebo naložení palety jsou běžné zakázky. Nemusíte mít velkou stavbu.',
  },
  {
    q: 'Umíte i bourání a odvoz suti?',
    a: 'Ano, demolice menších staveb, základů a zdí včetně odvozu suti. Skalní frézou zvládnu i skálu a beton bez trhacích prací.',
  },
]

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

/** srcset for /fotky/x.webp using the 800 px variant generated alongside it. */
function srcSetFor(src: string) {
  return `${src.replace('.webp', '-800.webp')} 800w, ${src} 1600w`
}

/** Brand mark: excavator over water — earth and river work from one firm. Same geometry as /public/logo-mark.svg. */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      <rect width="64" height="64" rx="14" fill="#C4762E" />
      <rect x="12" y="38" width="24" height="8" rx="4" fill="#F4F2E9" />
      <rect x="14" y="27" width="14" height="12" rx="2" fill="#F4F2E9" />
      <path d="M25 31 L37 15 L49 27" fill="none" stroke="#201F19" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 26 L56 26 L53 37 L44 35 Z" fill="#201F19" />
      <path d="M10 54 Q16 50 22 54 T34 54 T46 54 T58 54" fill="none" stroke="#201F19" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="inline-flex items-center" style={{ gap: Math.round(size * 0.3) }}>
      <LogoMark size={size} />
      <span className="flex flex-col leading-none" style={{ fontFamily: 'Archivo, sans-serif' }}>
        <span className="font-black tracking-tight" style={{ color: '#EFEDE4', fontSize: size * 0.5, letterSpacing: '-0.01em' }}>
          TM <span style={{ color: '#C4762E' }}>STAVBY</span>
        </span>
        <span className="font-medium tracking-wide" style={{ color: '#EFEDE499', fontSize: size * 0.3, marginTop: 3 }}>Tomáš Martinec</span>
      </span>
    </span>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ jmeno: '', telefon: '', popis: '' })
  const [sent, setSent] = useState(false)
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = `Poptávka z webu – ${form.jmeno}`
    const body = [`Jméno: ${form.jmeno}`, `Telefon: ${form.telefon}`, '', 'Popis zakázky:', form.popis].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="font-body min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: '#201F19ee', backdropFilter: 'blur(8px)', borderBottom: '1px solid #EFEDE411' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" title="TM Stavby – domů">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hlavní navigace">
            {[
              ['Zemní práce', '#sluzby'],
              ['Koryta řek', '#reka'],
              ['Technika', '#technika'],
              ['O mně', '#o-mne'],
              ['Kontakt', '#kontakt'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium transition-colors hover:text-[#C4762E]" style={{ color: '#EFEDE4cc' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + phone */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:737846426" className="text-sm font-semibold tracking-wide transition-opacity hover:opacity-80" style={{ color: '#EFEDE4' }}>
              737 846 426
            </a>
            <a href="#kontakt" className="px-4 py-2 rounded text-sm font-bold transition-all hover:brightness-110" style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
              Nezávazná poptávka
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-6 h-0.5 transition-all" style={{ background: '#EFEDE4', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }} />
            <span className="block w-6 h-0.5 transition-all" style={{ background: '#EFEDE4', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all" style={{ background: '#EFEDE4', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : '' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: '#201F19' }}>
            {[['Zemní práce', '#sluzby'], ['Koryta řek', '#reka'], ['Technika', '#technika'], ['O mně', '#o-mne'], ['Kontakt', '#kontakt']].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="text-base font-medium" style={{ color: '#EFEDE4' }}>{l}</a>
            ))}
            <a href="tel:737846426" className="text-base font-semibold" style={{ color: '#C4762E' }}>737 846 426</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="inline-block text-center px-6 py-3 rounded font-bold" style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
              Nezávazná poptávka
            </a>
          </div>
        )}
      </header>

      <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: 64 }}>
        <div className="absolute inset-0" style={{ background: '#201F19' }}>
          <img
            src={HERO_IMG}
            srcSet={srcSetFor(HERO_IMG)}
            sizes="100vw"
            alt="Kráčivé rypadlo Menzi Muck při čištění koryta Jizery v Železném Brodě"
            className="w-full h-full object-cover opacity-50"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #201F19bb 0%, #201F1944 40%, #201F19cc 100%)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="eyebrow mb-6" style={{ color: '#C4762E' }}>
            ✦ K DISPOZICI NONSTOP ✦
          </div>
          <h1 className="mb-6 leading-tight" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: '#EFEDE4' }}>
            Zemní práce, demolice<br />
            a čištění koryt —<br />
            <span style={{ color: '#C4762E' }}>kdykoliv je potřebujete</span>
          </h1>
          <p className="mx-auto mb-10 leading-relaxed" style={{ maxWidth: 620, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#EFEDE4bb' }}>
            Výkopové práce, inženýrské sítě, demolice a vybírání koryt řek, rybníků a náhonů v Železném Brodě a okolí Jizerských hor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#kontakt" className="px-8 py-4 rounded font-bold text-base transition-all hover:brightness-110 active:scale-95" style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
              Nezávazná poptávka
            </a>
            <a href="tel:737846426" className="px-8 py-4 rounded font-bold text-base transition-all hover:bg-white/10 border" style={{ color: '#EFEDE4', borderColor: '#EFEDE444', fontFamily: 'Archivo, sans-serif' }}>
              Zavolat: 737 846 426
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#EFEDE4', fontSize: '0.65rem' }}>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="#EFEDE4" strokeWidth="1.5">
            <path d="M8 4v16M2 14l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: '#F4F2E9', color: '#1E1D17' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-8 h-8">
                    <circle cx="16" cy="16" r="13" />
                    <path d="M16 8v8l5 3" />
                  </svg>
                ),
                label: 'Nonstop dostupnost',
                desc: 'Havárie nečekají na ráno. Volejte kdykoliv, ozvu se co nejdřív.',
                color: '#C4762E',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-8 h-8">
                    <path d="M4 28V20c0-4 3-7 7-7h10c4 0 7 3 7 7v8" />
                    <path d="M16 13V4M10 8l6-4 6 4" />
                    <path d="M2 28h28" />
                  </svg>
                ),
                label: 'Zemní práce i čištění koryt řek',
                desc: 'Výkopy, demolice i vybírání koryt — v jedněch rukách.',
                color: '#2E6B7A',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-8 h-8">
                    <path d="M16 4C10 4 4 10 4 16s6 12 12 12 12-6 12-12" />
                    <path d="M22 4l6 6-6 6" />
                    <path d="M28 10H16" />
                  </svg>
                ),
                label: 'Železný Brod a okolí Jizerských hor',
                desc: 'Jsem místní a terén znám. Pokrývám celý Liberecký kraj.',
                color: '#C4762E',
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: item.color + '18', color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.05rem' }}>{item.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#1E1D17bb' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS SECTION — signature plain-language list */}
      <section id="co-delam" style={{ background: '#201F19' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#C4762E' }}>CO PRO VÁS UDĚLÁM</div>
          <h2 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#EFEDE4', maxWidth: 700 }}>
            Popište, co potřebujete —<br />
            <span style={{ color: '#C4762E' }}>pravděpodobně už jsem to dělal</span>
          </h2>
          <p className="mb-16 leading-relaxed" style={{ color: '#EFEDE4aa', maxWidth: 600, fontSize: '1.05rem' }}>
            Místo obecných kategorií — konkrétní práce, tak jak je popisují lidi. Hledáte svou zakázku? Nejspíš ji tu najdete.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-lg transition-all hover:translate-x-1"
                style={{ border: '1px solid #EFEDE411', background: '#EFEDE408' }}
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full" style={{ background: '#C4762E' }} />
                <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#EFEDE4' }}>
                  {job}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8" style={{ borderTop: '1px solid #EFEDE415' }}>
            <p className="text-sm italic" style={{ color: '#EFEDE4aa' }}>
              Máte zakázku, která tu není? Zavolejte — pokud mám techniku a čas, vezmu to.
            </p>
          </div>
        </div>
      </section>

      {/* RIVERBED SPOTLIGHT */}
      <section id="reka" style={{ background: '#2E6B7A', color: '#F4F2E9' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-4" style={{ color: '#F4F2E9', letterSpacing: '0.18em', fontSize: '0.7rem', fontFamily: 'Archivo, sans-serif', fontWeight: 700, textTransform: 'uppercase' }}>
                ČIŠTĚNÍ KORYT ŘEK A RYBNÍKŮ
              </div>
              <h2 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F4F2E9', lineHeight: 1.15 }}>
                Vybírání koryt řek,<br />rybníků a náhonů
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#F4F2E9ee', fontSize: '1.05rem' }}>
                Žiji a pracuji přímo na Jizeře — čištění koryt je zakázka, které rozumím terénně i technicky. Odstraňuji sedimenty, nánosy a porost z říčních koryt, rybníků a mlýnských náhonů v celém Libereckém kraji.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#F4F2E9ee', fontSize: '1rem' }}>
                Železný Brod stojí přímo na Jizeře od roku 1352. Práce na vodních tocích tu není výjimka — je to každodenní realita.
              </p>
              <a href="tel:737846426" className="inline-flex items-center gap-3 px-6 py-3 rounded font-bold transition-all hover:brightness-110" style={{ background: '#F4F2E9', color: '#2E6B7A', fontFamily: 'Archivo, sans-serif' }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                737 846 426
              </a>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #F4F2E930' }}>
                <img
                  src={RIVERBED_IMG}
                  srcSet={srcSetFor(RIVERBED_IMG)}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  alt="Čištění koryta řeky kráčivým rypadlem Menzi Muck"
                  className="w-full object-cover"
                  style={{ height: 380 }}
                />
                <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(to top, #2E6B7Acc 0%, transparent 50%)' }} />
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-lg" style={{ background: '#245869', border: '1px solid #F4F2E920' }}>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#F4F2E9dd' }}>Specialita</div>
                <div className="font-bold" style={{ fontFamily: 'Archivo, sans-serif', color: '#F4F2E9' }}>Jizera a okolí</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="sluzby" style={{ background: '#F4F2E9', color: '#1E1D17' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#A05C1C' }}>ZEMNÍ PRÁCE</div>
          <h2 className="mb-16" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1E1D17' }}>
            Od výkopu po demolici
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg group" style={{ background: '#201F19', border: '1px solid #C4762E30' }}>
                <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center transition-colors" style={{ background: '#C4762E18', color: '#C4762E' }}>
                  {s.icon}
                </div>
                <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#EFEDE4aa' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NONSTOP SECTION */}
      <section style={{ background: '#201F19' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-4" style={{ color: '#C4762E' }}>PROČ NONSTOP</div>
              <h2 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#EFEDE4', lineHeight: 1.2 }}>
                Havárie a naléhavé práce<br />
                <span style={{ color: '#C4762E' }}>nečekají na ráno</span>
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: '#EFEDE4aa', fontSize: '1.05rem' }}>
                Prasklé potrubí v noci, podmáčený sklep před bouřkou, zaseknutá technika na stavbě — to jsou situace, kdy potřebujete někoho, kdo zvedne telefon. Já zvednu.
              </p>
              <p className="leading-relaxed" style={{ color: '#EFEDE4aa', fontSize: '1rem' }}>
                Nonstop dostupnost není jen fráze. Kdykoli zavoláte, řeknu vám na rovinu, zda a jak rychle se dostanu na místo.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { time: 'V noci', desc: 'Havárie vodovodu nebo kanalizace nečeká do rána.' },
                { time: 'O víkendu', desc: 'Prasknutá přípojka nebo podmáčené základy? Přijedu.' },
                { time: 'Na svátky', desc: 'Technická nouze se neřídí pracovním kalendářem.' },
              ].map((item) => (
                <div key={item.time} className="flex gap-5 items-start p-5 rounded-xl" style={{ background: '#EFEDE408', border: '1px solid #C4762E30' }}>
                  <div className="flex-shrink-0 px-3 py-1 rounded font-black text-sm" style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
                    {item.time}
                  </div>
                  <p style={{ color: '#EFEDE4bb', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIKA */}
      <section id="technika" style={{ background: '#161510' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#C4762E' }}>MOJE TECHNIKA</div>
          <h2 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#EFEDE4', maxWidth: 700 }}>
            Vlastní stroje,<br />
            <span style={{ color: '#C4762E' }}>které se dostanou všude</span>
          </h2>
          <p className="mb-14 leading-relaxed" style={{ color: '#EFEDE4aa', maxWidth: 600, fontSize: '1.05rem' }}>
            Kráčivé rypadlo do svahů a do vody, minirypadlo na výkopy u domu a příslušenství na skálu i kámen. Žádný pronájem, žádné čekání na cizí techniku.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {machines.map((m) => (
              <div key={m.name} className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1" style={{ background: '#201F19', border: '1px solid #C4762E30' }}>
                <div style={{ aspectRatio: '4/3' }}>
                  <img src={m.img} srcSet={srcSetFor(m.img)} sizes="(max-width: 768px) 100vw, 33vw" alt={`${m.name} – ${m.type}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#C4762E', fontFamily: 'Archivo, sans-serif' }}>{m.type}</div>
                  <h3 className="font-black text-xl mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4' }}>{m.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#EFEDE4aa' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="o-mne" style={{ background: '#F4F2E9', color: '#1E1D17' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden" style={{ border: '3px solid #C4762E' }}>
                <img src={ABOUT_IMG} srcSet={srcSetFor(ABOUT_IMG)} sizes="(max-width: 1024px) 100vw, 50vw" alt="Tomáš Martinec se svou technikou – Menzi Muck a Sany" className="w-full object-cover" style={{ height: 420 }} loading="lazy" decoding="async" />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, #1E1D17aa 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-5 -right-5 p-4 rounded-xl" style={{ background: '#201F19', border: '2px solid #C4762E' }}>
                <div className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: '#C4762E', fontFamily: 'Archivo, sans-serif' }}>IČ</div>
                <div className="font-black text-lg" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4' }}>46472002</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="eyebrow mb-4" style={{ color: '#A05C1C' }}>O MNĚ</div>
              <h2 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#1E1D17' }}>
                Tomáš Martinec —<br />osobně a vlastní technikou
              </h2>
              <div className="space-y-4" style={{ color: '#1E1D17bb', fontSize: '1.05rem', lineHeight: 1.65 }}>
                <p>
                  Podnikám jako fyzická osoba od roku 1992. Každou zakázku dělám sám nebo s pár stálými lidmi, vlastní technikou — žádné zprostředkovávání, žádné překvapení s cenou.
                </p>
                <p>
                  Beru jak rutinní práce (srovnat zahradu, vykopat rýhu), tak zakázky, které jiní odmítnou — vyprostit uvízlé rypadlo, vyčistit zarůstající mlýnský náhon, nebo rychle reagovat na havárii v noci.
                </p>
                <p>
                  Sídlím v Železném Brodě na Jizeře. Pokrývám celý Liberecký kraj.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:737846426" className="flex items-center gap-2 px-6 py-3 rounded font-bold transition-all hover:brightness-110" style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  737 846 426
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 px-6 py-3 rounded font-bold transition-all hover:bg-gray-200" style={{ background: '#1E1D1715', color: '#1E1D17', fontFamily: 'Archivo, sans-serif' }}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section id="kde-pusobim" style={{ background: '#2E6B7A', color: '#F4F2E9' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div>
              <div className="eyebrow mb-3" style={{ color: '#F4F2E9' }}>KDE PŮSOBÍM</div>
              <h2 className="mb-3" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#F4F2E9', lineHeight: 1.15 }}>
                Zemní práce v Železném Brodě<br />a celém Libereckém kraji
              </h2>
              <p className="leading-relaxed" style={{ color: '#F4F2E9ee', fontSize: '1rem' }}>
                Domácí terén jsou Jizerské hory a Český ráj. Za zajímavou zakázkou vyjedu kamkoliv v kraji.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r} className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: '#F4F2E915', border: '1px solid #F4F2E930', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: '#201F19' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#C4762E' }}>REALIZACE</div>
          <h2 className="mb-12" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#EFEDE4' }}>
            Ukázky práce
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/3' }}
                onMouseEnter={() => setHoveredGallery(i)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img src={item.img} srcSet={srcSetFor(item.img)} sizes="(max-width: 768px) 50vw, 33vw" alt={item.caption} className="w-full h-full object-cover transition-transform duration-500" style={{ transform: hoveredGallery === i ? 'scale(1.05)' : 'scale(1)' }} loading="lazy" decoding="async" />
                <div
                  className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, #201F19dd, transparent 55%)', opacity: hoveredGallery === i ? 1 : 0.85 }}
                >
                  <span className="text-sm font-semibold" style={{ color: '#EFEDE4', fontFamily: 'Archivo, sans-serif' }}>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#201F19' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#C4762E' }}>ČASTÉ DOTAZY</div>
          <h2 className="mb-12" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#EFEDE4' }}>
            Na co se lidé ptají
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((f) => (
              <details key={f.q} className="group rounded-xl" style={{ background: '#EFEDE408', border: '1px solid #C4762E30' }}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 font-bold" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4', fontSize: '1.05rem' }}>
                  <span>{f.q}</span>
                  <span className="flex-shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: '#C4762E' }} aria-hidden="true">+</span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed" style={{ color: '#EFEDE4bb', fontSize: '0.97rem' }}>{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" style={{ background: '#F4F2E9', color: '#1E1D17' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="eyebrow mb-4" style={{ color: '#A05C1C' }}>KONTAKT</div>
          <h2 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1E1D17', maxWidth: 700 }}>
            Potřebujete vykopat, vyčistit nebo zbourat —<br />
            <span style={{ color: '#C4762E' }}>kdykoliv?</span>
          </h2>
          <p className="mb-12 text-lg" style={{ color: '#1E1D17bb', maxWidth: 520 }}>
            Zavolejte nebo napište. Odpovídám nonstop.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              {/* Big phone */}
              <a href="tel:737846426" className="group flex items-center gap-4 p-6 rounded-2xl transition-all hover:brightness-105" style={{ background: '#C4762E' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F4F2E930' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14l-.08 2.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold tracking-widest mb-1" style={{ color: '#F4F2E9aa' }}>Zavolat</div>
                  <div className="font-black text-2xl" style={{ fontFamily: 'Archivo, sans-serif', color: '#F4F2E9' }}>737 846 426</div>
                </div>
              </a>

              {/* Details */}
              <div className="space-y-4">
                {[
                  { label: 'E-mail', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, external: false },
                  { label: 'Adresa', value: 'Na Vápence 765\n468 22 Železný Brod', href: MAPS_LINK, external: true },
                  { label: 'Dostupnost', value: 'Nonstop — 24/7/365', href: undefined, external: false },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-20 flex-shrink-0 text-xs uppercase font-semibold tracking-widest pt-0.5" style={{ color: '#1E1D1766', fontFamily: 'Archivo, sans-serif' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="font-semibold hover:underline whitespace-pre-line" style={{ color: '#1E1D17' }}>{item.value}</a>
                    ) : (
                      <span className="font-semibold whitespace-pre-line" style={{ color: '#1E1D17' }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #1E1D1720', height: 240 }}>
                <iframe
                  title="Mapa – Na Vápence 765, Železný Brod"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="h-full flex items-center justify-center p-12 rounded-2xl text-center" style={{ background: '#201F19' }}>
                  <div>
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="font-black text-xl mb-3" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4' }}>Poptávka připravena k odeslání</h3>
                    <p className="leading-relaxed" style={{ color: '#EFEDE4aa' }}>
                      Otevřel se váš e-mailový program s předvyplněnou zprávou – stačí ji odeslat.
                      Pokud se nic neotevřelo, napište přímo na{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold" style={{ color: '#C4762E' }}>{CONTACT_EMAIL}</a>
                      {' '}nebo zavolejte na{' '}
                      <a href="tel:737846426" className="font-semibold" style={{ color: '#C4762E' }}>737 846 426</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl space-y-5" style={{ background: '#201F19' }}>
                  <h3 className="font-black text-lg mb-6" style={{ fontFamily: 'Archivo, sans-serif', color: '#EFEDE4' }}>Nezávazná poptávka</h3>
                  {[
                    { id: 'jmeno', label: 'Jméno', type: 'text', placeholder: 'Jan Novák' },
                    { id: 'telefon', label: 'Telefon', type: 'tel', placeholder: '777 000 000' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#EFEDE466', fontFamily: 'Archivo, sans-serif' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(form as any)[field.id]}
                        onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2"
                        style={{ background: '#EFEDE410', border: '1px solid #EFEDE420', color: '#EFEDE4', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#EFEDE466', fontFamily: 'Archivo, sans-serif' }}>
                      Popis zakázky
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Potřebuji vykopat rýhu pro kabel přibližně 30 m, v zahradě..."
                      value={form.popis}
                      onChange={e => setForm(f => ({ ...f, popis: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all"
                      style={{ background: '#EFEDE410', border: '1px solid #EFEDE420', color: '#EFEDE4', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-base transition-all hover:brightness-110 active:scale-95"
                    style={{ background: '#C4762E', color: '#F4F2E9', fontFamily: 'Archivo, sans-serif' }}
                  >
                    Odeslat poptávku
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer style={{ background: '#161510', color: '#EFEDE4', borderTop: '1px solid #EFEDE411' }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="mb-3"><Logo size={40} /></div>
              <div className="text-sm" style={{ color: '#EFEDE466' }}>IČ 46472002 &nbsp;·&nbsp; Na Vápence 765, 468 22 Železný Brod</div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <a href="tel:737846426" className="text-sm font-semibold hover:text-[#C4762E] transition-colors" style={{ color: '#EFEDE4' }}>737 846 426</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-[#C4762E] transition-colors" style={{ color: '#EFEDE466' }}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="mt-8 pt-6 text-xs" style={{ borderTop: '1px solid #EFEDE40a', color: '#EFEDE433' }}>
            © 2026 TM Stavby — Tomáš Martinec. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>

    </div>
  )
}
