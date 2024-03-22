import { NextAuthMiddlewareOptions, withAuth, NextRequestWithAuth } from "next-auth/middleware"

const middleware = (request: NextRequestWithAuth) => {
    console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token)
}

const callbackOptions: NextAuthMiddlewareOptions = {}
export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: '/private'
}