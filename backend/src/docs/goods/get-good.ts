export const getGood = {
    get: {
        tags: ['Good'],
        description: 'Get good',
        operationId: 'getGood',
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
                description: 'Good was returned',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Good',
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