import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;


const Pagination = ({ 
    limit,
     total,
      offset,
      setOffset
}) => {
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);
    
    return (
        <ul className="list-pagination">
            {Array.from({ length:Math.min( MAX_ITEMS, pages) })
                .map((item, index) => index + firstPage)
                .map((page,index) => (
                    <li key={index}>
                        <button 
                        className={page === currentPage
                            ? 'pagination__item--active'
                            : 'btn-pagination'}
                        onClick={()=>{
                            setOffset((page -1) * limit)
                        }}
                        >{page}</button>
        
                    </li>
                ))
            }

        </ul>
    )
}

export default Pagination;