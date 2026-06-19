import { ChangeDetectionStrategy, Component,  DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormUtils } from '@shared/utils/form-utils';

@Component({
  selector: 'form-error-label',
  imports: [],
  templateUrl: './form-error-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorLabelComponent implements OnInit{
  control = input.required<AbstractControl>();
  errorMessage = signal<string | null>(null);

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.control().statusChanges
      .pipe(
        startWith(this.control().status),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.errorMessage.set(this.textErrorMessage());
      });
  }

  private textErrorMessage(): string | null {
    const control = this.control();
    const errors: ValidationErrors = control.errors || {};

    return control.touched && Object.keys(errors).length > 0
      ? FormUtils.getTextError(errors)
      : null;
  }
}
