// src/pages/RegisterPage.jsx
import RegisterSidebar from '../components/auth/RegisterSidebar';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="d-flex min-vh-100">
      <RegisterSidebar />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;