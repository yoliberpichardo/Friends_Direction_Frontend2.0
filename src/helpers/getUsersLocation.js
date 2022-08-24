
export const getUsersLocation = () => {
  return new Promise((res, rej) =>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        res([{lng: coords.longitude, lat: coords.latitude}])
      },
      (err) => {
        alert('no tiene la geolocalizacion')
        console.log(err);
        rej()
      }
    )
  })
}

