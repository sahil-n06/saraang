"use client"
import React, { useState, useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '../ui/button'
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from '../ui/form'
import { Input } from "../ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
})

const Contactus = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const [showToast, setShowToast] = useState(false);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwt5VdmkeldA7qaHOJCBr5im92OhLgIIBd0-wd7Y3JeAt8pO72J11kUwfA07aOmHUGl/exec';

  useEffect(() => {
    if (showToast) { 
        const timer = setTimeout(() => setShowToast(false), 1000);
        return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showToast]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const formElement = e.target;
      const formData = new FormData(formElement);
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setShowToast(true);
        form.reset();
      } else {
        console.error('Error!', response.statusText);
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} name="submit-to-google-sheet">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="msg"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Input placeholder="Your lovely msg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {showToast && <div id="msg" className="toast">Message sent successfully!</div>}
    </Form>
  )
}

export default function Contact() {
  return (
    <>
      <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 items-center mx-auto">  
        <h2 className="text-center text-8xl max-lg:text-4xl text-black font-extralight font-serif">Contact Us</h2>
        <p className="text-center mt-5 text-4xl max-lg:text-2xl text-black font-extralight">Contact us to learn more about the club</p>
        <div className="mt-5 flex justify-center items-center">
          <Contactus />
        </div>
      </div>
    </>
  )
}
