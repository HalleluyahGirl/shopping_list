import List from "../components/List";
import Form from "./Form";

const Main = ({ items, handleAddItems, onDeleteItems }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {items.map((item) => (
          <List key={item.id} item={item} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
