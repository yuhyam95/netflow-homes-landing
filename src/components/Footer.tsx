import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
           <Logo className="h-12" />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} NETFLOW Smart Homes Ltd. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
