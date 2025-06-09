import { Settings, Puzzle, Zap, ArrowRight, Star, Users, Code } from "lucide-react"

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          Yeni sürüm v1.0.0 yayınlandı!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Modern{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">React</span>{" "}
          Dokümantasyonu
        </h1>

        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Hızlı, modern ve kullanıcı dostu dokümantasyon sistemi. React projelerinizi dakikalar içinde başlatın ve
          geliştirin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/getting-started"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Hemen Başla
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/slow3rxqs"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Code className="w-5 h-5" />
            GitHub'da Görüntüle
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">10K+</div>
          <div className="text-slate-600">Aktif Kullanıcı</div>
        </div>

        <div className="text-center p-6 bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
          <div className="text-slate-600">Kullanıcı Puanı</div>
        </div>

        <div className="text-center p-6 bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-slate-600">Hazır Bileşen</div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="group bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
            <Settings className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Kolay Kurulum</h3>
          <p className="text-slate-600 mb-4">Tek komutla projenizi kurun ve dakikalar içinde geliştirmeye başlayın.</p>
          <a
            href="/docs/kurulum"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Kurulum Rehberi
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="group bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <Puzzle className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Hazır Bileşenler</h3>
          <p className="text-slate-600 mb-4">Önceden tasarlanmış bileşenlerle hızlı ve tutarlı arayüzler oluşturun.</p>
          <a
            href="/docs/bileşenler"
            className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            Bileşenleri Keşfet
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="group bg-slate-800/50 rounded-xl shadow-md border border-slate-700/50 p-6 hover:shadow-lg hover:border-green-200 transition-all duration-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Yüksek Performans</h3>
          <p className="text-slate-600 mb-4">Optimize edilmiş kod yapısı ile lightning-fast uygulamalar geliştirin.</p>
          <a
            href="/docs/performance"
            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
          >
            Performans İpuçları
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Hemen Başlamaya Hazır mısınız?</h2>
        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
          Sadece birkaç dakikada modern React uygulamanızı oluşturun ve canlıya alın.
        </p>
        <a
          href="/docs/installation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Zap className="w-5 h-5" />
          Şimdi Başla
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
