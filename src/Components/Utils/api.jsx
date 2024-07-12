export const fetchData = async (route) => {
  const baseUrl = "https://localhost:5010/api";
  try {
    const response = await fetch(baseUrl + route);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
