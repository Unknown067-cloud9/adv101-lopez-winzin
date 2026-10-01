import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio',
  description: 'Next.js App Router Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '20px', fontSize: '14px', marginTop: 'auto' }}>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
