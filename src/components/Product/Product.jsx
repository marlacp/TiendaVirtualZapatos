import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import DetalleProduct from './DetalleProducto';
import Recomendados from './Recomendados';
import {traerTodos} from '../../actions/index';
import { useParams } from "react-router-dom";
const Product = (props) => {
    let { identificador } = useParams();

    useEffect(()=>{
      if (!props.productos.length) {
        props.traerTodos();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const ponerContenido = () => {
		if (props.cargando) {
			return <Spinner />;
		}

		if (props.error) {
			return <Fatal mensaje={ props.error } />;
		}

		return (
      <div>
        <DetalleProduct identificador={identificador} />
        <Recomendados />
      </div>
    )
	};

  return (
    <div>
		  { ponerContenido() }
    </div>
  );
};

const mapStateToProps = (reducers) => {
    // console.log(reducers)
	return reducers;
};

export default connect(mapStateToProps, {traerTodos})(Product);
