const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema(
  {
    merchantId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MerchantSchema", MerchantSchema);
