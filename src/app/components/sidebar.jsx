'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Settings, Zap, Puzzle, Github, ExternalLink, Sparkles, Search } from 'lucide-react';

const categorizedLinks = {
  "Başlangıç": [
    { href: "/docs/installation", label: "Kurulum", icon: Settings, badge: "Yeni" },
    { href: "/docs/components", label: "Bileşenler", icon: Puzzle },
  ],
  "Gelişmiş": [
    { href: "/docs/configuration", label: "Yapılandırma", icon: Settings },
    { href: "/docs/performance", label: "Performans", icon: Zap, badge: "Beta" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="h-screen w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white border-r border-slate-700/50 flex flex-col shadow-2xl">
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {Object.entries(categorizedLinks).map(([category, links]) => (
          <div key={category}>
            <h3 className="mb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">

              {category}
            </h3>
            <div className="space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-r-full"></div>
                    )}
                    <Icon className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                    }`} />
                    <span className="flex-1">{link.label}</span>
                    {link.badge && (
                      <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                        link.badge === "Yeni" 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-blue-500/0 group-hover:from-blue-600/5 group-hover:to-blue-500/5 transition-all duration-200"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700/50 space-y-3 mb-15">
        <div className="flex gap-2">
          <Link
            href="https://github.com/slow3rxqs"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-all duration-200 group"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="/feedback"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-600/30 hover:to-blue-500/30 border border-blue-500/30 rounded-lg text-xs font-medium text-blue-300 hover:text-blue-200 transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Geri Bildirim
          </Link>
        </div>
      </div>
    </div>
  );
}
