import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(initialName);

  function handleClickEdit() {
    setIsEditing((editValue) => !editValue);
  }

  function updateName(e) {
    setInputValue(e.target.value);
  }

  let playerName = <span className="player-name">{inputValue}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" value={inputValue} onChange={updateName} required />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
