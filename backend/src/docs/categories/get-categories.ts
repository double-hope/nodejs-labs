export const getCategories = {
    get: {
        tags: ['Category'],
        description: 'Get all categories',
        operationId: 'getCategories',
        parameters: [],
        responses: {
            200: {
                description: 'Categories were returned',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Category',
                            }
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