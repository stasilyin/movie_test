import React from 'react'

import imagePlaceholder from '../../assets/img/imageNotFound.png'

const Card = (movie) => {
    const isPoster = movie.movie.Poster !== 'N/A'
 return (
     <div className='card'>
         <div className='card__image'>
            <img src={isPoster ? movie.movie.Poster : imagePlaceholder}
                 alt={isPoster ? movie.movie.title : 'not found'}/>
         </div>
         <div className='card__data'>
             <span>Name: {movie.movie.Title}</span>
             <span>imdbid: {movie.movie.imdbID}</span>
             <span>Year: {movie.movie.Year}</span>
             <span>Type: {movie.movie.Type}</span>
         </div>
     </div>
 )
}

export default Card