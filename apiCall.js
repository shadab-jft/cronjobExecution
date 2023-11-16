import fetch from 'node-fetch'
export const apiCall = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const error = {};
      error.message = `API Error: Status ${response.status} Error: ${JSON.stringify(response)}`;
      throw error;
    } else {
      const responseJson = await response.json();
      return { message: `Message: ${JSON.stringify(responseJson)}`};
    }
  } catch (error) {
    throw {error:error.message};
  }
};
