import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const dispatch = useDispatch();
    
        return (
            <div className={s.searchWrapper}>
                <label>Find contacts by name or phone</label>
                <div className={s.searchBox}>
                    <MdSearch  className={s.searchIcon} />
                    <input
                        type="text"
                        name="filter"
                        placeholder="Search contacts"
                        onChange={(e) =>{
                            dispatch(changeFilter(e.target.value))
                            
                        }}
                    />
                </div>
            </div>
        );
    };
    export default SearchBox;