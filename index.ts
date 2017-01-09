export class UiItem{
    private title:string;
    private subTitle:string;
    private imgUrl:string;
    private userData:Object;
    private backgroundSize:string; //60%, 100%

    public onClick:Function = function(){};

    constructor(){

    }

    public setBackgroundSize(size:string){
        this.backgroundSize = size;
    }

    public getBackgroundSize():string {
        return this.backgroundSize;
    }

    public setTitle(title:string){
        this.title = title;
    }

    public setSubTitle(sub:string ){
        this.subTitle = sub;
    }

    public getSubTitle():string {
        return this.subTitle;
    }

    public setImgUrl(url:string){
        this.imgUrl = url;
    }

    public getTitle():string{
        return this.title;
    }

    public getImgUrl ():string {
        return this.imgUrl;
    }
    
    public setUserData(d:Object) {
        this.userData = d;
    }

    public getUserData():any{
        return this.userData;
    }

    public setOnClick(f:Function) {
        this.onClick = f;
    }

}
