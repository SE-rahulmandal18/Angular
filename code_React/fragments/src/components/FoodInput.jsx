import styles from "./FoodInput.module.css"


const FoodInput = ({handleKeyDown}) => {

  // const onChangeHandler = (event) => {
  //   console.log(event.target.value)
  // }

  return <input type="text" placeholder="Enter Food Item here" 
  className={styles.foodInput}
  // onChange={(event) => console.log(event.target.value)}/>
  // onChange={ onChangeHandler}/>

  onKeyDown={ handleKeyDown}/>
}
export default FoodInput