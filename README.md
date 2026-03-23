# Raju Maurya — Storytelling Portfolio Website

> *"Not in a day, but one day, I'll make myself bigger and better."* ❤️

A modern, dark-themed storytelling portfolio website for **Raju Maurya** — BBA Final Year Student, Digital Marketing Executive, and Aspiring Entrepreneur.

---

## 🌐 Live Preview
**Link:** [https://raju204.github.io/Portfolio-v1/](https://raju204.github.io/Portfolio-v1/)


---

## 📁 Project Structure

```
Raju Portfolio/
├── index.html                              # Main portfolio page (single-file, self-contained)
├── admin.html                              # Admin panel for editing portfolio & blog content
├── blog.html                               # Blog listing page (standalone)
├── blog-post.html                          # Individual blog post detail page
├── Photo.jpeg                              # Profile photo
├── README.md                               # This file
└── Document/
    ├── Linkdin Profile .pdf                # LinkedIn profile export
    ├── Raju_Maurya_Resume (1).pdf          # Resume / CV
    ├── Certificate/                        # Skill & course certificates
    │   ├── 1.project management.pdf
    │   ├── 2.project management.pdf
    │   ├── 3.project management.pdf
    │   ├── A Microsoft Excel.pdf
    │   ├── digital marketing strategies.pdf
    │   ├── Document from Mr. Raju Maurya 😎.pdf
    │   ├── Google Analytics.pdf
    │   ├── SEO certification .pdf
    │   ├── WhatsApp Image 2026-02-25 at 2.10.54 PM.jpeg
    │   └── WhatsApp Image 2026-02-25 at 2.11.25 PM.jpeg
    └── Internship Certificate/             # Work & internship documents
        ├── Certificate of Appreciation - Raju Maurya (1).pdf
        ├── Certificate of Appreciation - Raju Maurya.pdf
        ├── Certification Of Appreciation - Raju Maurya.pdf
        ├── Internship Certificate - Raju Maurya.pdf
        ├── Promotion_letter_Raju.pdf
        ├── Raju Maurya_LOR.pdf
        └── Raju Maurya_Relieving_Letter.pdf
```

---

## 📖 Website Sections (Story Chapters)

The portfolio is built as a **scroll-driven narrative**, divided into 6 chapters:

| Chapter | Section | Description |
|---------|---------|-------------|
| **01** | **The Beginning** — About | Introduction, bio, profile photo, and animated stats |
| **02** | **The Arsenal** — Skills | 6 skill cards with animated progress bars (Digital Marketing, SEO, Google Analytics, Project Management, Excel, Brand Strategy) |
| **03** | **The Journey** — Timeline | Tabbed view with **Experience** (8 roles) and **Education** (5 milestones) pulled from LinkedIn profile |
| **04** | **The Proof** — Documents | Filterable gallery of all 18 certificates & documents with in-page modal viewer |
| **05** | **The Summary** — Resume | Resume download/view card |
| **06** | **Let's Connect** — Contact | Email, LinkedIn, and phone contact cards |

---

## 💼 Experience (from LinkedIn)

| Period | Role | Company | Location |
|--------|------|---------|----------|
| Jan 2026 – Present | Digital Marketing Executive | Marcom | Mathura |
| Sep 2025 – Present | Content Creator & Page Manager | UnlockGrowthMedia | Gorakhpur, UP |
| Sep 2025 | Content Researcher Team Lead | UnlockDiscounts | Bengaluru |
| Apr – Sep 2025 | Digital Marketing Intern | UnlockDiscounts | Bengaluru |
| Jun – Aug 2025 | Sales Operations & Marketing Intern | CTPL (Creanovation Technologies) | Gurugram |
| Oct 2024 – Dec 2025 | Student Council & Entrepreneurial Club | Sanskriti University | Mathura |
| Apr – Aug 2024 | Administrative Intern | Sanskriti University | Mathura |
| Apr – Jul 2023 | Student Tutor | JOBS Computer Institute | Gorakhpur |

---

## 🎓 Education

| Period | Degree / Course | Institution |
|--------|----------------|-------------|
| Aug 2023 – Oct 2026 | BBA (Business Administration, Management & Operations) | Sanskriti University |
| Jan – Feb 2024 | Project Management Studies | Project Management Institute (PMI) |
| Jan 2024 | Introduction to Microsoft Excel | Coursera |
| Apr 2021 – Mar 2022 | Intermediate (12th) | GSSS Barsar, Hamirpur, HP |
| Apr 2019 – Mar 2020 | High School (10th) | GSSS Barsar, Hamirpur, HP |

---

## ✨ Features

### Portfolio
- **Storytelling layout** — Chapter-based narrative with scroll-reveal animations
- **Dark cinematic theme** — Deep black background with gold (#f0c040) & burnt orange (#e06040) accents
- **Custom cursor** — Animated dot + ring cursor on desktop
- **Preloader** — Animated loading screen with progress bar
- **Floating particles** — Ambient particle effect in hero section
- **Background glow** — Mouse-following radial glow effect
- **Scroll reveal** — Elements animate in as they enter the viewport
- **Animated counters** — Stats count up when visible
- **Skill progress bars** — Animate on scroll
- **Tabbed Journey** — Switch between Experience and Education timelines
- **Filterable document gallery** — Filter by All / Certificates / Internship & Work / Other
- **Modal document viewer** — View PDFs and images in an in-page lightbox
- **Hide-on-scroll navbar** — Navigation hides when scrolling down, reappears on scroll up
- **Fully responsive** — Mobile-friendly with hamburger menu
- **localStorage integration** — Reads admin-saved edits and dynamically updates content on page load

### Admin Panel (`admin.html`)
- **Password-protected login** — Default password: `admin123` (changeable in Settings)
- **Dashboard** — Overview with counts for Skills, Experience, Education, Documents, and Blog Posts
- **Section editors** — Edit Hero, About, Skills, Experience, Education, and Contact sections
- **CRUD operations** — Add, edit, delete, and reorder Skills / Experience / Education entries
- **Blog management** — Full blog editor with create, edit, publish/unpublish, preview, and delete
- **Settings** — Change password, export/import data as JSON, reset all data to defaults
- **Toast notifications** — Visual feedback for save, error, and status changes
- **Unsaved changes indicator** — Warns when there are unsaved modifications
- **Data persistence** — All data saved via `localStorage` (keys: `raju_portfolio_data`, `raju_blog_posts`)

### Blog System (`blog.html` + `blog-post.html`)
- **Standalone blog** — Opens on a separate page, not embedded in the portfolio
- **Card grid layout** — Responsive grid with cover images, category tags, excerpts, and read time
- **Category filtering** — Dynamic filter tabs based on post categories
- **Individual post pages** — Full article view with HTML content support, share buttons (Twitter, LinkedIn, copy link)
- **Empty state** — Friendly message when no posts exist yet
- **Plain text & HTML support** — Write in plain text or use HTML tags for rich formatting

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| **Primary Color** | `#f0c040` (Gold) |
| **Secondary Color** | `#e06040` (Burnt Orange) |
| **Background** | `#0a0a0f` (Deep Black) |
| **Card Background** | `rgba(26,26,46,.5)` |
| **Heading Font** | Playfair Display (serif) |
| **Body Font** | Inter (sans-serif) |
| **Handwritten Font** | Caveat (cursive) |
| **Icons** | Font Awesome 6.5.1 |

---

## 📞 Contact Information

- **Email:** mauryaraju556@gmail.com
- **Phone:** +91 8988353656
- **LinkedIn:** [linkedin.com/in/raju-maurya-68488a297](https://www.linkedin.com/in/raju-maurya-68488a297)

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (animations, gradients, backdrop-filter, grid, flexbox)
- Vanilla JavaScript (IntersectionObserver, DOM manipulation, localStorage)
- Google Fonts (CDN) — Playfair Display, Inter, Caveat
- Font Awesome 6.5.1 (CDN)

---

## 🔧 How to Use the Admin Panel

1. Open `admin.html` in your browser
2. Login with password `admin123` (or your custom password)
3. Edit any section using the sidebar navigation
4. Click **Save Changes** to persist edits to `localStorage`
5. Open `index.html` — your changes appear automatically
6. To manage blog posts: go to **Blog** in the sidebar → Add / Edit / Publish posts
7. Blog posts appear on `blog.html` (linked from the portfolio navbar)

---

## 👨‍💻 Crafted By

**Shubham Gupta** — [sg6664862@gmail.com](mailto:sg6664862@gmail.com)

---

*Last updated: February 25, 2026*
