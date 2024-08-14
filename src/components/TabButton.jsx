export default function TabButton({ onClicked, isSelected, children }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClicked}>
        {children}
      </button>
    </li>
  );
}
