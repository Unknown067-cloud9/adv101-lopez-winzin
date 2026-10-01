export default function Gallery() {
  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
  ];

  return (
    <div>
      <h1 style={{ fontSize: '28px', marginBottom: '24px', color: '#0f172a' }}>Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Gallery item ${i + 1}`}
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
        ))}
      </div>
    </div>
  );
}
