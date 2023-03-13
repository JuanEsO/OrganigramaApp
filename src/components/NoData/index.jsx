const NoData = () => {
    //componente que renderiza un mensaje de no hay datos
    return (
        <div className="w-75 p-5 border border-secondary rounded-5 mx-auto my-5 d-flex align-items-center flex-column">
            <img src={"https://cdn-icons-png.flaticon.com/512/1548/1548682.png"} alt="No Data" />
            <p>No hay Datos disponibles</p>
        </div>
    );
}

export default NoData;