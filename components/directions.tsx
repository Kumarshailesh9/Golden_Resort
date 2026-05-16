"use client"

import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const contactCards = [
  {
    icon: MapPin,
    title: "Our Location",
    content: ["Near by Medical College", "Gorakhpur, Uttar Pradesh", "India - 273001"],
    delay: 0,
  },
  {
    icon: Phone,
    title: "Call Us",
    content: ["+91 98765 43210", "+91 91234 56789"],
    links: ["tel:+918795416006", "tel:+919123456789"],
    delay: 0.1,
  },
  {
    icon: Mail,
    title: "Email Us",
    content: ["info@goldenresortgkp.com", "booking@goldenresortgkp.com"],
    links: ["mailto:info@goldenresortgkp.com", "mailto:booking@goldenresortgkp.com"],
    delay: 0.2,
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: ["Check-in: 12:00 PM", "Check-out: 11:00 AM", "Open 24/7"],
    highlight: 2,
    delay: 0.3,
  },
]

export function Directions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="directions" className="py-20 lg:py-28 bg-[#F5F1E8] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#1B5E75] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2A7F9E] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" 
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#1B5E75]/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B5E75]/10 text-[#1B5E75] text-sm font-medium rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Find Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4"
          >
            Get{" "}
            <span className="text-[#D4AF37]">
              Directions
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#4A4A4A] max-w-2xl mx-auto text-lg"
          >
            Visit us at our location near Medical College. We are always ready to welcome you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + card.delay }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-[#1B5E75]/20 hover:border-[#1B5E75]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B5E75]/10"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1B5E75]/30"
                  >
                    <card.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#1B5E75] transition-colors">
                      {card.title}
                    </h3>
                    <div className="space-y-1">
                      {card.content.map((line, i) => (
                        card.links ? (
                          <motion.a 
                            key={i}
                            href={card.links[i]}
                            whileHover={{ x: 5 }}
                            className="text-[#4A4A4A] hover:text-[#1B5E75] transition-colors block"
                          >
                            {line}
                          </motion.a>
                        ) : (
                          <p 
                            key={i} 
                            className={card.highlight === i ? "text-[#D4AF37] font-medium" : "text-[#4A4A4A]"}
                          >
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#1B5E75]/20 h-full min-h-[500px] group">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Navigation className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-white font-medium">Golden Resort GKP - Near Medical College, Gorakhpur</span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.google.com/maps/search/Medical+College+Gorakhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/90 hover:text-white text-sm transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              
              {/* Map Embed */}
              <div className="relative h-[calc(100%-60px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8976890866997!2d83.36486517543392!3d26.760416776712626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sBRD%20Medical%20College!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "440px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Golden Resort Location"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Map Overlay Button */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.google.com/maps/dir//BRD+Medical+College,+Gorakhpur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] hover:from-[#2A7F9E] hover:to-[#1B5E75] text-white shadow-xl shadow-[#1B5E75]/30 gap-2 px-8"
                    >
                      <Navigation className="w-5 h-5" />
                      Get Directions Now
                    </Button>
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.9, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A96B] text-[#1A1A1A] px-6 py-3 rounded-full shadow-lg shadow-[#D4AF37]/30 hidden lg:flex items-center gap-2"
            >
              <motion.span 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-[#1A1A1A] rounded-full"
              />
              <span className="font-medium text-sm">Easy to Reach</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#1B5E75]/10 rounded-2xl border border-[#1B5E75]/20 backdrop-blur-sm"
          >
            <div className="text-center sm:text-left">
              <p className="font-serif text-xl font-semibold text-[#1A1A1A]">Need Help Finding Us?</p>
              <p className="text-[#4A4A4A]">Call us and we will guide you to our resort</p>
            </div>
            <motion.a 
              href="tel:+918795416006"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-[#1B5E75] text-[#1B5E75] hover:bg-[#1B5E75] hover:text-white gap-2 group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                Call Now
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
