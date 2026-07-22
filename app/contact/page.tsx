import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — L'Esprit de l'Effort",
  description:
    "Contactez L'Esprit de l'Effort pour rejoindre l'association, soumettre un projet ou obtenir des informations.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Restons en contact</p>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Contact
          </h1>
          <div className="w-24 h-1 bg-accent mb-8" />
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Une question, un projet, une envie de rejoindre l&apos;aventure ?
            N&apos;hésite pas à nous écrire.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="section-label">Coordonnées</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
              Nous retrouver
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                  Adresse
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Maison Blanche et Rouge
                  <br />
                  6 B Chemin de Montestrucq
                  <br />
                  64340 Boucau
                  <br />
                  Pyrénées-Atlantiques
                </p>
              </div>

              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                  Téléphone
                </p>
                <a
                  href="tel:0699845717"
                  className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                >
                  06 99 84 57 17
                </a>
              </div>

              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                  Email
                </p>
                <a
                  href="mailto:contact@pablomarin.fr"
                  className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                >
                  contact@pablomarin.fr
                </a>
              </div>

              <div>
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
                  Association
                </p>
                <p className="text-white/70 text-sm">
                  L&apos;ESPRIT DE L&apos;EFFORT
                  <br />
                  <span className="text-white/40">Association loi 1901</span>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="section-label">Formulaire</p>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
              Envoyer un message
            </h2>

            <form
              action="mailto:contact@pablomarin.fr"
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase block mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    className="w-full bg-bg-card border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-white/20"
                    placeholder="Ton prénom"
                    required
                  />
                </div>
                <div>
                  <label className="text-white/30 text-xs tracking-widest uppercase block mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    className="w-full bg-bg-card border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-white/20"
                    placeholder="Ton nom"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-white/30 text-xs tracking-widest uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-bg-card border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-white/20"
                  placeholder="ton@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-white/30 text-xs tracking-widest uppercase block mb-2">
                  Sujet
                </label>
                <select
                  name="sujet"
                  className="w-full bg-bg-card border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200"
                  required
                >
                  <option value="" className="bg-[#141414]">
                    Choisir un sujet
                  </option>
                  <option value="Adhésion" className="bg-[#141414]">
                    Adhésion à l&apos;association
                  </option>
                  <option value="Projet sportif" className="bg-[#141414]">
                    Projet sportif ou expédition
                  </option>
                  <option value="Partenariat" className="bg-[#141414]">
                    Partenariat ou sponsoring
                  </option>
                  <option value="Production" className="bg-[#141414]">
                    Co-production documentaire
                  </option>
                  <option value="Événement" className="bg-[#141414]">
                    Événement ou conférence
                  </option>
                  <option value="Autre" className="bg-[#141414]">
                    Autre
                  </option>
                </select>
              </div>

              <div>
                <label className="text-white/30 text-xs tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="body"
                  rows={6}
                  className="w-full bg-bg-card border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-200 placeholder:text-white/20 resize-none"
                  placeholder="Décris ton projet, ta demande ou ta question..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                Envoyer le message
              </button>

              <p className="text-white/20 text-xs text-center">
                Ce formulaire ouvrira ton client mail. Tu peux aussi écrire
                directement à{" "}
                <a
                  href="mailto:contact@pablomarin.fr"
                  className="text-accent/60 hover:text-accent"
                >
                  contact@pablomarin.fr
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
