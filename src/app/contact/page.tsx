import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Have a project in mind or a question for our team? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-headline text-2xl font-bold">Get in Touch</h2>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-primary/10 p-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Office</h3>
              <p className="text-muted-foreground">Block C4, EL-rufai Estate, APO<br/>Abuja, FCT</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <a href="mailto:contact@verdantbuild.com" className="text-muted-foreground hover:text-primary">info@netflowhomes.com.ng</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(+234)8068969156</a>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-card p-8 shadow-lg">
           <h2 className="font-headline text-2xl font-bold">Send a Message</h2>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}