export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-soft via-pink-pale to-rose-light rounded-3xl p-12 text-center border-2 border-flamingo/30 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Vous avez maintenant une stratégie complète, un calendrier détaillé et les outils pour maximiser votre engagement sur tous vos réseaux sociaux. Il est temps de passer à l\'action et de construire votre communauté.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-800">
              <span className="text-2xl">✨</span>
              <p>Calendrier de 30 jours prêt à l\'emploi</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800">
              <span className="text-2xl">📊</span>
              <p>Analyse détaillée de chaque plateforme</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800">
              <span className="text-2xl">🎯</span>
              <p>Stratégie unifiée et cohérente</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800">
              <span className="text-2xl">💡</span>
              <p>Recommandations d\'optimisation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rapport_flamingo_emma.pdf"
              download="Rapport_Flamingo_Emma_Strategie_Reseaux_Sociaux.pdf"
              className="px-8 py-4 bg-gradient-to-r from-pink-soft to-flamingo text-white rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Télécharger le Rapport Complet
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-flamingo text-flamingo rounded-lg font-bold text-lg hover:bg-pink-pale transition"
            >
              Me Contacter
            </a>
          </div>

          <p className="text-sm text-gray-700 mt-8">
            💬 Questions ? Consultez le rapport détaillé ou contactez-moi pour une consultation personnalisée.
          </p>
        </div>
      </div>
    </section>
  )
}
