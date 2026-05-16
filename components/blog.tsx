"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Why Golden Resort GKP is the Best Wedding Destination in Gorakhpur",
    excerpt: "Discover why couples choose Golden Resort GKP for their dream weddings. From stunning venues to impeccable service, we make every moment magical.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    category: "Weddings",
  },
  {
    id: 2,
    title: "Top 10 Reasons to Stay at a Luxury Resort Near Medical College",
    excerpt: "Whether visiting for medical purposes or simply seeking a peaceful retreat, discover why our location makes us the perfect choice for your stay.",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    category: "Travel Tips",
  },
  {
    id: 3,
    title: "Planning the Perfect Corporate Event: A Complete Guide",
    excerpt: "From conferences to team retreats, learn how to plan an unforgettable corporate event at Golden Resort GKP with our expert tips and premium facilities.",
    date: "March 8, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
    category: "Corporate Events",
  },
]

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-[#1B5E75]/10 rounded-full"
      />
      
      {/* Decorative Lines */}
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
            From Our Blog
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
          >
            Latest Articles &{" "}
            <span className="text-[#D4AF37]">
              Travel Tips
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 leading-relaxed"
          >
            Stay updated with the latest news, tips, and insights from Golden Resort GKP.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card 
                className="group h-full overflow-hidden border-[#1B5E75]/30 hover:shadow-xl hover:shadow-[#1B5E75]/10 transition-all duration-500 hover:border-[#1B5E75] bg-[#2C2C2C]/50 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <motion.div 
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-[#1B5E75]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <motion.div 
                    className="flex items-center gap-2 text-white/50 text-sm mb-3"
                  >
                    <Calendar className="w-4 h-4 text-[#2A7F9E]" />
                    {post.date}
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Button variant="link" className="p-0 h-auto text-[#2A7F9E] font-medium group/btn">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="border-[#1B5E75]/30 bg-transparent text-white hover:bg-[#1B5E75]/10 hover:border-[#1B5E75]">
              View All Posts
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  )
}
