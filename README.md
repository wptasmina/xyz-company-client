
# 🏢 xyzCompany - Asset Management System

| Section | Details |
|:---|:---|
| **🚀 Live Site** | [xyz_company](https://xyzcompany-9211e.web.app) |
| **🛠 Admin Credentials** | - Email: `admin@xyz.com`<br>- Password: `Admin123!` |
| **📝 Project Overview** | A full-stack web application for efficient management of company assets. HR Managers can manage assets and employees, while Employees can request, track, and return assets. |
| **🔑 Key Features** | - Role-based dashboards (HR & Employee) <br> - JWT authentication (email/password & Google login) <br> - CRUD operations with alerts & notifications <br> - Server-side search, filter, pagination <br> - Payment integration for package expansion <br> - Real-time asset tracking with TanStack Query <br> - SEO Optimization with React Helmet |
| **🛠 Technology Stack** | - **Frontend:** React.js, Tailwind CSS, React Toastify, TanStack Query, React Select, React PDF, React Helmet <br> - **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Axios Interceptors <br> - **Authentication:** Firebase Authentication (Email/Password & Google) <br> - **Deployment:** Vercel (Frontend) & Render (Backend) |

---

## 🗂 Pages Overview

| Page | Description |
|:---|:---|
| **Home Page** | Public landing page with platform intro, packages, and call-to-action banners. |
| **Login / Register** | Secure authentication system with email/password and Google sign-in. |
| **Employee Dashboard** | View assigned assets, request new ones, and manage personal profile. |
| **HR Manager Dashboard** | Manage assets, employees, pending requests, and purchase packages. |
| **Asset Management** | Add, update, delete assets; approve/reject asset requests. |
| **Employee Management** | Add single/multiple employees, view employee records. |
| **Payment Page** | HR Managers can purchase packages to increase employee limits. |
| **Profile Page** | View and update profile details (email editing restricted). |

---

## 🧩 Key Features Overview

| Feature | Details |
|:---|:---|
| **Role-Based Access** | Different dashboards and permissions for HR and Employee roles. |
| **Authentication** | Secure login with email/password and Google; token management with JWT. |
| **Real-Time Data** | Data fetching and caching with TanStack Query for faster performance. |
| **Server-Side Operations** | Search, filter, and paginate large datasets efficiently from backend. |
| **Dynamic Asset & Employee Management** | Real-time asset requests, returns, and employee data handling. |
| **Payment Integration** | Expand employee limit by purchasing packages through secure payments. |
| **Responsive Design** | Fully mobile, tablet, and desktop responsive UI. |
| **SEO Optimized** | Meta tags and page titles managed via React Helmet for better visibility. |
| **Bulk Employee Addition** | Upload multiple employees at once with a single API request. |
| **PDF Generation** | Employees can generate printable asset assignment PDFs. |

---

## 🛠️ Technology Stack (Detailed)

| Category | Technologies |
|:---|:---|
| **Frontend** | React.js (Hooks, Context API), Tailwind CSS, React Toastify, React Select, TanStack Query, React PDF, React Helmet |
| **Backend** | Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, Axios Interceptors |
| **Authentication** | Firebase Authentication (Email/Password, Google OAuth) |
| **Deployment** | Vercel (Client), Render (Server) |

---

🧪 How to Run the Project Locally

Step	Commands / Instructions
1. Clone Repositories	- Client:
git clone https://github.com/wptasmina/xyz-company-client

- Server:
git clone https://github.com/wptasmina/xyz-company-server
2. Backend Setup	- Navigate to server folder:
cd xyz-company-server

- Install dependencies:
npm install

- Create a .env file with the following variables:
env<br>PORT=5000<br>JWT_SECRET=your_jwt_secret<br>MONGO_URI=your_mongo_uri<br>

- Start the server:
nodemon index.js
3. Frontend Setup	- Navigate to client folder:
cd xyz-company-client

- Install dependencies:
npm install

- Create a .env file with the following variables:
env<br>VITE_FIREBASE_API_KEY=your_firebase_api_key<br>VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain<br>VITE_FIREBASE_PROJECT_ID=your_project_id<br>

- Start the client:
npm run dev

---

## 💳 Payment System Details

| Feature | Description |
|:---|:---|
| **Package Purchase** | HR Managers can buy employee packages (5, 10, or 20) to increase their team size. |
| **Secure Transactions** | Payment gateway integration ensures secure transactions. |
| **Instant Updates** | New employee slots are immediately reflected after successful payment. |

---

## 🎯 Challenges Successfully Handled

| Challenge | Solution |
|:---|:---|
| **Advanced Server-Side Pagination** | Handled on server to manage large data efficiently. |
| **JWT Secured Routes** | All protected routes secured via JSON Web Tokens. |
| **SEO Optimization** | React Helmet used for dynamic meta tags. |
| **Bulk Employee Upload** | Enabled HR Managers to add multiple employees at once. |
| **Database Query Optimization** | MongoDB queries optimized for faster response times. |

---

## 📤 Repositories and Live Links

| Type | Link |
|:---|:---|
| **Frontend Repository** | [xyz-company-client](https://github.com/wptasmina/xyz-company-client) |
| **Backend Repository** | [xyz-company-server](https://github.com/wptasmina/xyz-company-server) |
| **Live Site** | [xyz_company](https://xyzcompany-9211e.web.app) |

---

# 🚀 Ready to Transform Asset Management with xyzCompany!

---

✅ Ei format ta GitHub e ekdom **Professional Open-Source Project** er moto dekhabe.  
✅ Structured, easy to scan, modern presentation.
