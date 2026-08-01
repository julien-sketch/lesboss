import Image from "next/image";
import Link from "next/link";
import type { BossEvent } from "@/data/events";
import { ButtonLink } from "./ButtonLink";

type EventCardProps = {
  event: BossEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="grid overflow-hidden rounded-boss border border-line/40 bg-white shadow-boss transition duration-500 hover:-translate-y-1 md:grid-cols-[0.9fr_1.1fr]">
      <Link
        href={`/evenements/${event.slug}`}
        className="relative block min-h-72 focus:outline-none focus-visible:ring-4 focus-visible:ring-punch"
      >
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-punch px-4 py-2 text-xs font-black uppercase text-ink">
            {event.status}
          </p>
          <h3 className="text-2xl font-black text-ink sm:text-4xl">
            {event.title}
          </h3>
          <p className="mt-4 text-lg font-bold text-ink">
            {event.date} · {event.time} · {event.location}
          </p>
          <p className="mt-4 leading-7 text-muted">{event.shortDescription}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/evenements/${event.slug}`}>
            Voir l&apos;événement
          </ButtonLink>
          <ButtonLink href={event.reservationUrl} variant="secondary">
            Réserver ma place
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
