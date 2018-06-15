export class Post {
    loveIts : number;
    created_at : Date;
  
    constructor(public title: string,public content: string) 
    {
      this.created_at = new Date();
      this.loveIts = 0;
    }
  }