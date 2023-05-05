module.exports = {
    delete: {
        tags: ["Good CRUD operations"],
        description: "Deleting a good",
        operationId: "deleteGood",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Good was deleted successfully",
            },
            404:{
                description: "Good was not found",
            },
            500: {
                description: "Server error",
            },
        },
    },
};