import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahad98723/code-api-json-onion-restaurant/main/sevice.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return {services}
}

export default useService