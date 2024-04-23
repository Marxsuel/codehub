import { useForm } from "react-hook-form";
import closeButton from "../../assets/CloseButton.png";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterTechSchema } from "./RegisterTechSchema";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const RegisterModal = () => {
  const { isVisible, setIsVisible, createTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(RegisterTechSchema),
  });

  return (
    <div role="dialog" className={styles.modalContainer}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h3 className={styles.headerTitle}>Cadastrar tecnologia</h3>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <img src={closeButton} alt="X" />
          </button>
        </header>
        <form className={styles.modalForm} onSubmit={handleSubmit(createTech)}>
          <Input
            {...register("title")}
            label="Nome"
            type="text"
            placeholder="Digite a tecnologia"
          />

          <label className="headline">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit" className="buttonPink">
            Cadastrar tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
