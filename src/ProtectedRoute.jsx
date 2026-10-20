import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // १. टोकन नसेल तर लॉगिनसाठी अडवणे
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // २. रोल आधारित तपासणी (उदा. Customer ला Agent च्या पेजवर जाण्यापासून रोखणे)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;