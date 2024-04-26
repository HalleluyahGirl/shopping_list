import { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // this will prevent the page from reloading
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      handleAddItems(newTodo);
      setProduct("");
      setQuantity(1);
    }
  };
  return (
    <form className="select" onSubmit={handleSubmit}>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <input
        className="input"
        type="text"
        placeholder="Enter a name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <button className="addBtn">Add</button>
    </form>
  );
};

export default Form;
