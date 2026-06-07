export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-soft to-flamingo rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🦩</span>
              </div>
              <span className="font-bold text-lg">Flamingo Emma</span>
            </div>
            <p className="text-gray-400 text-sm">
              Soft Life, Pink Vibes & Créations IA. Un univers de douceur et de détente.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Plateformes</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.youtube.com/@flamingoemma" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">YouTube</a></li>
              <li><a href="https://www.tiktok.com/@flamingo.emma6" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">TikTok</a></li>
              <li><a href="https://www.instagram.com/flamingo.emma/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">Instagram</a></li>
              <li><a href="https://www.facebook.com/people/FlamingoEmma/61589256928240/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#vision" className="hover:text-pink-soft transition">Vision</a></li>
              <li><a href="#strategie" className="hover:text-pink-soft transition">Stratégie</a></li>
              <li><a href="#calendrier" className="hover:text-pink-soft transition">Calendrier</a></li>
              <li><a href="#metrics" className="hover:text-pink-soft transition">Métriques</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connexion</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.fanvue.com/emmaflamingo" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">Fanvue</a></li>
              <li><a href="https://beacons.ai/emmaflamingo" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition">Beacons</a></li>
              <li><a href="mailto:contact@flamingoemma.com" className="hover:text-pink-soft transition">Email</a></li>
              <li><a href="#contact" className="hover:text-pink-soft transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Flamingo Emma. Tous droits réservés. | Stratégie créée par Manus AI
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/flamingo.emma/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-soft transition text-2xl">
                <span className="sr-only">Instagram</span>
                📸
              </a>
              <a href="https://www.tiktok.com/@flamingo.emma6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-soft transition text-2xl">
                <span className="sr-only">TikTok</span>
                🎵
              </a>
              <a href="https://www.youtube.com/@flamingoemma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-soft transition text-2xl">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
