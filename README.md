# 🛍️ PocketStore

## 🚀 Overview
PocketStore is a lightweight web application that allows users to manage products through a simple and intuitive interface. It includes authentication (login/signup) and a personalized dashboard where users can add, edit, and delete products.

The application uses **LocalStorage** for data persistence, making it fast, efficient, and easy to run without any backend setup.

---

## ✨ Features
- 🔐 User Signup & Login  
- 👤 User-specific dashboard  
- ➕ Add products  
- ✏️ Edit products  
- ❌ Delete products  
- 💾 Data stored using LocalStorage  
- ⚡ Instant UI updates  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Storage:** Browser LocalStorage  
- **Architecture:** Vanilla JS (no frameworks)

---

## 📂 Project Structure

```
PocketStore/
│
├── index.html          # Login / Signup page
├── dashboard.html      # Product dashboard
│
├── style.css           # Login styles
├── dashboard.css       # Dashboard styles
│
├── script.js           # Auth logic
├── dashboard.js        # Product CRUD logic
│
└── README.md
```

---

## ⚙️ How It Works
1. Users sign up and log in  
2. User data is stored in LocalStorage  
3. After login, users are redirected to the dashboard  
4. Each user manages their own product list  
5. Products are stored using a unique key per user  

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/hardik-mahajan20/PocketStore.git
cd PocketStore
```

### 2️⃣ Run the Project

Simply open:
```bash
index.html
```

Or use a local server:
```bash
npx live-server
```

---

## 🔐 Important Notes
- This project uses LocalStorage (not secure for production)  
- Data will be lost if browser storage is cleared  
- Intended for learning and demonstration purposes  

---

## 🚀 Future Improvements
- 🔐 Backend authentication (JWT / API)  
- 🗄️ Database integration  
- 🎨 UI enhancements  
- 🔍 Search & filter functionality  
- 📱 Mobile optimization  

---

## 🤝 Contributing
Contributions are welcome!

1. Fork the repo  
2. Create a new branch  
3. Commit changes  
4. Open a Pull Request  

---

## 👨‍💻 Author
Developed by Hardik Mahajan
