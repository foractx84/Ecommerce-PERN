import AuthFormHeader from './AuthFormHeader';
import {useNavigate} from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';

function SignUpForm() {
  const navigate = useNavigate();
  const inputClass =
    'w-full border-b border-black/30 pb-3 text-base text-black outline-none placeholder:text-black/40';

  return (
    <div className="w-full max-w-[370px]">
      <AuthFormHeader
        title="Create an account"
        subtitle="Enter your details below"
      />

      <form className="mt-12 space-y-10">
        <input type="text" placeholder="Name" className={inputClass} />

        <input
          type="text"
          placeholder="Email or Phone Number"
          className={inputClass}
        />

        <input type="password" placeholder="Password" className={inputClass} />

        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full rounded-[4px] bg-red-500 py-4 text-base font-medium text-white transition hover:bg-red-600"
          >
            Create Account
          </Button>

          <Button
            type="button" variant='white'
            className="flex w-full items-center justify-center gap-4 rounded-[4px] border border-black/20 py-4 text-base text-black"
          >
            <span className="text-lg font-semibold">G</span>
            <span>Sign up with Google</span>
          </Button>
        </div>

        <p className="text-center text-base text-black/70">
          Already have account?{' '}
          <button type="button" onClick={() => navigate('/login')} className="border-b border-black/40 text-black">
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;