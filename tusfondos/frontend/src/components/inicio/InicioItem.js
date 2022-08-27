import React from 'react';

const InicioItem = (props) => {
    const {title, imagen, body} = props;

    return(
        <div className="Inicio">
            <h1>{title}</h1>
            <hr></hr>
            <img src={imagen}/>
            <hr></hr>
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr/>
        </div>

        
        
    );
}

export default InicioItem;