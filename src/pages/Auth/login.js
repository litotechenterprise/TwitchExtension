import React, {useState, useEffect} from "react";
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import '../../css/login.css';
import {Login} from "../../api/auth"
//import {Form, Button} from 'react-bootstrap'


const login = ({ }) => {
    let initialVales = {
        email:"",
        password:""
    }
    const LoginSchema = Yup.object().shape({
        password: Yup.string().min(2, 'Too Short!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const onSubmit = async (values) => {
        try {
            const res = await Login(values)
            console.log(res);
        } catch(e) {
            console.log(e)
        }
    }



    return (
        <div className="blueBackground">
            <h1>BragHouse</h1>
            <Formik
                initialValues={initialVales}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched}) => (

                    <Form>
                        <Field name="email" />
                       
                        {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                        ) : null}
                        <Field name="password" />
                        {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                    // <Form>
                        

                    //     <Form.Group className="mb-1" controlId="formBasicPassword">
                    //         <Form.Label>Password</Form.Label>
                    //         <Form.Control  name="password" size="sm" type="password" placeholder="Password" />
                    //     </Form.Group>

                    //     <Button variant="secondary" type="submit">
                    //         Submit
                    //     </Button>
                    // </Form>

                )}
            </Formik>
        </div>
    );
};



export default login;