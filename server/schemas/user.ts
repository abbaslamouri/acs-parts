export default {
  validator: {
    $jsonSchema: {
      required: [
        'name',
        'email',
        'role',
        'password',
        'verified',
        'active',
        'accountNumber',
        'passwordChangeDate',
        'signupDate',
      ],
      properties: {
        name: {
          bsonType: 'string',
          description: 'User name is required and 200 characters max',
          maxLength: 200,
        },
        email: {
          bsonType: 'string',
          description: 'User email is required and 200 characters max',
          pattern: '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$',
        },
        userAddresses: {
          bsonType: 'array',
          description: 'User Addresses',
          required: ['addressLine1', 'city', 'state', 'postalCode', 'defaultShippingAddress', 'defaultBillingAddress'],
          properties: {
            title: {
              bsonType: 'string',
              description: 'User address title is required and 200 characters max',
              maxLength: 5,
            },
            company: {
              bsonType: 'string',
              description: 'User address company is required and 200 characters max',
              maxLength: 50,
            },
            name: {
              bsonType: 'string',
              description: 'User address name is required and 200 characters max',
              maxLength: 50,
            },
            addressLine1: {
              bsonType: 'string',
              description: 'User address line 1 is required and 200 characters max',
              maxLength: 100,
            },
            addressLine2: {
              bsonType: 'string',
              description: 'User address line 2 is required and 200 characters max',
              maxLength: 100,
            },
            city: {
              bsonType: 'string',
              description: 'User address city is required and 200 characters max',
              maxLength: 100,
            },
            state: {
              bsonType: 'objectId',
              description: 'User address state is required and 200 characters max',
              maxLength: 20,
            },
            postalCode: {
              bsonType: 'string',
              description: 'User address postal code is required and 200 characters max',
              maxLength: 100,
            },
            country: {
              bsonType: 'objectId',
              description: 'User address countryis required and 200 characters max',
              maxLength: 20,
            },
            addressType: {
              enum: ['Residential', 'Commercial'],
              description: 'Address type and is required',
            },
            defaultShippingAddress: {
              bsonType: 'bool',
              description: 'Default shipping addrreess',
            },
            defaultBillingAddress: {
              bsonType: 'bool',
              description: 'Default billing addrreess',
            },
            deliveryInstructions: {
              bsonType: 'string',
              description: 'Delivery instructions is required and 200 characters max',
              maxLength: 2000,
            },
            phonenumbers: {
              bsonType: 'array',
              description: 'User phonenumbers',
              required: ['phoneNumber', 'defaultPhone'],
              properties: {
                phoneType: {
                  bsonType: 'string',
                  description: 'User address title is required and 200 characters max',
                  maxLength: 5,
                },
                phoneCountryCode: {
                  bsonType: 'objectId',
                  description: 'phone country code is required and 200 characters max',
                  maxLength: 20,
                },
                phoneNumber: {
                  bsonType: 'string',
                  description: 'User phone number is required and 200 characters max',
                  maxLength: 50,
                },
                defaultPhone: {
                  bsonType: 'bool',
                  description: 'Default phone',
                },
              },
            },
          },
        },
        media: {
          bsonType: 'array',
          description: 'User gallery',
          uniqueItems: true,
          items: {
            bsonType: 'objectId',
          },
        },
        role: {
          enum: ['super-admin', 'admin', 'shop-manager', 'customer', 'user'],
          description: 'User role and is required',
        },
        password: {
          bsonType: 'string',
          description: 'User password is required',
          minLength: 8,
          maxLength: 2000,
        },
        active: {
          bsonType: 'bool',
          description: 'Whether the user is active',
        },
        verified: {
          bsonType: 'bool',
          description: 'Whether the user is verified',
        },
        passwordResetToken: {
          bsonType: ['string', 'null'],
          description: 'Password reset token',
        },
        passwordResetExpires: {
          bsonType: ['date', 'null'],
          description: 'Password reset token expiry',
        },
        passwordChangeDate: {
          bsonType: 'date',
          description: 'Password change date',
        },
      },
    },
  },
}

// export default userSchema
