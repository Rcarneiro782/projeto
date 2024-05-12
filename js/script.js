let log = new Log(document.querySelector('.log'));

let char =  new Knight('Rafa');
let monster = new LittleMonster();




const gameStage = new Stage(
char,
monster,

document.querySelector('#char'),
document.querySelector('#monster'),
//document.querySelector('.log')
log



);

gameStage.start();