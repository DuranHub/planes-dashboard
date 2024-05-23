/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "AssignmentArea",
        "fields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AssignmentArea",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "AssignmentAreaScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AssignmentAreaOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "User",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedManyWithoutParentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutAssignmentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateManyInput",
        "inputFields": [
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateManyParentAreaInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateManyParentAreaInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaCreateManyParentAreaInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateNestedManyWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaCreateOrConnectWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaCreateWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateManyParentAreaInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateNestedOneWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateOrConnectWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateWithoutChildAreasInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateNestedOneWithoutUserInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateOrConnectWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateWithoutUserInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateOrConnectWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutChildAreasInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateOrConnectWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutParentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateOrConnectWithoutUserInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutUserInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutAssignmentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedManyWithoutParentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutAssignmentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaCreateWithoutUserInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedManyWithoutParentAreaInput",
              "ofType": null
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaNullableRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "AssignmentAreaScalarFieldEnum",
        "enumValues": [
          {
            "name": "ParentAreaId"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "description"
          },
          {
            "name": "id"
          },
          {
            "name": "machineName"
          },
          {
            "name": "name"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateManyWithoutParentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutChildAreasNestedInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutAssignmentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateManyWithWhereWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateManyWithoutParentAreaNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaCreateOrConnectWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaCreateWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateManyParentAreaInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaUpdateWithWhereUniqueWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaUpdateManyWithWhereWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaUpsertWithWhereUniqueWithoutParentAreaInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateOneWithoutChildAreasNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateOrConnectWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateToOneWithWhereWithoutChildAreasInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpsertWithoutChildAreasInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateOneWithoutUserNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateOrConnectWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateToOneWithWhereWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpsertWithoutUserInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateToOneWithWhereWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutChildAreasInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateToOneWithWhereWithoutUserInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutUserInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateWithWhereUniqueWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutParentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutChildAreasNestedInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutAssignmentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateManyWithoutParentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutAssignmentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpdateWithoutUserInput",
        "inputFields": [
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateManyWithoutParentAreaNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutChildAreasNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpsertWithWhereUniqueWithoutParentAreaInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutParentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutParentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpsertWithoutChildAreasInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutChildAreasInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutChildAreasInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaUpsertWithoutUserInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaCreateWithoutUserInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssignmentAreaUpdateWithoutUserInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssignmentAreaWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ChildAreas",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "User",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "BatchPayload",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "decrement",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "divide",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "increment",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "multiply",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_avg",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedFloatFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_sum",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Json"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "JsonFilter",
        "inputFields": [
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "JsonNullValueFilter",
        "enumValues": [
          {
            "name": "AnyNull"
          },
          {
            "name": "DbNull"
          },
          {
            "name": "JsonNull"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "JsonNullValueInput",
        "enumValues": [
          {
            "name": "JsonNull"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "JsonNullableFilter",
        "inputFields": [
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "JsonNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedJsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedJsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "JsonWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedJsonFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedJsonFilter",
              "ofType": null
            }
          },
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Level",
        "fields": [
          {
            "name": "Category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LevelCategory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Level",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "OBJECT",
              "name": "Level",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "Project",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Project",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "advance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "percentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelAvgOrderByAggregateInput",
        "inputFields": [
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LevelCategory",
        "fields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "LevelCategory",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelCategoryScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelCategoryOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "Levels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Level",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "OBJECT",
              "name": "LevelCategory",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedManyWithoutParentCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedOneWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateManyInput",
        "inputFields": [
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateManyParentCategoryInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateManyParentCategoryInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryCreateManyParentCategoryInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateNestedManyWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryCreateOrConnectWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryCreateWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateManyParentCategoryInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateNestedOneWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateOrConnectWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateWithoutChildCategoriesInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateNestedOneWithoutLevelsInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateOrConnectWithoutLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateWithoutLevelsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateOrConnectWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutChildCategoriesInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateOrConnectWithoutLevelsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateOrConnectWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutParentCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedOneWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateWithoutLevelsInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedManyWithoutParentCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedOneWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryCreateWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateNestedManyWithoutParentCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutCategoryInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryNullableRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "LevelCategoryScalarFieldEnum",
        "enumValues": [
          {
            "name": "ParentCategoryId"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "description"
          },
          {
            "name": "id"
          },
          {
            "name": "machineName"
          },
          {
            "name": "name"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateManyWithoutParentCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneWithoutChildCategoriesNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateManyWithWhereWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateManyWithoutParentCategoryNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryCreateOrConnectWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryCreateWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateManyParentCategoryInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryUpdateWithWhereUniqueWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryUpdateManyWithWhereWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryUpsertWithWhereUniqueWithoutParentCategoryInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateOneRequiredWithoutLevelsNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateOrConnectWithoutLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateWithoutLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateToOneWithWhereWithoutLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpsertWithoutLevelsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateOneWithoutChildCategoriesNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateOrConnectWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryCreateWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateToOneWithWhereWithoutChildCategoriesInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpsertWithoutChildCategoriesInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateToOneWithWhereWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutChildCategoriesInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateToOneWithWhereWithoutLevelsInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateWithWhereUniqueWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutParentCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneWithoutChildCategoriesNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateWithoutLevelsInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateManyWithoutParentCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneWithoutChildCategoriesNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpdateWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateManyWithoutParentCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutCategoryNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpsertWithWhereUniqueWithoutParentCategoryInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutParentCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutParentCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpsertWithoutChildCategoriesInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutChildCategoriesInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutChildCategoriesInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryUpsertWithoutLevelsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryUpdateWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCategoryWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ChildCategories",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "Levels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentCategory",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateNestedOneWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutParentLevelInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedOneWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLevelInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateManyCategoryInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateManyCategoryInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCreateManyCategoryInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateManyInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateManyParentLevelInput",
        "inputFields": [
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateManyParentLevelInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCreateManyParentLevelInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateNestedManyWithoutCategoryInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateOrConnectWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateManyCategoryInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateNestedManyWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateOrConnectWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateManyParentLevelInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateNestedOneWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateOrConnectWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateWithoutChildLevelsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateNestedOneWithoutProjectInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateOrConnectWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateWithoutProjectInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateOrConnectWithoutCategoryInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateOrConnectWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutChildLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateOrConnectWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutParentLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateOrConnectWithoutProjectInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateWithoutCategoryInput",
        "inputFields": [
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutParentLevelInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedOneWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLevelInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateNestedOneWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedOneWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLevelInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateNestedOneWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutParentLevelInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLevelInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelCreateWithoutProjectInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCategoryCreateNestedOneWithoutLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedManyWithoutParentLevelInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateNestedOneWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelNullableRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "_avg",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelAvgOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_sum",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelSumOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "LevelScalarFieldEnum",
        "enumValues": [
          {
            "name": "ParentLevelId"
          },
          {
            "name": "advance"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "description"
          },
          {
            "name": "id"
          },
          {
            "name": "levelCategoryId"
          },
          {
            "name": "machineName"
          },
          {
            "name": "name"
          },
          {
            "name": "percentage"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelSumOrderByAggregateInput",
        "inputFields": [
          {
            "name": "advance",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneRequiredWithoutLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutParentLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneWithoutChildLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateManyWithWhereWithoutCategoryInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateManyWithWhereWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateManyWithoutCategoryNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateOrConnectWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateManyCategoryInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpdateWithWhereUniqueWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpdateManyWithWhereWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpsertWithWhereUniqueWithoutCategoryInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateManyWithoutParentLevelNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateOrConnectWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCreateWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateManyParentLevelInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpdateWithWhereUniqueWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpdateManyWithWhereWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelUpsertWithWhereUniqueWithoutParentLevelInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateOneRequiredWithoutProjectNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateOrConnectWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateToOneWithWhereWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpsertWithoutProjectInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateOneWithoutChildLevelsNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateOrConnectWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCreateWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateToOneWithWhereWithoutChildLevelsInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpsertWithoutChildLevelsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateToOneWithWhereWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutChildLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateToOneWithWhereWithoutProjectInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithWhereUniqueWithoutCategoryInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithWhereUniqueWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutParentLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithoutCategoryInput",
        "inputFields": [
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutParentLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneWithoutChildLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneRequiredWithoutLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneWithoutChildLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneRequiredWithoutLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutParentLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpdateWithoutProjectInput",
        "inputFields": [
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryUpdateOneRequiredWithoutLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateManyWithoutParentLevelNestedInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneWithoutChildLevelsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpsertWithWhereUniqueWithoutCategoryInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutCategoryInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpsertWithWhereUniqueWithoutParentLevelInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutParentLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutParentLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpsertWithoutChildLevelsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutChildLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutChildLevelsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelUpsertWithoutProjectInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelUpdateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "LevelWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "Category",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelCategoryWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ChildLevels",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "ParentLevel",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "ParentLevelId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "advance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "levelCategoryId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "percentage",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createManyAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AssignmentArea",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "AssignmentAreaCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createManyLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Level",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "LevelCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createManyLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "LevelCategory",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "LevelCategoryCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createManyProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Procedure",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ProcedureCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createManyProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Project",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ProjectCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UserCreateInput",
                        "ofType": null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "createOneAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssignmentArea",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createOneLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Level",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createOneLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LevelCategory",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createOneProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Procedure",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createOneProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createOneUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyAssignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyLevel",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyLevelCategory",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyProcedure",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyProject",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyUser",
            "type": {
              "kind": "OBJECT",
              "name": "BatchPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneAssignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneLevel",
            "type": {
              "kind": "OBJECT",
              "name": "Level",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneLevelCategory",
            "type": {
              "kind": "OBJECT",
              "name": "LevelCategory",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneProcedure",
            "type": {
              "kind": "OBJECT",
              "name": "Procedure",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateManyLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateManyLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateManyProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateManyProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BatchPayload",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateOneAssignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneLevel",
            "type": {
              "kind": "OBJECT",
              "name": "Level",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneLevelCategory",
            "type": {
              "kind": "OBJECT",
              "name": "LevelCategory",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneProcedure",
            "type": {
              "kind": "OBJECT",
              "name": "Procedure",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AssignmentArea",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Level",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LevelCategory",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Procedure",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedFloatFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedFloatFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedIntFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedIntNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedIntWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_avg",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedFloatFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_sum",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedJsonFilter",
        "inputFields": [
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedJsonNullableFilter",
        "inputFields": [
          {
            "name": "array_contains",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "array_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "path",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "string_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_ends_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "string_starts_with",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringFilter",
        "inputFields": [
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringNullableFilter",
        "inputFields": [
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NullableDateTimeFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "NullableJsonNullValueInput",
        "enumValues": [
          {
            "name": "DbNull"
          },
          {
            "name": "JsonNull"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NullableStringFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "NullsOrder",
        "enumValues": [
          {
            "name": "first"
          },
          {
            "name": "last"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Procedure",
        "fields": [
          {
            "name": "Project",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "projectId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateInput",
        "inputFields": [
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedOneWithoutProceduresInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateManyInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateManyProjectInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateManyProjectInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureCreateManyProjectInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateNestedManyWithoutProjectInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureCreateOrConnectWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureCreateWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateManyProjectInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateOrConnectWithoutProjectInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureCreateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureCreateWithoutProjectInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProcedureScalarFieldEnum",
        "enumValues": [
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "id"
          },
          {
            "name": "machineName"
          },
          {
            "name": "name"
          },
          {
            "name": "projectId"
          },
          {
            "name": "state"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateInput",
        "inputFields": [
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateOneWithoutProceduresNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateManyWithWhereWithoutProjectInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateManyWithoutProjectNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureCreateOrConnectWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureCreateWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateManyProjectInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureUpdateWithWhereUniqueWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureUpdateManyWithWhereWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureUpsertWithWhereUniqueWithoutProjectInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateWithWhereUniqueWithoutProjectInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureUpdateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpdateWithoutProjectInput",
        "inputFields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureUpsertWithWhereUniqueWithoutProjectInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureCreateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureUpdateWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProcedureWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProcedureWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "Project",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "projectId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Project",
        "fields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "leader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Level",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "levelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "procedures",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Procedure",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProcedureScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProcedureOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectAvgOrderByAggregateInput",
        "inputFields": [
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutCollaboratorOfInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateNestedOneWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateNestedOneWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateNestedManyWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateManyInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateManyLeaderInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateManyLeaderInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectCreateManyLeaderInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateManyLevelInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateManyLevelInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectCreateManyLevelInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateNestedManyWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateNestedManyWithoutLeaderInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateManyLeaderInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateNestedManyWithoutLevelInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateManyLevelInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateNestedOneWithoutProceduresInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateOrConnectWithoutProceduresInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateWithoutProceduresInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateOrConnectWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutCollaboratorsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateOrConnectWithoutLeaderInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutLeaderInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateOrConnectWithoutLevelInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateOrConnectWithoutProceduresInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutProceduresInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateNestedOneWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateNestedOneWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateNestedManyWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateWithoutLeaderInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutCollaboratorOfInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateNestedOneWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateNestedManyWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateWithoutLevelInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutCollaboratorOfInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateNestedOneWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureCreateNestedManyWithoutProjectInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectCreateWithoutProceduresInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateNestedManyWithoutCollaboratorOfInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateNestedOneWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "LevelCreateNestedOneWithoutProjectInput",
                "ofType": null
              }
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectNullableRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "_avg",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectAvgOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_sum",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectSumOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "account",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProjectScalarFieldEnum",
        "enumValues": [
          {
            "name": "account"
          },
          {
            "name": "archiveBox"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "description"
          },
          {
            "name": "goal"
          },
          {
            "name": "id"
          },
          {
            "name": "leaderId"
          },
          {
            "name": "levelId"
          },
          {
            "name": "machineName"
          },
          {
            "name": "name"
          },
          {
            "name": "places"
          },
          {
            "name": "progressUnit"
          },
          {
            "name": "requirements"
          },
          {
            "name": "transitions"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectSumOrderByAggregateInput",
        "inputFields": [
          {
            "name": "goal",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutCollaboratorOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateOneRequiredWithoutLeaderOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneRequiredWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureUpdateManyWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithWhereWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithWhereWithoutLeaderInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithWhereWithoutLevelInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithoutCollaboratorsNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateManyWithWhereWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithoutLeaderNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateManyLeaderInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateWithWhereUniqueWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateManyWithWhereWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpsertWithWhereUniqueWithoutLeaderInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateManyWithoutLevelNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateOrConnectWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectCreateWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateManyLevelInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateWithWhereUniqueWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpdateManyWithWhereWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectUpsertWithWhereUniqueWithoutLevelInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateOneWithoutProceduresNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateOrConnectWithoutProceduresInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateWithoutProceduresInput",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateToOneWithWhereWithoutProceduresInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpsertWithoutProceduresInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateToOneWithWhereWithoutProceduresInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutProceduresInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutCollaboratorsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithWhereUniqueWithoutLeaderInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutLeaderInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithWhereUniqueWithoutLevelInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateOneRequiredWithoutLeaderOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneRequiredWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureUpdateManyWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithoutLeaderInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutCollaboratorOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneRequiredWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureUpdateManyWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithoutLevelInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutCollaboratorOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateOneRequiredWithoutLeaderOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureUpdateManyWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpdateWithoutProceduresInput",
        "inputFields": [
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateManyWithoutCollaboratorOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateOneRequiredWithoutLeaderOfNestedInput",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelUpdateOneRequiredWithoutProjectNestedInput",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutCollaboratorsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutCollaboratorsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpsertWithWhereUniqueWithoutLeaderInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutLeaderInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutLeaderInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpsertWithWhereUniqueWithoutLevelInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutLevelInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectUpsertWithoutProceduresInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectCreateWithoutProceduresInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectUpdateWithoutProceduresInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "archiveBox",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "collaborators",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "goal",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "leader",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "leaderId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "level",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "LevelWhereInput",
              "ofType": null
            }
          },
          {
            "name": "levelId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "machineName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "places",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "procedures",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProcedureListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "progressUnit",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "requirements",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "transitions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "countAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "AssignmentAreaScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AssignmentAreaOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "countLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "countLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelCategoryScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelCategoryOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "countProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProcedureScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProcedureOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "countProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "countUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstAssignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "AssignmentAreaScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AssignmentAreaOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstLevel",
            "type": {
              "kind": "OBJECT",
              "name": "Level",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstLevelCategory",
            "type": {
              "kind": "OBJECT",
              "name": "LevelCategory",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelCategoryScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelCategoryOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstProcedure",
            "type": {
              "kind": "OBJECT",
              "name": "Procedure",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProcedureScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProcedureOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyAssignmentArea",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AssignmentArea",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "AssignmentAreaScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AssignmentAreaOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssignmentAreaWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Level",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyLevelCategory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "LevelCategory",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "LevelCategoryScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LevelCategoryOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "LevelCategoryWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyProcedure",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Procedure",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProcedureScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProcedureOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProcedureWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyProject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Project",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findUniqueAssignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AssignmentAreaWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "findUniqueLevel",
            "type": {
              "kind": "OBJECT",
              "name": "Level",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "findUniqueLevelCategory",
            "type": {
              "kind": "OBJECT",
              "name": "LevelCategory",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "LevelCategoryWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "findUniqueProcedure",
            "type": {
              "kind": "OBJECT",
              "name": "Procedure",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProcedureWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "findUniqueProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ProjectWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "findUniqueUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "QueryMode",
        "enumValues": [
          {
            "name": "default"
          },
          {
            "name": "insensitive"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "enumValues": [
          {
            "name": "asc"
          },
          {
            "name": "desc"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFilter",
        "inputFields": [
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringNullableFilter",
        "inputFields": [
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringWithAggregatesFilter",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TransactionIsolationLevel",
        "enumValues": [
          {
            "name": "Serializable"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "OBJECT",
              "name": "AssignmentArea",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Project",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Project",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ProjectScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ProjectOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutCollaboratorsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLeaderInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateManyAssignmentAreaInput",
        "inputFields": [
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateManyAssignmentAreaInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserCreateManyAssignmentAreaInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateManyInput",
        "inputFields": [
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateNestedManyWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateOrConnectWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateManyAssignmentAreaInputEnvelope",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateNestedManyWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateOrConnectWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateNestedOneWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateOrConnectWithoutLeaderOfInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateWithoutLeaderOfInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateOrConnectWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutAssignmentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateOrConnectWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutCollaboratorOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateOrConnectWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutCollaboratorsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLeaderInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutLeaderInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaCreateNestedOneWithoutUserInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectCreateNestedManyWithoutCollaboratorsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserMinOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaOrderByWithRelationInput",
              "ofType": null
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectOrderByRelationAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "UserScalarFieldEnum",
        "enumValues": [
          {
            "name": "assignmentAreaId"
          },
          {
            "name": "avatar"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "deleteAt"
          },
          {
            "name": "email"
          },
          {
            "name": "id"
          },
          {
            "name": "identification"
          },
          {
            "name": "name"
          },
          {
            "name": "notifications"
          },
          {
            "name": "permissions"
          },
          {
            "name": "position"
          },
          {
            "name": "updatedAt"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutUserNestedInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutCollaboratorsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLeaderNestedInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyWithWhereWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyWithWhereWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateManyMutationInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserScalarWhereInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyWithoutAssignmentAreaNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateOrConnectWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateManyAssignmentAreaInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpdateWithWhereUniqueWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpdateManyWithWhereWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpsertWithWhereUniqueWithoutAssignmentAreaInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyWithoutCollaboratorOfNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateOrConnectWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCreateWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpdateWithWhereUniqueWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpdateManyWithWhereWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserUpsertWithWhereUniqueWithoutCollaboratorOfInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateOneRequiredWithoutLeaderOfNestedInput",
        "inputFields": [
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateOrConnectWithoutLeaderOfInput",
              "ofType": null
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateWithoutLeaderOfInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateToOneWithWhereWithoutLeaderOfInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpsertWithoutLeaderOfInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateToOneWithWhereWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithWhereUniqueWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutAssignmentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithWhereUniqueWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutCollaboratorOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutCollaboratorsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLeaderNestedInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutUserNestedInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutLeaderNestedInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaUpdateOneWithoutUserNestedInput",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectUpdateManyWithoutCollaboratorsNestedInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableDateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "SCALAR",
              "name": "Json",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpsertWithWhereUniqueWithoutAssignmentAreaInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutAssignmentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutAssignmentAreaInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpsertWithWhereUniqueWithoutCollaboratorOfInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutCollaboratorOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutCollaboratorOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpsertWithoutLeaderOfInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutLeaderOfInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserWhereUniqueInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "assignmentArea",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AssignmentAreaWhereInput",
              "ofType": null
            }
          },
          {
            "name": "assignmentAreaId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "avatar",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "collaboratorOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "deleteAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "identification",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "leaderOf",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ProjectListRelationFilter",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "notifications",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "permissions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "JsonNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          }
        ]
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}