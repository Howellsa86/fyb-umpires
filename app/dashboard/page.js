'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/schedule" className="text-blue-600 underline">Manage Schedule</Link>
        </li>
        <li>
          <Link href="/dashboard/umpires" className="text-blue-600 underline">Manage Umpires</Link>
        </li>
        <li>
          <Link href="/dashboard/notifications" className="text-blue-600 underline">Notification Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/performance" className="text-blue-600 underline">Performance & Ratings</Link>
        </li>
      </ul>
    </div>
  );
}
