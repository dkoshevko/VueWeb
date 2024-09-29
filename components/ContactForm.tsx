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
import emailjs from "@emailjs/browser"


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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_vueweb', 'template_admin', e.currentTarget, {
        publicKey: 'agCyWkcLJ9CqBeUe3',
      }).then(
        () => {
          console.log('SUCCESS!');
          toast({
            description: "Message envoyé avec succès !"
          })
          form.reset();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    emailjs.sendForm('service_vueweb', 'template_user', e.currentTarget, {
        publicKey: 'agCyWkcLJ9CqBeUe3',
      }).then(
        () => {
          console.log('SUCCESS!');
          toast({
            description: "Message envoyé avec succès !"
          })
          form.reset();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };


  return (
    <Form {...form}>
      <form onSubmit={(sendEmail)} className={customClass}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre prénom</FormLabel> */}
                <FormControl>
                  <Input placeholder="PRÉNOM :" autoComplete='given-name' {...field} />
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
                  <Input placeholder="NOM :" autoComplete='family-name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Votre email</FormLabel> */}
                <FormControl>
                  <Input placeholder="MAIL :" autoComplete='email' {...field} />
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
                  <Input placeholder="TÉLÉPHONE :" autoComplete='tel' {...field} />
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
          <Button type="submit" variant="outline" className="w-fit px-10 uppercase place-self-end">Envoyer</Button>
      </form>
    </Form>
  )
}
