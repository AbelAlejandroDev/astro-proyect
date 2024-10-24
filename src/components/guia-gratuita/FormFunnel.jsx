import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bussines: '',
  });
  const [loading, setLoading] = useState(false); // Estado para el indicador de carga

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el indicador de carga

    try {
      const response = await axios.post(
        'https://genesisdma.com/api/send_mail.php',
        formData
      );

      console.log('Response received', response);

      if (response.data.status === 'success') {
        alert('Mensaje enviado con éxito!');
        // Redireccionamos a la página de agradecimiento
        setTimeout(() => {
          window.location.href = '/thanks-you';
        }, 1200);
      } else {
        alert('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje.');
    } finally {
      setLoading(false); // Desactivar el indicador de carga
    }
  };

  return (
    <section className="flex justify-center items-center flex-col w-[90%] py-4 z-10 pb-12">
      <div className="bg-[#005FEA] max-w-md flex flex-col mb-[-20px] text-white antialiased w-full py-4 rounded-t-2xl text-xl text-center font-medium">
        <h3 className="flex justify-center gap-2 items-center py-4">
          <img className="h-8" src="/icons/arrowDown.svg" alt="arrow down" />
          Obtén ya la guía{' '}
          <img className="h-8" src="/icons/arrowDown.svg" alt="arrow down" />
        </h3>
        <small className="text-xs tracking-[1px] my-1 rounded-b-sm p-1 py-2 bg-[#221E42]">
          ¿Dónde la enviamos?
        </small>
      </div>
      <form
        id="obtener-guia-gratutita-form"
        className="w-[100%] sm:w-full max-w-md bg-gray-200 p-8 rounded-b-2xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="form-container">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre*"
            required
            className="bg-transparent border border-gray-300 rounded-xl shadow-xl p-3 mb-4 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="bg-transparent border border-gray-300 rounded-xl shadow-xl p-3 mb-4 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono*"
            required
            className="bg-transparent border border-gray-300 rounded-xl shadow-xl p-3 mb-4 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-xl my-2">Opcional</span>
          <input
            type="text"
            id="bussines"
            name="bussines"
            value={formData.bussines}
            onChange={handleChange}
            placeholder="Negocio que tiene o desea abrir"
            className="bg-transparent border border-gray-300 rounded-xl shadow-xl p-3 mb-4 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex justify-end items-center">
            <button
              type="submit"
              className="py-2 rocking btn bg-[#006FEE] text-white text-[14px] font-semibold px-4 rounded-xl neon-shadow hover:bg-opacity-85 transition-all duration-300"
              disabled={loading} // Deshabilitar el botón mientras se carga
            >
              Obtener Guía Gratuita
            </button>
          </div>
        </div>
      </form>
      {loading && ( // Mostrar el indicador de carga si está en estado de carga
        <div className="mt-4">
          <p className="text-white text-2xl">Enviando...</p>
        </div>
      )}
    </section>
  );
};

export default Form;
