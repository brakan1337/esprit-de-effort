import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Défis — L'Esprit de l'Effort",
  description:
    "Découvrez les défis, expéditions et productions de L'Esprit de l'Effort.",
};

const categories = [
  {
    tag: "Endurance Extrême",
    color: "text-accent",
    defis: [
      {
        title: "Double Ironman",
        subtitle: "7,6 km nage · 360 km vélo · 84,4 km course",
        status: "Projet phare",
        desc: "Le Double Ironman représente le double de la distance légendaire de l'Ironman. Une épreuve qui teste les limites absolues du corps et de l'esprit sur plus de 24 heures d'effort.",
        tags: ["Triathlon", "Ultra-distance", "Endurance"],
      },
      {
        title: "Ultra-trails",
        subtitle: "Courses de montagne longue distance",
        status: "Activité régulière",
        desc: "Des trails de 80 à 200 km en montagne, souvent en autonomie et de nuit. Chaque course est une nouvelle aventure dans des paysages extraordinaires.",
        tags: ["Trail", "Montagne", "Nuit"],
      },
    ],
  },
  {
    tag: "Expéditions",
    color: "text-blue-400",
    defis: [
      {
        title: "Expéditions sportives",
        subtitle: "Aventures longue distance en autonomie",
        status: "En développement",
        desc: "Traversées, raids en autonomie et expéditions dans des zones reculées. L'association soutient la préparation technique, logistique et financière de ces aventures humaines.",
        tags: ["Autonomie", "Nature", "Aventure"],
      },
    ],
  },
  {
    tag: "Productions",
    color: "text-purple-400",
    defis: [
      {
        title: "Films documentaires",
        subtitle: "Récits de défis et d'aventures humaines",
        status: "En cours",
        desc: "Capturer l'essence brute de l'effort extrême. Nos films documentaires plongent le spectateur au cœur de ces aventures, témoignant de l'humain derrière l'athlète.",
        tags: ["Cinéma", "Documentaire", "Production"],
      },
      {
        title: "Livres & Photographies",
        subtitle: "L'aventure racontée et photographiée",
        status: "En développement",
        desc: "Nos récits écrits et photographies immortalisent ces moments où l'homme dépasse ses limites. Un support durable pour transmettre ces expériences à un large public.",
        tags: ["Édition", "Photo", "Littérature"],
      },
    ],
  },
];

export default function Defis() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Ce qu&apos;on repousse</p>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Nos Défis
          </h1>
          <div className="w-24 h-1 bg-accent mb-8" />
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Endurance extrême, expéditions hors du commun, films documentaires :
            voici les terrains sur lesquels L&apos;Esprit de l&apos;Effort agit
            et crée.
          </p>
        </div>
      </section>

      {/* Défis by category */}
      {categories.map((cat, ci) => (
        <section
          key={cat.tag}
          className={`py-20 md:py-28 border-b border-white/5 ${ci % 2 === 1 ? "bg-bg-secondary" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <p className={`section-label ${cat.color} mb-12`}>{cat.tag}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.defis.map((d) => (
                <article key={d.title} className="card group hover:border-white/10 transition-colors duration-300 border border-white/5">
                  <div className="flex items-start justify-between mb-6 gap-4">
                    <div>
                      <h2 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-accent transition-colors duration-200">
                        {d.title}
                      </h2>
                      <p className="text-white/30 text-sm mt-1">{d.subtitle}</p>
                    </div>
                    <span className="shrink-0 text-xs font-bold px-3 py-1 border border-white/10 text-white/40 whitespace-nowrap">
                      {d.status}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{d.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-accent/20 bg-accent/5 p-12 md:p-16 text-center">
            <p className="section-label">Ton prochain défi</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Tu as un projet d&apos;aventure ?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              L&apos;association peut t&apos;accompagner dans ta préparation,
              soutenir ton projet logistiquement et financièrement, ou
              co-produire un documentaire autour de ton aventure.
            </p>
            <Link href="/contact" className="btn-primary">
              Parle-nous de ton projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
