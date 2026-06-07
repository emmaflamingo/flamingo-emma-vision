export default function Platforms() {
  const platforms = [
    {
      name: 'YouTube',
      icon: '📺',
      role: 'Cœur de l\'Ambiance',
      color: 'from-red-500 to-red-600',
      strengths: ['Contenu Evergreen', 'Fort potentiel SEO', 'Monétisation à long terme'],
      focus: 'Vidéos longues (3h+) + Shorts pour l\'humanisation',
      frequency: '1-2 vidéos/semaine'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      role: 'Moteur de Découverte',
      color: 'from-black to-gray-800',
      strengths: ['Algorithme puissant', 'Croissance rapide', 'Esthétique populaire'],
      focus: 'Micro-vidéos esthétiques (15-30s)',
      frequency: '3-5 vidéos/semaine'
    },
    {
      name: 'Instagram',
      icon: '📸',
      role: 'Vitrine Lifestyle',
      color: 'from-pink-500 to-purple-500',
      strengths: ['Storytelling quotidien', 'Esthétique visuelle', 'Lien intime'],
      focus: 'Photos, Reels, Stories interactives',
      frequency: '3-4 posts/semaine'
    },
    {
      name: 'Facebook',
      icon: '👥',
      role: 'Hub Communautaire',
      color: 'from-blue-600 to-blue-700',
      strengths: ['Audience fidèle', 'Groupes de niche', 'Distribution ciblée'],
      focus: 'Contenu natif + Questions engageantes',
      frequency: '1 post/jour'
    },
    {
      name: 'Fanvue',
      icon: '💎',
      role: 'Destination Monétisation',
      color: 'from-yellow-500 to-orange-500',
      strengths: ['Revenus directs', 'Super-fans engagés', 'Contenu exclusif'],
      focus: 'Contenu intime & Behind-the-scenes',
      frequency: '2-3 posts/semaine'
    }
  ]

  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-pale/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              Analyse par Plateforme
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Chaque plateforme joue un rôle spécifique dans l'écosystème. Découvrez la stratégie optimisée pour chacune.
          </p>
        </div>

        <div className="grid gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-pink-soft/30 overflow-hidden card-hover shadow-lg"
            >
              <div className={`h-3 bg-gradient-to-r ${platform.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl animate-float">{platform.icon}</span>
                    <div>
                      <h3 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {platform.name}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">{platform.role}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-full text-sm font-bold accent-text">
                    {platform.frequency}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="p-4 bg-gradient-to-br from-pink-pale/30 to-rose-light/30 rounded-xl border border-pink-soft/20">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>💪</span> Forces
                    </h4>
                    <ul className="space-y-2">
                      {platform.strengths.map((strength, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2 font-medium">
                          <span className="text-flamingo font-bold mt-1">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-flamingo/10 to-pink-deep/10 rounded-xl border border-flamingo/20">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>🎯</span> Focus
                    </h4>
                    <p className="text-gray-700 font-medium leading-relaxed">{platform.focus}</p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-rose-light/30 to-peach/30 rounded-xl border border-rose-light/20">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>📊</span> Objectif 30j
                    </h4>
                    <p className="text-gray-700 font-bold text-lg">
                      {platform.name === 'YouTube' && '+100h de visionnage'}
                      {platform.name === 'TikTok' && '+500 abonnés'}
                      {platform.name === 'Instagram' && '+200 abonnés'}
                      {platform.name === 'Facebook' && '+50 abonnés'}
                      {platform.name === 'Fanvue' && '+10 abonnés payants'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
