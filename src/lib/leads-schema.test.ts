import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { leadSchema } from "./leads-schema";

const valid = { nom: "Test Client", telephone: "8195550100", courriel: "", secteur: "Gentilly", type_besoin: "Grand ménage", frequence: "Une seule fois", message: "", source_page: "/soumission" };
describe("quick lead validation", () => {
  test("accepts Gentilly without an optional email", () => {
    assert.equal(leadSchema.safeParse(valid).success, true);
  });
  test("accepts Saint-Grégoire", () => {
    assert.equal(leadSchema.safeParse({ ...valid, secteur: "Saint-Grégoire" }).success, true);
  });
  test("rejects a phone without ten digits", () => {
    assert.equal(leadSchema.safeParse({ ...valid, telephone: "819555" }).success, false);
  });
});