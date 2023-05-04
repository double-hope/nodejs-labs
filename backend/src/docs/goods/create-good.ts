module.exports = {
    post: {
        tags: ["Goods CRUD operations"],
        description: "Create good",
        operationId: "createGood",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Good",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "good was created successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};