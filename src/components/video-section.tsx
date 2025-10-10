'use client';

export default function VideoSection() {
  return (
    <section className="video-section">
      <video
        className="video-section__video"
        src="/vid2.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </section>
  );
}
