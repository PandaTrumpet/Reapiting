export default function Contact({ contact: { name, number } }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
        <button>Delete</button>
      </div>
    </>
  );
}
