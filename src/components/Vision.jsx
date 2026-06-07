export default function Vision() {
  const pillars = [
    {
      icon: '🌸',
      title: 'Soft Life & Pink Vibes',
      description: 'Contenu visuel et narratif incarnant la douceur, le bien-être et l\'esthétique rose.'
    },
    {
      icon: '🤖',
      title: 'Créations IA & Esthétique Onirique',
      description: 'Mettre en avant les créations générées par IA et explorer l\'aspect rêveur des visuels.'
    },
    {
      icon: '🌧️',
      title: 'Relaxation & Ambiance Sonore',
      description: 'Capitaliser sur les sons de pluie et ambiances auditives pour la détente.'
    },
    {
      icon: '💭',
      title: 'Storytelling Personnel & Communauté',
      description: 'Partager des anecdotes et créer un lien authentique avec l\'audience.'
    }
  ]

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              Les 4 Piliers
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Une stratégie cohérente repose sur des piliers solides. Découvrez les fondations de l\'univers Flamingo Emma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-pink-pale rounded-2xl border border-pink-soft/30 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
              <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
