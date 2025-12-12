import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <USPSection />
      <FeaturesGrid />
      <ComparisonTable />
      <DownloadSection />
      <Footer />
    </div>
  );
}
