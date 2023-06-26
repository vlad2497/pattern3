import { useState } from "react";
import { Button, Snackbar } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useSaveUserMutation } from "src/store/form/api";
import TextField from "src/components/text-field";
import { nameValidation } from "./validation";

interface IForm {
  fullName: string;
  age: string;
  surName: string;
}

const CustomForm = () => {
  const [saveUser] = useSaveUserMutation();
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      surName: "",
      fullName: "",
      age: "25",
    },
  });
  const [openSnack, setOpenSnack] = useState(false);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await saveUser(data).unwrap();
      setOpenSnack(true);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(watch('fullName'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="surName"
          control={control}
          rules={nameValidation}
          render={({ field }) => (
            <TextField
              {...field}
              ref={null}
              role="surname-text-field"
              error={Boolean(errors["surName"])}
              helperText={
                <span role="surname-text-field-helper-text">
                  {errors["surName"]?.message || ""}
                </span>
              }
              inputProps={{
                role: "surname-input",
              }}
            />
          )}
        />
        <br />
        <Controller
          name="fullName"
          control={control}
          rules={nameValidation}
          render={({ field }) => (
            <TextField
              {...field}
              ref={null}
              error={Boolean(errors["fullName"])}
              helperText={errors["fullName"]?.message || ""}
              inputProps={{
                role: "fullname-input",
              }}
            />
          )}
        />
        <br />
        <Controller
          name="age"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              ref={null}
              inputProps={{
                role: "age-input",
              }}
            />
          )}
        />
        <br />
        <Button type="submit">Создать</Button>
      </form>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={() => setOpenSnack(false)}
        message="Успешно !"
      />
    </>
  );
};

export default CustomForm;
