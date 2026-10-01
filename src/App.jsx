import Banner from "./components/home/Banner";
import CategoryTabs from "./components/home/CategoryTabs";
import CourseGrid from "./components/home/CourseGrid";
import DiscoverIntro from "./components/home/DiscoverIntro";
import ExploreIntro from "./components/home/ExploreIntro";
import PartnerLogos from "./components/home/PartnerLogos";
import PathCards from "./components/home/PathCards";

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
    </main>
  );
}
