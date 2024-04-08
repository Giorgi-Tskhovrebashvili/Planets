import { Header, MobileHeader } from "..";
import { MainLayoutType } from "../../types";

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div>
      <MobileHeader />
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
