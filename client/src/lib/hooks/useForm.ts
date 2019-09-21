import { useState, ChangeEvent, useCallback } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    [values]
  );

  return [values, onChange];
};
