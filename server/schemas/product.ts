export default {
  validator: {
    $jsonSchema: {
      required: ['name', 'slug', 'acsPartNumber', 'status'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'Product name is required and 50 characters max',
          maxLength: 50,
        },
        slug: {
          bsonType: 'string',
          description: 'Product slug is required',
        },
        description: {
          bsonType: 'string',
          description: 'Product description',
          maxLength: 2000,
        },
        media: {
          bsonType: 'array',
          description: 'Product images',
          uniqueItems: true,
          items: {
            bsonType: 'objectId',
          },
        },
        acsPartNumber: {
          bsonType: 'string',
          description: 'ACS part Number is required',
          maxLength: 20,
        },
        oemPartNumber: {
          bsonType: 'string',
          description: 'OEM part Number',
          maxLength: 100,
        },
        oem: {
          bsonType: 'string',
          description: 'OEM',
          maxLength: 100,
        },
        tbq: {
          bsonType: 'bool',
          description: 'Whether the product is to be quoted or not',
        },
        eligibilities: {
          bsonType: 'array',
          description: 'Product eligibilities',
          // uniqueItems: true,
          // items: {
          //   bsonType: 'objectId',
          // },
          items: {
            bsonType: 'object',
            properties: {
              name: {
                bsonType: 'string',
                description: 'Next Eligibility name',
              },
            },
          },
        },
        nextHigherAssemblies: {
          bsonType: 'array',
          description: 'Product nextHigherAssemblies',
          // uniqueItems: true,
          // items: {
          //   bsonType: 'objectId',
          // },
          // items: {
          //   bsonType: 'object',
          //   properties: {
          //     name: {
          //       bsonType: 'string',
          //       description: 'Next Higer Assembly name',
          //     },
          //   },
          // },
        },
        price: {
          bsonType: 'number',
          description: 'Product price',
          maxLength: 500,
        },
        salePrice: {
          bsonType: 'number',
          description: 'Product sale price',
        },
        sku: {
          bsonType: 'string',
          description: 'sku',
        },
        sortOrder: {
          bsonType: 'int',
          description: 'Used to sort products',
        },
        dateCreated: {
          bsonType: 'date',
          description: 'Date created',
        },
        stockQty: {
          bsonType: 'int',
          description: 'Stock quantity',
        },
        qtySold: {
          bsonType: 'int',
          description: 'Quantity sold',
        },
        status: {
          enum: ['Draft', 'Archived', 'Published', 'Private'],
          description:
            'Status is required and can only be one of the following: Draft, Archived, Published or Private.',
        },
      },
    },
  },
}
