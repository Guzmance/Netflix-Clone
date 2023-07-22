import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

export default function Featured() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=8fcfc85e3ca6be95583ec3255cfe3faa&language=en-US'
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={4}
        infiniteLoop={true}
        showStatus={false}
        className="carousel"
      >
        {popularMovies.map((movie) => (
          <Link
            key={movie.id}
            style={{ textDecoration: 'none', color: 'white' }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie ? movie.original_title : ''}
              </div>
              <div className="posterImage__runtime">
                {movie ? movie.release_date : ''}
                <span className="posterImage__rating">
                  <StarIcon
                    style={{
                      fontSize: '25px',
                    }}
                  />
                  {movie ? movie.vote_average : ''}
                </span>
              </div>
              <div className="posterImage__description">
                {movie ? movie.overview : ''}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
