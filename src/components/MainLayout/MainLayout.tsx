import { Header } from "..";
import { MainLayoutType } from "../../types";

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
