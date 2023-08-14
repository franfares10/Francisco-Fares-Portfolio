"use client"
import useMediaQuery from "@/components/hooks/useMediaQuery";
import Image from "next/image";
import ContactForm from "@/components/ux/contact/form-contact";
const Contact = () => {
    const { isMobile } = useMediaQuery();

    if (isMobile) {
        return (
            <p>HOLA</p>
        )
    }

    return (
            <div id="contact" className="flex items-center justify-center w-full h-screen px-20 pt-20">
               <ContactForm/>
            </div>
    )
}

export default Contact;