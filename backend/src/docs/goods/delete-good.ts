export const deleteGood = {
    delete: {
        tags: ['Good'],
        description: 'Delete good',
        operationId: 'deleteGood',
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
                description: 'Good was deleted',
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