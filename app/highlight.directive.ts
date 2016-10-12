import {Directive, ElementRef, Renderer, Input, OnInit, HostListener} from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit{
    private defaultBorderColor:string = 'red';
    @Input() borderColor:string='';

    constructor(private el:ElementRef, private renderer: Renderer) {
    }
    ngOnInit(){
        this.renderer.setElementStyle(this.el.nativeElement, 'border', '4px solid '+ (this.borderColor || this.defaultBorderColor));
    }
}
