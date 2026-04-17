import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Portfolio } from "@/components/home/Portfolio";
import { AIProjects } from "@/components/home/AIProjects";

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Portfolio"
                subtitle="Explore my latest projects, from academic achievements to professional client work."
            />
            <Portfolio />
            <AIProjects />
            <Footer />
        </>
    );
}
