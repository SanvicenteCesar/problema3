import React, { useContext} from 'react';
import authContext from '../context/auth/authContext';


const Alerta = () => {

   // Extraer mensaje de error para Usuarios
   const AuthContext = useContext(authContext);
   const { mensaje } = AuthContext;

   // Extraer el mensaje de error de archivos
  

    return ( 
        <div className="bg-red-500 h-full md:w-3/5 xl:w-3/5 mx-auto py-1 px-1 m-1 flex flex-col items-center justify-center text-center text-white mx-auto">
            { mensaje }
        </div>
     );
}
 
export default Alerta;