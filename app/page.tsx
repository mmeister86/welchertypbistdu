import Link from "next/link";
import { ArrowRight, Brain, Palette, Sparkles, Star } from "lucide-react";
import React from "react";
import { TestimonialsSlider } from "@/components/ui/testimonials-slider";
import { Badge } from "@/components/ui/badge";
import { SideAd } from "@/components/ui/side-ad";
import { FeaturedTests } from "@/components/ui/featured-tests";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="bg-white">
                  Probiere es kostenlos aus!
                </Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl tracking-tighter font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Welcher Typ bist Du?
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md">
                  Erfahre mehr über dich selbst mit unseren unterhaltsamen und
                  aufschlussreichen Persönlichkeitstests!
                </p>
              </div>
              <div className="flex flex-row mt-6 gap-4">
                <Link
                  href="/tests"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Tests entdecken <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/popular"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-white text-purple-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200"
                >
                  Beliebteste Tests
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-xl aspect-square shadow-lg overflow-hidden">
                {/* Tyrion Bild für das erste Quadrat */}
                <img
                  src="/images/hero/tyrion.jpeg"
                  alt="Tyrion Lannister"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl row-span-2 shadow-lg overflow-hidden">
                {/* Iron Man Bild für das größere Rechteck */}
                <img
                  src="/images/hero/ironman.png"
                  alt="Iron Man"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl aspect-square shadow-lg overflow-hidden">
                {/* Spongebob Bild für das zweite Quadrat */}
                <img
                  src="/images/hero/spongebob.jpeg"
                  alt="Spongebob"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Background Blobs - now positioned relative to container */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="w-full py-3 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
            Werbung - Advertisement
          </div>
        </div>
      </div>

      {/* Featured Tests */}
      <FeaturedTests />

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            So funktioniert's
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Test auswählen</h3>
              <p className="text-gray-600">
                Wähle aus unserer Vielzahl an unterhaltsamen Tests den aus, der
                dich am meisten interessiert.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fragen beantworten</h3>
              <p className="text-gray-600">
                Beantworte eine Reihe von Fragen, die speziell entwickelt
                wurden, um deine Persönlichkeit zu enthüllen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ergebnis erhalten</h3>
              <p className="text-gray-600">
                Erhalte dein personalisiertes Ergebnis und teile es mit Freunden
                in sozialen Medien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Side Ad */}
      <SideAd />

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Was unsere Nutzer sagen
          </h2>

          <TestimonialsSlider />
        </div>
      </section>

      {/* Bottom Ad Banner */}
      <div className="w-full py-3 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
            Werbung - Advertisement
          </div>
        </div>
      </div>
    </div>
  );
}
