import { NavigationMenuDemo } from "@/components/Header";


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen  items-center p-10 pl-20 pr-20">
    <div className="z-10 flex w-full items-center justify-center lg:flex">
        <NavigationMenuDemo />
    </div>
    <div className="p-20">
      {children}
    </div>
    </main>
  );
};

export default ProfileLayout;
