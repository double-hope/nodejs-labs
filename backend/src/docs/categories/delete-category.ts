export const deleteCategory = {
    delete: {
        tags: ["Category"],
        description: "Deleting category",
        operationId: "deleteCategory",
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
            200: {
                description: "Category was deleted successfully",
            },
            400:{
              description: "ID was not found",
            },
        },
    },
};