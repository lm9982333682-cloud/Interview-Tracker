# Interview Practice Tracker

A responsive **Interview Practice Tracker** built with React and Tailwind CSS to help track interview preparation questions, progress, difficulty levels, and categories in one place.

## Features

- Dashboard with preparation statistics
- Add interview questions through a modal
- Store questions using browser LocalStorage
- Search questions by title, description, or category
- Filter questions by category and difficulty
- Track question status:
  - Pending
  - In Progress
  - Completed
- Progress analytics for overall preparation
- Category-wise progress for DSA, Git, and Technical questions
- Settings page for profile and application preferences
- Clear saved questions from Settings
- Responsive design for desktop, tablet, and mobile
- React Router based navigation
- Vercel deployment support

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- JavaScript (ES6+)
- LocalStorage

## Project Structure

```text
src/
├── components/
│   ├── AddQuestionModal.jsx
│   ├── Header.jsx
│   └── Sidebar.jsx
│
├── layout/
│   └── MainLayout.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── MachineCoding.jsx
│   ├── ProgressAnalytics.jsx
│   ├── QuestionTracker.jsx
│   └── Settings.jsx
│
├── routes/
│   └── AppRouter.jsx
│
├── index.css
└── main.jsx
```

## Installation

Clone the repository and install the dependencies:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd interview-practice-tracker
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Data Storage

This project does not require a backend database. Interview questions and settings are stored in the browser using **LocalStorage**.

The main question data is stored under:

```text
interview_questions
```

Application settings are stored under:

```text
interview_settings
```

## Deployment

The application is deployed using Vercel.

**Live Demo:** YOUR_VERCEL_LIVE_URL

## Screens / Modules

### Dashboard

Shows total questions, completed questions, category statistics, overall progress, and recent activity.

### Question Tracker

Allows users to add, search, filter, and update interview questions.

### Progress Analytics

Displays overall preparation progress, status distribution, category progress, and difficulty-wise progress.

### Machine Coding

Provides the machine-coding section and preparation overview for the interview practice workflow.

### Settings

Allows users to manage profile information, preferences, notifications, and stored questions.

## Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

## Author

**Lal Chand Meghwal**

## License

This project is created for learning, interview preparation, and educational purposes.
