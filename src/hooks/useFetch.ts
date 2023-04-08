import React, { useEffect, useState } from 'react';

interface UseFetch<T> {
    data: T
    loading: boolean
    error: boolean
}

const useFetch = <T, >(
    query: (params: any) => Promise<T>,
    params: { [key: string]: any }
): UseFetch<T> => {
    const [data, setData] = useState<T>({} as T);
    const [fetching, setFetching] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)

    const fetchQuery = React.useCallback(async (): Promise<void> => {
        try {
            setFetching(true);
            const response = await query(params);
            setData(response);
        } catch (error) {
            setError(true)
        } finally {
            setFetching(false);
        }
    }, [params])

    useEffect(() => {
        fetchQuery()
    }, [params?.page]);

    return {
        data,
        loading: fetching,
        error
    };
};

export default useFetch;
