import request from "../views/request.js"
export var getdoods=(params)=>{
    return request.get('/api/getgoods', {params})
}
export var getnewlist=(params)=>{
    return request.get('/api/getnewslist?pageindex='+params)
}
export var getinfo=(params)=>{
    return request.get('/api/getnew/'+params)
}
export var getcates=(params)=>{
    return request.get("/api/getimgcategory",{params})
}
export var getlists=(params)=>{
    return request.get("/api/getimages/"+params)
}
export var getinfo1=(params)=>{
    return request.get("/api/getimageInfo/"+params)
}
export var getphoto=(params)=>{
    return request.get("/api/getthumimages/"+params)
}
export var getcomment=(params,id)=>{
    return request.get("/api/getcomments/"+params+"?pageindex="+id)
}
export var add=(params,msg)=>{
    return request.post("/api/postcomment/"+params,{content:msg})
}
export var getSwiper=(params)=>{
    return request.get("/api/getlunbo/",{params})
}
export var getdetail=(params)=>{
    return request.get("/api/getthumimages/"+params)
}
export var goodsinfo=(params)=>{
    return request.get("/api/goods/getinfo/"+params)
}
export var getgoodsdesc=(params)=>{
    return request.get("/api/goods/getdesc/"+params)
}
export var getshoplist=(params)=>{
    return request.get("/api/goods/getshopcarlist/"+params)
}