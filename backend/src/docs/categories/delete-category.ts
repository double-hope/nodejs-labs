module.exports = {
    delete: {
        tags: ["Category CRUD Operations"],
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
            201: {
                description: "Category was deleted successfully",
            },
            404:{
              description: "Category was not found",
            },
            500: {
                description: "Server error",
            },
        },
    },
};