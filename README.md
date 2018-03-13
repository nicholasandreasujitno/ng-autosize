# ng-autosize

***ng-autosize*** is an Angular5 directive that automatically adjusts textarea height to fit content.

It adjusts the textarea height automatically to any text input, or changes to the model bound to the textarea.

## Code

[https://github.com/nicholasandreasujitno/ng-autosize](https://github.com/nicholasandreasujitno/ng-autosize)

## Installation:

```bash
npm install --save https://github.com/nicholasandreasujitno/ng-autosize.git
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import { AutosizeModule } from 'ng-autosize';

...

@NgModule({
  imports: [
    AutosizeModule
  ]
})
```

Use directly inside your HTML templates by adding the word 'autosize' to any textarea.

```
<textarea autosize>Hello, this is an example of Autosize in Angular2.</textarea>
```

## Extra Configuration Options:

Set a minimum height on your textarea.

```
<textarea autosize [minHeight]="60">Hello, this is an example of Autosize in Angular2 with a Min Height.</textarea>
```

Set a maximum height on your textarea.

```
<textarea autosize [maxHeight]="120">Hello, this is an example of Autosize in Angular2 with a Max Height.</textarea>
```


## Author
[Nicholas Andrea Sujitno]

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.