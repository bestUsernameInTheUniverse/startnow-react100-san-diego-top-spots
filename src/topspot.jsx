import React from 'react';

export default (props) => {
    const url = `https://maps.google.com/?q=${props.location[0]},${props.location[1]}`
    return (
        <div className='card'>
            <div className="card-body">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <a className="btn btn-outline-primary" href={url} role="button">map</a>
            </div>
        </div>
    )
};