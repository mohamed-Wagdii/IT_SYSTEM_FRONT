// src/components/ProtectedRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";

// ✅ هذا الكومبوننت هو حل مشكلة Admin/User بنفس الداش بورد
// بيتحقق من الـ role قبل ما يفتح أي صفحة

function ProtectedRoute({ children, requiredRole }) {
  // جيب بيانات اليوزر من localStorage
  const userData = localStorage.getItem("user");

  // لو مفيش يوزر خالص → روح لصفحة اللوجين
  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  // حول الـ string لـ object عشان تقدر تقرأ الـ role
  const user = JSON.parse(userData);

  // لو الـ role مش مطابق → روح لصفحة مناسبة
  if (requiredRole && user.role !== requiredRole) {
    // لو أدمن حاول يدخل على user dashboard → روحه على admin
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    // لو user حاول يدخل على admin dashboard → روحه على user
    return <Navigate to="/dashboard" replace />;
  }

  // كل حاجة تمام → اعرض الصفحة
  return children;
}

export default ProtectedRoute;