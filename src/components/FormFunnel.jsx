import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\+?(\d.*){3,}$/; // Allows for international phone numbers with or without "+" prefix
    return re.test(String(phone));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section className="flex justify-center items-center flex-col w-[90%] py-4 z-10 ">
      <div className=" bg-[#005FEA] max-w-md flex flex-col mb-[-20px] text-white antialiased w-full py-4 rounded-t-2xl text-xl text-center font-medium">
        <h3 className="flex justify-center gap-2 items-center py-4 ">
          <img className="h-8" src="/arrowDown.svg" />
          Llena el formulario <img className="h-8" src="/arrowDown.svg" />
        </h3>
        <small className="text-xs tracking-[1px] my-1 rounded-b-sm p-1 py-2 bg-[#221E42]">
          Completa los campos para obtener la guía
        </small>
      </div>
      <form
        id="obtener-guia-gratutita-form"
        className="w-[100%] sm:w-full max-w-md bg-gray-200 p-8 rounded-b-2xl shadow-xl"
      >
        <div className="form-container">
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="faded"
            label="Nombre"
            required
            isInvalid={errors.name}
            errorMessage={"Introduzca su nombre"}
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
            isInvalid={errors.email}
            errorMessage="Introduzca un email válido para continuar"
            label="Email"
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
            label="Teléfono"
            required
            isInvalid={errors.phone}
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
          <Button
            color="default"
            className="mt-5 flex justify-end"
            variant="shadow"
            type="submit"
          >
            Obtener Guía Gratuita
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
