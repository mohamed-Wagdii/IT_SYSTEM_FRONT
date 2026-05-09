export const validateRegister = ({ fullName, workEmail, department, password }) => {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!workEmail.trim()) {
    errors.workEmail = 'Work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
    errors.workEmail = 'Enter a valid email address.';
  }

  if (!department) {
    errors.department = 'Please select a department.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 12) {
    errors.password = 'Password must be at least 12 characters.';
  }

  return errors;
};

export const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email || !email.trim()) {
    errors.email = 'Email is required.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  }

  return errors;
};
