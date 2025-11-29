import { useState } from "react";

// <T> es un genérico para que pueda recibir cualquier tipo de dato, por ej User
type DataType<T> = T | null;
type ErrorType = Error | null;
type LoadingType = boolean;


interface Params<T> {
    data: DataType<T>;
    loading: LoadingType;
    error: ErrorType;
}

const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<DataType<T>>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ErrorType>(null)

    


}