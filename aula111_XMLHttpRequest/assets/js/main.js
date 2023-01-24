const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(cht.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    loadPag(element);
  }
});

function loadPag(el) {
  const href = el.getAttribute('href');
  const objConfig = {
    method: 'GET',
    url: href
  };

  request(objConfig).then(response => {
    loadResult(response);
  }).catch(error => console.log(error));
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}