export const updateGood = {
    put: {
        tags: ['Good'],
        description: 'Update good',
        operationId: 'updateGood',
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
                description: 'Good was updated successfully',
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
    },
};