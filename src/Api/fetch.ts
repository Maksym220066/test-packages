export const fetchPackage = async <T>(api: string, query?: Record<string, string>): Promise<T> => {
    let url = 'https://data.jsdelivr.com/v1' + api
    if (query) {
        const urlQuery = new URLSearchParams(query)
        url += urlQuery
    }
    return await fetch(url, {
        method: 'GET'
    })
        .then(res => res.json())
}