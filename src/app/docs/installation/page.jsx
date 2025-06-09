import { ArrowRight, BookOpen, Copy, Terminal, Zap, CheckCircle, AlertCircle, Settings, Download } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto text-slate-200">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm font-medium mb-4">
          <Download className="w-3.5 h-3.5" />
          Kurulum
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Lavinnia Docs Kurulum Rehberi
        </h1>
        <p className="text-lg text-slate-300 mb-6">
        Lavinnia Docs'u sisteminize kurmak için gereken tüm adımları takip edin. Kurulum süreci yaklaşık 5-10 dakika
          sürer.
        </p>
      </div>

      {/* System Requirements */}
      <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <Settings className="w-6 h-6 text-green-400" />
          Sistem Gereksinimleri
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-3">Minimum Gereksinimler</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Node.js 18.0 veya üzeri</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>npm 8.0 veya yarn 1.22</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Git 2.0 veya üzeri</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>4GB RAM (önerilen 8GB)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-3">Desteklenen İşletim Sistemleri</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Windows 10/11</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>macOS 10.15 veya üzeri</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Ubuntu 18.04 veya üzeri</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Diğer Linux dağıtımları</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-green-400" />
          Kurulum Adımları
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="relative pl-8 border-l-2 border-green-800/50 pb-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">1. Yeni proje oluşturun</h3>
            <p className="text-slate-300 mb-3">
              Create Next App ile Lavinnia Docs şablonunu kullanarak yeni proje oluşturun.
            </p>
            <div className="relative group">
              <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code>npx create-next-app@latest my-docs --template react-docs</code>
              </div>
              <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-green-400 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8 border-l-2 border-green-800/50 pb-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">2. Proje klasörüne gidin</h3>
            <p className="text-slate-300 mb-3">Oluşturulan proje klasörüne geçin.</p>
            <div className="relative group">
              <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code>cd my-docs</code>
              </div>
              <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-green-400 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8 border-l-2 border-green-800/50 pb-6">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">3. Bağımlılıkları yükleyin</h3>
            <p className="text-slate-300 mb-3">Gerekli paketleri yükleyin.</p>
            <div className="relative group">
              <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code>npm install</code>
              </div>
              <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-green-400 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative pl-8 border-l-2 border-green-800/50">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">4. Geliştirme sunucusunu başlatın</h3>
            <p className="text-slate-300 mb-3">
              Yerel geliştirme sunucusunu başlatın ve http://localhost:3000 adresinde görüntüleyin.
            </p>
            <div className="relative group">
              <div className="bg-slate-900 text-slate-300 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code>npm run dev</code>
              </div>
              <button className="absolute top-3 right-3 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-green-400 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          Kurulum Doğrulaması
        </h2>

        <div className="space-y-4">
          <p className="text-slate-300 mb-4">
            Kurulumun başarılı olduğunu doğrulamak için aşağıdaki adımları takip edin:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">Tarayıcı Kontrolü</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>http://localhost:3000 açılıyor</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Ana sayfa düzgün görüntüleniyor</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Sidebar menüsü çalışıyor</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">Terminal Kontrolü</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Hata mesajı yok</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>"Ready" mesajı görünüyor</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Hot reload çalışıyor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-400" />
          Sorun Giderme
        </h2>

        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Port 3000 kullanımda hatası</h3>
            <p className="text-slate-300 mb-2">Eğer port 3000 zaten kullanımdaysa, farklı bir port kullanın:</p>
            <div className="bg-slate-900 text-slate-300 rounded-lg p-3 font-mono text-sm">
              <code>npm run dev -- -p 3001</code>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Node.js sürüm hatası</h3>
            <p className="text-slate-300 mb-2">Node.js sürümünüzü kontrol edin ve güncelleyin:</p>
            <div className="bg-slate-900 text-slate-300 rounded-lg p-3 font-mono text-sm">
              <code>node --version</code>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Bağımlılık hatası</h3>
            <p className="text-slate-300 mb-2">node_modules klasörünü silip yeniden yükleyin:</p>
            <div className="bg-slate-900 text-slate-300 rounded-lg p-3 font-mono text-sm">
              <code>rm -rf node_modules package-lock.json && npm install</code>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Kurulum Tamamlandı! 🎉</h2>
        <p className="text-green-200 mb-6">
          Tebrikler! Projeni başarıyla kuruldu. Şimdi projenizi özelleştirmeye başlayabilirsiniz.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="/docs/components"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5 text-green-300" />
            <div>
              <div className="font-medium">Bileşenleri Keşfet</div>
              <div className="text-sm text-green-200">Hazır UI bileşenlerini inceleyin</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </a>

          <a
            href="/docs/configuration"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5 text-blue-300" />
            <div>
              <div className="font-medium">Yapılandırma</div>
              <div className="text-sm text-green-200">Projenizi özelleştirin</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </a>

          <a
            href="/getting-started"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <Zap className="w-5 h-5 text-green-300" />
            <div>
              <div className="font-medium">Hızlı Başlangıç</div>
              <div className="text-sm text-green-200">İlk sayfanızı oluşturun</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </a>

          <a
            href="/docs/performance"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
          >
            <Zap className="w-5 h-5 text-blue-300" />
            <div>
              <div className="font-medium">Performans</div>
              <div className="text-sm text-green-200">Optimizasyon ipuçları</div>
            </div>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </a>
        </div>
      </div>
    </div>
  )
}
