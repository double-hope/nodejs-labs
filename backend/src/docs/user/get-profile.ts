export const getProfile = {
    post: {
        tags: ['User'],
        description: 'User\'s profile',
        operationId: 'profile',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'integed',
                            },
                            auth: {
                                type: 'boolean',
                            },
                        },
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'User was returned',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                user: {
                                    $ref: '#/components/schemas/User',
                                },
                                accessToken: {
                                    type: 'string',
                                }                                
                            }
                        },
                    },
                },
            },
            401:{
                description: 'Error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                message: {
                                    type: 'string',
                                    example: 'Error data',
                                },
                            },
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
                                    example: 'User was not found',
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