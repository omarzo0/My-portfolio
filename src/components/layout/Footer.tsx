import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const SocialIcons = {
    Github: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    ),
    Linkedin: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
    Twitter: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
    ),
    Facebook: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    )
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border mt-auto py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <Link href="/" className="text-xl font-bold">
                        {siteConfig.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-sm font-medium">Connect with me</p>
                    <div className="flex items-center gap-4">
                        <Link
                            href={siteConfig.socials.github}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <SocialIcons.Github />
                        </Link>
                        <Link
                            href={siteConfig.socials.linkedin}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <SocialIcons.Linkedin />
                        </Link>
                        <Link
                            href={siteConfig.socials.twitter}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <SocialIcons.Twitter />
                        </Link>
                        <Link
                            href={siteConfig.socials.facebook}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <SocialIcons.Facebook />
                        </Link>
                    </div>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground max-w-xs">
                        Built with Next.js, Tailwind CSS, and Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
