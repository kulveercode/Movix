import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.scss";
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() => {
          const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
          setBackground(bg);
  }, [data])

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="herobannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of Movies, 
          TV shows and people to discover.
          Explore now.</span>
          <div className="searchInput">
              <input 
                type="text"
                placeholder='search for a movie or tv show..'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
               />
          </div>
        </div>
      </div>
    </div>
  )
};


export default HeroBanner;

