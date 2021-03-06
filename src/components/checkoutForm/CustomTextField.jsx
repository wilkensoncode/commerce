import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        defaultValue=""
        as={TextField}
        name={name}
        render={({ field }) => (
          <TextField {...field} name={name} label={label} fullWidth required />
        )}
      />
    </Grid>
  );
};

export default FormInput;
