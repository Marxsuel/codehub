import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <>
      <label className="headline">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className={styles.errorMessage}>{error.message}</p> : null}
    </>
  );
});
