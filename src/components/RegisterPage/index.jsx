import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerPage}>
        <img src={logo} alt="" />
        <button
          onClick={() => backToLogin()}
          className="buttonBlack"
          id="buttonBack"
        >
          Voltar
        </button>
      </div>

      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit(submit)} className={styles.formSec}>
          <div className={styles.headerForm}>
            <h3 className="title1">Crie sua conta</h3>
            <p className="headline">Rapido e grátis, vamos nessa!</p>
          </div>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
            error={errors.name}
            disabled={loading}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
            error={errors.password}
            disabled={loading}
          />

          <Input
            label="Confirme sua senha"
            type="password"
            placeholder="Digite novamente a sua senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
            disabled={loading}
          />

          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
            error={errors.bio}
            disabled={loading}
          />

          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
            error={errors.contact}
            disabled={loading}
          />

          <label className="headline">Selecionar módulo</label>
          <select {...register("course_module")} disabled={loading}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <button className="buttonDisabled buttonPink" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </section>
  );
};
