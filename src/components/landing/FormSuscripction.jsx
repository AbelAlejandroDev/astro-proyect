import { Input } from "@nextui-org/react";
import React, { useState } from "react";

export const FormSuscripction = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="pb-4">
      <form className="flex justify-center">
        <Input
          variant="bordered"
          radius="full"
          type="email"
          placeholder="Introduce tu email"
          className="max-w-72 sm:max-w-[400px]"
          onChange={handleChange}
          value={email}
        />
        <button
          className=" -ml-[111px] border-l-0 z-10 px-4 bg-[#2563EB] text-white rounded-full neon-button"
          type="submit"
        >
          Suscribirse
        </button>
      </form>
    </div>
  );
};
