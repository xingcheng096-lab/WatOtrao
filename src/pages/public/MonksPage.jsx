import React, { useState } from "react";
import { Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  LotusDivider,
  KhmerDivider,
  KhmerCornerDecor,
} from "../../components/traditional/LotusDivider";

import {
  SectionTitle,
  Button,
  Card,
  Modal,
} from "../../components/common/UIComponents";

import { INITIAL_MONKS, siteSettings } from "../../data/data";
import kruImage from "../../assets/images/kru.jpg";

export function MonksPage() {
  const [selectedMonk, setSelectedMonk] = useState(null);

  const headMonk = INITIAL_MONKS[0];
  const otherMonks = INITIAL_MONKS.slice(1);

  return (
    <div className="py-10 space-y-16">
      {/* Header */}
      {/* =========================
    MONASTIC HEADER
========================= */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="text-center max-w-5xl mx-auto px-4"
>
  {/* Small label */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="
      inline-flex items-center gap-2
      px-4 py-2 mb-5
      rounded-full
      bg-[#FFF8E7]
      border border-[#D4AF37]/40
      shadow-sm
    "
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

    <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#6E1F1F]">
      MONASTIC COMMUNITY
    </span>

    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
  </motion.div>

  <h1
    className="
      text-3xl sm:text-4xl lg:text-5xl
      font-extrabold
      font-khmer-serif
      text-[#4A1414]
      leading-[1.6]
    "
  >
    ព្រះថេរានុត្ថេរៈ និងព្រះសង្ឃ{" "}
    <span className="text-[#7A241F]">
      {siteSettings.templeNameKh}
    </span>
  </h1>

  <div className="my-5">
    <LotusDivider />
  </div>

  <p
    className="
      text-stone-600
      text-sm sm:text-base
      leading-8
      max-w-2xl
      mx-auto
      font-khmer-serif
    "
  >
    ព្រះសង្ឃជាអ្នកបន្តវេនព្រះធម៌វិន័យ
    និងដឹកនាំការបដិបត្តិធម៌
    ដើម្បីសេចក្តីសុខសន្តិភាពនៃមនុស្សលោក។
  </p>
</motion.section>


{/* =========================
    FEATURED HEAD ABBOT
========================= */}
<motion.section
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.8,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
>
  <div
    className="
      relative
      overflow-hidden
      rounded-[28px]
      bg-white
      border border-[#D4AF37]/50
      shadow-[0_20px_70px_rgba(74,20,20,0.10)]
    "
  >
    {/* Soft decorative background */}
    <div
      className="
        pointer-events-none
        absolute -top-32 -right-32
        w-80 h-80
        rounded-full
        bg-amber-100/40
        blur-3xl
      "
    />

    <div
      className="
        pointer-events-none
        absolute -bottom-40 -left-32
        w-96 h-96
        rounded-full
        bg-[#6E1F1F]/5
        blur-3xl
      "
    />

    {/* Top gold line */}
    <div
      className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-32 sm:w-48
        h-[3px]
        bg-gradient-to-r
        from-transparent
        via-[#D4AF37]
        to-transparent
      "
    />

    <KhmerCornerDecor
      position="top-left"
      className="top-4 left-4 opacity-60"
    />

    <KhmerCornerDecor
      position="bottom-right"
      className="bottom-4 right-4 opacity-60"
    />

    <div
      className="
        relative z-10
        grid grid-cols-1 lg:grid-cols-12
        gap-8 lg:gap-12
        items-center
        p-6 sm:p-8 lg:p-12
      "
    >
      {/* =========================
          HEAD ABBOT IMAGE
      ========================= */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="
          lg:col-span-5
          flex justify-center
        "
      >
        <motion.div
          whileHover={{
            y: -6,
            scale: 1.015,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          className="relative"
        >
          {/* Outer glow */}
<div
  className="
    absolute
    inset-2
    translate-y-6
    rounded-[44px]
    bg-[#D4AF37]/20
    blur-3xl
  "
/>

{/* Image */}
<div
  className="
    relative

    w-[290px]
    h-[380px]

    sm:w-[340px]
    sm:h-[440px]

    md:w-[360px]
    md:h-[470px]

    lg:w-[380px]
    lg:h-[500px]

    xl:w-[400px]
    xl:h-[525px]

    temple-arch-top
    rounded-b-[30px]

    border-[3px]
    border-[#D4AF37]

    bg-[#FFF9ED]
    overflow-hidden

    shadow-[0_24px_60px_rgba(74,20,20,0.18)]
  "
>
  <motion.img
    src={kruImage}
    alt={
      headMonk?.khmerName ||
      "ព្រះគ្រូចៅអធិការ វត្ត អូរត្រាវ"
    }
    className="
      w-full
      h-full
      object-cover
      object-top
    "
    whileHover={{
      scale: 1.035,
    }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
  />

  {/* Bottom soft overlay */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-28
      bg-gradient-to-t
      from-[#3B1010]/45
      via-[#4A1414]/15
      to-transparent
    "
  />

  {/* Inner border */}
  <div
    className="
      pointer-events-none
      absolute
      inset-[5px]
      temple-arch-top
      rounded-b-[25px]
      border
      border-white/20
    "
  />
</div>

          {/* Decorative badge */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-4
              left-1/2
              -translate-x-1/2
              px-5 py-2
              rounded-full
              bg-[#6E1F1F]
              border-2 border-[#D4AF37]
              shadow-lg
              whitespace-nowrap
            "
          >
            <span
              className="
                text-[11px]
                sm:text-xs
                font-bold
                text-[#FFF8E7]
                font-khmer-serif
              "
            >
              {headMonk?.position || "ព្រះគ្រូចៅអធិការ"}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* =========================
          INFORMATION
      ========================= */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="lg:col-span-7 space-y-5"
      >
        {/* Labels */}
        <div className="flex flex-wrap items-center gap-2">
          {headMonk?.title && (
            <span
              className="
                inline-flex items-center
                px-3.5 py-1.5
                rounded-full
                text-[11px] sm:text-xs
                font-bold
                bg-[#6E1F1F]
                text-[#FFF8E7]
                border border-[#D4AF37]
                shadow-sm
                font-khmer-serif
              "
            >
              {headMonk.title}
            </span>
          )}

          {headMonk?.position && (
            <span
              className="
                inline-flex items-center
                px-3.5 py-1.5
                rounded-full
                text-[11px] sm:text-xs
                font-semibold
                bg-[#FFF8E7]
                text-[#6E1F1F]
                border border-[#D4AF37]/40
                font-khmer-serif
              "
            >
              {headMonk.position}
            </span>
          )}
        </div>

        {/* Name */}
        <div>
          <h2
            className="
              text-2xl sm:text-3xl lg:text-[38px]
              font-extrabold
              font-khmer-serif
              text-[#4A1414]
              leading-[1.6]
            "
          >
            {headMonk?.khmerName}
          </h2>

          {headMonk?.name && (
            <p
              className="
                mt-1
                text-sm
                text-stone-500
                font-medium
                tracking-wide
              "
            >
              {headMonk.name}
            </p>
          )}
        </div>

        <KhmerDivider className="justify-start" />

        {/* Biography */}
        {headMonk?.bio && (
          <div>
            <h3
              className="
                mb-2
                text-sm
                font-bold
                text-[#6E1F1F]
                font-khmer-serif
              "
            >
              ប្រវត្តិសង្ខេប
            </h3>

            <p
              className="
                text-stone-600
                text-sm sm:text-[15px]
                leading-8
                font-khmer-serif
              "
            >
              {headMonk.bio}
            </p>
          </div>
        )}

        


        {/* =========================
            RESPONSIBILITIES
        ========================= */}
        {headMonk?.responsibilities?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              p-4 sm:p-5
              rounded-2xl
              bg-gradient-to-br
              from-[#FFFDF8]
              to-[#FFF8E7]
              border
              border-[#D4AF37]/30
            "
          >
            <h3
              className="
                text-sm
                font-bold
                text-[#6E1F1F]
                font-khmer-serif
                mb-3
              "
            >
              តួនាទី និងការងារសំខាន់ៗ
            </h3>

            <div className="space-y-2.5">
              {headMonk.responsibilities.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      text-stone-700
                    "
                  >
                    <span
                      className="
                        mt-[10px]
                        w-1.5 h-1.5
                        rounded-full
                        bg-[#C9972B]
                        shrink-0
                      "
                    />

                    <span
                      className="
                        leading-7
                        font-khmer-serif
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}


        {/* =========================
            QUOTE
        ========================= */}
        {headMonk?.quote && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              overflow-hidden
              p-4 sm:p-5
              rounded-xl
              bg-[#FFF8E7]
              border
              border-[#D4AF37]/30
              border-l-4
              border-l-[#6E1F1F]
            "
          >
            <span
              className="
                absolute
                -top-5
                right-4
                text-[80px]
                leading-none
                text-[#D4AF37]/15
                font-serif
                pointer-events-none
              "
            >
              “
            </span>

            <p
              className="
                relative z-10
                text-sm sm:text-base
                text-[#4A1414]
                italic
                leading-8
                font-khmer-serif
              "
            >
              “{headMonk.quote}”
            </p>
          </motion.div>
        )}


        {/* =========================
            BUTTON
        ========================= */}
        <div className="pt-2">
          <motion.div
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                setSelectedMonk(headMonk)
              }
            >
              មើលប្រវត្តិរូបពិស្តារ
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* =========================================================
    MONASTIC COMMUNITY — 6 CARDS
========================================================= */}
<section className="py-16 lg:py-20 bg-[#FFF9EA]">
  <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <SectionTitle
      
      khmerTitle="គណៈសង្ឃ និងគ្រូឧទ្ទេសាចារ្យ"
      subtitle="ព្រះសង្ឃដែលកំពុងគង់ចាំព្រះវស្សា និងបម្រើការងារសាសនាក្នុងវត្តខ្មែរក្រោម"
    />


{/* Monks Grid — 4 cards per row */}
<div
  className="
    mt-10
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    w-full
    max-w-[1400px]
    mx-auto
  "
>
  {otherMonks.map((monk) => (
    <Card
      key={monk.id}
      className="
        group
        h-full
        p-5
        bg-white
        text-center
        flex
        flex-col
        justify-between
        rounded-2xl
        border
        border-[#D4AF37]/30
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div>
        {/* Monk Portrait */}
        <div
          className="
            relative
            w-full
            aspect-[4/5]
            mx-auto
            mb-5
            overflow-hidden
            temple-arch-top
            rounded-b-xl
            bg-[#F7F1E2]
            border-2
            border-[#D4AF37]/50
            group-hover:border-[#D4AF37]
            shadow-sm
          "
        >
          <img
            src={monk.portrait || monk.image}
            alt={monk.khmerName}
            loading="lazy"
            className="
              w-full
              h-full
              object-cover
              object-top
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />
        </div>

        {/* Name */}
        <h3
          className="
            font-bold
            text-lg
            text-[#4A1414]
            font-khmer-serif
            leading-relaxed
          "
        >
          {monk.khmerName}
        </h3>

        {/* Position */}
        <p className="mt-1 text-xs text-[#C9972B] font-semibold">
          {monk.title || monk.khmerRole || monk.position}
        </p>

        {/* Information */}
        <div className="mt-3 space-y-1">
          <p className="text-[11px] text-stone-500">
            វស្សា៖ {monk.vassa || monk.yearsOrdained || "—"}
          </p>

          <p className="text-[11px] text-stone-500">
            {monk.birthPlace || "—"}
          </p>
        </div>

        {/* Biography */}
        <p
          className="
            mt-4
            text-xs
            text-stone-600
            leading-6
            line-clamp-3
            min-h-[72px]
          "
        >
          {monk.bio || "មិនទាន់មានព័ត៌មានប្រវត្តិ។"}
        </p>
      </div>

      {/* Detail Button */}
      <div className="pt-4 mt-5 border-t border-[#D4AF37]/20">
        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => setSelectedMonk(monk)}
        >
          ព័ត៌មានលម្អិត
        </Button>
      </div>
    </Card>
  ))}
</div>

    {/* Empty State */}
    {otherMonks.length === 0 && (
      <div className="py-16 text-center">
        <p className="text-sm text-stone-500 font-khmer-serif">
          មិនទាន់មានព័ត៌មានព្រះសង្ឃ។
        </p>
      </div>
    )}

  </div>
</section>

      {/* Monk Detail Modal */}
      {selectedMonk && (
        <Modal
          isOpen={!!selectedMonk}
          onClose={() => setSelectedMonk(null)}
          title={`ប្រវត្តិសង្ខេប • ${selectedMonk.khmerName}`}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-44 temple-arch-top rounded-b-lg border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-md">
                <img
                  src={
                    selectedMonk.id === headMonk?.id
                      ? kruImage
                      : selectedMonk.portrait
                  }
                  alt={selectedMonk.khmerName}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-xs font-bold text-[#6E1F1F] bg-[#D4AF37]/20 px-2.5 py-0.5 rounded-full">
                  {selectedMonk.vassa}
                </span>

                <h3 className="text-xl font-bold font-khmer-serif text-[#4A1414]">
                  {selectedMonk.khmerName}
                </h3>

                <p className="text-xs text-stone-600">
                  {selectedMonk.name}
                </p>

                <p className="text-xs font-semibold text-[#C9972B]">
                  {selectedMonk.title}
                </p>

                <p className="text-xs text-stone-500">
                  ស្រុកកំណើត៖ {selectedMonk.birthPlace}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#4A1414] mb-1">
                ជីវប្រវត្តិសង្ខេប
              </h4>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {selectedMonk.bio}
              </p>
            </div>

            {selectedMonk.quote && (
              <blockquote className="p-3.5 rounded-xl bg-amber-50/80 border-l-4 border-[#D4AF37] text-xs sm:text-sm text-[#4A1414] italic">
                {selectedMonk.quote}
              </blockquote>
            )}

            {Array.isArray(selectedMonk?.duties) &&
              selectedMonk.duties.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#4A1414] mb-2">
                    តួនាទី និងភារកិច្ចក្នុងវត្ត
                  </h4>

                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedMonk.duties.map((duty, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedMonk(null)}
              >
                បិទ / Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}