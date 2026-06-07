export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-flamingo rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-soft rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-pink-soft via-pink-pale to-rose-light rounded-3xl p-12 md:p-16 text-center border-3 border-flamingo/40 shadow-2xl card-hover">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Vous avez maintenant une <span className="font-bold text-flamingo">stratégie complète</span>, un <span className="font-bold text-pink-deep">calendrier détaillé</span> et tous les <span className="font-bold text-rose-light">outils nécessaires</span> pour maximiser votre engagement sur tous vos réseaux sociaux. Il est temps de passer à l'action et de construire votre communauté.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-800 p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur">
              <span className="text-3xl">✨</span>
              <p className="font-bold text-left">Calendrier de 30 jours prêt à l'emploi</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800 p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur">
              <span className="text-3xl">📊</span>
              <p className="font-bold text-left">Analyse détaillée de chaque plateforme</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800 p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur">
              <span className="text-3xl">🎯</span>
              <p className="font-bold text-left">Stratégie unifiée et cohérente</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-800 p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur">
              <span className="text-3xl">💡</span>
              <p className="font-bold text-left">Recommandations d'optimisation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/rapport_flamingo_emma.pdf"
              download="Rapport_Flamingo_Emma_Strategie_Reseaux_Sociaux.pdf"
              className="px-10 py-4 bg-gradient-to-r from-flamingo to-pink-deep text-white rounded-xl font-bold text-lg button-hover shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              📥 Télécharger le Rapport Complet
            </a>
            <a
              href="#"
              className="px-10 py-4 border-3 border-flamingo text-flamingo rounded-xl font-bold text-lg button-hover bg-white hover:bg-pink-pale transition"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              💬 Me Contacter
            </a>
          </div>

          <p className="text-sm text-gray-700 font-medium">
            ✨ Questions ? Consultez le rapport détaillé ou contactez-moi pour une consultation personnalisée.
          </p>
        </div>
      </div>
    </section>
  )
}
