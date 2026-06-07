export default function Strategy() {
  const funnel = [
    {
      stage: 'Découverte',
      platforms: ['TikTok', 'YouTube Shorts', 'Reels'],
      action: 'L\'utilisateur voit une vidéo courte et esthétique',
      icon: '🔍'
    },
    {
      stage: 'Consommation',
      platforms: ['YouTube (Long)', 'Instagram Posts'],
      action: 'L\'utilisateur s\'immerge dans l\'ambiance ou le lifestyle',
      icon: '👀'
    },
    {
      stage: 'Attachement',
      platforms: ['Instagram Stories', 'Facebook'],
      action: 'L\'utilisateur interagit avec Emma (sondages, questions)',
      icon: '❤️'
    },
    {
      stage: 'Conversion',
      platforms: ['Fanvue', 'Beacons'],
      action: 'L\'utilisateur veut plus d\'intimité ou soutenir Emma',
      icon: '💎'
    }
  ]

  return (
    <section id="strategy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-pale/50 to-rose-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              L\'Entonnoir de Conversion
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Un écosystème cohérent où chaque plateforme guide l\'audience vers la prochaine étape.
          </p>
        </div>

        <div className="space-y-6">
          {funnel.map((step, index) => (
            <div key={index} className="relative">
              {index < funnel.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-flamingo to-pink-soft -bottom-8"></div>
              )}
              
              <div className="bg-white rounded-2xl border-2 border-pink-soft/50 p-8 hover:shadow-lg transition">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">{step.stage}</h3>
                      <span className="px-3 py-1 bg-pink-pale rounded-full text-xs font-semibold text-flamingo">
                        Étape {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{step.action}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.platforms.map((platform, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-pink-soft to-pink-pale rounded-full text-sm font-medium text-gray-800"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl border-2 border-pink-soft/50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Recommandations Clés</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-flamingo flex items-center gap-2">
                <span>📱</span> Facebook
              </h4>
              <p className="text-gray-700">Publier du contenu natif et mettre les liens YouTube en commentaire pour maximiser la portée organique.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-flamingo flex items-center gap-2">
                <span>📺</span> YouTube
              </h4>
              <p className="text-gray-700">Ajouter des Shorts où Emma parle ou montre son visage pour créer un lien plus fort avec l\'audience.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-flamingo flex items-center gap-2">
                <span>🎵</span> TikTok
              </h4>
              <p className="text-gray-700">Utiliser des mots-clés comme "Soft Life France", "Pink Aesthetic" pour améliorer la découvrabilité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
