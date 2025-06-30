import GalleryCarousel from '@/components/GalleryCarousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Isla Paraiso Beach Resort',
  description: 'View the gallery of Isla Paraiso Beach Resort: tropical views, cottages, activities, and more.',
};

export default function GalleryPage() {
  return <GalleryCarousel />;
} 