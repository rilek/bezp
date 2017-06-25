## Requirements
```
node >= 6.0.0 
npm >= 3.8.0
mysql
```

## Install
#### Testing
Set `isDev: true` in `app/config.js`, which blocks sending request to db and display pool summary on thankyou page.
```
npm install
npm start
```

#### Prod
Configure database connection information in `app/config.js`, and `isDev: false`.
```
npm install
npm run build
```

## Description
Project runs on `localhost:7559`
Project uses `.csv` files to generate pool. Used file: `resources/questions.csv`. Row and cell separator can be set in `app/config.js`.
Structure of file must be like shown beneath. Upper case keywords (without `<>`) must be in exact same position. Sentences wrapped with `<>` are user inputs.


```
| HEADER                   |              |           |              |              |              |
|                          |              |           |              |              |              |
| <Title>                  |              |           |              |              |              |
| <Description>            |              |           |              |              |              |
|                          |              |           |              |              |              |
|                          |              |           |              |              |              |
| FOOTER                   |              |           |              |              |              |
| <Text over send button>  |              |           |              |              |              |
| <Send button text>       |              |           |              |              |              |
| <Text on thank you page> |              |           |              |              |              |
|                          |              |           |              |              |              |
|                          |              |           |              |              |              |
| QUESTIONS                |              |           |              |              |              |
| <Question itself>        | <Input type> | <Options> | <1st answer> | <2nd answer> | <Nth answer> |
| <Second question>        | <Input type> | <Options> | <1st answer> | <2nd answer> | <Nth answer> |
| <Nth question>           | <Input type> | <Options> | <1st answer> | <2nd answer> | <Nth answer> |
```

There are 8 types of input types: text input, boolean, checkboxes, radio buttons, texarea, dropdown, range, and multiple radios. Multi-radio has extra paremeter SCALE: ( eg. `SCALE:Very Low/Low/Average/Good/Very Good`).
