import { useEffect, useRef } from "react";

/**
 * 
 * useObserver(lastElement, currentPage < totalpage, isLoading, () => {
 *      setPage(page + 1)
 * })
 * 
 */


// @ts-ignore
const useObserver = (ref, limit, isLoading, callback) => {

    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;
        // @ts-ignore
        if(observer.current) observer.current.disconnect();

        let fn = function(entries: any, observer: any) {
            if(entries[0].isIntersectiong && limit) {
                callback()
            }
        }
        
        // @ts-ignore
        observer.current = new IntersectionObserver(fn);
        // @ts-ignore
        observer.current.observe(ref.current)

    }, [isLoading])
}

export default useObserver