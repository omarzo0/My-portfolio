import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Services } from "@/components/home/Services";

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="My Services"
                subtitle="Specialized solutions in full-stack development, software testing, and web security tailored to your needs."
            />
            <Services />
            <Footer />
        </>
    );
}
