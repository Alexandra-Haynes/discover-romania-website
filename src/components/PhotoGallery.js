import { PhotosData } from "../components/PhotoData";
import './PhotosStyles.css'

 function PhotoGallery() {
  return (
    <>
      <div className="photoGallery">
        <ul>
          {PhotosData.map((item) => {
            return (
              <li key={item.id} className='item'>
                <img src={item.imageSrc} alt={item.description} />
                <h3> {item.description} </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PhotoGallery;