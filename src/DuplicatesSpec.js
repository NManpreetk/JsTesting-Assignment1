describe("Remove Characters", function () {
    it("should return a string with first and last charactes removed", function () {
      expect(
        removecharacters("abc")
      ).toEqual("b");
    });

    it("should return an empty string if string is less than 3 characters", function(){
        expect(removecharacters("a")).toEqual("");
        expect(removecharacters("ab")).toEqual("");

    });

    it("should accept a string and return a string", function(){
        expect(removecharacters("")).toEqual("");
    });
  });