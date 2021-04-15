import React from 'react';
import '../../assets/styles/HeaderStyle.css';
import Logo from '../../assets/static/LogoTienda.PNG';
import candado from '../../assets/static/candado.PNG';
// eslint-disable-next-line import/prefer-default-export
export const Header = () => (
    <div>
        <div className="hotSale">
            <p className="title1">HOT SALE -30% EN SANDALIAS</p>
        </div>
        <div className="descrip1">
            <ol>
                <li>
                <a className="link" href="#directoriotiendas">DIRECTORIO DE TIENDAS</a>
                </li>
                <li>
                <a className="link" href="#servicioCliente">SERVICIO AL CLIENTE</a>
                </li>
                <li>
                <a className="link" href="#Micuenta">MI CUENTA</a>
                </li>
            </ol>
        </div>
        <div className="container">

            <div className="descrip2">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>

                <div className="select-info">
                    <span>

                        <input 
                            className="selectedBuscar" 
                            type="text"
                            placeholder="BUSCAR"
                        />
                    </span>


                    <p className="title2">
                        ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
                    </p>

                </div>
            </div>

            <div className="tagsycar">
                <div className="tags">
                    <ol>
                        <li>
                        <a className="link2" href="#Hombre">HOMBRE</a>
                        </li>
                        <li>
                        <a className="link2" href="#Mujer">MUJER</a>
                        </li>
                        <li>
                        <a className="link2" href="#Blog">BLOG</a>
                        </li>
                        <li>
                        <a className="link2" href="#Historia">HISTORIA</a>
                        </li>
                        <li>
                        <a className="link2" href="#Tienda">TIENDAS</a>
                        </li>
                    </ol>
                </div>

                <div className="carrito">
                    <img src={candado} className="candado" alt="candado"/>
                    <p className="link2">
                        CARRITO 0
                    </p>
                </div>

            </div>

        </div>
        <hr className="lineaHeader"/>
    </div>

);
