import { useState, useCallback } from 'react';

const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback((fieldValues = values) => {
    const validationErrors = {};

    Object.keys(validationRules).forEach(field => {
      const value = fieldValues[field];
      const rules = validationRules[field];

      if (rules.required && !value) {
        validationErrors[field] = 'This field is required';
      } else if (rules.email && !/\S+@\S+\.\S+/.test(value)) {
        validationErrors[field] = 'Invalid email address';
      } else if (rules.minLength && value.length < rules.minLength) {
        validationErrors[field] = `Minimum ${rules.minLength} characters required`;
      }
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [validationRules, values]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (onSubmit) => {
    setIsSubmitting(true);
    if (validate()) {
      await onSubmit(values);
    }
    setIsSubmitting(false);
  }, [validate, values]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    validate
  };
};

export default useFormValidation;