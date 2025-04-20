# Blue Robot Job Board

A simple job board frontend built using NextJS, TypeScript, and mock API for Blue Robot's frontend technical assignment.

# Blue Robot Job Board (Project Structure)

/job-board
├── src
│   ├── components
│   │   ├── auth-form.tsx                // Login form component
│   │   ├── header.tsx                   // Site header with navigation and theme toggle
│   │   ├── job-card.tsx                 // Job summary card component
│   │   ├── job-details.tsx              // Full job details component
│   │   ├── job-form.tsx                 // Form for posting new jobs
│   │   ├── job-list.tsx                 // List of job cards with loading states
│   │   ├── theme-provider.tsx           // Theme provider wrapper
│   │   └── theme-toggle.tsx             // Dark/light mode toggle with animations
│   ├── context
│   │   └── auth-context.tsx             // Legacy auth context (kept for reference)
│   ├── lib
│   │   ├── utils.ts                     // Utility functions
│   │   └── redux
│   │       ├── store.ts                 // Redux store configuration
│   │       ├── hooks.ts                 // Typed Redux hooks
│   │       └── slices
│   │           ├── authSlice.ts         // Auth state management
│   │           └── jobsSlice.ts         // Jobs state management
│   ├── pages
│   │   ├── _app.tsx                     // Custom App with Redux Provider and ThemeProvider
│   │   ├── _document.tsx                // Custom Document for HTML structure
│   │   ├── index.tsx                    // Home page with job listings
│   │   ├── login.tsx                    // Login page
│   │   ├── post.tsx                     // Post job page (auth protected)
│   │   ├── jobs
│   │   │   └── [id].tsx                 // Dynamic job details page
│   │   └── api
│   │       └── jobs.ts                  // API routes for jobs
│   ├── hooks
│   │   ├── use-jobs.ts                  // Jobs hook
│   │   └── use-toast.ts                 // Toast notification hook
│   ├── services
│   │   └── api.ts                       // API service with mock data
│   ├── styles
│   │   └── globals.css                  // Global styles with Tailwind
│   └── types
│       └── index.ts                     // TypeScript interfaces
├── public
│   └── images                           // Public images directory
├── __tests__
│   ├── auth-form.test.tsx               // Tests for auth form
│   ├── job-card.test.tsx                // Tests for job card
│   └── redux
│       └── authSlice.test.ts            // Tests for auth Redux slice
├── package.json                         // Project dependencies
├── tailwind.config.js                   // Tailwind configuration
├── tsconfig.json                        // TypeScript configuration
├── next.config.js                       // Next.js configuration
├── jest.config.js                       // Jest configuration
├── jest.setup.js                        // Jest setup file
└── README.md                            // Project documentation

## Tech Stack

- Next.js (Pages Router)
- TypeScript
- Redux Toolkit for state management
- Tailwind CSS
- Framer Motion for animations
- next-themes for dark mode
- Jest for testing

## Login Details

Username: `<user-name>`
Password: `<password>`