const HeroPreview = () => {
  const posterImageUrl = '/images/poster-CETAV-2023.png';
  const localVideoUrl = '/videos/Reel-CETAV-2023.mp4';

  return (
    <video
      loop
      autoPlay
      muted
      style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}
      poster={posterImageUrl}
    >
      <source src={localVideoUrl} type="video/mp4" />
    </video>
  );
};

export default HeroPreview;
