export const accessToken = 'MENTOR_ME_USER_ACCESS_TOKEN_' 
export async function getValidToken() {
    try {
        const token = sessionStorage.getItem(`${accessToken}`)
        if (token === null) {
            return null
        }
        return token;
    } catch (error) {
        return null;
    }
}

