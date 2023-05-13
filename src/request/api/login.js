import service from '../index'
export function qrCodeLoginKey(timestamp){
  return service.get('/login/qr/key?timestamp='+timestamp)
}
export function qrCodeLoginImg(key){
  return service.get('/login/qr/create?qrimg=true&key='+key)
}
export function qrCodeLoginCheck(key,timestamp){
  return service.get('/login/qr/check?key='+key+'&timestamp='+timestamp)
}
