import React from 'react';

const RendimientosItem = (props) => {
    const {nombre, rendimiento} = props;

    return(

        <div class="destacados">
            <div class="item_destacados">
                <p class="fondos_destacados">{nombre}</p>
                <p class="porcentaje">{rendimiento}%</p>
            </div>
        </div>
        
    );
}

export default RendimientosItem;