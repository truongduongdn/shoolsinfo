import React from 'react';
import '../styles/Boxsearch.css';

function BoxSearch(props) {
    return (
      <div className="search-container">
      <input type="text" className="search-box" placeholder="Search Schools" />
      <select className="dropdown" id="school-type">
        <option value="Primary_school">Primary school</option>
        <option value="Middle_School">Middle School</option>
        <option value="High_School">High School</option>
      </select>
      <select className="dropdown" id="area">
        <option value="west">Ho Chi Minh</option>
        <option value="north">Ha Noi</option>
        <option value="south">Hai Phong</option>
      </select>
      
      <button type="button" className=" btn search-btn">Search</button>
    </div>
    );
}

export default BoxSearch;