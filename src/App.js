import { useFormik } from "formik";
import React from "react";


function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, errors) => {
      console.log('form:', values);
      if(!errors.email && !errors.password){
        alert("Login Sucessful");
      }
  
    },

    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field Required';
      if(!values.email) {errors.email = 'User name should be an email'} 
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){errors.email = 'Invalid email address';}
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        <div id="emailField">Email</div>
        <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div>: null}
        <div id="pswField">Password</div>
        <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
