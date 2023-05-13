import React from 'react';
import { Poster } from './Slices/Imagefolder';

const MovieGrid = (props) => {
  const { content } = props.json.page["content-items"];
  const rows = [];

  for (let i = 0; i < content.length; i += 3) {
    rows.push(content.slice(i, i + 3));
  }

  return (
    <div>
      <h1>{props.json.page.title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', flexBasis: '100%', marginBottom: '10px' }}>
            {row.map((item, index) => (
              <div key={index} style={{ flexBasis: '33%', marginRight: '10px' }}>
                <img src={`/Slice/${item["poster-image"]}`} alt={item.name} style={{ maxWidth: '100%' }} />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
