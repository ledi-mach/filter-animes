import { useRef } from 'react';

const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);

    const debouncedCallback = (...param) => {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            callback(...param);
        }, delay);
    }
    return debouncedCallback;
}

export default useDebounce;