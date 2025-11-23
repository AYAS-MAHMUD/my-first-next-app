import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import PopulerItem from "@/component/PopulerItem";
import PromotionalBanner from "@/component/PromotionalBanner";
import Testimonial from "@/component/Testimonial";


export default function Home() {
  return (
    <div className="">
        <h1>
          <Hero/>
          <Feature/>
          <PopulerItem/>
          <Testimonial/>
          <PromotionalBanner/>
        </h1>
    </div>
  );
}
