import { useState } from "react";
import colorData from "../../color-data.json";
import {v4} from "uuid";
import { createContext } from "react";

export const ColorContext = createContext()

export default function ColorProvider({children}) {
    const [colors,setColors] = useState(colorData)

    const addColor = (title,color) => {
        const newColors = [
            ...colors,
            {
              id:v4(),
              rating:0,
              title,
              color
            }
          ]
        setColors(newColors)
    }
    const removeColor = id => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors)
    }

    return (
        <ColorContext.Provider
            value={{colors,addColor,removeColor}}
        >
            {children}
        </ColorContext.Provider>
    )
}