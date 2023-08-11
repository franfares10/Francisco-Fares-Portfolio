import { NavigationMenuDemo } from "@/components/Header";
import Studies from "@/components/data/studies";


const StudiesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-20 flex items-center justify-center">
      {children}
    </div>
  );
};

export default StudiesLayout;
