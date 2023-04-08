import axios from "axios";

const API_URL = "http://openlibrary.org/subjects/adventure.json"
const LIMIT_PER_PAGE = 10

interface GetBooksParams {
    page: number
    limit?: number
}

export const getBooks: (params: GetBooksParams) => Promise<any> = (params) => {
    const page: number = params?.page
    const limit: number = params?.limit || LIMIT_PER_PAGE
    const offset: number = page > 0 ? (page - 1) * limit : 0

    return axios.get(`${API_URL}?limit=${limit}&offset=${offset}`)
}
