function AuthFormHeader({ title, subtitle }) {
  return (
    <div>
      <h1 className="!text-[36px] font-medium leading-tight tracking-[0.04em] text-black">
        {title}
      </h1>
      <p className="mt-6 text-base text-black">{subtitle}</p>
    </div>
  );
}

export default AuthFormHeader;