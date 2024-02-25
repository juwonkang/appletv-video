import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'
import { resolveConfig } from 'vite'
import { sortUserPlugins } from 'vite'
import { useStyleSheetContext } from 'styled-components/dist/models/StyleSheetManager'

const Row = (title, id, fetchUrl) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovieData()
  }, [fetchUrl])

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
  }
  const [modalOPen, setModalOpen] = useState(false)

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSelected(movie)
  }
  const [movieSelected, setMovieSelected] = useState({})

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
          >
            {'<'}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image/tmdb.org/t/p/original${movie.backdrop.path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>

        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
          >
            {'>'}
          </span>
        </div>
      </div>
      {modalOPen ? <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> : null}
    </div>
  )
}

export default Row
