# 📝 Todo App

A modern full-stack Todo Application built with Node.js, Express.js, MongoDB, EJS, and Bootstrap.

This application allows users to securely manage their personal tasks with authentication, task tracking, search functionality, dark/light mode, and a responsive dashboard.

---

## 🚀 Live Features

### 🔐 User Authentication

- User Signup
- User Login
- User Logout
- Session-based Authentication
- Protected Routes

### ✅ Task Management

- Create Todo
- View Todo Details
- Edit Todo
- Delete Todo
- Mark Task as Complete
- Personal Todo Dashboard

### 📊 Dashboard Features

- Total Tasks Counter
- Completed Tasks Counter
- Productivity Percentage
- Task Status Indicators

### 🔍 Search Functionality

- Search Todos by Title
- Instant Filtering Experience

### 🎨 Modern UI

- Responsive Design
- Bootstrap 5 Layout
- Dark / Light Mode
- Sticky Navbar
- Professional Dashboard Cards
- Mobile-Friendly Interface

---

## 📂 Project Structure

```bash
Todo-App
│
├── controllers
│   ├── todos.js
│   └── users.js
│
├── models
│   ├── todo.js
│   └── user.js
│
├── public
│   ├── style.css
│   └── script.js
│
├── routes
│   ├── todoRoutes.js
│   └── userRoutes.js
│
├── utils
│   └── wrapAsync.js
│
├── views
│   ├── includes
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts
│   │   └── boilerplate.ejs
│   │
│   ├── todos
│   │   ├── home.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   │
│   └── users
│       ├── login.ejs
│       └── signup.ejs
│
├── middleware.js
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local
- Express Session

### Utilities

- Method Override
- Dotenv
- Connect Flash

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Mayur-Rithe-14/todo-app.git
```

### Navigate to Project

```bash
cd todo-app
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

### Run Application

```bash
node server.js
```

or

```bash
nodemon server.js
```

---

## 📸 Screenshots

### Lading Page

![Landing Pag Preview](./screenshots/landing-page.png)
![](./screenshots/dark-page.png)

### Home Page

![Home Page Preview](./screenshots/home-page.png)

### Create Page

![Create Page Preview](./screenshots/create-page.png)

### Edit Page

![Create Page Preview](./screenshots/edit-page.png)

### Show Single Todo Page

![Create Page Preview](./screenshots/show-page.png)

### Signup Page

![Signup Page Preview](./screenshots/signup-page.png)

### Login Page

![Login Page Preview](./screenshots/signup-page.png)

---

## 🎯 Learning Outcomes

Through this project I learned:

- RESTful Routing
- MVC Architecture
- User Authentication
- Session Management
- MongoDB Relationships
- CRUD Operations
- Responsive Web Design
- Bootstrap UI Development
- Dark/Light Theme Implementation

---

## 👨‍💻 Author

**Mayur Rithe**

Aspiring Full-Stack (MERN) Developer passionate about building modern web applications and continuously learning new technologies.

### Connect With Me

- LinkedIn: https://www.linkedin.com/in/mayur-rithe-ab527a306/
- GitHub: https://github.com/Mayur-Rithe-14

---

## ⭐ Future Improvements

- Due Date Management
- Task Categories
- Priority Levels
- Drag & Drop Tasks
- Email Notifications
- React Frontend Version
- REST API Integration

---

### If you like this project, don't forget to ⭐ the repository.
