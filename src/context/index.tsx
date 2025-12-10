import { createContext, useState, type ReactNode } from "react";

// Contexto para manejar popups en la app
interface PopupsContextType {
  popups: PopupsID | null;
  addPopup: (idprops: PopupsID) => void;
  deletePopup: () => void;
}

const defaultContext: PopupsContextType = {
  popups: null,
  addPopup: () => {},
  deletePopup: () => {},
};

export enum PopupsID {
  ao3,
  meme,
  otrochat,
}

export const PopupsContext = createContext<PopupsContextType>(defaultContext);

export const PopupsProvider = ({ children }: { children: ReactNode }) => {
  const [popups, setPopups] = useState<PopupsID | null>(null);

  const addPopup = (idprops: PopupsID) => {
    setPopups(idprops);
  };

  const deletePopup = () => {
    setPopups(null);
  };

  return (
    <PopupsContext.Provider value={{ popups, addPopup, deletePopup }}>
      {children}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;
