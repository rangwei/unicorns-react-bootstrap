import React, { useState } from 'react';


export default function List({unicorns}) {
    return (
        <table class="table table-light table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">Founded on</th>
                    <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    unicorns.map(
                        (item) => <tr>
                            <td>{item.name}</td>
                            <td>{item.country}</td>
                            <td>{item.founded_on}</td>
                            <td>{item.category}</td>
                        </tr>
                    )
                }

            </tbody>
        </table>

    );
}
