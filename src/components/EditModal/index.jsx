import { useForm } from "react-hook-form";
import closeButton from "../../assets/CloseButton.png";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { EditTechSchema } from "./EditTechSchema";
import { set } from "zod";

export const EditModal = () => {
  const { visibility, setVisibility, editTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(EditTechSchema),
  });

  return (
    <div role="dialog" className={styles.modalContainer}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h3 className={styles.headerTitle}>Tecnologia detalhes</h3>
          <button
            onClick={() => {
              setVisibility(false);
            }}
          >
            <img src={closeButton} alt="X" />
          </button>
        </header>
        <form className={styles.modalForm} onSubmit={handleSubmit(editTech)}>
          <Input
            {...register("title")}
            label="Nome"
            type="text"
            placeholder="Digite a tecnologia"
            disabled
          />

          <label className="headline">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit" className="buttonPink">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
