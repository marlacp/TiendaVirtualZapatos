/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/RecomendadosStyle.css';
import { Link } from 'react-router-dom';

const Recomendados = (props) => {

    console.log('productos', props.productos[0])
	return (
        
    <div className="container">
       <div className="container-look">
            <div className="CompletaLook">
                <p className="titleLook">COMPLETA TU LOOK</p>

            </div>

            <div className="LookImg">
                {
                    // eslint-disable-next-line array-callback-return
                    
                    // eslint-disable-next-line array-callback-return
                    props.productos.map((index, key) =>{
                        if (index.seccion === "completa-look"){
                            // eslint-disable-next-line array-callback-return
                            // eslint-disable-next-line no-unused-expressions
                            // eslint-disable-next-line no-lone-blocks
                            console.log('tipo' ,index.tipo.length > 1 ? index.tipo  : "nada");
                            return(
                                <div className="PorductLook" key={key}>
                                    <div className="LookButtons">
                                        <Link to={index.id}>
                                            <button className="buttonLook">
                                                <img className="imgButton" src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} />
                                            </button>

                                        </Link>
                                    </div>
                                    <div>
                                        {/* {
                                            index.tipo.length > 1 ? <img src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} /> : <img src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} />
                                        }
                                        */}
                                    </div>
                                    <div className="nombreProdLook">
                                        <p className="titlenompreProd">{index.nombre}</p>
                                    </div>
                                    <div className="price">
                                        <p className="priceTitleProd"> ${index.precio}</p>
                                    </div>
                                    <div className="agregarCar">
                                        <button className="ButtonAgregarCar"> AGREGAR AL CARRITO</button>
                                    </div>
                                </div>
                            )
                        }

                    })
                }

            </div>
       
       
       
       </div>

       <div className="ProductosR">
           <p className="titleRecomend">PRODUCTOS RECOMENDADOS</p>
           <hr className="lineDetail"/>

           <div className="LookImg">
                {
                    // eslint-disable-next-line array-callback-return
                    
                    // eslint-disable-next-line array-callback-return
                    props.productos.map((index, key) =>{
                        if (index.seccion === "recomendados"){
                            // eslint-disable-next-line array-callback-return
                            // eslint-disable-next-line no-unused-expressions
                            // eslint-disable-next-line no-lone-blocks
                            {/* console.log('tipo' ,index.tipo.length > 1 ? index.tipo  : "nada"); */}
                            return(

                                <div className="PorductRecom" key={key}>
                                    <div className="LookButtons">
                                        <Link to={index.id}>
                                            <button className="buttonLook">
                                                <img className="imgButton" src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} />
                                            </button>

                                        </Link>
                                    </div>
                                    <div>
                                        {/* {
                                            index.tipo.length > 1 ? <img src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} /> : <img src={`/images/${index.tipo[0].fotos[0]}` } alt={index.tipo[0].fotos[0]} />
                                        }
                                        */}
                                    </div>
                                    <div className="nombreProdLook">
                                        <p className="titlenompreProd">{index.nombre}</p>
                                    </div>
                                    <div className="price">
                                        <p className="priceTitleProd"> ${index.precio}</p>
                                    </div>
                                    <hr className="lineDetail"/>
                                </div>
                            )
                        }

                    })
                }

            </div>
       </div>

    </div>
	)
}

const mapStateToProps = (reducers) => {
    // console.log('reducers detalleproduct: ',reducers)
	return reducers;
};

export default connect(mapStateToProps)(Recomendados);