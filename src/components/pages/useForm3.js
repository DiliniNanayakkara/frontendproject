import { useState, useEffect } from "react";

const useForm3 = (callback, validate) => {
  const [values, setValues] = useState({
    //username: '',
    email: "",
    password: "",
    password2: "",
    firstname: "",
    lastname: "",
    phone: "",
    photo: "",
    nic: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
};

export default useForm3;
