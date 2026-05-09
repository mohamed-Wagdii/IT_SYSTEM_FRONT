# Quick Reference Guide

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📍 Key Files

### Authentication
- `src/context/AuthContext.jsx` - Auth state management
- `src/guards/ProtectedRoute.jsx` - Route protection
- `src/components/auth/LoginForm.jsx` - Login logic

### Layouts
- `src/layouts/AdminLayout.jsx` - Admin wrapper
- `src/layouts/UserLayout.jsx` - User wrapper

### Admin Pages
- `src/pages/admin/AdminDashboardPage.jsx`
- `src/pages/admin/AdminTicketsPage.jsx`
- `src/pages/admin/AdminKnowledgePage.jsx`
- `src/pages/admin/AdminUsersPage.jsx`
- `src/pages/admin/AdminReportsPage.jsx`
- `src/pages/admin/AdminSettingsPage.jsx`

### User Pages
- `src/pages/user/UserDashboardPage.jsx`
- `src/pages/user/UserTicketsPage.jsx`
- `src/pages/user/UserAnalyticsPage.jsx`
- `src/pages/user/UserKnowledgePage.jsx`
- `src/pages/user/UserSettingsPage.jsx`

## 🔑 Using AuthContext

```jsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAdmin, isUser } = useAuth();
  
  return (
    <div>
      <p>Welcome {user?.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## 🛡️ Creating Protected Routes

```jsx
<Route
  path="/admin"
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<AdminDashboardPage />} />
</Route>
```

## 🎨 Adding New Admin Page

1. Create page in `src/pages/admin/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation item in `src/components/admin/AdminSidebar.jsx`

```jsx
// 1. Create page
export default function NewPage() {
  return <div>New Page Content</div>;
}

// 2. Add to App.jsx
import NewPage from './pages/admin/NewPage';
<Route path="newpage" element={<NewPage />} />

// 3. Add to AdminSidebar.jsx
const menuItems = [
  // ...
  { name: 'New Page', icon: 'bi-star', path: '/admin/newpage' },
];
```

## 🎨 Adding New User Page

Same process but in user directories:
- `src/pages/user/NewPage.jsx`
- Add route under `/dashboard`
- Update `src/components/user/UserSidebar.jsx`

## 🔄 Login Flow

```
User enters credentials
    ↓
LoginForm validates
    ↓
API call to backend
    ↓
Receive token + user data
    ↓
AuthContext.login() called
    ↓
Store in localStorage
    ↓
Navigate based on role
    ↓
Admin → /admin
User → /dashboard
```

## 🎯 Route Protection Logic

```
User tries to access route
    ↓
ProtectedRoute checks auth
    ↓
Not logged in? → /login
    ↓
Wrong role? → Redirect to correct dashboard
    ↓
Correct role? → Allow access
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 991px) {
  /* Sidebar becomes drawer */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  /* Adjust spacing */
}

/* Desktop */
@media (min-width: 992px) {
  /* Full layout */
}
```

## 🎨 Color Scheme

### Admin
- Primary: `#1e3a5f`
- Background: `#f9fafb`
- Sidebar: `#ffffff`
- Active: `#e8edf5`

### User
- Primary: `#3b5bdb`
- Background: `#f8fafc`
- Sidebar: `linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)`
- Active: `rgba(99, 130, 191, 0.25)`

## 🔧 Common Tasks

### Update User Profile
```jsx
const { user } = useAuth();
// user.username, user.email, user.role
```

### Check if Admin
```jsx
const { isAdmin } = useAuth();
if (isAdmin) {
  // Admin-only code
}
```

### Logout User
```jsx
const { logout } = useAuth();
<button onClick={logout}>Logout</button>
```

### Navigate Programmatically
```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/dashboard/tickets');
```

## 📦 Component Imports

```jsx
// Auth
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from '../guards/ProtectedRoute';

// Navigation
import { NavLink, useNavigate } from 'react-router-dom';

// Components
import UserSidebar from '../components/user/UserSidebar';
import AdminSidebar from '../components/admin/AdminSidebar';
```

## 🐛 Debug Tips

### Check Auth State
```jsx
const { user, loading } = useAuth();
console.log('User:', user);
console.log('Loading:', loading);
```

### Check localStorage
```javascript
console.log('Token:', localStorage.getItem('token'));
console.log('User:', localStorage.getItem('user'));
```

### Clear Auth Data
```javascript
localStorage.removeItem('token');
localStorage.removeItem('user');
window.location.reload();
```

## 📝 Code Style

- Use functional components
- Use hooks (useState, useEffect, useAuth)
- Export default for pages
- Named exports for utilities
- PascalCase for components
- camelCase for functions/variables

## ✅ Testing Checklist

- [ ] Login as admin → redirects to /admin
- [ ] Login as user → redirects to /dashboard
- [ ] Admin cannot access /dashboard
- [ ] User cannot access /admin
- [ ] Logout works from both dashboards
- [ ] All sidebar links navigate correctly
- [ ] Protected routes redirect when not authenticated
- [ ] Responsive design works on mobile

---

**Need Help?** Check PROJECT_STRUCTURE.md for detailed documentation
