
export async function refreshAccessToken(refreshToken: string, userId: number) {
    try {
        const graphqlUrl = 'http://localhost:3001/graphql';

        const mutation = `
            mutation RefreshAccessToken{
                refreshAccessToken(refreshInput: { refreshToken: "${refreshToken}", userId: ${userId} }) {
                    accessToken
                }
            } 
            `;

        const response = await fetch(graphqlUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            },
            body: JSON.stringify({ query: mutation }),
        });

        const json = await response.json();
        const accessToken = json.data.refreshAccessToken?.accessToken;
        console.log(json.data.refreshAccessToken);
        
        return accessToken;
    } catch (error) {
        throw new Error('Refresh token error')
    }
}
