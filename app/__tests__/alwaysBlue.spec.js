describe("Example test", () => {
  function blueOrNot(shouldThrow = false) {
      if (shouldThrow) {
        console.log(shouldThrow);
        throw new Error('shouldThrow was true');
      }
      return 'blue';
  }

  it('should throw if passed true', () => {
    try {
      blueOrNot(true);
    } catch (error) {
      expect(error).toEqual(new Error('shouldThrow was true'));
    }
  });
  test("it should always return blue", () => {
    const input = "bluer"

    const output = blueOrNot(false);

    expect(input).toEqual(output);
  });
});