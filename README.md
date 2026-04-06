# Finance Dashboard UI

A responsive finance dashboard UI built with **React**, **Vite**, and **Tailwind CSS**. It includes a sidebar navigation, profile card, summary cards, and Recharts-based charts.

## Tech Stack
- **React** (Vite)
- **Tailwind CSS**
- **React Router DOM**
- **Recharts**

## Getting Started

### Install dependencies
```sh
npm install
```

### Run the dev server
```sh
npm run dev
```

## Project Structure
```
Finance-Dashboard-UI/
├── public/
│   └── components/
│       └── assets/
│           ├── Profile/
│           └── svg/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Profile.jsx
│   │   ├── Summary.jsx
│   │   └── button.jsx
│   ├── dashboard/
│   │   ├── Dashboard.jsx
│   │   └── charts/
│   │       └── Line Chart.jsx
│   ├── Transactions/
│   │   └── Transactions.jsx
│   ├── insights/
│   │   └── insights.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Routing
The app uses React Router:

- `/dashboard`
- `/transactions`
- `/insights`

## Assets
Place images and SVGs under `public/components/assets/`.

Use **public paths without `/public`**, for example:
- `/components/assets/Profile/Pic.jpg`
- `/components/assets/svg/Dashboard.svg`

## Notes
- Navigation buttons are styled with active states using `NavLink`.
- Charts use Recharts and are wrapped in `ResponsiveContainer` for responsiveness.

---
If you want to add more pages or components, follow the existing folder structure and export components in PascalCase.
