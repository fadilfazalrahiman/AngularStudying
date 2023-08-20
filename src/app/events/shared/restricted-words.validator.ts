import { FormControl } from '@angular/forms';

export function restrictedWords(words){
    return (control: FormControl): {[key: string]: any} => {
        return words.includes(control.value) ? {'restrictedWords': control.value} : null;
    }
}
