import styles from "./Button.module.css";
import clsx from "clsx";
function Button({primary,aqua}) {
  const classes = clsx(styles.btn,{
    [styles.primary]:primary,
    [styles.aqua]:aqua,
  });
  return (
    <div>
      <button className={classes}>Click me...!</button>
    </div>
  );
}
export default Button;
