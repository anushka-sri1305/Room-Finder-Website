import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'data:image/png;base64,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',
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

export default User;