export function getReferData(){

}
/**
 * 根据refEntity生成请求数据的参数
 * @param {string} type 
 * @param {object} refEntity 
 */
export function getQueryParam(type,refEntity,viewApplication){
    let rsParam = {};
    rsParam.dataType = type;
    rsParam.refCode = refEntity.refType; 
    // rsParam.key =  viewApplication.cCardKey;
    rsParam.billnum = refEntity.cBillnum;
    return rsParam;

}