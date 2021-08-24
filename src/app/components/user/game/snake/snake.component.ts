import { Component, OnInit } from '@angular/core';
import { EventManager } from'@angular/platform-browser' 

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  start:boolean=false;// Controla el inicio del juego
  public isShow:boolean=true;// Controla la visualización de la serpiente
  foodColors:string[]=['yellow','green','orange','purple','blue','pink','cyan'];
  foodColor:string;
  foodX:number;// La posición de la comida a la izquierda
  foodY:number;// Posición de comida arriba
  snake=[{top:120,left:150},{top:120,left:120},{top:120,left:90}];// Se usa para inicializar la serpiente
  intervalId:any;// Esta variable se usa como el id de la función de tiempo y se puede usar para detener el juego
  speed:number=600;// Determina la velocidad a la que se mueve la serpiente. Cambiará con la longitud de la serpiente y establecerá diferentes velocidades.
  direction:string="right";// Dirección del movimiento
  moveX:number=150;// La posición de la cabeza de serpiente
  moveY:number=120;
  /*maxClientX:number=document.documentElement.clientWidth;// Ancho de pantalla visible
  maxClientY:number=document.documentElement.clientHeight;
*/
maxClientX:number=870;// Ancho de pantalla visible
  maxClientY:number=360;



startGame(){// Iniciar la función de activación del botón del juego
    this.start=true;
    this.isShow=false;
    this.intervalId=setInterval(()=>{
    this.snakeMove();
    },this.speed);
   
  }

snakeMove(){// Función de movimiento de serpiente
   var snake=document.querySelectorAll(".snake");
   switch(this.direction){// Cambia la dirección del movimiento snake_head, cada vez que se mueve 30px
     case 'left':{this.moveX-=30;break;}
     case 'top':{this.moveY-=30;break;}
     case 'right':{this.moveX+=30;break;}
     case 'bottom':{this.moveY+=30;break;}
   } 
   for(var i=snake.length-1;i>0;i--){// Haz que el cuerpo de la serpiente se mueva
      snake[i].setAttribute('style',`${snake[i-1].getAttribute('style')}`);
   }
      snake[0].setAttribute('style',`top:${this.moveY}px ;left:${this.moveX}px;background-color:${this.foodColors[Math.round(Math.random()*6)]}`);
      this.rightPosition();
      this.eatFood();
      this.speedUp(snake.length);
}

setDirection(keyCode){// Cambiar la función de dirección del movimiento de la serpiente
  //alert(keyCode);  
  switch(keyCode){
      case 74:{ //ascii izquierda 37 -- 
        if(this.direction!="right"){// Si la serpiente se mueve hacia la derecha, presione<- No funciona
           this.direction="left";
            }
              break;}
      case 73:{//ascii arriba 38
        if(this.direction!="bottom"){
           this.direction="top";
              }
        break;}
      case 76:{ //ascii derecha 39
        if(this.direction!="left"){
          this.direction="right";
        }
        break;}
      case 75:{  //ascii abajo 40
        if(this.direction!="top"){
          this.direction="bottom";
        }
        break;}
      case 27:{ //ascii esc 27
        clearInterval(this.intervalId);
        this.start=false;
        document.getElementById("start").innerHTML="Pausa el juego";
          break;}
    }
}

beginning(){// Inicializa la serpiente al comienzo del juego
    var snake=document.querySelectorAll('.snake');
    for(var i=0;i<snake.length;i++){
      snake[i].setAttribute('style',`top:${this.snake[i].top}px ; left:${this.snake[i].left}px;background-color:${this.foodColors[Math.round(Math.random()*6)]}`);
    }
}

speedUp(len:number){// Establece la dificultad del juego
    if(len<=5){
      this.speed=600;
    }else if(len>5&&len<=10){
      this.speed=400;
    }else{
      this.speed=200;
    }
}

rightPosition(){// Juzga si la serpiente golpea la pared
    var obj=document.getElementById("start");
    var body=document.getElementById("container");
   if(this.moveX>=this.maxClientX||this.moveY>=this.maxClientY||this.moveX<=90||this.moveY<=0){// Si se cumplen estas condiciones, la serpiente golpea la pared y el juego termina
        clearInterval(this.intervalId);
        this.start=false;
        obj.innerHTML="Juego finalizado";
        body.setAttribute("style","background-image:url('./assets/images/Games/snake/gameover.jpg')")
        this.start=false;
   }
}

createFood(){// Genera comida, solo es necesario modificar la posición y el color de la comida después de ingerida para generar nueva comida
    var food=document.getElementById("food");
    //alert(Math.random());
    this.foodX=Math.round(Math.random()*((this.maxClientX-20)-100))+100;
    this.foodY=Math.round(Math.random()*((this.maxClientY-20)-50))+50;
    //alert(">"+this.foodX+">"+this.foodY);
    this.foodColor=this.foodColors[Math.round(Math.random()*6)];// Genera números enteros aleatorios de 0 a 6 para generar colores de alimentos al azar
    food.setAttribute('style',`top:${this.foodY}px;left:${this.foodX}px;background-color:${this.foodColor}`);
}

eatFood(){// La pequeña serpiente come comida
    var distanceX=Math.abs(this.foodX-this.moveX);// Distancia del alimento más valor absoluto
    var distanceY=Math.abs(this.foodY-this.moveY);
    if(distanceX<20&&distanceY<20){
      var snake=document.getElementById("snake");// Toda una serpiente, como un todo
      var snakeBodies=document.querySelectorAll(".snake");// Divide la serpiente en cada div
      snake.appendChild(snakeBodies[1].cloneNode());
      this.createFood();// Comer alimentos, generar nuevos alimentos
    }
}

  constructor(private eventListener :EventManager) { }

  ngOnInit(): void {
    this.eventListener.addGlobalEventListener('window','keydown',(event:any)=>{// Supervisar la función del teclado
      this.setDirection(event.keyCode);
    });
    this.beginning();
    this.createFood();
  }

}
