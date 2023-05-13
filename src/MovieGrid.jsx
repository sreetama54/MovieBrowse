import React from 'react';
import { Poster_store } from './Slices/Imagefolder';
import './MovieGrid.css';

const MovieGrid = (props) => {
  const { content } = props.json.page["content-items"];
  const rows = [];

  for (let i = 0; i < content.length; i += 3) {
    rows.push(content.slice(i, i + 3));
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', flexBasis: '100%', marginBottom: '10px' }}>
            {row.map((item, index) => (
              <div key={index} style={{ flexBasis: '33%', marginRight: '10px' }}>
                <img src={
                  
                  Poster_store[item["poster-image"].split('.')[0]]
                  
                  } alt={item.name} style={{ maxWidth: '100%' }} />
                <h2 className='item-name'>{item.name}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
