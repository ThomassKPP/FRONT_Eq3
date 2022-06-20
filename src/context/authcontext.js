import { useEffect, useState } from "react";

function useLocalState( defaultValue, key ) {
     const [value, setValue] = useState(()=> {
        const LocalStorageValue = localStorage.getItem(key);
        return LocalStorageValue ? JSON.parse(LocalStorageValue) : defaultValue;
    }
    )
    useEffect(() => {
        if (value !== defaultValue) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    , [value, key]);
    return [value, setValue];
}

export default useLocalState;