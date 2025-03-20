"use client";
import { Star } from "lucide-react";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

// Testimonial data with 5 testimonials
const testimonials = [
  {
    id: "testimonial-1",
    name: "Lisa Müller",
    initials: "LM",
    avatarBg: "bg-purple-200",
    avatarText: "text-purple-700",
    rating: 5,
    testimonial:
      "Die Tests sind nicht nur unterhaltsam, sondern haben mir auch wirklich geholfen, mich selbst besser zu verstehen. Besonders der Persönlichkeitstest war erstaunlich genau!",
  },
  {
    id: "testimonial-2",
    name: "Markus Schmidt",
    initials: "MS",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
    rating: 4,
    testimonial:
      "Ich habe den Star Wars Test mit meinen Freunden gemacht und wir hatten so viel Spaß beim Vergleichen unserer Ergebnisse. Überraschenderweise war ich Yoda!",
  },
  {
    id: "testimonial-3",
    name: "Julia Weber",
    initials: "JW",
    avatarBg: "bg-green-200",
    avatarText: "text-green-700",
    rating: 5,
    testimonial:
      "Der Berufstest hat mir eine völlig neue Perspektive gegeben. Ich hätte nie gedacht, dass ich für kreative Berufe so gut geeignet bin!",
  },
  {
    id: "testimonial-4",
    name: "Thomas Becker",
    initials: "TB",
    avatarBg: "bg-red-200",
    avatarText: "text-red-700",
    rating: 5,
    testimonial:
      "Die Farbtests sind fantastisch! Die Ergebnisse waren so präzise, dass meine Freunde überrascht waren, wie gut sie zu mir passten.",
  },
  {
    id: "testimonial-5",
    name: "Sophia Klein",
    initials: "SK",
    avatarBg: "bg-orange-200",
    avatarText: "text-orange-700",
    rating: 4,
    testimonial:
      "Unterhaltsam und aufschlussreich. Der Tier-Persönlichkeitstest hat meine Charakterzüge perfekt erfasst. Ich bin definitiv ein Adler!",
  },
];

export function TestimonialsSlider() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <InfiniteSlider
        className="flex items-center gap-8 py-4"
        duration={60}
        gap={32}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[100px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[100px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 shrink-0">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center mr-4`}
        >
          <span className={`${testimonial.avatarText} font-bold`}>
            {testimonial.initials}
          </span>
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating ? "fill-current" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">"{testimonial.testimonial}"</p>
    </div>
  );
}
