import React, { createContext, useState, useContext } from "react"

interface Props {
  children?: React.ReactNode;
}

const MenuContext = createContext<boolean | null>(null);
const MenuUpdateContext = createContext<() => void | null>(null!);

export const useMenu = () => useContext(MenuContext);
export const useUpdateMenu = () => useContext(MenuUpdateContext);

export const MenuProvider = ({children}: Props) => {

  const[isOn, setOn] = useState<boolean>(false);

  const handleUpdate = () => {
    setOn(prev => !prev);
  };

  return (
    <MenuContext.Provider value={isOn}>
      <MenuUpdateContext.Provider value={handleUpdate}>
        {children}
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  )
}