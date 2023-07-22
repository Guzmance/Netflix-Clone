import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import { useRef, useEffect, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';
import { useParams } from 'react-router-dom';
import ListItemS from '../listItem/ListItemS';

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [movieListPopular, setMovieListPopular] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
    getDataPopular();
  }, []);

  useEffect(() => {
    getData();
    getDataPopular();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=8fcfc85e3ca6be95583ec3255cfe3faa&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  const getDataPopular = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=8fcfc85e3ca6be95583ec3255cfe3faa&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieListPopular(data.results));
  };

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <>
      <div className="list">
        <span className="listTitle">SERIES COMING SOON</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick('left')}
            style={{ display: !isMoved && 'none' }}
          />
          <div className="container" ref={listRef}>
            {movieListPopular.map((movie) => (
              <ListItemS key={movie.id} movie={movie} />
            ))}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick('right')}
          />
        </div>
      </div>
      <div className="movie__list">
        <h2 className="list__title">
          {(type ? type : 'POPULAR').toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <ListItem movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
