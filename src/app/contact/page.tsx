'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="bg-primary text-primary-foreground min-h-[calc(100vh-75px)]">
      <div className="container grid md:grid-cols-2 gap-12 lg:gap-16 items-start py-16 md:py-24">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full pt-4">
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none">
            Your
            <br />
            Message
            <br />
            Matters
          </h1>
          <div className="space-y-12 mt-16">
            <div>
              <p className="text-sm uppercase text-muted-foreground">General Inquiry</p>
              <a href="mailto:ubhclothing@gmail.com" className="text-2xl font-medium hover:underline">ubhclothing@gmail.com</a>
            </div>
            <div>
              <p className="text-sm uppercase text-muted-foreground">Customer Support</p>
              <a href="tel:+91 90748 36314" className="text-2xl font-medium hover:underline">+91 90748 36314</a>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-[#141414] border-t-4 h-full">
          <div className=" px-4 py-4 h-full">
            <h2 className="text-4xl font-thin uppercase mb-8">Start the Conversation</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} className="form-input-dark" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} className="form-input-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone" {...field} className="form-input-dark" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Message" className="form-input-dark min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
              </form>
            </Form>
          </div>
            <Button 
                  type="submit" 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg py-6 rounded-none " 
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Sending...' : 'Send a Message'}
                </Button>
        </div>
      </div>
    </div>
  );
}
