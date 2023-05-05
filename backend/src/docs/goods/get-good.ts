module.exports = {
    get: {
        tags: ["Good CRUD operations"],
        description: "Get a good",
        operationId: "getGood",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "A single good id",
            },
        ],
        responses: {
            200: {
                description: "Good is obtained",
            },
            404: {
                description: "Good was not found",
            },
            500:{
                description: "Server error"
            }
        },
    },
};