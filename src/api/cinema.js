//这个文件专门存放各种接口
import request from '@/utils/request'
//获取电影院列表，通过cityID
const getCinemaListData = ()=>{
    return request({
        url:`gateway?__CITYID__&ticketFlag=1&k=4312565`,
        data:{
            xHost:'mall.film-ticket.cinema.list'
        }
    })

}
//通过影院id获取影院电影详情

const getCinemaDetailList = (cinemaId) =>{
    return request({
        url:`gateway/?cinemaId=${cinemaId}&k=9796849`,
        data:{
            xHost:'mall.film-ticket.film.cinema-show-film'
        }
    })
}
//通过影院ID获取影院详情

const getCinemaDetailData = (cinemaId) =>{
    return request({
        url:`gateway/?cinemaId=${cinemaId}&k=9796849`,
        data:{
            xHost:'mall.film-ticket.cinema.info'
        }
    })
}

//请求影院安排数据

const getCinemaSchedule = (obj) =>{
    return request({
        url:`gateway/?filmId=${obj.filmId}&cinemaId=${obj.cinemaId}&date=${obj.showDate}&k=498029`,
        data:{
            xHost:'mall.film-ticket.schedule.list'
        }
    })

}
export {
    getCinemaListData,
    getCinemaDetailData,
    getCinemaDetailList,
    getCinemaSchedule
    
}