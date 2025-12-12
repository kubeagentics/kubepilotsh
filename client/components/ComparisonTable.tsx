import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const comparison = [
    {
      feature: "AI-Powered Diagnostics",
      kubepilot: true,
      k9s: false,
      lens: false,
    },
    {
      feature: "Root Cause Analysis",
      kubepilot: true,
      k9s: false,
      lens: false,
    },
    {
      feature: "BYOK (Bring Your Own Keys)",
      kubepilot: true,
      k9s: false,
      lens: false,
    },
    {
      feature: "Proactive Scanning",
      kubepilot: true,
      k9s: false,
      lens: "Limited",
    },
    {
      feature: "MCP Server Support",
      kubepilot: true,
      k9s: false,
      lens: false,
    },
    {
      feature: "Open Source",
      kubepilot: true,
      k9s: true,
      lens: "Partial",
    },
    {
      feature: "Price",
      kubepilot: "Free",
      k9s: "Free",
      lens: "$199/yr",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          How KubePilot Compares
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-800/50">
                <th className="text-left py-4 px-6 font-semibold">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-sky-400/60">
                  KubePilot CE
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-400">
                  K9s
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-400">
                  Lens
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-blue-800/30 hover:bg-blue-900/10 transition-colors"
                >
                  <td className="py-4 px-6 text-left">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.kubepilot === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : typeof row.kubepilot === "string" ? (
                      <span className="text-sky-400/60">{row.kubepilot}</span>
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.k9s === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : typeof row.k9s === "string" ? (
                      <span className="text-gray-400">{row.k9s}</span>
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.lens === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : typeof row.lens === "string" ? (
                      <span className="text-gray-400">{row.lens}</span>
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
