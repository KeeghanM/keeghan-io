import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { z } from 'zod'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = await request.json()

    const validationSchema = z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email address'),
      message: z.string().min(1, 'Message is required'),
    })
    if (!name || !email || !message) {
      return new Response('All fields are required', {
        status: 400,
      })
    }
    if (
      !validationSchema.safeParse({ name, email, message })
        .success
    ) {
      return new Response('Invalid data', { status: 400 })
    }

    const resend = new Resend(
      import.meta.env.RESEND_API_KEY,
    )
    const { error } = await resend.emails.send({
      from: email,
      to: ['hello@keeghan.io'],
      subject: 'New contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    if (error) {
      console.error('Error sending email:', error)
      return new Response('Failed to send email', {
        status: 500,
      })
    }
    return new Response('Message sent successfully', {
      status: 200,
    })
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : 'Internal Server Error'
    return new Response(msg, { status: 500 })
  }
}
