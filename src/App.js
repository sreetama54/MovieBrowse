import React from 'react';
import MovieGrid from './MovieGrid';
import jsonData from './API/CONTENTLISTINGPAGE-PAGE1.json';
import jsonData1 from './API/CONTENTLISTINGPAGE-PAGE2.json';
import jsonData2 from './API/CONTENTLISTINGPAGE-PAGE3.json';

const JSON_ARR=[jsonData,jsonData1,jsonData2]
const page=1;
function App() {
  return (
    <div>
      <MovieGrid json={JSON_ARR[page]} />
    </div>
  );
}

export default App;