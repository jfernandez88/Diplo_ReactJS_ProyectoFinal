import '../styles/ContactoPage.css'
const ContactoPage = (props) => {
    return (
        <main>
            <h2>Formulario de contacto</h2>
            <div className="formulario">
                <form method='post' action=''>
                    <p>
                        <label for="nom">Nombre y Apellido</label>
                        <input type="text" name="nombre_apellido" maxlength="50"/>
                    </p>
                    <p>
                        <label for="nom">Email</label>
                        <input type="text" name="email" placeholder="@" maxlength="50"/>
                    </p>
                    <p>
                        <label for="msj">Mensaje</label>
                        <textarea type="text" name="email" placeholder="Deje su mensaje aqui..." size="100" maxlength="250"></textarea>
                    </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>


                </form>
            </div>
        </main >

    );
}

export default ContactoPage;