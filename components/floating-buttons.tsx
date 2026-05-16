"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Instagram, Facebook, X, Plus, MapPin } from "lucide-react"

export function FloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false)

  const buttons = [
    {
      icon: Phone,
      label: "Call Now",
      href: "tel:+918795416006",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/918795416006?text=Hello! I'm interested in Golden Resort GKP",
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      delay: 0.15
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/goldenresortgkp",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      delay: 0.2
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/goldenresortgkp",
      color: "bg-[#1877F2] hover:bg-[#0d65d9]",
      delay: 0.25
    },
    {
      icon: MapPin,
      label: "Directions",
      href: "https://maps.google.com/?q=BRD+Medical+College+Gorakhpur",
      color: "bg-red-500 hover:bg-red-600",
      delay: 0.3
    }
  ]

  return (
    <div className="fixed left-4 bottom-4 z-50 flex flex-col-reverse items-start gap-3">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-[#1B5E75] text-white shadow-lg flex items-center justify-center hover:bg-[#2A7F9E] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </motion.button>

      {/* Expanded Buttons */}
      <AnimatePresence>
        {isExpanded && (
          <div className="flex flex-col gap-3">
            {buttons.map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-12 h-12 rounded-full ${button.color} text-white shadow-lg flex items-center justify-center transition-all`}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: button.delay, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#1A1A1A] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {button.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Call Now Button - Always Visible */}
      <motion.a
        href="tel:+918795416006"
        className="fixed right-4 bottom-4 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 15px rgba(34, 197, 94, 0)",
          ]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeOut"
        }}
      >
        <Phone className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">!</span>
      </motion.a>
    </div>
  )
}
