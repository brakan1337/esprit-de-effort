import Link from "next/link";

const pillars = [
  {
    icon: "⚡",
    title: "Endurance Extrême",
    desc: "Double Ironman, ultra-trails, traversées : nous poussons le corps et l'esprit là où peu osent s'aventurer.",
  },
  {
    icon: "🧭",
    title: "Expéditions",
    desc: "Préparation, logistique et soutien pour des aventures humaines hors du commun, en France et à l'étranger.",
  },
  {
    icon: "🎬",
    title: "Films & Documentaires",
    desc: "Capturer l'essence du dépassement de soi. Nos réalisations témoignent des histoires qui méritent d'être racontées.",
  },
  {
    icon: "📣",
    title: "Événements",
    desc: "Rassemblements, compétitions, conférences : créer une communauté autour des valeurs de l'effort et de l'aventure.",
  },
];

const stats = [
  { value: "2026", label: "Année de création" },
  { value: "64", label: "Pyrénées-Atlantiques" },
  { value: "∞", label: "Possibilités" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="section-label mb-8">Association loi 1901 · Boucau</p>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tight leading-none mb-6">
            <span className="text-white">L&apos;Esprit</span>
            <br />
            <span className="text-accent">de l&apos;Effort</span>
          </h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-8" />

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Dépasse tes limites. Vis l&apos;essentiel.
            <br />
            Sports d&apos;endurance extrêmes · Expéditions · Films
            documentaires
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/defis" className="btn-primary">
              Nos Défis
            </Link>
            <Link href="/association" className="btn-outline">
              Découvrir l&apos;association
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs tracking-widest uppercase">Défiler</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 divide-x divide-white/5">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-4 px-6">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                {s.value}
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="section-label">Notre mission</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Ce que nous faisons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card bg-[#080808] hover:bg-bg-card transition-colors duration-300 group"
              >
                <span className="text-4xl block mb-6">{p.icon}</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 md:py-32 bg-bg-secondary border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label">Notre raison d&apos;être</p>
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            &ldquo;Promouvoir le dépassement de soi, l&apos;engagement et
            l&apos;aventure à travers la pratique de sports d&apos;endurance, de
            disciplines extrêmes ou d&apos;expéditions.&rdquo;
          </blockquote>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <Link href="/association" className="btn-primary">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-accent/20 bg-accent/5 p-12 md:p-16 text-center">
            <p className="section-label">Rejoins le mouvement</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Prêt à repousser tes limites ?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Une question sur nos activités, un défi à relever ensemble, un
              projet à co-produire ? Contacte-nous.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
