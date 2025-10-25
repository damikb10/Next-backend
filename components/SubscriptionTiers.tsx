'use client';
import { useState } from 'react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      '5 manuscript formats per month',
      'Basic journal support',
      'Email support',
      'Standard formatting'
    ],
    buttonText: 'Get Started',
    current: false
  },
  {
    name: 'Premium',
    price: '$9',
    description: 'Great for regular users',
    features: [
      'Unlimited manuscript formats',
      'All journal support',
      'Priority email support',
      'Advanced formatting options',
      'Export to multiple formats'
    ],
    buttonText: 'Upgrade to Premium',
    current: false
  },
  {
    name: 'Enterprise',
    price: '$29',
    description: 'For research institutions',
    features: [
      'Everything in Premium',
      'Team management',
      'API access',
      'Custom journal templates',
      'Dedicated support',
      'Usage analytics'
    ],
    buttonText: 'Contact Sales',
    current: false
  }
];

export default function SubscriptionTiers() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleUpgrade = async (tierName: string) => {
    setLoading(tierName);
    
    try {
      const response = await fetch('/api/user/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionTier: tierName.toLowerCase()
        }),
      });

      if (response.ok) {
        alert(`Successfully upgraded to ${tierName} tier!`);
        window.location.reload();
      } else {
        alert('Failed to update subscription. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          All plans are currently free as we build our user base
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        {tiers.map((tier) => (
          <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                <span className="text-base font-medium text-gray-500">/month</span>
              </p>
              <button
                onClick={() => handleUpgrade(tier.name)}
                disabled={loading === tier.name}
                className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-semibold text-white text-center hover:bg-indigo-700 disabled:opacity-50"
              >
                {loading === tier.name ? 'Processing...' : tier.buttonText}
              </button>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h4 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h4>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}