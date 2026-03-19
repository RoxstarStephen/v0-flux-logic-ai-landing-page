'use client'

import { motion } from 'framer-motion'
import { ScrollFadeIn } from '@/components/animations/scroll-fade-in'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'How accurate is the AI analysis?',
    answer:
      'Our AI model is trained on millions of marketing campaigns and has a 94% accuracy rate in predicting optimization opportunities. It continuously learns from new data to improve recommendations.',
  },
  {
    question: 'How long does the audit take?',
    answer:
      'Most audits are completed in under 5 minutes. However, the depth of analysis depends on the amount of data you provide. Comprehensive audits typically take 10-15 minutes.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'We integrate with Google Ads, Facebook Ads, LinkedIn Campaigns, HubSpot, Salesforce, and Mailchimp. You can also upload CSV data directly for custom analysis.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use enterprise-grade encryption (AES-256) and comply with GDPR, CCPA, and SOC 2 Type II standards. Your data is never sold or shared with third parties.',
  },
  {
    question: 'Can I export my audit results?',
    answer:
      'Absolutely. All reports can be exported as PDF, CSV, or PowerPoint presentations. You can share them with your team or clients directly from the platform.',
  },
  {
    question: 'Do you offer enterprise support?',
    answer:
      'Yes. Our enterprise plans include dedicated account managers, priority support, custom integrations, and team collaboration features. Contact our sales team for more details.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to frequently asked questions about our platform.
            </p>
          </div>
        </ScrollFadeIn>

        {/* FAQ Accordion */}
        <ScrollFadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass border border-accent/10 rounded-lg px-6 data-[state=open]:border-accent/30"
                  >
                    <AccordionTrigger className="hover:text-accent transition-colors">
                      <span className="text-left font-semibold text-foreground">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </ScrollFadeIn>

        {/* CTA */}
        <ScrollFadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <motion.a
              href="mailto:support@audithub.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-semibold transition-colors"
            >
              Contact Our Support Team
            </motion.a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
