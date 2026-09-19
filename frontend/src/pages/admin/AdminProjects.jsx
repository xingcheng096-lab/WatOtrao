import React, { useState } from "react";
import { HeartHandshake, Plus, CheckCircle2, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button, Modal, Card, StatusBadge } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";
import { formatCurrency } from "../../utils/helpers";

export function AdminProjects() {
  const { projects = [] } = useAdminData() || {};
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample donors list for display
  const sampleDonors = [
    { name: "ឧបាសិកា គឹម ស្រីមុំ និងក្រុមគ្រួសារ", amount: 1500, date: "2024-05-10", purpose: "សាងសង់បណ្ណាល័យ" },
    { name: "ពុទ្ធបរិស័ទមកពីទីក្រុងព្រះត្រពាំង", amount: 800, date: "2024-05-08", purpose: "ទិញឥដ្ឋ និងស៊ីម៉ងត៍" },
    { name: "លោក តាំង វ៉ាន់ថន", amount: 500, date: "2024-05-01", purpose: "ចង្ហាន់ និងភ្លើងទឹក" },
    { name: "សមាគមខ្មែរក្រោមក្រៅប្រទេស", amount: 3000, date: "2024-04-20", purpose: "ជួសជុលព្រះវិហារ" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងគម្រោងវត្ត និងបច្ច័យបរិច្ចាគ (Temple Projects & Donations)
          </h1>
          <p className="text-xs text-stone-500">
            តាមដានគម្រោងសាងសង់ ជួសជុលព្រះវិហារ និងតម្លាភាពបច្ច័យបួន
          </p>
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(projects || []).map((proj) => {
          const percent = Math.min(100, Math.round((proj.currentAmount / proj.goalAmount) * 100));

          return (
            <Card key={proj.id} className="bg-white p-6 space-y-5 border border-stone-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#6E1F1F] uppercase tracking-wider">
                    {proj.status === "Active" ? "កំពុងដំណើរការ" : "សម្រេចបានជោគជ័យ"}
                  </span>
                  <h3 className="text-lg font-bold font-khmer-serif text-stone-900 mt-1">
                    {proj.khmerTitle}
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">{proj.title}</p>
                </div>
                <StatusBadge status={proj.status === "Active" ? "Published" : "Draft"} />
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {proj.description}
              </p>

              {/* Progress UI */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#6E1F1F]">វឌ្ឍនភាពថវិកា ({percent}%)</span>
                  <span className="text-stone-700">
                    {formatCurrency(proj.currentAmount)} / {formatCurrency(proj.goalAmount)}
                  </span>
                </div>
                <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="h-full bg-gradient-to-r from-[#C9972B] to-[#6E1F1F] rounded-full transition-all duration-700"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <span>អ្នកចូលរួមបរិច្ចាគ៖ <strong>{proj.donorsCount} នាក់</strong></span>
                  <span>នៅខ្វះ៖ <strong>{formatCurrency(proj.goalAmount - proj.currentAmount)}</strong></span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                <span className="text-xs text-stone-400">កាលបរិច្ឆេទបញ្ចប់៖ {proj.deadline}</span>
                <Button variant="secondary" size="sm" onClick={() => setSelectedProject(proj)}>
                  មើលបញ្ជីសប្បុរសជន
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Donors List Table */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-base text-stone-900 font-khmer-serif">
              បញ្ជីសប្បុរសជនដែលបានចូលរួមបច្ច័យថ្មីៗ (Recent Donors)
            </h2>
            <p className="text-xs text-stone-500">កត់ត្រាការចូលរួមបច្ច័យកសាងវត្តអារាម</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-600">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] border-b border-stone-200">
              <tr>
                <th className="px-5 py-3">ឈ្មោះសប្បុរសជន</th>
                <th className="px-4 py-3">ចំនួនបច្ច័យ</th>
                <th className="px-4 py-3">គោលបំណងកសាង</th>
                <th className="px-4 py-3">កាលបរិច្ឆេទ</th>
                <th className="px-4 py-3 text-right">ស្ថានភាព</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {sampleDonors.map((d, i) => (
                <tr key={i} className="hover:bg-stone-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-stone-900 font-khmer-serif">
                    {d.name}
                  </td>
                  <td className="px-4 py-3.5 font-bold text-emerald-700 font-mono">
                    {formatCurrency(d.amount)}
                  </td>
                  <td className="px-4 py-3.5 text-stone-700">{d.purpose}</td>
                  <td className="px-4 py-3.5 text-stone-500">{d.date}</td>
                  <td className="px-4 py-3.5 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                      បានទទួលរួចរាល់
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Donors Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={`សប្បុរសជនចូលរួម៖ ${selectedProject.khmerTitle}`}
          maxWidth="max-w-xl"
        >
          <div className="space-y-4">
            <div className="p-3 bg-amber-50 rounded-xl border border-[#D4AF37] text-xs text-[#4A1414]">
              បច្ច័យប្រមូលបានសរុប៖ <strong>{formatCurrency(selectedProject.currentAmount)}</strong> / {formatCurrency(selectedProject.goalAmount)}
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {sampleDonors.map((d, idx) => (
                <div key={idx} className="p-3 bg-white border border-stone-200 rounded-lg flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-stone-900 font-khmer-serif">{d.name}</p>
                    <p className="text-[11px] text-stone-500">{d.date}</p>
                  </div>
                  <span className="font-bold text-emerald-700 font-mono">{formatCurrency(d.amount)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="primary" size="sm" onClick={() => setSelectedProject(null)}>
                បិទ / Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
