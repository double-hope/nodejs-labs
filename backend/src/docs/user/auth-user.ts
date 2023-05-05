export const authUser = {
    post: {
        tags: ["User"],
        description: "Auth user",
        operationId: "authUser",
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
                description: "Category was created successfully",
            },
            400: {
                description: "Empty inputs",
                content:{
                    "application/json":{
                        message:"Email and password required"
                    }
                }
            },
            401:{
                description:"Null user",
                content:{
                    "application/json":{
                        message:"Not found"
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