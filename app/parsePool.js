import fs from 'fs';
import config from './config';
import Pool from './Pool';

export default path => {
  const questions = fs.readFileSync(path, {encoding: "utf-8"});
  return generatePool(questions);
};



const generatePool = str => {
  const pool = new Pool(str);
  return pool.cells
    .map(
      s => {
        switch(s[0][0]) {
          case "HEADER": return parseHeader(s) ;
          case "QUESTIONS": return parseQuestions(s);
          case "FOOTER": return parseFooter(s);
          default: return s;
        }
      })
    .reduce(
      (p,c) => Object.assign(p, c),
      {}
    );
};

const parseHeader =
  s => ({
    [s[0][0].toLowerCase()]: {
      title: or(s[1][0], "Brak tytułu"),
      description: or(s[2][0], "Brak opisu")
    }
  });

const parseFooter =
  s => ({
    [s[0][0].toLowerCase()]: {
      thankYouText: or(s[1][0], "Dziękujemy za udział w ankiecie!"),
      buttonText: or(s[2][0], "Wyślij"),
      finalText: or(s[3][0], "Zgłoszenie zostało wysłane.")
    }
  });

const parseQuestions = s => {
  const result = s.slice(1).map(i => ({ question: i[0], type: i[1], opts: getOpts(i), values: getValues(i) }));
  return { [s[0][0].toLowerCase()]: result }};


function getOpts(i) {
  if(i.length < 2) return {};

  let opts = i[2].split("&").map(o => {
    let kv = o.split(":");
    switch( kv[0] ) {
      case "SCALE":
      case "RANGE":
        return { [ kv[0].toLowerCase() ]: kv[1].split('/') };
        break;
      case "OTHER":
        return { [ kv[0].toLowerCase() ]: true };
        break;
      default: return {};
    }
  });
  return opts.reduce(
    (p,c) => Object.assign(p, c),
    {} );
}

function getValues(i) {
  return i.length > 3 ? i.slice(3) : [];
}


//
// let pokazowo = {
//   data: {
//     header: {
//       title: "TITLE",
//       description: "DESCRIPION"
//     },
//     questions: [
//       {
//         label: "LABEL",
//         additionalText: "ADDITIONALTEXT",
//         type: "BOOL / RANGE / SCALE / MULTI(checkboxes) / INPUT / TEXTAREA",
//         question: "QUESTION",
//         id: "ID(autoincrement)"
//       },
//       // { ... }
//     ],
//     footer: {
//       finalText: "FINALTEXT",
//       buttonText: "BUTTONTEXT",
//       action: "ACTION"
//     }
//   }
// }

function or(x,y) {
  return x !== "" || x !== null || x !== undefined
           ? x
           : y;
}