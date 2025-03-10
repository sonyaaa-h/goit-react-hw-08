import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
    selectFilteredContacts,
    selectLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        const abortController = new AbortController();
        dispatch(fetchContacts({ signal: abortController.signal }));
        return () => abortController.abort();
    }, [dispatch]);

    return (
        <>
            {isLoading && <div className={s.loader}></div>}
            {!isLoading && (
                <ul className={s.wrapperList}>
                    {filteredContacts.map((contact) => (
                        <Contact key={contact.id} {...contact} />
                    ))}
                </ul>
            )}
        </>
    );
};
export default ContactList;
