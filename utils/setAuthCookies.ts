import Cookies from 'js-cookie';

function setAuthCookies(accessToken: string, refreshToken: string) {
  Cookies.set('accessToken', accessToken, {expires: 15, sameSite: 'strict'});
  Cookies.set('refreshToken', refreshToken, {expires: 120, sameSite: 'strict'});
}

export default setAuthCookies;
