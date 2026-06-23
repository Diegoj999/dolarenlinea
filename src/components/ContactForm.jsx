import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setSubmitStatus("loading");
    setSubmitMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No se pudo enviar el mensaje.");
      setSubmitStatus("success");
      setSubmitMessage("Mensaje enviado correctamente.");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error.message || "No se pudo enviar el mensaje.");
    }
  };

  useEffect(() => { document.title = "Contacto"; }, []);

  return (
    <div style={{ minHeight: "85vh" }} className="bg-gray-100 pt-10 mt-5 md:mt-0 mx-2 bg-opacity-50 flex flex-col">
      <div className="flex-grow bg-gray-100 flex items-center mt-5 justify-center">
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-600 bg-opacity-75 text-white font-bold rounded-t-lg py-2 px-4">
            <p className="text-center uppercase">Contacto</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="py-5 ml-1 font-bold text-blue-500">Haz consultas o sugerencias para mejoras</div>
            <div className="mb-5">
              <label htmlFor="nombre" className="block text-gray-700 font-bold mb-5">Nombre:</label>
              <input {...register("nombre", { required: true, minLength: 2, maxLength: 100 })} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nombre ? "border-red-500" : ""}`} id="nombre" type="text" placeholder="Ingresá tu nombre" />
              {errors.nombre && <span className="text-red-500 text-sm">Ingresá tu nombre</span>}
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email:</label>
              <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`} id="email" type="email" placeholder="Ingresá tu email" />
              {errors.email && <p className="text-red-500 text-sm">Ingrese un correo electrónico válido</p>}
            </div>
            <div className="block text-gray-700 my-4">
              <label htmlFor="tipo" className="block mb-2">Tipo:</label>
              <select id="tipo" className="border" {...register("tipo", { required: true })}>
                <option value="">Elige una opción</option>
                <option value="sugerencias">Sugerencias</option>
                <option value="errores">Errores</option>
              </select>
              {errors.tipo && <p className="text-red-500 mt-1 text-sm">Selecciona un tipo de mensaje</p>}
            </div>
            <div className="mb-1">
              <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-1">Mensaje:</label>
              <textarea {...register("mensaje", { required: true, minLength: 10, maxLength: 3000 })} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mensaje ? "border-red-500" : ""}`} id="mensaje" placeholder="Ingresá tu mensaje" />
              {errors.mensaje && <span className="text-red-500 text-sm">Ingresá un mensaje de al menos 10 caracteres</span>}
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Sitio web</label>
              <input id="website" type="text" tabIndex="-1" autoComplete="off" {...register("website")} />
            </div>
            <div className="mt-4 flex justify-center">
              <button type="submit" disabled={submitStatus === "loading"} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-60">
                {submitStatus === "loading" ? "Enviando..." : "Enviar formulario"}
              </button>
            </div>
            {submitMessage && <p role="status" className={`text-center text-sm ${submitStatus === "success" ? "text-green-600" : "text-red-500"}`}>{submitMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
