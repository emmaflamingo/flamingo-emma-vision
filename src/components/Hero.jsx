export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-pink-pale rounded-full text-sm font-semibold text-flamingo">
                ✨ Soft Life & Pink Vibes
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-deep via-flamingo to-pink-soft bg-clip-text text-transparent">
                Flamingo Emma
              </span>
              <br />
              <span className="text-gray-800">Vision & Stratégie</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Découvrez comment transformer une passion pour la détente, l'esthétique rose et les créations IA en un écosystème digital cohérent et engageant.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                Voir la Stratégie
              </button>
              <button className="px-8 py-3 border-2 border-flamingo text-flamingo rounded-lg font-semibold hover:bg-pink-pale transition">
                Télécharger le Rapport
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-soft to-pink-pale rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-pale rounded-full flex items-center justify-center text-2xl">🎨</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Créativité</h3>
                    <p className="text-sm text-gray-600">Créations IA & Esthétique</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-pale rounded-full flex items-center justify-center text-2xl">🎧</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Relaxation</h3>
                    <p className="text-sm text-gray-600">Ambiances Sonores Apaisantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-pale rounded-full flex items-center justify-center text-2xl">💬</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Communauté</h3>
                    <p className="text-sm text-gray-600">Engagement & Bienveillance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
