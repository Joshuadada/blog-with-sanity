export const baseUrl = assertValue(
    process.env.NEXT_PUBLIC_BASE_URL,
    'Missing environment variable: NEXT_PUBLIC_BASE_URL'
)

export const emailSubscribeUrl = assertValue(
    process.env.NEXT_PUBLIC_EMAIL_SUBSCRIBE_URL,
    'Missing environment variable: NEXT_PUBLIC_EMAIL_SUBSCRIBE_URL'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage)
    }

    return v
}