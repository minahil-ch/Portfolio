import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String },
    slug: { type: String, required: true, unique: true }
});

export default mongoose.model('BlogPost', blogPostSchema);
