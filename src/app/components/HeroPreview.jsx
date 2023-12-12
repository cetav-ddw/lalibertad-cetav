const HeroPreview = ({ poster, localVideo }) => {
  return (
    <video
      loop
      autoPlay
      muted
      style={{
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}
      poster={poster}
    >
      <source src={localVideo} type="video/mp4" />
    </video>
  );
};

export default HeroPreview;
