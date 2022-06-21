export type MerchStore = {
  version: "0.1.0";
  name: "merch_store";
  instructions: [
    {
      name: "initializeStore";
      accounts: [
        {
          name: "key";
          isMut: false;
          isSigner: false;
        },
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        }
      ];
    },
    {
      name: "newMerch";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "key";
          isMut: false;
          isSigner: false;
        },
        {
          name: "merch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "imageFront";
          type: "string";
        },
        {
          name: "imageBack";
          type: "string";
        },
        {
          name: "price";
          type: "u64";
        },
        {
          name: "description";
          type: "string";
        },
        {
          name: "size";
          type: {
            vec: "string";
          };
        },
        {
          name: "color";
          type: {
            vec: "string";
          };
        },
        {
          name: "stock";
          type: "u64";
        }
      ];
    },
    {
      name: "updateMerch";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "merch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "imageFront";
          type: "string";
        },
        {
          name: "imageBack";
          type: "string";
        },
        {
          name: "price";
          type: "u64";
        },
        {
          name: "description";
          type: "string";
        },
        {
          name: "size";
          type: {
            vec: "string";
          };
        },
        {
          name: "color";
          type: {
            vec: "string";
          };
        },
        {
          name: "stock";
          type: "u64";
        }
      ];
    },
    {
      name: "initOrder";
      accounts: [
        {
          name: "jungle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakerInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transactionBatch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "key";
          isMut: false;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        },
        {
          name: "buyer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "jungleProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "shippingCharges";
          type: "u64";
        }
      ];
    },
    {
      name: "addItem";
      accounts: [
        {
          name: "jungle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakerInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transactionBatch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        },
        {
          name: "merch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "buyer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "jungleProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "quantity";
          type: "u64";
        },
        {
          name: "size";
          type: "string";
        },
        {
          name: "color";
          type: "string";
        }
      ];
    },
    {
      name: "finalizeOrder";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "confirmOrder";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "cancelOrder";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "completeOrder";
      accounts: [
        {
          name: "store";
          isMut: true;
          isSigner: false;
        },
        {
          name: "order";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "store";
      type: {
        kind: "struct";
        fields: [
          {
            name: "key";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "owner";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "merch";
      type: {
        kind: "struct";
        fields: [
          {
            name: "store";
            type: "publicKey";
          },
          {
            name: "key";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "imageFront";
            type: "string";
          },
          {
            name: "imageBack";
            type: "string";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "size";
            type: {
              vec: "string";
            };
          },
          {
            name: "color";
            type: {
              vec: "string";
            };
          },
          {
            name: "stock";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "order";
      type: {
        kind: "struct";
        fields: [
          {
            name: "store";
            type: "publicKey";
          },
          {
            name: "key";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "shippingCharges";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          },
          {
            name: "status";
            type: "u8";
          },
          {
            name: "items";
            type: {
              vec: {
                defined: "OrderItem";
              };
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "OrderItem";
      type: {
        kind: "struct";
        fields: [
          {
            name: "merch";
            type: "publicKey";
          },
          {
            name: "quantity";
            type: "u64";
          },
          {
            name: "size";
            type: "u8";
          },
          {
            name: "color";
            type: "u8";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "OutOfStock";
      msg: "Merch item stock is empty";
    },
    {
      code: 6001;
      name: "LowStock";
      msg: "Merch item is low on stock";
    },
    {
      code: 6002;
      name: "OrderFinalized";
      msg: "Order is already finalized!";
    },
    {
      code: 6003;
      name: "OrderConfirmed";
      msg: "Order is already confirmed!";
    },
    {
      code: 6004;
      name: "OrderCancelled";
      msg: "Order is cancelled!";
    },
    {
      code: 6005;
      name: "OrderCompleted";
      msg: "Order is completed!";
    }
  ];
};

export const IDL: MerchStore = {
  version: "0.1.0",
  name: "merch_store",
  instructions: [
    {
      name: "initializeStore",
      accounts: [
        {
          name: "key",
          isMut: false,
          isSigner: false,
        },
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
      ],
    },
    {
      name: "newMerch",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "key",
          isMut: false,
          isSigner: false,
        },
        {
          name: "merch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "imageFront",
          type: "string",
        },
        {
          name: "imageBack",
          type: "string",
        },
        {
          name: "price",
          type: "u64",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "size",
          type: {
            vec: "string",
          },
        },
        {
          name: "color",
          type: {
            vec: "string",
          },
        },
        {
          name: "stock",
          type: "u64",
        },
      ],
    },
    {
      name: "updateMerch",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "merch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "imageFront",
          type: "string",
        },
        {
          name: "imageBack",
          type: "string",
        },
        {
          name: "price",
          type: "u64",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "size",
          type: {
            vec: "string",
          },
        },
        {
          name: "color",
          type: {
            vec: "string",
          },
        },
        {
          name: "stock",
          type: "u64",
        },
      ],
    },
    {
      name: "initOrder",
      accounts: [
        {
          name: "jungle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakerInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transactionBatch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "key",
          isMut: false,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
        {
          name: "buyer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "jungleProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "shippingCharges",
          type: "u64",
        },
      ],
    },
    {
      name: "addItem",
      accounts: [
        {
          name: "jungle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakerInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transactionBatch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
        {
          name: "merch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "buyer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "jungleProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "quantity",
          type: "u64",
        },
        {
          name: "size",
          type: "string",
        },
        {
          name: "color",
          type: "string",
        },
      ],
    },
    {
      name: "finalizeOrder",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "confirmOrder",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "cancelOrder",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "completeOrder",
      accounts: [
        {
          name: "store",
          isMut: true,
          isSigner: false,
        },
        {
          name: "order",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "store",
      type: {
        kind: "struct",
        fields: [
          {
            name: "key",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "owner",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "merch",
      type: {
        kind: "struct",
        fields: [
          {
            name: "store",
            type: "publicKey",
          },
          {
            name: "key",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "imageFront",
            type: "string",
          },
          {
            name: "imageBack",
            type: "string",
          },
          {
            name: "price",
            type: "u64",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "size",
            type: {
              vec: "string",
            },
          },
          {
            name: "color",
            type: {
              vec: "string",
            },
          },
          {
            name: "stock",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "order",
      type: {
        kind: "struct",
        fields: [
          {
            name: "store",
            type: "publicKey",
          },
          {
            name: "key",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "shippingCharges",
            type: "u64",
          },
          {
            name: "timestamp",
            type: "i64",
          },
          {
            name: "status",
            type: "u8",
          },
          {
            name: "items",
            type: {
              vec: {
                defined: "OrderItem",
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "OrderItem",
      type: {
        kind: "struct",
        fields: [
          {
            name: "merch",
            type: "publicKey",
          },
          {
            name: "quantity",
            type: "u64",
          },
          {
            name: "size",
            type: "u8",
          },
          {
            name: "color",
            type: "u8",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "OutOfStock",
      msg: "Merch item stock is empty",
    },
    {
      code: 6001,
      name: "LowStock",
      msg: "Merch item is low on stock",
    },
    {
      code: 6002,
      name: "OrderFinalized",
      msg: "Order is already finalized!",
    },
    {
      code: 6003,
      name: "OrderConfirmed",
      msg: "Order is already confirmed!",
    },
    {
      code: 6004,
      name: "OrderCancelled",
      msg: "Order is cancelled!",
    },
    {
      code: 6005,
      name: "OrderCompleted",
      msg: "Order is completed!",
    },
  ],
};
