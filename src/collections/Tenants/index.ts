import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'slug', 'domain'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique identifier for the tenant',
      },
    },
    {
      name: 'domain',
      type: 'text',
      admin: {
        description: 'Custom domain for this tenant (optional)',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this tenant is active',
      },
    },
  ],
  timestamps: true,
}