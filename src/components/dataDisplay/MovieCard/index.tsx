import React, { FC } from 'react'
import { Progress } from 'antd'
import { MovieCardProps } from './types'
import {
  Card,
  CardBody,
  cardBodyStyles,
  Footer,
  Header,
  PosterImage,
  Subtitle,
  Title,
} from './styled'
import { Space } from '../../layout'
import noPosterImage from './assets/no-poster.png'

export const MovieCard: FC<MovieCardProps> = ({
  movie,
}) => {
  const movieVoteAvgPercent = movie.voteAverage * 10
  const voteBarStrokeColor =
    movieVoteAvgPercent >= 75
      ? '#1C995D'
      : movieVoteAvgPercent >= 50
      ? '#b9af1e'
      : '#991c1c'

  const posterImage = (
    <PosterImage
      src={movie.posterPath ?? noPosterImage}
      alt={`${movie.title} poster`}
      onClick={() => console.log('Clicked ->', movie)}
    />
  )

  return (
    <Card bodyStyle={cardBodyStyles} className='movie-card'>
      {posterImage}
      <CardBody>
        <Header>
          <Title level={4}>{movie.title}</Title>
          <Space orientation='vertical' amount='0.8rem' />
          <Subtitle>{movie.releaseDate}</Subtitle>
        </Header>
        <Space orientation='vertical' amount='0.8rem' />
        <Footer>
          <span>{movieVoteAvgPercent / 10}</span>
          <Progress
            percent={movieVoteAvgPercent}
            strokeColor={voteBarStrokeColor}
            showInfo={false}
          />
        </Footer>
      </CardBody>
    </Card>
  )
}
