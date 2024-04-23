import EditIcon from "../../../assets/EditIcon.png";
import DeleteIcon from "../../../assets/DeleteIcon.png";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { setVisibility, deleteTech, setTechId } = useContext(TechContext);

  return (
    <li className={styles.techCard}>
      <div className={styles.contentDiv}>
        <h3 className="title1">{tech.title}</h3>
        <span className="headline">{tech.status}</span>
      </div>

      <div className={styles.cardButtons}>
        <button
          onClick={() => {
            setVisibility(true);
            setTechId(tech.id);
          }}
          title="Editar"
          aria-label="edit"
        >
          <img src={EditIcon} />
        </button>

        <button
          onClick={() => deleteTech(tech.id)}
          title="Deletar"
          aria-label="remove"
        >
          <img src={DeleteIcon} />
        </button>
      </div>
    </li>
  );
};
