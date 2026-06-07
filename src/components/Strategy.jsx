export default function Strategy() {
  const funnel = [
    {
      stage: 'Découverte',
      platforms: ['TikTok', 'YouTube Shorts', 'Reels'],
      action: 'L\'utilisateur voit une vidéo courte et esthétique',
      icon: '🔍',
      color: 'from-yellow-300 to-orange-300',
      percentage: '100%'
    },
    {
      stage: 'Consommation',
      platforms: ['YouTube (Long)', 'Instagram Posts'],
      action: 'L\'utilisateur s\'immerge dans l\'ambiance ou le lifestyle',
      icon: '👀',
      color: 'from-orange-300 to-red-300',
      percentage: '60%'
    },
    {
      stage: 'Attachement',
      platforms: ['Instagram Stories', 'Facebook'],
      action: 'L\'utilisateur interagit avec Emma (sondages, questions)',
      icon: '❤️',
      color: 'from-red-300 to-pink-300',
      percentage: '35%'
    },
    {
      stage: 'Conversion',
      platforms: ['Fanvue', 'Beacons'],
      action: 'L\'utilisateur veut plus d\'intimité ou soutenir Emma',
      icon: '💎',
      color: 'from-pink-300 to-purple-300',
      percentage: '10%'
    }
  ]

  return (
    <section id="strategie" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-pale/30 via-white to-rose-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              L'Entonnoir de Conversion
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Un écosystème cohérent où chaque plateforme guide l'audience vers la <span className="font-bold text-flamingo">prochaine étape</span>
          </p>
        </div>

        <div className="space-y-8">
          {funnel.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < funnel.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-flamingo to-pink-soft -bottom-12 opacity-30"></div>
              )}
              
              {/* Main card */}
              <div className={`bg-gradient-to-r ${step.color} rounded-3xl p-1 card-hover`}>
                <div className="bg-white rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Left side - Icon and stage */}
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                        <span className="text-5xl">{step.icon}</span>
                      </div>
                    </div>

                    {/* Middle - Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-4xl md:text-5xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {step.stage}
                        </h3>
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full font-bold text-sm`}>
                          Étape {index + 1}
                        </span>
                      </div>

                      <p className="text-lg text-gray-700 mb-6 font-light">
                        {step.action}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.platforms.map((platform, i) => (
                          <span key={i} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-bold text-sm border border-gray-200">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Percentage */}
                    <div className="flex-shrink-0 text-center">
                      <div className="text-5xl font-black text-transparent bg-gradient-to-r from-flamingo to-pink-deep bg-clip-text mb-2">
                        {step.percentage}
                      </div>
                      <p className="text-sm text-gray-600 font-bold">Conversion</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
                      style={{ width: step.percentage }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="mt-20 pt-16 border-t-2 border-pink-soft/30">
          <div className="bg-gradient-to-r from-pink-soft/20 via-flamingo/10 to-rose-light/20 rounded-3xl p-10 border-2 border-pink-soft/30">
            <div className="flex items-start gap-6">
              <div className="text-5xl">💡</div>
              <div>
                <h4 className="text-2xl font-black text-gray-800 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Clé du Succès
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chaque plateforme doit offrir une valeur unique tout en créant un pont vers la plateforme suivante. L'objectif n'est pas de forcer les utilisateurs à cliquer, mais de les guider naturellement à travers un parcours cohérent et engageant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
