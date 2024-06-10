/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wgzx0KitHyk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Resume Builder All rights reserved.
          </p>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
            prefetch={false}
          >
            resumebuilder.com
          </Link>
        </div>
      </div>
    </footer>
  )
}