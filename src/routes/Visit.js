import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import VisitingTips from "../components/VisitingTips";

export function Visit() {
  return (
    <>
      <NavBar />
      <Hero
        heroImg="fullSizeImg"
        heroSrc="assets/img41.jpg"
        // title="VISITING TIPS"
        heroButton = 'hide-button'
      />
      <VisitingTips />
    </>
  );
}
