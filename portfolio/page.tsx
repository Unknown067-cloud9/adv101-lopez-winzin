export default function Portfolio() {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'Modern web app with full shopping cart and dynamic checkout.' },
    { title: 'Task Dashboard', desc: 'Productivity tool for tracking workflows and active projects.' },
    { title: 'Personal Blog', desc: 'Clean markdown blog system built with Next.js App Router.' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '28px', marginBottom: '24px', color: '#0f172a' }}>My Portfolio</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '20px', margin: '0 0 10px', color: '#1e293b' }}>{p.title}</h2>
            <p style={{ color: '#64748b', margin: 0, lineHeight: '1.5' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
