import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema,";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.logoImg}>
          <img src={logo} className={styles.imgL} alt="KenzieHub Logo" />
        </div>

        <div className={styles.formDiv}>
          <form onSubmit={handleSubmit(submit)} className={styles.formSec}>
            <h3 className="title1">Login</h3>
            <Input
              label="Email"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
              error={errors.email}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
              error={errors.password}
            />

            <button className="buttonPink loginButtons">Entrar</button>
          </form>

          <p className="headline">Ainda não possui uma conta?</p>
          <button
            onClick={() => navigate("/register")}
            className="buttonGray loginButtons"
          >
            Cadastrar-se
          </button>
        </div>
      </section>
    </>
  );
};
