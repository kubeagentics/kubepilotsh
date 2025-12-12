import { Apple, Windows, Linux, Download } from "lucide-react";

export default function DownloadSection() {
  const platforms = [
    {
      icon: Apple,
      name: "macOS",
      versions: ["Apple Silicon (M1+)", "Intel"],
      format: ".dmg",
      color: "text-gray-300",
    },
    {
      icon: Windows,
      name: "Windows",
      versions: ["Windows 10+", "64-bit"],
      format: ".exe / .msi",
      color: "text-sky-400/60",
    },
    {
      icon: Linux,
      name: "Linux",
      versions: ["Ubuntu 20.04+", "Debian"],
      format: ".AppImage / .deb",
      color: "text-orange-700",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Download KubePilot CE</h2>
        <p className="text-gray-400 text-center mb-12">
          Choose your platform below. All versions are free and include full features.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-8 hover:border-blue-700 transition-colors text-center"
              >
                <Icon className={`w-12 h-12 ${platform.color} mx-auto mb-4`} />
                <h3 className="text-2xl font-semibold mb-2">{platform.name}</h3>
                <div className="text-sm text-gray-400 mb-4">
                  {platform.versions.map((v, i) => (
                    <div key={i}>{v}</div>
                  ))}
                </div>
                <p className="text-orange-700 font-mono text-sm mb-6">{platform.format}</p>
                <a
                  href="https://github.com/opsflow/kubepilot/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sky-400/60 hover:bg-sky-400/80 text-black font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-orange-700">→</span>
              <span>4GB RAM minimum</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-700">→</span>
              <span>kubectl installed and configured</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-700">→</span>
              <span>Kubernetes cluster access</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-700">→</span>
              <span>Internet connection (or local Ollama)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
