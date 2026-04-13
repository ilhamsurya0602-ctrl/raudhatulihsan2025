import foto1 from "./../assets/Galery-1.jpg";
import foto2 from "./../assets/Galery-2.jpg";

import video1 from "./../assets/Video-1.mp4"
import video2 from "./../assets/Video-2.mp4"

import "./../styles/Gallery.css";
function Gallery() {
  return (
    <div className="gallery">
      <h2>Galeri Foto</h2>
      <div className="gallery-grid">
        <img src={foto1} alt="Foto 1" />
        <img src={foto2} alt="Foto 2" />
      </div>
      <h2>Galeri Video</h2>
      <div className="gallery-grid">
        <video src={video1} controls />
        <video src={video2} controls />
      </div>
    </div>
  );
}

export default Gallery;
