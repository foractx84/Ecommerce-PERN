import Button from '../../../components/ui/Button/Button';
import AuthFormHeader from './AuthFormHeader';
import { loginUser } from '../api/authApi';
import { useState } from 'react';


function LoginForm() {
  const inputClass =
    'w-full border-b border-black/30 pb-3 text-base text-black outline-none placeholder:text-black/40';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await loginUser(formData);
      console.log('Login success:', data);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[370px]">
      <AuthFormHeader
        title="Log in to Exclusive"
        subtitle="Enter your details below"
      />

      <form onSubmit={handleSubmit} className="mt-12 space-y-10">
        <input
          type="text"
          name='email'
          placeholder="Email or Phone Number"
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
        />

        <input type="password" name='password' placeholder="Password" className={inputClass} value={formData.password}
        onChange={handleChange}/>

        <div className="flex items-center justify-between gap-4">
          <Button
            type="submit" disabled={isLoading}
            className="rounded-[4px] bg-red-500 px-12 py-4 text-base font-medium text-white transition hover:bg-red-600"
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </Button>

          <Button
            type="button" mode='text' onlyText={true}
            className="text-base text-red-500 transition hover:underline"
          >
            Forget Password?
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;