import Cookies from 'js-cookie';

function setAuthCookies(accessToken: string, refreshToken: string) {
  Cookies.set('accessToken', accessToken, {sameSite: 'strict'});
  Cookies.set('refreshToken', refreshToken, {sameSite: 'strict'});
}

export default setAuthCookies;
