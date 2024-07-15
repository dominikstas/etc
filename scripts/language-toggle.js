// scripts/language-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const languageToggleBtn = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang]');

    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    languageToggleBtn.addEventListener('click', () => {
        const currentLanguage = localStorage.getItem('language') || 'en';
        const newLanguage = currentLanguage === 'en' ? 'pl' : 'en';
        setLanguage(newLanguage);
    });

    function setLanguage(language) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-lang');
            const html = element.getAttribute(`data-${language}`);
            if (html) {
                element.innerHTML = html;
            }
        });
        localStorage.setItem('language', language);
        // Update the language toggle button text
        languageToggleBtn.textContent = language === 'en' ? 'EN / PL' : 'PL / EN';
    }
});
