import { Period, PeriodRegister } from "../../Models/Periods/Period.Model";
import { getHeaderConfig, periodAxios } from "../../Utilities";


const storePeriod = async (periodData : PeriodRegister) : Promise<Period> => {
    try {
        const respose = await periodAxios.post(`/store`, periodData, getHeaderConfig()); 
        return respose.data;
    } catch (error) {
        throw new Error("Error al agregar periodo" + error);
    }
}

const getPeriodsByGroupId = async (groupId : number) : Promise<Period[]> => {
    try {
        const respose = await periodAxios(`/group/${groupId}`, getHeaderConfig()); 
        return respose.data;
    } catch (error) {
        throw new Error("Error al obtener periodos" + error);
    }
}

export {getPeriodsByGroupId, storePeriod}