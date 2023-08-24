import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import coderhouse from "../../../assets/coderhouse.png";
type Company = {
    name: string;
    location: string;
    description: string[];
    image: StaticImageData;
    date: string;
    url: string;
}

interface Props {
    company: Company
}

const CompanyAvatar = ({
    company,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <Link href={company.url}>
            <Avatar className="aspect-square h-full w-full flex items-center justify-center">
                <Image src={company.image} alt=""/>
            </Avatar>
        </Link>
    )
}

export default CompanyAvatar;