function getUserViaFethc() {
    return fetch("http://jsonplaceholser.typicode.com/users/1").then(response => 
       response.json()
      );
}

async function init() {
    const user = await getUserViaFethc();
    console.log(`got the user as: `, user);
}
init();