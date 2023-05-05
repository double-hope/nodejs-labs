module.exports = {
    get: {
        tags: ["User CRUD operations"],
        description: "User's Refresh Token",
        operationId: "refreshToken",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/", //TODO create scheme
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Refresh Token OK",
            },
            401: {
                description: "Null User",
                content:{
                    "application/json":{
                        message:"Not Found"
                    }
                }
            },
            500: {
                description: "Server Error",
                content:{
                    "application/json":{
                        message:"Internal server error"
                    }
                }
            },
        },
    },
};