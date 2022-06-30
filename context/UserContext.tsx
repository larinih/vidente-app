import React, { 
    createContext, 
    ReactNode, 
    useEffect, 
    useState
  } from 'react'
  
  import { CITY_CODE, CITY_NAME } from '../config/service'
  
  type UserContextType = {
    cityCode: number,
    cityName: string,
    setCityCode: (newState: number) => void,
    setCityName: (newState: string) => void
  }
  
  const initialValue: UserContextType = {
    cityCode: CITY_CODE,
    cityName: CITY_NAME,
    setCityCode: () => {},
    setCityName: () => {}
  }
  
  export const UserContext = createContext(initialValue)
  
  type Props = {
    children: ReactNode
  }
  
  export const UserContextProvider = ({ children }: Props) => {
    const [cityCode, setCityCode] = useState(initialValue.cityCode)
    const [cityName, setCityName] = useState(initialValue.cityName)
  
    return (
      <UserContext.Provider value={{
        cityCode, 
        setCityCode,
        cityName,
        setCityName
      }}>
        {children}
      </UserContext.Provider>
    )
  }
  
  
  
  
  
  
  