import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    // 🔑 OWNER (who posted the room)
    name: {
      type: String,
      required: true,
    },

    // 🏠 BASIC INFO
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    // 📍 LOCATION (highest priority search)
    address: {
      type: String,
      required: true,
      index: true, // important for search
    },

    // 💰 RENT
    rent: {
      type: Number,
      required: true,
    },

    // 🏢 PROPERTY TYPE
    propertyType: {
      type: String,
      enum: ["1 BHK", "2 BHK", "3 BHK", "1 Bed", "2 Bed", "3 Bed"],
      required: true,
    },

    // 👥 TENANT PREFERENCE
    tenantPreference: {
      type: String,
      enum: ["Bachelor", "Family", "Girls", "Working"],
      required: true,
    },

    // 📞 OWNER CONTACT
    contactNumber: {
      type: String,
      required: true,
    },

    // 🖼️ MULTIPLE IMAGES
    images: {
      type: [String], // Cloudinary URLs
      required: true,
      validate: (val) => val.length > 0,
    },
    userRef: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
