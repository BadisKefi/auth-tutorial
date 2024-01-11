const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
