module.exports = {
    post: {
        tags: ["User CRUD operations"],
        description: "Register user",
        operationId: "registerUser",
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
            201: {
                description: "Category was created successfully",
            },
            400: {
                description: "User already exists",
                content:{
                    "application/json":{
                        message:"User with  this email already exists"
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