"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import styles from "./WindalpsPartners.module.css";

const partners = [
  { name: "Brasil Butterfly Studio", image: "brasil-butterfly-studio.png" },
  { name: "Xponentiel", image: "symbole-multicolore.png", symbol: true },
  { name: "Aix'plore immobilier eXp", image: "aixplore-immobilier.png" },
  { name: "Windalps", image: "windalps.png" },
  { name: "Sébastien Fautrelle, maître artisan chocolatier", image: "sebastien-fautrelle.png" },
];

export function WindalpsPartners() {
  const [paused, setPaused] = useState(false);
  const label = paused ? "Reprendre le défilement des partenaires" : "Mettre en pause le défilement des partenaires";

  return (
    <section aria-labelledby="windalps-partners-title" className="border-y border-line/60 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="windalps-partners-title" className="text-xl font-black text-ink sm:text-2xl">Les partenaires de la soirée</h2>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={label}
            title={label}
            aria-controls="windalps-partners-track"
            className={styles.control + " grid size-11 shrink-0 place-items-center rounded-full border border-line text-ink transition hover:bg-punch focus-visible:outline focus-visible:outline-4 focus-visible:outline-punch"}
          >
            {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          </button>
        </div>
        <div className={styles.viewport}>
          <div id="windalps-partners-track" className={styles.track} data-paused={paused}>
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} className={styles.group} aria-hidden={duplicate || undefined}>
                {partners.map((partner) => (
                  <li key={partner.image} className={styles.logo}>
                    <Image
                      src={"/images/windalps/partenaires/" + partner.image}
                      alt={duplicate ? "" : partner.name}
                      width={224}
                      height={144}
                      loading="eager"
                      unoptimized
                      sizes={partner.symbol ? "568px" : "224px"}
                      className={partner.symbol ? styles.symbol : styles.image}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
