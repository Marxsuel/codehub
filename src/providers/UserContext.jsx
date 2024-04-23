import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../api";
import { toast } from "react-toastify";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getUser = async () => {
      try {
        const { data } = await Api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechList(data.techs);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      getUser();
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await Api.post("/sessions", formData);
      setUser(data.user);
      setTechList(data.user.techs);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email e/ou senha incorreto.", {
          theme: "dark",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      await Api.post("/users", formData);
      toast.success("Conta criada com sucesso", {
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Ops! Algo deu errado.", {
          theme: "dark",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        techList,
        setTechList,
        logoutUser,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
