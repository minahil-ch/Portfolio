import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }, // Lucide icon name or image path
    rate: { type: String }  // e.g. "$50/hr"
});

export default mongoose.model('Service', serviceSchema);
