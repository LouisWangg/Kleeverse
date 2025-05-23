import axios from "axios";

const url = "http://localhost:5000/serviceTypes/";

// Get Konseling Individu datas
export const fetchIndividualCounselings = async () => {
  try {
    const response = await axios.get(`${url}/getIndividualCounselings`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Individual Counseling datas: `, error);
    return null;
  }
};

// Get Konseling Individu data by ID
export const fetchIndividualCounselingById = async (id) => {
  try {
    const response = await axios.get(`${url}/getIndividualCounseling/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Individual Counseling data by id: ${id}`, error);
    return null;
  }
};