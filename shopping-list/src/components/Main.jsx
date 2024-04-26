import List from "../components/List";
import Form from "./Form";

const Main = ({ items, handleAddItems, onDeleteItems, handleDoneItems }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {items.map((item) => (
          <List
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            handleDoneItems={handleDoneItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
