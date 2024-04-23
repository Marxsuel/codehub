import styles from "./style.module.scss";
import addTech from "../../assets/AddIcon.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechCard } from "./TechCard";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {
  const { isVisible, setIsVisible } = useContext(TechContext);
  const { techList } = useContext(UserContext);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h2 className="title1">Tecnologias</h2>
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          title="Adicionar"
        >
          <img src={addTech} />
        </button>
      </div>
      <ul className={styles.techList}>
        {techList?.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </ul>
    </div>
  );
};
