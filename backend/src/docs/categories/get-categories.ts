export const getCategories = {
    get: {
        tags: ["Category"],
        description: "Get categories",
        operationId: "getCategories",
        parameters: [],
        responses: {
            200: {
                description: "Categories were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Category",
                        },
                    },
                },
            },
        },
    },
};