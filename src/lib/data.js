
export const allpetData = async () => {
  try {
    const res = await fetch("http://localhost:5000/all-pets");
    if (!res.ok) {
      throw new Error(`Failed to fetch pets: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
};

export const petDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/all-pets/${id}`,{
      headers:{
        authorization: "logIn"
      }
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch pet: ${res.status}`);
    }
    const data = await res.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching pet:", error);
    return null;
  }
};

export const adoptionRequestData = async (ownerEmail) => {
  try {
    const res = await fetch(`http://localhost:5000/adoptnow/${ownerEmail}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch adoption requests: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching adoption requests:", error);
    return [];
  }
};

export const allAdoptionRequest = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/all-pets/allAdoptReq/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch adoption requests");
    }
    const text = await res.text();
    return text ? JSON.parse(text) : [];
  } catch (error) {
    console.error("Error fetching adoption requests:", error);
    return [];
  }
};

export const myRequest = async (reqUserEmail) => {
  try {
    const res = await fetch(`http://localhost:5000/adoptnow/my-request/${reqUserEmail}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch requests: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching requests:", error);
    return [];
  }
};

export const myListingData = async (ownerEmail) => {
  try {
    const res = await fetch(`http://localhost:5000/all-pets/my-listing/${ownerEmail}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch listings: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
};

export const myAdoptionReq = async (petName) => {
  try {
    const res = await fetch(`http://localhost:5000/all-pets/my-listing/adoptReq/${petName}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch adoption request: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching adoption request:", error);
    return [];
  }
};

// export const actionRequest = async (id) =>{
//   const res = await fetch(`http://localhost:5000/adoptnow/actionReq/${id}`);
//   const data = await res.json();
//   return data;
// }
