"use client"

import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion"
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What types of rooms are available at Golden Resort GKP?",
    answer: "We offer a variety of accommodation options including Standard Rooms, Deluxe Rooms, Premium Suites, and Luxury Family Suites. All rooms feature modern amenities, elegant decor, and stunning views. Our rooms are equipped with air conditioning, flat-screen TVs, complimentary Wi-Fi, and premium toiletries.",
  },
  {
    question: "What makes Golden Resort the best resort in Gorakhpur?",
    answer: "Golden Resort GKP stands out with its prime location near Medical College, world-class amenities including a swimming pool, spa, and multi-cuisine restaurant. We offer personalized service, beautiful event spaces for weddings and corporate gatherings, and over 8 years of hospitality excellence.",
  },
  {
    question: "Do you offer wedding and event packages?",
    answer: "Yes, we specialize in hosting weddings, corporate events, and social gatherings. Our packages include venue decoration, catering services, photography coordination, and dedicated event managers. We can customize packages to fit your specific requirements and budget.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Standard check-in time is 12:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability. Please contact our front desk in advance to request these services.",
  },
  {
    question: "Is the resort suitable for medical visitors?",
    answer: "Absolutely! Our location near Medical College makes us ideal for patients' families and medical professionals. We offer comfortable stays, room service, transportation assistance, and a peaceful environment perfect for recovery and relaxation.",
  },
  {
    question: "What dining options are available?",
    answer: "Our multi-cuisine restaurant serves a variety of dishes from traditional Indian cuisine to international favorites. We offer breakfast, lunch, dinner, and 24/7 room service. We can also accommodate special dietary requirements with advance notice.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F1E8] relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B5E75] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Section Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B5E75]/10 text-[#1B5E75] text-sm font-medium rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4" />
              FAQ
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 text-balance"
            >
              Frequently Asked{" "}
              <span className="text-[#D4AF37]">
                Questions
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4A4A4A] leading-relaxed mb-8"
            >
              Have questions about staying at Golden Resort GKP? We&apos;ve got answers. 
              Here are some of the most common questions we receive. If you don&apos;t find 
              what you&apos;re looking for, feel free to contact us directly.
            </motion.p>

            {/* Contact CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1B5E75]/10 border border-[#1B5E75]/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B5E75] to-[#2A7F9E] flex items-center justify-center shadow-lg shadow-[#1B5E75]/30"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-[#4A4A4A] text-sm mb-4">
                    Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly team.
                  </p>
                  <motion.a 
                    href="#directions" 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#1B5E75] font-medium hover:text-[#2A7F9E] transition-colors group"
                  >
                    Contact Us
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-[#1B5E75]/20 rounded-xl px-6 bg-white hover:border-[#1B5E75]/50 transition-colors data-[state=open]:border-[#1B5E75] data-[state=open]:shadow-lg data-[state=open]:shadow-[#1B5E75]/5"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg font-medium text-[#1A1A1A] hover:text-[#1B5E75] hover:no-underline py-5 [&[data-state=open]]:text-[#1B5E75]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4A4A4A] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
