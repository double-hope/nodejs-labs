module.exports = {
    get: {
        tags: ["Goods CRUD operations"],
        description: "Get goods",
        operationId: "getGoods",
        parameters: [],
        responses: {
            200: {
                description: "Goods were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Good",
                        },
                    },
                },
            },
        },
    },
};