import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../../trpc';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactRoutes = createTRPCRouter({
  createMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255),
        company: z.string().min(1).max(255),
        email: z.string().email(),
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      return resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL as string,
        subject: `Portfolio -  ${input.name} wants to contact you!`,
        text: `Name: ${input.name}\nCompany: ${input.company}\nEmail: ${input.email}\nMessage: ${input.message}`,
      });

    }),
});
