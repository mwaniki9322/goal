export class Goal {
    showDescription: boolean;
  constructor(public id: number=0,public name: string='',public description: string='',public completeDate:Date){
    this.showDescription=false;
  }

}
