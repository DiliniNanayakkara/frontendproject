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
};

export default useForm3;
