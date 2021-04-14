/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/DetalleProStyle.css';
// import { Link } from 'react-router-dom';

const DetalleProduct = (props) => {
    const [product, setProduct] = useState({
        id: null,
        nombre: null,
        precio: null,
        referencia: null,
        seccion: null,
        tipo:[]
    });
    useEffect(()=>{
        console.log(props.identificador, "este viene de product");
        // eslint-disable-next-line array-callback-return
        props.productos.map((index) => {
            if (index.id === props.identificador){
                setProduct(index);
            }
        });
    },[props.identificador])

	return (
        <div className="container">
            <div className="product-container">

                <div className="container-image">
                    <div className="titleCarrilImg">
                        <p className="CarrilTitle">HUSHPUPPIESCO / CALZADO / {product.nombre}</p>
                    </div>

                    <div className="BigImg">
                        {product.tipo.length > 0? <img className="Big" src={`/images/${ product.tipo[0].fotos[0] }` } alt={product.tipo[0].fotos[0]} />:null }
                    </div>
                    {/* map para leer imagenes */}
                    <div className={`SmallImg${1}`}>
                    <button className="buttonImage">
                        {/* <img className="Img1" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}

                    </button>
                    </div>

                    <div className={`SmallImg${2}`}>
                    <button className="buttonImage">

                        {/* <img className="Img2" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </button>
                    </div>

                    <div className="SmallImg3">
                    {/* <img className="Img3" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </div>

                    <div className="SmallImg4">
                    {/* <img className="Img4" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </div>
                </div>

                <div className="container-compra">

                    <div className="nombreProd"><p className="titleProd">{product.nombre}</p></div>
                    <div className="priceProd"><p className="priceCompra">${product.precio}</p></div>
                    <div className="codProd"><p className="codProductTitle">Cod. de producto {product.referencia}</p></div>
                    <div className="colorProd"><p className="titleinfo">COLOR</p></div>
                    <div className="colorImg">
                        {/* <img className="Img5" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </div>
                    <div className="colorImg2">
                        {/* <img className="Img6" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </div>
                    <div className="colorImg3">
                        {/* <img className="Img7" src={`/images/${ props.productos[0].foto }` } alt={props.productos[0].foto} /> */}
                    </div>
                    <div className="tallaProd"><p className="titleinfo">TALLA</p></div>
                    <div className="talla5"> <button className="buttonTalla"><p className="tallaB">5</p></button></div>
                    <div className="talla55"> <button className="buttonTalla"><p className="tallaB">5.5</p></button></div>
                    <div className="talla6"> <button className="buttonTalla"><p className="tallaB">6</p></button></div>
                    <div className="talla65"> <button className="buttonTalla"><p className="tallaB">6.5</p></button></div>
                    <div className="talla7"> <button className="buttonTalla"><p className="tallaB">7</p></button></div>
                    <div className="talla75"> <button className="buttonTalla"><p className="tallaB">7.5</p></button></div>
                    <div className="talla8"> <button className="buttonTalla"><p className="tallaB">8</p></button></div>
                    <div className="talla85"> <button className="buttonTalla"><p className="tallaB">8.5</p></button></div>
                    <div className="talla9"> <button className="buttonTalla"><p className="tallaB">9</p></button></div>
                    <div className="talla95"> <button className="buttonTalla"><p className="tallaB">9.5</p></button></div>
                    <div className="guiaTalla"><p className="guiaTitle">GUÍA DE TALLAS</p></div>
                    <div className="añadir"><button className="buttonAdd"><p className="titleAdd">AÑADIR AL CARRITO</p></button></div>
                    <div className="corazon heart icon"></div>
                </div>


            </div>

            <div className="detalle-product">
                <p className="titleDetail">DETALLES DEL PRODUCTO</p>
                <hr className="lineDetail"/>
                <p className="Deatil">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quis quasi quisquam ut sunt, facere unde voluptates soluta! Accusantium sunt possimus quibusdam quam, sequi similique officiis modi nulla consequatur cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt corrupti assumenda labore excepturi alias quasi vel nobis doloribus, magnam consectetur est ad non facere vitae nulla animi magni pariatur?</p>
                <p className="titleDetail">TECNOLOGÍAS</p>
                <hr className="lineDetail"/>
                <p className="Deatil">Quisque tellus odio, varius consequat interdum, at, molestie viverra lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum dignissim, nunc id interdum dignissim, orci ex cursus metus, ut interdum tellus arcu at lorem.</p>
            </div>
        </div>
	    )
}

const mapStateToProps = (reducers) => {
    // console.log('reducers detalleproduct: ',reducers)
	return reducers;
};

export default connect(mapStateToProps)(DetalleProduct);