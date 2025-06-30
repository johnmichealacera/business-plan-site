import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
      <Image
        src="/beach-hero.jpg"
        alt="Tropical beach at Isla Paraiso"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-tropical-blue/40 z-10" />
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">Isla Paraiso Beach Resort</h1>
        <p className="text-xl md:text-2xl font-medium mb-8 drop-shadow">Your Island Escape Awaits</p>
        <Link href="/contact" className="bg-tropical-sand text-tropical-blue font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-yellow-200 transition">
          Book Now
        </Link>
      </div>
    </section>
  );
} 