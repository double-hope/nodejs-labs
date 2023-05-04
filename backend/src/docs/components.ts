module.exports = {
    components: {
      schemas: {
        id: {
          type: "string",
          description: "An id of an object",
          example: "1",
        },
        Object: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Object identification number",
              example: "3",
            },
            title: {
              type: "string",
              description: "Object's title",
              example: "Object",
            },
            description:{
              type: "string",
              description: "Object's description",
              example: "nice object, pretty well"
            }
          },
        },
        Category: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Category identification number",
              example: "1",
            },
            name: {
              type: "string",
              description: "Category's title",
              example: "komps",
            },
            description:{
              type: "string",
              description: "Category's description",
              example: "category with komps"
            },

          },
        },
        Good: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Good identification number",
              example: "3",
            },
            name: {
              type: "string",
              description: "Good's title",
              example: "komp1",
            },
            price:{
              type: 'int',
              description: "Good's price",
              example: 500
            },
            description:{
              type: "string",
              description: "Category's description",
              example: "nicec comp"
            },

          },
        },
      },
    },
  };