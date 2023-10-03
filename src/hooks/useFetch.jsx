import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)

    
    useEffect(() => {
        const fetchData = async() => {
            setisPending(true)
            try{
                const req = await fetch(url)
                if(!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setisPending(false)
            }
            catch(err) {
                setError(err.message)
                console.log(err.message)
                setisPending(false)
            }
        }
        fetchData()
    }, [url])
    return{data, isPending, error}
}

