import React, { Component } from 'react';

// import unicorns from './data/unicorns.json';
import { Link } from 'react-router-dom';


export default function Page(props) {

    const total = props.totalNumbers;
    const pages = Math.ceil(total / 50);
    const current = props.currentPage;

    let pageNumbers = [];

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" key="previous"><a class="page-link" href="#">Previous</a></li>

                {
                    pageNumbers.map(
                        // number => <li class="page-item"><a class="page-link" href="/unicorns/">{number}</a></li>
                        number => {

                            if (number === Number(current)) {
                                return <li class="page-item active" key={number} ><Link class="page-link" to={"/unicorns/" + number} onClick={() => { props.handleClick(number); }}>{number}</Link></li>;
                            } else {
                                return <li class="page-item" key={number} ><Link class="page-link" to={"/unicorns/" + number} onClick={() => { props.handleClick(number); }}>{number}</Link></li>;
                            }
                        }
                    )
                }

                <li class="page-item" key="next"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>

    );
}