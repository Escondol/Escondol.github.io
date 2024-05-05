import React from "react"

const Sobre = () => {
    return(
        <>
            <div className="presentation">
                <h1>Sobre Mi</h1>
                <p>Soy una personas interesada en todo lo relacionado con la electricidad, electronica y automatización. En estos días estoy enfocado en aprender HTML, CSS y JS.</p>
            </div>
            <h2 className="Logros">Logros</h2>
            <ul className="ulOne">
                <li>Documentos Personales</li>
                <ul>
                    <li><a href="doc/Resume Dojanni Contreras.pdf">Curriculum Vitae</a></li>
                </ul>
                <li>Certificados</li>
                <ul>
                    <li><a href="cert/certificado_ciber.pdf">Taller Introduccion a la Ciberseguridad</a></li>
                    <li><a href="cert/Crash Course on Python.pdf">Crash Course on Python</a></li>
                    <li><a href="cert/Introduction to the IoT and Embedded Systems.pdf">Introduction to the IoT and Embedded Systems</a></li>
                    <li><a href="cert/Interfacing with the Arduino.pdf">Interfacing with the Arduino</a></li>
                    <li><a href="cert/The Arduino Platform and C Programming.pdf">The Arduino Platform and C Programming</a></li>
                    <li><a href="cert/What is Data Science.pdf">What is Data Science?</a></li>
                    <li><a href="cert/Tools for Data Science.pdf">Tools for Data Science</a></li>
                </ul>
            </ul>

            <h2 className="Logros">Contactame</h2>
            <ul className="Logros">
                <li>Correo: <a href="mailto:esmerling.contreras@gmail.com?Subject=¿Qué%20necesitas%3F%20Con%20gusto%20te%20ayudaré">esmerling.contreras@gmail.com</a></li>
                <li>Linkedin: <a href="https://www.linkedin.com/in/dojanni-contreras-93b31728a/">Dojanni Contreras</a></li>
                <li>Github: <a href="https://github.com/Escondol">Escondol</a></li>
                <li>Twitter: </li>
            </ul>
        </>
    );
}

export default Sobre;