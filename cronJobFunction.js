import { apiCall } from "./apiCall.js";
export const cronJobConfig = {
  1: async (apiUrl) => {
    try {
      const response = await apiCall(apiUrl);
      return response;
    } catch (error) {
      throw error;
    }
  },
  2: async (apiUrl) => {
    try {
      const response = await apiCall(apiUrl);
      return response;
    } catch (error) {
      throw error;
    }
  },
  10000: async (apiUrl) => {
    try {
      const response = await apiCall(apiUrl);
      return response;
    } catch (error) {
      throw error;
    }
  },
};