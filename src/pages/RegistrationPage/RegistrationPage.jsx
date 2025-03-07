import { Field, Form, Formik } from "formik"
import s from "./RegistrationPage.module.css"
import { useDispatch } from "react-redux"
import { registerThunk } from "../../redux/auth/operations"

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  const handleSubmit = (values, options) => {
    console.log(values)
    dispatch(registerThunk(values))
    options.resetForm()
  }

  return <div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.formWrapper}>
        <label>
          <span>Name</span>
          <Field type="text" name="name" className={s.input} />
        </label>
        <label>
          <span>Email</span>
          <Field type="email" name="email" className={s.input} />
        </label>
        <label>
          <span>Password</span>
          <Field type="password" name="password" className={s.input} />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  </div>
}
export default RegistrationPage