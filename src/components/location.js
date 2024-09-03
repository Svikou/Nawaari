const find = () => {
  const status = Document.querySelector(".status");
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
    fetch(geoApiUrl).then((res) => res.json());
    then((data) => {
      status.textContent = data.principalSubdivision;
    });
  };
  const error = () => {
    status.textContent = "unable to retrieve";
  };
  navigator.geolocalistion.getCurrentPosition(success, error);
};
document.querySelector(".find-state").addEventListener;
