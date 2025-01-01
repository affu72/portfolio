const useScrollReveal = () => {
    try {
        React.useEffect(() => {
            const observerCallback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            };

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);
            const elements = document.querySelectorAll('.scroll-reveal');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);
    } catch (error) {
        reportError(error);
    }
};
