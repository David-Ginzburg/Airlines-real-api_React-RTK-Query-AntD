import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isFetching, callback) => {
    const observer = useRef()

    useEffect(() => {
        if (isFetching) return
        if (observer.current) observer.current.disconnect()

        let cb = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [callback, canLoad, isFetching, ref])
}