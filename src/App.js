import React from 'react';
import imageData from './imageData';
import ImageRenderer from './ImageRenderer';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Lazy Load Images</h1>
      <section>
        {imageData.map(data => (
          <ImageRenderer
            key={data.id}
            url={data.url}
            thumb={data.thumbnail}
            width={data.width}
            height={data.height}
          />
        ))}
      </section>
    </div>
  );
}
