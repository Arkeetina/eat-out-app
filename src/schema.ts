import { queryType, makeSchema, objectType, mutationType } from "nexus";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
  },
});

const EatOutSpot = objectType({
  name: "EatOutSpot",
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.name();
    t.model.note();
  },
});

const Query = queryType({
  definition(t) {
    t.crud.user();
    t.crud.eatOutSpot();
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneEatOutSpot();
    t.crud.createOneUser();
  },
});

export const schema = makeSchema({
  types: { Query, Mutation, User, EatOutSpot },
  shouldGenerateArtifacts: process.env.NODE_ENV === "development",
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(
          process.cwd(),
          "src",
          "generated",
          "typegen-nexus-plugin-prisma.ts"
        ),
      },
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), "src", "schema.ts"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  sourceTypes: {
    modules: [{ module: "@prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: path.join(process.cwd(), "src/context.ts"),
    export: "Context",
  },
});
