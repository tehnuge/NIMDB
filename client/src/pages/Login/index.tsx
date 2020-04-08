import { Formik, Form } from 'formik';
import React, {useEffect} from 'react';
import { Input } from '../../components';
import { Review } from '../../graphql';


interface LoginFormProps {
    review: Review
  onSubmit: (formData: Review) => void
}

const Login = (props: LoginFormProps): JSX.Element => {
  const { review, onSubmit } = props;

  return (
    <Formik initialValues={review} onSubmit={onSubmit}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
      <Form>
        <h2>Login</h2>
        <Input type="text" name="User" label="User" />
        <Input type="text" name="Password" label="Password" />

        <hr />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
      </div>
      </div>
      </div>

    </Formik>
  )
}

export default Login
