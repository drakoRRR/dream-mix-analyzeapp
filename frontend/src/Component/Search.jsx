import React from 'react';

export const Search = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="input-group rounded" style={{ width: '500px' }}>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
};
