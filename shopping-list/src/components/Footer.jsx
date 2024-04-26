const Footer = ({ items }) => {
  const numItems = items.length;
  // function that that returns the number of packed items
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = (numpacked / numItems) * 100;
  return (
    <div className="footerWrapper">
      {/* adding a message, if the percentage is 100%, it should print `shpping done` */}
      {percentage === 100
        ? "Shopping done"
        : `Total Item ${numItems}    completed Item ${numpacked}   ${percentage}%`}
    </div>
  );
};

// const Footer = ({ counterItems }) => {
//   return (
//     <div className="footerWrapper">
//       Total Items: {counterItems} completed Item X
//     </div>
//   );
// };

export default Footer;
