export const authUser = {
    post: {
        tags: ['User'],
        description: 'Auth user',
        operationId: 'authUser',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            email: {
                                type: 'string',
                            },
                            password: {
                                type: 'string',
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