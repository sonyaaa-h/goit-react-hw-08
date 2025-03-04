import { Field, Form, Formik } from "formik"
import s from "./LoginPage.module.css"

const LoginPage = () => {
    const initialValues = {
      email: '',
      password: ''
    }
  
    const handleSubmit = (values, options) => {
      console.log(values)
      options.resetForm()
    }
  
    return <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formWrapper}>
          <label>
            <span>Email</span>
            <Field type="email" name="email" className={s.input} />
          </label>
          <label>
            <span>Password</span>
            <Field type="password" name="password" className={s.input} />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
}
export default LoginPage