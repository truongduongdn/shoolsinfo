import React, { useEffect, useState } from 'react';
import './NewsPage.css';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { Link} from 'react-router-dom';

function NewsPage(props) {
  const [newsList, setnewsList] = useState([]);
  useEffect(() => {
    fetch("/data/NewsList.json")
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data);
        setnewsList(data);
      })
  }, [])
  // console.log("newsList:  ",  newsList[0][0])
  return (
    <div>
      <Header />

      <div className='container-fluid'>
        <div className="grid-container">
          {newsList.length > 0 && newsList[0][0] &&
           <Link to='/NewsDetail' >
            <div className="grid-item item1">
              <img src={newsList[0][0]?.imageUrl} className='image' alt={newsList[0][0]?.title} />
              <div className="item-content">
                <h2 className='ItemTitle'>{newsList[0][0]?.title}</h2>
                <p className='ItemDescrip'>{newsList[0][0]?.description}</p>
              </div>
            </div>
            </Link>
          }
          
          {newsList.length > 0 && newsList[0] &&
            newsList[0].map((item, index) => {
              console.log("item: ",item);
              if (index > 0) {
                return (
                  <div className="grid-item item3" key={index}>
                    <img src={item.imageUrl} className='image' alt={item.title} />
                    <div className="item-content">
                      <h2 className='ItemTitle'>{item.title}</h2>
                      <p className='ItemDescrip'>{item.description}</p>
                    </div>
                  </div>
                )
              }

            })

          }

      
        </div >

        {/* end header main news Page  */}
      </div >
      <div className="container">

        <main>
          <div className="content-wrapper">
            <div className="tabs">
              <ul>
                <li className="active">Catalog 1</li>
                <li>Catalog 2</li>
                <li>Catalog 3</li>
              </ul>
            </div>
            <div className="main-content">
              <p>Display conten belong catalog.</p>
            </div>
            <aside className="sidebar">
              <h2>Popular</h2>
              <p>Read most.</p>
            </aside>
          </div>
        </main>
     
      </div>
      <Footer />
    </div >
  );
}

export default NewsPage;