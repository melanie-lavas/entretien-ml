import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { leadSchema } from "./leads-schema";

const valid = { nom: "Test Client", telephone: "8195550100", courriel: "", secteur: "Nicolet", type_besoin: "Grand ménage", frequence: "Une seule fois", message: "", source_page: "/soumission" };
describe("quick lead validation", () => {
  test("accepts Nicolet without an optional email", () => {
    assert.equal(leadSchema.safeParse(valid).success, true);
  });
  test("does not accept the removed Gentilly sector", () => {
    assert.equal(leadSchema.safeParse({ ...valid, secteur: "Gentilly" }).success, false);
  });
  test("accepts other sectors for regional requests", () => {
    assert.equal(leadSchema.safeParse({ ...valid, secteur: "Autre secteur" }).success, true);
  });
  test("accepts Saint-Grégoire", () => {
    assert.equal(leadSchema.safeParse({ ...valid, secteur: "Saint-Grégoire" }).success, true);
  });
  for (const secteur of ["Saint-Célestin", "Saint-Pierre-les-Becquets", "Saint-Sylvère"]) {
    test(`accepts the confirmed sector ${secteur}`, () => {
      assert.equal(leadSchema.safeParse({ ...valid, secteur }).success, true);
    });
  }
  test("accepts commercial requests elsewhere in Quebec", () => {
    assert.equal(leadSchema.safeParse({ ...valid, secteur: "Autre secteur", type_besoin: "Commercial", message: "Commerce à Québec" }).success, true);
  });
  test("rejects a phone without ten digits", () => {
    assert.equal(leadSchema.safeParse({ ...valid, telephone: "819555" }).success, false);
  });
});