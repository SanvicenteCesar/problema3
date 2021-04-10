import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../context/auth/authContext";
import Alerta from "../components/Alerta";
import { useRouter } from "next/router";
const Login = () => {
  // definir el context
  const AuthContext = useContext(authContext);
  const { mensaje, autenticado, iniciarSesion } = AuthContext;

  // Next router
  const router = useRouter();

  useEffect(() => {
    if (autenticado) {
      router.push("/dashboard");
    }
  }, [autenticado]);

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string().required("El password no puede ir vacio"),
    }),
    onSubmit: (valores) => {
      iniciarSesion(valores);
      //router.push("/dashboard");
    },
  });

  return (
    <Layout>
      <div className="md:w-3/5 xl:w-3/5 mx-auto flex flex-col items-center">
        <div
          className=" shadow-2xl rounded-t-lg md:w-3/5 xl:w-3/5 "
          style={{ backgroundColor: "#086972" }}
        >
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div>
              <h3 className="ml-5 text-3xl font-sans font-bold text-yellow-500 text-center my-4">
                Login
              </h3>
            </div>
          </div>
        </div>
        {mensaje && <Alerta />}
        <div
          style={{ backgroundColor: "#cacaca", minHeight: "100%" }}
          className="shadow-2xl rounded-b-lg md:w-3/5 xl:w-3/5 mx-auto pb-4 px-1 flex flex-col items-center"
        >
          <div className="flex justify-center mt-1">
            <div className="w-full max-w-lg">
              <form className="mt-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label
                    className=" text-black text-sm font-bold mb-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Email de Usuario"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{formik.errors.email} </p>
                    </div>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    className=" text-black text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    placeholder="Password de Usuario"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{formik.errors.password} </p>
                    </div>
                  ) : null}
                </div>

                <input
                  type="submit"
                  style={{ backgroundColor: "#EAE16D" }}
                  className="hover:bg-gray-900 w-full mt-5 p-2 text-dark uppercase font-bold"
                  value="Iniciar Sesión"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
