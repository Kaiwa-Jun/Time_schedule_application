import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/v1/users/sign_in`, {
    user: {
      email: email,
      password: password,
    },
  });
  return response.data;
};

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/v1/users`, {
    user: {
      email: email,
      password: password,
    },
  });
  return response.data;
};
