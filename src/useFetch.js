import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [Data, setData] = useState(null)
    const [isloading, setisloading] = useState(true);
    const [haveError, sethaveError] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Network response error');
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setisloading(false);
            })
            .catch(err => {
                sethaveError(err.message)
                setisloading(false);
            })
    }, [])
    return { Data, isloading, haveError }
}
export default useFetch;