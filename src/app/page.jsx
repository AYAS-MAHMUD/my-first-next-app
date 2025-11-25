import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import PopulerItem from "@/component/PopulerItem";
import PromotionalBanner from "@/component/PromotionalBanner";
import Testimonial from "@/component/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <PopulerItem />
      <Testimonial />
      <PromotionalBanner />
    </div>
  );
}
