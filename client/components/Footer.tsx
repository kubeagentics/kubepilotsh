import { Github, Twitter, BookOpen, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white border-t border-blue-800/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://github.com/opsflow/kubepilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opsflow/kubepilot/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Releases
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opsflow/kubepilot/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Issues & Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://discord.gg/kubepilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kubepilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opsflow/kubepilot/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://docs.kubepilot.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opsflow/kubepilot/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opsflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400/60 transition-colors"
                >
                  OpsFlow
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Tauri (Rust + React)</li>
              <li>TypeScript</li>
              <li>KubeAgentics Framework</li>
              <li className="mt-4 text-orange-700 font-semibold">Apache 2.0 Licensed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 OpsFlow. KubePilot Community Edition.</p>

            <div className="flex gap-4">
              <a
                href="https://github.com/opsflow/kubepilot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400/60 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/kubepilot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400/60 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://docs.kubepilot.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400/60 transition-colors"
                aria-label="Docs"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/kubepilot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400/60 transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
