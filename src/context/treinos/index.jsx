import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api"

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
    setLoading(true)
    const reachExPeito = async () => {
    try {
        const { data } = await api.get("/expeito")
        setExPeito(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExCostas = async () => {
    try {
        const { data } = await api.get("/excostas")
        setExCostas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExOmbros = async () => {
    try {
        const { data } = await api.get("/exombros")
        setExOmbros(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExPernas = async () => {
    try {
        const { data } = await api.get("/expernas")
        setExPernas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExPanturrilhas= async () => {
    try {
        const { data } = await api.get("/expanturrilhas")
        setExPanturrilhas(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }


  const reachExGluteo = async () => {
    try {
        const { data } = await api.get("/exgluteo")
        setExGluteo(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExBiceps = async () => {
    try {
        const { data } = await api.get("/exbiceps")
        setExBiceps(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExAbdominal = async () => {
    try {
        const { data } = await api.get("/exabdominal")
        setExAbdominal(data); 
        setLoading(false)

      } catch (e) {
        setLoading(false)
    }
  }

  const reachExTriceps = async () => {
    try {
        const { data } = await api.get("/extriceps")
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
    <TreinoContext.Provider value={{ loading, exPeito, exCostas, exOmbros, exPernas, exPanturrilhas, exTriceps, exGluteo, exBiceps, exAbdominal }}>
      {children}
    </TreinoContext.Provider>
  )
}

export const useTreinoContext = () => useContext(TreinoContext)