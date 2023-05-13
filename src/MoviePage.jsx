import React from 'react';

const MovieGrid = (props) => {
  const { content } = props.json.page["content-items"];

  return (
    <div className="grid">
      {
        content.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item["poster-image"]} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default MovieGrid;