import { ChangeDetectionStrategy, Component, ContentChild, model } from '@angular/core';
import { DialogBodyDirective } from '@shared/directives/dialog/dialog-body.directive';
import { DialogFooterDirective } from '@shared/directives/dialog/dialog-footer.directive';
import { DialogHeaderDirective } from '@shared/directives/dialog/dialog-header.directive';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  imports: [DialogModule],
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @ContentChild(DialogHeaderDirective, {descendants: true})
  header?: DialogHeaderDirective;

  @ContentChild(DialogBodyDirective, {descendants: true})
  body?: DialogBodyDirective;
  
  @ContentChild(DialogFooterDirective, {descendants: true})
  footer?: DialogFooterDirective;

  visible = model<boolean>(false);


  onHide() {
    this.visible.set(false);
  }
}
