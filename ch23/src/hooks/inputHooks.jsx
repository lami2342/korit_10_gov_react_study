import { useState } from "react";
import * as s from "./styles";



export function useInput({ name, type, placeholder }) {

    const [value, setValue] = useState("")

    const handleOnChange = (e) => {
setValue(e.target.value);
    }

    const element = <input type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange} />
    return {

    }

}

