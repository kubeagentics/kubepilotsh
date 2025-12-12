import {
  Zap,
  Shield,
  Brain,
  Settings,
  Clock,
  Gauge,
  Unlock,
  Code,
} from "lucide-react";

export default function USPSection() {
  const usps = [
    {
      icon: Brain,
      title: "AI-Native Kubernetes Debugging",
      description:
        "Built-in AI understands Kubernetes. Ask natural questions, get actionable answers. No more Stack Overflow hunting.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F684b1ea04e86456eaaad4163ecb571d5?format=webp&width=800",
    },
    {
      icon: Unlock,
      title: "Bring Your Own Keys (BYOK)",
      description:
        "Works with OpenAI, Anthropic Claude, Google Gemini, Ollama (local), or any OpenAI-compatible endpoint. Zero vendor lock-in.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F19045fb46edd4912beefc1549042537a?format=webp&width=800",
    },
    {
      icon: Shield,
      title: "Proactive Health Scanning",
      description:
        "Automated cluster health checks, security scanning, performance analysis, and configuration drift detection. 21 issue types detected.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F40fad8104e864894b8815724a62610fc?format=webp&width=800",
    },
    {
      icon: Zap,
      title: "Root Cause Analysis (RCA)",
      description:
        "AI-powered root cause analysis with confidence scores, evidence trails, and multiple remediation options in one click.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F151e3e6c05234a6fa3a90a68bc43c24b?format=webp&width=800",
    },
    {
      icon: Code,
      title: "MCP Server Ecosystem",
      description:
        "Built-in MCP (Model Context Protocol) server library. Add Prometheus, ArgoCD, Helm, GitHub, Trivy with one click.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc43d4c42ea244f2a8ead3bc81af7d53e?format=webp&width=800",
    },
    {
      icon: Gauge,
      title: "Beautiful Cluster Dashboard",
      description:
        "Real-time cluster overview with CPU, memory, pod status, and node health. Live Watch API updates. No browser tabs needed.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F165bdf02e3f44b108a1e4b1952e43d65?format=webp&width=800",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to master Kubernetes
          </h2>
          <p className="text-xl text-gray-400">
            No subscriptions. No feature gates. Just powerful K8s tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={index}
                className="group bg-blue-900/20 border border-blue-800/50 rounded-lg p-6 hover:border-blue-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-sky-400/60" />
                  <h3 className="text-lg font-semibold">{usp.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
