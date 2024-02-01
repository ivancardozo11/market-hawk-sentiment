import dynamoose, { Schema } from 'dynamoose';

// Define el esquema sin especificar IData como un tipo genérico.
const dataSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
    },
    source: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    metadata: {
        type: Object,
        default: {},
    },
    timestamp: {
        type: Date,
        default: () => new Date(),
    },
}, {
    timestamps: true,
});

// Omitir la especificación del tipo genérico aquí
export const DataModel = dynamoose.model('DataCollection', dataSchema);