'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Music, Volume2, VolumeX } from 'lucide-react'

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
  1: "My dearest love,\n\nOn this beautiful Rose Day, I want to give you not just a rose, but my promise that like this flower, my love for you will always bloom fresh and beautiful. Every petal represents a memory we've shared, every thorn a challenge we've overcome together. You are the garden where my heart finds peace, and I am grateful for every moment we've spent together.\n\nJust as a rose needs sunshine and care to flourish, you've nurtured my soul with your kindness and love. Thank you for being the most beautiful part of my life. This rose is a symbol of my eternal love for you – a love that grows deeper with each passing day.\n\nForever yours,\nWith all my love 🌹",

  2: "My beloved,\n\nToday, on Propose Day, I want to ask you again and again – will you continue to be mine? Every day with you feels like I'm proposing anew, asking you to share another sunrise, another laugh, another dream with me. You are the answer to questions I didn't even know I had, the melody to songs I've yet to sing.\n\nFrom the moment our paths crossed, my life transformed into something magical. You are my today and all of my tomorrows. I promise to love you through every season, to hold your hand through every storm, and to celebrate with you in every sunshine. You make my ordinary days extraordinary.\n\nSo here I am, on bended knee of my heart, asking you to be mine forever. Because darling, you are my always.\n\nYours eternally 💍",

  3: "Sweetest love,\n\nHappy Chocolate Day to the person who makes life sweeter than any confection ever could! If love were chocolate, mine for you would be the richest, most indulgent kind – smooth, irresistible, and absolutely impossible to get enough of.\n\nYou melt my heart the way chocolate melts in your mouth – completely and wonderfully. Every moment with you is like unwrapping a new flavor, discovering new depths of joy and happiness I never knew existed. You're the sweetness in my coffee, the warmth in my winters, the treat I never want to end.\n\nThank you for making every day feel like a celebration, for filling my life with moments so sweet they could rival the finest chocolate. Here's to many more sweet memories together, my love.\n\nWith the sweetest love,\nForever yours 🍫",

  4: "My cuddly love,\n\nOn this Teddy Day, I wish I could be your teddy bear – always there to hold you, to comfort you, to keep you warm. But since I can't always be physically present, I hope this teddy reminds you that my love is constant, soft, and always wraps around you like the warmest hug.\n\nJust like a teddy bear never judges and always listens, I want you to know that I'm here for you – in your happiest moments and your toughest days. You can hold onto me when you're scared, squeeze me when you're excited, and lean on me when you're tired. My arms will always be your safe place.\n\nEvery time you look at a teddy bear, remember that somewhere, I'm thinking of you, sending you all my love and warmth. You are my comfort, my joy, and my heart's home.\n\nWith endless cuddles,\nYour forever teddy 🧸",

  5: "My precious love,\n\nHappy Promise Day, my darling. Today, I make you promises that come from the deepest chambers of my heart:\n\nI promise to love you on your worst days as much as your best days. I promise to hold your hand through the storms and dance with you in the rain. I promise to listen when you need to talk and to give you silence when you need space.\n\nI promise to be your biggest cheerleader, celebrating your victories as if they were my own. I promise to wipe your tears, share your laughter, and be the shoulder you can always lean on. I promise to choose you every single day, even when it's difficult.\n\nMost importantly, I promise to grow with you, to build dreams with you, and to create a life so beautiful that we'll never stop being grateful for finding each other. These aren't just words – they are the foundation of our forever.\n\nWith solemn promises,\nYours always 🤝",

  6: "My warm embrace,\n\nHappy Hug Day to the person whose arms feel like home! There's something magical about your hugs – they have this incredible power to make everything better. A bad day disappears, worries fade away, and suddenly, the world feels right again.\n\nYour hugs speak a language that words cannot express. They say 'I'm here,' 'You're safe,' 'You're loved,' all at once. In your embrace, I find comfort, strength, and peace. It's where I'm most vulnerable and yet most protected. It's where I truly belong.\n\nI wish I could wrap you in the biggest hug right now and hold you until you feel every ounce of love I have for you. Until then, know that my heart is always hugging yours, keeping you close even when we're apart. You are my safe haven, my peaceful place.\n\nWith the warmest embrace,\nForever hugging you 🤗",

  7: "My sweetest kiss,\n\nOn this Kiss Day, I think about all the kisses we've shared – the gentle good morning kisses, the passionate goodnight kisses, the silly kisses that make us laugh, and the tender kisses that make time stand still. Each one is a beautiful bookmark in the story of us.\n\nYour kisses are poetry without words, conversations without sound. They tell me everything I need to know – that I'm loved, cherished, desired, and chosen. Every kiss from you feels like the first one, sending butterflies through my soul and making my heart skip beats.\n\nI could write volumes about the magic in your kiss, but words pale in comparison to the real thing. So here's sending you a million kisses through this letter – kisses on your forehead for peace, on your cheeks for joy, and on your lips for eternal love.\n\nWith countless kisses,\nYour forever love 💋",

  8: "My eternal Valentine,\n\nHappy Valentine's Day to the love of my life, my soulmate, my everything. Today is not just about celebrating love – it's about celebrating US, the beautiful journey we're on together, and the incredible future that awaits us.\n\nYou are the reason I believe in magic, in destiny, in love that transcends everything. You've shown me what it means to be truly loved and to love truly in return. Every day with you is a gift I cherish, a page in our beautiful story that I reread with joy.\n\nThank you for choosing me, for loving me with all my flaws, for making me laugh when I want to cry, for being my partner in every adventure. Thank you for being you – authentic, beautiful, and absolutely perfect in your imperfection.\n\nAs we celebrate this day of love, know that you are my forever Valentine. Not just today, not just this week, but every single day of my life. I love you more than words could ever express, more than actions could ever show, with every fiber of my being.\n\nForever and always,\nYour Valentine ❤️\n\nP.S. Here's to a lifetime of Valentine's Days together, my love. Our story is just beginning."
}

export default function ValentinePage() {
  const [hasEntered, setHasEntered] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audioElement, setAudioElement] = useState(null)

  useEffect(() => {
    // Initialize audio element


    const audio = new Audio('/placeholder-music.mp3') // Replace with your music file
    audio.loop = true
    audio.volume = 0.4
    setAudioElement(audio)

    return () => {
      if (audio) {
        audio.pause()
        audio.src = ''
      }
    }
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
      if (isMusicPlaying) {
        audioElement.pause()
      } else {
        audioElement.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  const openLetter = (day) => {
    setSelectedDay(day)
  }

  const closeLetter = () => {
    setSelectedDay(null)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950">
      {/* Animated Background Photo Grid */}
      {/* Animated Background Photo Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 h-full">
          {[
            "/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg",
            "/photos/4.jpg", "/photos/5.jpg", "/photos/6.jpg",
            "/photos/7.jpg", "/photos/8.jpg", "/photos/9.jpg",
            "/photos/10.jpg", "/photos/11.jpg", "/photos/12.jpg"
          ].map((imgSrc, i) => (
            <motion.div
              key={i}
              className="relative rounded-lg overflow-hidden bg-gradient-to-br from-rose-400/30 to-purple-400/30"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <img
                src={imgSrc}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Music Toggle Button */ }
  {
    hasEntered && (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/30 flex items-center justify-center text-rose-200 hover:bg-rose-500/30 transition-all shadow-lg"
      >
        {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    )
  }

  {/* Landing Screen */ }
  <AnimatePresence>
    {!hasEntered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-40 flex items-center justify-center p-4"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Heart className="w-20 h-20 mx-auto text-rose-400 mb-6" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 mb-4">
              Our Valentine Week
            </h1>
            <p className="text-xl md:text-2xl text-rose-200/80 font-light">
              A collection of moments, promises, and letters written just for you.
            </p>
          </motion.div>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnter}
            className="px-12 py-4 rounded-full bg-gradient-to-r from-rose-500/30 to-pink-500/30 backdrop-blur-md border-2 border-rose-300/50 text-rose-100 text-lg font-medium shadow-2xl hover:shadow-rose-500/50 transition-all"
          >
            Tap to Begin ❤️
          </motion.button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Main Content */ }
  {
    hasEntered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 min-h-screen flex flex-col items-center justify-center p-4 py-20"
      >
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 mb-12"
        >
          Choose Your Day ✨
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {valentineDays.map((day, index) => (
            <motion.button
              key={day.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLetter(day)}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${day.color} backdrop-blur-xl border border-rose-300/30 shadow-2xl hover:shadow-rose-500/30 transition-all group overflow-hidden`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-rose-400/10 group-hover:via-pink-400/10 group-hover:to-purple-400/10 transition-all duration-500" />

              <div className="relative z-10 text-center space-y-3">
                <div className="text-6xl mb-2">{day.emoji}</div>
                <h3 className="text-2xl font-bold text-rose-100">{day.name}</h3>
                <p className="text-rose-300/80 text-sm">{day.date}</p>
              </div>

              {/* Floating hearts */}
              <motion.div
                animate={{ y: [-10, -30], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute top-4 right-4 text-2xl"
              >
                💕
              </motion.div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    )
  }

  {/* Letter Modal */ }
  <AnimatePresence>
    {selectedDay && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={closeLetter}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-rose-950/90 via-purple-950/90 to-slate-950/90 backdrop-blur-2xl border border-rose-300/30 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={closeLetter}
            className="sticky top-4 left-full ml-4 w-12 h-12 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/30 flex items-center justify-center text-rose-200 hover:bg-rose-500/30 transition-all z-10"
          >
            <X size={24} />
          </button>

          {/* Letter Content */}
          <div className="p-8 md:p-12 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="text-7xl">{selectedDay.emoji}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
                {selectedDay.name}
              </h3>
              <p className="text-rose-300/60 text-lg">{selectedDay.date}</p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"
            />

            {/* Letter Text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              {/* Watermark Image Placeholder */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-rose-400/10 to-pink-400/10 opacity-20 flex items-center justify-center text-rose-300/30 text-sm">
                Watermark
                <br />
                Image Here
              </div>

              <div className="relative z-10 text-rose-100/90 text-lg md:text-xl leading-relaxed font-dancing whitespace-pre-wrap">
                {letterContent[selectedDay.id]}
              </div>
            </motion.div>

            {/* Bottom Decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-4 text-3xl pt-8"
            >
              <motion.span animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>💕</motion.span>
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>❤️</motion.span>
              <motion.span animate={{ rotate: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>💕</motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
    </div >
  )
}
