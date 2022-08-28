import React from 'react';

const NoticiaItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="Noticias">
            <h1>{title}</h1>
            <p><h4>{subtitle}</h4></p>
            <img src={imagen} />
            <p><div dangerouslySetInnerHTML={{ __html: body }} /></p>
            <hr></hr>

        </div>

    );
}

export default NoticiaItem;