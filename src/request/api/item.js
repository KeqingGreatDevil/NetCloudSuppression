import service from "../index";
export function getMusicplaylists(){ // 推荐歌曲
  return service.get("personalized?limit=10")
}
export function getMusicDetail(id){ // 获取歌单详情
  return service.get(`/playlist/detail?id=${id}`)
}
export function getMusicPlayList(id){ // 获取歌单所有歌曲
  return service.get(`/playlist/track/all?id=${id}&limit=999&offset=1`)
}