import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Logo className="h-16" />
            </Link>
            <p className="mt-4 text-sm">
              Building Your Vision with Precision, Passion, and Professionalism.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-headline text-lg font-semibold text-primary">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
                  <li><Link href="/services" className="text-sm hover:text-primary">Services</Link></li>
                  <li><Link href="/projects" className="text-sm hover:text-primary">Projects</Link></li>
                  <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold text-primary">Contact Us</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">Block C4, EL-rufai Estate, APO, Abuja, FCT</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                     <a href="mailto:info@netflowhomes.com.ng" className="text-sm hover:text-primary">info@netflowhomes.com.ng</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="tel:+2348068969156" className="text-sm hover:text-primary">(+234) 806 896 9156</a>
                  </li>
                </ul>
              </div>
               <div>
                <h3 className="font-headline text-lg font-semibold text-primary">Follow Us</h3>
                 <div className="mt-4 flex space-x-4">
                  {/* Social links can be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} NETFLOW Smart Homes Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
