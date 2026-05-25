export const allpetData = async () => {
  const res = await fetch("http://localhost:5000/all-pets");
  const data = await res.json();
  return data;
};

export const petDataById = async (id) => {
  const res = await fetch(`http://localhost:5000/all-pets/${id}`);
  const data = await res.json();
  return data;
};

export const adoptionRequestData = async (ownerEmail) => {
  const res = await fetch(`http://localhost:5000/adoptnow/${ownerEmail}`);
  const data = await res.json();
  return data;
};

// export const actionRequest = async (id) =>{
//   const res = await fetch(`http://localhost:5000/adoptnow/actionReq/${id}`);
//   const data = await res.json();
//   return data;
// }
