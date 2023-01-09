import {useState} from "react";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, errorMessage,onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true)
    }

    return(
        <div className="form-item">
            <label>{label}</label>
            <input {...inputProps}
                   onChange={onChange}
                   onBlur={handleFocus}
                   focus={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;
