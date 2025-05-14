# 📦 Subscription Tracker API

A RESTful API for managing subscription services like Netflix, Prime, Spotify, etc. Easily track, add, update, and delete your subscriptions.

---

## 🚀 Features

- Add new subscriptions
- View all subscriptions
- Update existing subscriptions
- Delete subscriptions
- Store payment dates, costs, and platforms

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Environment Variables:** dotenv

---

## 📁 Folder Structure

SubscriptionTrackerApi/
├── config/ # MongoDB connection config ||
├── controllers/ # Logic for API endpoints ||
├── models/ # Mongoose schema ||
├── routes/ # Express routes||
├── .env # Environment variables (MONGO_URI, PORT)||
├── server.js # Entry point||
└── README.md # You're here||


---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/awadepavan/SubscriptionTrackerApi.git
   cd SubscriptionTrackerApi
Install dependencies:
npm install


Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string


Run the server:
npm start


📡 API Endpoints
All responses are in JSON format.

🔍 Get All Subscriptions
GET /api/subscriptions
Returns a list of all subscriptions.

➕ Add New Subscription
POST /api/subscriptions 
{
  "name": "Netflix",
  "cost": 499,
  "renewalDate": "2025-06-10",
  "platform": "Web"
}


✏️ Update Subscription
PUT /api/subscriptions/:id
Update a subscription by ID.
Body (example):
{
  "cost": 599
}


❌ Delete Subscription
DELETE /api/subscriptions/:id
Deletes the subscription with the given ID.
{
  "_id": "663a5abf899b7340b0d12345",
  "name": "Spotify",
  "cost": 129,
  "renewalDate": "2025-06-15",
  "platform": "Mobile",
  "createdAt": "2025-05-13T08:00:00.000Z"
}


📡 API Endpoints
🔐 Auth APIs (/api/auth)

✅ Register a new user
POST /api/auth/register

{
  "name": "Pavan Awade",
  "email": "pavan@example.com",
  "password": "securePassword"
}

{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "Pavan Awade",
    "email": "pavan@example.com"
  }
}
🔑 Login user
POST /api/auth/login

{
  "email": "pavan@example.com",
  "password": "securePassword"
}
Response: Same as register, returns JWT token.

👤 User APIs (/api/user)
(Requires Bearer Token in Authorization header)

👁️ Get user profile
GET /api/user/profile


{
  "_id": "user_id",
  "name": "Pavan Awade",
  "email": "pavan@example.com"
}
✏️ Update user profile
PUT /api/user/profile
Body:


{
  "name": "Updated Name",
  "email": "updated@example.com",
  "password": "newPassword"
}
❌ Delete user account
DELETE /api/user/profile
