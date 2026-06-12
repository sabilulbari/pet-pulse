import { authClient } from "./auth-client";

export const allpetData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch pets: ${res.status}`);
    }
    const data = await res.json();
    console.log(data, "all pers data");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching pets:", error);
    return [];
  }
};

export const petDataById = async (id, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch pet: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const myRequest = async (reqUserEmail, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptnow/my-request/${reqUserEmail}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
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

export const myListingData = async (ownerEmail, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/my-listing/${ownerEmail}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
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

export const myAdoptionReq = async (petName, tokenData) => {
  console.log(petName, tokenData.token);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/my-listing/adoptReq/${petName}`, {
      headers: {
        authorization: `Bearer ${tokenData.token}`,
      },
      cache: "no-store",
    });
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
