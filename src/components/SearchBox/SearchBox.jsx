export default function SearchBox({ onChange, value }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
}
