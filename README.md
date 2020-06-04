# angular-currency-pipe
Angular Currency pipe: Format a string|number with commas

Take a number|string, return a default value from a formatted string with commas
Usage:
  ```value | appCurrency:0```
  
 
### How to use
In app.module.ts:
```
import { AppCurrencyPipe } from './pipes/app-currency.pipe';
...

@NgModule({
    ...
    declarations: [
        ...,
        AppCurrencyPipe
    ],
    ...
})
```

In template files:
 - Input: ```{{ '10690000' | appCurrency }}```
 - Output: 10,690,000
