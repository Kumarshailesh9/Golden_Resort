"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  "World-class luxury amenities",
  "Experienced hospitality team",
  "Prime location near Medical College",
  "Perfect for weddings & events",
]

const stats = [
  { number: "500+", label: "Happy Guests" },
  { number: "50+", label: "Luxury Rooms" },
  { number: "200+", label: "Events Hosted" },
  { number: "8+", label: "Years of Excellence" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F1E8] overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#1B5E75]/20"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src="/1.jpeg"
                    alt="Resort pool"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#1B5E75]/20"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src="2.jpeg"
                    alt="Luxury room"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#1B5E75]/20"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src="3.jpeg"
                    alt="Resort exterior"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#1B5E75]/20"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src="4.jpeg"
                    alt="Restaurant"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] text-white px-8 py-4 rounded-2xl shadow-xl shadow-[#1B5E75]/30"
            >
              <p className="font-serif text-3xl font-bold text-center">8+</p>
              <p className="text-sm text-center opacity-90">Years Experience</p>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#1B5E75] font-medium mb-2 uppercase tracking-wider text-sm"
            >
              About Golden Resort
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance leading-tight"
            >
              Stay at one of the{" "}
              <span className="text-[#D4AF37]">
                most luxurious resorts
              </span>{" "}
              in Gorakhpur
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4A4A4A] mb-6 leading-relaxed text-lg"
            >
              Golden Resort is the premier luxury resort in Gorakhpur, offering world-class 
              amenities and exceptional service. Located near Medical College, we are the perfect 
              destination for weddings, corporate events, and relaxing getaways.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#4A4A4A] mb-8 leading-relaxed"
            >
              Our team of experienced professionals ensures every guest receives personalized 
              attention and memorable experiences that last a lifetime.
            </motion.p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1B5E75] flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-[#1A1A1A] group-hover:text-[#1B5E75] transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] hover:from-[#2A7F9E] hover:to-[#1B5E75] shadow-lg shadow-[#1B5E75]/25 group text-white">
                Explore Our Facilities
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[#1B5E75]/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#1B5E75] mb-2 group-hover:text-[#2A7F9E] transition-all">
                {stat.number}
              </p>
              <p className="text-[#4A4A4A] group-hover:text-[#1A1A1A] transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
