import { JSONSchema7 } from "json-schema";

export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "InputTypes",
  type: "object",
  definitions: {
    GenreCountOrderByAggregateInput: {
      title: "GenreCountOrderByAggregateInput",
      description: "Input type for GenreCountOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreCreateInput: {
      title: "GenreCreateInput",
      description: "Input type for GenreCreateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        movies: {
          type: "string",
          title: "movies",
          description: "Field for movies",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        shows: {
          type: "string",
          title: "shows",
          description: "Field for shows",
        },
      },
      required: ["name"],
    },
    GenreCreateManyInput: {
      title: "GenreCreateManyInput",
      description: "Input type for GenreCreateManyInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    GenreCreateNestedOneWithoutMoviesInput: {
      title: "GenreCreateNestedOneWithoutMoviesInput",
      description: "Input type for GenreCreateNestedOneWithoutMoviesInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
      },
    },
    GenreCreateOrConnectWithoutMoviesInput: {
      title: "GenreCreateOrConnectWithoutMoviesInput",
      description: "Input type for GenreCreateOrConnectWithoutMoviesInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    GenreCreateWithoutMoviesInput: {
      title: "GenreCreateWithoutMoviesInput",
      description: "Input type for GenreCreateWithoutMoviesInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    GenreMaxOrderByAggregateInput: {
      title: "GenreMaxOrderByAggregateInput",
      description: "Input type for GenreMaxOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreMinOrderByAggregateInput: {
      title: "GenreMinOrderByAggregateInput",
      description: "Input type for GenreMinOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreOrderByWithAggregationInput: {
      title: "GenreOrderByWithAggregationInput",
      description: "Input type for GenreOrderByWithAggregationInput",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreOrderByWithRelationInput: {
      title: "GenreOrderByWithRelationInput",
      description: "Input type for GenreOrderByWithRelationInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        movies: {
          type: "string",
          title: "movies",
          description: "Field for movies",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        shows: {
          type: "string",
          title: "shows",
          description: "Field for shows",
        },
      },
    },
    GenreRelationFilter: {
      title: "GenreRelationFilter",
      description: "Input type for GenreRelationFilter",
      type: "object",
      properties: {
        is: {
          type: "string",
          title: "is",
          description: "Field for is",
        },
        isNot: {
          type: "string",
          title: "isNot",
          description: "Field for isNot",
        },
      },
    },
    GenreScalarWhereWithAggregatesInput: {
      title: "GenreScalarWhereWithAggregatesInput",
      description: "Input type for GenreScalarWhereWithAggregatesInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreUpdateInput: {
      title: "GenreUpdateInput",
      description: "Input type for GenreUpdateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        movies: {
          type: "string",
          title: "movies",
          description: "Field for movies",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        shows: {
          type: "string",
          title: "shows",
          description: "Field for shows",
        },
      },
    },
    GenreUpdateManyMutationInput: {
      title: "GenreUpdateManyMutationInput",
      description: "Input type for GenreUpdateManyMutationInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreUpdateOneRequiredWithoutMoviesNestedInput: {
      title: "GenreUpdateOneRequiredWithoutMoviesNestedInput",
      description:
        "Input type for GenreUpdateOneRequiredWithoutMoviesNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    GenreUpdateWithoutMoviesInput: {
      title: "GenreUpdateWithoutMoviesInput",
      description: "Input type for GenreUpdateWithoutMoviesInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreUpsertWithoutMoviesInput: {
      title: "GenreUpsertWithoutMoviesInput",
      description: "Input type for GenreUpsertWithoutMoviesInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
      },
      required: ["create", "update"],
    },
    GenreWhereInput: {
      title: "GenreWhereInput",
      description: "Input type for GenreWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        movies: {
          type: "string",
          title: "movies",
          description: "Field for movies",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        shows: {
          type: "string",
          title: "shows",
          description: "Field for shows",
        },
      },
    },
    GenreWhereUniqueInput: {
      title: "GenreWhereUniqueInput",
      description: "Input type for GenreWhereUniqueInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    IntFieldUpdateOperationsInput: {
      title: "IntFieldUpdateOperationsInput",
      description: "Input type for IntFieldUpdateOperationsInput",
      type: "object",
      properties: {
        decrement: {
          type: "integer",
          title: "decrement",
          description: "Field for decrement",
        },
        divide: {
          type: "integer",
          title: "divide",
          description: "Field for divide",
        },
        increment: {
          type: "integer",
          title: "increment",
          description: "Field for increment",
        },
        multiply: {
          type: "integer",
          title: "multiply",
          description: "Field for multiply",
        },
        set: {
          type: "integer",
          title: "set",
          description: "Field for set",
        },
      },
    },
    IntFilter: {
      title: "IntFilter",
      description: "Input type for IntFilter",
      type: "object",
      properties: {
        equals: {
          type: "integer",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "integer",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "integer",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "integer",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "integer",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "integer",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "integer",
          title: "notIn",
          description: "Field for notIn",
        },
      },
    },
    IntWithAggregatesFilter: {
      title: "IntWithAggregatesFilter",
      description: "Input type for IntWithAggregatesFilter",
      type: "object",
      properties: {
        _avg: {
          type: "string",
          title: "_avg",
          description: "Field for _avg",
        },
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        _sum: {
          type: "string",
          title: "_sum",
          description: "Field for _sum",
        },
        equals: {
          type: "integer",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "integer",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "integer",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "integer",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "integer",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "integer",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "integer",
          title: "notIn",
          description: "Field for notIn",
        },
      },
    },
    MovieAvgOrderByAggregateInput: {
      title: "MovieAvgOrderByAggregateInput",
      description: "Input type for MovieAvgOrderByAggregateInput",
      type: "object",
      properties: {
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieCountOrderByAggregateInput: {
      title: "MovieCountOrderByAggregateInput",
      description: "Input type for MovieCountOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieCreateInput: {
      title: "MovieCreateInput",
      description: "Input type for MovieCreateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["cast", "director", "genre", "synopsis", "title", "year"],
    },
    MovieCreateManyGenreInput: {
      title: "MovieCreateManyGenreInput",
      description: "Input type for MovieCreateManyGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["cast", "director", "synopsis", "title", "year"],
    },
    MovieCreateManyGenreInputEnvelope: {
      title: "MovieCreateManyGenreInputEnvelope",
      description: "Input type for MovieCreateManyGenreInputEnvelope",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        skipDuplicates: {
          type: "boolean",
          title: "skipDuplicates",
          description: "Field for skipDuplicates",
        },
      },
      required: ["data"],
    },
    MovieCreateManyInput: {
      title: "MovieCreateManyInput",
      description: "Input type for MovieCreateManyInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["cast", "director", "genreId", "synopsis", "title", "year"],
    },
    MovieCreateNestedManyWithoutGenreInput: {
      title: "MovieCreateNestedManyWithoutGenreInput",
      description: "Input type for MovieCreateNestedManyWithoutGenreInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
      },
    },
    MovieCreateOrConnectWithoutGenreInput: {
      title: "MovieCreateOrConnectWithoutGenreInput",
      description: "Input type for MovieCreateOrConnectWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    MovieCreateWithoutGenreInput: {
      title: "MovieCreateWithoutGenreInput",
      description: "Input type for MovieCreateWithoutGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["cast", "director", "synopsis", "title", "year"],
    },
    MovieListRelationFilter: {
      title: "MovieListRelationFilter",
      description: "Input type for MovieListRelationFilter",
      type: "object",
      properties: {
        every: {
          type: "string",
          title: "every",
          description: "Field for every",
        },
        none: {
          type: "string",
          title: "none",
          description: "Field for none",
        },
        some: {
          type: "string",
          title: "some",
          description: "Field for some",
        },
      },
    },
    MovieMaxOrderByAggregateInput: {
      title: "MovieMaxOrderByAggregateInput",
      description: "Input type for MovieMaxOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieMinOrderByAggregateInput: {
      title: "MovieMinOrderByAggregateInput",
      description: "Input type for MovieMinOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieOrderByRelationAggregateInput: {
      title: "MovieOrderByRelationAggregateInput",
      description: "Input type for MovieOrderByRelationAggregateInput",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
      },
    },
    MovieOrderByWithAggregationInput: {
      title: "MovieOrderByWithAggregationInput",
      description: "Input type for MovieOrderByWithAggregationInput",
      type: "object",
      properties: {
        _avg: {
          type: "string",
          title: "_avg",
          description: "Field for _avg",
        },
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        _sum: {
          type: "string",
          title: "_sum",
          description: "Field for _sum",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieOrderByWithRelationInput: {
      title: "MovieOrderByWithRelationInput",
      description: "Input type for MovieOrderByWithRelationInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieScalarWhereInput: {
      title: "MovieScalarWhereInput",
      description: "Input type for MovieScalarWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieScalarWhereWithAggregatesInput: {
      title: "MovieScalarWhereWithAggregatesInput",
      description: "Input type for MovieScalarWhereWithAggregatesInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieSumOrderByAggregateInput: {
      title: "MovieSumOrderByAggregateInput",
      description: "Input type for MovieSumOrderByAggregateInput",
      type: "object",
      properties: {
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieUpdateInput: {
      title: "MovieUpdateInput",
      description: "Input type for MovieUpdateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieUpdateManyMutationInput: {
      title: "MovieUpdateManyMutationInput",
      description: "Input type for MovieUpdateManyMutationInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieUpdateManyWithWhereWithoutGenreInput: {
      title: "MovieUpdateManyWithWhereWithoutGenreInput",
      description: "Input type for MovieUpdateManyWithWhereWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    MovieUpdateManyWithoutGenreNestedInput: {
      title: "MovieUpdateManyWithoutGenreNestedInput",
      description: "Input type for MovieUpdateManyWithoutGenreNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
        delete: {
          type: "string",
          title: "delete",
          description: "Field for delete",
        },
        deleteMany: {
          type: "string",
          title: "deleteMany",
          description: "Field for deleteMany",
        },
        disconnect: {
          type: "string",
          title: "disconnect",
          description: "Field for disconnect",
        },
        set: {
          type: "string",
          title: "set",
          description: "Field for set",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        updateMany: {
          type: "string",
          title: "updateMany",
          description: "Field for updateMany",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    MovieUpdateWithWhereUniqueWithoutGenreInput: {
      title: "MovieUpdateWithWhereUniqueWithoutGenreInput",
      description: "Input type for MovieUpdateWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    MovieUpdateWithoutGenreInput: {
      title: "MovieUpdateWithoutGenreInput",
      description: "Input type for MovieUpdateWithoutGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieUpsertWithWhereUniqueWithoutGenreInput: {
      title: "MovieUpsertWithWhereUniqueWithoutGenreInput",
      description: "Input type for MovieUpsertWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "update", "where"],
    },
    MovieWhereInput: {
      title: "MovieWhereInput",
      description: "Input type for MovieWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    MovieWhereUniqueInput: {
      title: "MovieWhereUniqueInput",
      description: "Input type for MovieWhereUniqueInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
      },
    },
    NestedFloatFilter: {
      title: "NestedFloatFilter",
      description: "Input type for NestedFloatFilter",
      type: "object",
      properties: {
        equals: {
          type: "number",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "number",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "number",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "number",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "number",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "number",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "number",
          title: "notIn",
          description: "Field for notIn",
        },
      },
    },
    NestedIntFilter: {
      title: "NestedIntFilter",
      description: "Input type for NestedIntFilter",
      type: "object",
      properties: {
        equals: {
          type: "integer",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "integer",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "integer",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "integer",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "integer",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "integer",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "integer",
          title: "notIn",
          description: "Field for notIn",
        },
      },
    },
    NestedIntWithAggregatesFilter: {
      title: "NestedIntWithAggregatesFilter",
      description: "Input type for NestedIntWithAggregatesFilter",
      type: "object",
      properties: {
        _avg: {
          type: "string",
          title: "_avg",
          description: "Field for _avg",
        },
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        _sum: {
          type: "string",
          title: "_sum",
          description: "Field for _sum",
        },
        equals: {
          type: "integer",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "integer",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "integer",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "integer",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "integer",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "integer",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "integer",
          title: "notIn",
          description: "Field for notIn",
        },
      },
    },
    NestedStringFilter: {
      title: "NestedStringFilter",
      description: "Input type for NestedStringFilter",
      type: "object",
      properties: {
        contains: {
          type: "string",
          title: "contains",
          description: "Field for contains",
        },
        endsWith: {
          type: "string",
          title: "endsWith",
          description: "Field for endsWith",
        },
        equals: {
          type: "string",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "string",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "string",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "string",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "string",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "string",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "string",
          title: "notIn",
          description: "Field for notIn",
        },
        startsWith: {
          type: "string",
          title: "startsWith",
          description: "Field for startsWith",
        },
      },
    },
    NestedStringWithAggregatesFilter: {
      title: "NestedStringWithAggregatesFilter",
      description: "Input type for NestedStringWithAggregatesFilter",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        contains: {
          type: "string",
          title: "contains",
          description: "Field for contains",
        },
        endsWith: {
          type: "string",
          title: "endsWith",
          description: "Field for endsWith",
        },
        equals: {
          type: "string",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "string",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "string",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "string",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "string",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "string",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "string",
          title: "notIn",
          description: "Field for notIn",
        },
        startsWith: {
          type: "string",
          title: "startsWith",
          description: "Field for startsWith",
        },
      },
    },
    StringFieldUpdateOperationsInput: {
      title: "StringFieldUpdateOperationsInput",
      description: "Input type for StringFieldUpdateOperationsInput",
      type: "object",
      properties: {
        set: {
          type: "string",
          title: "set",
          description: "Field for set",
        },
      },
    },
    StringFilter: {
      title: "StringFilter",
      description: "Input type for StringFilter",
      type: "object",
      properties: {
        contains: {
          type: "string",
          title: "contains",
          description: "Field for contains",
        },
        endsWith: {
          type: "string",
          title: "endsWith",
          description: "Field for endsWith",
        },
        equals: {
          type: "string",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "string",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "string",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "string",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "string",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "string",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "string",
          title: "notIn",
          description: "Field for notIn",
        },
        startsWith: {
          type: "string",
          title: "startsWith",
          description: "Field for startsWith",
        },
        mode: {
          type: "string",
          title: "mode",
          description: "Field for mode",
        },
      },
    },
    StringWithAggregatesFilter: {
      title: "StringWithAggregatesFilter",
      description: "Input type for StringWithAggregatesFilter",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        contains: {
          type: "string",
          title: "contains",
          description: "Field for contains",
        },
        endsWith: {
          type: "string",
          title: "endsWith",
          description: "Field for endsWith",
        },
        equals: {
          type: "string",
          title: "equals",
          description: "Field for equals",
        },
        gt: {
          type: "string",
          title: "gt",
          description: "Field for gt",
        },
        gte: {
          type: "string",
          title: "gte",
          description: "Field for gte",
        },
        in: {
          type: "string",
          title: "in",
          description: "Field for in",
        },
        lt: {
          type: "string",
          title: "lt",
          description: "Field for lt",
        },
        lte: {
          type: "string",
          title: "lte",
          description: "Field for lte",
        },
        not: {
          type: "string",
          title: "not",
          description: "Field for not",
        },
        notIn: {
          type: "string",
          title: "notIn",
          description: "Field for notIn",
        },
        startsWith: {
          type: "string",
          title: "startsWith",
          description: "Field for startsWith",
        },
        mode: {
          type: "string",
          title: "mode",
          description: "Field for mode",
        },
      },
    },
    AlbumAvgOrderByAggregateInput: {
      title: "AlbumAvgOrderByAggregateInput",
      description: "Input type for AlbumAvgOrderByAggregateInput",
      type: "object",
      properties: {
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumCountOrderByAggregateInput: {
      title: "AlbumCountOrderByAggregateInput",
      description: "Input type for AlbumCountOrderByAggregateInput",
      type: "object",
      properties: {
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumCreateInput: {
      title: "AlbumCreateInput",
      description: "Input type for AlbumCreateInput",
      type: "object",
      properties: {
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["artist", "genre", "label", "members", "name", "year"],
    },
    AlbumCreateManyArtistInput: {
      title: "AlbumCreateManyArtistInput",
      description: "Input type for AlbumCreateManyArtistInput",
      type: "object",
      properties: {
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["genreId", "label", "members", "name", "year"],
    },
    AlbumCreateManyArtistInputEnvelope: {
      title: "AlbumCreateManyArtistInputEnvelope",
      description: "Input type for AlbumCreateManyArtistInputEnvelope",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        skipDuplicates: {
          type: "boolean",
          title: "skipDuplicates",
          description: "Field for skipDuplicates",
        },
      },
      required: ["data"],
    },
    AlbumCreateManyGenreInput: {
      title: "AlbumCreateManyGenreInput",
      description: "Input type for AlbumCreateManyGenreInput",
      type: "object",
      properties: {
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["artistId", "label", "members", "name", "year"],
    },
    AlbumCreateManyGenreInputEnvelope: {
      title: "AlbumCreateManyGenreInputEnvelope",
      description: "Input type for AlbumCreateManyGenreInputEnvelope",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        skipDuplicates: {
          type: "boolean",
          title: "skipDuplicates",
          description: "Field for skipDuplicates",
        },
      },
      required: ["data"],
    },
    AlbumCreateManyInput: {
      title: "AlbumCreateManyInput",
      description: "Input type for AlbumCreateManyInput",
      type: "object",
      properties: {
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["artistId", "genreId", "label", "members", "name", "year"],
    },
    AlbumCreateNestedManyWithoutArtistInput: {
      title: "AlbumCreateNestedManyWithoutArtistInput",
      description: "Input type for AlbumCreateNestedManyWithoutArtistInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
      },
    },
    AlbumCreateNestedManyWithoutGenreInput: {
      title: "AlbumCreateNestedManyWithoutGenreInput",
      description: "Input type for AlbumCreateNestedManyWithoutGenreInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
      },
    },
    AlbumCreateOrConnectWithoutArtistInput: {
      title: "AlbumCreateOrConnectWithoutArtistInput",
      description: "Input type for AlbumCreateOrConnectWithoutArtistInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    AlbumCreateOrConnectWithoutGenreInput: {
      title: "AlbumCreateOrConnectWithoutGenreInput",
      description: "Input type for AlbumCreateOrConnectWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    AlbumCreateWithoutArtistInput: {
      title: "AlbumCreateWithoutArtistInput",
      description: "Input type for AlbumCreateWithoutArtistInput",
      type: "object",
      properties: {
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["genre", "label", "members", "name", "year"],
    },
    AlbumCreateWithoutGenreInput: {
      title: "AlbumCreateWithoutGenreInput",
      description: "Input type for AlbumCreateWithoutGenreInput",
      type: "object",
      properties: {
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "integer",
          title: "year",
          description: "Field for year",
        },
      },
      required: ["artist", "label", "members", "name", "year"],
    },
    AlbumListRelationFilter: {
      title: "AlbumListRelationFilter",
      description: "Input type for AlbumListRelationFilter",
      type: "object",
      properties: {
        every: {
          type: "string",
          title: "every",
          description: "Field for every",
        },
        none: {
          type: "string",
          title: "none",
          description: "Field for none",
        },
        some: {
          type: "string",
          title: "some",
          description: "Field for some",
        },
      },
    },
    AlbumMaxOrderByAggregateInput: {
      title: "AlbumMaxOrderByAggregateInput",
      description: "Input type for AlbumMaxOrderByAggregateInput",
      type: "object",
      properties: {
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumMinOrderByAggregateInput: {
      title: "AlbumMinOrderByAggregateInput",
      description: "Input type for AlbumMinOrderByAggregateInput",
      type: "object",
      properties: {
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumOrderByRelationAggregateInput: {
      title: "AlbumOrderByRelationAggregateInput",
      description: "Input type for AlbumOrderByRelationAggregateInput",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
      },
    },
    AlbumOrderByWithAggregationInput: {
      title: "AlbumOrderByWithAggregationInput",
      description: "Input type for AlbumOrderByWithAggregationInput",
      type: "object",
      properties: {
        _avg: {
          type: "string",
          title: "_avg",
          description: "Field for _avg",
        },
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        _sum: {
          type: "string",
          title: "_sum",
          description: "Field for _sum",
        },
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumOrderByWithRelationInput: {
      title: "AlbumOrderByWithRelationInput",
      description: "Input type for AlbumOrderByWithRelationInput",
      type: "object",
      properties: {
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumScalarWhereInput: {
      title: "AlbumScalarWhereInput",
      description: "Input type for AlbumScalarWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumScalarWhereWithAggregatesInput: {
      title: "AlbumScalarWhereWithAggregatesInput",
      description: "Input type for AlbumScalarWhereWithAggregatesInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumSumOrderByAggregateInput: {
      title: "AlbumSumOrderByAggregateInput",
      description: "Input type for AlbumSumOrderByAggregateInput",
      type: "object",
      properties: {
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumUpdateInput: {
      title: "AlbumUpdateInput",
      description: "Input type for AlbumUpdateInput",
      type: "object",
      properties: {
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumUpdateManyMutationInput: {
      title: "AlbumUpdateManyMutationInput",
      description: "Input type for AlbumUpdateManyMutationInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumUpdateManyWithWhereWithoutArtistInput: {
      title: "AlbumUpdateManyWithWhereWithoutArtistInput",
      description: "Input type for AlbumUpdateManyWithWhereWithoutArtistInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    AlbumUpdateManyWithWhereWithoutGenreInput: {
      title: "AlbumUpdateManyWithWhereWithoutGenreInput",
      description: "Input type for AlbumUpdateManyWithWhereWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    AlbumUpdateManyWithoutArtistNestedInput: {
      title: "AlbumUpdateManyWithoutArtistNestedInput",
      description: "Input type for AlbumUpdateManyWithoutArtistNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
        delete: {
          type: "string",
          title: "delete",
          description: "Field for delete",
        },
        deleteMany: {
          type: "string",
          title: "deleteMany",
          description: "Field for deleteMany",
        },
        disconnect: {
          type: "string",
          title: "disconnect",
          description: "Field for disconnect",
        },
        set: {
          type: "string",
          title: "set",
          description: "Field for set",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        updateMany: {
          type: "string",
          title: "updateMany",
          description: "Field for updateMany",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    AlbumUpdateManyWithoutGenreNestedInput: {
      title: "AlbumUpdateManyWithoutGenreNestedInput",
      description: "Input type for AlbumUpdateManyWithoutGenreNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
        delete: {
          type: "string",
          title: "delete",
          description: "Field for delete",
        },
        deleteMany: {
          type: "string",
          title: "deleteMany",
          description: "Field for deleteMany",
        },
        disconnect: {
          type: "string",
          title: "disconnect",
          description: "Field for disconnect",
        },
        set: {
          type: "string",
          title: "set",
          description: "Field for set",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        updateMany: {
          type: "string",
          title: "updateMany",
          description: "Field for updateMany",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    AlbumUpdateWithWhereUniqueWithoutArtistInput: {
      title: "AlbumUpdateWithWhereUniqueWithoutArtistInput",
      description:
        "Input type for AlbumUpdateWithWhereUniqueWithoutArtistInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    AlbumUpdateWithWhereUniqueWithoutGenreInput: {
      title: "AlbumUpdateWithWhereUniqueWithoutGenreInput",
      description: "Input type for AlbumUpdateWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    AlbumUpdateWithoutArtistInput: {
      title: "AlbumUpdateWithoutArtistInput",
      description: "Input type for AlbumUpdateWithoutArtistInput",
      type: "object",
      properties: {
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumUpdateWithoutGenreInput: {
      title: "AlbumUpdateWithoutGenreInput",
      description: "Input type for AlbumUpdateWithoutGenreInput",
      type: "object",
      properties: {
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumUpsertWithWhereUniqueWithoutArtistInput: {
      title: "AlbumUpsertWithWhereUniqueWithoutArtistInput",
      description:
        "Input type for AlbumUpsertWithWhereUniqueWithoutArtistInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "update", "where"],
    },
    AlbumUpsertWithWhereUniqueWithoutGenreInput: {
      title: "AlbumUpsertWithWhereUniqueWithoutGenreInput",
      description: "Input type for AlbumUpsertWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "update", "where"],
    },
    AlbumWhereInput: {
      title: "AlbumWhereInput",
      description: "Input type for AlbumWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        artist: {
          type: "string",
          title: "artist",
          description: "Field for artist",
        },
        artistId: {
          type: "string",
          title: "artistId",
          description: "Field for artistId",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        label: {
          type: "string",
          title: "label",
          description: "Field for label",
        },
        members: {
          type: "string",
          title: "members",
          description: "Field for members",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
        year: {
          type: "string",
          title: "year",
          description: "Field for year",
        },
      },
    },
    AlbumWhereUniqueInput: {
      title: "AlbumWhereUniqueInput",
      description: "Input type for AlbumWhereUniqueInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistCountOrderByAggregateInput: {
      title: "ArtistCountOrderByAggregateInput",
      description: "Input type for ArtistCountOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistCreateInput: {
      title: "ArtistCreateInput",
      description: "Input type for ArtistCreateInput",
      type: "object",
      properties: {
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    ArtistCreateManyInput: {
      title: "ArtistCreateManyInput",
      description: "Input type for ArtistCreateManyInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    ArtistCreateNestedOneWithoutAlbumsInput: {
      title: "ArtistCreateNestedOneWithoutAlbumsInput",
      description: "Input type for ArtistCreateNestedOneWithoutAlbumsInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
      },
    },
    ArtistCreateOrConnectWithoutAlbumsInput: {
      title: "ArtistCreateOrConnectWithoutAlbumsInput",
      description: "Input type for ArtistCreateOrConnectWithoutAlbumsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    ArtistCreateWithoutAlbumsInput: {
      title: "ArtistCreateWithoutAlbumsInput",
      description: "Input type for ArtistCreateWithoutAlbumsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    ArtistMaxOrderByAggregateInput: {
      title: "ArtistMaxOrderByAggregateInput",
      description: "Input type for ArtistMaxOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistMinOrderByAggregateInput: {
      title: "ArtistMinOrderByAggregateInput",
      description: "Input type for ArtistMinOrderByAggregateInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistOrderByWithAggregationInput: {
      title: "ArtistOrderByWithAggregationInput",
      description: "Input type for ArtistOrderByWithAggregationInput",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistOrderByWithRelationInput: {
      title: "ArtistOrderByWithRelationInput",
      description: "Input type for ArtistOrderByWithRelationInput",
      type: "object",
      properties: {
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistRelationFilter: {
      title: "ArtistRelationFilter",
      description: "Input type for ArtistRelationFilter",
      type: "object",
      properties: {
        is: {
          type: "string",
          title: "is",
          description: "Field for is",
        },
        isNot: {
          type: "string",
          title: "isNot",
          description: "Field for isNot",
        },
      },
    },
    ArtistScalarWhereWithAggregatesInput: {
      title: "ArtistScalarWhereWithAggregatesInput",
      description: "Input type for ArtistScalarWhereWithAggregatesInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistUpdateInput: {
      title: "ArtistUpdateInput",
      description: "Input type for ArtistUpdateInput",
      type: "object",
      properties: {
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistUpdateManyMutationInput: {
      title: "ArtistUpdateManyMutationInput",
      description: "Input type for ArtistUpdateManyMutationInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistUpdateOneRequiredWithoutAlbumsNestedInput: {
      title: "ArtistUpdateOneRequiredWithoutAlbumsNestedInput",
      description:
        "Input type for ArtistUpdateOneRequiredWithoutAlbumsNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    ArtistUpdateWithoutAlbumsInput: {
      title: "ArtistUpdateWithoutAlbumsInput",
      description: "Input type for ArtistUpdateWithoutAlbumsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistUpsertWithoutAlbumsInput: {
      title: "ArtistUpsertWithoutAlbumsInput",
      description: "Input type for ArtistUpsertWithoutAlbumsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
      },
      required: ["create", "update"],
    },
    ArtistWhereInput: {
      title: "ArtistWhereInput",
      description: "Input type for ArtistWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        albums: {
          type: "string",
          title: "albums",
          description: "Field for albums",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    ArtistWhereUniqueInput: {
      title: "ArtistWhereUniqueInput",
      description: "Input type for ArtistWhereUniqueInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreCreateNestedOneWithoutAlbumsInput: {
      title: "GenreCreateNestedOneWithoutAlbumsInput",
      description: "Input type for GenreCreateNestedOneWithoutAlbumsInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
      },
    },
    GenreCreateOrConnectWithoutAlbumsInput: {
      title: "GenreCreateOrConnectWithoutAlbumsInput",
      description: "Input type for GenreCreateOrConnectWithoutAlbumsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    GenreCreateWithoutAlbumsInput: {
      title: "GenreCreateWithoutAlbumsInput",
      description: "Input type for GenreCreateWithoutAlbumsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    GenreUpdateOneRequiredWithoutAlbumsNestedInput: {
      title: "GenreUpdateOneRequiredWithoutAlbumsNestedInput",
      description:
        "Input type for GenreUpdateOneRequiredWithoutAlbumsNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    GenreUpdateWithoutAlbumsInput: {
      title: "GenreUpdateWithoutAlbumsInput",
      description: "Input type for GenreUpdateWithoutAlbumsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreUpsertWithoutAlbumsInput: {
      title: "GenreUpsertWithoutAlbumsInput",
      description: "Input type for GenreUpsertWithoutAlbumsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
      },
      required: ["create", "update"],
    },
    GenreCreateNestedOneWithoutShowsInput: {
      title: "GenreCreateNestedOneWithoutShowsInput",
      description: "Input type for GenreCreateNestedOneWithoutShowsInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
      },
    },
    GenreCreateOrConnectWithoutShowsInput: {
      title: "GenreCreateOrConnectWithoutShowsInput",
      description: "Input type for GenreCreateOrConnectWithoutShowsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    GenreCreateWithoutShowsInput: {
      title: "GenreCreateWithoutShowsInput",
      description: "Input type for GenreCreateWithoutShowsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
      required: ["name"],
    },
    GenreUpdateOneRequiredWithoutShowsNestedInput: {
      title: "GenreUpdateOneRequiredWithoutShowsNestedInput",
      description:
        "Input type for GenreUpdateOneRequiredWithoutShowsNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    GenreUpdateWithoutShowsInput: {
      title: "GenreUpdateWithoutShowsInput",
      description: "Input type for GenreUpdateWithoutShowsInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        name: {
          type: "string",
          title: "name",
          description: "Field for name",
        },
      },
    },
    GenreUpsertWithoutShowsInput: {
      title: "GenreUpsertWithoutShowsInput",
      description: "Input type for GenreUpsertWithoutShowsInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
      },
      required: ["create", "update"],
    },
    ShowAvgOrderByAggregateInput: {
      title: "ShowAvgOrderByAggregateInput",
      description: "Input type for ShowAvgOrderByAggregateInput",
      type: "object",
      properties: {
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowCountOrderByAggregateInput: {
      title: "ShowCountOrderByAggregateInput",
      description: "Input type for ShowCountOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowCreateInput: {
      title: "ShowCreateInput",
      description: "Input type for ShowCreateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "integer",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "integer",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
      required: [
        "cast",
        "director",
        "genre",
        "synopsis",
        "title",
        "yearEnded",
        "yearStarted",
      ],
    },
    ShowCreateManyGenreInput: {
      title: "ShowCreateManyGenreInput",
      description: "Input type for ShowCreateManyGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "integer",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "integer",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
      required: [
        "cast",
        "director",
        "synopsis",
        "title",
        "yearEnded",
        "yearStarted",
      ],
    },
    ShowCreateManyGenreInputEnvelope: {
      title: "ShowCreateManyGenreInputEnvelope",
      description: "Input type for ShowCreateManyGenreInputEnvelope",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        skipDuplicates: {
          type: "boolean",
          title: "skipDuplicates",
          description: "Field for skipDuplicates",
        },
      },
      required: ["data"],
    },
    ShowCreateManyInput: {
      title: "ShowCreateManyInput",
      description: "Input type for ShowCreateManyInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "integer",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "integer",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
      required: [
        "cast",
        "director",
        "genreId",
        "synopsis",
        "title",
        "yearEnded",
        "yearStarted",
      ],
    },
    ShowCreateNestedManyWithoutGenreInput: {
      title: "ShowCreateNestedManyWithoutGenreInput",
      description: "Input type for ShowCreateNestedManyWithoutGenreInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
      },
    },
    ShowCreateOrConnectWithoutGenreInput: {
      title: "ShowCreateOrConnectWithoutGenreInput",
      description: "Input type for ShowCreateOrConnectWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "where"],
    },
    ShowCreateWithoutGenreInput: {
      title: "ShowCreateWithoutGenreInput",
      description: "Input type for ShowCreateWithoutGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "integer",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "integer",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
      required: [
        "cast",
        "director",
        "synopsis",
        "title",
        "yearEnded",
        "yearStarted",
      ],
    },
    ShowListRelationFilter: {
      title: "ShowListRelationFilter",
      description: "Input type for ShowListRelationFilter",
      type: "object",
      properties: {
        every: {
          type: "string",
          title: "every",
          description: "Field for every",
        },
        none: {
          type: "string",
          title: "none",
          description: "Field for none",
        },
        some: {
          type: "string",
          title: "some",
          description: "Field for some",
        },
      },
    },
    ShowMaxOrderByAggregateInput: {
      title: "ShowMaxOrderByAggregateInput",
      description: "Input type for ShowMaxOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowMinOrderByAggregateInput: {
      title: "ShowMinOrderByAggregateInput",
      description: "Input type for ShowMinOrderByAggregateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowOrderByRelationAggregateInput: {
      title: "ShowOrderByRelationAggregateInput",
      description: "Input type for ShowOrderByRelationAggregateInput",
      type: "object",
      properties: {
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
      },
    },
    ShowOrderByWithAggregationInput: {
      title: "ShowOrderByWithAggregationInput",
      description: "Input type for ShowOrderByWithAggregationInput",
      type: "object",
      properties: {
        _avg: {
          type: "string",
          title: "_avg",
          description: "Field for _avg",
        },
        _count: {
          type: "string",
          title: "_count",
          description: "Field for _count",
        },
        _max: {
          type: "string",
          title: "_max",
          description: "Field for _max",
        },
        _min: {
          type: "string",
          title: "_min",
          description: "Field for _min",
        },
        _sum: {
          type: "string",
          title: "_sum",
          description: "Field for _sum",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowOrderByWithRelationInput: {
      title: "ShowOrderByWithRelationInput",
      description: "Input type for ShowOrderByWithRelationInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowScalarWhereInput: {
      title: "ShowScalarWhereInput",
      description: "Input type for ShowScalarWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowScalarWhereWithAggregatesInput: {
      title: "ShowScalarWhereWithAggregatesInput",
      description: "Input type for ShowScalarWhereWithAggregatesInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowSumOrderByAggregateInput: {
      title: "ShowSumOrderByAggregateInput",
      description: "Input type for ShowSumOrderByAggregateInput",
      type: "object",
      properties: {
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowUpdateInput: {
      title: "ShowUpdateInput",
      description: "Input type for ShowUpdateInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowUpdateManyMutationInput: {
      title: "ShowUpdateManyMutationInput",
      description: "Input type for ShowUpdateManyMutationInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowUpdateManyWithWhereWithoutGenreInput: {
      title: "ShowUpdateManyWithWhereWithoutGenreInput",
      description: "Input type for ShowUpdateManyWithWhereWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    ShowUpdateManyWithoutGenreNestedInput: {
      title: "ShowUpdateManyWithoutGenreNestedInput",
      description: "Input type for ShowUpdateManyWithoutGenreNestedInput",
      type: "object",
      properties: {
        connect: {
          type: "string",
          title: "connect",
          description: "Field for connect",
        },
        connectOrCreate: {
          type: "string",
          title: "connectOrCreate",
          description: "Field for connectOrCreate",
        },
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        createMany: {
          type: "string",
          title: "createMany",
          description: "Field for createMany",
        },
        delete: {
          type: "string",
          title: "delete",
          description: "Field for delete",
        },
        deleteMany: {
          type: "string",
          title: "deleteMany",
          description: "Field for deleteMany",
        },
        disconnect: {
          type: "string",
          title: "disconnect",
          description: "Field for disconnect",
        },
        set: {
          type: "string",
          title: "set",
          description: "Field for set",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        updateMany: {
          type: "string",
          title: "updateMany",
          description: "Field for updateMany",
        },
        upsert: {
          type: "string",
          title: "upsert",
          description: "Field for upsert",
        },
      },
    },
    ShowUpdateWithWhereUniqueWithoutGenreInput: {
      title: "ShowUpdateWithWhereUniqueWithoutGenreInput",
      description: "Input type for ShowUpdateWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        data: {
          type: "string",
          title: "data",
          description: "Field for data",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["data", "where"],
    },
    ShowUpdateWithoutGenreInput: {
      title: "ShowUpdateWithoutGenreInput",
      description: "Input type for ShowUpdateWithoutGenreInput",
      type: "object",
      properties: {
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowUpsertWithWhereUniqueWithoutGenreInput: {
      title: "ShowUpsertWithWhereUniqueWithoutGenreInput",
      description: "Input type for ShowUpsertWithWhereUniqueWithoutGenreInput",
      type: "object",
      properties: {
        create: {
          type: "string",
          title: "create",
          description: "Field for create",
        },
        update: {
          type: "string",
          title: "update",
          description: "Field for update",
        },
        where: {
          type: "string",
          title: "where",
          description: "Field for where",
        },
      },
      required: ["create", "update", "where"],
    },
    ShowWhereInput: {
      title: "ShowWhereInput",
      description: "Input type for ShowWhereInput",
      type: "object",
      properties: {
        AND: {
          type: "string",
          title: "AND",
          description: "Field for AND",
        },
        NOT: {
          type: "string",
          title: "NOT",
          description: "Field for NOT",
        },
        OR: {
          type: "string",
          title: "OR",
          description: "Field for OR",
        },
        cast: {
          type: "string",
          title: "cast",
          description: "Field for cast",
        },
        director: {
          type: "string",
          title: "director",
          description: "Field for director",
        },
        genre: {
          type: "string",
          title: "genre",
          description: "Field for genre",
        },
        genreId: {
          type: "string",
          title: "genreId",
          description: "Field for genreId",
        },
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        synopsis: {
          type: "string",
          title: "synopsis",
          description: "Field for synopsis",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
        yearEnded: {
          type: "string",
          title: "yearEnded",
          description: "Field for yearEnded",
        },
        yearStarted: {
          type: "string",
          title: "yearStarted",
          description: "Field for yearStarted",
        },
      },
    },
    ShowWhereUniqueInput: {
      title: "ShowWhereUniqueInput",
      description: "Input type for ShowWhereUniqueInput",
      type: "object",
      properties: {
        id: {
          type: "string",
          title: "id",
          description: "Field for id",
        },
        title: {
          type: "string",
          title: "title",
          description: "Field for title",
        },
      },
    },
  },
} satisfies JSONSchema7;
