import { createContext, useContext, useEffect, useState } from "react";
import { getExPeito, getExCostas, getExOmbros, getExPernas, 
  getExPanturrilhas, getExGluteo, getExBiceps, getExAbdominal, 
  getExTriceps
 } from "../../services/exercicios";

const TreinoContext = createContext();

export const TreinoProvider = ({ children }) => {

  const [exPeito, setExPeito] = useState([])
  const [exCostas, setExCostas] = useState([])
  const [exOmbros, setExOmbros] = useState([])
  const [exPernas, setExPernas] = useState([])
  const [exPanturrilhas, setExPanturrilhas] = useState([])
  const [exTriceps, setExTriceps] = useState([])
  const [exGluteo, setExGluteo] = useState([])
  const [exBiceps, setExBiceps] = useState([])
  const [exAbdominal, setExAbdominal] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
   
    const reachExPeito = async () => {
    setLoading(true)
    try {
        const data = await getExPeito();
        setExPeito(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExCostas = async () => {
    setLoading(true)
    try {
        const data = await getExCostas();
        setExCostas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExOmbros = async () => {
    setLoading(true)
    try {
        const data = await getExOmbros()
        setExOmbros(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExPernas = async () => {
    setLoading(true)
    try {
        const data = await getExPernas();
        setExPernas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExPanturrilhas= async () => {
    setLoading(true)
    try {
        const data = await getExPanturrilhas();
        setExPanturrilhas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }


  const reachExGluteo = async () => {
    setLoading(true)
    try {
        const data = await getExGluteo();
        setExGluteo(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExBiceps = async () => {
    setLoading(true)
    try {
        const data = await getExBiceps();
        setExBiceps(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExAbdominal = async () => {
    setLoading(true)
    try {
        const data = await getExAbdominal();
        setExAbdominal(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExTriceps = async () => {
    setLoading(true)
    try {
        const data = await getExTriceps();
        setExTriceps(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  reachExPanturrilhas();
  reachExAbdominal();
  reachExBiceps();
  reachExGluteo()
  reachExTriceps()
  reachExPernas()
  reachExPernas()
  reachExOmbros()
  reachExCostas()
  reachExPeito()

  }, [])

  return (
    <TreinoContext.Provider value={{ 
      loading, exPeito, exCostas, exOmbros, exPernas, 
      exPanturrilhas, exTriceps, exGluteo, exBiceps, exAbdominal 
      }}>
      {children}
    </TreinoContext.Provider>
  )
}

export const useTreinoContext = () => useContext(TreinoContext)