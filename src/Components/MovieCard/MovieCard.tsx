import React from "react";
import "./MovieCard.scss";
import { Space, Tag, ConfigProvider, Rate } from "antd";
import { IMovie } from "../../types/types";
import { format } from 'date-fns';
import notFound from '../../assets/not_found.png'

const MovieCard = ({ genre_ids, title, overview, poster_path, vote_average, release_date}: IMovie) => {

  const titleClass = () => {
    if(title.length > 35) {return "card__title--text card__exsmall"}
    if(title.length > 30) {return "card__title--text card__small"}
    if(title.length >= 18) {return "card__title--text card__medium"}
    if(title.length > 0) {return "card__title--text"}}

    const rateColor = () => {
      if(vote_average > 7) {return "card__rate--circle  card__rate--greencircle"}
      if(vote_average >=5) {return "card__rate--circle  card__rate--yellowcircle"}
      if(vote_average >=3) {return "card__rate--circle  card__rate--orangecircle"}
      if(vote_average>=0) {return "card__rate--circle  card__rate--redcircle"}}

   const img_path = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:notFound;

  const textContent = overview.slice(0, overview.indexOf(" ", 170)) +"..."
  
  return (
    <li>
      <article className="card">
        <img src={img_path} className="card__img"></img>
        <div className="card__description">
          <div className="card__title">
            <h2 className= {titleClass()}>{title}</h2>
            <div className={rateColor()}>{vote_average.toFixed(1)}</div>
          </div>
          <p className="card__date">{release_date ? format(new Date(release_date), 'MMMM dd, yyyy'):"incomprehensible date"}</p>

          <ConfigProvider
            theme={{
              components: {
                Tag: {
                  defaultColor: "#575757",
                },
              },
            }}
          >
            <Space size={[0, 8]} wrap>
              <Tag>Drama</Tag>
              <Tag>Action</Tag>
            </Space>
          </ConfigProvider>
          <p className="card__text">{textContent}
          </p>
          <ConfigProvider
            theme={{
              token: {
                marginXS: 5,
              },
            }}
          >
            <Rate
              className="card__stars"
              allowHalf
              defaultValue={0}
              count={10}
            />
          </ConfigProvider>
        </div>
      </article>
    </li>
  );
};
export default MovieCard;
