import { ArrowRight, BookOpen, Code, Copy, FileCode, FileText, Github, Layers, Terminal, Zap } from "lucide-react"

export default function GettingStartedPage() {
    return (
        <div className="max-w-4xl mx-auto text-slate-200">
            {/* Header */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-4">
                    <Zap className="w-3.5 h-3.5" />
                    Başlarken
                </div>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                   Lavinnia Bot Kurulum
                </h1>
                <p className="text-lg text-slate-300 mb-6">
                    Bu dokümantasyon şablonu ile modern bir şekilde belgelerinizi paylaşabilirsiniz. Hızlı kurulum ve kolay
                    özelleştirme ile dakikalar içinde hazırsınız.
                </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:bg-slate-800 transition-colors">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                        <Layers className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">Next.js App Router</h3>
                    <p className="text-slate-300 text-sm">Modern routing sistemi ile hızlı ve SEO dostu sayfalar oluşturun.</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:bg-slate-800 transition-colors">
                    <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                        <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">Tailwind CSS</h3>
                    <p className="text-slate-300 text-sm">Utility-first CSS framework ile hızlı ve tutarlı tasarımlar yapın.</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:bg-slate-800 transition-colors">
                    <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">Markdown Desteği</h3>
                    <p className="text-slate-300 text-sm">
                        İçeriklerinizi Markdown formatında yazın ve otomatik olarak HTML'e dönüştürün.
                    </p>
                </div>
            </div>

            {/* Installation Steps */}
            <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-blue-400" />
                    Kurulum Adımları
                </h2>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="relative pl-8 border-l-2 border-blue-800/50 pb-6">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">1. Projeyi Kurun</h3>
                        <p className="text-slate-300 mb-3">Terminali veya cmd açın ve bu kodu girerek başlayın.</p>
                        <div className="relative group">
                            <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                <code>npx create-next-app</code>
                            </div>
                            <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-8 border-l-2 border-blue-800/50 pb-6">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">2. Bağımlılıkları yükleyin</h3>
                        <p className="text-slate-300 mb-3">Proje'de e gerekli paketleri yükleyin.</p>
                        <div className="relative group">
                            <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                <code>
                                    npm install --force
                                </code>
                            </div>
                            <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-8 border-l-2 border-blue-800/50">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-2">3. Geliştirme sunucusunu başlatın</h3>
                        <p className="text-slate-300 mb-3">Yerel geliştirme sunucusunu başlatın ve tarayıcınızda görüntüleyin.</p>
                        <div className="relative group">
                            <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                <code>npm run dev</code>
                            </div>
                            <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Structure */}
            <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                    <FileCode className="w-6 h-6 text-blue-400" />
                    Proje Yapısı
                </h2>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                    <pre className="text-sm text-slate-300 font-mono">
                        <code>
                            {`my-docs/
├── src/
├── ├──app/
│      ├── favicon.ico
│      ├── layout.js
│      ├── page.js
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
└── README.md `}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}
