# ⚽ GoalGear – Football Kits eCommerce Platform

**GoalGear** is a full-featured MERN stack eCommerce website tailored for football enthusiasts. Users can browse a curated collection of football kits, add them to their cart, and securely checkout using Razorpay. The platform includes an admin panel for product uploads, secure user authentication, and email notifications.

## 🌐 Live Demo

🔗 [GoalGear Live](https://goal-gear.vercel.app/)

---

## 🛍️ Features

- 🧾 Product listing with images, sizes, prices, and descriptions
- 🛒 Add to Cart & Remove from Cart
- 🔐 JWT-based authentication (secure cookies)
- 👤 User profile and protected routes
- 🧑‍💼 Admin panel for adding products (via Multer + Cloudinary)
- 💳 Razorpay integration for secure payments
- 📧 Email confirmation with Nodemailer
- 📱 Responsive design using Tailwind CSS

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| **Frontend**| React.js, Tailwind CSS, React Router |
| **Backend** | Node.js, Express.js                  |
| **Database**| MongoDB + Mongoose                   |
| **Auth**    | JWT + HTTP-only cookies              |
| **Uploads** | Multer + Cloudinary                  |
| **Email**   | Nodemailer                           |
| **Payments**| Razorpay                             |
| **Deployment** | Vercel (Frontend) + Render (Backend) |

---


## 🔐 Environment Variables

### Backend `.env`
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


git clone https://github.com/ChasangBhutia/GoalGear.git
cd goalgear

cd server
npm install
node app.js

cd client
npm install
npm run dev

