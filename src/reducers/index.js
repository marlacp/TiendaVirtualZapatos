import { TRAER_TODOS, CARGANDO, ERROR } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return {
				...state,
				productos: action.payload,
				cargando: false,
				error: ''
			};

		case CARGANDO:
			return { ...state, cargando: true };

		case ERROR:
			return { ...state, error: action.payload, cargando: false };

		default: return state;
	};
};