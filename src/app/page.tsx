import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle';
import { SwitchDemo } from '@/components/switch-demo';
import { NavigationMenuDemo } from '@/components/Header';
const Feed = () => {
    return(
    <main className="flex flex-col min-h-screen  items-center justify-between p-10">
        <div className="z-10 flex w-full items-center justify-center lg:flex">
            <NavigationMenuDemo />
        </div>
    </main>
    )
}

export default Feed;