export const refreshUserToken = {
    get: {
        tags: ['User'],
        description: 'Refresh user\'s token',
        operationId: 'refreshToken',
        parameters: [],
        requestBody: {},
        responses: {
            200: {
                description: 'User\s token was refreshed',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
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