import axios from "axios";

const API_KEY:string = "MH2Cl9dmlA6VCRuYzTv_4n326c2Mp_C0YuB8hGEMPRo";

interface Data {
  results: [],
  total: number,
  total_pages: number,
}

export const fetchImages = async (query:string, page:number, perPage = 16): Promise<Data> => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
      order_by: `views`,
      orientation: `landscape`,
    },
  });
  // console.log(response.data);
  
  return response.data;
};
