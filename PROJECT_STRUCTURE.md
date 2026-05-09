# IT System Project - Complete Restructure

## 🎯 Project Overview

Professional role-based IT support system with completely separated Admin and User dashboards.

## 📁 New Project Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Centralized authentication state
│
├── guards/
│   └── ProtectedRoute.jsx       # Role-based route protection
│
├── layouts/
│   ├── AdminLayout.jsx          # Admin dashboard layout
│   └── UserLayout.jsx           # User dashboard layout
│
├── pages/
│   ├── admin/
│   │   ├── AdminDashboardPage.jsx
│   │   ├── AdminTicketsPage.jsx
│   │   ├── AdminKnowledgePage.jsx
│   │   ├── AdminUsersPage.jsx
│   │   ├── AdminReportsPage.jsx
│   │   └── AdminSettingsPage.jsx
│   │
│   ├── user/
│   │   ├── UserDashboardPage.jsx
│   │   ├── UserTicketsPage.jsx
│   │   ├── UserAnalyticsPage.jsx
│   │   ├── UserKnowledgePage.jsx
│   │   └── UserSettingsPage.jsx
│   │
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   └── RegisterPage.jsx
│
├── components/
│   ├── admin/
│   │   ├── AdminSidebar.jsx
│   │   ├── AdminHeader.jsx
│   │   └── AdminKnowledgeBase.jsx
│   │
│   ├── user/
│   │   ├── UserSidebar.jsx
│   │   ├── UserSidebar.module.css
│   │   └── UserNavbar.jsx
│   │
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── LoginSidebar.jsx
│   │   ├── RegisterForm.jsx
│   │   └── RegisterSidebar.jsx
│   │
│   ├── analytics/
│   │   ├── StatsCards.jsx
│   │   ├── ChartsSection.jsx
│   │   └── EngineerPerformance.jsx
│   │
│   ├── UI/
│   │   └── Form/
│   │       └── TicketForm.jsx
│   │
│   ├── StatsCard.jsx
│   └── RecentActivity.jsx
│
├── hooks/
│   └── useAuthForm.js
│
├── utils/
│   └── validators.js
│
├── App.jsx
└── main.jsx
```

## 🔐 Authentication Flow

### Login Process
1. User selects role (User/Admin) on login page
2. Credentials validated against backend
3. JWT token stored in localStorage
4. User redirected based on role:
   - **Admin** → `/admin`
   - **User** → `/dashboard`

### Protected Routes
- All routes protected by `ProtectedRoute` guard
- Role verification on every route access
- Automatic redirect if unauthorized

## 🛣️ Routing Structure

### Admin Routes (`/admin`)
```
/admin                  → Admin Dashboard
/admin/tickets          → Tickets Management
/admin/knowledge        → Knowledge Base Management
/admin/users            → User Management
/admin/reports          → Reports & Analytics
/admin/settings         → System Settings
```

### User Routes (`/dashboard`)
```
/dashboard              → User Dashboard
/dashboard/tickets      → My Tickets
/dashboard/analytics    → Analytics View
/dashboard/knowledge    → Knowledge Base
/dashboard/settings     → User Settings
```

### Public Routes
```
/                       → Landing Page
/login                  → Login Page
/register               → Registration Page
```

## 🎨 UI Components

### Admin Sidebar
- White background
- Clean professional design
- Navigation items:
  - Dashboard
  - Tickets
  - Knowledge Base
  - Users
  - Reports
  - Settings
- Logout button at bottom

### User Sidebar
- Dark gradient background (#1a1a2e → #16213e)
- Modern design with icons
- Navigation items:
  - Dashboard
  - Tickets
  - Knowledge Base
  - Analytics
  - Settings
- "Create Request" button
- Logout button

### User Navbar
- Fixed top navigation
- Search bar
- Notifications bell
- User avatar

## 🔒 Security Features

1. **JWT Authentication**
   - Token stored in localStorage
   - Validated on every protected route

2. **Role-Based Access Control**
   - Admin cannot access user routes
   - User cannot access admin routes
   - Automatic redirect on unauthorized access

3. **Protected Route Guard**
   - Checks authentication status
   - Verifies user role
   - Shows loading state during verification

## 🚀 Key Features

### Separation of Concerns
- ✅ Completely separate admin and user interfaces
- ✅ Independent routing structures
- ✅ Dedicated components for each role
- ✅ No code overlap between roles

### Clean Architecture
- ✅ Context API for state management
- ✅ Custom hooks for reusable logic
- ✅ Modular component structure
- ✅ Consistent naming conventions

### User Experience
- ✅ Role-based navigation
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ Smooth transitions

## 📝 Usage

### Running the Project
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Login Credentials
**Admin:**
- Email: admin@example.com
- Password: admin123
- Role: Select "Admin"

**User:**
- Email: user@example.com
- Password: user123
- Role: Select "User"

## 🔧 Configuration

### Environment Variables
Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api
```

### Backend API Endpoints
- POST `/api/login` - User authentication
- POST `/api/register` - User registration
- GET `/api/tickets` - Fetch tickets
- POST `/api/tickets` - Create ticket

## 📦 Dependencies

- React 18
- React Router DOM 6
- Bootstrap 5
- Bootstrap Icons
- Lucide React (for analytics icons)

## 🎯 Future Enhancements

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] File upload for tickets
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search filters

## 👥 Roles & Permissions

### Admin
- Full system access
- Manage all tickets
- User management
- System configuration
- View reports and analytics
- Knowledge base management

### User
- Create and view own tickets
- Access knowledge base
- View personal analytics
- Update profile settings
- Submit support requests

## 🐛 Troubleshooting

### Common Issues

**Issue:** Cannot login
- Check backend is running
- Verify API endpoint in LoginForm.jsx
- Check browser console for errors

**Issue:** Redirected to wrong dashboard
- Clear localStorage
- Check role in user object
- Verify ProtectedRoute logic

**Issue:** Sidebar not showing
- Check CSS module imports
- Verify component paths
- Check responsive breakpoints

## 📄 License

MIT License - Feel free to use for your projects

## 👨‍💻 Author

IT System Development Team

---

**Last Updated:** 2024
**Version:** 2.0.0
