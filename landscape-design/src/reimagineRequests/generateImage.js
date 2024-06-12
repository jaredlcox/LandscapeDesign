function generateImage(maskUrlArray, imageUrl, spaceType, designTheme, landscapingPreference, additionalPrompt) {
    const url = 'https://api.reimaginehome.ai/v1/generate_image';
    const headers = {
      'Content-Type': 'application/json',
      'api-key': '65394b877bf27b356047e693'
    };
    const body = {
      image_url: imageUrl,
      mask_urls: maskUrlArray,
      mask_category: "landscaping",
      space_type: spaceType,
      design_theme: designTheme,
      masking_element: "",
      color_preference: "",
      material_preference: "",
      landscaping_preference: landscapingPreference,
      generation_count: 1,
      additional_prompt: additionalPrompt,
      webhook_url: ""
    };
  
    return fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

export default generateImage;