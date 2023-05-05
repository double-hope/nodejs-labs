export default {
    components: {
      schemas: {
        Category: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Category identification number",
              example: 1,
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
            /*goods:{
              type: "object",
              description: "category goods",
              example: {
                  $ref: "#/definition/schemas/Good"
              }
            }*/
          },
        },
        Good: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Good identification number",
              example: 3,
            },
            name: {
              type: "string",
              description: "Good's title",
              example: "komp1",
            },
            price:{
              type: 'decimal',
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