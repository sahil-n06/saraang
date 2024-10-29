import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import React from 'react';
import Collection from '@/components/shared/Collection';

const HeroSection = () => {
  return (
    <>
      <section
        className="
          relative py-5 md:py-10 overflow-hidden 
          bg-[url('/assets/images/hero.png')] 
          sm:bg-[url('/assets/images/hero.png')] 
          bg-cover bg-center"
        style={{ height: '100vh' }}
      >
        {/* Light overlay to reduce the intensity of the background image */}
        <div className="absolute inset-0 bg-white opacity-30 z-10"></div>

        {/* Content Wrapper */}
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 relative z-20">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Saraang, Celebrate Your Passion</h1>
            <p className="p-regular-20 md:p-regular-24">
              Unlock your creative potential with Saraang: discover, participate, and get recognized in diverse cultural events.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Collection />
    </>
  );
};

export default HeroSection;
