import React from "react";
import useFetch from "../../hooks/useFetch";
import {getBooks} from "../../services/api";
import {Book} from "../../types";
import {getDummyCoverImg} from "../../utils/function";

type CurrentPageFn = (prevState: number) => number
interface UseBookEffect {
    getter: {
        data: Array<Book>
        error: boolean
        loading: boolean
    }
    setter: {
        currentPage: (page: number | CurrentPageFn) => void
    }
}

const useBookEffect: () => UseBookEffect = () => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [bookList, setBookList] = React.useState<Array<Book>>([])
    const {data, error, loading} = useFetch(getBooks, { page: currentPage })

    React.useEffect(() => {
        const dataTransform: Array<Book> = data?.data?.works?.map((book: any) => ({
            title: book?.title,
            author: book?.authors[0]?.name,
            edition: book?.["cover_edition_key"],
            coverImg: getDummyCoverImg()
        })) || []

        const newBooks: Array<Book> = [...bookList, ...dataTransform]
        setBookList(newBooks as Array<Book>)
    }, [data?.data?.works])

    return {
        getter: { data: bookList, error, loading },
        setter: { currentPage: setCurrentPage }
    }
}

export default useBookEffect
