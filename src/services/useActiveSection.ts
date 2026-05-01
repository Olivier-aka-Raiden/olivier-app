import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'ai-work', 'contact'];

export function useActiveSection(): string {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                }
            },
            {
                // Active zone is the middle 20% of the viewport
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0,
            }
        );

        const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
            (el): el is HTMLElement => el !== null
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return active;
}
