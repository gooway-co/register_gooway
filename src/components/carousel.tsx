'use client'

import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { useLanguage } from '../contexts/LanguageContext'

interface CarouselProps {
  slides: {
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
    image: string
  }[]
  interval?: number
}

export function Carousel({ slides, interval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 flex flex-col items-start justify-center p-12 transition-opacity duration-500",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-bold mb-4">{slide.title[language]}</h1>
            <p className="text-gray-300">{slide.description[language]}</p>
          </div>
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black to-purple-900"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        </div>
      ))}
      
      {/* Dot indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

