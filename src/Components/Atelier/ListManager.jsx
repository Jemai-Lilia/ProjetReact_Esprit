import { useState } from "react";

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  // Fonction pour ajouter un item
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Fonction pour supprimer un item
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Liste d'éléments</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            
            {item}
            <button className="btn btn-danger" onClick={() => deleteItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder={placeholder}
      />
      <button className="btn btn-primary" onClick={addItem}>Ajouter</button>
    </div>
  );
};

export default ListManager;
