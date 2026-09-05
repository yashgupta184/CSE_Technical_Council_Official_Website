import { Hero } from "@/components/home/Hero";
import { QuickStats } from "@/components/home/QuickStats";
import { AboutCouncil } from "@/components/home/AboutCouncil";
import { ThreeCells } from "@/components/home/ThreeCells";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { ImpactAchievements } from "@/components/home/ImpactAchievements";
import { MomentsGallery } from "@/components/home/MomentsGallery";
import { TeamPreview } from "@/components/home/TeamPreview";
import { JoinCouncilCTA } from "@/components/home/JoinCouncilCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <AboutCouncil />
      <ThreeCells />
      <FeaturedEvents />
      <ImpactAchievements />
      <MomentsGallery />
      <TeamPreview />
      <JoinCouncilCTA />
    </>
  );
}
