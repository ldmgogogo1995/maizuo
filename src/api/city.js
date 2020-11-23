import request from '@/utils/request'
//获取所有城市列表数据
const getCityList = ()=>{
    return request({
        url:'gateway?k=1943234',
        data:{
            xHost:'mall.film-ticket.city.list'
        }
    })

}
export default getCityList