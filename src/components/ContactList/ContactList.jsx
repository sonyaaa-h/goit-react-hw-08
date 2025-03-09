import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const abortController = new AbortController();
        dispatch(fetchContacts({ signal: abortController.signal }));
        return () => abortController.abort();
    }, [dispatch]);

    return (
        <>
            <ul className={s.wrapperList}>
                {filteredContacts.map((contact) => (
                    <Contact key={contact.id} {...contact} />
                ))}
            </ul>
        </>
    );
};
export default ContactList;
