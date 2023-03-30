import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import VideoSection from "../components/VideoSection";

export function Home() {
  return (
    <>
    <div className="homePage">
      <NavBar />
      <Hero
        heroImg = 'fullSizeImg'
        heroSrc="assets/img16.jpg"
        
        title="DISCOVER ROMANIA"
        text="Get ready to meet your next holiday destination. Check out interesting facts and the photo gallery."
        heroButton = 'show-button'
      />
      <VideoSection />
    
    </div>
    </>
  );
}
