export const oktaConfig = {
    clientId: "0oa9jisladwWIyKf55d7",
    issuer: "https://dev-63743041.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true, // Proof Key for Code Exchange
    disableHttpsCheck: true,
};
