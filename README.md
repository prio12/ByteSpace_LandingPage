# ByteSpace

A responsive course-learning platform landing page built from the provided ByteSpace Figma design.

This project was built as a frontend assessment for the **Jr. Software Engineer (Frontend)** position at **Doin Tech Limited**. The main focus was reproducing the provided design closely while keeping the implementation component-based and reusable.

## Live Demo

**Live Application:** https://byte-space-landing-page.vercel.app/

**GitHub Repository:** https://github.com/prio12/ByteSpace_LandingPage

## Project Overview

The main deliverable for the assessment was the **ByteSpace landing page**.

The page is based on the provided Figma design and includes:

- Hero / Banner section
- Course discovery and category sections
- Learning paths
- Platform features
- Course cards
- Partner logos
- Testimonials
- Creator call-to-action
- Footer

The implementation uses reusable components for repeated UI patterns such as navigation, course cards, avatar stacks, tabs, section introductions, ornaments, and background elements.

The **Login and Register pages** were also implemented as bonus pages, following the provided design.

## Main Features

- Responsive landing page implementation
- Figma-focused desktop layout and visual matching
- Reusable React components
- Shared navigation across the application
- Reusable course card components with different variants
- Course category and learning-path sections
- Testimonials and partner sections
- Reusable decorative ornaments
- Shared background grid system
- Login page based on the provided Figma design
- Register page based on the provided Figma design
- React Router navigation between Home, Login, and Register
- Vercel deployment

## Technology Stack

**Frontend**

- React 19
- Vite
- React Router
- Tailwind CSS 4
- React Icons

**Development Tools**

- ESLint
- Vite React plugin
- Tailwind CSS Vite plugin

## Project Structure

```text
ByteSpace/
├── src/
│   ├── assets/
│   │   ├── avatars/             # User/avatar images
│   │   ├── icons/               # Icons and decorative assets
│   │   ├── images/              # Course, hero, auth, and other images
│   │   └── partners/            # Partner logos
│   │
│   ├── components/
│   │   ├── auth/                # Shared authentication components
│   │   │   ├── AuthField.jsx
│   │   │   ├── AuthForm.jsx
│   │   │   └── AuthLayout.jsx
│   │   │
│   │   ├── common/              # Reusable application-wide components
│   │   │   ├── AvatarStack.jsx
│   │   │   ├── FitBox.jsx
│   │   │   ├── FloatingCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GlowBackground.jsx
│   │   │   ├── GridBackground.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SectionIntro.jsx
│   │   │   └── TabButton.jsx
│   │   │
│   │   └── home/                # Landing page components
│   │       ├── Banner.jsx
│   │       ├── CallToAction.jsx
│   │       ├── CategoryTabs.jsx
│   │       ├── CourseCard.jsx
│   │       ├── CourseGrid.jsx
│   │       ├── DiscoverIntro.jsx
│   │       ├── ExploreIntro.jsx
│   │       ├── Features.jsx
│   │       ├── HeroContent.jsx
│   │       ├── HeroVisuals.jsx
│   │       ├── ManageFeature.jsx
│   │       ├── Ornaments.jsx
│   │       ├── PartnerLogos.jsx
│   │       ├── PathCards.jsx
│   │       ├── PathFeature.jsx
│   │       ├── Testimonials.jsx
│   │       └── cards/
│   │           ├── CategoryCard.jsx
│   │           ├── HappyStudentsCard.jsx
│   │           └── ProgressCard.jsx
│   │
│   ├── data/                    # Static data used by the UI
│   │   ├── avatars.js
│   │   ├── courses.js
│   │   ├── courseTabs.js
│   │   ├── footerLinks.js
│   │   ├── glows.js
│   │   ├── learningPaths.js
│   │   ├── ornaments.js
│   │   ├── partners.js
│   │   └── testimonials.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## Design Implementation

The implementation follows the provided Figma design with particular attention to:

- Desktop spacing and positioning
- Typography and font sizing
- Colors
- Border radii
- Button dimensions
- Card dimensions
- Section spacing
- Decorative elements
- Background grid placement
- Course card layouts
- Authentication page layouts

The background grid is implemented as a reusable `GridBackground` component instead of duplicating the grid markup across individual sections.

Decorative assets are handled through reusable ornament data, allowing different sections to render their own Figma-specific visual elements without duplicating positioning logic.

## Authentication Pages

The assessment listed Login and Signup as optional bonus pages.

Both pages use shared components:

- `AuthLayout`
- `AuthForm`
- `AuthField`

This keeps the common authentication structure in one place while allowing each page to provide its own content and fields.

### Register

The Register page includes:

- Full Name
- Email
- Password
- Continue button
- Login navigation

### Login

The Login page includes:

- Email
- Password
- Sign In button
- Social login buttons
- New user navigation to Register

These pages follow the provided desktop Figma design and measurements.

## Setup Instructions

### Requirements

- Node.js 20+
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/prio12/ByteSpace_LandingPage.git
```

2. Go into the project folder:

```bash
cd ByteSpace_LandingPage
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

## Build & Deployment

The project is deployed through Vercel.

To create a production build locally:

```bash
npm run build
```

The production build can then be deployed through Vercel or another static hosting provider.

## Known Limitations

- The project is a frontend implementation of the provided design and does not include a backend or database.
- Authentication pages are visual/route implementations only; there is no real authentication service behind the forms.
- Course data, testimonials, partners, avatars, and other content are static data defined inside the project.
- Social login buttons on the Login page are visual implementations and are not connected to OAuth providers.
- Some navigation links are placeholders because the assessment focused on reproducing the provided design rather than implementing a complete course platform.
- The Login and Register pages were implemented as optional bonus pages and were primarily matched to the provided desktop design.

## Assessment Scope

This project was created for the **Doin Tech Limited Jr. Software Engineer (Frontend)** assessment.

The required task was to build the **ByteSpace New landing page** from the provided Figma design.

The Login and Signup pages were additionally implemented as the assessment's optional bonus scope.

## About

ByteSpace frontend implementation built with React, Vite, Tailwind CSS, and React Router based on the provided Figma design.

**Live Application:** https://byte-space-landing-page.vercel.app/

**Repository:** https://github.com/prio12/ByteSpace_LandingPage
