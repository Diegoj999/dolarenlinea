import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{ minHeight: "85vh" }}
      className="bg-gray-100 pt-5 mt-5 md:mt-0 mx-2 bg-opacity-50 flex flex-col "
    >
      <div className="flex-grow bg-gray-100 flex items-center mt-5 justify-center">
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-600 bg-opacity-75 text-white font-bold rounded-t-lg  py-2 px-4">
            <p className="text-center uppercase">Contacto</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="py-5 ml-1 font-bold text-blue-500">
              Haz consultas o sugerencias para mejoras
            </div>
            <div className="mb-5">
              <label
                htmlFor="nombre"
                className="block text-gray-700 font-bold mb-5"
              >
                Nombre:
              </label>
              <input
                {...register("nombre", { required: true })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.nombre ? "border-red-500" : ""
                }`}
                id="nombre"
                type="text"
                placeholder="Ingresá tu nombre"
              />
              {errors.nombre && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>
            <div className="mb-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-1"
              >
                Email:
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Ingresá tu email"
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-500 text-sm">Este campo es requerido</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Ingrese un correo electrónico válido
                </p>
              )}
            </div>
            <div className="mb-1">
            <div className="block text-gray-700 my-4">
    <label htmlFor="tipo" className="block mb-2">
        Tipo:
    </label>
    <select name="tipo"  className="border" {...register("tipo", { required: true })}>
        <option value="">Elige una opción</option>
        <option value="sugerencias">Sugerencias</option>
        <option value="errores">Errores</option>
    </select>
    {errors.tipo && (
        <p className="text-red-500 mt-1 text-sm">
            Selecciona un tipo de mensaje
        </p>
    )}
</div>
              <label
                htmlFor="mensaje"
                className="block text-gray-700 font-bold mb-1"
              >
                Mensaje:
              </label>
              <textarea
                {...register("mensaje", { required: true })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.mensaje ? "border-red-500" : ""
                }`}
                id="mensaje"
                placeholder="Ingresá tu mensaje"
              ></textarea>
              {errors.mensaje && (
                <span className="text-red-500 text-sm">
                  Este campo es requerido
                </span>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Enviar formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
