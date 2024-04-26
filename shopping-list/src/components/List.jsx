const List = ({ item, onDeleteItems }) => {
  // to destructure
  const { product, quantity, packed } = item;
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button className="doneBtn">Done</button>
        <button onClick={() => onDeleteItems(item.id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
