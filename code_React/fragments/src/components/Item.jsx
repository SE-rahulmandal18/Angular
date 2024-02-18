// /* eslint-disable react/prop-types */
import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClicked }) => {
  // let {foodItem} = props

  // const handleBuyButtonClicked = () => {
  //   console.log(event);
  //   console.log(`${foodItem} beign bought`)
  // }

  return (
    // <li className={`${styles["kg-item"]} list-group-item`}>
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>

      <button
        // onClick={() => console.log(`${foodItem} beign bought`)}
        // onClick={(event) => handleBuyButtonClicked(event) }

        onClick={handleBuyButtonClicked}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
