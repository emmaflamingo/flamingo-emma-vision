import { useState } from 'react'

export default function Calendar() {
  const [selectedWeek, setSelectedWeek] = useState(0)

  const weeks = [
    {
      title: 'Semaine 1',
      description: 'Présentation & Lancement',
      posts: [
        { day: 'Jour 1', platform: 'Facebook', time: '12h30', pillar: 'SLPV', title: 'Présentation douce' },
        { day: 'Jour 2', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
        { day: 'Jour 3', platform: 'TikTok', time: '12h00', pillar: 'IAEO', title: 'Avant/après IA' },
      ]
    },
    {
      title: 'Semaine 2',
      description: 'Consolidation & Engagement',
      posts: [
        { day: 'Jour 8', platform: 'Facebook', time: '12h30', pillar: 'IAEO', title: 'Explication IA' },
        { day: 'Jour 9', platform: 'Instagram', time: '17h30', pillar: 'SPC', title: 'Question communauté' },
        { day: 'Jour 10', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    },
    {
      title: 'Semaine 3',
      description: 'Diversification & Storytelling',
      posts: [
        { day: 'Jour 15', platform: 'Facebook', time: '17h30', pillar: 'IAEO', title: 'Coulisses IA' },
        { day: 'Jour 16', platform: 'Instagram', time: '12h30', pillar: 'SPC', title: 'Sondage Stories' },
        { day: 'Jour 17', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    },
    {
      title: 'Semaine 4',
      description: 'Clôture & Conversion',
      posts: [
        { day: 'Jour 22', platform: 'TikTok', time: '20h00', pillar: 'RAS', title: 'Teaser ambiance' },
        { day: 'Jour 25', platform: 'Fanvue', time: 'Variable', pillar: 'MON', title: 'AMA Exclusif' },
        { day: 'Jour 30', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    }
  ]

  const pillars = {
    'SLPV': { label: 'Soft Life & Pink Vibes', color: 'bg-pink-200' },
    'IAEO': { label: 'IA & Esthétique', color: 'bg-purple-200' },
    'RAS': { label: 'Relaxation & Son', color: 'bg-blue-200' },
    'SPC': { label: 'Storytelling & Communauté', color: 'bg-green-200' },
    'MON': { label: 'Monétisation', color: 'bg-yellow-200' }
  }

  return (
    <section id="calendrier" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              Calendrier Éditorial 30 Jours
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Un plan détaillé avec idées de publications, modèles de texte, hashtags et horaires optimaux.
          </p>
        </div>

        <div className="mb-8 flex gap-4 overflow-x-auto pb-4">
          {weeks.map((week, index) => (
            <button
              key={index}
              onClick={() => setSelectedWeek(index)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                selectedWeek === index
                  ? 'bg-gradient-to-r from-pink-soft to-flamingo text-white'
                  : 'bg-white border-2 border-pink-soft text-gray-800 hover:border-flamingo'
              }`}
            >
              {week.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border-2 border-pink-soft/50 p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{weeks[selectedWeek].title}</h3>
            <p className="text-gray-700 text-lg">{weeks[selectedWeek].description}</p>
          </div>

          <div className="space-y-4">
            {weeks[selectedWeek].posts.map((post, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-pale/30 to-rose-light/30 rounded-lg hover:shadow-md transition">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-pink-soft to-flamingo">
                    <span className="text-white font-bold text-sm">{post.day.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-gray-800">{post.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${pillars[post.pillar].color}`}>
                      {pillars[post.pillar].label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="font-medium">{post.platform}</span>
                    <span>🕐 {post.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-pale/50 to-rose-light/50 rounded-lg border border-pink-soft/50">
            <h4 className="font-bold text-gray-800 mb-3">💡 Conseil</h4>
            <p className="text-gray-700">
              Le calendrier complet comprend 30 jours détaillés avec idées spécifiques, modèles de texte prêts à l\'emploi, combinaisons de hashtags optimisées et horaires de publication basés sur les meilleures pratiques de chaque plateforme.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
