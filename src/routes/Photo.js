import NavBar from "../components/NavBar";
import PhotoGallery from '../components/PhotoGallery';
import Hero from "../components/Hero";

export const Photo = () => {
  return (
    <>
      <NavBar />
      <Hero
        heroImg="smallSizeImg"
        heroSrc="assets/img40.jpg"
        title="PHOTO GALLERY"
        heroButton = 'hide-button'
      />
      <PhotoGallery />
    
    </>
  );
}
 