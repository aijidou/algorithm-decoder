'use client'

import { useState } from 'react'
import { Search, BarChart3, Target, Zap, Crown, ArrowRight } from 'lucide-react'

export default function Home() {
  const [channelUrl, setChannelUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    // 実装予定: 実際の分析処理
    setTimeout(() => {
      setIsAnalyzing(false)
      alert('分析完了！（デモ版）')
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Algorithm Decoder
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">機能</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">料金</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">デモ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* メインセクション */}
      <main>
        {/* ヒーローセクション */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                YouTube
              </span>
              <br />
              <span className="text-white">アルゴリズムを</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                完全解析
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Claude AI搭載の究極分析ツールが、YouTubeの隠されたアルゴリズムを数学的に解読。<br />
              あなたの動画を確実にバイラルへ導きます。
            </p>

            {/* 分析ボックス */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <Zap className="inline mr-2 text-yellow-400" />
                今すぐ無料分析
              </h3>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="YouTubeチャンネルURLを入力"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !channelUrl}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center min-w-[140px]"
                >
                  {isAnalyzing ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      分析開始 <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 機能セクション */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                革命的な分析機能
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 機能1 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors">
                <Search className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">アルゴリズム逆算</h3>
                <p className="text-gray-300">
                  50種類以上の指標から、YouTubeの隠されたランキング要因を数学的に解析。競合が知らない秘密を暴露。
                </p>
              </div>

              {/* 機能2 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
                <BarChart3 className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">バイラル予測</h3>
                <p className="text-gray-300">
                  Claude AIが過去データから学習し、次の動画の再生回数を95%の精度で予測。失敗のリスクを排除。
                </p>
              </div>

              {/* 機能3 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-colors">
                <Target className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">最適化提案</h3>
                <p className="text-gray-300">
                  タイトル、サムネイル、投稿時間まで、1時間単位で最適解を算出。即座に収益向上を実現。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                驚異的な成果
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">312%</div>
                <div className="text-gray-300">平均再生回数向上</div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">89%</div>
                <div className="text-gray-300">バイラル予測精度</div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24H</div>
                <div className="text-gray-300">効果実感時間</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              今すぐアルゴリズムを
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                味方につけよう
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              無料トライアルで、あなたのチャンネルの隠れた可能性を発見してください。
            </p>

            <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl font-semibold rounded-xl transition-all duration-200 shadow-2xl hover:shadow-purple-500/25">
              無料で分析を開始
            </button>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold">Algorithm Decoder</span>
          </div>
          <p className="text-gray-400">
            Powered by Claude AI © 2025 Algorithm Decoder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
