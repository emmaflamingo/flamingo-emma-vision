export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-full text-sm font-bold accent-text mb-6">
                ✨ Bienvenue dans l'univers Flamingo Emma
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
                Transformez
              </span>
              <br />
              <span className="text-gray-800">Votre Vision</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">
              Découvrez une <span className="font-bold text-flamingo">stratégie complète</span> pour dominer les réseaux sociaux. Du calendrier éditorial aux horaires optimaux, tout ce dont vous avez besoin pour <span className="font-bold text-pink-deep">construire une communauté engagée</span>.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-pink-soft to-flamingo">
                    <span className="text-white text-xl font-bold">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Analyse Complète</h3>
                  <p className="text-gray-600">De vos 5 réseaux sociaux avec insights détaillés</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-flamingo to-pink-deep">
                    <span className="text-white text-xl font-bold">📅</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Calendrier 30 Jours</h3>
                  <p className="text-gray-600">Prêt à l'emploi avec textes, hashtags et horaires</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-pink-deep to-rose-light">
                    <span className="text-white text-xl font-bold">🎯</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Stratégie Unifiée</h3>
                  <p className="text-gray-600">Cross-plateforme pour maximiser votre impact</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calendrier"
                className="px-8 py-4 bg-gradient-to-r from-flamingo to-pink-deep text-white rounded-lg font-bold text-lg button-hover shadow-lg"
              >
                Voir le Calendrier
              </a>
              <a
                href="#strategie"
                className="px-8 py-4 border-2 border-flamingo text-flamingo rounded-lg font-bold text-lg button-hover bg-white hover:bg-pink-pale transition"
              >
                Découvrir la Stratégie
              </a>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Card 1 */}
              <div className="absolute top-0 right-0 w-64 h-48 bg-white rounded-2xl shadow-2xl p-6 glass animate-slide-up border-2 border-pink-soft/30 card-hover">
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Soft Life</h3>
                <p className="text-sm text-gray-600">Contenu lifestyle esthétique et inspirant</p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-32 left-0 w-64 h-48 bg-white rounded-2xl shadow-2xl p-6 glass animate-slide-up border-2 border-flamingo/30 card-hover" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Créations IA</h3>
                <p className="text-sm text-gray-600">Esthétique onirique et surréaliste</p>
              </div>

              {/* Card 3 */}
              <div className="absolute bottom-0 right-10 w-64 h-48 bg-white rounded-2xl shadow-2xl p-6 glass animate-slide-up border-2 border-rose-light/50 card-hover" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Ambiance Sonore</h3>
                <p className="text-sm text-gray-600">Relaxation et détente auditive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
