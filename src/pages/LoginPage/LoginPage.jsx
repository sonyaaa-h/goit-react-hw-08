import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));

    options.resetForm();
  };

  return (
    <div>
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
          <p className={s.text}>Yuo do not have an account? <Link to="/register" className={s.link}>Register</Link></p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginPage;
