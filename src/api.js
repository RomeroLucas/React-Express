export default async function api() {
    
    const url = "http://localhost:4000"
    const response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return data
    
}