import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'Association — L'Esprit de l'Effort",
  description:
    "Découvrez L'Esprit de l'Effort : notre vision, nos valeurs et notre équipe fondatrice.",
};

const values = [
  {
    title: "Dépassement",
    desc: "Se confronter à ses limites réelles pour les repousser. Chaque défi est une occasion d'apprendre qui l'on est vraiment.",
  },
  {
    title: "Authenticité",
    desc: "Vivre des expériences vraies, hors des sentiers battus et des artifices. L'effort brut, sans filtre.",
  },
  {
    title: "Engagement",
    desc: "Tenir ses engagements envers soi-même et envers les autres. Finir ce qu'on a commencé, quoi qu'il arrive.",
  },
  {
    title: "Partage",
    desc: "Transmettre les récits de ces aventures humaines pour inspirer, à travers des films, des livres et des conférences.",
  },
];

const activities = [
  {
    label: "Sports d'endurance",
    items: [
      "Double Ironman et ultra-triathlon",
      "Ultra-trails et courses de montagne",
      "Traversées longue distance",
      "Préparation et entraînement collectif",
    ],
  },
  {
    label: "Expéditions",
    items: [
      "Soutien technique et logistique",
      "Financement de projets d'aventure",
      "Accompagnement de la préparation",
      "Retours d'expérience et partage",
    ],
  },
  {
    label: "Production culturelle",
    items: [
      "Films documentaires",
      "Livres et récits d'aventure",
      "Photographie",
      "Contenus audio-visuels",
    ],
  },
  {
    label: "Événements",
    items: [
      "Rassemblements sportifs",
      "Compétitions et défis",
      "Conférences thématiques",
      "Entraînements collectifs",
    ],
  },
];

export default function Association() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Qui sommes-nous</p>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            L&apos;Association
          </h1>
          <div className="w-24 h-1 bg-accent mb-8" />
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            L&apos;Esprit de l&apos;Effort est une association loi 1901, née en
            avril 2026 à Boucau, dans les Pyrénées-Atlantiques. Elle rassemble
            des personnes animées par la même conviction : l&apos;effort est une
            aventure qui mérite d&apos;être vécue et partagée.
          </p>
        </div>
      </section>

      {/* Object */}
      <section className="py-24 md:py-32 bg-bg-secondary border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Notre objet statutaire</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8">
              Ce pour quoi nous existons
            </h2>
            <div className="space-y-4 text-white/50 text-sm leading-relaxed">
              <p>
                Promouvoir le dépassement de soi, l&apos;engagement et
                l&apos;aventure à travers la pratique de sports
                d&apos;endurance, de disciplines extrêmes ou
                d&apos;expéditions.
              </p>
              <p>
                Soutenir techniquement, logistiquement et financièrement la
                préparation ainsi que la réalisation de défis sportifs.
              </p>
              <p>
                Créer, produire et diffuser des œuvres culturelles ou
                audiovisuelles liées à ces expériences — films documentaires,
                livres, photographies.
              </p>
              <p>
                Organiser des événements, des rassemblements,
                des entraînements, des compétitions et des conférences
                thématiques.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="section-label">Informations légales</p>
            <div className="card space-y-4">
              {[
                ["Nom", "L'ESPRIT DE L'EFFORT"],
                ["Type", "Association loi 1901"],
                ["Date de création", "19 avril 2026"],
                ["Siège social", "6 B Chemin de Montestrucq, 64340 Boucau"],
                ["Département", "Pyrénées-Atlantiques (64)"],
                ["Contact", "contact@pablomarin.fr"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-white/30 w-36 shrink-0">{k}</span>
                  <span className="text-white/70">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Ce qui nous anime</p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v, i) => (
              <div key={v.title} className="card bg-[#080808] group hover:bg-bg-card transition-colors duration-300">
                <div className="text-5xl font-black text-accent/20 group-hover:text-accent/30 transition-colors mb-4 leading-none">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-200">
                  {v.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 md:py-32 bg-bg-secondary border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Ce que nous faisons concrètement</p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
            Nos activités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => (
              <div key={a.label} className="card">
                <h3 className="text-sm font-black text-accent uppercase tracking-widest mb-6 pb-4 border-b border-white/5">
                  {a.label}
                </h3>
                <ul className="space-y-3">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="text-accent mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">L&apos;équipe</p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">
            Le fondateur
          </h2>
          <div className="max-w-md">
            <div className="card border border-accent/20">
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl font-black text-accent mb-6">
                PM
              </div>
              <h3 className="text-xl font-black text-white mb-1">Pablo Marin</h3>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-4">
                Président & Fondateur
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Passionné d&apos;endurance et d&apos;aventure, Pablo est le moteur
                derrière L&apos;Esprit de l&apos;Effort. Sa vision : transformer
                chaque défi extrême en source d&apos;inspiration pour tous.
              </p>
              <a
                href="mailto:contact@pablomarin.fr"
                className="text-accent text-xs font-bold tracking-widest uppercase hover:underline"
              >
                contact@pablomarin.fr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-lg">
            Tu veux participer ou soutenir l&apos;association ?
          </p>
          <Link href="/contact" className="btn-primary shrink-0">
            Contacte-nous
          </Link>
        </div>
      </section>
    </>
  );
}
