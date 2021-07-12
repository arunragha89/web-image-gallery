import appConfig from "./constants";

export default function client(endpoint) {
  const headers = { "content-type": "application/json" };
  headers.Authorization = appConfig.authorizationToken;

  return window
    .fetch(`${appConfig.unsplashUrl}${endpoint}`, { headers })
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}
