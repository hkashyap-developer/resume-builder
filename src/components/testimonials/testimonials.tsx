/**
 * v0 by Vercel.
 * @see https://v0.dev/t/99ETyrm8cuS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TestimonialData } from "@/data/TestimonialData";
import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-16">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        {TestimonialData.map((data, index) => {
          return (
            <div className="space-y-6" key={index}>
              <div className="flex items-center gap-4">
                <Avatar>
                  <Image
                    src={"/HeroImage.png"}
                    alt="Testimonial Image"
                    className="w-full"
                    width={150}
                    height={150}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-medium">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, Acme Inc.
                  </p>
                </div>
              </div>
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                &ldquo;The platform has been a game-changer for our team. It has
                streamlined our development workflow and allowed us to focus on
                building great products.&rdquo;
              </blockquote>
            </div>
          );
        })}
      </div>
    </section>
  );
}
