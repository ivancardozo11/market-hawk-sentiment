import { DataModel } from '../../infrastructure/db/dataModel';
import { IData } from '../../shared/interfaces/IData';

export async function saveCollectedData(source: string, content: string, metadata: object): Promise<void> {
    let newData = new DataModel({
        source,
        content,
        metadata,
    });

    try {
        await newData.save();
        console.log("Datos guardados con éxito.");
    } catch (error) {
        console.error("Error al guardar los datos:", error);
    }
}

export async function queryDataBySource(source: string): Promise<IData[]> {
    try {
        const results = await DataModel.query("source").eq(source).exec();
        return results.map(item => item.toJSON() as IData);
    } catch (error) {
        console.error("Error al consultar los datos por fuente:", error);
        return [];
    }
}
