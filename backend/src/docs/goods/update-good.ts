module.exports = {
    put: {
        tags: ["Goods CRUD operations"],
        description: "Update good",
        operationId: "updateGood",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Id of good to be updated",
            },
        ],
        responses: {
            200: {
                description: "Good was updated successfully",
            },
            404: {
                description: "Good was not found",
            },
            500: {
                description: "Server error",
            },
        },
    },
};