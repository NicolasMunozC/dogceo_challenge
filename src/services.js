export const fetchAllData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    return res.json()
}