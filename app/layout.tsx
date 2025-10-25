import './globals.css';

export const metadata = {
  title: 'Manuscript Formatter - User Management',
  description: 'Manage your account and subscription',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}