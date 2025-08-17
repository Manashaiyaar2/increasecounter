import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

describe("Counter Contract", () => {
  it("initializes counter to 0", () => {
    const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
    expect(result).toBeOk(Cl.uint(0));
  });

  it("increments counter correctly", () => {
    const { result } = simnet.callPublicFn("counter", "increment", [], address1);
    expect(result).toBeOk(Cl.uint(1));
    
    const { result: counterValue } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
    expect(counterValue).toBeOk(Cl.uint(1));
  });

  it("decrements counter correctly", () => {
    simnet.callPublicFn("counter", "increment", [], address1);
    simnet.callPublicFn("counter", "increment", [], address1);
    
    const { result } = simnet.callPublicFn("counter", "decrement", [], address1);
    expect(result).toBeOk(Cl.uint(1));
    
    const { result: counterValue } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
    expect(counterValue).toBeOk(Cl.uint(1));
  });

  it("prevents decrementing below zero", () => {
    const { result } = simnet.callPublicFn("counter", "decrement", [], address1);
    expect(result).toBeErr(Cl.uint(1));
    
    const { result: counterValue } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
    expect(counterValue).toBeOk(Cl.uint(0));
  });

  it("handles multiple increments", () => {
    simnet.callPublicFn("counter", "increment", [], address1);
    simnet.callPublicFn("counter", "increment", [], address1);
    const { result } = simnet.callPublicFn("counter", "increment", [], address1);
    expect(result).toBeOk(Cl.uint(3));
  });
});