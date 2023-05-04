module.exports = {
    post: {
        tags: ["Category CRUD operations"],
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
                content: {
                    "application/json": [{
                        schema: {
                            $ref: "#/components/schemas/Category",
                        },
                    }],
                },
            },
            400: {
                description: "Name, price and description are required",
            },
        },
    },
};