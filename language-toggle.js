// Define translations for English and Polish
const translations = {
    'en': {
        'welcome-title': 'Welcome to ETC Software House',
        'welcome-text': 'Innovative solutions for your business',
        'services': 'Our Services',
        'about': 'About Us',
        'testimonials': 'What Our Clients Say',
        'contact': 'Contact Us',
        'send': 'Send'
        // Add more translations as needed
    },
    'pl': {
        'welcome-title': 'Witaj w ETC Software House',
        'welcome-text': 'Innowacyjne rozwiązania dla Twojej firmy',
        'services': 'Nasze Usługi',
        'about': 'O Nas',
        'testimonials': 'Co mówią o nas klienci',
        'contact': 'Kontakt',
        'send': 'Wyślij'
        // Add more translations as needed
    }
};

// Function to initialize translations based on the current language setting
function initializeTranslations() {
    const currentLang = localStorage.getItem('language') || 'en'; // Default to English if no language set
    applyTranslations(currentLang);
    updateLanguageToggleButton(currentLang);
}

// Function to apply translations to all elements with data-lang attribute
function applyTranslations(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const textKey = element.dataset.lang;
        if (translations[lang][textKey]) {
            element.textContent = translations[lang][textKey];
        }
    });
}

// Function to update the language toggle button text based on current language
function updateLanguageToggleButton(lang) {
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.textContent = lang === 'en' ? 'EN / PL' : 'PL / EN';
}

// Function to toggle between English and Polish
function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en'; // Default to English if no language set
    const targetLang = currentLang === 'en' ? 'pl' : 'en';

    // Update button text based on target language
    updateLanguageToggleButton(targetLang);

    // Apply translations to all elements with data-lang attribute
    applyTranslations(targetLang);

    // Save current language to localStorage
    localStorage.setItem('language', targetLang);
}

// Event listener for language toggle button
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

// Initialize translations on page load
initializeTranslations();
