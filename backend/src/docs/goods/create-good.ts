export const createGood = {
    post: {
        tags: ['Good'],
        description: 'Create good',
        operationId: 'createGood',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            description: {
                                type: 'string',
                            },
                            price: {
                                type: 'integer',
                            },
                        },
                    },
                },
            },
        },
        responses: {
            201: {
                description: 'Good was created',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                 $ref: '#/components/schemas/Good',
                            }
                        },
                    },
                },
            },
            400: {
                description: 'Error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: 'Name, price and description are required',
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
    }
};