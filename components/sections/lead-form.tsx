'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ScrollFadeIn } from '@/components/animations/scroll-fade-in'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { Loader2, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
})

type FormValues = z.infer<typeof formSchema>

export function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      company: '',
      industry: '',
    },
  })

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true)
    
    // Simulate API call
    console.log('[v0] Form submission:', values)
    
    try {
      // Mock submission - in production, this would call an API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
      toast.success('Audit request submitted! Check your email shortly.')
      form.reset()
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-16 md:py-24 bg-secondary/20 border-y border-border/50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Marketing Audit Today
            </h2>
            <p className="text-lg text-muted-foreground">
              No credit card required. Results delivered instantly.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Form Container */}
        <ScrollFadeIn delay={0.2}>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-xl p-8 md:p-12 border border-accent/10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thanks for Submitting!
              </h3>
              <p className="text-muted-foreground mb-6">
                We're analyzing your data. You'll receive your personalized audit
                report within a few minutes via email.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                Submit Another
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Form {...form}>
                <div className="glass rounded-xl p-8 md:p-12 border border-accent/10 space-y-6">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Work Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            {...field}
                            className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Company */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            {...field}
                            className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-accent/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Industry */}
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Industry</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-secondary border-border/50">
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce</SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing Your Data...
                      </>
                    ) : (
                      'Get My Free Audit'
                    )}
                  </Button>

                  {/* Trust Statement */}
                  <p className="text-xs text-muted-foreground text-center">
                    We never spam. Your data is secure and encrypted. Unsubscribe anytime.
                  </p>
                </div>
              </Form>
            </form>
          )}
        </ScrollFadeIn>
      </div>
    </section>
  )
}
