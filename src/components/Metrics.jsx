export default function Metrics() {
  const metrics = [
    {
      title: 'Réactions',
      description: 'Mesure l\'adhésion émotionnelle rapide',
      action: 'Renforcer les visuels et formulations gagnantes',
      icon: '👍',
      color: 'from-pink-300 to-rose-300'
    },
    {
      title: 'Commentaires',
      description: 'Mesure la qualité de l\'interaction',
      action: 'Reprendre les questions qui obtiennent des réponses longues',
      icon: '💬',
      color: 'from-purple-300 to-pink-300'
    },
    {
      title: 'Partages',
      description: 'Mesure la valeur sociale du contenu',
      action: 'Transformer les posts partageables en séries récurrentes',
      icon: '🔄',
      color: 'from-blue-300 to-cyan-300'
    },
    {
      title: 'Clics Sortants',
      description: 'Mesure l\'intérêt pour YouTube, TikTok ou Beacons',
      action: 'Garder les liens seulement lorsqu\'un post natif les prépare',
      icon: '🔗',
      color: 'from-yellow-300 to-orange-300'
    },
    {
      title: 'Nouveaux Abonnés',
      description: 'Mesure la capacité d\'acquisition',
      action: 'Identifier les jours et thèmes qui précèdent les gains',
      icon: '📈',
      color: 'from-green-300 to-emerald-300'
    }
  ]

  const timeline = [
    { week: 'Semaine 1-2', goal: 'Lancer & Tester', focus: 'Variété de formats' },
    { week: 'Semaine 3-4', goal: 'Analyser & Adapter', focus: 'Doubles des gagnants' },
    { week: 'Semaine 5-8', goal: 'Optimiser & Croître', focus: 'Affinage fin' }
  ]

  return (
    <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-pale/30 via-white to-rose-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              Mesure & Optimisation
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Une stratégie agile nécessite un <span className="font-bold text-flamingo">suivi constant</span> et des <span className="font-bold text-pink-deep">ajustements basés sur les données</span>
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl`}></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 border-2 border-pink-soft/20 card-hover shadow-lg h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                  <span className="text-2xl">{metric.icon}</span>
                </div>
                
                <h3 className="text-xl font-black text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {metric.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 font-light">
                  {metric.description}
                </p>
                
                <div className="pt-3 border-t border-pink-soft/20">
                  <p className="text-xs font-bold text-flamingo">
                    → {metric.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-20 pt-16 border-t-2 border-pink-soft/30">
          <h3 className="text-4xl font-black text-gray-800 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Roadmap de 8 Semaines
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-flamingo to-pink-soft transform -translate-y-1/2"></div>
                )}

                {/* Card */}
                <div className={`bg-gradient-to-br from-pink-soft/30 to-rose-light/30 rounded-2xl p-8 border-2 border-pink-soft/40 card-hover`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-flamingo to-pink-deep text-white font-black">
                      {index + 1}
                    </div>
                    <h4 className="text-2xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {phase.week}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">OBJECTIF</p>
                      <p className="text-lg font-bold text-gray-800">{phase.goal}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-1">FOCUS</p>
                      <p className="text-lg font-bold text-flamingo">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t-2 border-pink-soft/30">
          <div className="bg-gradient-to-r from-flamingo/10 via-pink-soft/10 to-rose-light/10 rounded-3xl p-10 md:p-14 border-2 border-flamingo/20">
            <div className="flex items-start gap-6">
              <div className="text-5xl flex-shrink-0">📊</div>
              <div>
                <h4 className="text-3xl font-black text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Suivi Recommandé
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Utilisez les outils natifs de chaque plateforme (Facebook Insights, YouTube Analytics, TikTok Creator Center, Instagram Insights) pour suivre ces métriques en temps réel. Analysez les données chaque semaine et adaptez votre stratégie en fonction des résultats.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white border-2 border-flamingo text-flamingo rounded-full font-bold">📱 Facebook Insights</span>
                  <span className="px-4 py-2 bg-white border-2 border-pink-deep text-pink-deep rounded-full font-bold">📺 YouTube Analytics</span>
                  <span className="px-4 py-2 bg-white border-2 border-rose-light text-rose-light rounded-full font-bold">🎵 TikTok Creator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
