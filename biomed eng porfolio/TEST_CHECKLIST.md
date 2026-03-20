# Quick Test Checklist - JavaScript Interactivity Assignment

## ✅ Pre-Test Verification
- [ ] Extract the portfolio folder
- [ ] Open `index.html` in a web browser
- [ ] Press `F12` or `Ctrl+Shift+J` to open Developer Console
- [ ] You should see: `✓ Portfolio script loaded successfully`

---

## 📋 Feature Testing Checklist

### Level 1 - Fundamental

#### [ ] Button Interaction
- [ ] On home page, look for **"✨ Highlight This Section"** button
- [ ] Click it
- [ ] Hero section should brighten with a pulse animation
- [ ] Click again to toggle effect off
- [ ] Console shows: `Hero section highlight: ON/OFF`

#### [ ] Dynamic Text Update  
- [ ] On home page, look for **"👤 Set Your Name"** button below welcome text
- [ ] Click it
- [ ] Enter a name in the prompt
- [ ] Heading updates from "Welcome" to "Welcome, [YourName]!"
- [ ] Refresh the page - your name persists
- [ ] Console shows your name was saved

#### [ ] Console Usage
- [ ] Press `F12` and go to **Console** tab
- [ ] Should see multiple `console.log()` messages:
  - `✓ Portfolio script loaded successfully`
  - Theme initialization messages
  - Feature initialization confirmations
- [ ] **NO red errors** in console

---

### Level 2 - Intermediate

#### [ ] Dark/Light Mode Toggle (with BONUS localStorage)
- [ ] Look at **navigation bar** (top right corner)
- [ ] Find the **Sun/Moon toggle button** (☀️ ↔ 🌙)
- [ ] Click toggle - **smooth color transition** to dark theme
  - Light mode: Light blue background, dark text
  - Dark mode: Dark blue background, light text
- [ ] Transition should be smooth (takes ~300ms)
- [ ] Refresh the page - **dark mode persists** ✨ BONUS FEATURE ✨
- [ ] Toggle back to light, refresh - persists again
- [ ] Visit other pages (About, Projects, Contact) - theme follows
- [ ] Console shows: `Theme toggled from light to dark`

#### [ ] Interactive Navigation Menu
- [ ] **Desktop (wide window):** Navigation shows horizontally
- [ ] **Mobile (narrow window):** Hamburger menu (☰) appears
  - Click ☰ to open/close menu
  - Click a link to navigate
  - **Menu auto-closes** after clicking a link ✨
- [ ] Verify on every page

#### [ ] Form Handling
- [ ] Go to **Contact page**
- [ ] **Test 1 - Empty Form:**
  - [ ] Click "Send Message" without filling fields
  - [ ] Alert appears: "Please fix the following errors:"
  - [ ] Lists all three errors
  - [ ] Console shows: `Form validation failed:`
  
- [ ] **Test 2 - Invalid Email:**
  - [ ] Enter: Name: "John", Email: "notanemail", Message: "Test"
  - [ ] Click "Send Message"
  - [ ] Alert: "Please enter a valid email address"
  - [ ] Form stays on page
  
- [ ] **Test 3 - Valid Submission:**
  - [ ] Enter valid data:
    - Name: "John Doe"
    - Email: "john@example.com"
    - Message: "This is a test message"
  - [ ] Click "Send Message"
  - [ ] Alert: "Thank you, John Doe! Your message has been sent..."
  - [ ] Form automatically clears
  - [ ] Console shows submitted data (no page refresh!)

---

## 🎓 Code Quality Checks

- [ ] Open `script.js` file
- [ ] [ ] All JavaScript in external file (no inline `<script>` tags in HTML)
- [ ] [ ] Uses `let` and `const` (no `var`)
- [ ] [ ] Variable names are descriptive: `formData`, `themeToggle`, `savedTheme`, etc.
- [ ] [ ] Code is properly indented
- [ ] [ ] Functions have comments explaining their purpose
- [ ] [ ] Logical organization (grouped by feature)

---

## 📊 General Requirements

- [ ] All files present:
  - [ ] `script.js` (1 file, all JS in one place)
  - [ ] `index.html`, `about.html`, `projects.html`, `contact.html`
  - [ ] `style.css` (with dark mode support)
  - [ ] `JAVASCRIPT_FEATURES.md` (documentation)

- [ ] Website runs locally:
  - [ ] No broken file paths
  - [ ] All images load
  - [ ] No 404 errors in console
  - [ ] No exceptions in console

---

## 🎯 Summary - All Features Working?

| Feature | Working? |
|---------|----------|
| Button highlights hero section | ✓ |
| Dynamic welcome message | ✓ |
| Console has log messages | ✓ |
| Dark mode toggle | ✓ |
| Dark mode persists (localStorage) | ✓ BONUS |
| Mobile menu auto-closes | ✓ |
| Form validation works | ✓ |
| Form prevents default submission | ✓ |
| External JS file used | ✓ |
| No console errors | ✓ |

---

## 🚀 Ready to Submit When:

✅ All Level 1 features work
✅ All Level 2 features work  
✅ Console has no errors
✅ Website runs locally without issues
✅ Can explain all JavaScript logic

**Estimated Demo Time:** 5-10 minutes

---

**Questions to be prepared to answer:**
1. Why is the form validation important?
2. How does localStorage help with dark mode?
3. What does `event.preventDefault()` do and why use it?
4. How do CSS variables enable the dark mode theme?
5. What's the benefit of using external JS files?
