import axios from "axios";

export const axiosInstance = async (url, params) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const query = `/api/${url}?${params}`;

  const result = await axios.get(baseUrl + query, {
    headers: {
      Authorization: "bearer " + import.meta.env.VITE_APP_STRAPI_TOKEN,
    },
  });

  return result.data;
};
