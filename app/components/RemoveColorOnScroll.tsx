'use client';
import { useEffect, useRef, useState } from "react";

const RemoveColorOnScroll = ({ children }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight - 300;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `relative overflow-hidden`;

    const overlayClasses = `absolute z-50 inset-0 bg-blue-500 transition-transform duration-1000 ease-in-out ${isVisible ? "transform translate-x-full" : "transform translate-x-0"}`;

    const textClasses = `relative z-40 transition-transform duration-1000 ease-in-out ${isVisible ? "transform text-slate-600" : "transform text-blue-500" }`;

    return (
        <div ref={ref} className={classes}>
            <div className={overlayClasses}></div>
            <div className={textClasses}>
                {children}
            </div>
        </div>
    );
};

export default RemoveColorOnScroll;