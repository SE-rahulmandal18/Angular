// /* eslint-disable react/prop-types */
// import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // let {foodItem} = props
  return (
    <li className="list-group-item">{foodItem}</li>

    // <li className={`${styles["kg-item"]} list-group-item `}>
    //   <span className={styles["kg-span"]}>{foodItem}</span>
    // </li>
  );
};

export default Item;
