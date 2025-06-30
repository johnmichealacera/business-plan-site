import Image from 'next/image';

const images = [
  { src: '/gallery1.jpg', alt: 'Cottage by the beach' },
  { src: '/gallery2.jpg', alt: 'Crystal clear water' },
  { src: '/gallery3.jpg', alt: 'Kayaks on the sand' },
  { src: '/gallery4.jpg', alt: 'Island hopping boat' },
  { src: '/gallery5.jpg', alt: 'Family enjoying the beach' },
  { src: '/gallery6.jpg', alt: 'Sunset view at Isla Paraiso' },
];

export default function GalleryGrid() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-tropical-blue text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
} 