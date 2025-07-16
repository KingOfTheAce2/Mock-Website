# Mock Website

This repository contains a mock website for an example **International Law Association**.  
The project showcases a single-page layout with sample news items, team profiles and an event agenda.  
Several reference documents (`Input.docx`, `Roundtable.docx`, `Steering Group Meeting.docx` and `Program-of-DRLA-for-2021-2025.pdf`) are included for context.

## Files

- **index.html** – Static website ready to be served with GitHub Pages.
- **sample-website-RV.jsx** – Original React component that inspired the static page.
- **Docs** – Assorted Word and PDF files with meeting information.

## Viewing the website

To see the mock site locally, open `index.html` in your browser.  
For publishing on GitHub Pages:

1. Go to **Settings** → **Pages** in your repository.
2. Choose the **main** branch (or whichever branch contains this file) as the source and click **Save**.
3. After a few moments your site will be available at `https://<username>.github.io/<repository>`.

The static site uses the [Tailwind CSS](https://tailwindcss.com) CDN so no build step is required.
