# Resumind – AI Resume Analyzer

A modern, client-side AI-powered tool that helps users improve their resumes by comparing them against job titles, company names, and job descriptions.

##  Live Demo

*[Live Demo Here](https://resumind-five-flame.vercel.app/)*

##  Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  

---

## Features

- **Resume Upload & Parsing** – Upload resume PDFs and extract relevant content.
- **Job-Specific Analysis** – Input job title, company name, and description for tailored insights.
- **Detailed Feedback** – Get breakdowns on ATS performance, structure, tone, content quality, and skills alignment.
- **Improvement Suggestions** – Actionable recommendations to boost your resume for specific roles.
- **Secure & Serverless** – Powered by Puter.js for client-side auth, storage, and AI—no backend required.
- **Responsive UI** – Built with React, React Router, Tailwind CSS for a seamless experience across devices.

---

## Tech Stack

- **Frontend**: React + React Router (v7)
- **Styling**: Tailwind CSS
- **State Management**: (e.g., Zustand)
- **Backend / Infrastructure**: Puter.js (for authentication, file handling, AI API requests)
- **Build Tool**: Vite
- **PDF Processing**: (e.g., PDF.js)
- **AI Integration**: (e.g., Claude model via Puter)

---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/genedeh/AIResumerAnalyzer.git
cd AIResumerAnalyzer

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
