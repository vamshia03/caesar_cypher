const getCaesarCipher = require("../caesarcipher");

describe("Caesar Cipher", () => {
  test("Should return caesar cipher value on left shift 3", () => {
    expect(
      getCaesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", "left", 3)
    ).toBe("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD");
  });

  test("Should return caesar cipher value on right shift 3", () => {
    expect(
      getCaesarCipher("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD", "right", 3)
    ).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
  });
});
