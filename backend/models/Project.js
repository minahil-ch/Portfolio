import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tech: [String],
    problem: String,
    solution: String,
    role: String,
    github: String,
    image: String,
    index: Number
});

export default mongoose.model('Project', projectSchema);
