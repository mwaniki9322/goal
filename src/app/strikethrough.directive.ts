import { Element } from '@angular/compiler/src/render3/r3_ast';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

 //user initiated
constructor(private elem:ElementRef) {}

@HostListener ('click') onClicks(){
  this.textDeco('line-through')
}
@HostListener ('dblclick') onDoubleClicks(){
  this.textDeco('None')
}
private textDeco(action:string){
this.elem.nativeElement.style.textDecoration=action
}


}
