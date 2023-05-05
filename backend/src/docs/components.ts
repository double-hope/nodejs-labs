export default {
    components: {
      schemas: {
        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Category id',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Category title',
              example: 'komps',
            },
            description: {
              type: 'string',
              description: 'Category description',
              example: 'category with komps'
            },
            goods: {
              type: 'array',
              description: 'Category goods',
              items: {
                $ref: '#/components/schemas/Good'
              }
            },
          },
        },
        Good: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Good id',
              example: 3,
            },
            name: {
              type: 'string',
              description: 'Good title',
              example: 'komp1',
            },
            price: {
              type: 'decimal',
              description: 'Good price',
              example: 500
            },
            description: {
              type: 'string',
              description: 'Good description',
              example: 'nicec comp'
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'User id',
              example: 3,
            },
            name: {
              type: 'string',
              description: 'User name',
              example: 'Kyle',
            },
            email: {
              type: 'string',
              description: 'User email',
              example: 'kyle@gmail.com'
            },
            password: {
              type: 'string',
              description: 'User password',
              example: 'qw12!@QW'
            },
            roles: {
              type: 'array',
              description: 'User roles',
              items: {
                $ref: '#/components/schemas/Role',
              }
            },
            refreshToken: {
              type: 'string',
              description: 'User\'s token to refresh access token',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            }
          },
        },
        Role: {
          type: 'string',
          description: 'Roles enum',
          enum: {
            ADMIN: 'ADMIN',
            EDITOR: 'EDITOR',
            USER: 'USER',
          }
        }
      },
    },
  };