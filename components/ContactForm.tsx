"use client"

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit comporter au moins 2 caractères."
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères."
  }),
  email: z.string().email({
    message: "Adresse mail invalide."
  }),
  phone: z.string().min(10, {
    message: "Le numéro saisi est trop court."
  }).max(14, {
    message: "Le numéro saisi est trop long."
  }),
  msg: z.string({message: "Dites nous d'avantage"}),
});

type ContactFormProps = {
  customClass: string
};

export function ContactForm({customClass}: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      msg: "",
    },
  });

  const {toast} = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if(response.status === 200) {
        toast({
          description: "Message envoyé avec succès !"
        })
      }
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={customClass}>
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre prénom</FormLabel> */}
                <FormControl>
                  <Input placeholder="PRÉNOM :" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre nom</FormLabel> */}
                <FormControl>
                  <Input placeholder="NOM :" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre message</FormLabel> */}
                <FormControl>
                  <Textarea placeholder="MESSAGE :" {...field} className="h-32" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-5">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre email</FormLabel> */}
                <FormControl>
                  <Input placeholder="MAIL :" {...field} />
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
                {/* <FormLabel>Votre numéro</FormLabel> */}
                <FormControl>
                  <Input placeholder="TÉLÉPHONE :" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-fit px-10 uppercase">Envoyer</Button>
          <p className="text-center text-2xl italic font-light pt-5">
          “Parlez-nous de votre projet”
          </p>
        </div>
      </form>
    </Form>
  )
}
