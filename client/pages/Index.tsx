import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import FeaturesGrid from "@/components/FeaturesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <USPSection />
      <ScreenshotCarousel />
      <FeaturesGrid />
      <ComparisonTable />
      <DownloadSection />
      <Footer />
    </div>
  );
}
