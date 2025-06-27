// app/layout.js
export const metadata = {
  title: 'Algorithm Decoder - YouTube分析の革命',
  description: 'AIが解析するYouTubeアルゴリズム。Claude搭載の最強分析ツール',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gray-950 text-white min-h-screen">
        <div className="relative">
          {/* グラデーション背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
