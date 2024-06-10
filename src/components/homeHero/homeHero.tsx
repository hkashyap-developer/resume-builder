/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C8gFCGXj19z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"


import Image from "next/image"
import HeroImage from "/public/HeroImage.png"

export default function HomeHero() {
  return (
    <section className="w-full ">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Be a brand with our Resume Bulder!
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
            Discover our comprehensive platform that empowers you to build exceptional web experiences with ease.
            Unleash your creativity and take your projects to new heights.
          </p>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
        <Image
          src={HeroImage}
          width="500"
          height="500"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  )
}