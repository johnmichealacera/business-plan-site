const amenities = [
  { icon: '🏖️', name: 'Beachfront Cottages' },
  { icon: '🥞', name: 'Free Breakfast' },
  { icon: '⛵', name: 'Island Hopping' },
  { icon: '🛶', name: 'Kayaking' },
  { icon: '📶', name: 'Free WiFi' },
  { icon: '👨‍👩‍👧‍👦', name: 'Family-friendly Activities' },
];

export default function AmenitiesList() {
  return (
    <section className="py-12 bg-white rounded-3xl shadow max-w-5xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-tropical-blue text-center mb-8">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {amenities.map((item) => (
          <div key={item.name} className="flex flex-col items-center text-center">
            <span className="text-5xl mb-3">{item.icon}</span>
            <span className="text-lg font-semibold text-tropical-blue">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 