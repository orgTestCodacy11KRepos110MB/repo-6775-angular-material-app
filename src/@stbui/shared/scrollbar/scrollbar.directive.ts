import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
} from "@angular/core";
import SimpleBar from "simplebar";
import { scrollbarOptions } from "./scrollbar-options";

@Directive({
  selector: "[stbuiScrollbar],stbui-scrollbar",
})
export class ScrollbarDirective implements AfterContentInit {
  @Input("stbuiScrollbar") options: Partial<any>;

  scrollbarRef: SimpleBar;

  constructor(private _element: ElementRef, private zone: NgZone) {}

  ngAfterContentInit() {
    const options = { ...this.options, ...scrollbarOptions };

    this.scrollbarRef = new SimpleBar(this._element.nativeElement, options);
  }
}
