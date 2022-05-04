import { api } from "./api"
import { TrainningValue } from "./types"

export const getExPeito = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/expeito")
    return data
}

export const getExCostas = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/excostas")
    return data
}

export const getExOmbros = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/exombros")
    return data
}

export const getExPernas = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/expernas")
    return data
}

export const getExPanturrilhas = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/expanturrilhas")
    return data
}

export const getExGluteo = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/exgluteo")
    return data
}

export const getExBiceps = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/exbiceps")
    return data
}

export const getExAbdominal = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/exabdominal")
    return data
}

export const getExTriceps = async (): Promise<TrainningValue | null> => {
    const { data } = await api.get<TrainningValue>("/extriceps")
    return data
}

