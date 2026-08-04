"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Star, MapPin, Award, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/1.jpeg')`,

            // backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Gradient Overlay - Dark with teal tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1B5E75]/30 to-[#1A1A1A]/80" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full px-6 py-2 mb-8"
          >
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Best Resort in Gorakhpur</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Seizing Every</span>
            <span className="block text-[#D4AF37]">Moment</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-white/90">of Luxury</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience unparalleled luxury at Golden Resort. Where comfort meets elegance, 
            creating memories that last a lifetime near Medical College, Gorakhpur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] hover:from-[#2A7F9E] hover:to-[#1B5E75] text-white text-lg px-10 py-6 shadow-2xl hover:shadow-[#1B5E75]/30 transition-all duration-300 group"
            >
              <span>Book Your Stay</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] text-lg px-10 py-6 backdrop-blur-sm transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { number: "8+", label: "Years Experience", icon: Award },
              { number: "500+", label: "Happy Guests", icon: Star },
              { number: "50+", label: "Luxury Rooms", icon: MapPin },
              { number: "4.9", label: "Guest Rating", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-serif font-bold text-white mb-1">{stat.number}</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer hover:text-[#D4AF37] transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Side Social Links */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          {["Fb", "Ig", "Tw"].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-xs"
              whileHover={{ scale: 1.1 }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
