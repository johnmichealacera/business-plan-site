import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Isla Paraiso Beach Resort',
  description: 'Contact Isla Paraiso Beach Resort for bookings, inquiries, and more. Find our address, phone, email, and a contact form.',
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-tropical-blue mb-6">Contact Us</h1>
      <div className="mb-8 space-y-2">
        <div><span className="font-semibold">Address:</span> Barangay Isla, Paradise Island, Philippines</div>
        <div><span className="font-semibold">Phone:</span> <a href="tel:+639123456789" className="text-tropical-blue hover:underline">+63 912 345 6789</a></div>
        <div><span className="font-semibold">Email:</span> <a href="mailto:info@islaparaiso.com" className="text-tropical-blue hover:underline">info@islaparaiso.com</a></div>
      </div>
      <div className="mb-8">
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          [Google Map Placeholder]
        </div>
      </div>
      <form className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4" method="POST" action="/api/contact">
        <label className="flex flex-col gap-1">
          Name
          <input name="name" type="text" required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Email
          <input name="email" type="email" required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Message
          <textarea name="message" rows={4} required className="border rounded px-3 py-2" />
        </label>
        <button type="submit" className="bg-tropical-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-tropical-blue/80 transition">Send Message</button>
      </form>
    </section>
  );
} 