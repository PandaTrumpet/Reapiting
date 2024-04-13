export default function Options({
  onGood,
  onNeutral,
  onBad,
  onReset,
  resetBtn,
}) {
  return (
    <>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>

      {resetBtn > 0 ? (
        <button style={{ display: "inline" }} onClick={onReset}>
          Reset
        </button>
      ) : (
        <button style={{ display: "none" }} onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
}
