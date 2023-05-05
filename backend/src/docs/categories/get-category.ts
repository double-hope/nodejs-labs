export const getCategory = {
    get: {
        tags: ["Category"],
        description: "Get category",
        operationId: "getCategory",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "A single category id",
            },
        ],
        responses: {
            200: {
                description: "Category is obtained",
            },
            404: {
                description: "Category was not found",
            },
            500:{
                description: "Server error"
            }
        },
    },
};