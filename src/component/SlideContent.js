import React from 'react';
import '../styles/slideContent.css';

function SlideContent(props) {
    return (
        <div>
            <div className="main_content">
                <div className="find-school">
                    <h2>Find The <br></br><span className='headerboxsearch'>Best School</span> Your Child </h2>
                    <p>Explore the best schools (CBSE, ISCE, IGSCE, State Board) in your city!</p>
                    <form>
                        <div className="search-bar">
                            <input type="text" placeholder="Search schools by Name, City, Board" />
                            <input type="text" placeholder="Type of school" />
                            <input type="text" placeholder="Type of school" />
                            <button type="submit">SEARCH SCHOOLS</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="banner-text">
            </div>
        </div>

    );
}

export default SlideContent;