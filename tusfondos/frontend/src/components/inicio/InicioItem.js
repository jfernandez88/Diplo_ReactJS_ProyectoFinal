import React from 'react';

const InicioItem = (props) => {
    const { title, image, body } = props;

    return (
        <div className="Inicio">
            <h1>{title}</h1>
            <hr></hr>
            <img src={image} />
            <hr></hr>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>



    );
}

export default InicioItem;