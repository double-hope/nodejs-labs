module.exports = {
    components: {
      schemas: {
        id: {
          type: "string",
          description: "An id of a todo",
          example: "tyVgf",
        },
        Todo: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Todo identification number",
              example: "ytyVgh",
            },
            title: {
              type: "string",
              description: "Todo's title",
              example: "Coding in JavaScript",
            },
            completed: {
              type: "boolean",
              description: "The status of the todo",
              example: false,
            },
          },
        },
        TodoInput: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Todo's title",
              example: "Coding in JavaScript",
            },
            completed: {
              type: "boolean",
              description: "The status of the todo",
              example: false,
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
              example: "Not found",
            },
            internal_code: {
              type: "string",
              description: "Error internal code",
              example: "Invalid parameters",
            },
          },
        },
      },
    },
  };