module.exports = {
    get: {
      tags: ["Todo CRUD operations"],
      description: "Get a todo",
      operationId: "getTodo",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            $ref: "#/components/schemas/id",
          },
          required: true,
          description: "A single todo id",
        },
      ],
      responses: {
        200: {
          description: "Todo is obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Object",
              },
            },
          },
        },
        404: {
          description: "Todo is not found",
        },
      },
    },
  };