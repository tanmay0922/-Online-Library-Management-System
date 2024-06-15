
# Online Library Management System

## Overview
The Online Library Management System is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage books in a library, including functionalities for adding books, viewing the library catalog, and user authentication.

## Features
- **User Authentication**: Secure user registration and login using JWT.
- **Book Management**: Add, view, and manage books in the library.
- **Responsive Design**: User-friendly and responsive interface.

## Technologies Used
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/online-library-system.git
   cd online-library-system/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
### Running the Application
1. Ensure MongoDB is running.
2. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
3. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

### API Endpoints
- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`
- **Add Book**: `POST /api/books` (Authorization: Bearer `<JWT Token>`)
- **Get Books**: `GET /api/books`

### Example API Requests
- **Register User**:
  ```json
  POST http://localhost:5000/api/auth/register
  {
    "username": "testuser",
    "name": "Test User",
    "email": "testuser@example.com",
    "password": "password123",
    "contactNumber": "1234567890"
  }
  ```

- **Login User**:
  ```json
  POST http://localhost:5000/api/auth/login
  {
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

- **Add Book**:
  ```json
  POST http://localhost:5000/api/books
  Headers: {
    "Authorization": "Bearer <JWT Token>"
  }
  {
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "availabilityStatus": true
  }
  ```

- **Get Books**:
  ```json
  GET http://localhost:5000/api/books
  ```

## Folder Structure
```
online-library-system/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── server.js
  │   ├── .env
  │   └── package.json
  ├── frontend/
  │   ├── public/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── App.js
  │   │   ├── index.js
  │   │   └── ...
  │   ├── .env
  │   └── package.json
  ├── README.md
  └── .gitignore
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any features, improvements, or bug fixes.


