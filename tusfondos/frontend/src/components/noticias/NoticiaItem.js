import React from 'react';

const NoticiaItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return(
        <div className="Noticias">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <hr></hr>
            <img src={imagen}/>
            <hr></hr>
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr/>
        </div>
        
    );
}

export default NoticiaItem;