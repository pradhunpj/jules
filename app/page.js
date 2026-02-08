'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Music, Volume2, VolumeX } from 'lucide-react'

// --- DATA ARRAYS (Restored) ---
const valentineDays = [
  { id: 1, name: 'Rose Day', date: 'Feb 7', emoji: '🌹', color: 'from-rose-500/20 to-pink-500/20' },
  { id: 2, name: 'Propose Day', date: 'Feb 8', emoji: '💍', color: 'from-purple-500/20 to-pink-500/20' },
  { id: 3, name: 'Chocolate Day', date: 'Feb 9', emoji: '🍫', color: 'from-amber-700/20 to-rose-500/20' },
  { id: 4, name: 'Teddy Day', date: 'Feb 10', emoji: '🧸', color: 'from-pink-400/20 to-rose-400/20' },
  { id: 5, name: 'Promise Day', date: 'Feb 11', emoji: '🤝', color: 'from-blue-400/20 to-purple-400/20' },
  { id: 6, name: 'Hug Day', date: 'Feb 12', emoji: '🤗', color: 'from-orange-400/20 to-pink-400/20' },
  { id: 7, name: 'Kiss Day', date: 'Feb 13', emoji: '💋', color: 'from-red-400/20 to-pink-400/20' },
  { id: 8, name: "Valentine's Day", date: 'Feb 14', emoji: '❤️', color: 'from-red-500/20 to-rose-500/20' },
]

const letterContent = {
  1: "Happy Rose Day kunjatte ❤️\n\nActually rose day okke oru excuse maathram aanu…\n\nI just wanted to tell you how much you mean to me.\n\nNi ente life-il vannappo, ellam oru calm aayi.\n\nBefore you, days okke just pass aayi poyi.\n\nIppo, even normal days feel special, because I have you.\n\nNi ente side-il illaatha days polum,\n\nnine kurichu think cheyyumbo oru peace und.\n\nI feel understood, accepted, loved — without acting or pretending.\n\nLong distance easy alla, I know.\n\nChila days miss cheyyumbo really hurt cheyyum.\n\nBut still, if I had to choose again,\n\nI’d choose you — every single time.\n\nNi ente comfort aanu,\n\nente strength aanu,\n\nente safe place aanu.\n\nSo today, ee rose day-il,\n\nI’m sending you my heart as a rose 🌹\n\nFragile, real, and only yours.\n\nMiss you a lot da.\n\nLove you more than I can ever type properly ❤️\n\nAlways yours,\n\nPradhun\n\n  if u get time write a letter for me for each day, or u can voice notes abt ur thots",
  2: "Happy Propose Day Kunjatte ❤️\n\nActually “propose” ennokke parayumbo oru filmy feel und, alle?\nBut tbh, my heart's always with u.\n\nI don’t remember the exact moment I fell for you.\n\nSlowly, without warning, you became my favourite person.\n\n In my random thoughts, in my happy moments,during my low days — everywhere, it’s u.\n\nWen u came into ma life, i understood whts love. No pressure, no drama; just comfort, trust, and a lot of care.Long distance aanu nammal, but still, I feel connected to u in ways I can’t explain.Miles undengilum, my heart never feels far from you.\n\nSo today, Propose Day-il,I want to ask you this — not loudly, not dramatically,but from the most honest place in my heart.\n\nWill you stay with me? In my chaos days,in my calm days,in everything that life throws at us. I don’t promise perfection. But I promise effort, respect,and a LOVE that chooses you every single day.\n\nSo yeah… this is me, proposing to you again, in my own simple way ❤️\n\nAlways yours,\nPradhun",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
}

// --- MAIN COMPONENT ---
export default function ValentinePage() {
  const [hasEntered, setHasEntered] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audioElement, setAudioElement] = useState(null)

  useEffect(() => {
    const audio = new Audio('/placeholder-music.mp3')
    audio.loop = true
    audio.volume = 0.4
    setAudioElement(audio)
    return () => { if (audio) { audio.pause(); audio.src = ''; } }
  }, [])

  const handleEnter = () => {
    setHasEntered(true)
    if (audioElement) {
      audioElement.play().catch(e => console.log('Audio play failed:', e))
      setIsMusicPlaying(true)
    }
  }

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) audioElement.pause()
      else audioElement.play()
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950">

      {/* 1. ANIMATED BACKGROUND GRID (Optimized for smoothness) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 h-full">
          {[
            "/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg", "/photos/4.jpg",
            "/photos/5.jpg", "/photos/6.jpg", "/photos/7.jpg", "/photos/8.jpg",
            "/photos/9.jpg", "/photos/10.jpg", "/photos/11.jpg", "/photos/12.jpg"
          ].map((imgSrc, i) => (
            <motion.div
              key={i}
              className={`relative rounded-lg overflow-hidden bg-rose-400/10 ${i > 5 ? 'hidden md:block' : ''}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
              style={{ willChange: 'transform' }}
            >
              <img src={imgSrc} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. UI LAYER */}
      <div className="relative z-20">
        {hasEntered && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/30 flex items-center justify-center text-rose-200 hover:bg-rose-500/30 transition-all shadow-lg"
          >
            {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </motion.button>
        )}

        <AnimatePresence>
          {!hasEntered ? (
            <motion.div
              key="landing"
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-40"
            >
              <div className="text-center space-y-8">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                  <Heart className="w-20 h-20 mx-auto text-rose-400 mb-6 animate-pulse" />
                  <h1 className="font-serif text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 mb-4">
                    Our Valentine Week
                  </h1>
                  <p className="text-xl md:text-2xl text-rose-200/80 font-light">
                    A collection of moments, promises, and letters written just for you.
                  </p>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  className="px-12 py-4 rounded-full bg-gradient-to-r from-rose-500/30 to-pink-500/30 backdrop-blur-md border-2 border-rose-300/50 text-rose-100 text-lg font-medium shadow-2xl"
                >
                  Tap to Begin ❤️
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-screen flex flex-col items-center justify-center p-4 py-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 mb-12">
                Choose Your Day ✨
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
                {valentineDays.map((day, index) => (
                  <motion.button
                    key={day.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedDay(day)}
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${day.color} backdrop-blur-xl border border-rose-300/30 shadow-2xl hover:shadow-rose-500/30 transition-all group overflow-hidden`}
                  >
                    <div className="relative z-10 text-center space-y-3">
                      <div className="text-6xl mb-2">{day.emoji}</div>
                      <h3 className="text-2xl font-bold text-rose-100">{day.name}</h3>
                      <p className="text-rose-300/80 text-sm">{day.date}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. LETTER MODAL (Restored Aesthetic) */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedDay(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-rose-950/90 via-purple-950/90 to-slate-950/90 backdrop-blur-2xl border border-rose-300/30 shadow-2xl"
            >
              <button onClick={() => setSelectedDay(null)} className="sticky top-4 left-full ml-4 w-12 h-12 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/30 flex items-center justify-center text-rose-200">
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-7xl">{selectedDay.emoji}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
                    {selectedDay.name}
                  </h3>
                  <p className="text-rose-300/60 text-lg">{selectedDay.date}</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
                <div className="relative">
                  <div className="relative z-10 text-rose-100/90 text-lg md:text-xl leading-relaxed font-dancing whitespace-pre-wrap">
                    {letterContent[selectedDay.id]}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}