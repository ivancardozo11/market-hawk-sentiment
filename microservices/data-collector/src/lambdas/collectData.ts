import { S3 } from 'aws-sdk';
const s3 = new S3();

export const handler = async (): Promise<void> => {
    console.log("Función collectDataFunction invocada");

    try {
        const data = {
            value: Math.random(),
            timestamp: new Date().toISOString()
        };
        const dataString = JSON.stringify(data);
        const bucketName = 'datacollectorbucket';
        const objectKey = `data-${Date.now()}.json`;

        await s3.putObject({
            Bucket: bucketName,
            Key: objectKey,
            Body: dataString,
            ContentType: 'application/json'
        }).promise();

        console.log(`Datos subidos a S3 con éxito. Bucket: ${bucketName}, Key: ${objectKey}`);
    } catch (error) {
        console.error("Error en la función collectDataFunction:", error);
    }
};
