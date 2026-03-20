/**
 * Portfolio Website - Interactive Features
 * Implements DOM manipulation, event handling, form validation, and dark mode toggle
 */

console.log('✓ Portfolio script loaded successfully');

// ===== NOTIFICATION SYSTEM =====
/**
 * Show a custom styled notification
 * @param {string} message - Notification message
 * @param {string} type - 'success', 'error', or 'info'
 * @param {number} duration - Display time in milliseconds
 */
const showNotification = (message, type = 'info', duration = 3000) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    notification.innerHTML = `<span class="notification-icon">${icon}</span><span class="notification-message">${message}</span>`;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, duration);
};

/**
 * Show form error with specific field highlight
 * @param {string[]} errors - Array of error messages
 */
const showFormErrors = (errors) => {
    const errorList = errors.map((err, i) => `${i + 1}. ${err}`).join('\n');
    showNotification(`Please fix these errors:\n${errorList}`, 'error', 5000);
};

// ===== DARK/LIGHT MODE TOGGLE =====
/**
 * Initialize theme on page load by checking localStorage
 * Apply saved theme or default to light mode
 */
const initializeTheme = () => {
    console.log('Initializing theme system...');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    const htmlElement = document.documentElement;
    
    htmlElement.setAttribute('data-theme', savedTheme);
    console.log(`Theme set to: ${savedTheme}`);
    
    // Update toggle button state
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';
    }
};

/**
 * Toggle between dark and light themes
 * Updates HTML data attribute and saves preference to localStorage
 */
const toggleTheme = (event) => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    console.log(`Theme toggled from ${currentTheme} to ${newTheme}`);
};

// ===== DYNAMIC TEXT UPDATE & WELCOME MESSAGE =====
/**
 * Update welcome message with user name
 * Demonstrates dynamic text update and basic logic
 */
const updateWelcomeMessage = () => {
    const welcomeHeading = document.querySelector('.intro h2');
    
    if (welcomeHeading) {
        const storedName = localStorage.getItem('visitorName');
        welcomeHeading.style.opacity = '0';
        
        setTimeout(() => {
            if (storedName) {
                welcomeHeading.textContent = `Welcome, ${storedName}!`;
                console.log(`Welcome message updated with name: ${storedName}`);
            } else {
                welcomeHeading.textContent = 'Welcome to My Portfolio';
                console.log('Welcome message initialized (no user name stored)');
            }
            welcomeHeading.style.opacity = '1';
        }, 150);
    }
};

/**
 * Prompt user for name using custom modal
 * Demonstrates user interaction and text content manipulation
 */
const requestUserName = () => {
    const modal = document.createElement('div');
    modal.className = 'name-modal';
    modal.innerHTML = `
        <div class="name-modal-content">
            <h3>Welcome! What's your name?</h3>
            <input type="text" id="name-input" placeholder="Enter your name" maxlength="50" autocomplete="off">
            <div class="name-modal-buttons">
                <button class="btn-secondary" id="cancel-btn">Cancel</button>
                <button class="btn-primary" id="submit-name-btn">Save Name</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const input = modal.querySelector('#name-input');
    
    // Focus input and trigger show animation
    setTimeout(() => modal.classList.add('show'), 10);
    input.focus();
    
    const submitName = () => {
        const userName = input.value.trim();
        
        if (userName === '') {
            showNotification('Please enter a name', 'error', 2000);
            input.focus();
            return;
        }
        
        localStorage.setItem('visitorName', userName);
        updateWelcomeMessage();
        closeModal();
        showNotification(`Nice to meet you, ${userName}! 👋`, 'success', 2500);
        console.log(`User name saved: ${userName}`);
    };
    
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.querySelector('#submit-name-btn').addEventListener('click', submitName);
    modal.querySelector('#cancel-btn').addEventListener('click', closeModal);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitName();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
};


// ===== BUTTON INTERACTION DEMO =====
/**
 * Toggle a demo style on the hero section
 * Demonstrates DOM manipulation and classList usage
 */
const toggleHeroStyle = () => {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.classList.toggle('hero-highlight');
        const isHighlighted = heroSection.classList.contains('hero-highlight');
        console.log(`Hero section highlight: ${isHighlighted ? 'ON' : 'OFF'}`);
    }
};

// ===== FORM VALIDATION & HANDLING =====
/**
 * Validate form inputs before submission
 * @param {Object} formData - Object containing name, email, and message
 * @returns {Object} - Validation result with isValid flag and error messages
 */
const validateForm = (formData) => {
    const errors = [];
    
    // Validate name
    if (!formData.name || formData.name.trim() === '') {
        errors.push('Name is required');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Validate message
    if (!formData.message || formData.message.trim() === '') {
        errors.push('Message cannot be empty');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
};

/**
 * Handle contact form submission
 * Prevents default behavior, validates inputs, and provides feedback
 */
const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submission detected - processing validation...');
    
    // Get form elements
    const form = event.target;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Clear previous error states
    [nameInput, emailInput, messageInput].forEach(input => {
        input.classList.remove('input-error');
    });
    
    // Collect form data
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    
    // Validate form
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
        // Highlight error fields
        validation.errors.forEach(error => {
            if (error.includes('Name')) nameInput.classList.add('input-error');
            if (error.includes('Email')) emailInput.classList.add('input-error');
            if (error.includes('Message')) messageInput.classList.add('input-error');
        });
        
        showNotification(`${validation.errors.length} error${validation.errors.length !== 1 ? 's' : ''} found. Please review the form.`, 'error', 4000);
        console.warn('Form validation failed:', validation.errors);
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate submission delay
    setTimeout(() => {
        console.log('Form validation passed!');
        console.log('Submitted data:', {
            name: formData.name,
            email: formData.email,
            messageLength: formData.message.length
        });
        
        // Show success notification
        showNotification(`Thank you, ${formData.name}! Your message was sent successfully. We'll be in touch! 📧`, 'success', 4000);
        
        // Reset form
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        console.log('Form reset after successful submission');
    }, 800);
};

// ===== FORM INPUT VALIDATION FEEDBACK =====
/**
 * Add real-time validation feedback for form inputs
 */
const setupFormValidation = () => {
    const contactForm = document.querySelector('form');
    
    if (!contactForm) return;
    
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');
    
    // Real-time validation on input
    nameInput?.addEventListener('blur', () => {
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('input-error');
        } else {
            nameInput.classList.remove('input-error');
        }
    });
    
    emailInput?.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }
    });
    
    messageInput?.addEventListener('blur', () => {
        if (messageInput.value.trim() === '') {
            messageInput.classList.add('input-error');
        } else {
            messageInput.classList.remove('input-error');
        }
    });
    
    // Remove error on focus
    [nameInput, emailInput, messageInput].forEach(input => {
        input?.addEventListener('focus', () => {
            input.classList.remove('input-error');
        });
    });
};

// ===== INTERACTIVE NAVIGATION =====
/**
 * Close mobile menu when a link is clicked
 * Enhances mobile user experience
 */
const closeMenuOnLinkClick = () => {
    const navToggle = document.querySelector('#nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
            console.log('Mobile menu closed after navigation');
        });
    });
};

// ===== INITIALIZATION =====
/**
 * Initialize all interactive features when DOM is ready
 */
const initializeApp = () => {
    console.log('Starting application initialization...');
    
    // 1. Initialize theme
    initializeTheme();
    
    // 2. Set up theme toggle
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
        console.log('Theme toggle listener attached');
    }
    
    // 3. Update welcome message
    updateWelcomeMessage();
    
    // 4. Set up user name button
    const userNameBtn = document.querySelector('#set-user-name');
    if (userNameBtn) {
        userNameBtn.addEventListener('click', requestUserName);
        console.log('User name button listener attached');
    }
    
    // 5. Set up demo button
    const demoBtn = document.querySelector('#demo-button');
    if (demoBtn) {
        demoBtn.addEventListener('click', toggleHeroStyle);
        console.log('Demo button listener attached');
    }
    
    // 6. Set up form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        setupFormValidation();
        console.log('Form submission listener attached');
    }
    
    // 7. Set up navigation menu
    closeMenuOnLinkClick();
    
    console.log('✓ Application initialization complete - all features ready');
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
    console.log('DOMContentLoaded event listener attached');
} else {
    initializeApp();
    console.log('DOM already loaded - initializing directly');
}
