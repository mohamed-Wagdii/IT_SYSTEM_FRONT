import LoginSidebar from '../components/auth/LoginSidebar';
import LoginForm from '../components/auth/LoginForm';
 
const LoginPage = () => {
  return (
    <div className="d-flex min-vh-100">
      <LoginSidebar />
      <LoginForm />
    </div>
  );
};
 
export default LoginPage;
 