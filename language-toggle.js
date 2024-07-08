// Define translations for English and Polish
const translations = {
    'en': {
        'welcome-title': 'Welcome to ETC Software House',
        'welcome-text': 'Innovative solutions for your business',
        'services': 'Our Services',
        'about': 'About Us',
        'testimonials': 'What Our Clients Say',
        'contact': 'Contact Us',
        'send': 'Send',
        'web-development': 'Web Development',
        'mobile-app-development': 'Mobile App Development',
        'custom-software-solutions': 'Custom Software Solutions',
        'it-consulting': 'IT Consulting',
        'our-services': 'Our Services',
        'about-us': 'About Us',
        'what-our-clients-say': 'What Our Clients Say',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-message': 'Your Message',
        'services-description': 'At ETC, we offer a wide range of software development services including:',
        'about-description': 'ETC is a leading software house dedicated to providing innovative software solutions. Our team of experts is committed to delivering high-quality services tailored to meet the unique needs of our clients.',
        'contact-description': '', // Add translation if needed
        'co-mowia-o-nas-klienci': 'What Our Clients Say',
        'copyright': '© 2024 ETC Software House. All rights reserved.',
        // Add more translations as needed
    },
    'pl': {
        'welcome-title': 'Witaj w ETC Software House',
        'welcome-text': 'Innowacyjne rozwiązania dla Twojej firmy',
        'services': 'Nasze Usługi',
        'about': 'O Nas',
        'testimonials': 'Co mówią o nas klienci',
        'contact': 'Kontakt',
        'send': 'Wyślij',
        'web-development': 'Tworzenie stron internetowych',
        'mobile-app-development': 'Tworzenie aplikacji mobilnych',
        'custom-software-solutions': 'Niestandardowe rozwiązania oprogramowania',
        'it-consulting': 'Doradztwo informatyczne',
        'our-services': 'Nasze Usługi',
        'about-us': 'O Nas',
        'what-our-clients-say': 'Co mówią o nas klienci',
        'your-name': 'Twoje Imię',
        'your-email': 'Twój Email',
        'your-message': 'Twoja Wiadomość',
        'services-description': 'W ETC oferujemy szeroki zakres usług w zakresie rozwoju oprogramowania, w tym:',
        'about-description': 'ETC to wiodący dom oprogramowania, dedykowany dostarczaniu innowacyjnych rozwiązań oprogramowania. Nasz zespół ekspertów zobowiązuje się dostarczać wysokiej jakości usługi dostosowane do unikalnych potrzeb naszych klientów.',
        'contact-description': '', // Add translation if needed
        'co-mowia-o-nas-klienci': 'Co mówią o nas klienci',
        'copyright': '© 2024 ETC Software House. Wszelkie prawa zastrzeżone.',
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
