import {
  BarChart3,
  Grid3x3,
  Terminal,
  Cpu,
  AlertCircle,
  Lock,
  BookOpen,
  GitBranch,
  Eye,
  Timer,
  Zap,
  FileText,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Grid3x3,
      name: "Kubernetes Dashboard",
      description: "Real-time cluster overview with Watch API updates",
    },
    {
      icon: Terminal,
      name: "Integrated Terminal",
      description: "Full kubectl integration with AI analysis",
    },
    {
      icon: AlertCircle,
      name: "Quick Diagnostics",
      description: "One-click pod analysis for instant insights",
    },
    {
      icon: BarChart3,
      name: "RCA with Confidence",
      description: "Root cause analysis with evidence trails",
    },
    {
      icon: Eye,
      name: "Proactive Scanning",
      description: "Health, security, performance, configuration checks",
    },
    {
      icon: Cpu,
      name: "Metrics Integration",
      description: "Prometheus metrics with real-time updates",
    },
    {
      icon: GitBranch,
      name: "Multi-Context Support",
      description: "Manage up to 3 Kubernetes clusters",
    },
    {
      icon: Lock,
      name: "Secure Key Storage",
      description: "API keys encrypted in OS keychain",
    },
    {
      icon: FileText,
      name: "Export Reports",
      description: "Generate Markdown and PDF reports",
    },
    {
      icon: Zap,
      name: "Lightning Fast",
      description: "Minimal resource footprint with Tauri",
    },
    {
      icon: BookOpen,
      name: "Built with React",
      description: "Modern TypeScript frontend",
    },
    {
      icon: Lock,
      name: "Apache 2.0 Licensed",
      description: "Free forever, no restrictions",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core Features (All Free)
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6 hover:border-blue-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-sky-400/60 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
