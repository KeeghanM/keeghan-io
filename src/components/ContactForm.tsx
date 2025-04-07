import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from '@tanstack/react-query'
import { z } from 'zod'

const queryClient = new QueryClient()

function ContactFormContent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const validationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
  })

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
    },
  })

  if (mutation.isSuccess) {
    return (
      <div className="text-center">
        <h2 className="text-secondary text-2xl font-bold">
          Message Sent!
        </h2>
        <p className="text-gray-600">
          Thank you for your message. We will get back to
          you soon.
        </p>
      </div>
    )
  }
  if (mutation.isError) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Error!
        </h2>
        <p className="text-gray-600">
          Something went wrong. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          mutation.mutate(
            Object.fromEntries(
              new FormData(e.currentTarget).entries(),
            ),
          )
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <Input
              disabled={mutation.isPending}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-gray-300 focus:border-orange-300 focus:ring-orange-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Input
              disabled={mutation.isPending}
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="border-gray-300 focus:border-orange-300 focus:ring-orange-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Textarea
              disabled={mutation.isPending}
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="border-gray-300 focus:border-orange-300 focus:ring-orange-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <Button
          disabled={
            mutation.isPending ||
            validationSchema.safeParse({
              name,
              email,
              message,
            }).success === false
          }
          className="bg-primary w-full text-white hover:bg-orange-500"
        >
          {mutation.isPending ? (
            'Sending...'
          ) : (
            <>
              Send Message{' '}
              <ArrowRight
                size={16}
                className="ml-2"
              />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

export default function ContactForm() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactFormContent />
    </QueryClientProvider>
  )
}
