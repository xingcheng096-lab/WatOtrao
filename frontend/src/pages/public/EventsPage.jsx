import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronRight,
  Filter,
  CheckCircle2
} from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Card, Modal } from "../../components/common/UIComponents";
import { INITIAL_EVENTS, siteSettings } from "../../data/data";

export function EventsPage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = INITIAL_EVENTS.filter((e) => e.status === "Upcoming");
  const pastEvents = INITIAL_EVENTS.filter((e) => e.status === "Past");
  const featuredEvent = upcomingEvents.find((e) => e.featured) || upcomingEvents[0];

  const filteredUpcoming = upcomingEvents.filter(
    (e) => filterCategory === "all" || e.category === filterCategory
  );

  return (
    <div className="py-10 space-y-16">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F]">
          កាលវិភាគបុណ្យ និងពិធីសាសនា
        </h1>
        <LotusDivider />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          កម្មវិធីបុណ្យជាតិ និងសាសនាដែលរៀបចំឡើងនៅ{siteSettings.templeNameKh}តាមកាលកំណត់ពុទ្ធសករាជ និងសុរិយគតិ
        </p>
      </section>

      {/* Featured Upcoming Event */}
      {featuredEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#11178F] via-[#1B24C9] to-[#11178F] text-[#FFF9EA] rounded-3xl border-2 border-[#D4A62A] p-6 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D4A62A] text-[#11178F]">
                <span>ពិធីបុណ្យធំប្រចាំឆ្នាំ • FEATURED CEREMONY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-khmer-serif text-[#FFF9EA] leading-tight">
                {featuredEvent.khmerTitle}
              </h2>

              <p className="text-xs sm:text-sm text-[#D4A62A] font-khmer-serif">
                {featuredEvent.buddhistDate}
              </p>

              <p className="text-xs sm:text-sm text-[#F7EED8]/95 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#F7EED8]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4A62A]" />
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A62A]" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => setSelectedEvent(featuredEvent)}
                >
                  មើលកាលវិភាគពិស្តារ (Detailed Schedule)
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#D4A62A] shadow-lg h-72 sm:h-84">
                <img
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.khmerTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events List with Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-200 pb-4">
          <div>
            <h3 className="text-2xl font-bold font-khmer-serif text-[#11178F]">
              កម្មវិធីបុណ្យខាងមុខ ({filteredUpcoming.length})
            </h3>
            <p className="text-xs text-stone-500">កាលបរិច្ឆេទនៃពិធីសាសនាដែលនឹងប្រព្រឹត្តទៅឆាប់ៗ</p>
          </div>

          <div className="flex items-center gap-2">
            {["all", "Ceremony", "Cultural", "Dharma"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? "bg-[#1B24C9] text-white"
                    : "bg-white text-stone-700 hover:bg-amber-50 border border-gray-200"
                }`}
              >
                {cat === "all" ? "ទាំងអស់" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredUpcoming.map((evt) => (
            <div
              key={evt.id}
              id={`event-${String(evt.id).replace(/^event-/, "")}`}
              className="bg-white rounded-2xl p-6 border border-[#E8D7A5] hover:border-[#D4A62A] shadow-xs hover-lift flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5">
                {/* Vertical Date Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1B24C9] to-[#11178F] text-white flex flex-col items-center justify-center font-bold shrink-0 border border-[#D4A62A]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4A62A]">
                    {new Date(evt.date).toLocaleString("en-US", { month: "short" })}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                    {new Date(evt.date).getDate()}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-[#D4A62A] block font-khmer-serif">
                    {evt.buddhistDate}
                  </span>
                  <h4 className="text-lg font-bold font-khmer-serif text-[#11178F]">
                    {evt.khmerTitle}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 max-w-2xl leading-relaxed">
                    {evt.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4A62A]" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4A62A]" /> {evt.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedEvent(evt)}
                >
                  មើលកាលវិភាគ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold font-khmer-serif text-[#11178F] mb-6">
          ពិធីបុណ្យដែលបានប្រារព្ធរួចរាល់ (Past Events)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pastEvents.map((evt) => (
            <div
              key={evt.id}
              id={`event-${String(evt.id).replace(/^event-/, "")}`}
              className="p-5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] text-stone-500">{evt.buddhistDate}</span>
                <h4 className="font-bold text-sm text-[#11178F] font-khmer-serif mt-1">
                  {evt.khmerTitle}
                </h4>
                <p className="text-xs text-stone-500 mt-1">{evt.location}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-200 text-stone-700">
                បានបញ្ចប់
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Event Schedule Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.khmerTitle}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1B24C9] bg-blue-50 px-2.5 py-1 rounded-md border border-[#1B24C9]/20">
                {selectedEvent.buddhistDate}
              </span>
              <h3 className="text-xl font-bold font-khmer-serif text-[#11178F] pt-1">
                {selectedEvent.khmerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {selectedEvent.description}
              </p>
              <div className="text-xs text-stone-600 flex items-center gap-4 pt-1">
                <span>ម៉ោង៖ {selectedEvent.time}</span>
                <span>•</span>
                <span>ទីតាំង៖ {selectedEvent.location}</span>
              </div>
            </div>

            {Array.isArray(selectedEvent?.schedule) && selectedEvent.schedule.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#11178F] mb-3">
                  កម្មវិធីបុណ្យលម្អិតតាមម៉ោង (Program Itinerary)
                </h4>
                <div className="space-y-2.5 border-l-2 border-[#D4A62A] pl-4">
                  {selectedEvent.schedule.map((item, idx) => (
                    <div key={idx} className="relative text-xs">
                      <span className="absolute -left-5 top-1 w-2 h-2 rounded-full bg-[#1B24C9]" />
                      <span className="font-bold text-[#1B24C9] mr-2">{item.time}៖</span>
                      <span className="text-stone-800">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button variant="primary" size="sm" onClick={() => setSelectedEvent(null)}>
                បិទ / Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
