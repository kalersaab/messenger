import { useState } from "react";

const useValidate = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showNameError, setShowNameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const validateEmail = () => {
        if (!email) {
            setShowEmailError(true)
            return false;
        }
        setShowEmailError(false)
        return true;
    }
    const validateName = () => {
        if (!name) {
            setShowNameError(true);
            return false;
        }
        setShowNameError(false);
        return true;
    };
    const validatePassword = () => {
        if (!password) {
            setShowPasswordError(true);
            return false;
        }
        setShowPasswordError(false);
        return true;
    };
    const validateAll = () => {
        const isNameValid = validateName()
        const isEmailValid = validateEmail()
        const isPasswordValid = validatePassword()
        return isNameValid && isEmailValid && isPasswordValid
    }
    return {
        email, setEmail, password, setPassword, name, setName, showEmailError, showPasswordError, showNameError, validateAll
    }
}
export default useValidate;