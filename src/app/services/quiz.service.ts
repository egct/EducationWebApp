import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz [] = [
    {
      question: '1.	Verdadero o falso: a) GDI (Graphics Device Interface) es uno de los tres componentes o subsistemas de la interfaz de usuario de Microsoft Windows que trabaja junto con el núcleo y la API de Windows; b) GDI es una interfaz de programación de aplicaciones que se encarga del control gráfico de los dispositivos de salida, como los monitores o las impresoras y de varios dispositivos de entrada, como teclado, ratón y Joystick. ',
      answer: [
        { option: 'A.	Verdadero, Verdadero' , correct: false},
        { option: 'B.	Verdadero, Falso' , correct: false},
        { option: 'C.	Falso, Verdadero' , correct: false},
        { option: 'D.	Falso, Falso' , correct: true}
      ]
    },
    {
      question: '2.	Verdadero o falso: a) Las tareas más comunes de GDI son: el dibujo de líneas, curvas, polígonos, relleno de cuadros, círculos, polígonos, entre otras figuras, se encarga del renderizado de fuentes y texto, manejo de paletas; b) GDI no se encarga del dibujo de los menús, ventanas, etc., ya que este es un trabajo especial para el user32.dll que es una biblioteca de la API de Windows exclusiva para estas funciones.',
      answer: [
        { option: 'A.	Verdadero, Verdadero' , correct: false},
        { option: 'B.	Verdadero, Falso' , correct: false},
        { option: 'C.	Falso, Verdadero' , correct: false},
        { option: 'D.	Falso, Falso' , correct: true}
      ]
    },
    {
      question: '3.	Verdadero o falso: a) La capacidad más significativa del GDI es la escalabilidad de posibilidades y la abstracción que se puede conseguir con los dispositivos de salida y entrada; b) La mayoría de los videojuegos simples en 2D se pueden crear usando GDI, sin embargo no es lo suficientemente poderosa para la creación de videojuegos complejos como en 3D debido a la falta de sincronización con el framebuffer encargado de las animaciones y su obvia incapacidad para la renderización de modelos y objetos 3D.',
      answer: [
        { option: 'A.	Verdadero, Verdadero' , correct: false},
        { option: 'B.	Verdadero, Falso' , correct: false},
        { option: 'C.	Falso, Verdadero' , correct: false},
        { option: 'D.	Falso, Falso' , correct: true}
      ]
    },
    {
      question: '4.	Se necesita incluir la librería __________ para utilizar la clase MessageBox y utilizar los controles del cuadro de herramientas (tool box). Se necesita incluir la librería __________ para utilizar objetos gráficos.',
      answer: [
        { option: 'A.	Librería System.Windows y System.Graphics.' , correct: false},
        { option: 'B.	Librería System.Windows.Forms y System.Drawing.' , correct: false},
        { option: 'C.	Librería System.Data y System.Drawing.' , correct: false},
        { option: 'D.	Librería System.Windows.Forms y System.Graphics.' , correct: true}
      ]
    },
    {
      question: '5.	¿Cuál de las siguientes declaraciones no es verdadera?',
      answer: [
        { option: 'A.	Las clases (class) permiten al programador definir nuevos tipos de datos fuera de los tipos de datos existentes en C#.' , correct: false},
        { option: 'B.	Para acceder a los datos miembros y a los métodos de una clase se utilizan objetos desde una clase externa.' , correct: false},
        { option: 'C.	Se utiliza el operador punto (dot operator) para acceder a los datos miembros y a los métodos de una clase a través de objetos en la misma clase.' , correct: false},
        { option: 'D.	Ninguna de las anteriores.' , correct: true}
      ]
    },
    {
      question: '6.	Considere la siguiente clase: public class Figura{}, ¿Qué métodos contiene esta clase, si se crean objetos de la misma?',
      answer: [
        { option: 'A.	Constructor copia.' , correct: false},
        { option: 'B.	Constructor y recolector de basura.' , correct: false},
        { option: 'C.	Operador de asignación.' , correct: false},
        { option: 'D.	Todas las opciones de arriba. ' , correct: true}
      ]
    },
    {
      question: '7.	Verdadero o falso: a) Un constructor es el lugar ideal para inicializar los datos miembro y objetos de una clase, antes de declarar una instancia de esa clase; b) Se pueden tener n-constructores sobrecargados con diferentes tipos de parámetros y diferente número de parámetros.',
      answer: [
        { option: 'A.	Verdadero, Verdadero' , correct: false},
        { option: 'B.	Verdadero, Falso' , correct: false},
        { option: 'C.	Falso, Verdadero' , correct: false},
        { option: 'D.	Falso, Falso' , correct: true}
      ]
    },
    {
      question: '8.	Verdadero o falso: a) La función DrawLine() tiene tres funciones sobrecargadas para graficar una línea; b) Para graficar una línea en el mundo de la Computación Gráfica es necesario que a cada coordenada ‘x’ e ‘y’ se multiplique por un factor de escalamiento para hacer un Zoom-In y un Zoom-Out de la figura geométrica. ',
      answer: [
        { option: 'A.	Verdadero, Verdadero' , correct: false},
        { option: 'B.	Verdadero, Falso' , correct: false},
        { option: 'C.	Falso, Verdadero' , correct: false},
        { option: 'D.	Falso, Falso' , correct: true}
      ]
    },
    {
      question: '9.	Para graficar un círculo en función de una elipse desde el punto P0(0, 0), se utiliza el siguiente código:',
      answer: [
        { option: 'A.	mGraph.DrawEllipse(mPen, 0, 0, mRadius*SF, mRadius*SF);' , correct: false},
        { option: 'B.	mGraph.DrawEllipse(mPen, 0, 0, 4*mRadius*SF, 4*mRadius*SF);' , correct: false},
        { option: 'C.	mGraph.DrawEllipse(mPen, 0, 0, 3*mRadius*SF, 3*mRadius*SF);' , correct: false},
        { option: 'D.	mGraph.DrawEllipse(mPen, 0, 0, 2*mRadius*SF, 2*mRadius*SF);' , correct: true}
      ]
    },
    {
      question: '10.	Para graficar un cuadrado en función de un rectángulo desde el punto P0(0, 0), se utiliza el siguiente código:',
      answer: [
        { option: 'A.	mGraph.DrawRectangle(mPen, 0, 0, 2*mSide*SF, 2*mSide*SF);' , correct: false},
        { option: 'B.	mGraph.DrawRectangle(mPen, 0, 0, 3*mSide*SF, 3*mSide*SF);' , correct: false},
        { option: 'C.	mGraph.DrawRectangle(mPen, 0, 0, mSide*SF, mSide*SF);' , correct: false},
        { option: 'D.	mGraph.DrawRectangle(mPen, 0, 0, 4*mSide*SF, 4*mSide*SF);' , correct: true}
      ]
    },
    {
      question: '11.	Para graficar un rectángulo desde el punto P0(0, 0), se utiliza el siguiente código:',
      answer: [
        { option: 'A.	mGraph.DrawRectangle(mPen, 0, 0, mWidth*SF, mHeight*SF);' , correct: false},
        { option: 'B.	mGraph.DrawRectangle(mPen, 0, 0, 2*mWidth*SF, 2*mHeight*SF);' , correct: false},
        { option: 'C.	mGraph.DrawRectangle(mPen, 0, 0, 3*mWidth*SF, 3*mHeight*SF);' , correct: false},
        { option: 'D.	mGraph.DrawRectangle(mPen, 0, 0, 4*mWidth*SF, 4*mHeight*SF);' , correct: true}
      ]
    },
    {
      question: '12.	Para graficar un triángulo cualquiera los valores de los vértices son:',
      answer: [
        { option: 'A.	A(0,0); B(a, 0); C(b*cos(A), b*sen(A));' , correct: false},
        { option: 'B.	A(0,0); B(b, 0); C(b*cos(A), b*sen(A));' , correct: false},
        { option: 'C.	A(0,0); B(c, 0); C(b*sen(A), b*cos(A));' , correct: false},
        { option: 'D.	A(0,0); B(c, 0); C(b*cos(A), b*sen(A));' , correct: true}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}