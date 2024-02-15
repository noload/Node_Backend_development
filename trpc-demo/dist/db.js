"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://notesafe:vaibhav%40123K@cluster0.fsxrugd.mongodb.net/newDB");
const todoSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    done: {
        type: String,
        default: false,
    },
});
exports.Todo = mongoose_1.default.model("todo", todoSchema);
