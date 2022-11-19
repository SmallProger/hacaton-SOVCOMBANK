async function registrate(ip, data) {
  try {
    let request = await fetch(ip + 'api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log('REGISTRATE', request.ok, request.id);
    return {
      ok: request.ok,
      id: request.id,
    }
  } catch (err) {
    console.log(err);
  }
}

export { registrate };