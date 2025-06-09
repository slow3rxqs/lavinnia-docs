import "./globals.css"
import Sidebar from "./components/sidebar"
import { Github, BookOpen, Zap } from "lucide-react"

export const metadata = {
  title: "@Lavinnia Bot | Docs",
  description: "Modern React + Tailwind dokümantasyon sitesi",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-full">
      <body className="h-full m-0 p-0 bg-slate-950 text-white">
        <div className="flex flex-col h-full">
          <header className="w-full h-16 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700/50 shadow-lg shadow-slate-900/20">
            <nav className="max-w-8xl mx-auto px-6 h-full flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                   Lavinnia Docs
                  </h1>
                  <p className="text-xs text-slate-400 -mt-1">Modern dokümantasyon</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <a
                  href="/getting-started"
                  className="group relative px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 hover:bg-slate-800/50"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Başlarken
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-blue-500/0 group-hover:from-blue-600/10 group-hover:to-blue-500/10 transition-all duration-200"></div>
                </a>
                <a
                  href="https://github.com/slow3rxqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 hover:bg-slate-800/50"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-blue-500/0 group-hover:from-blue-600/10 group-hover:to-blue-500/10 transition-all duration-200"></div>
                </a>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <a
                  href="https://slow3r.xyz"
                  target="_blank"
                  className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:scale-105"
                >
                  <Zap className="w-4 h-4" />
                  Projeyi yapan
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-200"></div>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </header>

          {/* Content: Sidebar + Main */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 border-r border-slate-700/50">
              <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto bg-slate-900">
              <div className="min-h-full bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="px-8 py-10">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
