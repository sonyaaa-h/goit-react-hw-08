import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [editValue, setEditValue] = useState(false);
    const [nameValue, setNameValue] = useState(name);
    const [phoneValue, setPhoneValue] = useState(number);

    return (
        <div className={s.wrapper}>
            <div className={s.contactInfo}>
                {editValue ? (
                    <div className={s.inputWrapper}>
                        <input
                            type="text"
                            defaultValue={name}
                            onChange={(e) => setNameValue(e.target.value)}
                            onBlur={() => {
                                dispatch(
                                    editContact({ id, name: nameValue, number: phoneValue })
                                );
                                // setEditValue(false);
                            }}
                        />
                        <input
                            type="text"
                            defaultValue={number}
                            onChange={(e) => setPhoneValue(e.target.value)}
                            onBlur={() => {
                                dispatch(
                                    editContact({ id, name: nameValue, number: phoneValue })
                                );
                                // setEditValue(false);
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <div className={s.iconWrapper}>
                            <IoMdContact className={s.icon} size={22} />
                            <p>{nameValue}</p>
                        </div>
                        <div className={s.iconWrapper}>
                            <FaPhoneVolume className={s.icon} size={20} />
                            <p>{phoneValue}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className={s.iconWrapper}>
                {editValue ? (
                    <button className={s.button} onClick={() => setEditValue(false)}>
                        <MdDownloadDone />
                    </button>
                ) : (
                    <button className={s.button} onClick={() => setEditValue(true)}>
                        <CiEdit />
                    </button>
                )}
                <button
                    className={s.button}
                    onClick={() => dispatch(deleteContact(id))}
                >
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
};
export default Contact;
