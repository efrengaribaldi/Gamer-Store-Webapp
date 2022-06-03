import { expect } from "chai";
import ProductModel from "../../models/ProductModel";

const mongoose = require("mongoose");

describe("Product Tests", () => {
  beforeEach(function (done) {
    const mongoDB = process.env.MONGO_URL!;
    mongoose
      .connect(mongoDB)
      .then(() => console.log("DB Connection Successful!"));
    done();
  });

  it("checking mocha working", () => {
    let testing = 0;
    expect(testing).to.equal(0);
  });
  it("checking existing name", async (done) => {
    let query = await ProductModel.find({});
    console.log(query?.length);
    expect(query.length).to.greaterThan(0);
    done();
  });
});
