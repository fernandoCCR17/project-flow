import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrorLabelComponent } from "../form-error-label/form-error-label.component";
import { EyeComponent } from "../icons/eye/eye.component";
import { EyeSlashComponent } from "../icons/eye-slash/eye-slash.component";

@Component({
  selector: 'app-input',
  imports: [FormErrorLabelComponent, ReactiveFormsModule, EyeComponent, EyeSlashComponent],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent{
  label = input<string>();
  type = input.required<string>();
  placeholder = input.required<string>();
  control = input.required<FormControl>();
  formatFuncion = input<(text: string) => string>();

  fieldActive = model<string | null>(null);
  fieldName = input<string | null>();

  showPassword = false;

  onFocus() {
    this.fieldActive.set(this.fieldName() ?? null);
  }

  onBlur() {
    this.fieldActive.set(null);

    if(typeof this.control().value !== "string") return;

    this.control().setValue(this.control().value.trim());
  }

  onInput(){
    if(!this.control().touched) this.control().markAsTouched();

    if(this.type() === "password") return; 

    if(typeof this.control().value !== "string") return;

    const formatter = this.formatFuncion();

    if (!formatter) return;

    this.control().setValue(
      formatter(this.control().value)
    );
  }

  changeTypePassword(){
    this.showPassword = !this.showPassword;
  }
}
