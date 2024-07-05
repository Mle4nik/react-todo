import React, { useState } from 'react';

const SortItems = ({sortTasks}) => {

    return (
        <div>
            <select onChange={el => (sortTasks(el.target.value))}>
                <option value="All">All</option>
                <option value="Processed">Processed</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default SortItems;