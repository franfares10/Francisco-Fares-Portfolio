import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/Header";


const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <main className="flex flex-col items-center px-8 h-screen py-20">
        {children}
    </main>
  );
};

export default ProjectLayout;