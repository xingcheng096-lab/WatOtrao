import React from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { INITIAL_WATS } from "../../data/data";

export function WatDetailPage() {
  const { slug } = useParams();
  const wat = INITIAL_WATS.find((item) => item.slug === slug);
  if (!wat) return <div className="mx-auto max-w-5xl px-6 py-20 text-center">Wat not found.</div>;
  return (
    <main className="bg-[#FFF9EA] px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="text-sm font-bold text-[#11178F]">← WAT KHMER</Link>
        <p className="mt-8 text-sm font-bold text-[#8A2727]">{wat.fullNameKh}</p>
        <h1 className="mt-2 text-4xl font-bold text-[#11178F] font-khmer-serif">{wat.nameKh}</h1>
        <p className="mt-2 text-xl font-semibold">{wat.nameEn}</p>
        <p className="mt-4 flex items-center gap-2 text-[#30251F]/80"><MapPin className="h-5 w-5 text-[#8A2727]" />{wat.location}</p>
        <div className="mt-10 grid gap-6 rounded-2xl border border-[#D4A62A]/60 bg-white p-6 sm:grid-cols-2">
          <section><h2 className="font-bold text-[#11178F]">Overview</h2><p className="mt-2 text-[#30251F]/80">{wat.shortDescription}</p></section>
          {wat.history && <section><h2 className="font-bold text-[#11178F]">History</h2><p className="mt-2 text-[#30251F]/80">{wat.history}</p></section>}
          {wat.architecture && <section><h2 className="font-bold text-[#11178F]">Architecture</h2><p className="mt-2 text-[#30251F]/80">{wat.architecture}</p></section>}
        </div>
      </div>
    </main>
  );
}
