export const allpetData = async()=>{
    const res = await fetch("http://localhost:5000/addPet")
    const data = await res.json()
    return data;
}