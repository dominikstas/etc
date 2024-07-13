// Define translations for English and Polish
const translations = {
    'en': {
        'welcome-title': 'ETC',
        'welcome-text': 'Your Engineering Business is your craft',
        'welcome-text2': 'Tailored software is ours',
        'services': 'Web development',
        'about': 'Engineering, Craft, Technologies',
        'testimonials': 'What Our Clients Say',
        'contact': 'Ready to Transform Your Online Presence?',
        'send': 'Send',
        'web-development': 'Intuitive Interface: Navigate with ease and manage your content without hassle.',
        'mobile-app-development': 'High Performance: Fast loading times and smooth operations to keep your visitors engaged.',
        'custom-software-solutions': 'SEO Optimized: Increase your visibility in search engines and attract more potential clients.',
        'it-consulting': 'Ongoing Support: We’re here for you every step of the way with our reliable customer support.',
        'our-services': 'Key Features of Our Services',
        'about-us': 'About Us',
        'what-our-clients-say': 'What Our Clients Say',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-message': 'Your Message',
        // to be bold
        'services-description': "At ETC, we make cutting-edge websites that elevate your professional image in today's digital landscape. Our expertise lies in creating simple, functional online platforms that showcase your brand's unique value and help you stand out. That includes:",
        'about-description': 'We understand that as an engineer, your expertise lies in creating, building, and innovating within your field. Our mission is to help you stand out in your niche by providing top-tier software services designed specifically for professionals like you. Whether you’re in construction, aviation, civil engineering, or any other mechanical field, we’ve got you covered with our comprehensive suite of solutions.',
        'contact-description': '', // Add translation if needed
        'co-mowia-o-nas-klienci': 'What Our Clients Say',
        'copyright': '© 2024 ETC Software House. All rights reserved.',
        // Add more translations as needed
    },
    'pl': {
        'welcome-title': 'ETC',
        'welcome-text': 'Ty znasz się na swoim biznesie',
        'welcome-text2': 'My na komputerach',
        'services': 'Nasze Usługi',
        'about': 'O Nas',
        'testimonials': 'Co mówią o nas klienci',
        'contact': 'Gotowy na zmiany?',
        'send': 'Wyślij',
        'web-development': 'Intuicyjny interfejs: Łatwo dziel się swoimi treściami.',
        'mobile-app-development': 'Szybkość działania: Nasz zespół i nasz software łączy jedno - działamy najszybciej jak się da.',
        'custom-software-solutions': 'Optymalizacja SEO: Dotrzyj do większej ilości klientów.',
        'it-consulting': 'Ciągłe wsparcie: Coś nie działa? Naprawimy.',
        'our-services': 'Key Features of Our Services',
        'about-us': 'O nas',
        'what-our-clients-say': 'Co mówią nasi klienci',
        'your-name': 'Twoje imię',
        'your-email': 'Twój Email',
        'your-message': 'Twoja wiadomość',
        // to be bold
        'services-description': 'Nasze usługi to przede wszystkim:',
        'about-description': 'W ETC rozumiemy, że jako inżynier, Twoja praca polega na tworzeniu i innowacjach. Naszą misją jest pomóc Ci wyróżnić się na tle konkurencji poprzez dostarczanie najwyższej jakości usług informatycznych zaprojektowanych specjalnie dla profesjonalistów takich jak Ty. Niezależnie od tego, czy jesteś w branży budowlanej, lotniczej czy jakiejkolwiek innej, mamy dla Ciebie kompleksowy zestaw rozwiązań.',
        'contact-description': '', // Add translation if needed
        'copyright': '© 2024 ETC Software House. All rights reserved.',
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
