import { useState } from "react"


const useToggle = (initialState=false)=> {
    const [isToggled, setIsToggled] = useState(initialState);

    const toggle = ()=>  {
        setIsToggled(!isToggled)
    }

    return {
        isToggled, toggle
    }
}


export default useToggle