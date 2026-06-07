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
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              Analyse par Plateforme
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Chaque plateforme joue un rôle spécifique dans l\'écosystème. Découvrez la stratégie optimisée pour chacune.
          </p>
        </div>

        <div className="grid gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-pink-soft/30 overflow-hidden hover:shadow-xl transition"
            >
              <div className={`h-2 bg-gradient-to-r ${platform.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{platform.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{platform.name}</h3>
                      <p className="text-lg text-gray-600">{platform.role}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-pink-pale rounded-full text-sm font-semibold text-flamingo">
                    {platform.frequency}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span>💪</span> Forces
                    </h4>
                    <ul className="space-y-2">
                      {platform.strengths.map((strength, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2">
                          <span className="text-flamingo mt-1">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span>🎯</span> Focus
                    </h4>
                    <p className="text-gray-700">{platform.focus}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span>📊</span> Objectif 30j
                    </h4>
                    <p className="text-gray-700">
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
