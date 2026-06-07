export default function Vision() {
  const pillars = [
    {
      icon: '🌸',
      title: 'Soft Life & Pink Vibes',
      description: 'Contenu visuel et narratif incarnant la douceur, le bien-être et l\'esthétique rose.',
      color: 'from-pink-soft to-rose-light'
    },
    {
      icon: '🤖',
      title: 'Créations IA & Esthétique Onirique',
      description: 'Mettre en avant les créations générées par IA et explorer l\'aspect rêveur des visuels.',
      color: 'from-purple-300 to-pink-300'
    },
    {
      icon: '🌧️',
      title: 'Relaxation & Ambiance Sonore',
      description: 'Capitaliser sur les sons de pluie et ambiances auditives pour la détente.',
      color: 'from-blue-200 to-cyan-200'
    },
    {
      icon: '💭',
      title: 'Storytelling Personnel & Communauté',
      description: 'Partager des anecdotes et créer un lien authentique avec l\'audience.',
      color: 'from-lavender to-pink-pale'
    }
  ]

  return (
    <section id="vision" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-pale/10 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5% w-64 h-64 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-5% w-64 h-64 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="bg-gradient-to-r from-flamingo via-pink-deep to-rose-light bg-clip-text text-transparent">
              Les 4 Piliers
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Une stratégie fondée sur <span className="font-bold text-flamingo">quatre piliers</span> qui structurent tout votre contenu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animation: `slideUp 0.8s ease-out ${index * 0.15}s both` }}
            >
              {/* Background gradient card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl`}></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 border-2 border-pink-soft/20 card-hover shadow-lg overflow-hidden">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`}></div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} shadow-lg transform group-hover:scale-110 transition duration-300`}>
                    <span className="text-5xl">{pillar.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  {pillar.description}
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-20 group-hover:opacity-40 transition">
                  <div className="w-2 h-2 rounded-full bg-flamingo"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-soft"></div>
                  <div className="w-2 h-2 rounded-full bg-rose-light"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with stats */}
        <div className="mt-20 pt-20 border-t-2 border-pink-soft/30">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-pale/30 to-rose-light/30 rounded-2xl border border-pink-soft/20">
              <div className="text-4xl font-black text-flamingo mb-2">5</div>
              <p className="text-gray-700 font-bold">Réseaux Sociaux</p>
              <p className="text-sm text-gray-600">Analysés & Optimisés</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-2xl border border-purple-300/20">
              <div className="text-4xl font-black text-purple-600 mb-2">30</div>
              <p className="text-gray-700 font-bold">Jours de Contenu</p>
              <p className="text-sm text-gray-600">Prêt à l'emploi</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-2xl border border-blue-300/20">
              <div className="text-4xl font-black text-blue-600 mb-2">4</div>
              <p className="text-gray-700 font-bold">Piliers de Contenu</p>
              <p className="text-sm text-gray-600">Cohérents & Structurés</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-lavender/30 to-pink-pale/30 rounded-2xl border border-lavender/20">
              <div className="text-4xl font-black text-pink-600 mb-2">∞</div>
              <p className="text-gray-700 font-bold">Croissance</p>
              <p className="text-sm text-gray-600">Potentiel Illimité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
