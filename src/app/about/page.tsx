import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { About } from "@/components/home/About";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="About Me"
                subtitle="Learn more about my journey, experience, and what drives me in the world of software engineering."
            />
            <About />
            <Footer />
        </>
    );
}
