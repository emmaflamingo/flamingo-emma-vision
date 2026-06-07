import { useState } from 'react'

export default function Calendar() {
  const [selectedWeek, setSelectedWeek] = useState(0)

  const weeks = [
    {
      title: 'Semaine 1',
      description: 'Présentation & Lancement',
      theme: '🚀',
      posts: [
        { day: 'Jour 1', platform: 'Facebook', time: '12h30', pillar: 'SLPV', title: 'Présentation douce' },
        { day: 'Jour 2', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
        { day: 'Jour 3', platform: 'TikTok', time: '12h00', pillar: 'IAEO', title: 'Avant/après IA' },
      ]
    },
    {
      title: 'Semaine 2',
      description: 'Consolidation & Engagement',
      theme: '💪',
      posts: [
        { day: 'Jour 8', platform: 'Facebook', time: '12h30', pillar: 'IAEO', title: 'Explication IA' },
        { day: 'Jour 9', platform: 'Instagram', time: '17h30', pillar: 'SPC', title: 'Question communauté' },
        { day: 'Jour 10', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    },
    {
      title: 'Semaine 3',
      description: 'Diversification & Storytelling',
      theme: '✨',
      posts: [
        { day: 'Jour 15', platform: 'Facebook', time: '17h30', pillar: 'IAEO', title: 'Coulisses IA' },
        { day: 'Jour 16', platform: 'Instagram', time: '12h30', pillar: 'SPC', title: 'Sondage Stories' },
        { day: 'Jour 17', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    },
    {
      title: 'Semaine 4',
      description: 'Clôture & Conversion',
      theme: '🎯',
      posts: [
        { day: 'Jour 22', platform: 'TikTok', time: '20h00', pillar: 'RAS', title: 'Teaser ambiance' },
        { day: 'Jour 25', platform: 'Fanvue', time: 'Variable', pillar: 'MON', title: 'AMA Exclusif' },
        { day: 'Jour 30', platform: 'YouTube', time: '10h00', pillar: 'RAS', title: 'Nouveau Short' },
      ]
    }
  ]

  const pillars = {
    'SLPV': { label: 'Soft Life & Pink Vibes', color: 'bg-pink-200', border: 'border-pink-400' },
    'IAEO': { label: 'IA & Esthétique', color: 'bg-purple-200', border: 'border-purple-400' },
    'RAS': { label: 'Relaxation & Son', color: 'bg-blue-200', border: 'border-blue-400' },
    'SPC': { label: 'Storytelling & Communauté', color: 'bg-green-200', border: 'border-green-400' },
    'MON': { label: 'Monétisation', color: 'bg-yellow-200', border: 'border-yellow-400' }
  }

  const platformColors = {
    'Facebook': 'from-blue-500 to-blue-600',
    'YouTube': 'from-red-500 to-red-600',
    'TikTok': 'from-black to-gray-800',
    'Instagram': 'from-pink-500 to-purple-500',
    'Fanvue': 'from-yellow-500 to-orange-500'
  }

  return (
    <section id="calendrier" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-pale/10 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              Calendrier Éditorial
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Un plan détaillé avec <span className="font-bold text-flamingo">idées de publications</span>, <span className="font-bold text-pink-deep">modèles de texte</span>, <span className="font-bold text-rose-light">hashtags</span> et <span className="font-bold text-flamingo">horaires optimaux</span>
          </p>
        </div>

        {/* Week selector */}
        <div className="mb-12 flex gap-4 overflow-x-auto pb-4 justify-center">
          {weeks.map((week, index) => (
            <button
              key={index}
              onClick={() => setSelectedWeek(index)}
              className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition transform hover:scale-105 ${
                selectedWeek === index
                  ? 'bg-gradient-to-r from-flamingo to-pink-deep text-white shadow-lg'
                  : 'bg-white border-2 border-pink-soft text-gray-800 hover:border-flamingo'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-xl mr-2">{week.theme}</span>
              {week.title}
            </button>
          ))}
        </div>

        {/* Selected week content */}
        <div className="bg-gradient-to-br from-white to-pink-pale/20 rounded-3xl border-2 border-pink-soft/30 p-10 md:p-12 shadow-xl">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{weeks[selectedWeek].theme}</span>
              <div>
                <h3 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {weeks[selectedWeek].title}
                </h3>
                <p className="text-lg text-gray-600 font-light">{weeks[selectedWeek].description}</p>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="space-y-6">
            {weeks[selectedWeek].posts.map((post, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl border-2 border-pink-soft/20 overflow-hidden card-hover shadow-md"
                style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <div className={`h-1 bg-gradient-to-r ${platformColors[post.platform] || 'from-pink-soft to-flamingo'}`}></div>
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Day badge */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-soft to-flamingo shadow-lg">
                        <span className="text-white font-black text-2xl">{post.day.split(' ')[1]}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="text-2xl font-black text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {post.title}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${pillars[post.pillar].color} ${pillars[post.pillar].border} border`}>
                          {pillars[post.pillar].label}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-700">📱 Plateforme:</span>
                          <span className="font-bold text-flamingo">{post.platform}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-700">🕐 Heure:</span>
                          <span className="font-bold text-pink-deep">{post.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <button className="px-6 py-3 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-xl font-bold button-hover">
                        Voir détails
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t-2 border-pink-soft/20">
            <h4 className="text-lg font-black text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Légende des Piliers
            </h4>
            <div className="grid md:grid-cols-5 gap-4">
              {Object.entries(pillars).map(([key, value]) => (
                <div key={key} className={`p-3 rounded-xl ${value.color} ${value.border} border-2 text-center`}>
                  <p className="font-bold text-sm text-gray-800">{value.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
