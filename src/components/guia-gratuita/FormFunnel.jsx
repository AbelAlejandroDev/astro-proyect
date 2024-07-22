import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bussines: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    bussines: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://tu-dominio.com:3000/send-email', formData);
      if (response.data.success) {
        alert('Mensaje enviado con éxito!');
      } else {
        alert('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje.');
    }
  };

  return (
    <section className="flex justify-center items-center flex-col w-[90%] py-4 z-10 pb-12">
      <div className=" bg-[#005FEA] max-w-md flex flex-col mb-[-20px] text-white antialiased w-full py-4 rounded-t-2xl text-xl text-center font-medium">
        <h3 className="flex justify-center gap-2 items-center py-4 ">
          <img className="h-8" src="/icons/arrowDown.svg" />
          Obtén ya la guía <img className="h-8" src="/icons/arrowDown.svg" />
        </h3>
        <small className="text-xs tracking-[1px] my-1 rounded-b-sm p-1 py-2 bg-[#221E42]">
          Donde la enviamos?
        </small>
      </div>
      <form
        id="obtener-guia-gratutita-form"
        className="w-[100%] sm:w-full max-w-md bg-gray-200 p-8 rounded-b-2xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="form-container">
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="faded"
            placeholder="Nombre*"
            required
            className=""
            errorMessage={"Introduzca su nombre"}
            classNames={{
              label: "text-black/50 dark:text-black/90",
              input: [
                "bg-transparent",
                "placeholder:text-default-700/50 dark:placeholder:text-black/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="faded"
            errorMessage="Introduzca un email válido para continuar"
            placeholder="Email*"
            required
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="faded"
            placeholder="Teléfono*"
            required
            errorMessage="Introduzca un teléfono válido para continuar"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <span className="text-xl my-2">Opcional</span>
          <Input
            type="text"
            id="bussines"
            name="bussines"
            value={formData.bussines}
            onChange={handleChange}
            variant="faded"
            placeholder="Negocio que tiene o desea abrir"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <div className="mt-3 flex justify-end items-center">
            <Button
              color="primary"
              className="rocking btn"
              variant="shadow"
              type="submit"
            >
              Obtener Guía Gratuita
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;