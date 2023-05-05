export const updateCategory = {
    put: {
        tags: ["Category"],
        description: "Update category",
        operationId: "updateCategory",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Id of category to be updated",
            },
        ],
        responses: {
            200: {
                description: "Category was updated successfully",
            },
            404: {
                description: "Category was not found",
            },
            500: {
                description: "Server error",
            },
        },
    },
};