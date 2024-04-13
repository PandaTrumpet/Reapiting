import Contact from "../Contact/Contact";
export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li key={el.id}>
            <Contact contact={el} />
          </li>
        );
      })}
    </ul>
  );
}
