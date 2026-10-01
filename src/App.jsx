import Banner from "./components/home/Banner";
import CallToAction from "./components/home/CallToAction";
import CategoryTabs from "./components/home/CategoryTabs";
import CourseGrid from "./components/home/CourseGrid";
import DiscoverIntro from "./components/home/DiscoverIntro";
import ExploreIntro from "./components/home/ExploreIntro";
import Features from "./components/home/Features";
import PartnerLogos from "./components/home/PartnerLogos";
import PathCards from "./components/home/PathCards";
import Testimonials from "./components/home/Testimonials";

export default function App() {
  return (
    <main>
      <Banner />
      <PartnerLogos />
      <DiscoverIntro />
      <CategoryTabs />
      <CourseGrid />
      <ExploreIntro />
      <PathCards />
      <Features />
      <CallToAction />
      <Testimonials />
    </main>
  );
}
