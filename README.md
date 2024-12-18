# KeyNest - Secure Password Manager

KeyNest is a modern, secure password manager built with React and MongoDB, featuring a sleek dark theme interface and robust credential management capabilities.


## 🚀 Features

- **Secure Storage**: Safely store and manage your credentials
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Quick Actions**: Copy, edit, and delete credentials with ease
- **Real-time Feedback**: Toast notifications for all user actions
- **Responsive Design**: Works seamlessly across all device sizes

## 🛠️ Tech Stack

- **Frontend**:
  - React 18
  - Tailwind CSS
  - React Toastify
  - UUID

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - CORS

## 📁 Project Structure

```
KeyNest/
├── backend/
│   ├── server.js          # Express server setup
│   └── .env              # Environment variables
├── src/
│   ├── components/       # React components
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── Manager.jsx
│   │   ├── Navbar.jsx
│   │   ├── PasswordForm.jsx
│   │   └── PasswordTable.jsx
│   ├── utils/
│   │   └── toast.js     # Toast notification utilities
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
└── README.md
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/kstubhieeeee/keynest.git
   cd keynest
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In backend/.env
   MONGO_URI=mongodb://localhost:27017/
   DB_NAME=keynest
   ```

4. **Start the development servers**
   ```bash
   # Start backend server (from backend directory)
   node server.js

   # Start frontend development server (from root directory)
   npm run dev
   ```

## 💻 Usage

1. **Adding Credentials**
   - Fill in the website URL, username, and password
   - Click "Add Password" to save

2. **Managing Credentials**
   - Copy: Click the copy icon next to any field
   - Edit: Click the edit icon to modify credentials
   - Delete: Click the delete icon to remove credentials

3. **Security Features**
   - Password masking
   - Secure clipboard operations
   - Confirmation dialogs for destructive actions

## 🎨 UI Components

- **Logo**: Modern, animated logo with hover effects
- **PasswordForm**: Clean form with password visibility toggle
- **PasswordTable**: Responsive table with hover actions
- **Toast Notifications**: Different types for various actions
  - Success: Green notifications for successful actions
  - Error: Red notifications for failed operations
  - Warning: Yellow notifications for important alerts
  - Info: Blue notifications for general information

## 🔒 Security Considerations

- Passwords are stored securely in MongoDB
- Client-side password masking
- Secure API endpoints
- CORS protection
- Environment variable usage for sensitive data

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Kaustubh - [GitHub Profile](https://github.com/kstubhieeee)


Made with ❤️ using React and MongoDB

![image](https://github.com/user-attachments/assets/2e816be5-d87d-42b7-9d23-0e9c7b57d991)
![image](https://github.com/user-attachments/assets/e63cd5ed-448b-4d90-b369-393ba22b148d)
![image](https://github.com/user-attachments/assets/2b337f59-6e7c-4366-95bc-d33fc517ee4a)
