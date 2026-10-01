import Banner from "./components/home/Banner";
import CategoryTabs from "./components/home/CategoryTabs";
import CourseGrid from "./components/home/CourseGrid";
import DiscoverIntro from "./components/home/DiscoverIntro";
import PartnerLogos from "./components/home/PartnerLogos";

export default function App() {
  return (
    <main>
      <Banner />
      <PartnerLogos />
      <DiscoverIntro />
      <CategoryTabs />
      <CourseGrid />
    </main>
  );
}
