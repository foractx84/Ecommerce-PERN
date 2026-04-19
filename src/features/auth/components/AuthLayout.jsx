import AuthImagePanel from './AuthImagePanel';

function AuthLayout({ children }) {
  return (
    <div className="bg-white text-black">
      <main className="mx-auto flex max-w-[1440px] flex-col gap-14 px-4 py-10 lg:flex-row lg:items-center lg:gap-[129px] lg:px-0 lg:py-16">
        <AuthImagePanel />

        <div className="w-full max-w-[370px]">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;