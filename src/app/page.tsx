import { Hero } from "@/components/ui/Hero";

export default function Home() {
    return (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
            <div className="lg:col-span-full">
                <Hero />
            </div>
        </div>
    );
}
