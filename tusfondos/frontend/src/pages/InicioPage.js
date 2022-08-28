import '../styles/NoticiasPage.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import InicioItem from '../components/inicio/InicioItem'

const InicioPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [inicio, setInicio] = useState([]);

    useEffect(() => {
        const cargarInicio = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/inicio');
            setInicio(response.data);
            setLoading(false);
        }
        cargarInicio();
    }, []);

    return (
            <div>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    inicio.map(item => <InicioItem key={item.id}
                        title={item.titulo} image={item.imagen} body={item.cuerpo} />)
                )

            }
            </div>

    );
}

export default InicioPage;