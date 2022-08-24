import '../styles/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.menssage);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }


    return (
        <main>
            <h2>Formulario de contacto</h2>
            <div className="formulario">
                <form method='post' onSubmit={handleSubmit} action='/contacto'>
                    <p>
                        <label for="nom">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="nom">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="nom">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="msj">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando ...</p>: null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div>
                <h2>Otras vías de comunicación</h2>
                <p>Tambien puede contactarnos por:</p>
                <ul>
                    <li>Telefono 46564151</li>
                    <li>Email: contacto@tusfondos.com.ar</li>
                </ul>
            </div>
        </main >

    );
};

export default ContactoPage;