import React, { useState, useEffect } from 'react';

import List from './List';
import Page from './Page';

// import unicorns from './data/unicorns.json';

import axios from 'axios';

export default function Unicorns(props) {

    const [unicorns, setUnicorns] = useState([]);

    const [currentPage, setCurrentPage] = useState(props.match.params.page ? props.match.params.page : 1);

    const [totalNumbers, setTotalNumbers] = useState(0);

    const loadData = () => {
        axios.get('/api/v1/count').then(
            response => setTotalNumbers(
                response.data.total
            )
        ).catch( e => console.log(e));

        const skip = (currentPage - 1) * 50;
        const limit = 50;

        axios.get(`/unicorns?skip=${skip}&limit=${limit}`).then(
            response => setUnicorns(response.data)
        ).catch(e => console.log(e));
    }

    const  handleClick = (pageNumber) => {

        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        loadData();
    }, [currentPage]);


    return (
        <main role="main" class="container">


            <div class="starter-template">
                <h1>全球独角兽</h1>
            </div>

            <List unicorns={unicorns} />

            <Page totalNumbers={totalNumbers} currentPage={currentPage} handleClick={handleClick} />
        </main>
    );
}
