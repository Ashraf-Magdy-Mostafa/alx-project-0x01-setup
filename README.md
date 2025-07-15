# 🚀 ALX Project: React Genesis - Next.js Fullstack App

This repository contains a **comprehensive Next.js web application** built during the **ALX ProDev Frontend** program. It demonstrates modern React development with TypeScript, Tailwind CSS, component-based architecture, and interaction with external APIs.

---

## 📚 Project Overview

The project showcases how to:
- Set up a scalable Next.js app with TypeScript & Tailwind CSS
- Implement reusable UI components following atomic design principles
- Fetch and display dynamic data from APIs (JSONPlaceholder)
- Use modals for user interaction (Create Posts/Users)
- Apply responsive design and clean folder architecture

---

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- **State Management**: React Hooks
- **Modal Handling**: Controlled components & props

---

## 📁 Project Structure
<pre>
alx-project-0x01/
├── components/
│ ├── common/ # Reusable UI components (Button, PostCard, UserCard, Modals)
│ └── layout/ # Layout components (Header, Footer)
├── interfaces/ # TypeScript interfaces and types
├── pages/
│ ├── posts/ # Posts page
│ ├── users/ # Users page
│ └── index.tsx # Home page
├── public/ # Static assets (images)
├── styles/ # Global styles (Tailwind directives)
└── ...
</pre>


---

## 🧪 Features

### ✅ Navigation
- Header with links to `Home`, `Posts`, and `Users`
- Navigates without page reload (Next.js routing)

### 📄 Posts Page
- Fetches posts from JSONPlaceholder API
- Renders individual `PostCard` components
- `Add Post` button triggers a `PostModal` form
- New post data is captured and appended locally

### 👥 Users Page
- Fetches user data from API
- Displays each user via `UserCard` component
- `Add User` opens a dynamic `UserModal` form
- Handles complex nested data (address, company)

---

## 🧠 Concepts Applied

- **Type Safety**: Strong typing using TypeScript interfaces
- **Component Reuse**: Atomic design for maintainability
- **Props & Events**: Custom props + event handlers for modals
- **Static Generation**: Used `getStaticProps` for pre-rendering
- **State Management**: Local state managed using React hooks
- **Responsive UI**: Fully styled with Tailwind CSS utility classes

---
