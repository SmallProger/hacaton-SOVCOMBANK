async function registrate(ip, data) {
  try {
    let request = await fetch(ip + 'api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return request.ok;
  } catch (err) {
    console.log(err);
  }
}

export { registrate };