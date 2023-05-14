import React, { useState, useEffect } from 'react';
import './App.css';
import MovieGrid from './MovieGrid';
import jsonData from './API/CONTENTLISTINGPAGE-PAGE1.json';
import jsonData1 from './API/CONTENTLISTINGPAGE-PAGE2.json';
import jsonData2 from './API/CONTENTLISTINGPAGE-PAGE3.json';
import {Poster_store} from './Slices/Imagefolder'

const JSON_ARR = [jsonData, jsonData1, jsonData2];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pgIndex, setPgIndex] = useState(0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const filteredContentItems = JSON_ARR[pgIndex].page['content-items'].content.filter(
    (item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight && pgIndex < JSON_ARR.length - 1) {
        setPgIndex((prevIndex) => prevIndex + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pgIndex]);

  useEffect(() => {
    const handleScrollToTop = () => {
      if (window.pageYOffset === 0 && pgIndex > 0) {
        setPgIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener('scroll', handleScrollToTop);
    return () => window.removeEventListener('scroll', handleScrollToTop);
  }, [pgIndex]);



  return (
    <div id="app">
      <nav className="navbar sticky">
        <div className="navbar-search">
        </div>
        <label htmlFor="image-search">
          <img src={Poster_store.search} alt="search icon" />
        </label>
        <div class="navbar-search">
  <div class="search-box">
    <input type="text" class="search-txt" placeholder="Search" />
  </div>
</div>
        <button className="navbar-back">Back</button>
      </nav>
      <h1 className="content-title">{JSON_ARR[pgIndex].page.title}</h1>
      <MovieGrid
        json={{
          ...JSON_ARR[pgIndex],
          page: {
            ...JSON_ARR[pgIndex].page,
            'content-items': { content: filteredContentItems },
          },
        }}
      />
    </div>
  );
}

export default App;

