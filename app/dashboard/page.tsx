'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome! Authentication will be added soon.</p>
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
