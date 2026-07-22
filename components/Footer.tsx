import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-8 bg-accent" />
              <span className="font-black text-white tracking-tight text-sm uppercase leading-tight">
                L&apos;Esprit
                <br />
                <span className="text-accent">de l&apos;Effort</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Association loi 1901 dédiée au dépassement de soi, aux sports
              d&apos;endurance extrêmes et à la création de films documentaires.
            </p>
          </div>

          <div>
            <p className="section-label">Navigation</p>
            <ul className="flex flex-col gap-2">
              {[
                ["Accueil", "/"],
                ["L'Association", "/association"],
                ["Nos Défis", "/defis"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Contact</p>
            <ul className="flex flex-col gap-2 text-sm text-white/40">
              <li>Maison Blanche et Rouge</li>
              <li>6 B Chemin de Montestrucq</li>
              <li>64340 Boucau</li>
              <li className="mt-3">
                <a
                  href="tel:0699845717"
                  className="hover:text-accent transition-colors duration-200"
                >
                  06 99 84 57 17
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@pablomarin.fr"
                  className="hover:text-accent transition-colors duration-200"
                >
                  contact@pablomarin.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} L&apos;Esprit de l&apos;Effort —
            Association loi 1901
          </p>
          <p className="text-white/20 text-xs">Boucau, Pyrénées-Atlantiques</p>
        </div>
      </div>
    </footer>
  );
}
