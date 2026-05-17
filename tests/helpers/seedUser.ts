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

export async function seedTestUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  const email = `test-${suffix}@payloadcms.com`

  await payload.delete({
    collection: 'users',
    where: { email: { equals: email } },
    overrideAccess: true,
  })

  await new Promise((resolve) => setTimeout(resolve, 500))

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
    overrideAccess: true,
  })

  await new Promise((resolve) => setTimeout(resolve, 500))

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
  const email = `test-${suffix}@payloadcms.com`

  await payload.delete({
    collection: 'users',
    where: { email: { equals: email } },
    overrideAccess: true,
  })
}

export async function cleanupAdminUser(suffix = 'default'): Promise<void> {
  const payload = await getPayload({ config })
  const email = `admin-${suffix}@payloadcms.com`

  await payload.delete({
    collection: 'users',
    where: { email: { equals: email } },
    overrideAccess: true,
  })
}
