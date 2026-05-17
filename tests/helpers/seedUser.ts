import { getPayload } from 'payload'
import config from '../../src/payload.config.js'

export const testUser = {
  email: 'dev@payloadcms.com',
  password: 'test',
  name: 'Test User',
  role: 'customer' as const,
}

export const testAdminUser = {
  email: 'admin@payloadcms.com',
  password: 'test',
  name: 'Test Admin',
  role: 'super-admin' as const,
}

/**
 * Seeds a test user with a unique email per test suite.
 * Pass a unique suffix to avoid collisions between parallel test files.
 */
export async function seedTestUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  const email = `test-${suffix}@payloadcms.com`

  await payload.delete({
    collection: 'users',
    where: { email: { equals: email } },
  })

  await payload.create({
    collection: 'users',
    data: {
      email,
      password: 'test',
      name: 'Test User',
      role: 'customer' as const,
    },
  })
}

export async function seedAdminUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  const email = `admin-${suffix}@payloadcms.com`

  await payload.delete({
    collection: 'users',
    where: { email: { equals: email } },
  })

  await payload.create({
    collection: 'users',
    data: {
      email,
      password: 'test',
      name: 'Test Admin',
      role: 'super-admin' as const,
    },
  })
}

export async function cleanupTestUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  await payload.delete({
    collection: 'users',
    where: { email: { equals: `test-${suffix}@payloadcms.com` } },
  })
}

export async function cleanupAdminUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  await payload.delete({
    collection: 'users',
    where: { email: { equals: `admin-${suffix}@payloadcms.com` } },
  })
}
