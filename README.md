

# BlogSpace – Full Stack Blog Application

## Live Demo

- Frontend: https://blog-space-lilac-nine.vercel.app/
- Backend: https://blog-space-u3sc.vercel.app/

BlogSpace is a full-stack blogging platform where users can register, log in, create and manage their blogs, and explore their own published content through a responsive dashboard.

## Features

- User Registration and Login
- Secure Password Hashing using bcrypt
- JWT-based Authentication
- Protected Routes
- User Profile Page
- Create, Read, Update, and Delete Blogs
- Individual Blog Details
- Blog Search and Category Filtering
- Published and Draft Blog Status
- User-specific Blog Management
- Responsive User Interface

## Technologies Used

**Frontend**
- React.js
- Vite
- React Router
- React Bootstrap
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

## Project Structure

```text
BlogSpace/
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/muqaddasmazhar200-sketch/BlogSpace.git
cd BlogSpace
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your own credentials. Do not upload your `.env` file to GitHub.

### 5. Run the Backend

From the `backend` folder:

```bash
npm run dev
```

### 6. Run the Frontend

Open another terminal in the project root:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Project Purpose

This project was developed as part of my MERN Stack Development internship at **Codomax Digital Solutions** to gain practical experience in full-stack web development, REST APIs, database integration, and authentication.

## Author

**MERN Stack Developer**

GitHub: [muqaddasmazhar200-sketch](https://github.com/muqaddasmazhar200-sketch)

