import React from 'react';
import facebook from '../../assets/static/facebook.png';
import instagram from '../../assets/static/instagram.png';
import imgFooter from '../../assets/static/imagenFooter.png';
import '../../assets/styles/FooterStyle.css';

// eslint-disable-next-line import/prefer-default-export
export const Footer = () => (
    <footer>

        <div className="HushPuppie">

            <p className="title4">@HUSHPUPPIESCO</p>
            <hr className="lineaFooter"/>
            <div className="icons">
                <img className="facebook" src={facebook} alt="facebook"/>
                <img className="instagram" src={instagram} alt="instagram"/>
            </div>
        </div>

        <div className="containerFooter">
            <div className="principal">

                <div className="servicioCliente">
                    <p className="titleConatinerFooter">SERVICIO AL CLIENTE</p>
                    <ol>
                        <li>
                        <a className="link3" href="#contactenos">CONTÁCTENOS</a>
                        </li>
                        <li>
                        <a className="link3" href="#cambiosYdevoluciones">CAMBIOS Y DEVOLUCIONES</a>
                        </li>
                        <li>
                        <a className="link3" href="#PoliticasTienda">POLÍTICAS DE LA TIENDA</a>
                        </li>
                        <li>
                        <a className="link3" href="#PoliticasDatos">POLÍTICAS DE DATOS</a>
                        </li>
                    </ol>
                </div>

                <div className="miCuenta">
                    <p className="titleConatinerFooter">MI CUENTA</p>
                    <ol>
                        <li>
                        <a className="link3" href="#MisPedidos">MIS PEDIDOS</a>
                        </li>
                        <li>
                        <a className="link3" href="#MisDevoluciones">MIS DEVOLUCIONES</a>
                        </li>
                    </ol>
                </div>

                <div className="recursos">
                    <p className="titleConatinerFooter">RECURSOS</p>
                    <ol>
                        <li>
                            <a className="link3" href="#Tiendas">TIENDAS</a>
                            </li>
                            <li>
                            <a className="link3" href="#Devoluciones">DEVOLUCIONES</a>
                        </li>
                    </ol>
                </div>

                <div className="newsLetter">
                    <p className="titleConatinerFooter">NEWSLETTER</p>
                    <p className="titleNewSletter">Regístrate para ser el primero en recibir nuestras noticias</p>

                    <select name="select" className="selectedEmail">
                        <option value="buscar" selected>E-MAIL</option>
                        <option value="value1" >Value 1</option>
                        <option value="value1">Value 2</option>
                    </select>
                </div>
            </div>
        </div>

        <hr className="lineaFooter2"/>

        <div className="containerFooterImg">
            <img src={imgFooter} alt="imgFooter"/>
        </div>
    
    </footer>

);
