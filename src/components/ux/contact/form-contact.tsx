'use client';

import Link from 'next/link';
import { z } from 'zod';
import { api } from '@/lib/api';
import { trpc } from '@/lib/providers/trpc-provider';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';
import linkedin from '@/assets/linkedin.png';
import github from '@/assets/github.svg';
import gmail from '@/assets/gmail.png';
import fiverr from '@/assets/fiverr.svg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import React from 'react';

const formSchema = z.object({
  name: z.string().min(6, 'Too short').max(60, 'Too long'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Too short').max(500, 'Too long'),
  company: z.string().min(2, 'Too short').max(60, 'Too long'),
});

const ContactForm = () => {
  const { isMobile } = useMediaQuery();
 
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const createPostMutation = api.contact.createMessage.useMutation({
    onSuccess() {
      toast({
        title: 'Message sent',
        description: 'Your message has been sent successfully',
      });
    },
    onError() {
      toast({
        title: 'Error',
        description: "We couldn't send your message, please try again later",
      });
    },
  });

  function onSubmit(form: z.infer<typeof formSchema>) {
    const res = createPostMutation.mutate(form);
    console.log(res)
  }

  if (isMobile) {
    return (
      <Card className='rounded-3xl shadow-slate-300 shadow-md'>
        <CardHeader>
          <CardTitle className='text-center text-3xl'>Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              <div className='grid grid-cols-1 gap-3'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Enter your full name' {...field} />
                      </FormControl>
                      <FormMessage {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='company'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder='Enter the Company name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage {...field} />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Enter your email' {...field} />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Enter your message' {...field} />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
              <div className='flex items-center justify-around'>
                <Link href='https://www.linkedin.com/in/francisco-fares/'>
                  <Image width={20} src={linkedin} alt='LinkedIn' />
                </Link>
                <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvRnHLcjRknvwWqtdvszvLjHsxLXdwzdNjpXdzWWPPdNRwXjhnWGHgcwDcmsdtGhmXJV'>
                  <Image width={20} src={gmail} alt='Gmail' />
                </Link>
                <Link href='https://github.com/franfares10'>
                  <Image width={20} src={github} alt='GitHub' />
                </Link>
                <Link href='https://www.fiverr.com/franciscofares'>
                  <Image width={25} src={fiverr} alt='Fiverr' />
                </Link>
              </div>
              <div className='w-full flex items-center justify-center pt-6'>
                <Button
                  type='submit'
                  disabled={!form.formState.isValid}
                  loading={createPostMutation.isPending}
                  className='rounded-md w-full bg-blue-500 text-white font-bold'
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className='w-1/2 rounded-3xl shadow-slate-400 shadow-md p-2'>
      <CardHeader>
        <CardTitle className='text-center text-3xl'>Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <div className='grid grid-cols-2 gap-5'>
              <FormField
                control={form.control}
                name='name'
                defaultValue=''
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your full name' {...field} />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='company'
                defaultValue=''
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company´s Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter the Company name' {...field} />
                    </FormControl>
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='email'
              defaultValue=''
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' {...field} />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              defaultValue=''
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Enter your message' {...field} />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <div className='flex items-center justify-around'>
              <Link href='https://www.linkedin.com/in/francisco-fares/'>
                <Image width={25} src={linkedin} alt='LinkedIn' />
              </Link>
              <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvRnHLcjRknvwWqtdvszvLjHsxLXdwzdNjpXdzWWPPdNRwXjhnWGHgcwDcmsdtGhmXJV'>
                <Image width={25} src={gmail} alt='Gmail' />
              </Link>
              <Link href='https://github.com/franfares10'>
                <Image width={25} src={github} alt='GitHub' />
              </Link>
              <Link href='https://www.fiverr.com/franciscofares'>
                <Image width={25} src={fiverr} alt='Fiverr' />
              </Link>
            </div>
            <div className='w-full flex items-center justify-center pt-6'>
              <Button
                type='submit'
                loading={createPostMutation.isPending}
                disabled={!form.formState.isValid}
                className='rounded-md w-full bg-blue-500 text-white font-bold'
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
