import styles from "./InputItem.module.css";

const InputItem = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food here..."
      className={styles.input}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputItem;
