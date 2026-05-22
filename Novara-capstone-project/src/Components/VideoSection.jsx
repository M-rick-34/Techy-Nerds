import "./VideoSection.css";

import spaceVideo from "../assets/space-video.mp4";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-text">
        <h2>Experience Space Exploration</h2>

        <p>
          Discover breathtaking visuals of the universe through immersive space
          footage showcasing the beauty of planets, stars and galaxies.
        </p>
      </div>

      <div className="video-wrapper">
        <video autoPlay muted loop controls playsInline>
          <source src={spaceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
