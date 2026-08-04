"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#directions" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="bg-[#1A1A1A]/90 backdrop-blur-md h-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <motion.a 
                href="tel:+918795416006" 
                className="flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-3 h-3" />
                <span>+91 8795416006</span>
              </motion.a>
              <motion.span 
                className="hidden md:flex items-center gap-2 text-white/80"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-3 h-3" />
                <span>Infront of Gulhariya Thana, Near Navjeevan School, Gorakhpur</span>
              </motion.span>
            </div>
            <motion.div 
              className="flex items-center gap-2 text-[#D4AF37]"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
              <span className="text-xs font-medium tracking-wider">BEST RESORT IN GKP</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "top-0 bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl py-3" 
            : "top-10 bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center bg-[#f7f0f0] shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img src={'/logo.png'}></img>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl font-bold tracking-wide text-white">
                  Golden Resort
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  Best Resort
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-white/90 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider font-medium group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] hover:from-[#2A7F9E] hover:to-[#1B5E75] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 px-6"
                >
                  Book Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#1A1A1A]/98 backdrop-blur-lg border-t border-[#D4AF37]/20"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white/90 hover:text-[#D4AF37] transition-colors text-lg font-medium py-2 block border-b border-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button className="w-full mt-4 bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] text-white">
                      Book Now
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
