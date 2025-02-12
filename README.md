![xyzCompany](https://github.com/user-attachments/assets/8b49f975-d55d-4b7f-8f14-ac9c505f3af0)

# Asset Management System

## 🚀 Live Site URL
[xyz_company](https://xyzcompany-9211e.web.app)

## 🛠 Admin Credentials
- **HR Email:** `admin@xyz.com`
- **HR Password:** `Admin123!`

---

## 📌 Project Description
The **Asset Management System** is a web application designed to help companies manage their assets efficiently. This tool allows HR Managers to track returnable and non-returnable assets while also handling employee records. Employees can request, return, and monitor assets assigned to them.

---

## 🔑 Key Features
1. **User Roles:**
   - **HR Manager Dashboard:** Full control of assets and employee records.
   - **Employee Dashboard:** Request, return, and view allocated assets.

2. **Authentication:**
   - Email/Password-based login with JWT stored in local storage.
   - Social login (e.g., Google).

3. **CRUD Operations:**
   - Sweet alerts and toast notifications for CRUD operations and authentication actions.

4. **Responsive Design:**
   - Fully optimized for mobile, tablet, and desktop views.

5. **Dynamic Data Handling:**
   - TanStack Query used for GET requests.
   - Server-side search, filtering, and sorting.

6. **Pagination:**
   - Server-side pagination for all tables (10 entries per page).

7. **Package Management:**
   - HR Managers can purchase packages to increase employee limits.

8. **Data Visualization:**
   - Pie chart showing returnable vs. non-returnable items requested by employees.

9. **Environment Variables:**
   - Firebase configuration and MongoDB credentials secured using environment variables.

---

## 🛠 Technical Stack
### **Frontend**
- React.js with Hooks and Context API
- Tailwind CSS for styling
- React Toastify for notifications
- TanStack Query for efficient data fetching
- React Select for dropdowns
- React PDF for generating printable documents
- React Helmet for SEO

### **Backend**
- Node.js and Express.js
- MongoDB with Mongoose
- JWT for authentication
- Axios for API requests with interceptors

### **Deployment**
- **Frontend:** Vercel
- **Backend:** Render

---

## 📋 Installation Instructions

### Prerequisites
- Node.js installed
- MongoDB connection URI
- Firebase project setup for authentication

### Steps
1. Clone the repositories:
   - **Client Side:** [GitHub Client Repo](https://github.com/wptasmina/xyz-company-client)
   - **Server Side:** [GitHub Server Repo](https://github.com/wptasmina/xyz-company-server)

2. **Setup Backend**:
   - Navigate to the server directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following:
     ```env
     PORT=5000
     JWT_SECRET=your_jwt_secret
     MONGO_URI=your_mongodb_connection_uri
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Setup Frontend**:
   - Navigate to the client directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     ```
   - Start the client:
     ```bash
     npm start
     ```

---

## 🔍 Features in Detail

### **Navbar**
- **Without Login:** Contains links to Home, Join as Employee, Join as HR Manager, and Login.
- **After Login (Employee):** Contains Home, My Assets, My Team, Request for an Asset, Profile, and Logout.
- **After Login (HR Manager):** Contains Home, Asset List, Add an Asset, All Requests, My Employee List, Add an Employee, Profile, and Logout.

### **Home Page**
- **Without Login:** Includes a banner, about section, and packages section.
  - **Banner Section:** Two image sliders with buttons to join as an HR Manager or Employee.
  - **About Section:** Static details about the platform.
  - **Packages Section:** Displays three packages (5 members for $5, 10 members for $8, 20 members for $15).
- **After Login (Employee):** Displays pending requests, monthly requests, and additional sections (e.g., Calendar, Events).
- **After Login (HR Manager):** Displays pending requests, top requested items, limited stock items, and a pie chart for asset requests.

### **Asset Management**
- Employees can:
  - Search and filter requested assets.
  - Cancel pending requests, return approved returnable assets, or print asset details.
  - Request new assets with notes.
- HR Managers can:
  - Add, update, and delete assets.
  - Approve/reject asset requests.

### **Employee Management**
- HR Managers can:
  - View employee lists and remove members from teams.
  - Add multiple employees at once.
  - Purchase packages to increase employee limits.

### **Profile Page**
- Both roles can view and update personal information (except email).

### **Payment Integration**
- HR Managers can purchase packages for team expansion via a dedicated payment page.

---

## 🏆 Challenges Implemented
1. Used **TanStack Query** for efficient GET requests.
2. JWT-based authentication with tokens stored in local storage.
3. React Helmet for SEO.
4. Server-side search, filtering, and pagination.
5. Bulk employee addition using a single API call.

---

## 📤 Submission Information
- **Assignment Category/Variant:** HR email: `admin@xyz.com` | HR password: `Admin123!`
- **Front-end Live Site Link:** [Frontend](#)
- **Client Side GitHub Repository Link:** [Client Repo](#)
- **Server Side GitHub Repository Link:** [Server Repo](#)

