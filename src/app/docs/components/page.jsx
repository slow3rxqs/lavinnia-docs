"use client"

import { ArrowRight, BoxIcon as ButtonIcon, Copy, Search, Palette, Type, CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useState } from "react"

export default function ComponentsPage() {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const CodeBlock = ({ code, language = "jsx", id }) => (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          background: "#0f172a",
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem",
          marginBottom: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-700/70 text-slate-400 hover:text-purple-400 transition-colors"
        aria-label="Copy code"
      >
        {copied === id ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto text-slate-200">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-4">
          <Palette className="w-3.5 h-3.5" />
          Bileşenler
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          UI Bileşenleri
        </h1>
        <p className="text-lg text-slate-300 mb-6">
          Lavinnia Docs ile birlikte gelen hazır UI bileşenlerini keşfedin. Tüm bileşenler modern tasarım prensipleri ile
          oluşturulmuş ve tamamen özelleştirilebilir.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Bileşen ara..."
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors">
              Tümü
            </button>
            <button className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg font-medium transition-colors">
              Temel
            </button>
            <button className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg font-medium transition-colors">
              Form
            </button>
            <button className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg font-medium transition-colors">
              Navigasyon
            </button>
          </div>
        </div>
      </div>

      {/* Basic Components */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
          <ButtonIcon className="w-6 h-6 text-purple-400" />
          Temel Bileşenler
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Button Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Button</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50">
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
                  Primary
                </button>
                <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors">
                  Secondary
                </button>
                <button className="px-4 py-2 border border-slate-600 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors">
                  Outline
                </button>
                <button className="px-4 py-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Ghost
                </button>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
  Primary Button
</button>`}
              id="button-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> variant, size, disabled, onClick
            </div>
          </div>

          {/* Card Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Card</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Kart Başlığı</h4>
                <p className="text-slate-300 text-sm mb-3">Bu bir örnek kart bileşenidir. İçerik buraya gelir.</p>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">Aksiyon</button>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
  <h4 className="text-lg font-semibold text-slate-100 mb-2">
    Kart Başlığı
  </h4>
  <p className="text-slate-300 text-sm">İçerik</p>
</div>`}
              id="card-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> padding, shadow, border, children
            </div>
          </div>
        </div>
      </div>

      {/* Form Components */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
          <Type className="w-6 h-6 text-blue-400" />
          Form Bileşenleri
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Input</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Şifre</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<input
  type="email"
  placeholder="email@example.com"
  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>`}
              id="input-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> type, placeholder, value, onChange, disabled
            </div>
          </div>

          {/* Select Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Select</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ülke Seçin</label>
                  <select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Türkiye</option>
                    <option>ABD</option>
                    <option>Almanya</option>
                    <option>Fransa</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
  <option>Türkiye</option>
  <option>ABD</option>
</select>`}
              id="select-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> options, value, onChange, placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Components */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-400" />
          Geri Bildirim Bileşenleri
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Alert Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Alert</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50 space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm">İşlem başarıyla tamamlandı!</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                <X className="w-5 h-5 text-red-400" />
                <span className="text-red-300 text-sm">Bir hata oluştu!</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                <Info className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm">Bilgilendirme mesajı</span>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
  <CheckCircle className="w-5 h-5 text-green-400" />
  <span className="text-green-300 text-sm">
    İşlem başarıyla tamamlandı!
  </span>
</div>`}
              id="alert-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> variant, title, description, closable
            </div>
          </div>

          {/* Badge Component */}
          <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-100">Badge</h3>
              <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Hazır</span>
            </div>

            {/* Preview */}
            <div className="bg-slate-900/50 rounded-lg p-6 mb-4 border border-slate-700/50">
              <div className="flex flex-wrap gap-3">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Primary</span>
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Success</span>
                <span className="px-2 py-1 bg-orange-600 text-white text-xs rounded-full">Warning</span>
                <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">Error</span>
                <span className="px-2 py-1 bg-slate-600 text-white text-xs rounded-full">Neutral</span>
              </div>
            </div>

            {/* Code */}
            <CodeBlock
              code={`<span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
  Primary
</span>
<span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
  Success
</span>`}
              id="badge-code"
            />

            <div className="mt-4 text-sm text-slate-400">
              <strong className="text-slate-300">Props:</strong> variant, size, children
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Kullanım Rehberi</h2>
        <p className="text-purple-200 mb-6">
          Bileşenleri projenizde kullanırken aşağıdaki rehberi takip edin ve tutarlı bir tasarım dili oluşturun.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tasarım Prensipleri</h3>
            <ul className="space-y-2 text-purple-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Tutarlı renk paleti kullanın
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Uygun spacing değerleri seçin
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Erişilebilirlik standartlarına uyun
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Responsive tasarım yapın
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Özelleştirme</h3>
            <ul className="space-y-2 text-purple-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Tailwind CSS sınıflarını kullanın
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                CSS değişkenleri ile tema oluşturun
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Bileşen props'larını özelleştirin
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Kendi bileşenlerinizi oluşturun
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/docs/configuration"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Yapılandırma
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/docs/performance"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Performans
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
