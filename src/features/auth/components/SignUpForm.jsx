import { useState } from 'react';
import AuthFormHeader from './AuthFormHeader';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authApi';
import Button from '../../../components/ui/Button/Button';

function SignUpForm() {
  const navigate = useNavigate();

  const inputClass =
    'w-full border-b border-black/30 pb-3 text-base text-black outline-none placeholder:text-black/40';

  const [formData, setFormData] = useState({
    name: '',
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
      const data = await registerUser(formData);
      console.log('Register success:', data);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[370px]">
      <AuthFormHeader
        title="Create an account"
        subtitle="Enter your details below"
      />

      <form onSubmit={handleSubmit} className="mt-12 space-y-10">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={inputClass}
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email or Phone Number"
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className={inputClass}
          value={formData.password}
          onChange={handleChange}
        />

        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : null}

        <div className="space-y-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-[4px] bg-red-500 py-4 text-base font-medium text-white transition hover:bg-red-600"
          >
            {isLoading ? 'Creating...' : 'Create Account'}
          </Button>

          <Button
            type="button"
            variant="white"
            className="flex w-full items-center justify-center gap-4 rounded-[4px] border border-black/20 py-4 text-base text-black"
          >
            <span className="text-lg font-semibold">G</span>
            <span>Sign up with Google</span>
          </Button>
        </div>

        <p className="text-center text-base text-black/70">
          Already have account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="border-b border-black/40 text-black"
          >
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;