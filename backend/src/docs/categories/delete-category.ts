export const deleteCategory = {
    delete: {
        tags: ['Category'],
        description: 'Deleting category',
        operationId: 'deleteCategory',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'integer',
                                example: 1,
                            }
                        }
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'Category was deleted',
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
            400:{
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