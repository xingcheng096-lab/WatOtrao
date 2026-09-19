import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export function WatCard({ wat }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#D4A62A]/60 bg-[#FFF9EA] shadow-md">
      {wat.image ? (
        <img
          src={wat.image}
          alt={wat.nameKh}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center bg-[#11178F] text-5xl text-[#D4A62A]">☸</div>
      )}
      <div className="p-5">
        <p className="text-sm font-bold text-[#8A2727]">{wat.fullNameKh}</p>
        <h3 className="mt-1 text-xl font-bold text-[#11178F] font-khmer-serif">{wat.nameKh}</h3>
        <p className="mt-1 font-semibold tracking-wide text-[#30251F]">{wat.nameEn}</p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-[#30251F]/80"><MapPin className="h-4 w-4 text-[#8A2727]" />{wat.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-[#30251F]/80">{wat.shortDescription}</p>
        <Link to={`/wats/${wat.slug}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#1B24C9] px-4 py-2 text-sm font-bold text-white hover:bg-[#11178F]">
          មើលព័ត៌មានលម្អិត <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
