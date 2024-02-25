import React, { useContext, useState } from 'react'
import './MovieCard.scss'
import { Space, Tag, ConfigProvider, Rate } from 'antd'
import { IGenres, IMovie } from '../../types/types'
import { format } from 'date-fns'
import notFound from '../../assets/not_found.png'
import { titleClass, rateColor } from '../../utils'
import { AppContext } from '../../Context/AppContext'

interface IMovieListProps extends IMovie {
  myrate?: number
  onRated: (rate: number) => void
}

const MovieCard = ({
  genre_ids,
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  myrate,
  onRated,
}: IMovieListProps) => {
  const [rating, setRating] = useState(myrate ? myrate : 0)
  const { genres } = useContext(AppContext)

  const genreSelection = (ids: number[], arrGenre: IGenres[]) => {
    return ids.map((id) => {
      for (let i = 0; i < arrGenre.length; i++) {
        if (arrGenre[i].id === id) {
          return arrGenre[i].name
        }
      }
    })
  }

  const img_path = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : notFound

  const textContent = overview.slice(0, overview.indexOf(' ', 160)) + '...'

  return (
    <li>
      <article className="card">
        <img src={img_path} alt="постер" className="card__img"></img>
        <div className="card__description">
          <div className="card__container">
            <div className="card__title">
              <h2 className={titleClass(title)}>{title}</h2>
              <div className={rateColor(vote_average)}>{vote_average.toFixed(1)}</div>
            </div>
            <p className="card__date">
              {release_date ? format(new Date(release_date), 'MMMM dd, yyyy') : 'incomprehensible date'}
            </p>

            <ConfigProvider
              theme={{
                components: {
                  Tag: {
                    defaultColor: '#575757',
                  },
                },
              }}
            >
              <Space size={[0, 8]} wrap>
                {genreSelection(genre_ids, genres).map((el, ind) => {
                  return <Tag key={ind}>{el}</Tag>
                })}
              </Space>
            </ConfigProvider>

            <p className="card__text">{textContent}</p>
          </div>

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
              onChange={(e) => {
                setRating(e)
                onRated(e)
              }}
              value={rating}
              count={10}
            />
          </ConfigProvider>
        </div>
      </article>
    </li>
  )
}

export default MovieCard