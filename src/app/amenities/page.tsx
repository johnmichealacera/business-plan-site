import AmenitiesList from '@/components/AmenitiesList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amenities | Isla Paraiso Beach Resort',
  description: 'Explore the amenities at Isla Paraiso Beach Resort: beachfront cottages, free breakfast, island hopping, kayaking, free WiFi, and family-friendly activities.',
};

export default function AmenitiesPage() {
  return <AmenitiesList />;
} 