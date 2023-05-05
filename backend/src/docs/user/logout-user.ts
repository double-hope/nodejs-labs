module.exports = {
    get: {
        tags: ["User CRUD operations"],
        description: "User logout",
        operationId: "logoutUser",
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
            204: {
                description: "Successful logot",
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