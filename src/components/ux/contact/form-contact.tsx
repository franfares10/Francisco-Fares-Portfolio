"use client"

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LinkedinIcon } from "lucide-react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormItem,
    FormMessage,

} from "@/components/ui/form";
import Image from "next/image";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github.png";
import gmail from "@/assets/gmail.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
    name: z.string().min(6, "Too short").max(60, "Too long").nonempty("Required"),
    email: z.string().email("Invalid email").nonempty("Required"),
    company_name: z.string().min(6, "Too short").max(60, "Too long").nonempty("Required"),
    message: z.string().min(10, "Too short").max(500, "Too long").nonempty("Required"),
});

const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company_name: "",
            message: "",
        }
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <Card className="w-1/2 h-4/5 rounded-3xl shadow-slate-400 shadow-md">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <div className="grid grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                        <FormMessage {...field} />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company´s Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter the Company name" {...field} />
                                        </FormControl>
                                        <FormMessage {...field} />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your message" {...field} />
                                    </FormControl>
                                    <FormMessage {...field} />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-around">
                            <Link href="https://www.linkedin.com/in/francisco-fares/">
                                <Image width={25} src={linkedin} alt="LinkedIn"/>
                            </Link>
                            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvRnHLcjRknvwWqtdvszvLjHsxLXdwzdNjpXdzWWPPdNRwXjhnWGHgcwDcmsdtGhmXJV">
                                <Image width={25} src={gmail} alt="Gmail" />
                            </Link>
                            <Link href="https://github.com/franfares10">
                                <Image width={25} src={github} alt="GitHub" />
                            </Link>
                        </div>
                        <div className="w-full flex items-center justify-center py-6">
                            <Button type="submit" className="rounded-full w-1/4 animate-bounce  bg-blue-500 text-white font-bold hover:scale-125">Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
