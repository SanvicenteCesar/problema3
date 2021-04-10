import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OCULTAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types';

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            console.log(action);
            return {

                ...state,
                mensaje: action.payload.error,
                autenticado: false
            }
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('Usuario', action.payload.data.nombre + ' ' + action.payload.data.apellido);
            return {
                ...state,
                token: action.payload.status,
                usuario: action.payload.data.user.nombre + ' ' + action.payload.data.user.apellido,
                autenticado: true
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje: null
            }
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            localStorage.removeItem('Usuario');
            return {
                ...state,
                usuario: null,
                token: null,
                autenticado: null,

            }
        default:
            return state;
    }
}

export default authReducer;