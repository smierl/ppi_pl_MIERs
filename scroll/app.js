window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        window.scrollTo(0, 0);
    }
});
