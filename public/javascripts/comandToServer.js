function toggleAction(buttonType) {
    let sendData;
    let element = document.getElementById("img");
    if(buttonType == 'on')
    {
        element.src = '/images/acesso.png';
        sendData = 1;
    }
    else
    {
        element.src = '/images/apagado.png';
        sendData = 0;
    }
    console.log(sendData);

    axios.post('/led', {
        sendData : sendData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}