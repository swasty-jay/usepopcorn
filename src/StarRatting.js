export default function StarRatting() {
  return (
    <div>
      <div>
        {Array.from({ length: 5 }, (__, i) => (
          <span>⭐{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
