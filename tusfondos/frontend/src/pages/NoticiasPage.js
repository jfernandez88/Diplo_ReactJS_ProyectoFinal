import '../styles/NoticiasPage.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import NoticiaItem from '../components/noticias/NoticiaItem'
const NoticiasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const cargarNoticias = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/noticias');
            setNoticias(response.data);
            setLoading(false);
        }
        cargarNoticias();
    }, []);

    return (
        <section className="holder">
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    noticias.map(item => <NoticiaItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )

            }
        </section>

    );
}

export default NoticiasPage;