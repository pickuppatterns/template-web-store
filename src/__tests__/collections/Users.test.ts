import { describe, it, expect } from 'vitest'

/**
 * Users Collection Tests
 * ----------------------
 * Fill in the test cases below.
 * Each `it` block describes one expected behavior.
 * Replace the `// TODO` comments with your assertions.
 */

describe('Users collection', () => {
  describe('roles', () => {
    it('should default new users to customer role', () => {
      // TODO: create a user without specifying a role
      // expect(user.role).toBe('customer')
    })

    it('should allow valid roles: super-admin, editor, customer, musician, guest', () => {
      // TODO: assert each role value is accepted
    })

    it('should reject an invalid role value', () => {
      // TODO: attempt to set role to an unlisted value
      // expect validation to fail
    })

    it('should only allow super-admin to change another users role', () => {
      // TODO: attempt role update as customer
      // expect it to be rejected
    })
  })

  describe('access control', () => {
    it('should allow a user to read their own record', () => {
      // TODO: query users collection as that user
      // expect their own record to be returned
    })

    it('should prevent a customer from reading another users record', () => {
      // TODO: query users collection as customer
      // expect other user records to be inaccessible
    })

    it('should allow super-admin to read all user records', () => {
      // TODO: query users collection as super-admin
      // expect all records to be returned
    })

    it('should prevent a customer from deleting a user', () => {
      // TODO: attempt delete as customer
      // expect it to be rejected
    })

    it('should allow super-admin to delete a user', () => {
      // TODO: attempt delete as super-admin
      // expect it to succeed
    })
  })

  describe('fields', () => {
    it('should require an email address', () => {
      // TODO: create user without email
      // expect validation error
    })

    it('should store a stripeCustomerId when provided', () => {
      // TODO: create user with stripeCustomerId
      // expect field to persist
    })

    it('should store a name when provided', () => {
      // TODO: create user with name field
      // expect name to be returned
    })
  })
})
