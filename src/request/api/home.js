import service from "../index";
function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=0",
  });
}
export default getBanner;
