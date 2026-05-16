"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1A1A1A] via-[#1B5E75]/20 to-[#1A1A1A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B5E75]/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl" 
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37]/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Decorative Lines */}
      <div className="absolute top-10 left-0 right-0 flex justify-center">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-8"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </motion.span>
            <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready for an{" "}
            <span className="text-[#D4AF37]">Unforgettable</span>
            <br />
            Experience?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Book your stay at Golden Resort GKP today and experience the finest luxury 
            hospitality in Gorakhpur. Special rates available for early bookings!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#C9A96B] hover:from-[#C9A96B] hover:to-[#D4AF37] text-[#1A1A1A] font-semibold text-lg px-10 py-6 shadow-xl shadow-[#D4AF37]/30 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Stay
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#1A1A1A] text-lg px-10 py-6 backdrop-blur-sm transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call +91 98765 43210
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {[
              { text: "Best Price Guarantee", icon: "✓" },
              { text: "Free Cancellation", icon: "✓" },
              { text: "24/7 Support", icon: "✓" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-white/60"
              >
                <span className="w-5 h-5 rounded-full bg-[#1B5E75] flex items-center justify-center text-white text-xs">
                  {item.icon}
                </span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
