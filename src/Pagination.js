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

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }

    return (
        <ul className="list-pagination">

            <li>
                <button className='btn-pagination'
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >...</button>
            </li>

            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((item, index) => index + firstPage)
                .map((page, index) => (

                    <li key={index}>
                        <button
                            className={page === currentPage
                                ? 'pagination__item--active'
                                : 'btn-pagination'}
                            onClick={() => {
                                onPageChange(page)
                            }}
                        >{page}</button>
                    </li>
                ))}
            <li>
                <button className='btn-pagination'
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === pages}
                >...</button>
            </li>
        </ul>
    )
}

export default Pagination;