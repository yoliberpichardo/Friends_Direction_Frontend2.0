
export const getUsersLocation = () => {
  return new Promise((res, rej) =>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        res([coords.longitude, coords.latitude])
      },
      (err) => {
        alert('no tiene la geolocalizacion')
        console.log(err);
        rej()
      }
    )
  })
}

