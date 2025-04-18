# Blue Robot Job Board

A simple job board frontend built using React, TypeScript, and mock API for Blue Robot's frontend technical assignment.

# Blue Robot Job Board (Project Structure)

/job-board
├── components
│   ├── JobCard.tsx              // Displays job summary
│   ├── JobDetails.tsx           // Full job details view
│   └── AuthForm.tsx             // Fake login form
├── context
│   └── AuthContext.tsx          // Login state management
├── hooks
│   └── useJobs.ts               // SWR-powered job fetch logic
├── pages
│   ├── index.tsx                // Job List page
│   ├── job/[id].tsx             // Dynamic Job Details
│   └── post.tsx                 // Post Job (auth protected)
├── services
│   └── api.ts                   // fetcher for SWR and optional helpers
├── __tests__
│   ├── JobCard.test.tsx
│   └── AuthForm.test.tsx
├── styles
│   └── globals.css              // Tailwind or custom global styles
├── utils
│   └── auth.ts                  // Login helpers, auth validation
├── types
│   └── index.ts                 // TypeScript interfaces
├── public
│   └── mock-data.json           // Local job listing mock data
└── README.md

## Tech Stack

- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- SWR for data fetching and caching
- Jest for testing
- React Context API for auth

## Login Details

Username: `robot`
Password: `blue123`



