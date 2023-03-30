import "./VideoSectionStyles.css";

function VideoSection() {
  return (
    <>
      <div className="video-container">
        <video controls autoPlay loop muted >
          <source src="assets/backgroundvideo.mp4" type="video/mp4" />
        </video>

        <div className="video-credit">
          <h4>Video by Ryan Shirley</h4>
          <a href="https://www.youtube.com/watch?v=a8dHAGQ0hLY&ab_channel=RyanShirley">
            Watch more on YouTube
          </a>
        </div>

        <div className="video-bar">
          <h3>
            Contact an Embassy or Consulate of Romania for details about visas,
            customs and quarantine rules. *** The security situation in Ukraine
            continues to be unpredictable. Conditions may deteriorate with
            little notice.
          </h3>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
