const BASE_URL = `https://the-one-api.dev/v2/`;

const bearerToken = `Bearer dhO0HDe6y43i3z0VXql4`;
const character = `character`; // endpoint
// let page =``
// const URL = `${BASE_URL}${character}?limit=10&page=${page}`;
// console.log(URL);


const options = {
  headers: {
    Authorization: bearerToken,
  },
};

export function apiRings(page = 1) {
  return fetch(`${BASE_URL}${character}?limit=10&page=${page}`, options).then(
    response => {
      if (!response.ok) {
        throw new Error(`fail`);
      }

      return response.json();
    }
  );
}
