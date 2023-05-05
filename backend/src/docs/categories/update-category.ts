export const updateCategory = {
    put: {
        tags: ['Category'],
        description: 'Update category',
        operationId: 'updateCategory',
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
                        },
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Category was updated',
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
            404: {
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