export const getCategory = {
    get: {
        tags: ['Category'],
        description: 'Get category',
        operationId: 'getCategory',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'A single category id',
            },
        ],
        responses: {
            200: {
                description: 'Category was returned',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Category',
                        },
                    },
                },
            },
            404:{
                description: 'Error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: 'Id was not found',
                                },
                            },
                        },
                    },
                },
            },
            500: {
                description: 'Error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: 'Internal server error',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};