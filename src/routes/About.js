import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Facts } from "../components/Facts";

export function About() {
  return (
    <>
      <NavBar />
      <Hero
        heroImg="smallSizeImg"
        heroSrc="assets/img9.jpg"
        title=" 10 INTERESTING FACTS"
        heroButton = 'hide-button'
      />

      <Facts />
    </>
  );
}
