import { Authenticator } from 'remix-auth'
import { TOTPStrategy } from 'remix-auth-totp'
import { authSessionStorage } from '~/services/auth/auth-session.server'
import { sendAuthEmail } from '~/services/email.server'

interface User {
    email: string
    id: string
    name?: string
}

export const authenticator = new Authenticator<User>(authSessionStorage, {
    throwOnError: true,
})

/**
 * TOTP - Strategy.
 */
authenticator.use(
    new TOTPStrategy(
        {
            secret: process.env.ENCRYPTION_SECRET,
            magicLinkPath: '/magic-link',
            sendTOTP: async ({ email, code, magicLink }) => {
                if (process.env.NODE_ENV === 'development') {
                    console.info('[Dev-Only] TOTP Code:', code)
                } else {
                    await sendAuthEmail({ email, code, magicLink })
                }
            },
        },
        async ({ email }) => {
            if (email === "magnimus@magnimussoftware.com") {
                return {
                    email: "magnimus@magnimussoftware.com",
                    id: "123",
                    name: "Magnimus",
                }
            }
            throw new Error('Whoops! Unable to create user.')
        },
    )
)
