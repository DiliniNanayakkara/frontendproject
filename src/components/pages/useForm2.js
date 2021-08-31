import { useState, useEffect } from "react";

const useForm2 = (callback, validate) => {
  const [values, setValues] = useState({
    //username: '',
    email: "",
    password: "",
    password2: "",
    nic: "",
    firstname: "",
    lastname: "",
    phone: "",
    photo: "",
    location: "",
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

export default useForm2;
