import React from 'react';
import { Poster_store } from './Assets/Slices/Imagefolder';
import './MovieGrid.css';

const MovieGrid = (props) => {
  const { content } = props.json.page["content-items"];
  const rows = [];

  for (let i = 0; i < content.length; i += 3) {
    rows.push(content.slice(i, i + 3));
  }

  return (
    <>
      <div className='movie-grid'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='movie-grid-row' >
            {row.map((item, index) => (
              <div key={index} className='.movie-grid-item'>
                <img src={
                  Poster_store[item["poster-image"].split('.')[0]]
                 //Extracting the image name.
      
                  } alt={item.name} className='movie-grid-image' loading='lazy' />
                <h2 className='item-name'>{item.name}</h2>
              </div>
            ))
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
