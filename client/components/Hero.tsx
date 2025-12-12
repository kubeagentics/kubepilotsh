export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-900 text-white overflow-hidden flex items-center">
      {/* Gradient background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div>
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Kubernetes Desktop Companion
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Debug Kubernetes 10x faster with built-in AI diagnostics, root
              cause analysis, and proactive health scanning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://github.com/opsflow/kubepilot/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400/60 hover:bg-sky-400/80 text-black font-semibold px-8 py-3 rounded-lg transition-colors text-center"
            >
              Download for Free
            </a>
            <a
              href="https://github.com/opsflow/kubepilot"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
            >
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-orange-700">●</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-700">●</span>
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-700">●</span>
              <span>Apache 2.0</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Available for macOS • Windows • Linux
          </p>
        </div>

        {/* Right side - Screenshot */}
        <div className="hidden md:block">
          <div className="rounded-lg overflow-hidden border border-blue-800/40 bg-blue-900/10 p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc758626f60f04bc7ae889dd26756dc7d?format=webp&width=800"
              alt="KubePilot Root Cause Analysis"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
