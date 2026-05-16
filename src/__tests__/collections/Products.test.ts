import { describe, it, expect } from 'vitest'

/**
 * Products Collection Tests
 * -------------------------
 * Fill in the test cases below.
 * Each `it` block describes one expected behavior.
 * Replace the `// TODO` comments with your assertions.
 */

describe('Products collection', () => {
  describe('fields', () => {
    it('should require a name', () => {
      // TODO: create product without name
      // expect validation error
    })

    it('should require a slug', () => {
      // TODO: create product without slug
      // expect validation error
    })

    it('should require a price', () => {
      // TODO: create product without price
      // expect validation error
    })

    it('should store price in cents', () => {
      // TODO: create product with price 2999
      // expect(product.price).toBe(2999)
    })

    it('should reject a negative price', () => {
      // TODO: create product with price -100
      // expect validation error
    })

    it('should default inventory to 0', () => {
      // TODO: create product without inventory
      // expect(product.inventory).toBe(0)
    })

    it('should default status to draft', () => {
      // TODO: create product without status
      // expect(product.status).toBe('draft')
    })

    it('should only allow valid status values', () => {
      // TODO: attempt to set status to an unlisted value
      // expect validation error
    })

    it('should enforce unique slugs', () => {
      // TODO: create two products with the same slug
      // expect second creation to fail
    })

    it('should accept an optional stripeProductId', () => {
      // TODO: create product with stripeProductId
      // expect field to persist
    })

    it('should accept an optional category relationship', () => {
      // TODO: create product with a valid category id
      // expect category to be returned on product
    })

    it('should accept multiple images', () => {
      // TODO: create product with images array
      // expect images to be stored and returned
    })
  })

  describe('access control', () => {
    it('should allow anyone to read active products', () => {
      // TODO: query products as guest
      // expect active products to be returned
    })

    it('should hide draft products from customers', () => {
      // TODO: query products as customer
      // expect draft products to be excluded
    })

    it('should allow editor to create a product', () => {
      // TODO: create product as editor
      // expect success
    })

    it('should prevent customer from creating a product', () => {
      // TODO: attempt product creation as customer
      // expect it to be rejected
    })

    it('should prevent customer from updating a product', () => {
      // TODO: attempt product update as customer
      // expect it to be rejected
    })

    it('should allow super-admin to delete a product', () => {
      // TODO: delete product as super-admin
      // expect success
    })

    it('should prevent customer from deleting a product', () => {
      // TODO: attempt delete as customer
      // expect it to be rejected
    })
  })
})
