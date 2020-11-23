//这个文件专门存放各种接口
import request from '@/utils/request'

//获取电影列表中的banner数据的
const getBanner = ()=>{
    return request({
        url:'gateway?type=2&__CITYID__&k=3332481',
        data:{
            xHost:'mall.cfg.common-banner'
        }
    })
}

//获取正在热映的电影列表
const getNowPlaying = () =>{
    return request ({
        url:'gateway?__CITYID__&pageNum=1&pageSize=10&type=1&k=7481809',
        data:{
            xHost:'mall.film-ticket.film.list'
        }
    })
}

//获取即将上映的电影列表
const getComingSoon = () =>{
    return request ({
        url:'gateway?__CITYID__&pageNum=1&pageSize=10&type=2&k=9767669',
        data:{
            xHost:'mall.film-ticket.film.list'
        }
    })
}
//发现上面两个有共同点，可以通过type参数  来确定请求的是哪个页面的数据，因此两种页面共同使用下面这种方法
const getFilmList =(param)=>{
    let url = `gateway?__CITYID__&pageNum=${param.pageNum}&pageSize=${param.pageSize}&type=${param.type}&k=9767669`
    return request({
        url:url,
        data:{
            xHost:'mall.film-ticket.film.list'
        }
    })
}

//获取详情页的数据，通过ID
const getDetailInfo = (id) =>{
    let url = `gateway?filmId=${id}&k=5663007`
    return request({
        url,
        data:{
            xHost:'mall.film-ticket.film.info'       
        }
    })
}

export {
    getBanner,
    getNowPlaying,
    getComingSoon,
    getFilmList,
    getDetailInfo,
}