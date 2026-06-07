export default function Platforms() {
  const platforms = [
    {
      name: 'YouTube',
      icon: '📺',
      role: 'Cœur de l\'Ambiance',
      color: 'from-red-500 to-red-600',
      strengths: ['Contenu Evergreen', 'Fort potentiel SEO', 'Monétisation à long terme'],
      focus: 'Vidéos longues (3h+) + Shorts pour l\'humanisation',
      frequency: '1-2 vidéos/semaine',
      goal: '+100h de visionnage'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      role: 'Moteur de Découverte',
      color: 'from-black to-gray-800',
      strengths: ['Algorithme puissant', 'Croissance rapide', 'Esthétique populaire'],
      focus: 'Micro-vidéos esthétiques (15-30s)',
      frequency: '3-5 vidéos/semaine',
      goal: '+500 abonnés'
    },
    {
      name: 'Instagram',
      icon: '📸',
      role: 'Vitrine Lifestyle',
      color: 'from-pink-500 to-purple-500',
      strengths: ['Storytelling quotidien', 'Esthétique visuelle', 'Lien intime'],
      focus: 'Photos, Reels, Stories interactives',
      frequency: '3-4 posts/semaine',
      goal: '+200 abonnés'
    },
    {
      name: 'Facebook',
      icon: '👥',
      role: 'Hub Communautaire',
      color: 'from-blue-600 to-blue-700',
      strengths: ['Audience fidèle', 'Groupes de niche', 'Distribution ciblée'],
      focus: 'Contenu natif + Questions engageantes',
      frequency: '1 post/jour',
      goal: '+50 abonnés'
    },
    {
      name: 'Fanvue',
      icon: '💎',
      role: 'Destination Monétisation',
      color: 'from-yellow-500 to-orange-500',
      strengths: ['Revenus directs', 'Super-fans engagés', 'Contenu exclusif'],
      focus: 'Contenu intime & Behind-the-scenes',
      frequency: '2-3 posts/semaine',
      goal: '+10 abonnés payants'
    }
  ]

  return (
    <section id="platforms" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-pale/10 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              Analyse par Plateforme
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Chaque plateforme joue un rôle spécifique dans l'écosystème. Découvrez la <span className="font-bold text-flamingo">stratégie optimisée</span> pour chacune
          </p>
        </div>

        <div className="space-y-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border-2 border-pink-soft/20 overflow-hidden card-hover shadow-lg"
              style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${platform.color}`}></div>

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} shadow-lg transform group-hover:scale-110 transition duration-300`}>
                      <span className="text-5xl">{platform.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {platform.name}
                      </h3>
                      <p className="text-lg text-gray-600 font-bold mt-1">{platform.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-full text-sm font-bold accent-text">
                      {platform.frequency}
                    </span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold">
                      {platform.goal}
                    </span>
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Forces */}
                  <div className="p-6 bg-gradient-to-br from-pink-pale/40 to-rose-light/40 rounded-2xl border border-pink-soft/30">
                    <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>💪</span> Forces
                    </h4>
                    <ul className="space-y-3">
                      {platform.strengths.map((strength, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-3 font-medium">
                          <span className="text-flamingo font-bold mt-1 text-lg">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus */}
                  <div className="p-6 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-2xl border border-purple-300/30">
                    <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>🎯</span> Focus Stratégique
                    </h4>
                    <p className="text-gray-700 font-medium leading-relaxed text-lg">
                      {platform.focus}
                    </p>
                  </div>

                  {/* Objectif */}
                  <div className="p-6 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-2xl border border-yellow-300/30">
                    <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>📊</span> Objectif 30j
                    </h4>
                    <p className="text-gray-800 font-black text-2xl">
                      {platform.goal}
                    </p>
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
              <div className="text-5xl flex-shrink-0">🔗</div>
              <div>
                <h4 className="text-2xl font-black text-gray-800 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  L'Importance de la Synergie
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ces plateformes ne sont pas isolées. Elles forment un écosystème cohérent où le contenu est recyclé intelligemment, où chaque plateforme renforce les autres, et où l'audience est guidée naturellement vers une relation plus profonde avec votre marque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
