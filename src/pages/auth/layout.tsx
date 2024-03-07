import DesktopHeader from "@/Components/Navigation/DesktopHeader/Header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <DesktopHeader />
      {children}
    </div>
  );
};
export default AuthLayout;
