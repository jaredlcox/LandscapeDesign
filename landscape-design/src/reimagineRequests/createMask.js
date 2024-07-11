import generatedMasks from "../data/generatedMasks.json";

export const createMask = (imageUrl) => {
  // Check if imageUrl exists in jsonData
  const existingMask = generatedMasks.find((item) => item.url === imageUrl);
  // If imageUrl exists, return the matching object
  if (existingMask) {
    return Promise.resolve(existingMask);
  }

  // If imageUrl does not exist, proceed with the API call
  return fetch("https://api.reimaginehome.ai/v1/create_mask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "668f34ce9b303a613cea8fbf", // Ensure you replace this with your actual API key
    },
    body: JSON.stringify({
      image_url: imageUrl,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};