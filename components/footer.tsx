"use client"

import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#directions", label: "Contact" },
]

const services = [
  "Luxury Rooms",
  "Wedding Venue",
  "Corporate Events",
  "Fine Dining",
  "Pool & Spa",
  "Photo Sessions",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B5E75] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A96B] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30"
              >
                <span className="text-[#1A1A1A] font-serif font-bold text-xl">G</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-[#D4AF37] group-hover:text-[#C9A96B] transition-colors">Golden Resort GKP</span>
                <span className="text-xs text-[#D4AF37]/60 -mt-1">Best Resort</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience luxury and comfort at Golden Resort GKP - the best resort in Gorakhpur. 
              Your perfect getaway destination with world-class amenities and exceptional service.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#2A7F9E] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E75]/50 group-hover:bg-[#2A7F9E] transition-colors" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link 
                    href="#services"
                    className="text-white/60 hover:text-[#2A7F9E] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E75]/50 group-hover:bg-[#2A7F9E] transition-colors" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B5E75]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B5E75]/30 transition-colors">
                  <MapPin className="w-5 h-5 text-[#2A7F9E]" />
                </div>
                <span className="text-white/60 text-sm pt-2">
                  Near by Medical College<br />
                  Gorakhpur, UP 273001
                </span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B5E75]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B5E75]/30 transition-colors">
                  <Phone className="w-5 h-5 text-[#2A7F9E]" />
                </div>
                <a href="tel:+918795416006" className="text-white/60 hover:text-[#2A7F9E] transition-colors text-sm">
                  +91 98765 43210
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B5E75]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B5E75]/30 transition-colors">
                  <Mail className="w-5 h-5 text-[#2A7F9E]" />
                </div>
                <a href="mailto:info@goldenresortgkp.com" className="text-white/60 hover:text-[#2A7F9E] transition-colors text-sm">
                  info@goldenresortgkp.com
                </a>
              </motion.li>
            </ul>

            {/* Newsletter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <h4 className="text-sm font-medium text-white mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-[#1B5E75]/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#1B5E75] focus:bg-white/15 transition-all"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="icon" className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] hover:from-[#2A7F9E] hover:to-[#1B5E75] h-10 w-10 shadow-lg shadow-[#1B5E75]/25">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
          >
            <p className="flex items-center gap-1">
              &copy; {new Date().getFullYear()} Golden Resort GKP. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
              </motion.span>
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#2A7F9E] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#2A7F9E] transition-colors">Terms of Service</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
