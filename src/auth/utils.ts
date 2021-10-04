import { decode } from 'jsonwebtoken';
import { JwtToken  } from './jwtToken';

/**
 * Parse JWTToken and return userId
 * @param jwtToken 
 * @returns 
 */
export function getUserId(jwtToken: string): string {
    const token = jwtToken.replace('Bearer ', '');
    const { sub } = decode(token) as JwtToken;
    return sub;
}