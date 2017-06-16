var pool = [];

window.onload = function () {
  var app = document.getElementById('app');

  fetch( new Request('/pool') )
    .then(function (res) {
      return res.json();
    })
    .then(initPool)
    .then(function(res) {
      document.getElementById('form')
        .addEventListener('submit', function(e) { submitPool(e, res); });

      document.querySelectorAll('input[type=range]').forEach(itm => {
        var evt = document.createEvent("HTMLEvents");

        itm.addEventListener('change', (e) => {
          var target = e.target;
          document.getElementById(target.id + '-val' ).value = target.value;
        });

        evt.initEvent("change", false, true)
        itm.dispatchEvent( evt );
      });
    });


  function initPool(res) {
    pool = res.questions.slice(); //
    pool.unshift(null);
    document.title = res.header.title;
    app.innerHTML = window.fn(res);
    return res;
  }

  function submitPool(e, res) {
    e.preventDefault();

    var answers = pool.map((itm, idx) => {
      if(itm) {
        var ans;
        var id = pool[idx].inputID;

        switch(itm.type) {
          case 'input':
          case 'textarea':
          case 'range':
            ans = document.getElementById( id ).value;
            break;
          case 'bool':
            ans = document.getElementById( id ).checked ?
              itm.values[1]:
              itm.values[0];
            break;
          case 'checkbox':
            ans = Array.from( document.getElementsByName( id ) )
                       .filter(itm => itm.checked)
                       .map(itm => itm.value);
            break;
          case 'radio':
            ans = Array.from( document.getElementsByName( id ) )
                       .find(itm => itm.checked)
                       .value;
            break;
          case 'multi-radio':
            ans = [];
            [...id].map((singleID, index) => {
              let val = Array.from( document.getElementsByName( singleID ) )
                             .find(itm => itm.checked)
                             .value;
              let question = pool[idx].values[index];
              ans.push( question + ": " + val );
            });
            break;
          default:
            ans = "";
            break;
        }

        return { question: itm.question, answer: ans };
      }
    });

    console.log(answers);

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch( new Request('/send'),
           { method: "POST",
             headers: myHeaders,
             body: JSON.stringify({ finalText: res.footer.finalText,
                                    answers: answers }) } )
      .then(function(res) { return res.text(); })
      .then(function(res) {
        app.innerHTML = res;
      });
  }
};
