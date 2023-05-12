import service from '../index'
function getkey(){
return service({
    method:'GET',
    url:'/login/qr/key'
})
}
export function keycreate() {
    return service({
      method: "GET",
      url: "/login/qr/create",
    });
  }
export default getkey

