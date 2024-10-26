# Portfolio Project

This is a portfolio website built using React, Material UI, and Joy UI. It showcases personal projects, social profiles, academic background, and a downloadable resume.

## Table of Contents

- [Portfolio Project](#portfolio-project)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Directory Structure](#directory-structure)
  - [Functionality Overview](#functionality-overview)
    - [Home Page](#home-page)
    - [Profile Page](#profile-page)
    - [Projects Page](#projects-page)
    - [Academics Page](#academics-page)
    - [404 Page](#404-page)
  - [Packages Used](#packages-used)
  - [Scripts](#scripts)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)

## Project Overview

A portfolio website showcasing projects, social links, and an academic timeline. used redux to maintain state of the bottom navigation, also used localstorage to store the selected in the bottom navigation. Customized all the used MUI and JoyUI components using the sx property. Used Typewriter-effect in the home page. used react router dom for routing the pages. Used Axios to featch data from backend. (only in the PageNotFound page data is featched to understand the concept remaining all the pages use the data from the Constants.js file in the Utils folder)

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── Dashbord.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   └── shared.css
│   │   └── images/
│   │       └── projects/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Functionality Overview

### Home Page

- Personalized greeting
- Resume download button

### Profile Page

- Links to social profiles

### Projects Page

- Grid of personal projects with descriptions and links

### Academics Page

- Timeline of educational background

### 404 Page

- Custom error page
- User data fetch (for learning express)

## Packages Used

- React
- Material UI
- Joy UI
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

## Scripts

Runs the app in development mode

```bash
npm start
```

Builds the app for production

```bash
npm run build
```

Runs tests

```bash
npm run test
```

Checks code quality

```bash
npm run lint
```

## Installation

Clone the repository:

```bash
git clone https://github.com/DG-Devil/PorfolioProject_Updated.git
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```
