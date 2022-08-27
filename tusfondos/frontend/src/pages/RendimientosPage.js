import '../styles/DestacadosPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import RendimientosItem from '../components/rendimientos/rendimientosItem'


const DestacadosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [rendimientos, setRendimientos] = useState([]);

    useEffect(() => {
        const cargarRendimientos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/rendimientos');
            setRendimientos(response.data);
            setLoading(false);
        }
        cargarRendimientos();
    }, []);

    return (

        <section className="holder">
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    rendimientos.map(item => <RendimientosItem nombre={item.nombre}
                        rendimiento={item.rendimiento} />)
                )

            }
        </section>



    );
}

export default DestacadosPage;