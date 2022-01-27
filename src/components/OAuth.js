export const CLIENT_ID = "3cbf69143019ec441af8e8ceb6d117a8";
export const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
