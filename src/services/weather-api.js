const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function getCurWeatherByLatLng(lat, lng) {
    const url = `${BASE_URL}?lat=${lat}&lon=${lng}&units=imperial&appid=d3945aa316355ce92bb8cc10bf63e3da`;
  return fetch(url, {mode: 'cors'})
    .then(res => res.json());
}