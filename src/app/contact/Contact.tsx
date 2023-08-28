import useMediaQuery from "@/components/hooks/useMediaQuery";
import Image from "next/image";
import ContactForm from "@/components/ux/contact/form-contact";
const Contact = () => {

    return (
        <div id="contact" className="flex items-center justify-center w-full h-screen xl:px-20 pt-10">
            <ContactForm />
        </div>
    )
}

export default Contact;