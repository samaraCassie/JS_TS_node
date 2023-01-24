fetch('pessoa.json')
  .then(response => response.json())
  .then(json => console.log(json));

document.addEventListener('click', e => {
  const el = target(e);
  const tag = el.tagName.toLowerCase();

  if(tag === 'a'){
    e.preventDefault();
    loadPag(el);
  }
})

const loadPag = el => {
  const href = el.getAttribute('href');
  const objConfig = {
    method: 'GET',
    url: href
  };

  request(objConfig).then(response => {
    loadResult(response);
  }).catch(error => console.log(error));
}

const loadResult = response => {
  const result = document.querySelector('.result');
  result.innerText = response;
}