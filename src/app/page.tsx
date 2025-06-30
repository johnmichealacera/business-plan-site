import Hero from '@/components/Hero';
import GalleryCarousel from '@/components/GalleryCarousel';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Isla Paraiso Beach Resort | Your Island Escape Awaits',
  description: 'Discover Isla Paraiso Beach Resort – the perfect tropical getaway for families, tourists, and barkadas. Enjoy beachfront cottages, island hopping, and more in a relaxing island atmosphere.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <GalleryCarousel />
      <Testimonials />
    </>
  );
}
