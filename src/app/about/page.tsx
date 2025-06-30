import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Isla Paraiso Beach Resort',
  description: 'Learn about the story and vision of Isla Paraiso Beach Resort, your tropical island escape in the Philippines.',
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-tropical-blue mb-6">About Isla Paraiso</h1>
      <p className="mb-8 text-lg text-gray-700">Nestled on the pristine shores of the Philippines, Isla Paraiso Beach Resort was founded by a local family with a passion for sharing the beauty of island life. Our mission is to provide a relaxing, memorable escape for families, friends, and travelers from all walks of life. Whether you seek adventure or tranquility, Isla Paraiso is your home away from home. (This is placeholder text.)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow">
          <Image src="/about1.jpg" alt="Cottages at Isla Paraiso" fill className="object-cover" />
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow">
          <Image src="/about2.jpg" alt="Beach view at Isla Paraiso" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 