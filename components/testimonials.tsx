"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Manish Srivastava",
    initials: "MS",
    review: "Exceptional service from start to finish. The team is professional, creative, and incredibly organized. They made our corporate event a massive success!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohit Sarkar",
    initials: "RS",
    review: "Golden Resort GKP hosted our wedding with such elegance and precision. Everything was flawless, and they truly exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ankur Yadav",
    initials: "AY",
    review: "Their attention to detail is second to none. They transformed a simple venue into a breathtaking experience for my daughter's birthday. Fantastic work.",
    rating: 5,
  },
  {
    id: 4,
    name: "Avinash Singh",
    initials: "AS",
    review: "A truly professional and dedicated team. They listen to your vision and execute it perfectly. Our product launch was a huge success because of them.",
    rating: 5,
  },
  {
    id: 5,
    name: "DD Srivastava",
    initials: "DS",
    review: "Five stars! The entire process was seamless and stress-free. Golden Resort GKP took care of everything, allowing us to enjoy our special day without any worries.",
    rating: 5,
  },
  {
    id: 6,
    name: "Pradeep Patel",
    initials: "PP",
    review: "The creativity and resourcefulness of the Golden Resort GKP team are amazing. They delivered a world-class event on a tight budget. I'm thoroughly impressed.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B5E75]/5 to-transparent" />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 border border-[#D4AF37]/20 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full"
      />
      
      {/* Decorative Line */}
      <div className="absolute top-20 left-0 right-0 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B5E75]/20 text-[#2A7F9E] text-sm font-medium rounded-full mb-4 border border-[#1B5E75]/30"
          >
            <Sparkles className="w-4 h-4" />
            Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
          >
            What Our{" "}
            <span className="text-[#D4AF37]">
              Guests Say
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 leading-relaxed"
          >
            Real feedback from our valued guests who experienced our hospitality.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView + 1.5)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}
                >
                  <Card 
                    className="h-full border-[#1B5E75]/30 bg-[#2C2C2C]/50 backdrop-blur-sm hover:shadow-xl hover:shadow-[#1B5E75]/10 transition-all duration-500 hover:border-[#1B5E75] group"
                  >
                    <CardContent className="p-6 relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] rounded-full flex items-center justify-center shadow-lg shadow-[#1B5E75]/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Quote className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      <Quote className="w-10 h-10 text-[#1B5E75]/30 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                        &quot;{testimonial.review}&quot;
                      </p>

                      <div className="flex items-center gap-3">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] flex items-center justify-center shadow-lg"
                        >
                          <span className="font-serif font-bold text-white">
                            {testimonial.initials}
                          </span>
                        </motion.div>
                        <div>
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-[#2A7F9E]">Verified Guest</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={currentIndex === 0}
                className="border-[#1B5E75]/30 bg-transparent text-white hover:bg-[#1B5E75]/10 hover:border-[#1B5E75] disabled:opacity-50 w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? "w-8 bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E]" 
                      : "w-2 bg-[#1B5E75]/30 hover:bg-[#1B5E75]/50"
                  }`}
                />
              ))}
            </div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="border-[#1B5E75]/30 bg-transparent text-white hover:bg-[#1B5E75]/10 hover:border-[#1B5E75] disabled:opacity-50 w-12 h-12"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  )
}
