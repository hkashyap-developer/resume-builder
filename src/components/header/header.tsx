/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lz3jewC5SFX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Logo from "/public/favicon.ico"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={Logo} width="32" alt="Resume Builder Logo" />
          <span className="ml-2 text-lg font-bold">Resume Builder</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Build Resume
          </Link>
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link
                  href="#"
                  className="flex items-center text-lg font-medium hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-lg font-medium hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
                <div className="pt-4">
                  <Link
                    href="#"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Build Resume
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}