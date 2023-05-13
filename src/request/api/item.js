import service from "../index";
export function getMusicplaylists(){ // 推荐歌曲
  return service.get("personalized?limit=10")
}
export function getMusicDetail(id){ // 获取歌单详情
  return service.get(`/playlist/detail?id=${id}`)
}
export function getMusicUrl(id){ // 获取音乐
  return service.get(`/song/url?id=${id}`)
}