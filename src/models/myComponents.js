import BaseClass from "../componentListNPM/baseClass";
import auth from "../services/auth";
class BaseObject extends BaseClass{
    constructor(operationsFactory){
        super(operationsFactory);
    }
    json;
    starting={
        name:"",
        type: "",
        _id: "",
    }


}

class Character extends BaseObject{
    constructor(operationsFactory){
        super(operationsFactory);
        this.getPicSrc=this.getPicSrc.bind(this);
    }
    json={
        ...this.starting,
        picURL: "",
        description: "",
        owner:"",
       dm: "",
       type:"character",

    }
    async getPicSrc(path){
        let pic = await auth.downloadPics(path);
        this.json.picURL = pic
        
    }
}
class User extends BaseObject{
    constructor(operationsFactory){
        super(operationsFactory);
        // this.follow=this.follow.bind(this);
        this.getPicSrc=this.getPicSrc.bind(this);
    }
    json={
        ...this.starting,
        email:"",
        type: "user",
        owner: "",
        keeps:[],
        firstName:"",
        lastName:"",
        spawnerHandle:"",
        bio:"",
        website:"",
        socialHandle:"",
        picURL: ""
        

    }
    async getPicSrc(path){
        let pic = await auth.downloadPics(path);
        this.json.picURL = pic
        
    }
    // async follow(picOwner){
    //     let userFJson = {owner: this.json._id, following: true, name: picOwner.getJson().name, followID:picOwner.getJson()._id };
    //     let picOwnerFJson = {owner: picOwner.getJson()._id , name:this.json.name, followID: this.json._id };
    //     //debugger
    //     this.operationsFactory.cleanJsonPrepareRun({addfollow:[userFJson, picOwnerFJson]});
    // }
}


class Logs extends BaseObject{
    json={
        ...this.starting,
       
        owner: "",
        html: ""
        
    }
}

// class Factory {
//     factory ={
//         pic: new Pic(),
//         user: new User(),
//     }

//     getComponent(component, json){
//         let comp = this.factory[component];
//         comp = Object.assign(Object.create(Object.getPrototypeOf(comp)), comp);
//         comp.setJson({...comp.getJson(), ...json,});
//         return comp;
//     }
// }
export {User, Character, Logs};
