import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    languages: [String],
    frameworks: [String],
    tools: [String],
    databases: [String]
});

export default mongoose.model('Skill', skillSchema);
