import {jwtVerify} from 'jose';
import { UserJwtPayload } from '../interfaces/dataTypes/UserJwtPayload';

export const verifyAccessToken = async (token: string) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));
        return verified.payload as UserJwtPayload
    } catch (error) {
        throw new Error('Token expired')
    }
}

export const verifyRefreshToken = async (token: string) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET));
        return verified.payload as UserJwtPayload
    } catch (error) {
        throw new Error('Token expired')
    }
}