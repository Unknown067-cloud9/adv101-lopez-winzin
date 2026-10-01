import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>
        HELLO EVERYONE!
      </h1>
      <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto 32px' }}>
       Today, lets explore my whole information.
      </p>
      <Link
        href="/portfolio"
        style={{
          backgroundColor: '#2563eb',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'inline-block',
        }}
      >
        View Projects
      </Link>
    </div>
  );
}
