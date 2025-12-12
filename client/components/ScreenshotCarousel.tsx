import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ScreenshotCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc758626f60f04bc7ae889dd26756dc7d?format=webp&width=800",
      title: "Root Cause Analysis (RCA)",
      description: "AI-powered diagnosis with confidence scores and remediation options",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F19045fb46edd4912beefc1549042537a?format=webp&width=800",
      title: "AI Configuration - BYOK",
      description: "Bring your own keys - OpenAI, Claude, Gemini, or Ollama",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F40fad8104e864894b8815724a62610fc?format=webp&width=800",
      title: "Proactive Health Scanning",
      description: "Automated detection of 21+ issue types - health, security, performance",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F151e3e6c05234a6fa3a90a68bc43c24b?format=webp&width=800",
      title: "RCA with Remediation Options",
      description: "Multiple fix recommendations with confidence levels and evidence",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc43d4c42ea244f2a8ead3bc81af7d53e?format=webp&width=800",
      title: "MCP Server Ecosystem",
      description: "Integrate Prometheus, ArgoCD, Helm, GitHub, Trivy with one click",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F165bdf02e3f44b108a1e4b1952e43d65?format=webp&width=800",
      title: "Real-time Cluster Dashboard",
      description: "CPU, memory, pod status, and node health at a glance",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Faa2237daff884814b1e7a5771c90a391?format=webp&width=800",
      title: "Quick Diagnosis",
      description: "One-click analysis of pod issues and problems",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F7441838757684d96873b7c1e56ba528e?format=webp&width=800",
      title: "Activity & Resource Monitoring",
      description: "Pod list with full lifecycle tracking and diagnostics",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F36af1f3795b94e728402dca07ad2d8a8?format=webp&width=800",
      title: "Terminal Integration",
      description: "Full kubectl integration with AI analysis capabilities",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F47ca1afbd1314a2997d1d552ea20dd10?format=webp&width=800",
      title: "Agent Log & AI Activity",
      description: "Full transparency into AI decision-making and tool usage",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Expandable Button */}
      <section className="bg-zinc-900 text-white py-20 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-400 mb-8">Explore KubePilot's powerful features with real app screenshots</p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-sky-400/60 hover:bg-sky-400/80 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Open Screenshot Gallery
            </button>
          </div>

          {/* Thumbnail grid preview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {screenshots.slice(0, 5).map((screenshot, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                className="relative group cursor-pointer overflow-hidden rounded-lg border border-blue-800/50 hover:border-blue-600 transition-colors"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs font-semibold text-center px-2">{screenshot.title}</span>
                </div>
              </button>
            ))}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center bg-blue-900/20 border border-blue-800/50 hover:border-blue-600 rounded-lg transition-colors h-24"
            >
              <span className="text-sky-400/60 font-semibold text-sm">+{screenshots.length - 5} More</span>
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen carousel modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{screenshots[currentIndex].title}</h3>
                <p className="text-gray-400 mt-2">{screenshots[currentIndex].description}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Main image */}
            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg overflow-hidden mb-6">
              <img
                src={screenshots[currentIndex].url}
                alt={screenshots[currentIndex].title}
                className="w-full h-auto"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevSlide}
                title="Previous (or press ←)"
                className="flex items-center gap-2 bg-blue-900/20 border border-blue-800/50 hover:border-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  {currentIndex + 1} of {screenshots.length}
                </p>
                {/* Dot indicators */}
                <div className="flex gap-2 justify-center mt-3 flex-wrap">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-sky-400/60" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Press <kbd className="bg-blue-900/40 px-2 py-1 rounded text-sky-400/60">ESC</kbd> to close • <kbd className="bg-blue-900/40 px-2 py-1 rounded text-sky-400/60">←→</kbd> to browse
                </p>
              </div>

              <button
                onClick={nextSlide}
                title="Next (or press →)"
                className="flex items-center gap-2 bg-blue-900/20 border border-blue-800/50 hover:border-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 overflow-x-auto">
              <div className="flex gap-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded border-2 overflow-hidden transition-colors ${
                      index === currentIndex ? "border-sky-400/60" : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
