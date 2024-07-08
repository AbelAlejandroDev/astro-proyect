// src/components/Form.jsx
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    ``;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSend = () => {
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}`;

    // Enviar por WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=+1234567890&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    // O enviar por correo
    const mailtoURL = `mailto:example@example.com?subject=Formulario%20de%20Contacto&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoURL;
  };

  return (
    <div className="flex justify-center py-4">
      <form className="w-full max-w-md">
        {step === 1 && (
          <div className="mb-4 ">
            <div className="flex justify-center mb-2">
            <Button onClick={handleNext} color="default" variant="shadow" type="button">
              Obtener Guía Gratutita
            </Button>

            </div>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="underlined"
              label="Introduce tú nombre"
              required
            />
          </div>
        )}
        {step === 2 && (
          <div className="mb-4">
            <Button onClick={handlePrevious} variant="shadow" type="button">
              Anterior
            </Button>
            <Button onClick={handleNext} variant="shadow" type="button">
              Continuar
            </Button>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="underlined"
              label="Email"
              required
            />
          </div>
        )}
        {step === 3 && (
          <div className="mb-4">
            <div className="flex  justify-center gap-2">
            <Button onClick={handlePrevious} variant="shadow" type="button">
              Anterior
            </Button>
            <Button onClick={handleNext} variant="shadow" type="button">
              Revisar
            </Button>

            </div>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="underlined"
              label="Introduce tu teléfono:"
              required
            />
          </div>
        )}
        {step === 4 && (
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-200">
              Revisa tu información:
            </h3>
            <p className="mt-2 text-gray-200">Nombre: {formData.name}</p>
            <p className="mt-2 text-gray-200">Email: {formData.email}</p>
            <p className="mt-2 text-gray-200">Teléfono: {formData.phone}</p>
            <button
              type="button"
              onClick={handlePrevious}
              className="mt-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={handleSend}
              className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white"
            >
              Enviar
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
