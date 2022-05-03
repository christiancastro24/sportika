import { TreinoProvider } from "./treinos"

export const ProviderTreinos = ({ children }) => {
  return (
    <>
      <TreinoProvider>
        {children}
      </TreinoProvider>
    </>
  )
}