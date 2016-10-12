import {Directive, ElementRef, Renderer, Input, OnInit, HostListener} from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit{
    private defaultBorderColor:string = 'red';
    @Input() borderColor:string='';
    @HostListener('mouseenter',['$event']) onMouseEnter;
    @HostListener('mouseleave',['$event']) onMouseLeave;

    constructor(private el:ElementRef, private renderer: Renderer) {
    }
    ngOnInit(){
        this.renderer.setElementStyle(this.el.nativeElement, 'border', '4px solid '+ (this.borderColor || this.defaultBorderColor));
    }

    onMouseEnter(ev){
        console.log(ev);
        this.renderer.setElementStyle(this.el.nativeElement, 'border', '10px solid');
    }

    onMouseLeave(ev){
        console.log(ev);
        this.renderer.setElementStyle(this.el.nativeElement, 'border-width', '4px');
    }
}
