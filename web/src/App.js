import './App.css';
import { baseUrl } from "./core"
import axios from 'axios';
import {  useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';


function onSubmitFunction(values, { resetForm }) {

  console.log("values: ", values)
  resetForm({ values: "" })
  axios.post(`${baseUrl}/`, {
    field: values.field,

  }).then((res) => {
    console.log("res", res.data);
    if (res.data === "ok") {
      alert("ok")
      
    }
  }
  )

}

const validationSchema = yup.object({

  field: yup
    .string('Please fill field')
    .required('Field is required'),
});


function App() {

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      field: '',
    },
    onSubmit: onSubmitFunction
  });


  return (
    <div style={{ padding: "4rem" }}>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>Welcome to the Smart App</h1>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>

          <TextField
            fullWidth
            color="primary"
            id="filled-basic"
            label="Required Bottles"
            variant="outlined"
            type="number"

            name="field"
            value={formik.values.field}
            onChange={formik.handleChange}

            error={formik.touched.field && Boolean(formik.errors.field)}
            helperText={formik.touched.field && formik.errors.field}
          />

          <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
        </Stack>

      </form>
    </div>
  );
}

export default App;