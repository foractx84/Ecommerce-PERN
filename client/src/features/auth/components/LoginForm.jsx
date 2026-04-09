import Button from '../../../components/ui/Button/Button';
import AuthFormHeader from './AuthFormHeader';

function LoginForm() {
  const inputClass =
    'w-full border-b border-black/30 pb-3 text-base text-black outline-none placeholder:text-black/40';

  return (
    <div className="w-full max-w-[370px]">
      <AuthFormHeader
        title="Log in to Exclusive"
        subtitle="Enter your details below"
      />

      <form className="mt-12 space-y-10">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className={inputClass}
        />

        <input type="password" placeholder="Password" className={inputClass} />

        <div className="flex items-center justify-between gap-4">
          <Button
            type="submit"
            className="rounded-[4px] bg-red-500 px-12 py-4 text-base font-medium text-white transition hover:bg-red-600"
          >
            Log In
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