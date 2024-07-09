import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Form = () => {
  const [step, setStep] = useState(1);
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

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      setErrors({ ...errors, name: true });
    } else if (
      step === 2 &&
      (!formData.email || !validateEmail(formData.email))
    ) {
      setErrors({ ...errors, email: true });
    } else if (
      step === 3 &&
      (!formData.phone || !validatePhone(formData.phone))
    ) {
      setErrors({ ...errors, phone: true });
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSend = () => {
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}`;
    const mailtoURL = `mailto:example@example.com?subject=Formulario%20de%20Contacto&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoURL;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  const getFormClass = (formStep) => {
    return step === formStep ? "visible-form" : "hidden-form";
  };

  return (
    <div className="flex justify-center py-4">
      <form className="w-full max-w-md" onKeyDown={handleKeyDown}>
        <div className="form-container">
          <div className={`form-step ${getFormClass(1)}`}>
            <div className="flex justify-center mb-4">
              <Button
                onClick={handleNext}
                color="default"
                variant="shadow"
                type="button"
              >
                Obtener Guía Gratuita
              </Button>
            </div>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="underlined"
              label="Introduce tu nombre"
              required
              isInvalid={errors.name}
              errorMessage={"Introduzca su nombre para continuar"}
            />
          </div>

          <div className={`form-step ${getFormClass(2)}`}>
            <div className="mb-4 flex justify-center items-center gap-4">
              <Button onClick={handlePrevious} variant="shadow" type="button">
                Anterior
              </Button>
              <Button onClick={handleNext} variant="shadow" type="button">
                Continuar
              </Button>
            </div>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="underlined"
              isInvalid={errors.email}
              errorMessage="Introduzca un email válido para continuar"
              label="Email"
              required
            />
          </div>

          <div className={`form-step ${getFormClass(3)}`}>
            <div className="mb-4 flex justify-center items-center gap-4">
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
              label="Introduce tu teléfono"
              required
              isInvalid={errors.phone}
              errorMessage="Introduzca un teléfono válido para continuar"
            />
          </div>

          <div className={`form-step ${getFormClass(4)}`}>
            <div className="mb-4">
              <Input
                type="text"
                id="name-review"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="underlined"
                label="Introduce tu nombre"
                required
                isInvalid={errors.name}
                errorMessage={"Introduzca su nombre para continuar"}
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                id="email-review"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="underlined"
                isInvalid={errors.email}
                errorMessage="Introduzca un email válido para continuar"
                label="Email"
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="tel"
                id="phone-review"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="underlined"
                label="Introduce tu teléfono"
                required
                isInvalid={errors.phone}
                errorMessage="Introduzca un teléfono válido para continuar"
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button
                onClick={handlePrevious}
                variant="shadow"
                type="button"
              >
                Anterior
              </Button>
              <Button
                onClick={handleSend}
                variant="shadow"
                type="button"
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
