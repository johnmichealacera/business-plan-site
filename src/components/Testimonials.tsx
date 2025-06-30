const testimonials = [
  {
    name: 'Maria Santos',
    quote: 'The perfect family getaway! The cottages are cozy and the staff are so friendly. We loved the island hopping tour!',
  },
  {
    name: 'John Dela Cruz',
    quote: 'A hidden gem! The beach is pristine and the amenities are top-notch. Will definitely come back with friends.',
  },
  {
    name: 'Aira Villanueva',
    quote: 'Relaxing atmosphere, delicious breakfast, and lots of activities for the kids. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-tropical-blue/10 rounded-3xl shadow max-w-5xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-tropical-blue text-center mb-8">What Our Guests Say</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col justify-between">
            <p className="text-lg italic mb-4 text-gray-700">“{t.quote}”</p>
            <span className="font-semibold text-tropical-blue">- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 