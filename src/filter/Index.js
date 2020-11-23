//专门用来设置过滤器
//格式化演
 const getActors = (value) =>{
    if(!value) return '暂无主演'
    let str = ''
    value.forEach((element,index)=>{
        // 每个名字后面加个空格，如果是最后一个人的名字后面就不加空格
        let space = ' '
        if(index == value.length-1){
            space = ''
        }
        str += element.name
    })
    return str
}
// 格式化上演日期 周X 8月30日
 const getPremiereAt = (value,format) =>{
    let time = value*1000
    let date = new Date(time)
    if(format==='ymd'){
        return date.toLocaleDateString()
    }
    if(format==='schedule'){
        let str = ''
        
        return str += date.getHours()+':'+date.getMinutes() 
    }
    let str = ''
    let weeks = ['周天','周一','周二','周三','周四','周五','周六',]
    str += weeks[ date.getDay()] + ' '
    str += (date.getMonth() + 1) + '月'
    str += date.getDate() +'日'
    return str
}
export{
    getActors,
    getPremiereAt
}