"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { 
  Heart, 
  Building2, 
  UtensilsCrossed, 
  Waves,
  Sparkles,
  Users,
  Bed,
  Camera
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Heart,
    title: "Wedding Venue",
    description: "Stunning outdoor and indoor wedding venues with elegant decor, catering, and full event coordination for your dream celebration.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "State-of-the-art conference facilities and meeting rooms perfect for seminars, product launches, and team building activities.",
  },
  {
    icon: Bed,
    title: "Luxury Rooms",
    description: "Elegantly appointed rooms and suites featuring premium amenities, stunning views, and world-class comfort for a perfect stay.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Multi-cuisine restaurant serving gourmet dishes prepared by expert chefs, from traditional Indian to international flavors.",
  },
  {
    icon: Waves,
    title: "Pool & Spa",
    description: "Rejuvenate at our luxury swimming pool and spa with professional wellness treatments and relaxation therapies.",
  },
  {
    icon: Users,
    title: "Social Events",
    description: "Host memorable birthday parties, anniversaries, and celebrations with our customized event packages and dedicated staff.",
  },
  {
    icon: Sparkles,
    title: "Festival Events",
    description: "Grand celebrations for Diwali, Holi, and other festivals with traditional decor, entertainment, and authentic cuisine.",
  },
  {
    icon: Camera,
    title: "Photo Sessions",
    description: "Picturesque settings perfect for pre-wedding shoots, portfolios, and memorable photography experiences.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B5E75]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      
      {/* Decorative Lines */}
      <div className="absolute top-20 left-0 right-0 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-[#1B5E75]/20 text-[#2A7F9E] text-sm font-medium rounded-full mb-4 border border-[#1B5E75]/30"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
          >
            World-Class{" "}
            <span className="text-[#D4AF37]">
              Resort Amenities
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 leading-relaxed"
          >
            From luxury accommodations to grand celebrations, experience the finest hospitality 
            and premium services tailored to your every need.
          </motion.p>
        </div>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="group h-full bg-[#2C2C2C]/50 backdrop-blur-sm border-[#1B5E75]/30 hover:border-[#1B5E75] transition-all duration-500 cursor-pointer overflow-hidden relative"
              >
                {/* Left Border Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1B5E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="pb-4 relative">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] flex items-center justify-center mb-4 shadow-lg shadow-[#1B5E75]/30"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  )
}
