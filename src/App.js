import React, { useState } from 'react';
import MoviePage from './MoviePage';
import jsonData from './API/CONTENTLISTINGPAGE-PAGE1.json';
import jsonData1 from './API/CONTENTLISTINGPAGE-PAGE2.json';
import jsonData2 from './API/CONTENTLISTINGPAGE-PAGE3.json';
import searchIcon from './Slices/search.png';
import backIcon from './Slices/Back.png';

const JsonDataArr = [jsonData, jsonData1, jsonData2];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBackClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const filteredContent = JsonDataArr[currentPage].page["content-items"].content.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="header">
        <img src={backIcon} alt="Back" className="back-button" onClick={handleBackClick} />
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input type="text" placeholder="Search" className="search-bar" value={searchQuery} onChange={handleSearchChange} />
      </div>
      <MoviePage content={filteredContent} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;




// import React from 'react';
// import Child1 from './Child1'
// import Child2 from './Child2'
// import { Pages } from './Pages';
 



// function App (props) {
//    let  arr=[2,3,4,1,,3,4,4,5,44,5]
//   //let add1=arr.map((val)=>val+1)
//     return ( 
// <div>
// <Child1>Sree</Child1>
// <Child2>Dehradun</Child2>
// <Pages page_num={1}/>
// </div>  );
// }

// export default App;

