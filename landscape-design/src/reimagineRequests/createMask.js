export const createMask = (imageUrl) => {
    return fetch('https://api.reimaginehome.ai/v1/create_mask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': '65394b877bf27b356047e693'
      },
      body: JSON.stringify({
        "image_url": imageUrl
      })
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  