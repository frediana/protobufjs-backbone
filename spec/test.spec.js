protobuf.load("spec/proto/defaults.proto.json", function(err, root) {
  PBB.load(root);

  describe("#PBB", function() {
    describe(".getModel", function() {
      it("must be defined", function() {
        expect(PBB.getModel).toBeDefined();
      });

      describe("must return a Backbone Model", function() {
        var TestMessage, testMessage;

        beforeEach(function() {
          TestMessage = PBB.getModel("defaults", "TestMessage");
          testMessage = new TestMessage();
        });

        it("Class", function() {
          expect(TestMessage).toBeDefined();
        });

        it("instantiable", function() {
          expect(testMessage).toBeDefined();
        });

        it("whith defaults correctly initialized", function() {
          expect(testMessage.get("testField")).toBe("");
        });
      });
    });
  });

});
