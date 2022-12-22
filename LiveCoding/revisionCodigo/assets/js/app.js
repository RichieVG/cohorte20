const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name'); //se utilizaron signos innecesarios como $
const $b = document.querySelector('#blog'); //no se deja en claro el contexto
const $l = document.querySelector('.location');

async function displayUser(username) { //pusimos el async antes de function
  $n.textContent = 'cargando...'; //se utilizan comillas invertidas para este caso
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  response (); /* no estaba siendo utilizada la variable response (linea 9)*/
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);