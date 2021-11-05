import React, {useState} from "react"

const Paginator = (props) => {
    const {totalMoviesCount, pageSize, onPageChanged, currentPage} = props
    let portionSize = 10;
    let pagesCount = Math.ceil(totalMoviesCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div style={{display: 'flex'}}>
        {portionNumber > 1 &&
        <button className='button-pagination' onClick={()=> {setPortionNumber(portionNumber-1)}}>Prev</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p)=> {
                return <span
                    className={`page__number ${currentPage === p ? 'active' : null }`}
                    key={p}
                    onClick={(e)=> {
                        onPageChanged(p);}}>{p} </span>
            })}
        {portionCount > portionNumber &&
        <button className='button-pagination' onClick={()=> {setPortionNumber(portionNumber+1)}}>Next</button>}
    </div>
}

export default Paginator