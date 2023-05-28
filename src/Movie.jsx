import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const {movie,isLoading}=useContext(AppContext);

  if (isLoading) {
    return <div className="loading">
      Loading....</div>
  }

  return (
   <>
   <section className='movie-page'>
    <div className=' container grid grid-4-col'>
    {
   movie.map((currMovie)=>{
    const {imdbID,Title,Poster}=currMovie;
   return(
         <NavLink to = {`Movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2>{Title}</h2>
              <img src={Poster} alt={imdbID} />
            </div>
          </div>
         </NavLink>
   )}
   )}

    </div>

   </section>
   </>
  )
}

export default Movie
