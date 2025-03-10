import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Phonebook - your convenient online contact directory</h2>
      <p className={s.text}>
        Welcome to the Phonebook website – a cool way to organize your contacts
        in one place. This online platform allows you to store, manage, and find
        the necessary phone numbers effortlessly. Simplicity, an easy interface,
        and reliability – all of this makes Phonebook the perfect solution for
        organizing your contacts.
      </p>
    </div>
  );
};
export default HomePage;
