import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { XMarkComponent } from "../icons/x-mark/x-mark.component";

@Component({
  selector: 'app-password-strength-meter',
  imports: [XMarkComponent],
  templateUrl: './password-strength-meter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordStrengthMeterComponent {
  password = input.required<string>();

  hasMinCharacters = computed(() => this.password().length >= 8);
  hasMaxCharacters = computed(() => this.password().length <= 16);
  hasUpperCase = computed(() => /[A-Z]/.test(this.password()));
  hasLowerCase = computed(() => /[a-z]/.test(this.password()));
  hasNumber = computed(() => /\d/.test(this.password()));
  hasSpecialCharacter = computed(() => /[!@#$%^&*]/.test(this.password()));
  allTrue = computed(() => this.hasMinCharacters() 
                          && this.hasMaxCharacters() 
                          && this.hasUpperCase() 
                          && this.hasLowerCase() 
                          && this.hasNumber()
                          && this.hasSpecialCharacter()
                        )
}
