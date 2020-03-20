function toggleAction(buttonType) {
    let sendData;
    //let element = document.getElementById("img");
    let element = $("#img").src;
    if(buttonType == 'on')
    {
        element = '/images/acesso.png';
        sendData = 1;
    }
    else
    {
        element = '/images/apagado.png';
        sendData = 0;
    }
    console.log(sendData);
    $.post("/led", {sendData : sendData});
    /*axios.post('/led', {
        sendData : sendData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
      
}