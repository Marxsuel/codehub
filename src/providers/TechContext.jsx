import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, techList, setTechList } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [techId, setTechId] = useState(null);
  const token = localStorage.getItem("@TOKEN");

  const createTech = async (formData) => {
    try {
      const { data } = await Api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
      setIsVisible(false);
    } catch (error) {
      toast.error("Ops! Algo deu errado.", {
        theme: "dark",
      });
      console.log(error);
    }
  };

  const editTech = async (formData) => {
    const { data } = await Api.put(`/users/techs/${techId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newTechList = techList.map((tech) => {
      if (tech.id === techId) {
        return data;
      }
      return tech;
    });
    setTechList(newTechList);
    setTechId(null);
    setVisibility(false);
  };

  const deleteTech = async (techId) => {
    await Api.delete(`/users/techs/${techId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const techFilter = techList.filter((tech) => tech.id !== techId);
    setTechList(techFilter);
    setTechId(null);
  };

  return (
    <TechContext.Provider
      value={{
        isVisible,
        setIsVisible,
        createTech,
        visibility,
        setVisibility,
        editTech,
        deleteTech,
        setTechId,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
