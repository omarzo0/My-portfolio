import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Contact } from "@/components/home/Contact";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Contact Me"
                subtitle="Ready to start a conversation? I'm just a message away. Let's build something great together."
            />
            <Contact />
            <Footer />
        </>
    );
}
