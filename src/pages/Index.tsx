import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import PhotoGallery from "@/components/PhotoGallery";
import LettersSection from "@/components/LettersSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
  
      <PhotoGallery />
      <LettersSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
