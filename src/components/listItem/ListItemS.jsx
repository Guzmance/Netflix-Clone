import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

export default function ListItemS({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="cards">
          <img
            className="cards__img"
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ''
            }`}
          />
          <div className="cards__overlay">
            <div className="card__title">
              {movie ? movie.original_name : ''}
            </div>
            <div className="card__runtime">
              {movie ? movie.first_air_date : ''}
              <span className="card__rating">
                <StarIcon
                  style={{
                    fontSize: '10px',
                  }}
                />
                {movie ? movie.vote_average : ''}
              </span>
            </div>
            <div className="card__description">
              {movie ? movie.overview.slice(0, 118) + '...' : ''}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
