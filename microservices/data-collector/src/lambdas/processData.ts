import { S3Event, S3Handler } from 'aws-lambda';
import { S3 } from 'aws-sdk';

const s3 = new S3();

export const handler: S3Handler = async (event: S3Event) => {
    console.log("Evento S3 recibido:", JSON.stringify(event, null, 2));

    for (const record of event.Records) {
        const bucketName = record.s3.bucket.name;
        const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
        
        try {
            const { Body } = await s3.getObject({ Bucket: bucketName, Key: objectKey }).promise();
            const fileContent = Body.toString('utf-8');
            console.log(`Contenido del archivo ${objectKey}:`, fileContent);

        } catch (error) {
            console.error(`Error processing file ${objectKey} from the bucket ${bucketName}:`, error);
        }
    }
};