"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const quickReplies = [
  { label: "View Wedding Packages", value: "wedding_packages" },
  { label: "See Luxury Rooms", value: "luxury_rooms" },
  { label: "Pool Access Rates", value: "pool_rates" },
  { label: "Book Now", value: "book_now" },
  { label: "Contact Us", value: "contact" },
]

const botResponses: Record<string, string> = {
  wedding_packages: `**Exquisite Wedding Packages at Golden Resort**

We offer unforgettable wedding experiences:

• **Poolside Wedding** - Serene outdoor ceremony by our sparkling pool
• **Grand Banquet Hall** - Accommodate up to 500 guests in luxury
• **Intimate Garden Wedding** - Perfect for 100-200 guests
• **Complete Wedding Package** - Includes decor, catering, photography

Starting from ₹2,50,000 onwards.

Would you like to schedule a venue visit? Use the **Call Button** to speak with our wedding coordinator!`,

  luxury_rooms: `**Ultra-Luxury Suites at Golden Resort**

Experience the finest accommodation:

• **Royal Suite** - 1200 sq ft with private jacuzzi
• **Executive Suite** - 800 sq ft with city views
• **Deluxe Room** - 500 sq ft with premium amenities
• **Family Suite** - Perfect for families, 1000 sq ft

All rooms feature:
- Premium bedding & 24/7 room service
- Complimentary breakfast buffet
- Pool & gym access

Check our **Instagram** for the latest room photos!`,

  pool_rates: `**Sparkling Pool Access at Golden Resort**

Enjoy our stunning swimming facilities:

• **Day Pass** - ₹500 per person (includes locker)
• **Weekend Family Package** - ₹1,500 for 4 members
• **Monthly Membership** - ₹4,000 (unlimited access)
• **Pool Party Booking** - Starting ₹15,000

Pool hours: 6 AM - 9 PM daily

**Special:** Book a luxury room and get complimentary pool access!`,

  book_now: `**Ready to Book Your Unforgettable Stay?**

We're thrilled to help you plan your visit!

**Booking Options:**
1. 📞 Call us directly: +91 98765 43210
2. 💬 WhatsApp: Quick response guaranteed
3. 📧 Email: booking@goldenresortgkp.com

**Special Offers:**
• 15% off on weekday bookings
• Complimentary breakfast for direct bookings
• Free airport pickup for 3+ night stays

Use the **Call Button** on the right to connect instantly!`,

  contact: `**Get in Touch with Golden Resort**

We're here to make your experience exceptional!

**Contact Details:**
📍 Near Medical College, Gorakhpur, UP 273001
📞 +91 98765 43210
📧 info@goldenresortgkp.com

**Working Hours:**
Reception: 24/7
Restaurant: 7 AM - 11 PM
Pool: 6 AM - 9 PM

Follow us on **Instagram** and **Facebook** for the latest events and offers!`,

  default: `Hello! I'm **Aura**, your Luxury Concierge at Golden Resort.

How may I assist you today? I can help with:

• **Wedding & Event Planning**
• **Room Reservations**
• **Pool & Amenity Access**
• **Special Packages**

Please select from the quick options below, or type your question!`
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: botResponses.default,
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = (value: string) => {
    const quickReply = quickReplies.find(qr => qr.value === value)
    if (!quickReply) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: quickReply.label,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[value] || botResponses.default,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: `Thank you for your message! Our team will get back to you shortly.

In the meantime, feel free to:
• Use the **Call Button** for immediate assistance
• Check our **Social Media** for the latest updates
• Browse our quick options below

How else may I assist you?`,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const formatMessage = (text: string) => {
    // Convert **text** to bold
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-[#D4AF37]">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-4 bottom-24 w-14 h-14 rounded-full bg-[#1B5E75] text-white shadow-lg flex items-center justify-center hover:bg-[#2A7F9E] transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <motion.span 
              className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[10px] font-bold text-[#1A1A1A]">1</span>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-4 bottom-4 w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1B5E75] to-[#2A7F9E] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">Aura</h3>
                    <p className="text-xs text-white/80">Luxury Concierge</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918795416006"
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/80">Online - Typically replies instantly</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F1E8]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-white text-[#1A1A1A] rounded-bl-md shadow-sm'
                        : 'bg-[#1B5E75] text-white rounded-br-md'
                    }`}
                  >
                    {message.isBot ? formatMessage(message.text) : message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#1B5E75] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-[#1B5E75] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-[#1B5E75] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="p-3 bg-white border-t border-[#E5E0D5]">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.value}
                    onClick={() => handleQuickReply(reply.value)}
                    className="px-3 py-1.5 text-xs bg-[#F5F1E8] text-[#1B5E75] rounded-full hover:bg-[#1B5E75] hover:text-white transition-colors border border-[#1B5E75]/20"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-[#F5F1E8] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E75]/50"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="w-10 h-10 rounded-full bg-[#1B5E75] hover:bg-[#2A7F9E]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
