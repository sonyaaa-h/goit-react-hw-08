import { Field, Form, Formik } from "formik"
import s from "./RegistrationPage.module.css"
import { useDispatch } from "react-redux"
import { registerThunk } from "../../redux/auth/operations"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router"

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  const handleSubmit = (values, options) => {
    console.log(values)
    dispatch(registerThunk(values))
    .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid email"));
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
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Form>
    </Formik>
  </div>
}
export default RegistrationPage