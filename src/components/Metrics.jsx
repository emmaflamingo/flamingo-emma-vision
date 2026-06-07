export default function Metrics() {
  const metrics = [
    {
      title: 'Réactions',
      description: 'Mesure l\'adhésion émotionnelle rapide',
      action: 'Renforcer les visuels et formulations gagnantes'
    },
    {
      title: 'Commentaires',
      description: 'Mesure la qualité de l\'interaction',
      action: 'Reprendre les questions qui obtiennent des réponses longues'
    },
    {
      title: 'Partages',
      description: 'Mesure la valeur sociale du contenu',
      action: 'Transformer les posts partageables en séries récurrentes'
    },
    {
      title: 'Clics Sortants',
      description: 'Mesure l\'intérêt pour YouTube, TikTok ou Beacons',
      action: 'Garder les liens seulement lorsqu\'un post natif les prépare'
    },
    {
      title: 'Nouveaux Abonnés',
      description: 'Mesure la capacité d\'acquisition',
      action: 'Identifier les jours et thèmes qui précèdent les gains'
    }
  ]

  const timeline = [
    {
      week: 'Semaine 5',
      action: 'Identifier les 5 meilleurs posts du mois',
      goal: 'Comprendre les thèmes et horaires gagnants'
    },
    {
      week: 'Semaine 6',
      action: 'Doubler les formats gagnants',
      goal: 'Stabiliser l\'engagement'
    },
    {
      week: 'Semaine 7',
      action: 'Tester une mini-série récurrente',
      goal: 'Créer une habitude d\'audience'
    },
    {
      week: 'Semaine 8',
      action: 'Introduire une conversion douce',
      goal: 'Diriger vers YouTube/Beacons sans affaiblir Facebook'
    }
  ]

  return (
    <section id="metrics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-pale/50 to-rose-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-deep to-flamingo bg-clip-text text-transparent">
              Mesure & Optimisation
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Une stratégie agile nécessite un suivi constant et des ajustements basés sur les données réelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Indicateurs Clés</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-pink-soft/30 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                  <p className="text-sm font-semibold text-flamingo">→ {metric.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Plan d\'Optimisation</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {index < timeline.length - 1 && (
                    <div className="absolute left-3 top-10 w-0.5 h-12 bg-gradient-to-b from-flamingo to-pink-soft"></div>
                  )}
                  <div className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-br from-pink-soft to-flamingo rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 5}</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-pink-soft/30">
                    <p className="font-bold text-gray-800">{item.week}</p>
                    <p className="text-sm text-gray-700 mt-1">{item.action}</p>
                    <p className="text-xs text-flamingo font-semibold mt-2">🎯 {item.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-pink-soft/50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Routine de Mesure Hebdomadaire</h3>
          <p className="text-gray-700 mb-6">
            Comparez les publications par <strong>pilier</strong>, par <strong>format</strong> et par <strong>horaire</strong>, plutôt que de juger chaque post isolément. Après 30 jours, vous devriez identifier 2-3 formats gagnants et 1-2 créneaux à renforcer.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-pale/30 rounded-lg">
              <p className="font-semibold text-gray-800">✅ À faire</p>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>• Analyser les données chaque semaine</li>
                <li>• Comparer les piliers et formats</li>
                <li>• Tester de nouveaux horaires</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-light/30 rounded-lg">
              <p className="font-semibold text-gray-800">❌ À éviter</p>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>• Juger sur un seul post</li>
                <li>• Abandonner trop vite</li>
                <li>• Ignorer les commentaires</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
