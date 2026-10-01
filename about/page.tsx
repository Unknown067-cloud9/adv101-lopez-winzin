export default function About() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', maxWidth: '650px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', marginTop: 0, color: '#0f172a' }}>About Me</h1>
      <p style={{ color: '#475569', lineHeight: '1.6' }}>
        I am Winzin J. Lopez, a student with a lazy behavior but with a big dreams.
      </p>
      <h2 style={{ fontSize: '20px', color: '#1e293b', marginTop: '24px' }}>Tech Stack</h2>
      <ul style={{ color: '#475569', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
}
