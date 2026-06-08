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
export const myRequest = async (reqUserEmail) => {
  const res = await fetch(`http://localhost:5000/adoptnow/my-request/${reqUserEmail}`);
  const data = await res.json();
  return data;
};

export const myListingData = async (ownerEmail) => {
  const res = await fetch(`http://localhost:5000/all-pets/my-listing/${ownerEmail}`);
  const data = await res.json();
  return data;
};


export const myAdoptionReq = async (petName) => {
  const res = await fetch(`http://localhost:5000/all-pets/my-listing/adoptReq/${petName}`);
  const data = await res.json();
  return data;
};

// export const actionRequest = async (id) =>{
//   const res = await fetch(`http://localhost:5000/adoptnow/actionReq/${id}`);
//   const data = await res.json();
//   return data;
// }
