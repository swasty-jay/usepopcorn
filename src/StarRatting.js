const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px  ",
};

const Starstyle = {
  display: " flex",
  gap: "4px",
};

const TextStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRatting({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={Starstyle}>
        {Array.from({ length: maxRating }, (__, i) => (
          <span>⭐{i + 1}</span>
        ))}
      </div>
      <p style={TextStyle}>10</p>
    </div>
  );
}
