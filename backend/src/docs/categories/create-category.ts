module.exports = {
    post: {
        tags: ["Category CRUD Operations"],
        description: "Create Category",
        operationId: "createCategory",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Category",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Category was created successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};