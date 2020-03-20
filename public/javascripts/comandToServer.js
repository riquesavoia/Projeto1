function toggleAction(buttonType) {
    let sendData;
    if(buttonType == 'on')
    {
      $('#image').attr("src",'/images/acesso.png');
      sendData = 1;
    }
    else
    {
      $('#image').attr("src",'/images/apagado.png');
      sendData = 0;
    }
    let response = $.post("/led", {sendData : sendData});
    console.log(response);
}