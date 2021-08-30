import { useState, useEffect } from "react";

const useForm2 = (callback, validate) => {
  const [values, setValues] = useState({
    //username: '',
    email: "",
    password: "",
    password2: "",
    nic: "",
    phone: "",
    photo: "",
    location: "",
  });
};

export default useForm2;
