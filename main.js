class LuisElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Zen+Loop:ital@0;1&display=swap');

                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Zen+Loop:ital@0;1&display=swap');

                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    background-color:#1d1b1bb8;
                }
                body {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .contenedor{
                    display: flex;
                    justify-content: space-around;
                }

                h1{
                    font-family: "Zen Loop", cursive;
                    padding: 0 0 5px 0;
                    color: #df992fe2;
                    font-weight: bold;
                    text-align:center;
                }
                
                .hobbies,.perfil-profesional{
                    width:50%;
                    padding:20px;
                    background-color: #e6dddd;
                }
                .hobbies{
                    text-align:center;
                }
                h3{
                    color: #071792dd;
                    padding:20px;
                    font-size:1.5rem;
                    background-color: #e6dddd;
                }

                ul{
                    list-style: none;
                }
                
                .description {
                    background-color: #e6dddd;
                }

                li{
                    font-size:1.1rem;
                    padding:2px;
                    color: #000000;
                    background-color: #e6dddd;
                }

                p{
                    font-size:1.1rem;
                    color: #000000;
                }

                
                .list__item{
                    text-decoration: none;
                }
            </style>
            <h1>Luis Alberto Talero Martinez</h1>
            <div class="contenedor">
                <div class="hobbies">
                    <h3 class="subtitle">Mis Hobbies</h3>
                    <ul class="list">
                        <li class="list__item">Jugar Videojuegos</li>
                        <li class="list__item">Hacer Ejercicio</li>
                        <li class="list__item">Ver Anime de Categorias Variadas</li>
                        <li class="list__item">Escribir Historias</li>
                        <li class="list__item">Escuchar Música</li>
                        <li class="list__item">Molestar a mi Hermana</li>
                    </ul>
                </div>
                <div class="perfil-profesional">
                    <h3 class="subtitle">Perfil profesional</h3>
                    <p class="description">Me llamo Luis Talero, Tengo 17 años, actualmente estoy cursando el grado 11°, me encuentro haciendo otros proyectos muy importantes como lo son el Proyecto Colibrí, el Proyecto de Técnico Laboral en Trabajador Agrícola, el Proyecto Campuslands y otras micro-certificaciones la mayor parte de estos proyectos que curso son por parte de la Uniminuto.<br><br>
                    Me considero una perosna que le gusta ponerse retos y siempre trato de aprender lo más posible y trato de dejar una buena impresion de mi en lo que hago.
                    </p>
                </div>
            </div> 
        `; 
        this.style = `
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        margin: 0 auto;
        width: 70%;
        border: 2px solid #3377e6;
        border-radius:10px;
        padding: 20px;
        box-shadow: 0 0 10px #3377e6;
        `;
    }
    connectedCallback() {
        console.log("Se ha creado el elemento");
    }
    
    disconnectedCallback() {
        console.log("Se elimina el elemento de la página");
    }
}

customElements.define("luis-element", LuisElement);