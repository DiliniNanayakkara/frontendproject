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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };
};

export default useForm3;
