'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SubscriptionTiers from '../../components/SubscriptionTiers';

interface User {
  id: string;
  email: string;
  name: string;
  subscriptionTier: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user/profile');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          router.push('/signin');
        }
      } catch (error) {
        router.push('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleSignOut = async () => {
    await fetch('/api/auth/sign-out', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user.name}! 
              <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {user.subscriptionTier} tier
              </span>
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main>
        <SubscriptionTiers />
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Format Your Manuscript</h2>
            <p className="text-gray-600 mb-4">
              Based on your {user.subscriptionTier} subscription, you can format manuscripts with our tool.
            </p>
            <button
              onClick={() => {
                // <<< UPDATE THIS TO YOUR ACTUAL FORMETTER FRONTEND URL >>>
                window.open(process.env.NEXT_PUBLIC_FORMATTER_FRONTEND_URL || 'https://your-hostinger-domain.com', '_blank');
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Open Formatter Tool
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
