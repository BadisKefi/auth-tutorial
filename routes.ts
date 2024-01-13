/**
 * An array of routes that are accessible to the public
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentification
 * this routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for api authentification routes
 * Routes that starts with this prefix are user for API authentification purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect url after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
