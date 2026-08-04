"use client"

import { useState, useRef } from "react"
import { Play, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
          alt="Resort pool and exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1B5E75]/40 to-[#1A1A1A]/80" />
      </div>

      {/* Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#D4AF37]">Experience the Magic</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
          >
            See What Makes Us the{" "}
            <span className="text-[#D4AF37]">
              Best Resort in Gorakhpur
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Take a virtual tour of our stunning facilities. From luxurious rooms to beautiful event spaces, 
            discover why guests love Golden Resort.
          </motion.p>

          {/* Play Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(true)}
            className="relative group inline-flex items-center justify-center w-24 h-24 rounded-full"
            aria-label="Play video"
          >
            {/* Ripple Effects */}
            <motion.span 
              className="absolute inset-0 rounded-full bg-[#1B5E75]/30"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span 
              className="absolute inset-0 rounded-full bg-[#1B5E75]/20"
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            <span className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] flex items-center justify-center shadow-xl shadow-[#1B5E75]/30 group-hover:shadow-[#1B5E75]/50 transition-shadow">
              <Play className="w-8 h-8 text-white ml-1" />
            </span>
          </motion.button>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Happy Guests" },
              { number: "50+", label: "Luxury Rooms" },
              { number: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-pointer group"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#D4AF37] group-hover:text-[#C9A96B] transition-all">
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/95 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full max-w-4xl aspect-video bg-[#2C2C2C] rounded-2xl overflow-hidden shadow-2xl border border-[#1B5E75]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center text-white/50">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-16 h-16 mx-auto mb-4 text-[#1B5E75]" />
                  </motion.div>
                  <p className="text-white/70">Video Player Placeholder</p>
                  <p className="text-sm text-white/50">Connect your YouTube or video source here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
