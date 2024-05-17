import React, { useState, useEffect } from 'react';

const ComNewsList = ({ targetID }) => {
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('your-json-file-path.json');  // Replace with your JSON file path
          const jsonData = await response.json();
          const matchingItem = jsonData.find(item => item.ID === targetID);
          setNewsItem(matchingItem);
        };
      
        fetchData();
      }, [targetID]); 
};


export default ComNewsList;