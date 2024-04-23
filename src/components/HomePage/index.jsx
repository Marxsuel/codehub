import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../TechList";
import { TechContext } from "../../providers/TechContext";
import { RegisterModal } from "../RegisterModal";
import { EditModal } from "../EditModal";

export const HomePage = () => {
  const { isVisible, visibility } = useContext(TechContext);
  const { user, logoutUser } = useContext(UserContext);

  return (
    <>
      <div>
        <header className={styles.headerDiv}>
          <div className={styles.headerContent}>
            <img src={logo} alt="KenzieHubLogo" />
            <button onClick={() => logoutUser()} className="buttonBlack buttonGray">
              Sair
            </button>
          </div>
        </header>

        <div className={styles.profileDiv}>
          <h2 className="title1">Bem-vindo, {user?.name}!</h2>
          <p className="headline">{user?.course_module}</p>
        </div>

        <div>
          <TechList />
        </div>
      </div>
      {isVisible === true ? <RegisterModal /> : null}
      {visibility === true ? <EditModal /> : null}
    </>
  );
};
