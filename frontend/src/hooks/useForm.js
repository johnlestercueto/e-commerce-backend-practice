import { useState } from "react";
import axios from "axios";

const useForm = (initialValues, url, onSuccess, onError) => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, values);
      if (onSuccess) onSuccess(response.data);
      setValues(initialValues); // Reset form after submission
    } catch (err) {
      setError(err.response?.data || "An error occurred");
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};

export default useForm;
