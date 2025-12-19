# Uservue - React Router User Management App 👤

**Multi-page React SPA demonstrating client-side routing, parameterized routes, and responsive navigation. Assignment Completed.**

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.8-green)](https://reactrouter.com/)
[![Responsive](https://img.shields.io/badge/Responsive-100%25-orange)](https://reactjs.org/)

## ✨ Features

- **🏠 Home Page** - Welcome message + navigation buttons
- **ℹ️ About Page** - App details + back navigation
- **👥 Users List** - Clickable user links to detail pages
- **👤 User Detail** - Dynamic `/users/:id` route parameters + Go Back
- **🧭 Persistent Navbar** - Active route highlighting on all pages
- **📱 Fully Responsive** - Mobile-first CSS design
- **🎁 Bonus Pages** - Contact

## 📱 Live Demo Screenshots

![Home Page](https://github.com/user-attachments/assets/489257f3-c3ae-4f68-ba6e-c245d17c8b87)
![Users List](https://github.com/user-attachments/assets/80b462ab-d5bd-4fef-b3c2-a38b6278fa51)
![User Detail `/users/1`](https://github.com/user-attachments/assets/33e4f60a-9a1e-4b83-9e78-d7a67da047c0)

![About Page](https://github.com/user-attachments/assets/07e81436-e530-4a04-9150-60aa88a83720) ![Mobile Responsive](https://github.com/user-attachments/assets/c3ed2c10-926c-4ce2-a4ff-9abfdf2daf75) ![Active Navbar](https://github.com/user-attachments/assets/fa679a45-a031-4cd8-9693-5f1e5bee3681)

) |

## 🏗️ Project Structure

src/
├── components/
│ └── Navbar.jsx
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Users.jsx
│ ├── UserDetail.jsx
│ ├── Contact.jsx
├── data/
│ └── users.js
├── App.jsx
├── index.css


## 🚀 Quick Start

Clone the repository
git clone https://github.com/shikeshjayan/Uservue---React-Router-User-Management-App.git
cd Uservue-React-Router

Install dependencies
npm install

Start development server
npm start

**Opens at `http://localhost:3000`**

## 🎯 Assignment-11 Requirements [file:11]

| Requirement | Status |
|-------------|--------|
| Home page with welcome + navigation buttons | ✅ |
| About page with details + back link | ✅ |
| Users list with clickable detail links | ✅ |
| User detail with route params + Go Back | ✅ |
| **Persistent navbar with active highlighting** | ✅ |
| Responsive design | ✅ |
| Proper component structure | ✅ |

## 🛠️ Tech Stack
React 18.2 + React Router 6.8 + CSS Grid/Flexbox
Single Page Application (SPA) - No page reloads!


## 📁 Mock User Data Structure
const users = [
{ id: 1, name: "John Doe", email: "john@example.com" },
{ id: 2, name: "Jane Smith", email: "jane@example.com" },
// 6-8+ users for testing
];

## 👨‍💻 Author

**Shikesh Jayan** 
---

⭐ **Star this repository!**  
📢 **Built with ❤️ for Assignment excellence**
