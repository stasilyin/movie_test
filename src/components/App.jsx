import React, {useEffect, useState} from 'react'
import Nav from './nav/Nav'
import Card from './card/Card'
import Paginator from "./pagination/Pagination"
import Preloader from './preloader/Preloader'

const App = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResult, setTotalResult] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPrePage] = useState(10)
    const [search, setSearch] = useState('')

    useEffect(() => {
            setLoading(true)
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${search}&page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setTotalResult(data.totalResults);
                setLoading(false);
            });
    }, [currentPage, search])

    const onPageChanged = (numberPage) => {
        setCurrentPage(numberPage)
    }

    return (
         <>
            <Nav setSearch={setSearch} setPage={setCurrentPage}/>
             {loading ?
                 <div className='preloader'><Preloader /></div>
                 :
                 movies ?
                     <div className='card__wrapper'>
                         {movies.map((movie, index) => {
                             return (
                                 <Card key={index} movie={movie} />
                             )
                         })}
                     </div> : <div style={{fontSize:'30px', textAlign: 'center'}}>Search not result</div>
             }
             <div className='pagination'>
                <Paginator totalMoviesCount={totalResult}
                           pageSize={countriesPrePage}
                           onPageChanged={onPageChanged}
                           currentPage={currentPage}/>
             </div>
         </>
    )
}

export default App