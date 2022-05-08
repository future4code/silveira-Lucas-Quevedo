import { useState, useEffect } from "react"
import { BASE_URL } from '../constants/urls'
import axios from "axios"

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trip/${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}

export default useRequestData