// procesa un array de objetos arrojado por el servicio de lectura de archivos csv y lo devuelve en un array de objetos procesado
export const processCsvDataToObjects = (csvData) => {
    const csvDataObjects = csvData.map((data) => {
        return {
            "Mes": data[0],
            "Nombre": data[1],
            "ID": data[2],
            "FechaIngreso": data[3],
            "SueldoBruto": data[4],
            "División": data[5],
            "Area": data[6],
            "Subarea": data[7],
            "IDLider": data[8],
            "Seniority": data[9],
        };
    });
    csvDataObjects.shift()

    return csvDataObjects;
};