export const getGoods = {
    get: {
        tags: ['Good'],
        description: 'Get goods',
        operationId: 'getGoods',
        parameters: [],
        responses: {
            200: {
                description: 'Goods were returned',
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