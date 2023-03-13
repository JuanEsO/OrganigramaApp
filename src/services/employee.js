// devuelve el mes y el año de un string de fecha en formato 'MM-YYYY'
export const getCurrentDate = (date) => {
    const currentMonth = date.split('-')[0];
    const currentYear = date.split('-')[1];
    return {currentMonth, currentYear};
};

// devuelve un objeto Date a partir de un string de fecha en formato 'DD/MM/YYYY'
export const getStartDate = (date) => {
    const dateArr = date.split('/');
    const startDay = dateArr[0];
    const startMonth = dateArr[1];
    const startYear = dateArr[2];
    return new Date(startYear, startMonth - 1, startDay);
};

// devuelve el estado de un empleado en un mes determinado (contratado, promocion, null)
export const getUpdateStatus = (employee, employees) => {
    const {currentMonth, currentYear} = getCurrentDate(employee.Mes);
    const startDate = getStartDate(employee.FechaIngreso);

    const previusMonthData = employees.find((e) => {
        const previusDate = [currentMonth - 1, currentYear].join('-');
        return employee.ID === e.ID && e.Mes === previusDate;
    });

    if (currentYear == startDate.getFullYear() && currentMonth == startDate.getMonth() + 1) {
        return 'contratado';
    }

    if (previusMonthData) {
        return 'promocion';
    };

    return null
};