# Portfolio Site

Plain HTML/CSS/JS — no build step needed. 5 pages: Home, About, My Projects, Contact, Book a Meeting.

## Deploy it (free, no domain needed)

1. Create a free account at github.com
2. Create a new repository (e.g. `sufyan-portfolio`), keep it Public
3. Upload every file in this folder (index.html, about.html, projects.html, contact.html, book-a-meeting.html, style.css, script.js) to the repo — "Add file" → "Upload files"
4. Go to vercel.com → sign up with your GitHub account
5. "Add New Project" → select the repo → Deploy (leave all settings as default, it's a static site)
6. You'll get a free live link in about a minute

## Before it's fully live: activate the contact form

The "Book a Meeting" form needs a free Formspree endpoint to actually deliver emails to you:

1. Go to formspree.io → sign up free → verify **sufyanautomates@gmail.com**
2. Create a new form → copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxxx`)
3. Open `book-a-meeting.html`, find this line near the top of the form:
   `<form id="meeting-form" class="form-wrap" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
4. Replace `YOUR_FORM_ID` with your real Formspree ID
5. Re-upload the updated file to GitHub — Vercel redeploys automatically

## Things to double check before sharing

- `contact.html` has a placeholder Instagram link (`https://instagram.com`) — replace with your actual profile URL
- Swap in a favicon if you want a custom browser-tab icon
