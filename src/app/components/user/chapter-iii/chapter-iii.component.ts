import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { FormControl } from '@angular/forms';
import { Url } from 'url';

export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-chapter-iii',
  templateUrl: './chapter-iii.component.html',
  styleUrls: ['./chapter-iii.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChapterIIIComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
  prefTabs: any;
  introduccion: any;
  praqnique: any;
  praqniquePropuesto: any;
  casosPropuesto: any;
  selectedIndex = new FormControl(0); // define a FormControl with value 0. Value means index.
  numberTabs = 10;
  positionCurrentNext: boolean = true;
  positionCurrentBefore: boolean = false;
  titleNext: string = 'Siguiente';
  num_capitulo = 3;

  constructor() {
    /*   this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Problema 1', content: 'Content 1'},
          {label: 'Problema 2', content: 'Content 2'},
          {label: 'Problema 3', content: 'Content 3'},
        ]);
      }, 1000);
    });
  */
    this.introduccion = [{
      f1:
        `
        class Program
        {
            static void Main(string[] args)
            {
                // Crear una ventana con un rectángulo cuyo tamaño (size)
                // es de (500, 500), es decir, Width: 500; Height: 500
                GameWindow window = new GameWindow(500, 500);
                // Crear una instancia de la clase Game para dibujar
                // un triángulo isósceles.
                Game ObjGame = new Game(window);
            }
        }
    
        `,
      f2:
        `
        class Game
        {
        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
        // o una Ventana de Windows.
        GameWindow window;
    
        // Constructor con un parámetro.
        public Game(GameWindow window)
        {			
    
        }
    
        // Función que permite arrancar una aplicación gráfica.
        void Start()
        {
          
        }
    
        // Función que redimensiona una ventana.
        void Resize(object o, EventArgs e)
        {
          
        }
    
        // Función que renderiza los frames de la aplicación gráfica.
        void RenderFrame(object o, EventArgs e)
        {
          
        }
    
        // Función que inicializa la carga de la aplicación gráfica.
        void Loaded(object o, EventArgs e)
        {
          
        }
      }
    
        `
    }];

    this.praqnique = [
      {
        link: 'https://drive.google.com/uc?id=1gnTJGJ5-s5Ijk8cjhyjgOHNdWxofi_cH&export=download',
        label: 'Pracnique 5.1',
        tituloN: 'Pracnique 5.1: ',
        titulo: 'Triángulo de 3 Colores',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un triángulo con 3 colores de un tamaño específico.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Básico' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados los tres vértices de un triángulo isósceles ABC, dibujar la figura geométrica correspondiente con un degradado de 3 colores entre rojo, verde y azul por vértice. Además, dibujar esta figura en un fondo negro. (Ver Figura 5.1.1).',
          fotoPath: './assets/images/Capitulos/III/media/m1.png',
          fotoN: 'Figura 5.1.1. ',
          fotoDescrip: 'Triángulo Isósceles de 3 colores.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Por construcción se encierra a la figura geométrica dentro de un rectángulo, luego se ubican los vértices del rectángulo cuyos valores son: $O(0,0); P(50,0); Q(50,50); R(0,50)$. Finalmente, se ubican los vértices del triángulo isósceles cuyos valores son: $A(1,1); B(49,1); C(25,49)$. (Ver Figura 5.1.2).',
              fotoPath: './assets/images/Capitulos/III/media/m2.png',
              fotoN: 'Figura 5.1.2. ',
              fotoDescrip: 'Vértices del Triángulo Isósceles.'
            },
            {
              parrafo: 'Para la proyección ortogonal se definen los siguientes valores: $a) left: 0.0; b) right: 50.0; c) bottom: 0.0; d) top: 50.0; e) zNear: -1.0; zFar: 1.0$. Estos valores son enviados como parámetros a la función Ortho llamada por la instancia GL, como se indica a continuación:',
            },
            {
              parrafo: '$GL.Ortho(0.0, 50.0, 0.0, 50.0, -1.0, 1.0);$',
            },
            {
              parrafo: 'Dados los siguientes puntos:',
              fotoPath: './assets/images/Capitulos/III/media/m3.png'
            },
            {
              parrafo: 'Se verifica que los vértices de la figura corresponden efectivamente a los vértices de un triángulo isósceles, para lo cual calculamos la distancia $AC$:',
              fotoPath: './assets/images/Capitulos/III/media/m4.png'
            },
            {
              parrafo: 'Luego, calculamos la distancia $BC$:',
              fotoPath: './assets/images/Capitulos/III/media/m5.png'
            },
            {
              parrafo: 'Como la distancia $AC$ es igual a la distancia $BC$: $d_{AC}=24\\sqrt{5}=d_{BC}$',
            },
            {
              parrafo: 'Entonces concluimos que, la figura $ABC$ es un triángulo isósceles.',
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.1.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.1.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de 500×500.',
                '2.	Activar el modelo de la vista en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una proyección Ortogonal, donde: a) el plano x-y está a 90 grados; b) el plano x-z está a 135 grados; c) el plano y-z está a 135 grados; d) el eje x se manipula con los métodos: left y right;  e) el eje y se manipula con los métodos bottom y top; f) el eje z se manipula con los métodos zNear y zFar.',
                '4.1.	Asignar al método left el valor de 0.0.',
                '4.2.	Asignar al método right el valor de 50.0.',
                '4.3.	Asignar al método bottom el valor de 0.0.',
                '4.4.	Asignar al método top el valor de 50.0.',
                '4.5.	Asignar al método zNear el valor de -1.0.',
                '4.6.	Asignar al método zFar el valor de 1.0.',
                '4.7.	Activar el modelo de la vista en el mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.1.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara.',
                '3.	Iniciar el modo gráfico para dibujar triángulos.',
                '4.	Graficar un Triángulo Isósceles.',
                '4.1.	Definir un color rojo (red), para el primer vértice.',
                '4.2.	Definir el vértice A del triángulo, con los valores de (1.0,1.0).',
                '4.3.	Definir un color verde (green), para el segundo vértice.',
                '4.4.	Definir el vértice B del triángulo, con los valores de (49.0,1.0).',
                '4.5.	Definir un color azul (blue), para el tercer vértice.',
                '4.6.	Definir el vértice C del triángulo, con los valores de (25.0,49.0).',
                '5.	Finalizar el modo gráfico.',
                '6.	Invertir los buffers disponibles para la graficación.'
              ]
            },
            {
              titulo: '5.1.4. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.1.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.1.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace ConsoleAppTriangleOpenTK
                    {
                        class Game
                        {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += Loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += Resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += RenderF;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0 / 60.0);
                        }
                    
                        // Función que redimensiona una ventana.
                        void Resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0, 0, window.Width, window.Height);
                          // Activar el modelo de la vista en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una proyección Ortogonal.
                          // plano x-y: 90 grados; plano x-z: 135 grados; 
                          // plano y-z: 135 grados; eje x: left y right; 
                          // eje y: bottom y top; eje z: zNear y zFar.
                          GL.Ortho(0.0, 50.0, 0.0, 50.0, -1.0, 1.0);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                        void RenderF(object o, EventArgs e)
                        {
                                        // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara.
                          GL.Clear(ClearBufferMask.ColorBufferBit);
                          // Iniciar el modo gráfico para dibujar triángulos.
                          GL.Begin(BeginMode.Triangles);
                          // Graficar un Triángulo Isósceles.
                          // Definir un color rojo (red).
                          GL.Color3(1.0, 0.0, 0.0);
                          // Definir el vértice A del triángulo.
                          GL.Vertex2(1.0, 1.0);
                          // Definir un color verde (green).
                          GL.Color3(0.0, 1.0, 0.0);
                          // Definir el vértice B del triángulo.
                          GL.Vertex2(49.0, 1.0);
                          // Definir un color azul (blue).
                          GL.Color3(0.0, 0.0, 1.0);
                          // Definir el vértice C del triángulo.
                          GL.Vertex2(25.0, 49.0);
                          // Finalizar el modo gráfico.
                          GL.End();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                        }
                        void Loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                        }
                      }
                    }                   
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.1.2, que es la clase que representa a la interfaz gráfica de usuario del triángulo isósceles de 3 colores.',
              tablaN: 'Tabla 5.1.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;

                    namespace ConsoleAppTriangleOpenTK
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño
                                // se de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un triángulo isósceles.
                                Game ObjGame = new Game(window);
                            }
                        }
                    }
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.1.3, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m6.png',
              fotoN: 'Figura 5.1.3. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1ngXsOJtKy8aqMWittkchR3F4pRxDx7NW&export=download',
        label: 'Pracnique 5.2',
        tituloN: 'Pracnique 5.2: ',
        titulo: 'Cuadrado de 4 Colores Rotando',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cuadrado rotando con 4 colores de un tamaño específico.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Básico' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados los cuatro vértices de un cuadrado ABCD, dibujar la figura geométrica correspondiente con un degradado de 4 colores entre rojo, verde, azul y rojo por vértice. Además, dibujar esta figura en un fondo negro y rotando sobre el eje z. (Ver Figura 5.2.1).',
          fotoPath: './assets/images/Capitulos/III/media/m7.png',
          fotoN: 'Figura 5.2.1. ',
          fotoDescrip: 'Cuadrado de 4 colores rotando.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Por construcción se encierra a la figura geométrica dentro de un rectángulo, luego se ubican los vértices del rectángulo cuyos valores son: $O(-50,-50); P(50,-50); Q(50,50); R(-50,50)$. Finalmente, se ubican los vértices del cuadrado cuyos valores son: $A(30,30); B(-30,30); C(-30,-30); D(30,-30)$. (Ver Figura 5.2.2).',
              fotoPath: './assets/images/Capitulos/III/media/m8.png',
              fotoN: 'Figura 5.2.2. ',
              fotoDescrip: 'Vértices del Cuadrado.'
            },
            {
              parrafo: 'Para la proyección ortogonal se definen los siguientes valores: $a) left: -50.0; b) right: 50.0; c) bottom: -50.0; d) top: 50.0; e) zNear: -1.0; zFar: 1.0$. Estos valores son enviados como parámetros a la función Ortho llamada por la instancia GL, como se indica a continuación:',
            },
            {
              parrafo: '$GL.Ortho(-50.0, 50.0, -50.0, 50.0, -1.0, 1.0);$',
            },
            {
              parrafo: 'Dados los siguientes puntos:',
              fotoPath: './assets/images/Capitulos/III/media/m9.png'
            },
            {
              parrafo: 'Se verifica que los vértices de la figura corresponden efectivamente a los vértices de un cuadrado, para lo cual calculamos la distancia $BA$:',
              fotoPath: './assets/images/Capitulos/III/media/m10.png'
            },
            {
              parrafo: 'Luego, calculamos la distancia $CD$:',
              fotoPath: './assets/images/Capitulos/III/media/m11.png'
            },
            {
              parrafo: 'Después, calculamos la distancia $BC$:',
              fotoPath: './assets/images/Capitulos/III/media/m12.png'
            },
            {
              parrafo: 'Finalmente, calculamos la distancia $AD$:',
              fotoPath: './assets/images/Capitulos/III/media/m13.png'
            },
            {
              parrafo: 'Como la distancia $BA$ es igual a la distancia $CD$ e igual a la distancia $BC$ e igual a la distancia $AD$: $d_BA=d_CD=d_BC=d_AD=60$',
            },
            {
              parrafo: 'Entonces concluimos que, la figura $ABCD$ es un cuadrado.',
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.2.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.2.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de 500×500.',
                '2.	Activar el modelo de la vista en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una proyección Ortogonal, donde: a) el plano x-y está a 90 grados; b) el plano x-z está a 135 grados; c) el plano y-z está a 135 grados; d) el eje x se manipula con los métodos: left y right;  e) el eje y se manipula con los métodos bottom y top; f) el eje z se manipula con los métodos zNear y zFar.',
                '4.1.	Asignar al método left el valor de -50.0.',
                '4.2.	Asignar al método right el valor de 50.0.',
                '4.3.	Asignar al método bottom el valor de -50.0.',
                '4.4.	Asignar al método top el valor de 50.0.',
                '4.5.	Asignar al método zNear el valor de -1.0.',
                '4.6.	Asignar al método zFar el valor de 1.0.',
                '4.7.	Activar el modelo de la vista en el mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.2.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara.',
                '3.	Rotar la figura geométrica en el eje z.',
                '4.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '5.	Graficar un Cuadrado.',
                '5.1.	Definir un color rojo (red), para el primer vértice.',
                '5.2.	Definir el vértice A del triángulo, con los valores de (30.0,30.0).',
                '5.3.	Definir un color verde (green), para el segundo vértice.',
                '5.4.	Definir el vértice B del triángulo, con los valores de (-30.0,30.0).',
                '5.5.	Definir un color azul (blue), para el tercer vértice.',
                '5.6.	Definir el vértice C del triángulo, con los valores de (-30.0,-30.0).',
                '5.7.	Definir un color rojo (red), para el cuarto vértice.',
                '5.8.	Definir el vértice D del triángulo, con los valores de (30.0,-30.0).',
                '6.	Finalizar el modo gráfico.',
                '7.	Invertir los buffers disponibles para la graficación.',
                '8.	Incrementar el valor del ángulo de rotación theta en un grado.',
                '9.	Si el ángulo de rotación es mayor que 360, entonces:',
                '9.1.	Asignar al ángulo de rotación theta el valor que tiene menos el valor de 360 grados.'
              ]
            },
            {
              titulo: '5.2.4. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.2.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.2.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace ConsoleAppSquareOpenTK
                    {
                        class Game
                        {		
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cuadrado.
                        double theta = 0.0;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += Loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += Resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += RenderFrame;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0 / 60.0);
                        }
                    
                        // Función que redimensiona una ventana.
                        void Resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0, 0, window.Width, window.Height);
                          // Activar el modelo de la vista en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una proyección Ortogonal.
                          // plano x-y: 90 grados; plano x-z: 135 grados; 
                          // plano y-z: 135 grados; eje x: left y right; 
                          // eje y: bottom y top; eje z: zNear y zFar.
                          GL.Ortho(-50.0, 50.0, -50.0, 50.0, -1.0, 1.0);			
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                    
                        // Función que renderiza los frames de la aplicación gráfica.
                        void RenderFrame(object o, EventArgs e)
                        {
                                        // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara.
                          GL.Clear(ClearBufferMask.ColorBufferBit);
                          // Rotar la figura geométrica en el eje z.
                          GL.Rotate(theta, 0.0, 0.0, 1.0);
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          // Graficar un Cuadrado.
                          // Definir un color rojo (red).
                          GL.Color3(1.0, 0.0, 0.0);
                          // Definir el vértice A del cuadrado.				
                          GL.Vertex2(30.0, 30.0);
                          // Definir un color verde (green).
                          GL.Color3(0.0, 1.0, 0.0);
                          // Definir el vértice B del cuadrado.
                          GL.Vertex2(-30.0, 30.0);			
                          // Definir un color azul (blue).
                          GL.Color3(0.0, 0.0, 1.0);
                          // Definir el vértice C del cuadrado.
                          GL.Vertex2(-30.0, -30.0);
                          // Definir un color rojo (red).
                          GL.Color3(1.0, 0.0, 0.0);
                          // Definir el vértice D del cuadrado.
                          GL.Vertex2(30.0, -30.0);
                          // Finalizar el modo gráfico.
                          GL.End();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Incrementar el valor del ángulo de rotación en un grado.
                          theta += 1.0;
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          if (theta > 360)
                          {
                            // Asignar al ángulo de rotación lo que tiene menos 360 grados.
                            theta -= 360;
                          }
                        }
                    
                        // Función que inicializa la carga de la aplicación gráfica.
                        void Loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                        }
                      }
                    }                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.2.2, que es la clase que representa a la interfaz gráfica de usuario del cuadrado de 4 colores rotando.',
              tablaN: 'Tabla 5.2.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    
                    namespace ConsoleAppSquareOpenTK
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño
                                // se de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un cuadrado rotando.
                                Game ObjGame = new Game(window);
                            }
                        }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.2.3, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m14.png',
              fotoN: 'Figura 5.2.3. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1RyE7j50DXYA4IvE8LFQgAQ9D9KdMxy78&export=download',
        label: 'Pracnique 5.3',
        tituloN: 'Pracnique 5.3: ',
        titulo: 'Cubo de 6 Colores con Doble Rotación',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cubo con 6 colores de un tamaño específico con doble rotación.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados los veinte y cuatro vértices de un cubo, organizado entre 4 vértices por cara, dibujar la figura geométrica correspondiente, donde cada cara tiene un color diferente como se indica a continuación: a) la cara frontal de color amarillo; b) la cara posterior de color violeta; c) la cara superior de color cian; d) la cara inferior de color rojo; e) la cara lateral derecha de color verde; f) la cara lateral izquierda de color azul. Además, dibujar esta figura en un fondo negro y rotando sobre el eje x y el eje xz. (Ver Figura 5.3.1).',
          fotoPath: './assets/images/Capitulos/III/media/m15.png',
          fotoN: 'Figura 5.3.1. ',
          fotoDescrip: 'Cubo rotando de 6 colores.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Por construcción se obtiene un cubo de 24 vértices y 6 caras con una proyección isométrica, como se muestra en la Figura 5.3.2.',
              fotoPath: './assets/images/Capitulos/III/media/m16.png',
              fotoN: 'Figura 5.3.2. ',
              fotoDescrip: 'Cubo de 24 vértices y 6 caras.'
            },
            {
              parrafo: 'La cara frontal (front) del cubo es de color amarillo (yellow) con los siguientes 4 vértices: $A(-10,-10,10); B(10,-10,10); C(10,10,10); D(-10,10,10)$, como se muestra en la Figura 5.3.3:',
              fotoPath: './assets/images/Capitulos/III/media/m17.png',
              fotoN: 'Figura 5.3.3. ',
              fotoDescrip: 'Cara frontal (front) del cubo.'
            },
            {
              parrafo: 'La cara posterior (back) del cubo es de color violeta (violet) con los siguientes 4 vértices: $E(-10,-10,-10); F(10,-10,-10); G(10,10,-10); H(-10,10,-10)$, como se muestra en la Figura 5.3.4:',
              fotoPath: './assets/images/Capitulos/III/media/m18.png',
              fotoN: 'Figura 5.3.4. ',
              fotoDescrip: 'Cara posterior (back) del cubo.'
            },
            {
              parrafo: 'La cara superior (top) del cubo es de color cian (cyan) con los siguientes 4 vértices: $I(10,10,10); J(10,10,-10); K(-10,10,-10); L(-10,10,10)$, como se muestra en la Figura 5.3.5:',
              fotoPath: './assets/images/Capitulos/III/media/m19.png',
              fotoN: 'Figura 5.3.5. ',
              fotoDescrip: 'Cara superior (top) del cubo.'
            },
            {
              parrafo: 'La cara inferior (bottom) del cubo es de color rojo (red) con los siguientes 4 vértices: $M(10,-10,10); N(10,-10,-10); O(-10,-10,-10); P(-10,-10,10)$, como se muestra en la Figura 5.3.6:',
              fotoPath: './assets/images/Capitulos/III/media/m20.png',
              fotoN: 'Figura 5.3.6. ',
              fotoDescrip: 'Cara inferior (bottom) del cubo.'
            },
            {
              parrafo: 'La cara lateral derecha (right) del cubo es de color verde (green) con los siguientes 4 vértices: $Q(10,-10,10); R(10,-10,-10); S(10,10,-10); T(10,10,10)$, como se muestra en la Figura 5.3.7:',
              fotoPath: './assets/images/Capitulos/III/media/m21.png',
              fotoN: 'Figura 5.3.7. ',
              fotoDescrip: 'Cara lateral derecha (right) del cubo.'
            },
            {
              parrafo: 'La cara lateral izquierda (left) del cubo es de color azul (blue) con los siguientes 4 vértices: $U(-10,-10,10); V(-10,-10,-10); W(-10,10,-10); X(-10,10,10)$, como se muestra en la Figura 5.3.8:',
              fotoPath: './assets/images/Capitulos/III/media/m22.png',
              fotoN: 'Figura 5.3.8. ',
              fotoDescrip: 'Cara lateral izquierda (left) del cubo.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.3.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.3.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de 500×500.',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección y; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección x, donde la relación de aspecto corresponde al valor de x como el ancho y al valor de y como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo). ',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.']
            },
            {
              titulo: '5.3.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (0,0,-45).',
                '4.	Aplicar una matriz de rotación al cubo en el eje x, con los siguientes valores en x,y,z: (1,0,0).',
                '5.	Aplicar una matriz de rotación al cubo en el eje xz, con los siguientes valores en x,y,z: (1,0,1).',
                '6.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '7.	Graficar un Cubo.',
                '7.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '7.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '7.1.2.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '7.1.3.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '7.1.4.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '7.1.5.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '7.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '7.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '7.2.2.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '7.2.3.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '7.2.4.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '7.2.5.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '7.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '7.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '7.3.2.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '7.3.3.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '7.3.4.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '7.3.5.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '7.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '7.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '7.4.2.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '7.4.3.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '7.4.4.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '7.4.5.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '7.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '7.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '7.5.2.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '7.5.3.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '7.5.4.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '7.5.5.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '7.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '7.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '7.6.2.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '7.6.3.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '7.6.4.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '7.6.5.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '8.	Finalizar el modo gráfico.',
                '9.	Invertir los buffers disponibles para la graficación.',
                '10.	Incrementar el valor del ángulo de rotación theta en un grado.',
                '11.	Si el ángulo de rotación es mayor que 360, entonces:',
                '11.1.	Asignar al ángulo de rotación theta el valor que tiene menos el valor de 360 grados.'
              ]
            },
            {
              titulo: '5.3.4. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.3.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.3.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace ConsoleAppCubeOpenTK
                    {
                        class Game
                        {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += Loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += Resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += RenderFrame;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0 / 60.0);
                        }
                    
                        // Función que redimensiona una ventana.
                        void Resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0, 0, window.Width, window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f, window.Width / 
                                                             window.Height, 1.0f, 100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                    
                        // Función que renderiza los frames de la aplicación gráfica.
                        void RenderFrame(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit | 
                                 ClearBufferMask.DepthBufferBit);
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0, 0.0, -45.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta, 1.0, 0.0, 0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta, 1.0, 0.0, 1.0);
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          // Definir los cuatro vértices de la cara frontal (front) 
                          // del cubo, de color amarillo.
                          GL.Color3(1.0, 1.0, 0.0); // yellow color
                          GL.Vertex3(-10.0, -10.0, 10.0); // A
                          GL.Vertex3(10.0, -10.0, 10.0);  // B
                          GL.Vertex3(10.0, 10.0, 10.0);   // C
                          GL.Vertex3(-10.0, 10.0, 10.0);  // D
                          // Definir los cuatro vértices de la cara posterior (back) 
                          // del cubo, de color violeta.			
                          GL.Color3(1.0, 0.0, 1.0); // violet color
                          GL.Vertex3(-10.0, -10.0, -10.0); // E
                          GL.Vertex3(10.0, -10.0, -10.0);  // F
                          GL.Vertex3(10.0, 10.0, -10.0);   // G
                          GL.Vertex3(-10.0, 10.0, -10.0);  // H
                          // Definir los cuatro vértices de la cara superior (top) 
                          // del cubo, de color cian.			
                          GL.Color3(0.0, 1.0, 1.0); // cyan color
                          GL.Vertex3(10.0, 10.0, 10.0);   // I
                          GL.Vertex3(10.0, 10.0, -10.0);  // J
                          GL.Vertex3(-10.0, 10.0, -10.0); // K
                          GL.Vertex3(-10.0, 10.0, 10.0);  // L
                          // Definir los cuatro vértices de la cara inferior (bottom) 
                          // del cubo, de color rojo.			
                          GL.Color3(1.0, 0.0, 0.0); // red color
                          GL.Vertex3(10.0, -10.0, 10.0);   // M
                          GL.Vertex3(10.0, -10.0, -10.0);  // N
                          GL.Vertex3(-10.0, -10.0, -10.0); // O
                          GL.Vertex3(-10.0, -10.0, 10.0);  // P
                          // Definir los cuatro vértices de la cara lateral derecha (right) 
                          // del cubo, de color verde.
                          GL.Color3(0.0, 1.0, 0.0); // green color
                          GL.Vertex3(10.0, -10.0, 10.0);  // Q
                          GL.Vertex3(10.0, -10.0, -10.0); // R
                          GL.Vertex3(10.0, 10.0, -10.0);  // S
                          GL.Vertex3(10.0, 10.0, 10.0);   // T
                          // Definir los cuatro vértices de la cara lateral izquierda (left) 
                          // del cubo, de color azul.
                          GL.Color3(0.0, 0.0, 1.0); // blue color
                          GL.Vertex3(-10.0, -10.0, 10.0);  // U
                          GL.Vertex3(-10.0, -10.0, -10.0); // V
                          GL.Vertex3(-10.0, 10.0, -10.0);  // W
                          GL.Vertex3(-10.0, 10.0, 10.0);   // X
                          // Finalizar el modo gráfico.
                          GL.End();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Incrementar el valor del ángulo de rotación en un grado.
                          theta += 1.0;
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          if (theta > 360)
                          {
                            // Asignar al ángulo de rotación lo que tiene menos 360 grados.
                            theta -= 360;
                          }
                        }
                    
                        // Función que inicializa la carga de la aplicación gráfica.
                        void Loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                        }
                      }
                    }                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.3.2, que es la clase que representa a la interfaz gráfica de usuario del cubo de 6 colores rotando.',
              tablaN: 'Tabla 5.3.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using OpenTK;
                    
                    namespace ConsoleAppCubeOpenTK
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño
                                // se de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un cubo rotando.
                                Game ObjGame = new Game(window);
                            }
                        }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.3.9, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m23.png',
              fotoN: 'Figura 5.3.9. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1w6y-jcWIWUma-cXZbT5Z1oCMRqn79PZq&export=download',
        label: 'Pracnique 5.4',
        tituloN: 'Pracnique 5.4: ',
        titulo: 'Dos Cubos de Diferente Tamaño Rotando',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar dos cubos de diferente tamaño que estén rotando.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados los veinte y cuatro vértices de un primer cubo cuya escala es (0.5,0.5,0.5). Dados los veinte y cuatro vértices de un segundo cubo cuya escala es (1.5,0.5,1.3). Graficar el primer cubo trasladado a las coordenadas (-20.0,0.0,-50.0) y graficar el segundo cubo trasladado a las coordenadas (15.0,0.0,-50.0). Cada cubo está organizado entre 4 vértices por cara, donde cada cara tiene un color diferente como se indica a continuación: a) la cara frontal de color amarillo; b) la cara posterior de color violeta; c) la cara superior de color cian; d) la cara inferior de color rojo; e) la cara lateral derecha de color verde; f) la cara lateral izquierda de color azul. Dibujar el primer cubo en un fondo negro y rotando sobre el eje x y el eje xz. Dibujar el segundo cubo en un fondo negro y rotando sobre el eje xy y el eje yz. (Ver Figura 5.4.1).',
          fotoPath: './assets/images/Capitulos/III/media/m24.png',
          fotoN: 'Figura 5.4.1. ',
          fotoDescrip: 'Dos Cubos rotando de diferente tamaño.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Los dos cubos (objetos 3D) se definen en sus espacios locales (model spaces). Estos objetos 3D necesitan ser transformados al espacio del mundo común, conocido como modelo de transformación.',
            },
            {
              parrafo: 'Para realizar el modelo de transformación, se necesita operar en la llamada matriz de vista de modelo (OpenGL tiene algunas matrices de transformación), configurando la matriz-modo actual a una matriz de vista-modelo:',
            },
            {
              parrafo: '$GL.MatrixMode(MatrixMode.Projection);$',
            },
            {
              parrafo: 'Luego se realizan las traslaciones del primer cubo y del segundo cubo, respectivamente, para posicionarlos en el espacio del mundo (world space). (Ver Figura 5.4.2). ',
            },
            {
              parrafo: 'Para el primer cubo se resetea la matriz de vista-modelo y luego se mueve este cubo a la derecha y dentro de la pantalla a las coordenadas $(-20.0,0.0,-50.0)$:',
            },
            {
              parrafo: '$GL.LoadIdentity(); $// Resetear la matriz de vista-modelo',
            },
            {
              parrafo: '$GL.Translate(-20.0, 0.0, -50.0);$ // Mover a la derecha y dentro de la pantalla',
            },
            {
              parrafo: 'Para el segundo cubo se resetea la matriz de vista-modelo y luego se mueve este cubo a la izquierda y dentro de la pantalla a las coordenadas $(15.0,0.0,-50.0)$:',
            },
            {
              parrafo: '$GL.LoadIdentity(); $// Resetear la matriz de vista-modelo',
            },
            {
              parrafo: '$GL.Translate(15.0, 0.0, -50.0); $// Mover a la izquierda y dentro de la pantalla',
            },
            {
              parrafo: 'Por construcción se encierra a la figura geométrica dentro de un rectángulo, luego se ubican los vértices del rectángulo cuyos valores son: $O(0,0); P(50,0); Q(50,50); R(0,50)$. Finalmente, se ubican los vértices del triángulo isósceles cuyos valores son: $A(1,1); B(49,1); C(25,49)$. (Ver Figura 5.4.2).',
              fotoPath: './assets/images/Capitulos/III/media/m25.png',
              fotoN: 'Figura 5.4.2. ',
              fotoDescrip: 'Modelo de Transformación para los dos cubos.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.4.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.4.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de 500×500.',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Resetear la matriz de vista-modelo.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección y; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección x, donde la relación de aspecto corresponde al valor de x como el ancho y al valor de y como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo). ',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.4.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Resetear la matriz de vista-modelo.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Colocar la matriz actual en la pila (stack).',
                '4.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (-20,0,-50), moviendo a la derecha el primer cubo y dentro de la pantalla.',
                '5.	Aplicar una matriz de rotación al cubo en el eje x, con los siguientes valores en x,y,z: (1,0,0).',
                '6.	Aplicar una matriz de rotación al cubo en el eje xz, con los siguientes valores en x,y,z: (1,0,1).',
                '7.	Aplicar una matriz de escalamiento al cubo, con los siguientes valores en x,y,z: (0.5,0.5,0.5).',
                '8.	Llamada a función DrawCube(), para graficar un cubo escalado.',
                '9.	Sacar la matriz actual de la pila (stack).',
                '10.	Colocar la matriz actual en la pila (stack).',
                '11.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (15,0,-50), moviendo a la derecha el primer cubo y dentro de la pantalla.',
                '12.	Aplicar una matriz de rotación al cubo en el eje xy, con los siguientes valores en x,y,z: (1,1,0).',
                '13.	Aplicar una matriz de rotación al cubo en el eje yz, con los siguientes valores en x,y,z: (0,1,1).',
                '14.	Aplicar una matriz de escalamiento al cubo, con los siguientes valores en x,y,z: (1.5,0.5,1.3).',
                '15.	Llamada a función DrawCube(), para graficar un cubo escalado.',
                '16.	Sacar la matriz actual de la pila (stack).',
                '17.	Invertir los buffers disponibles para la graficación.',
                '18.	Incrementar el valor del ángulo de rotación theta en un grado.',
                '19.	Si el ángulo de rotación es mayor que 360, entonces:',
                '19.1.	Asignar al ángulo de rotación theta el valor que tiene menos el valor de 360 grados.'
              ]
            },
            {
              titulo: '5.4.4. Algoritmo de la Función DrawCube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.1.2.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '2.1.3.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '2.1.4.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '2.1.5.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '2.2.2.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '2.2.3.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '2.2.4.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '2.2.5.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '2.3.2.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '2.3.3.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '2.3.4.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '2.3.5.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '2.4.2.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '2.4.3.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '2.4.4.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '2.4.5.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.5.2.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '2.5.3.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '2.5.4.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '2.5.5.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '2.6.3.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '2.6.4.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '2.6.5.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '3.	Finalizar el modo gráfico.'
              ]
            },
            {
              titulo: '5.4.5. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.4.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.4.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using System;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace ConsoleAppTwoCubesOpenTK
                    {
                        class Game
                        {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += Loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += Resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += RenderFrame;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0 / 60.0);
                        }
                    
                        void Resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0, 0, window.Width, window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Resetear la matriz de vista-modelo.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f, window.Width /										   window.Height, 1.0f, 100.0f);
                          // Definir una matriz de carga de datos.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                    
                        // Función que renderiza los frames de la aplicación gráfica.
                        void RenderFrame(object o, EventArgs e)
                        {
                          // Resetear la matriz de vista-modelo.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit | 
                                 ClearBufferMask.DepthBufferBit);
                          // Colocar la matriz actual en la pila (stack).
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          // Mover a la derecha y dentro de la pantalla.
                          GL.Translate(-20.0, 0.0, -50.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta, 1.0, 0.0, 0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta, 1.0, 0.0, 1.0);
                          // Aplicar una matriz de escalamiento al cubo.
                          GL.Scale(0.5, 0.5, 0.5);
                          // Dibujar un cubo escalado.
                          DrawCube();
                          // Sacar la matriz actual de la pila (stack).
                          GL.PopMatrix();
                          // Colocar la matriz actual en la pila (stack).
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          // Mover a la izquierda y dentro de la pantalla.
                          GL.Translate(15.0, 0.0, -50.0);
                          // Aplicar una matriz de rotación al cubo en el eje xy.
                          GL.Rotate(theta, 1.0, 1.0, 0.0);
                          // Aplicar una matriz de rotación al cubo en el eje yz.
                          GL.Rotate(theta, 0.0, 1.0, 1.0);
                          // Aplicar una matriz de escalamiento al cubo.
                          GL.Scale(1.5, 0.5, 1.3);
                          // Dibujar un cubo escalado.
                          DrawCube();
                          // Sacar la matriz actual de la pila (stack).
                          GL.PopMatrix();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          theta += 1.0;
                          if (theta > 360)
                          {
                            // Asignar al ángulo de rotación lo que tiene menos 360 grados.
                            theta -= 360;
                          }
                        }
                    
                        // Función que inicializa la carga de la aplicación gráfica.
                        void Loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                        }
                    
                        // Función que dibuja un cubo escalado.
                        void DrawCube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          // Definir los cuatro vértices de la cara frontal (front) 
                          // del cubo, de color amarillo.
                          GL.Color3(1.0, 1.0, 0.0); // yellow color
                          GL.Vertex3(-10.0, -10.0, 10.0); // A
                          GL.Vertex3(10.0, -10.0, 10.0);  // B
                          GL.Vertex3(10.0, 10.0, 10.0);   // C
                          GL.Vertex3(-10.0, 10.0, 10.0);  // D
                          // Definir los cuatro vértices de la cara posterior (back) 
                          // del cubo, de color violeta.	
                          GL.Color3(1.0, 0.0, 1.0); // violet color
                          GL.Vertex3(-10.0, -10.0, -10.0); // E
                          GL.Vertex3(10.0, -10.0, -10.0);  // F
                          GL.Vertex3(10.0, 10.0, -10.0);   // G
                          GL.Vertex3(-10.0, 10.0, -10.0);  // H
                          // Definir los cuatro vértices de la cara superior (top) 
                          // del cubo, de color cian.
                          GL.Color3(0.0, 1.0, 1.0); // cyan color
                          GL.Vertex3(10.0, 10.0, 10.0);   // I
                          GL.Vertex3(10.0, 10.0, -10.0);  // J
                          GL.Vertex3(-10.0, 10.0, -10.0); // K
                          GL.Vertex3(-10.0, 10.0, 10.0);  // L
                          // Definir los cuatro vértices de la cara inferior (bottom) 
                          // del cubo, de color rojo.	
                          GL.Color3(1.0, 0.0, 0.0); // red color
                          GL.Vertex3(10.0, -10.0, 10.0);   // M
                          GL.Vertex3(10.0, -10.0, -10.0);  // N
                          GL.Vertex3(-10.0, -10.0, -10.0); // O
                          GL.Vertex3(-10.0, -10.0, 10.0);  // P
                          // Definir los cuatro vértices de la cara lateral derecha (right) 
                          // del cubo, de color verde.
                          GL.Color3(0.0, 1.0, 0.0); // green color
                          GL.Vertex3(10.0, -10.0, 10.0);  // Q
                          GL.Vertex3(10.0, -10.0, -10.0); // R
                          GL.Vertex3(10.0, 10.0, -10.0);  // S
                          GL.Vertex3(10.0, 10.0, 10.0);   // T
                          // Definir los cuatro vértices de la cara lateral izquierda (left) 
                          // del cubo, de color azul.
                          GL.Color3(0.0, 0.0, 1.0); // blue color
                          GL.Vertex3(-10.0, -10.0, 10.0);  // U
                          GL.Vertex3(-10.0, -10.0, -10.0); // V
                          GL.Vertex3(-10.0, 10.0, -10.0);  // W
                          GL.Vertex3(-10.0, 10.0, 10.0);   // X
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                      }
                    }                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.4.2, que es la clase que representa a la interfaz gráfica de usuario de los dos cubos rotando.',
              tablaN: 'Tabla 5.4.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using System;
                    using OpenTK;
                    
                    namespace ConsoleAppTwoCubesOpenTK
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño (Size)
                                // es de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un cubo rotando.
                                Game ObjGame = new Game(window);
                            }
                        }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.4.3, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m26.png',
              fotoN: 'Figura 5.4.3. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1SaZ-Gz7LPdZbwMwQ1DhCX2qFQ4inqjiz&export=download',
        label: 'Pracnique 5.5',
        tituloN: 'Pracnique 5.5: ',
        titulo: 'Un Cubo y una Pirámide Rotando',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cubo y una pirámide que estén rotando.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados los veinte y cuatro vértices de un cubo y dados los once vértices de una pirámide. Graficar el cubo trasladado a las coordenadas (1.5,0.0,-7.0) y graficar el segundo cubo trasladado a las coordenadas (-1.5,0.0,-6.0). El cubo está organizado entre 4 vértices por cara, donde cada cara tiene un color diferente como se indica a continuación: a) la cara frontal de color rojo; b) la cara posterior de color amarillo; c) la cara superior de color verde; d) la cara inferior de color naranja; e) la cara lateral derecha de color magenta; f) la cara lateral izquierda de color azul. La pirámide está organizada entre 3 vértices por cara y 4 vértices en la base, donde cada cara triangular tiene una mezcla de tres coloresque son rojo, verde y azul; y la cara de la base tiene una mezcla de cuatro colores que son rojo, azul, verde y rojo. Dibujar el primer cubo en un fondo negro y rotando sobre el eje x y el eje xz. Dibujar la pirámide en un fondo negro y rotando sobre el eje x y el eje xz. (Ver Figura 5.5.1).',
          fotoPath: './assets/images/Capitulos/III/media/m27.png',
          fotoN: 'Figura 5.5.1. ',
          fotoDescrip: 'Un Cubo y una pirámide rotando.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: '$\\bf{G.1. Modelo de Transformación}$',
            },
            {
              parrafo: 'El cubo y la pirámide (objetos 3D) se definen en sus espacios locales (model spaces). Estos objetos 3D necesitan ser transformados al espacio del mundo común, conocido como modelo de transformación.',
            },
            {
              parrafo: 'Para realizar el modelo de transformación, se necesita operar en la llamada matriz de vista de modelo (OpenGL tiene algunas matrices de transformación), configurando la matriz-modo actual a una matriz de vista-modelo:',
            },
            {
              parrafo: '$GL.MatrixMode(MatrixMode.Projection);$',
            },
            {
              parrafo: 'Luego se realizan las traslaciones del cubo y de la pirámide, respectivamente, para posicionarlos en el espacio del mundo (world space). (Ver Figura 5.5.2).',
            },
            {
              parrafo: 'Para el cubo se resetea la matriz de vista-modelo y luego se mueve este cubo a la derecha y dentro de la pantalla a las coordenadas $(1.5,0.0,-7.0)$:',
            },
            {
              parrafo: '$GL.LoadIdentity(); $// Resetear la matriz de vista-modelo',
            },
            {
              parrafo: '$GL.Translate(1.5, 0.0, -7.0);$ // Mover a la derecha y dentro de la pantalla',
            },
            {
              parrafo: 'Para la pirámide se resetea la matriz de vista-modelo y luego se mueve esta pirámide a la izquierda y dentro de la pantalla a las coordenadas $(-1.5,0.0,-6.0)$:',
            },
            {
              parrafo: '$GL.LoadIdentity();$ // Resetear la matriz de vista-modelo',
            },
            {
              parrafo: '$GL.Translate(-1.5, 0.0, -6.0);$ // Mover a la izquierda y dentro de la pantalla',
            },
            {
              fotoPath: './assets/images/Capitulos/III/media/m28.png',
              fotoN: 'Figura 5.5.2. ',
              fotoDescrip: 'Modelo de Transformación para el cubo y la pirámide.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.5.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.5.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de 500×500.',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Resetear la matriz de vista-modelo.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección y; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección x, donde la relación de aspecto corresponde al valor de x como el ancho y al valor de y como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo). ',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.5.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Resetear la matriz de vista-modelo.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (1.5,0,-7).',
                '4.	Aplicar una matriz de rotación al cubo en el eje x, con los siguientes valores en x,y,z: (1,0,0).',
                '5.	Aplicar una matriz de rotación al cubo en el eje xz, con los siguientes valores en x,y,z: (1,0,1).',
                '6.	Llamada a la función DrawCube para dibujar un cubo rotando.',
                '7.	Resetear la matriz de vista-modelo.',
                '8.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (-1.5,0,-6).',
                '9.	Aplicar una matriz de rotación al cubo en el eje x, con los siguientes valores en x,y,z: (1,0,0).',
                '10.	Aplicar una matriz de rotación al cubo en el eje xz, con los siguientes valores en x,y,z: (1,0,1).',
                '11.	Llamada a la función DrawPyramid para dibujar una pirámide rotando.',
                '12.	Invertir los buffers disponibles para la graficación.',
                '13.	Incrementar el valor del ángulo de rotación theta en un grado.',
                '14.	Si el ángulo de rotación es mayor que 360, entonces:',
                '14.1.	Asignar al ángulo de rotación theta el valor que tiene menos el valor de 360 grados.'
              ]
            },
            {
              titulo: '5.5.4. Algoritmo de la Función DrawCube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color rojo (red), para los 4 vértices.',
                '2.1.2.	Definir el vértice A del cubo, con los valores de (1,1,1).',
                '2.1.3.	Definir el vértice B del cubo, con los valores de (-1,1,1).',
                '2.1.4.	1Definir el vértice C del cubo, con los valores de (-1,1,1).',
                '2.1.5.	Definir el vértice D del cubo, con los valores de (1,-1,1).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.2.2.	Definir el vértice E del cubo, con los valores de (1,-1,-1).',
                '2.2.3.	Definir el vértice F del cubo, con los valores de (-1,-1,-1).',
                '2.2.4.	Definir el vértice G del cubo, con los valores de (-1,1,-1).',
                '2.2.5.	Definir el vértice H del cubo, con los valores de (1,1,-1).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.3.2.	Definir el vértice I del cubo, con los valores de (1,1,-1).',
                '2.3.3.	Definir el vértice J del cubo, con los valores de (-1,1,-1).',
                '2.3.4.	Definir el vértice K del cubo, con los valores de (-1,1,1).',
                '2.3.5.	Definir el vértice L del cubo, con los valores de (1,1,1).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color naranja (orange), para para los 4 vértices.',
                '2.4.2.	Definir el vértice M del cubo, con los valores de (1,-1,1).',
                '2.4.3.	Definir el vértice N del cubo, con los valores de (-1,-1,1).',
                '2.4.4.	Definir el vértice O del cubo, con los valores de (-1,-1,-1).',
                '2.4.5.	Definir el vértice P del cubo, con los valores de (1,-1,-1).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color magenta (magenta), para para los 4 vértices.',
                '2.5.2.	Definir el vértice Q del cubo, con los valores de (1,1,-1).',
                '2.5.3.	Definir el vértice R del cubo, con los valores de (1,1,1).',
                '2.5.4.	Definir el vértice S del cubo, con los valores de (1,-1,1).',
                '2.5.5.	Definir el vértice T del cubo, con los valores de (1,-1,-1).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir el vértice U del cubo, con los valores de (-1,1,1).',
                '2.6.3.	Definir el vértice V del cubo, con los valores de (-1,1,-1).',
                '2.6.4.	Definir el vértice W del cubo, con los valores de (-1,-1,-1).',
                '2.6.5.	Definir el vértice X del cubo, con los valores de (-1,-1,1).',
                '3.	Finalizar el modo gráfico.'
              ]
            },
            {
              titulo: '5.5.5. Algoritmo de la Función DrawPyramid()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar triángulos.',
                '2.	Graficar una pirámide.',
                '2.1.	Definir los tres vértices de la cara frontal (front) de la pirámide, con una mezcla de 3 colores.',
                '2.1.1.	Definir un color rojo (red), para el primer vértice.',
                '2.1.2.	Definir el vértice A de la pirámide, con los valores de (0,1,0).',
                '2.1.3.	Definir un color verde (green), para el segundo vértice.',
                '2.1.4.	Definir el vértice B de la pirámide, con los valores de (-1,-1,1).',
                '2.1.5.	Definir un color azul (blue), para el tercer vértice.',
                '2.1.6.	Definir el vértice C de la pirámide, con los valores de (1,-1,1).',
                '2.2.	Definir los tres vértices de la cara lateral derecha (right) de la pirámide, con una mezcla de 3 colores.',
                '2.2.1.	Definir un color rojo (red), para el primer vértice.',
                '2.2.2.	Definir el vértice A de la pirámide, con los valores de (0,1,0).',
                '2.2.3.	Definir un color verde (green), para el segundo vértice.',
                '2.2.4.	Definir el vértice B de la pirámide, con los valores de (1,-1,1).',
                '2.2.5.	Definir un color azul (blue), para el tercer vértice.',
                '2.2.6.	Definir el vértice D de la pirámide, con los valores de (1,-1,-1).',
                '2.3.	Definir los tres vértices de la cara posterior (back) de la pirámide, con una mezcla de 3 colores.',
                '2.3.1.	Definir un color rojo (red), para el primer vértice.',
                '2.3.2.	Definir el vértice A de la pirámide, con los valores de (0,1,0).',
                '2.3.3.	Definir un color verde (green), para el segundo vértice.',
                '2.3.4.	Definir el vértice E de la pirámide, con los valores de (1,-1,-1).',
                '2.3.5.	Definir un color azul (blue), para el tercer vértice.',
                '2.3.6.	Definir el vértice F de la pirámide, con los valores de (-1,-1,-1).',
                '2.4.	Definir los tres vértices de la cara lateral izquierda (left) de la pirámide, con una mezcla de 3 colores.',
                '2.4.1.	Definir un color rojo (red), para el primer vértice.',
                '2.4.2.	Definir el vértice A de la pirámide, con los valores de (0,1,0).',
                '2.4.3.	Definir un color verde (green), para el segundo vértice.',
                '2.4.4.	Definir el vértice F de la pirámide, con los valores de (-1,-1,-1).',
                '2.4.5.	Definir un color azul (blue), para el tercer vértice.',
                '2.4.6.	Definir el vértice G de la pirámide, con los valores de (-1,-1,1).',
                '3.	Finalizar el modo gráfico.',
                '4.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '4.1.	Definir los cuatro vértices de la cara inferior (bottom) de la pirámide, con una mezcla de 4 colores.',
                '4.1.1.	Definir un color rojo (red), para el primer vértice.',
                '4.1.2.	Definir el vértice M del cubo, con los valores de (1,-1,1).',
                '4.1.3.	Definir un color azul (blue), para el segundo vértice.',
                '4.1.4.	Definir el vértice N del cubo, con los valores de (-1,-1,1).',
                '4.1.5.	Definir un color verde (green), para el tercer vértice.',
                '4.1.6.	Definir el vértice O del cubo, con los valores de (-1,-1,-1).',
                '4.1.7.	Definir un color rojo (red), para el cuarto vértice.',
                '4.1.8.	Definir el vértice P del cubo, con los valores de (1,-1,-1).',
                '5.	Finalizar el modo gráfico.'
              ]
            },
            {
              titulo: '5.5.6. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.5.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.5.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using System;
                    using OpenTK;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace ConsoleAppPyramidAndCubeOpenTK
                    {
                        class Game
                        {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += Loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += Resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += RenderFrame;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0 / 60.0);
                        }
                    
                        // Función que redimensiona una ventana.
                        void Resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0, 0, window.Width, window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Resetear la matriz de vista-modelo.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f, window.Width /									          window.Height, 1.0f, 100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                    
                        // Función que renderiza los frames de la aplicación gráfica.
                        void RenderFrame(object o, EventArgs e)
                        {
                          // Resetear la matriz de vista-modelo.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit |
                                        ClearBufferMask.DepthBufferBit);
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(1.5, 0.0, -7.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta, 1.0, 0.0, 0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta, 1.0, 0.0, 1.0);
                          // Dibujar un cubo rotando.
                          DrawCube();
                          // Resetear la matriz de vista-modelo.
                          GL.LoadIdentity();
                          // Aplicar una matriz de traslación a la pirámide.
                          GL.Translate(-1.5, 0.0f, -6.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta, 1.0, 0.0, 0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta, 1.0, 0.0, 1.0);
                          // Dibujar una pirámide rotando.
                          DrawPyramid();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Incrementar el valor del ángulo de rotación en un grado.
                          theta += 1.0;
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          if (theta > 360)
                          {
                            // Asignar al ángulo de rotación lo que tiene menos 360 grados.
                            theta -= 360;
                          }
                        }
                    
                        // Función que dibuja un cubo a la derecha de la pantalla.
                        void DrawCube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          // Obtener la cara superior (top face: y = 1.0f)
                          // Definir los vértices en el sentido contrario a las agujas del 
                          // reloj (counter-clockwise CCW) con la señalización normal (normal 
                          // pointing out).
                          GL.Color3(0.0, 1.0, 0.0);    // Green
                          GL.Vertex3(1.0, 1.0, -1.0);  // I
                          GL.Vertex3(-1.0, 1.0, -1.0); // J
                          GL.Vertex3(-1.0, 1.0, 1.0);  // K
                          GL.Vertex3(1.0, 1.0, 1.0);   // L
                          // Obtener la cara inferior (bottom face: y = -1.0f)
                          GL.Color3(1.0f, 0.5f, 0.0f);     // Orange
                          GL.Vertex3(1.0f, -1.0f, 1.0f);   // M
                          GL.Vertex3(-1.0f, -1.0f, 1.0f);  // N
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // O
                          GL.Vertex3(1.0f, -1.0f, -1.0f);  // P
                          // Obtener la cara frontal (front face: z = 1.0f)
                          GL.Color3(1.0f, 0.0f, 0.0f);    // Red
                          GL.Vertex3(1.0f, 1.0f, 1.0f);   // A 
                          GL.Vertex3(-1.0f, 1.0f, 1.0f);  // B
                          GL.Vertex3(-1.0f, -1.0f, 1.0f); // C
                          GL.Vertex3(1.0f, -1.0f, 1.0f);  // D
                          // Obtener la cara posterior (back face: z = -1.0f)
                          GL.Color3(1.0f, 1.0f, 0.0f);     // Yellow
                          GL.Vertex3(1.0f, -1.0f, -1.0f);  // E
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // F
                          GL.Vertex3(-1.0f, 1.0f, -1.0f);  // G
                          GL.Vertex3(1.0f, 1.0f, -1.0f);   // H
                          // Obtener la cara izquierda (left face: x = -1.0f)
                          GL.Color3(0.0f, 0.0f, 1.0f);     // Blue
                          GL.Vertex3(-1.0f, 1.0f, 1.0f);   // U
                          GL.Vertex3(-1.0f, 1.0f, -1.0f);  // V
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // W
                          GL.Vertex3(-1.0f, -1.0f, 1.0f);  // X
                          // Obtener la cara derecha (right face: x = 1.0f)
                          GL.Color3(1.0f, 0.0f, 1.0f);    // Magenta
                          GL.Vertex3(1.0f, 1.0f, -1.0f);  // Q
                          GL.Vertex3(1.0f, 1.0f, 1.0f);   // R
                          GL.Vertex3(1.0f, -1.0f, 1.0f);  // S
                          GL.Vertex3(1.0f, -1.0f, -1.0f); // T
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                    
                        // Función que dibuja una pirámide a la izquierda de la pantalla.
                        void DrawPyramid()
                        {
                          // Iniciar el modo gráfico para dibujar triángulos.
                          GL.Begin(BeginMode.Triangles);
                          // Obtener la cara frontal (front face).			
                          GL.Color3(1.0f, 0.0f, 0.0f);    // Red
                          GL.Vertex3(0.0f, 1.0f, 0.0f);   // A
                          GL.Color3(0.0f, 1.0f, 0.0f);    // Green
                          GL.Vertex3(-1.0f, -1.0f, 1.0f); // B
                          GL.Color3(0.0f, 0.0f, 1.0f);    // Blue
                          GL.Vertex3(1.0f, -1.0f, 1.0f);  // C
                          // Obtener la cara derecha (right face).			
                          GL.Color3(1.0f, 0.0f, 0.0f);    // Red
                          GL.Vertex3(0.0f, 1.0f, 0.0f);   // A
                          GL.Color3(0.0f, 0.0f, 1.0f);    // Blue
                          GL.Vertex3(1.0f, -1.0f, 1.0f);  // B
                          GL.Color3(0.0f, 1.0f, 0.0f);    // Green
                          GL.Vertex3(1.0f, -1.0f, -1.0f); // D
                          // Obtener la cara posterior (back face).			
                          GL.Color3(1.0f, 0.0f, 0.0f);     // Red
                          GL.Vertex3(0.0f, 1.0f, 0.0f);    // A
                          GL.Color3(0.0f, 1.0f, 0.0f);     // Green
                          GL.Vertex3(1.0f, -1.0f, -1.0f);  // E
                          GL.Color3(0.0f, 0.0f, 1.0f);     // Blue
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // F
                          // Obtener la cara izquierda (left face).			
                          GL.Color3(1.0f, 0.0f, 0.0f);     // Red
                          GL.Vertex3(0.0f, 1.0f, 0.0f);    // A
                          GL.Color3(0.0f, 0.0f, 1.0f);     // Blue
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // F
                          GL.Color3(0.0f, 1.0f, 0.0f);     // Green
                          GL.Vertex3(-1.0f, -1.0f, 1.0f);  // G
                          // Finalizar el modo gráfico.
                          GL.End();
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          // Obtener la cara inferior (bottom face: y = -1.0f)			
                          GL.Color3(1.0, 0.0, 0.0);        // Red
                          GL.Vertex3(1.0f, -1.0f, 1.0f);   // M
                          GL.Color3(0.0f, 0.0f, 1.0f);     // Blue
                          GL.Vertex3(-1.0f, -1.0f, 1.0f);  // N
                          GL.Color3(0.0f, 1.0f, 0.0f);     // Green
                          GL.Vertex3(-1.0f, -1.0f, -1.0f); // O
                          GL.Color3(1.0, 0.0, 0.0);        // Red
                          GL.Vertex3(1.0f, -1.0f, -1.0f);  // P
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                    
                        // Función que inicializa la carga de la aplicación gráfica.
                        void Loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                        }
                      }
                    }
                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.5.2, que es la clase que representa a la interfaz gráfica de usuario del cubo y la pirámide rotando.',
              tablaN: 'Tabla 5.5.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using System;
                    using OpenTK;
                    
                    namespace ConsoleAppPyramidAndCubeOpenTK
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño (size)
                                // es de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un cubo rotando.
                                Game ObjGame = new Game(window);
                            }
                        }
                    }
                 `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.5.3, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m29.png',
              fotoN: 'Figura 5.5.3. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1K2U8lzjbPmiPgGTjtqWu1LjlPzmUBcSt&export=download',
        label: 'Pracnique 5.6',
        tituloN: 'Pracnique 5.6: ',
        titulo: 'Cubo Manejado por Teclado',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cubo 3D con texturas de un tamaño específico, la rotación es mediante el uso del teclado (R-L).',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados veinte y cuatro vértices de un cubo, organizados entre 4 vértices por cara, dibujar la figura geométrica correspondiente, donde cada cara tiene la misma textura. Además, dibujar esta figura en un fondo negro y con la rotación sobre el eje y, que es el eje mediante el cual se controla la rotación del cubo con el uso de las teclas R y L del teclado. (Ver Figura 5.6.1).',
          fotoPath: './assets/images/Capitulos/III/media/m30.png',
          fotoN: 'Figura 5.6.1. ',
          fotoDescrip: 'Cubo con textura rotando mediante el uso del teclado.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Para el presente pracnique se debe construir un cubo 3D con textura cuya rotación se la debe manejar por teclado, por ende, se puede reutilizar la geometría ya desarrollada en el pracnique 5.3 que corresponde a un Cubo de 6 Colores con Doble Rotación. Por construcción se obtiene un cubo de 24 vértices y 6 caras, con una proyección isométrica, como se muestra en la Figura 5.6.2.',
              fotoPath: './assets/images/Capitulos/III/media/m16.png',
              fotoN: 'Figura 5.6.2. ',
              fotoDescrip: 'Cubo con textura de 24 vértices y 6 caras.'
            },
            {
              parrafo: 'La cara frontal (front) del cubo con textura en el diagrama es de color amarillo (yellow) con sus 4 vértices, como se muestra en la Figura 5.6.3:',
              fotoPath: './assets/images/Capitulos/III/media/m17.png',
              fotoN: 'Figura 5.6.3. ',
              fotoDescrip: 'Cara frontal (front) del cubo con textura.'
            },
            {
              parrafo: 'La cara posterior (back) del cubo con textura en el diagrama es de color violeta (violet) con sus 4 vértices, como se muestra en la Figura 5.6.4:',
              fotoPath: './assets/images/Capitulos/III/media/m18.png',
              fotoN: 'Figura 5.6.4. ',
              fotoDescrip: 'Cara posterior (back) del cubo con textura.'
            },
            {
              parrafo: 'La cara superior (top) del cubo con textura en el diagrama es de color cian (cyan) con sus 4 vértices, como se muestra en la Figura 5.6.5:',
              fotoPath: './assets/images/Capitulos/III/media/m19.png',
              fotoN: 'Figura 5.6.5. ',
              fotoDescrip: 'Cara superior (top) del cubo con textura.'
            },
            {
              parrafo: 'La cara inferior (bottom) del cubo con textura en el diagrama es de color rojo (red) con sus 4 vértices, como se muestra en la Figura 5.6.6:',
              fotoPath: './assets/images/Capitulos/III/media/m20.png',
              fotoN: 'Figura 5.6.6. ',
              fotoDescrip: 'Cara inferior (bottom) del cubo con textura.'
            },
            {
              parrafo: 'La cara lateral derecha (right) del cubo con textura en el diagrama es de color verde (green) con sus 4 vértices, como se muestra en la Figura 5.6.7:',
              fotoPath: './assets/images/Capitulos/III/media/m21.png',
              fotoN: 'Figura 5.6.7. ',
              fotoDescrip: 'Cara lateral derecha (right) del cubo con textura'
            },
            {
              parrafo: 'La cara lateral izquierda (left) del cubo con textura en el diagrama es de color azul (blue) con sus 4 vértices, como se muestra en la Figura 5.6.8:',
              fotoPath: './assets/images/Capitulos/III/media/m22.png',
              fotoN: 'Figura 5.6.8. ',
              fotoDescrip: 'Cara lateral izquierda (left) del cubo con textura.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.6.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Actualizar la ventana cargada, marco por marco.',
                '4.	Renderizar la ventana cargada, marco por marco.',
                '5.	Controlador de eventos para el evento de pulsación de teclado',
                '6.	Controlador de eventos para el evento de pulsación de teclado -Down',
                '7.	Controlador de eventos para el evento de pulsación de teclado -Up',
                '8.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.6.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de .',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección ; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección , donde la relación de aspecto corresponde al valor de  como el ancho y al valor de  como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo).',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.6.3. Algoritmo de la Función UpdateFrame()',
              pasos: [
                '1.	Instanciar un Objeto Estado del teclado.',
                '2.	Si la tecla R esta presionada.',
                '2.1.	Incrementar el valor del ángulo de rotación en un grado.',
                '2.2.	Si el ángulo de rotación es mayor a 360 grados, entonces:',
                '2.2.1.	Asignar al ángulo de rotación lo que tiene menos 360 grados.'
              ]
            },
            {
              titulo: '5.6.4. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Guardar el estado de la matriz en la pila.',
                '4.	Aplicar una matriz de traslación al cubo.',
                '5.	Aplicar una matriz de rotación al cubo en el eje x.',
                '6.	Aplicar una matriz de rotación al cubo en el eje xz.',
                '7.	Factor de escalamiento.',
                '8.	Llamada a la función que dibuja un cubo draw_cube().',
                '9.	Retraer el estado de la matriz almacenada.',
                '10.	Invertir los buffers disponibles para la graficación.'
              ]
            },
            {
              titulo: '5.6.5. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.',
                '3.	Habilitar Iluminación.',
                '4.	Posicion de la Luz difusa.',
                '5.	Luz difusa en blanco.',
                '6.	Luz de ambiente en blanco.',
                '7.	Habilitar la textura mediante mapa de bits.',
                '8.	Llamar al Metodo cargar imagen loadImage().'
              ]
            },
            {
              titulo: '5.6.6. Algoritmo de la Función KeyDown()',
              pasos: [
                '1.	Si la tecla pulsada es igual a L',
                '1.1.	Si esta habilitada la ilumiación',
                '1.1.1.	Deshabilitar la iluminación',
                '1.2.	Caso contrario',
                '1.2.1.	Habilitar la iluminación'
              ]
            },
            {
              titulo: '5.6.7. Algoritmo de la Función draw_cube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.1.2.	Definir Coordenada de textura (0,0)',
                '2.1.3.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '2.1.4.	Definir Coordenada de textura (1,0)',
                '2.1.5.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '2.1.6.	Definir Coordenada de textura (1,1)',
                '2.1.7.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '2.1.8.	Definir Coordenada de textura (0,1)',
                '2.1.9.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '2.2.2.	Definir Coordenada de textura (0,0)',
                '2.2.3.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '2.2.4.	Definir Coordenada de textura (1,0)',
                '2.2.5.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '2.2.6.	Definir Coordenada de textura (1,1)',
                '2.2.7.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '2.2.8.	Definir Coordenada de textura (0,1)',
                '2.2.9.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '2.3.2.	Definir Coordenada de textura (0,0)',
                '2.3.3.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '2.3.4.	Definir Coordenada de textura (1,0)',
                '2.3.5.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '2.3.6.	Definir Coordenada de textura (1,1)',
                '2.3.7.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '2.3.8.	Definir Coordenada de textura (0,1)',
                '2.3.9.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '2.4.2.	Definir Coordenada de textura (0,0)',
                '2.4.3.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '2.4.4.	Definir Coordenada de textura (1,0)',
                '2.4.5.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '2.4.6.	Definir Coordenada de textura (1,1)',
                '2.4.7.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '2.4.8.	Definir Coordenada de textura (0,1)',
                '2.4.9.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.5.2.	Definir Coordenada de textura (0,0)',
                '2.5.3.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '2.5.4.	Definir Coordenada de textura (1,0)',
                '2.5.5.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '2.5.6.	Definir Coordenada de textura (1,1)',
                '2.5.7.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '2.5.8.	Definir Coordenada de textura (0,1)',
                '2.5.9.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir Coordenada de textura (0,0)',
                '2.6.3.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '2.6.4.	Definir Coordenada de textura (1,0)',
                '2.6.5.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '2.6.6.	Definir Coordenada de textura (1,1)',
                '2.6.7.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '2.6.8.	Definir Coordenada de textura (0,1)',
                '2.6.9.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '3.	Finalizar el modo gráfico. '
              ]
            },
            {
              titulo: '5.6.8. Algoritmo de la Función loadImage()',
              pasos: [
                '1.	Cargar los datos de la imagen un mapa de bits.',
                '2.	Objeto rectangulo para cargar la plantilla de la textura.',
                '3.	Extraer los datos de un mapa de bits.',
                '4.	Desbloquear el bit.',
                '5.	Retornar el mapa de bits.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.6.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.6.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using OpenTK;
                    using System;
                    using OpenTK.Input;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace OpenTk
                    {
                      public class Game
                      {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0; 
                        //Variable para la textura del cubo.
                        int texture;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += resize;
                          // Actualizar la ventana cargada, marco por marco.
                          window.UpdateFrame += updateF;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += renderF;
                          //Controlador de eventos para el evento de pulsacion de teclado
                          window.KeyPress += keyPress;
                          //Controlador de eventos para el evento de pulsacion de 
                                       //teclado -Down
                          window.KeyDown += keyDown;
                          //Controlador de eventos para el evento de pulsacion de 
                                       //teclado -Up
                          window.KeyUp += keyUp;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0/60.0);
                        }
                        // Función que redimensiona una ventana.
                        void resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0,0,window.Width,window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f,window.Width
                                                                            /window.Height,1.0f,100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                    
                        // Función que actualiza una ventana.
                        void updateF(object o, EventArgs e){
                          //Objeto del estado del teclado
                          KeyboardState k = Keyboard.GetState();
                          //Si la tecla R esta presionada
                          if(k.IsKeyDown(Key.R))
                          {
                            // Incrementar el valor del ángulo de rotación en un grado.
                            theta += 1.0;
                            // Si el ángulo de rotación es mayor que 360, entonces:
                            if (theta>360)
                              // Asignar al ángulo de rotación 
                                                    //lo que tiene menos 360 grados.
                              theta -= 360;
                          }
                        }
                        // Función que renderiza los frames de la aplicación gráfica.
                        void renderF(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit 
                                                | ClearBufferMask.DepthBufferBit);
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-50.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta,1.0,0.0,0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta,1.0,0.0,1.0);
                          // Factor de escalamiento
                          GL.Scale(0.7,0.7,0.7);
                          //Llamada a la función que dibuja un cubo.
                          draw_cube();
                          //Retrae el estado de la matriz almacenada.
                          GL.PopMatrix();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();		
                        }
                        // Función que inicializa la carga de la aplicación gráfica.
                        void loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f,0.0f,0.0f,0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                          
                          //Iluminacion 
                          GL.Enable(EnableCap.Lighting);
                          
                          float[] light_position = {20,0,0};
                          //Luz difusa en blanco
                          float[] light_diffuse = {1.0f,1.0f,1.0f};
                          //Luz de ambiente en blanco
                          float[] light_ambient = {0.5f,0.5f,0.5f};
                          
                          GL.Light(LightName.Light0,LightParameter.Position,light_position);
                          GL.Light(LightName.Light0,LightParameter.Diffuse,light_diffuse);
                          GL.Light(LightName.Light0,LightParameter.Ambient,light_ambient);
                          
                          GL.Enable(EnableCap.Light0);
                          
                          //texturing bitmap
                          GL.Enable(EnableCap.Texture2D);
                          GL.GenTextures(1,out texture);
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                          //Metodo cargar imagen
                          System.Drawing.Imaging.BitmapData textData = loadImage(@"E:"+ 
                                       "\Tesis_CuichanEdwin_SanipatinKevin"+
                                       "\Capitulos\CAPÍTULO 5"+
                                       "\OpenGL and C#"+
                                       "\OpenTk_3D_Cubo_Input"+
                                       "\OpenTk\crate.bmp");
                          GL.TexImage2D(TextureTarget.Texture2D,
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelInternalFormat.Rgb,
                                       textData.Width,textData.Height,
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelFormat.Bgr,
                                       PixelType.UnsignedByte,textData.Scan0);
                          GL.GenerateMipmap(GenerateMipmapTarget.Texture2D);
                          
                        }
                        
                        void keyPress(object o, KeyPressEventArgs e){
                          
                        }
                        //Funcion para Iluminar el Cubo con textura
                        void keyDown(object o,KeyboardKeyEventArgs e){
                          //Si la tecla pulsada es igual a L
                          if(e.Key == Key.L){
                            //Si esta habilitado la ilumiacion 
                            if(GL.IsEnabled(EnableCap.Lighting))
                              //Deshabilitar la iluminacion
                              GL.Disable(EnableCap.Lighting);
                            else
                              //Habilitar la iluminacion
                              GL.Enable(EnableCap.Lighting);
                          }
                        }
                        
                        void keyUp(object o,KeyboardKeyEventArgs e){
                          
                        }
                        // Función que dibuja un cubo
                        void draw_cube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          GL.Color3(1.0, 1.0, 1.0);
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                    
                          // Definir los cuatro vértices de la cara frontal (front) 
                          GL.Normal3(0.0,0.0,1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara posterior (back) 
                          GL.Normal3(0.0,0.0,-1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                    
                          // Definir los cuatro vértices de la cara superior (top)
                          GL.Normal3(0.0,1.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara inferior (bottom) 
                          GL.Normal3(0.0,-1.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral derecha (right) 
                          GL.Normal3(1.0,0.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral izquierda (left) 
                          GL.Normal3(-1.0,0.0,-1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                        //Metodo cargar imagane
                        System.Drawing.Imaging.BitmapData loadImage(string filePath)
                        {
                          //Cargar los datos de la imagen un mapa de bits
                          System.Drawing.Bitmap bmp = new System.Drawing.Bitmap(filePath);
                          //Objeto rectangulo para cargar la plantilla de la textura.
                          System.Drawing.Rectangle rect = 
                                       new System.Drawing.Rectangle(0,0,bmp.Width,bmp.Height);
                          //Extraer los datos de un mapa de bits.
                          System.Drawing.Imaging.BitmapData bmpdata = bmp.LockBits(
                                       rect,
                                       System.Drawing.Imaging.ImageLockMode.ReadOnly,
                                       System.Drawing.Imaging.PixelFormat.Format24bppRgb);
                          //Desbloquear el bit
                          bmp.UnlockBits(bmpdata);
                          //Retorna los datos del mapa de bits.
                          return bmpdata;
                        }
                      }
                    }                   
                    `
            },
            {
              problema: '$\\bf{Nota:}$ El path de ubicación del archivo de la textura se muestra en el siguiente código de la Tabla 5.6.2. Este path puede ser cambiado por el path local del usuario correspondiente, para que pueda cargar la textura correctamente.',
              tablaN: 'Tabla 5.6.2. ',
              tablaDescrip: 'Path de ubicación del archivo de la textura:',
              tablaDatos:
                `
                "E:"+
                "\Tesis_CuichanEdwin_SanipatinKevin"+
                "\Capitulos\CAPÍTULO 5"+
                "\OpenGL and C#"+
                "\OpenTk_3D_Cubo_Input"+
                "\OpenTk\crate.bmp"                
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.6.3, que es la clase que representa a la interfaz gráfica de usuario del cubo con textura cuya rotación en manejado por teclado.',
              tablaN: 'Tabla 5.6.3. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using OpenTK;
                    using System;
                    
                    namespace OpenTk
                    {
                      class Program
                      {
                        public static void Main(string[] args) 
                        {
                          // Crear una ventana con un rectángulo cuyo tamaño (size)
                          // es de (500, 500), es decir, Width: 500; Height: 500
                          GameWindow window = new GameWindow(500,500);
                          // Crear una instancia de la clase Game para dibujar
                          // un cubo rotando.
                          Game ObjGame = new Game(window);
                    
                        }
                      }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.6.9, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m31.png',
              fotoN: 'Figura 5.6.9. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1VSl_C2MCiR98xupD8KFo75BWXtaXBRAY&export=download',
        label: 'Pracnique 5.7',
        tituloN: 'Pracnique 5.7: ',
        titulo: 'Cubo con Luces',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cubo 3D con luces y rotación constante.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados veinte y cuatro vértices de un cubo, organizados entre 4 vértices por cara, dibujar la figura geométrica correspondiente, donde cada cara tiene un color rojo y al rotar se debe aplicar una luz en la cara frontal que permita identificar o diferenciar entre caras del cubo. Además, dibujar esta figura en un fondo negro y con la rotación sobre el eje   y, que es el eje sobre el cual el cubo rota de forma frecuente o constante. (Ver Figura 5.7.1).',
          fotoPath: './assets/images/Capitulos/III/media/m32.png',
          fotoN: 'Figura 5.7.1. ',
          fotoDescrip: 'Cubo rotando iluminado.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
          {
            parrafo: 'Para el presente pracnique se debe construir un cubo con diferentes dimensiones, por ende, se puede reutilizar la geometría ya desarrollada en el pracnique 5.3 que corresponde a un Cubo de 6 Colores con Doble Rotación. Por construcción se obtiene un cubo de 24 vértices y 6 caras, con una proyección isométrica, como se muestra en la Figura 5.7.2.',
            fotoPath: './assets/images/Capitulos/III/media/m16.png',
            fotoN: 'Figura 5.7.2. ',
            fotoDescrip: 'Cubo con textura de 24 vértices y 6 caras.'
          },
          {
            parrafo: 'La cara frontal (front) del cubo iluminado en el diagrama es de color amarillo (yellow) con sus 4 vértices, como se muestra en la Figura 5.7.3:',
            fotoPath: './assets/images/Capitulos/III/media/m17.png',
            fotoN: 'Figura 5.7.3. ',
            fotoDescrip: 'Cara frontal (front) del cubo iluminado.'
          },
          {
            parrafo: 'La cara posterior (back) del cubo iluminado en el diagrama es de color violeta (violet) con sus 4 vértices, como se muestra en la Figura 5.7.4:',
            fotoPath: './assets/images/Capitulos/III/media/m18.png',
            fotoN: 'Figura 5.7.4. ',
            fotoDescrip: 'Cara posterior (back) del cubo iluminado.'
          },
          {
            parrafo: 'La cara superior (top) del cubo iluminado en el diagrama es de color cian (cyan) con sus 4 vértices, como se muestra en la Figura 5.7.5:',
            fotoPath: './assets/images/Capitulos/III/media/m19.png',
            fotoN: 'Figura 5.7.5. ',
            fotoDescrip: 'Cara superior (top) del cubo iluminado.'
          },
          {
            parrafo: 'La cara inferior (bottom) del cubo iluminado en el diagrama es de color rojo (red) con sus 4 vértices, como se muestra en la Figura 5.7.6:',
            fotoPath: './assets/images/Capitulos/III/media/m20.png',
            fotoN: 'Figura 5.7.6. ',
            fotoDescrip: 'Cara inferior (bottom) del cubo iluminado.'
          },
          {
            parrafo: 'La cara lateral derecha (right) del cubo iluminado en el diagrama es de color verde (green) con sus 4 vértices, como se muestra en la Figura 5.7.7:',
            fotoPath: './assets/images/Capitulos/III/media/m21.png',
            fotoN: 'Figura 5.7.7. ',
            fotoDescrip: 'Cara lateral derecha (right) del cubo iluminado.'
          },
          {
            parrafo: 'La cara lateral izquierda (left) del cubo iluminado en el diagrama es de color azul (blue) con sus 4 vértices, como se muestra en la Figura 5.7.8:',
            fotoPath: './assets/images/Capitulos/III/media/m22.png',
            fotoN: 'Figura 5.7.8. ',
            fotoDescrip: 'Cara lateral izquierda (left) del cubo iluminado.'
          }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.7.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.7.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de .',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección ; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección , donde la relación de aspecto corresponde al valor de  como el ancho y al valor de  como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo).',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.7.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (0,0,-50).',
                '4.	Aplicar una matriz de rotación al cubo en el eje x, con los siguientes valores en x,y,z: (1,0,0).',
                '5.	Aplicar una matriz de rotación al cubo en el eje xz, con los siguientes valores en x,y,z: (1,0,1).',
                '6.	Factor de escalamiento.',
                '7.	Llamada a la función que dibuja un cubo draw_cube().',
                '8.	Retraer el estado de la matriz almacenada.',
                '9.	Invertir los buffers disponibles para la graficación.',
                '10.	Incrementar el valor del ángulo de rotación en un grado.',
                '11.	Si el ángulo de rotación es mayor que 360, entonces:',
                '11.1.	Asignar al ángulo de rotación lo que tiene menos 360 grados.'
              ]
            },
            {
              titulo: '5.7.4. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.',
                '3.	Habilitar la capa de Luz.',
                '4.	Posicion de la Luz difusa.',
                '5.	Luz difusa en blanco.',
                '6.	Luz de ambiente en blanco.'
              ]
            },
            {
              titulo: '5.7.5. Algoritmo de la Función draw_cube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.1.2.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '2.1.3.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '2.1.4.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '2.1.5.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '2.2.2.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '2.2.3.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '2.2.4.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '2.2.5.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '2.3.2.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '2.3.3.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '2.3.4.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '2.3.5.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '2.4.2.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '2.4.3.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '2.4.4.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '2.4.5.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.5.2.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '2.5.3.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '2.5.4.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '2.5.5.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '2.6.3.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '2.6.4.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '2.6.5.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '3.	Finalizar el modo gráfico.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.7.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.7.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using OpenTK;
                    using System;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace OpenTk
                    {
                      public class Game
                      {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += renderF;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0/60.0);
                        }
                        // Función que redimensiona una ventana.
                        void resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0,0,window.Width,window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f
                                       ,window.Width/window.Height
                                       ,1.0f,
                                       100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                        // Función que renderiza los frames de la aplicación gráfica.
                        void renderF(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit |     
                                                ClearBufferMask.DepthBufferBit);
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-50.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta,1.0,0.0,0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta,1.0,0.0,1.0);
                          // Factor de escalamiento
                          GL.Scale(0.7,0.7,0.7);
                          //Llamada a la función que dibuja un cubo.
                          draw_cube();
                          //Retrae el estado de la matriz almacenada.
                          GL.PopMatrix();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Incrementar el valor del ángulo de rotación en un grado.
                          theta += 1.0;
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          if (theta>360)
                            // Asignar al ángulo de rotación 
                                             //lo que tiene menos 360 grados.
                            theta -= 360;			
                        }
                        // Función que inicializa la carga de la aplicación gráfica.
                        void loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f,0.0f,0.0f,0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                    
                          // Habilitar las capacidades de Luz.
                          GL.Enable(EnableCap.Lighting);
                          
                          float[] light_position = {20,0,0};
                          //Luz difusa
                          float[] light_diffuse = {1.0f,0.0f,0.0f};
                          //Luz de ambiente
                          float[] light_ambient = {0.5f,0.0f,0.0f};
                          
                          GL.Light(LightName.Light0,LightParameter.Position,light_position);
                          GL.Light(LightName.Light0,LightParameter.Diffuse,light_diffuse);
                          GL.Light(LightName.Light0,LightParameter.Ambient,light_ambient);
                          
                          GL.Enable(EnableCap.Light0);
                        }
                        // Función que dibuja un cubo
                        void draw_cube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          GL.Color3(1.0, 1.0, 1.0);
                    
                          // Definir los cuatro vértices de la cara frontal (front) del cubo
                          GL.Normal3(0.0,0.0,1.0);
                                       GL.Vertex3(-10.0, -10.0, 10.0); //A
                                       GL.Vertex3(10.0, -10.0, 10.0);  //B
                                       GL.Vertex3(10.0, 10.0, 10.0);   //C
                                       GL.Vertex3(-10.0, 10.0, 10.0);  //D
                          // Definir los cuatro vértices de la cara frontal (back) del cubo
                          GL.Normal3(0.0,0.0,-1.0);
                                       GL.Vertex3(-10.0, -10.0, -10.0);//E
                                       GL.Vertex3(10.0, -10.0, -10.0); //F
                                       GL.Vertex3(10.0, 10.0, -10.0);  //G
                                       GL.Vertex3(-10.0, 10.0, -10.0); //H
                    
                          // Definir los cuatro vértices de la cara frontal (top) del cubo
                          GL.Normal3(0.0,1.0,0.0);        
                                       GL.Vertex3(10.0, 10.0, 10.0);   //I
                                       GL.Vertex3(10.0, 10.0, -10.0);  //J
                                       GL.Vertex3(-10.0, 10.0, -10.0); //K
                                       GL.Vertex3(-10.0, 10.0, 10.0);  //L
                    
                          // Definir los cuatro vértices de la cara frontal (bottom) del cubo
                          GL.Normal3(0.0,-1.0,0.0); 
                                       GL.Vertex3(10.0, -10.0, 10.0);  //M
                                       GL.Vertex3(10.0, -10.0, -10.0); //N
                                       GL.Vertex3(-10.0, -10.0, -10.0);//O
                                       GL.Vertex3(-10.0, -10.0, 10.0); //P
                    
                          // Definir los cuatro vértices de la cara frontal (right) del cubo
                          GL.Normal3(1.0,0.0,0.0);
                                       GL.Vertex3(10.0, -10.0, 10.0);  //Q
                                       GL.Vertex3(10.0, -10.0, -10.0); //R
                                       GL.Vertex3(10.0, 10.0, -10.0);  //S
                                       GL.Vertex3(10.0, 10.0, 10.0);   //T
                    
                          // Definir los cuatro vértices de la cara frontal (left) del cubo
                          GL.Normal3(-1.0,0.0,-1.0);
                                       GL.Vertex3(-10.0, -10.0, 10.0); //U
                                       GL.Vertex3(-10.0, -10.0, -10.0);//V
                                       GL.Vertex3(-10.0, 10.0, -10.0); //W
                                       GL.Vertex3(-10.0, 10.0, 10.0);  //X
                                       //Finalizar el modo gráfico.
                          GL.End();
                        }
                      }
                    }                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.7.2, que es la clase que representa a la interfaz gráfica de usuario del cubo de color rojo con iluminación cuya rotación es constante.',
              tablaN: 'Tabla 5.7.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using OpenTK;
                    using System;
                    
                    namespace OpenTk
                    {
                      class Program
                      {
                        public static void Main(string[] args) 
                        {
                          // Crear una ventana con un rectángulo cuyo tamaño
                          // es de (500, 500), es decir, Width: 500; Height: 500
                          GameWindow window = new GameWindow(500,500);
                          // Crear una instancia de la clase Game para dibujar
                          // un cubo rotando.
                          Game ObjGame = new Game(window);
                    
                        }
                      }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.7.9, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m33.png',
              fotoN: 'Figura 5.7.9. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1yuUFYZW1tLv9ucW0j8MUme2SPOKTwXra&export=download',
        label: 'Pracnique 5.8',
        tituloN: 'Pracnique 5.8: ',
        titulo: 'Cubo con Textura',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cubo 3D con textura y rotación constante.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados veinte y cuatro vértices de un cubo, organizados entre 4 vértices por cara, dibujar la figura geométrica correspondiente, donde cada cara tiene la misma textura. Además, dibujar esta figura en un fondo negro y con la rotación sobre el eje y, que es el eje sobre el cual rota el cubo de forma frecuente o constante. (Ver Figura 5.8.1).',
          fotoPath: './assets/images/Capitulos/III/media/m34.png',
          fotoN: 'Figura 5.8.1. ',
          fotoDescrip: 'Cubo rotando con textura.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Para el presente pracnique se debe construir un cubo con textura, por ende, se puede reutilizar la geometría ya desarrollada en el pracnique 5.3, que corresponde a un Cubo de 6 Colores con Doble Rotación. Por construcción se obtiene un cubo de 24 vértices y 6 caras, con una proyección isométrica, como se muestra en la Figura 5.8.2.',
              fotoPath: './assets/images/Capitulos/III/media/m16.png',
              fotoN: 'Figura 5.8.2. ',
              fotoDescrip: 'Cubo de 24 vértices y 6 caras.'
            },
            {
              parrafo: 'La cara frontal (front) del cubo con textura en el diagrama es de color amarillo (yellow) con sus 4 vértices, como se muestra en la Figura 5.8.3:',
              fotoPath: './assets/images/Capitulos/III/media/m17.png',
              fotoN: 'Figura 5.8.3. ',
              fotoDescrip: 'Cara frontal (front) del cubo con textura.'
            },
            {
              parrafo: 'La cara posterior (back) del cubo con textura en el diagrama es de color violeta (violet) con sus 4 vértices, como se muestra en la Figura 5.8.4:',
              fotoPath: './assets/images/Capitulos/III/media/m18.png',
              fotoN: 'Figura 5.8.4. ',
              fotoDescrip: 'Cara posterior (back) del cubo con textura.'
            },
            {
              parrafo: 'La cara superior (top) del cubo con textura en el diagrama es de color cian (cyan) con sus 4 vértices, como se muestra en la Figura 5.8.5:',
              fotoPath: './assets/images/Capitulos/III/media/m19.png',
              fotoN: 'Figura 5.8.5. ',
              fotoDescrip: 'Cara superior (top) del cubo con textura.'
            },
            {
              parrafo: 'La cara inferior (bottom) del cubo con textura en el diagrama es de color rojo (red) con sus 4 vértices, como se muestra en la Figura 5.8.6:',
              fotoPath: './assets/images/Capitulos/III/media/m20.png',
              fotoN: 'Figura 5.8.6. ',
              fotoDescrip: 'Cara inferior (bottom) del cubo con textura.'
            },
            {
              parrafo: 'La cara lateral derecha (right) del cubo con textura en el diagrama es de color verde (green) con sus 4 vértices, como se muestra en la Figura 5.8.7:',
              fotoPath: './assets/images/Capitulos/III/media/m21.png',
              fotoN: 'Figura 5.8.7. ',
              fotoDescrip: 'Cara lateral derecha (right) del cubo con textura'
            },
            {
              parrafo: 'La cara lateral izquierda (left) del cubo con textura en el diagrama es de color azul (blue) con sus 4 vértices, como se muestra en la Figura 5.8.8:',
              fotoPath: './assets/images/Capitulos/III/media/m22.png',
              fotoN: 'Figura 5.8.8. ',
              fotoDescrip: 'Cara lateral izquierda (left) del cubo con textura.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.8.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Renderizar la ventana cargada, marco por marco.',
                '4.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.8.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de .',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección ; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección , donde la relación de aspecto corresponde al valor de  como el ancho y al valor de  como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo).',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.8.3. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Guardar el estado de la matriz en la pila.',
                '4.	Aplicar una matriz de traslación al cubo.',
                '5.	Aplicar una matriz de rotación al cubo en el eje x.',
                '6.	Aplicar una matriz de rotación al cubo en el eje xz.',
                '7.	Factor de escalamiento.',
                '8.	Llamada a la función que dibuja un cubo draw_cube().',
                '9.	Retraer el estado de la matriz almacenada.',
                '10.	Invertir los buffers disponibles para la graficación.',
                '11.	Incrementar el valor del ángulo de rotación en un grado.',
                '12.	Si el ángulo de rotación es mayor a 360 grados, entonces:',
                '12.1.	Asignar al ángulo de rotación lo que tiene menos 360 grados.'
              ]
            },
            {
              titulo: '5.8.4. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.',
                '3.	Habilitar Iluminación.',
                '4.	Posicion de la Luz difusa.',
                '5.	Luz difusa en blanco.',
                '6.	Luz de ambiente en blanco.',
                '7.	Habilitar la textura mediante mapa de bits.',
                '8.	Llamar al Metodo cargar imagen loadImage().'
              ]
            },
            {
              titulo: '5.8.5. Algoritmo de la Función draw_cube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.1.2.	Definir Coordenada de textura (0,0)',
                '2.1.3.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '2.1.4.	Definir Coordenada de textura (1,0)',
                '2.1.5.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '2.1.6.	Definir Coordenada de textura (1,1)',
                '2.1.7.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '2.1.8.	Definir Coordenada de textura (0,1)',
                '2.1.9.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '2.2.2.	Definir Coordenada de textura (0,0)',
                '2.2.3.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '2.2.4.	Definir Coordenada de textura (1,0)',
                '2.2.5.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '2.2.6.	Definir Coordenada de textura (1,1)',
                '2.2.7.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '2.2.8.	Definir Coordenada de textura (0,1)',
                '2.2.9.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '2.3.2.	Definir Coordenada de textura (0,0)',
                '2.3.3.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '2.3.4.	Definir Coordenada de textura (1,0)',
                '2.3.5.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '2.3.6.	Definir Coordenada de textura (1,1)',
                '2.3.7.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '2.3.8.	Definir Coordenada de textura (0,1)',
                '2.3.9.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '2.4.2.	Definir Coordenada de textura (0,0)',
                '2.4.3.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '2.4.4.	Definir Coordenada de textura (1,0)',
                '2.4.5.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '2.4.6.	Definir Coordenada de textura (1,1)',
                '2.4.7.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '2.4.8.	Definir Coordenada de textura (0,1)',
                '2.4.9.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.5.2.	Definir Coordenada de textura (0,0)',
                '2.5.3.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '2.5.4.	Definir Coordenada de textura (1,0)',
                '2.5.5.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '2.5.6.	Definir Coordenada de textura (1,1)',
                '2.5.7.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '2.5.8.	Definir Coordenada de textura (0,1)',
                '2.5.9.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir Coordenada de textura (0,0)',
                '2.6.3.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '2.6.4.	Definir Coordenada de textura (1,0)',
                '2.6.5.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '2.6.6.	Definir Coordenada de textura (1,1)',
                '2.6.7.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '2.6.8.	Definir Coordenada de textura (0,1)',
                '2.6.9.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '3.	Finalizar el modo gráfico. '
              ]
            },
            {
              titulo: '5.8.6. Algoritmo de la Función loadImage()',
              pasos: [
                '1.	Cargar los datos de la imagen un mapa de bits.',
                '2.	Objeto rectangulo para cargar la plantilla de la textura.',
                '3.	Extraer los datos de un mapa de bits.',
                '4.	Desbloquear el bit.',
                '5.	Retornar el mapa de bits.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.8.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.8.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using OpenTK;
                    using System;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace OpenTk
                    {
                      public class Game
                      {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                        //Variable para la textura del cubo.
                        int texture;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                    
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += resize;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += renderF;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0/60.0);
                        }
                    
                        // Función que redimensiona una ventana.
                        void resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0,0,window.Width,window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f, window.Width/
                                                         window.Height,1.0f,100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                        // Función que renderiza los frames de la aplicación gráfica.
                        void renderF(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit |  
                                                 ClearBufferMask.DepthBufferBit);
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-50.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta,1.0,0.0,0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta,1.0,0.0,1.0);
                          // Factor de escalamiento
                          GL.Scale(0.7,0.7,0.7);
                          //Llamada a la función que dibuja un cubo.
                          draw_cube();
                          //Retrae el estado de la matriz almacenada.
                          GL.PopMatrix();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();
                          // Incrementar el valor del ángulo de rotación en un grado.
                          theta += 1.0;
                          // Si el ángulo de rotación es mayor que 360, entonces:
                          if (theta>360)
                            // Asignar al ángulo de rotación 
                            //lo que tiene menos 360 grados.
                            theta -= 360;			
                        }
                        // Función que inicializa la carga de la aplicación gráfica.
                        void loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f,0.0f,0.0f,0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                    
                          //Iluminacion
                          GL.Enable(EnableCap.Lighting);
                    
                          float[] light_position = {20,20,80};
                          //Luz difusa en blanco
                          float[] light_diffuse = {1.0f,1.0f,1.0f};
                          //Luz de ambiente en blanco
                          float[] light_ambient = {0.5f,0.5f,0.5f};
                          
                          GL.Light(LightName.Light0,LightParameter.Position,light_position);
                          GL.Light(LightName.Light0,LightParameter.Diffuse,light_diffuse);
                          GL.Light(LightName.Light0,LightParameter.Ambient,light_ambient);
                          
                          GL.Enable(EnableCap.Light0);
                    
                          //texturing bitmap
                          GL.Enable(EnableCap.Texture2D);
                          GL.GenTextures(1,out texture);
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                          //Metodo cargar imagen
                          System.Drawing.Imaging.BitmapData textData = loadImage(@"E: "+
                                       "\Tesis_CuichanEdwin_SanipatinKevin"+
                                       "\Capitulos\CAPÍTULO 5"+
                                       "\OpenGL and C#\OpenTk_3D_Cubo_Textures"+
                                       "\OpenTk\crate.bmp");		
                                    GL.TexImage2D(TextureTarget.Texture2D,
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelInternalFormat.Rgb,
                                       textData.Width,
                                       textData.Height,
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelFormat.Bgr,
                                       PixelType.UnsignedByte,
                                       textData.Scan0);
                          GL.GenerateMipmap(GenerateMipmapTarget.Texture2D);
                          
                        }
                        // Función que dibuja un cubo
                        void draw_cube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                          GL.Color3(1.0, 1.0, 1.0);
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                    
                          // Definir los cuatro vértices de la cara frontal (front) 
                          GL.Normal3(0.0, 0.0, 1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara posterior (back) 
                          GL.Normal3(0.0, 0.0, -1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(-10.0, 10.0, -10.0);
                    
                          // Definir los cuatro vértices de la cara superior (top)
                          GL.Normal3(0.0, 1.0, 0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara inferior (bottom) 
                          GL.Normal3(0.0, -1.0, 0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(-10.0, -10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral derecha (right) 
                          GL.Normal3(1.0, 0.0, 0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral izquierda (left) 
                          GL.Normal3(-1.0, 0.0, -1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0, 0);
                          GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1, 0);
                          GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1, 1);
                          GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0, 1);
                          GL.Vertex3(-10.0, 10.0, 10.0);
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                        //Metodo cargar imagane
                        System.Drawing.Imaging.BitmapData loadImage(string filePath)
                        {
                          //Cargar los datos de la imagen un mapa de bits
                          System.Drawing.Bitmap bmp = new System.Drawing.Bitmap(filePath);
                          //Objeto rectangulo para cargar la plantilla de la textura.
                          System.Drawing.Rectangle rect = new System.Drawing.Rectangle(0,
                                       0,bmp.Width,bmp.Height);
                          //Extraer los datos de un mapa de bits.
                          System.Drawing.Imaging.BitmapData bmpdata = bmp.LockBits(rect,
                                       System.Drawing.Imaging.ImageLockMode.ReadOnly,
                                       System.Drawing.Imaging.PixelFormat.Format24bppRgb);
                          //Desbloquear el bit
                          bmp.UnlockBits(bmpdata);
                          //Retorna los datos del mapa de bits.
                          return bmpdata;
                        }
                      }
                    }                    
                    `
            },
            {
              problema: '$\\bf{Nota:}$ El path de ubicación del archivo de la textura se muestra en el siguiente código de la Tabla 5.8.2. Este path puede ser cambiado por el path local del usuario correspondiente, para que pueda cargar la textura correctamente.',
              tablaN: 'Tabla 5.8.2. ',
              tablaDescrip: 'Path de ubicación del archivo de la textura:',
              tablaDatos:
                `
                "E: "+
                "\Tesis_CuichanEdwin_SanipatinKevin"+
                "\Capitulos\CAPÍTULO 5"+
                "\OpenGL and C#\OpenTk_3D_Cubo_Textures"+
                "\OpenTk\crate.bmp"                
                `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.8.3, que es la clase que representa a la interfaz gráfica de usuario del cubo con textura cuya rotación es constante.',
              tablaN: 'Tabla 5.8.3. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using OpenTK;
                    using System;
                    
                    namespace OpenTk
                    {
                      class Program
                      {
                        public static void Main(string[] args) 
                        {
                          // Crear una ventana con un rectángulo cuyo tamaño
                          // es de (500, 500), es decir, Width: 500; Height: 500
                          GameWindow window = new GameWindow(500,500);
                          // Crear una instancia de la clase Game para dibujar
                          // un cubo rotando.
                          Game ObjGame = new Game(window);
                    
                        }
                      }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.8.9, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m35.png',
              fotoN: 'Figura 5.8.9. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1YuO1zJ6a55xbXmUyVeg7JHirKEyjOiUO&export=download',
        label: 'Pracnique 5.9',
        tituloN: 'Pracnique 5.9: ',
        titulo: 'Cubo con Textura y Cuadrado Transparente',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar: un cubo 3D con textura donde la rotación es mediante el uso del teclado (R), y un cuadrado de color azul donde su opacidad y transparencia es regulada por teclado utilizando las teclas (I - K).',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dados veinte y cuatro vértices para el cubo 3D y cuatro vértices para el cuadrado, organizados entre 4 vértices por cara, dibujar las dos figuras geométricas correspondientes, con respecto al primer cubo 3D cada cara tiene la misma textura, el segundo al se un cuadrado su única cara debe ser de color azul. Además, dibujar estas figuras en un fondo negro, la rotación del cubo 3D debe ser sobre el eje x, mediante el uso de la tecla R y con respecto al cuadrado se puede controlar su transparencia u opacidad mediante el uso de las teclas I y K. (Ver Figura 5.9.1).',
          fotoPath: './assets/images/Capitulos/III/media/m36.png',
          fotoN: 'Figura 5.9.1. ',
          fotoDescrip: 'Cubo con Textura y Cuadrado Transparente.',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Para el presente pracnique se debe construir un cubo 3D con textura y un cuadrado de color celeste, por ende, para el cubo se puede reutilizar la geometría ya desarrollada en el pracnique 5.3 que corresponde a un Cubo de 6 Colores con Doble Rotación. Por construcción se obtiene un cubo de 24 vértices y 6 caras, y un cuadrado con 4 vértices, donde estas dos figuras mantienen una proyección isométrica, como se muestra en la Figura 5.9.2.',
              fotoPath: './assets/images/Capitulos/III/media/m37.png',
              fotoN: 'Figura 5.9.2. ',
              fotoDescrip: 'Cubo de 24 vértices y 6 caras, con un Cuadrado de 4 vértices.'
            },
            {
              parrafo: 'La cara frontal (front) del cubo con textura en el diagrama es de color amarillo (yellow) con sus 4 vértices, como se muestra en la Figura 5.9.3:',
              fotoPath: './assets/images/Capitulos/III/media/m17.png',
              fotoN: 'Figura 5.9.3. ',
              fotoDescrip: 'Cara frontal (front) del cubo con textura.'
            },
            {
              parrafo: 'La cara posterior (back) del cubo con textura en el diagrama es de color violeta (violet) con sus 4 vértices, como se muestra en la Figura 5.9.4:',
              fotoPath: './assets/images/Capitulos/III/media/m18.png',
              fotoN: 'Figura 5.9.4. ',
              fotoDescrip: 'Cara posterior (back) del cubo con textura.'
            },
            {
              parrafo: 'La cara superior (top) del cubo con textura en el diagrama es de color cian (cyan) con sus 4 vértices, como se muestra en la Figura 5.9.5:',
              fotoPath: './assets/images/Capitulos/III/media/m19.png',
              fotoN: 'Figura 5.9.5. ',
              fotoDescrip: 'Cara superior (top) del cubo con textura.'
            },
            {
              parrafo: 'La cara inferior (bottom) del cubo con textura en el diagrama es de color rojo (red) con sus 4 vértices, como se muestra en la Figura 5.9.6:',
              fotoPath: './assets/images/Capitulos/III/media/m20.png',
              fotoN: 'Figura 5.9.6. ',
              fotoDescrip: 'Cara inferior (bottom) del cubo con textura.'
            },
            {
              parrafo: 'La cara lateral derecha (right) del cubo con textura en el diagrama es de color verde (green) con sus 4 vértices, como se muestra en la Figura 5.9.7:',
              fotoPath: './assets/images/Capitulos/III/media/m21.png',
              fotoN: 'Figura 5.9.7. ',
              fotoDescrip: 'Cara lateral derecha (right) del cubo con textura'
            },
            {
              parrafo: 'La cara lateral izquierda (left) del cubo con textura en el diagrama es de color azul (blue) con sus 4 vértices, como se muestra en la Figura 5.9.8:',
              fotoPath: './assets/images/Capitulos/III/media/m22.png',
              fotoN: 'Figura 5.9.8. ',
              fotoDescrip: 'Cara lateral izquierda (left) del cubo con textura.'
            },
            {
              parrafo: 'El cuadrado es de color celeste con sus 4 vértices, como se muestra en la Figura 5.9.9:',
              fotoPath: './assets/images/Capitulos/III/media/m38.png',
              fotoN: 'Figura 5.9.9. ',
              fotoDescrip: 'Cara Frontal del cuadrado color celeste.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.9.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Actualizar la ventana cargada, marco por marco.',
                '4.	Renderizar la ventana cargada, marco por marco.',
                '5.	Controlador de eventos para el evento de pulsacion de teclado.',
                '6.	Controlador de eventos para el evento de pulsacion de teclado -Down.',
                '7.	Controlador de eventos para el evento de pulsacion de teclado -Up.',
                '8.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.9.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de .',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección ; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección , donde la relación de aspecto corresponde al valor de  como el ancho y al valor de  como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo).',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'
              ]
            },
            {
              titulo: '5.9.3. Algoritmo de la Función UpdateFrame()',
              pasos: [
                '1.	Instanciar un Objeto Estado del teclado.',
                '2.	Si la tecla R esta presionada',
                '2.1.	Incrementar el valor del ángulo de rotación en un grado.',
                '2.2.	Si el ángulo de rotación es mayor a 360 grados, entonces:',
                '2.2.1.	Asignar al ángulo de rotación lo que tiene menos 360 grados'
              ]
            },
            {
              titulo: '5.9.4. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Guardar el estado de la matriz en la pila.',
                '4.	Aplicar una matriz de traslación al cubo.',
                '5.	Aplicar una matriz de rotación al cubo en el eje x.',
                '6.	Aplicar una matriz de rotación al cubo en el eje xz.',
                '7.	Factor de escalamiento.',
                '8.	Llamada a la función que dibuja un cubo draw_cube().',
                '9.	Retraer el estado de la matriz almacenada.',
                '10.	Guardar el estado de la matriz en la pila.',
                '11.	Aplicar una matriz de traslación al cubo.',
                '12.	Llamada a la función que dibuja el cuadrado draw_quad().',
                '13.	Retraer el estado de la matriz almacenada.',
                '14.	Invertir los buffers disponibles para la graficación.'
              ]
            },
            {
              titulo: '5.9.5. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.',
                '3.	Habilitar Iluminación.',
                '4.	Posicion de la Luz difusa.',
                '5.	Luz difusa en blanco.',
                '6.	Luz de ambiente en blanco.',
                '7.	Habilitar la textura mediante mapa de bits.',
                '8.	Llamar al Metodo cargar imagen loadImage().'
              ]
            },
            {
              titulo: '5.9.6. Algoritmo de la Función keyDown()',
              pasos: [
                '1.	Si la tecla pulsada es igual a I',
                '1.1.	Incrementar la variable transparencia en 0.1',
                '1.2.	Si la variable transparencia es mayor a 1',
                '1.2.1.	Asignar a la variable el valor de 1, donde 1 es que no posee transparencia.',
                '2.	Si la tecla pulsada es igual a K',
                '2.1.	Decrementar de la variable transparencia en 0.1',
                '2.2.	Si la variable transparencia es menor a 0',
                '2.2.1.	Asignar a la variable el valor de 0, donde 0 es que es totalmente transparente el cuadrado.'
              ]
            },
            {
              titulo: '5.9.7. Algoritmo de la Función draw_quad()',
              pasos: [
                '1.	Deshabilitar caracteristicas textura-luz. ',
                '2.	Deshabilitar el proceso del test de profundidad.',
                '3.	Habilita capacidad de transparencia en el cuadrado.',
                '4.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '5.	Asignar color celeste con la opacidad media o 0.5',
                '6.	Coordenadas del cuadrado',
                '6.1.	Definir el vértice CA del cuadrado, con los valores de (0.0,0.0,0.0)',
                '6.2.	Definir el vértice CB del cuadrado, con los valores de (5.0,0.0,0.0)',
                '6.3.	Definir el vértice CC del cuadrado, con los valores de (5.0,5.0,0.0)',
                '6.4.	Definir el vértice CD del cuadrado, con los valores de (0.0,5.0,0.0)',
                '7.	Finalizar el modo gráfico.',
                '8.	Deshabilitar capacidad de transparencia en el cuadrado.',
                '9.	Habilitar caracteristicas luz. ',
                '10.	Habilitar el proceso del test de profundidad.',
                '11.	Deshabilitar caracteristicas textura.'
              ]
            },
            {
              titulo: '5.9.8. Algoritmo de la Función draw_cube()',
              pasos: [
                '1.	Iniciar el modo gráfico para dibujar cuadriláteros.',
                '2.	Graficar un Cubo.',
                '2.1.	Definir los cuatro vértices de la cara frontal (front) del cubo, de color amarillo.',
                '2.1.1.	Definir un color amarillo (yellow), para los 4 vértices.',
                '2.1.2.	Definir Coordenada de textura (0,0)',
                '2.1.3.	Definir el vértice A del cubo, con los valores de (-10,-10,10).',
                '2.1.4.	Definir Coordenada de textura (1,0)',
                '2.1.5.	Definir el vértice B del cubo, con los valores de (10,-10,10).',
                '2.1.6.	Definir Coordenada de textura (1,1)',
                '2.1.7.	Definir el vértice C del cubo, con los valores de (10,10,10).',
                '2.1.8.	Definir Coordenada de textura (0,1)',
                '2.1.9.	Definir el vértice D del cubo, con los valores de (-10,10,10).',
                '2.2.	Definir los cuatro vértices de la cara posterior (back) del cubo, de color violeta.',
                '2.2.1.	Definir un color violeta (violet), para los 4 vértices.',
                '2.2.2.	Definir Coordenada de textura (0,0)',
                '2.2.3.	Definir el vértice E del cubo, con los valores de (-10,-10,-10).',
                '2.2.4.	Definir Coordenada de textura (1,0)',
                '2.2.5.	Definir el vértice F del cubo, con los valores de (10,-10,-10).',
                '2.2.6.	Definir Coordenada de textura (1,1)',
                '2.2.7.	Definir el vértice G del cubo, con los valores de (10,10,-10).',
                '2.2.8.	Definir Coordenada de textura (0,1)',
                '2.2.9.	Definir el vértice H del cubo, con los valores de (-10,10,-10).',
                '2.3.	Definir los cuatro vértices de la cara superior (top) del cubo, de color cian.',
                '2.3.1.	Definir un color cian (cyan), para para los 4 vértices.',
                '2.3.2.	Definir Coordenada de textura (0,0)',
                '2.3.3.	Definir el vértice I del cubo, con los valores de (10,10,10).',
                '2.3.4.	Definir Coordenada de textura (1,0)',
                '2.3.5.	Definir el vértice J del cubo, con los valores de (10,10,-10).',
                '2.3.6.	Definir Coordenada de textura (1,1)',
                '2.3.7.	Definir el vértice K del cubo, con los valores de (-10,10,-10).',
                '2.3.8.	Definir Coordenada de textura (0,1)',
                '2.3.9.	Definir el vértice L del cubo, con los valores de (-10,10,10).',
                '2.4.	Definir los cuatro vértices de la cara inferior (bottom) del cubo, de color rojo.',
                '2.4.1.	Definir un color rojo (red), para para los 4 vértices.',
                '2.4.2.	Definir Coordenada de textura (0,0)',
                '2.4.3.	Definir el vértice M del cubo, con los valores de (10,-10,10).',
                '2.4.4.	Definir Coordenada de textura (1,0)',
                '2.4.5.	Definir el vértice N del cubo, con los valores de (10,-10,-10).',
                '2.4.6.	Definir Coordenada de textura (1,1)',
                '2.4.7.	Definir el vértice O del cubo, con los valores de (-10,-10,-10).',
                '2.4.8.	Definir Coordenada de textura (0,1)',
                '2.4.9.	Definir el vértice P del cubo, con los valores de (-10,-10,10).',
                '2.5.	Definir los cuatro vértices de la cara lateral derecha (right) del cubo, de color verde.',
                '2.5.1.	Definir un color verde (green), para para los 4 vértices.',
                '2.5.2.	Definir Coordenada de textura (0,0)',
                '2.5.3.	Definir el vértice Q del cubo, con los valores de (10,-10,10).',
                '2.5.4.	Definir Coordenada de textura (1,0)',
                '2.5.5.	Definir el vértice R del cubo, con los valores de (10,-10,-10).',
                '2.5.6.	Definir Coordenada de textura (1,1)',
                '2.5.7.	Definir el vértice S del cubo, con los valores de (10,10,-10).',
                '2.5.8.	Definir Coordenada de textura (0,1)',
                '2.5.9.	Definir el vértice T del cubo, con los valores de (10,10,10).',
                '2.6.	Definir los cuatro vértices de la cara lateral izquierda (left) del cubo, de color azul.',
                '2.6.1.	Definir un color azul (blue), para para los 4 vértices.',
                '2.6.2.	Definir Coordenada de textura (0,0)',
                '2.6.3.	Definir el vértice U del cubo, con los valores de (-10,-10,10).',
                '2.6.4.	Definir Coordenada de textura (1,0)',
                '2.6.5.	Definir el vértice V del cubo, con los valores de (-10,-10,-10).',
                '2.6.6.	Definir Coordenada de textura (1,1)',
                '2.6.7.	Definir el vértice W del cubo, con los valores de (-10,10,-10).',
                '2.6.8.	Definir Coordenada de textura (0,1)',
                '2.6.9.	Definir el vértice X del cubo, con los valores de (-10,10,10).',
                '3.	Finalizar el modo gráfico. '
              ]
            },
            {
              titulo: '5.9.9. Algoritmo de la Función loadImage()',
              pasos: [
                '1.	Cargar los datos de la imagen un mapa de bits.',
                '2.	Objeto rectangulo para cargar la plantilla de la textura.',
                '3.	Extraer los datos de un mapa de bits.',
                '4.	Desbloquear el bit.',
                '5.	Retornar el mapa de bits.'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.9.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.9.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using OpenTK;
                    using System;
                    using OpenTK.Input;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace OpenTk
                    {
                      public class Game
                      {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cubo.
                        double theta = 0.0;
                        //Variable para la textura del cubo.
                        int texture;
                        //Variable de opacidad o transparencia
                        double alpha_val= 0.5;
                    
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += resize;
                          // Actualizar la ventana cargada, marco por marco.
                          window.UpdateFrame += updateF;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += renderF;
                          //Controlador de eventos para el evento de pulsacion de teclado
                          window.KeyPress += keyPress;
                          //Controlador de eventos para el evento de pulsacion de 
                          //teclado -Down
                          window.KeyDown += keyDown;
                          //Controlador de eventos para el evento de pulsacion de 
                          //teclado -Up
                          window.KeyUp += keyUp;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0/60.0);
                        }
                        // Función que redimensiona una ventana.
                        void resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0,0,window.Width,window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f,window.Width
                                                                            /window.Height,1.0f,100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                        // Función que actualiza una ventana.
                        void updateF(object o, EventArgs e){
                          //Objeto del estado del teclado
                          KeyboardState k = Keyboard.GetState();
                          //Si la tecla R esta presionada
                          if (k.IsKeyDown(Key.R))
                          {
                            // Incrementar el valor del ángulo de rotación en un grado.
                            theta += 1.0;
                            // Si el ángulo de rotación es mayor que 360, entonces:
                            if (theta>360)
                              // Asignar al ángulo de rotación 
                              //lo que tiene menos 360 grados.
                              theta -= 360;
                          }
                        }
                        // Función que renderiza los frames de la aplicación gráfica.
                        void renderF(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit 
                                                | ClearBufferMask.DepthBufferBit);
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-50.0);
                          // Aplicar una matriz de rotación al cubo en el eje x.
                          GL.Rotate(theta,1.0,0.0,0.0);
                          // Aplicar una matriz de rotación al cubo en el eje xz.
                          GL.Rotate(theta,1.0,0.0,1.0);
                          // Factor de escalamiento
                          GL.Scale(0.7,0.7,0.7);
                          //Llamada a la función que dibuja un cubo.
                          draw_cube();
                          //Retrae el estado de la matriz almacenada.
                          GL.PopMatrix();
                          GL.PushMatrix();
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-25.0);
                          //Llamada a la función que dibuja el cuadrado.
                          draw_quad();
                          //Retrae el estado de la matriz almacenada.
                          GL.PopMatrix();
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();		
                        }
                        // Función que inicializa la carga de la aplicación gráfica.
                        void loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f,0.0f,0.0f,0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                    
                          //Iluminacion
                          GL.Enable(EnableCap.Lighting);
                    
                          float[] light_position = {20,20,80};
                          //Luz difusa en blanco
                          float[] light_diffuse = {1.0f,1.0f,1.0f};
                          //Luz de ambiente en blanco
                          float[] light_ambient = {0.5f,0.5f,0.5f};
                    
                          GL.Light(LightName.Light0,LightParameter.Position,light_position);
                          GL.Light(LightName.Light0,LightParameter.Diffuse,light_diffuse);
                          GL.Light(LightName.Light0,LightParameter.Ambient,light_ambient);
                          
                          GL.Enable(EnableCap.Light0);
                    
                          //texturing bitmap
                          GL.Enable(EnableCap.Texture2D);
                          GL.GenTextures(1,out texture);
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                          //Metodo cargar imagen
                          System.Drawing.Imaging.BitmapData textData = loadImage(@"E: "+
                                       "\Tesis_CuichanEdwin_SanipatinKevin"+
                                       "\Capitulos\CAPÍTULO 5\OpenGL and C#"+
                                       "\Programas Cap3"+
                                       "\OpenTk_3D_Cubo_Transparency"+
                                       "\OpenTk\crate.bmp");
                          GL.TexImage2D(TextureTarget.Texture2D,
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelInternalFormat.Rgb,
                                       textData.Width,
                                       textData.Height, 
                                       0,
                                       OpenTK.Graphics.OpenGL.PixelFormat.Bgr,
                                       PixelType.UnsignedByte,textData.Scan0);
                          GL.GenerateMipmap(GenerateMipmapTarget.Texture2D);
                          //Blending - mezcla - fusion 
                          GL.BlendFunc(BlendingFactorSrc.SrcAlpha,
                                       BlendingFactorDest.OneMinusSrcAlpha);
                        }
                        
                        void keyPress(object o, KeyPressEventArgs e){
                          
                        }
                        //Funcion para opacar el Cuadrado, regula la transparencia mediante           
                                //teclado
                        void keyDown(object o,KeyboardKeyEventArgs e)
                        {
                          //Si la tecla pulsada es igual a I
                          if (e.Key== Key.I)
                          {
                            //Incremento de la variable transparencia en 0.1
                                             alpha_val+=0.1;
                            //Si la variable transparencia es mayor a 1
                            if (alpha_val>1.0)
                              //Asignar a la variable el valor de 1, donde 1 es que 
                                                    //no posee transparencia.
                                                    alpha_val=1.0;
                                       }
                          //Si la tecla pulsada es igual a K
                          else if (e.Key==Key.K)
                          {
                            //Decremento de la variable transparencia en 0.1
                            alpha_val -= 0.1;
                            //Si la variable transparencia es menor a 0
                            if (alpha_val<0.0)
                              //Asignar a la variable el valor de 0, donde 0 es que 
                                                   //es totalmente transparente el cuadrado.
                              alpha_val = 0.0;
                                       }
                        }
                        
                        void keyUp(object o,KeyboardKeyEventArgs e){
                          
                        }
                        // Función que dibuja un cuadrado
                        void draw_quad()
                        {
                          //Deshabilitar caracteristicas textura-luz. 
                                GL.Disable(EnableCap.Texture2D);
                                GL.Disable(EnableCap.Lighting);
                          // Deshabilitar el proceso del test de profundidad.
                          GL.Disable(EnableCap.DepthTest);
                          //Habilita capacidad de transparencia en el cuadrado.
                                GL.Enable(EnableCap.Blend);
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.Begin(BeginMode.Quads);
                                //Asignar color celeste con la opacidad media o 0.5
                                GL.Color4(0.0,0.5,1.0,alpha_val);
                                //Coordenadas del cuadrado
                                GL.Vertex3(0.0,0.0,0.0); //CA
                                GL.Vertex3(5.0,0.0,0.0); //CB
                                GL.Vertex3(5.0,5.0,0.0); //CC
                                GL.Vertex3(0.0,5.0,0.0); //CD
                                // Finalizar el modo gráfico.
                          GL.End();
                          //Deshabilita capacidad de transparencia en el cuadrado.
                          GL.Disable(EnableCap.Blend);
                          //Habilitar caracteristicas luz. 
                          GL.Enable(EnableCap.Lighting);
                          //Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                          //Deshabilitar caracteristicas textura. 
                          GL.Enable(EnableCap.Texture2D);
                                }
                        // Función que dibuja un cubo
                        void draw_cube()
                        {
                          // Iniciar el modo gráfico para dibujar cuadriláteros.
                          GL.BindTexture(TextureTarget.Texture2D,texture);
                          GL.Begin(BeginMode.Quads);
                          GL.Color3(1.0, 1.0, 1.0);
                    
                          // Definir los cuatro vértices de la cara frontal (front) 
                          GL.Normal3(0.0,0.0,1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara posterior (back) 
                          GL.Normal3(0.0,0.0,-1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                    
                          // Definir los cuatro vértices de la cara superior (top)
                          GL.Normal3(0.0,1.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara inferior (bottom) 
                          GL.Normal3(0.0,-1.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral derecha (right) 
                          GL.Normal3(1.0,0.0,0.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(10.0, 10.0, 10.0);
                    
                          // Definir los cuatro vértices de la cara lateral izquierda (left) 
                          GL.Normal3(-1.0,0.0,-1.0);
                          //Coordenada de textura (0,0) 
                          GL.TexCoord2(0,0);
                                       GL.Vertex3(-10.0, -10.0, 10.0);
                          //Coordenada de textura (1,0) 
                          GL.TexCoord2(1,0);
                                       GL.Vertex3(-10.0, -10.0, -10.0);
                          //Coordenada de textura (1,1) 
                          GL.TexCoord2(1,1);
                                       GL.Vertex3(-10.0, 10.0, -10.0);
                          //Coordenada de textura (0,1) 
                          GL.TexCoord2(0,1);
                                       GL.Vertex3(-10.0, 10.0, 10.0);
                          // Finalizar el modo gráfico.
                          GL.End();
                        }
                    
                        //Metodo cargar imagane
                        System.Drawing.Imaging.BitmapData loadImage(string filePath)
                        {
                          //Cargar los datos de la imagen un mapa de bits
                          System.Drawing.Bitmap bmp = new System.Drawing.Bitmap(filePath);
                          //Objeto rectangulo para cargar la plantilla de la textura.
                          System.Drawing.Rectangle rect =
                               new System.Drawing.Rectangle(0, 0, bmp.Width, 
                                                 bmp.Height);
                          //Extraer los datos de un mapa de bits.
                          System.Drawing.Imaging.BitmapData bmpdata = bmp.LockBits(
                               rect,
                               System.Drawing.Imaging.ImageLockMode.ReadOnly,
                               System.Drawing.Imaging.PixelFormat.Format24bppRgb);
                          //Desbloquear el bit
                          bmp.UnlockBits(bmpdata);
                          //Retorna los datos del mapa de bits.
                          return bmpdata;
                        }
                    
                      }
                    }                    
                    `
            },
            {
              problema: '$\\bf{Nota:}$ El path de ubicación del archivo de la textura se muestra en el siguiente código de la Tabla 5.9.2. Este path puede ser cambiado por el path local del usuario correspondiente, para que pueda cargar la textura correctamente.',
              tablaN: 'Tabla 5.9.2. ',
              tablaDescrip: 'Path de ubicación del archivo de la textura:',
              tablaDatos:
                `
                "E:"+
                "\Tesis_CuichanEdwin_SanipatinKevin"+
                "\Capitulos\CAPÍTULO 5"+
                "\OpenGL and C#\OpenTk_3D_Cubo_Transparency"+
                "\OpenTk\crate.bmp"                                
                `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.9.3, que es la clase que representa a la interfaz gráfica de usuario del cubo 3D y el cuadrado, el cuadrado de color azul con transparencia manejada por teclado y el cubo con textura cuya rotación es manejada igualmente por teclado.',
              tablaN: 'Tabla 5.9.3. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using OpenTK;
                    using System;
                    
                    namespace OpenTk
                    {
                      class Program
                      {
                        public static void Main(string[] args) 
                        {
                          // Crear una ventana con un rectángulo cuyo tamaño (size)
                          // es de (500, 500), es decir, Width: 500; Height: 500
                          GameWindow window = new GameWindow(500,500);
                          // Crear una instancia de la clase Game para dibujar
                          // un cubo rotando.
                          Game ObjGame = new Game(window);
                    
                        }
                      }
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.9.10, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m39.png',
              fotoN: 'Figura 5.9.10. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      },
      {
        link: 'https://drive.google.com/uc?id=1uosbKrDAW5MB1UdrV21qEAkSbvrmGPyP&export=download',
        label: 'Pracnique 5.10',
        tituloN: 'Pracnique 5.10: ',
        titulo: 'Cono Rotando',
        sinopsisDescrip: 'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un cono 3D color plomo de un tamaño específico con rotación controlada mediante el teclado.',
        sinopsis: [
          { titulo: 'Lenguaje:', descrip: 'C#' },
          { titulo: 'Librerías:', descrip: 'OpenTK y OpenGL' },
          { titulo: 'Compilador:', descrip: 'Visual Studio .NET' },
          { titulo: 'Habilidades:', descrip: 'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.' },
          { titulo: 'Nivel de experiencia:', descrip: 'Intermedio' }
        ],
        A: {
          subtitulo: 'A)	Descripción del Problema',
          problema: 'Dado la altura y radio de un cono, dibujar la figura geométrica correspondiente, donde el color de la figura debe ser plomo y su radio igual a 1.0 unidades. Además, dibujar esta figura en un fondo negro y rotando sobre un eje. (Ver Figura 5.10.1).',
          fotoPath: './assets/images/Capitulos/III/media/m40.png',
          fotoN: 'Figura 5.10.1. ',
          fotoDescrip: 'Cono rotando de color plomo',
        },
        B: {
          subtitulo: 'B)	Geometría de la Figura',
          pasosB: [
            {
              parrafo: 'Para construir un cono con una altura h y un radio r se debe calcular los vértices correspondientes, tanto para la base que es una circunferencia como para la parte superior del cono. A continuación, se muestra en la Figura 5.10.2 el gráfico del cono 3D.',
              fotoPath: './assets/images/Capitulos/III/media/m41.png',
              fotoN: 'Figura 5.10.2. ',
              fotoDescrip: 'Altura, centro y radio del Cono.'
            },
            {
              parrafo: 'Al graficar un cono en el plano 3D se deben crear varios triángulos con las mismas dimensiones y agruparlos, en la Figura 5.10.3 se muestran los triángulos agrupados en color amarillo (yellow). ',
              fotoPath: './assets/images/Capitulos/III/media/m42.png',
              fotoN: 'Figura 5.10.3. ',
              fotoDescrip: 'Partes del Cono en el plano 3D.'
            },
            {
              parrafo: 'Para un mejor entendimiento se puede hacer una analogía con las pirámides, entre mas vértices, aristas y caras tenga una pirámide mas se acercará a la forma de un cono. A continuación, en la Figura 5.10.4 se observa varias priamides con sus caras, aristas y vértices.',
              fotoPath: './assets/images/Capitulos/III/media/m43.png',
              fotoN: 'Figura 5.10.4. ',
              fotoDescrip: 'Caras, Aristas y Vertices de una Pirámide en el plano 3D. '
            },
            {
              parrafo: 'Teniendo en cuenta que, para graficar un cono, se debe basarse esta figura en una pirámide de $n$ caras, entre más caras tenga una pirámide más se asemejará a un cono. Por lo general para que la pirámide tienda a la forma de un cono, cada cara de una pirámide debe ser un triangulo isósceles. ',
            },
            {
              parrafo: 'Con estas aclaraciones, se puede crear un cono en 3D a partir de una pirámide. Para entender este proceso, en la Figura 5.10.5 se presentan los vértices iniciales para construir las caras de la pirámide, donde el número de los vértices iniciales son 3. $A(0,h,0); B(x_i,0,z_i ); C(x_i,0,z_i )$, los tres vértices forman un triangulo isósceles.',
              fotoPath: './assets/images/Capitulos/III/media/m42.png',
              fotoN: 'Figura 5.10.5. ',
              fotoDescrip: 'Vértices de una Pirámide en el plano 3D.'
            },
            {
              parrafo: 'Los vértices $A$, $B$ y $C$, permiten representar un triángulo isósceles. En la Figura 5.10.6 se presenta la geometría de esta figura.',
              fotoPath: './assets/images/Capitulos/III/media/m44.png',
              fotoN: 'Figura 5.10.6. ',
              fotoDescrip: 'Triángulo Isósceles.'
            },
            {
              parrafo: 'Para calcular los valores de los vértices $A$, $B$ y $C$, se utilizan las siguientes fórmulas matemáticas:',
            },
            {
              parrafo: 'Variable $h$ (Altura): puede tomar valores mayores a $0$, por ejemplo: $h=10$.',
            },
            {
              parrafo: 'Variable $r$ (radio): puede tomar valores mayores a $0$, por ejemplo: $r=1$.',
            },
            {
              parrafo: '$\\bf{Vértice}$ $\\bf{A}$:  $A(0,10,0)$',
            },
            {
              parrafo: 'Con los vértices $B$ y $C$ se debe utilizar la ecuación de la circunferencia. En la Figura 5.10.7 se presenta la ecuación en el plano $xy$:',
              fotoPath: './assets/images/Capitulos/III/media/m45.png',
              fotoN: 'Figura 5.10.7. ',
              fotoDescrip: 'Ecuación de la circunferencia en el plano xy'
            },
            {
              parrafo: 'Se debe tener en cuenta que el gráfico de la circunferencia para el cono 3D se encuentra en el $plano$ $xz$ (ver Figura 5.10.5). Por ende, se debe cambiar la variable $y$ por la $z$, esto solo para un mejor entendimiento.  ',
            },
            {
              parrafo: 'Las nuevas formulas, con $radio = 1$:',
            },
            {
              parrafo: '$x^2+z^2=r^2 $',
            },
            {
              parrafo: '$x^2+z^2=1$ $\\Rightarrow(1)$',
            },
            {
              parrafo: '$x=r \\cos⁡(θ)$',
            },
            {
              parrafo: '$x=\\cos⁡(θ)$  $\\Rightarrow(2)$',
            },
            {
              parrafo: '$z=r \\sin⁡(θ)$',
            },
            {
              parrafo: '$z= \\sin⁡(θ)$ $\\Rightarrow(3)$',
            },
            {
              parrafo: '$\\bf{Vértice}$ $\\bf{B}$:  $B(\\cos⁡(θ),10,\\sin⁡(θ))$',
            },
            {
              parrafo: '$\\bf{Vértice}$ $\\bf{C}$:  $C(\\cos⁡(θ),10,\\sin⁡(θ))$',
            },
            {
              parrafo: 'Donde $θ$ es el angulo;',
            },
            {
              parrafo: 'El punto $B(x_i,z_i)$ de la $Figura$ $5.10.6$ del $triangulo$ $isósceles$ es parte de la circunferencia, entonces se debe calcular cada punto con los $360$ grados que conforman la circunferencia.',
            },
            {
              parrafo: 'Se puede utilizar un $Factor$ de conversion de alcance global para convertir grados a radianes:',
            },
            {
              parrafo: '$c_factor=\\frac{π}{180}$',
            },
            {
              parrafo: '$\\bf{Por}$ $\\bf{ejemplo:}$ convertir $5$ grados a radianes:',
            },
            {
              parrafo: '$c_factor=\\frac{π}{180}$',
            },
            {
              parrafo: '$c_factor*5=5*\\frac{π}{180}$ $=$ $0.08726$ $radianes$',
            },
            {
              parrafo: 'En resumen, se calculó los vértices de una cara (triangulo isósceles) de una pirámide, como se muestra en la Figura 5.10.8:',
              fotoPath: './assets/images/Capitulos/III/media/m46.png',
              fotoN: 'Figura 5.10.8. ',
              fotoDescrip: 'Vértices de una cara de la pirámide eneagonal. '
            },
            {
              parrafo: 'Para graficar un cono se deben calcular los puntos que forman la figura utilizando los $360$ grados del círculo trigonométrico, comenzando desde $0$ grados. ',
            },
            {
              parrafo: '$\\bf{Obtener}$ $\\bf{los}$ $\\bf{Vectores}$ $\\bf{X}$ $\\bf{e}$ $\\bf{Y}$ $\\bf{de}$ $\\bf{Posición}$',
            },
            {
              parrafo: 'Para obtener los vectores $X$ e $Y$ que son los lados iguales del triangulo isósceles, se debe realizar una resta de vectores entre los vectores posición-origen de cada punto. Cada punto $A$, $B$ y $C$ tienen vectores posición con respecto a su origen (ver Figura 5.10.9).',
              fotoPath: './assets/images/Capitulos/III/media/m47.png',
              fotoN: 'Figura 5.10.9. ',
              fotoDescrip: 'Vectores X e Y.'
            },
            {
              parrafo: '$\\bf{Calcular}$ $\\bf{el}$ $\\bf{Vector}$ $\\bf{Normalizado}$ $\\bf{Aplicando}$ $\\bf{el}$ $\\bf{Producto}$ $\\bf{Cruz}$',
            },
            {
              parrafo: 'Sean $A$, $B$ y $N$ tres vectores de $R^3:$',
            },
            {
              parrafo: '$A=A_x i+A_y j+A_z k$ ',
            },
            {
              parrafo: '$B=B_x i+B_y j+B_z k$',
            },
            {
              parrafo: '$N=N_x i+N_y j+N_z k$',
            },
            {
              parrafo: 'Donde $N$ que es el produto vectorial de $A$ y $B$, definido así:',
            },
            {
              parrafo: '$N=A×B=(A_y B_z-A_z B_y )i+(A_z B_x-A_x B_z )j+(A_x B_y-A_y B_x )k$',
            },
            {
              parrafo: 'Esto es:',
            },
            {
              parrafo: '$N_x=A_y B_z-A_z B_y$ ',
            },
            {
              parrafo: '$N_y=A_z B_x-A_x B_z$',
            },
            {
              parrafo: '$N_z=A_x B_y-A_y B_x$',
            },
            {
              parrafo: 'Usando una notación basada en determinantes queda:',
            },
            {
              fotoPath: './assets/images/Capitulos/III/media/m48.png',
            },
            {
              parrafo: 'Que da origen a la llamada regla de la Mano Derecha, girando el primer vector hacia el segundo por el ángulo más pequeño. El resultado del producto cruz es un vector que es perpendicular a los otros dos vectores que se multiplican.',
            },
            {
              parrafo: 'En la Figura 5.10.11 se detalla el producto cruz entre los vectores $X$ e $Y$ (lados iguales del triángulo isósceles).',
              fotoPath: './assets/images/Capitulos/III/media/m49.png',
              fotoN: 'Figura 5.10.11. ',
              fotoDescrip: 'Vector N=A×B, resultado del Producto Cruz.'
            }
          ]
        },
        C: {
          subtitulo: 'C)	Algoritmos',
          algoritmosC: [
            {
              titulo: '5.10.1. Algoritmo de la Función Start()',
              pasos: [
                '1.	Cargar una ventana de Windows.',
                '2.	Redimensionar la ventana cargada.',
                '3.	Actualizar la ventana cargada, marco por marco.',
                '4.	Renderizar la ventana cargada, marco por marco.',
                '5.	Correr la aplicación en un sesentavo de segundo o ejecutar 60 marcos por segundo (milisegundos).'
              ]
            },
            {
              titulo: '5.10.2. Algoritmo de la Función Resize()',
              pasos: [
                '1.	Activar una resolución para la ventana de Windows de .',
                '2.	Activar el modelo de la vista a través de una matriz en el mundo real.',
                '3.	Cargar una matriz de identidad.',
                '4.	Definir una matriz de perspectiva, donde: a) fovy, especifica el ángulo del campo de visión en grados, en la dirección ; b) aspect, especifica la relación de aspecto que determina el campo de visión en la dirección , donde la relación de aspecto corresponde al valor de  como el ancho y al valor de  como el largo; c) zNear, especifica la distancia desde el espectador hasta el plano de recorte cercano (siempre positivo); d) zFar, especifica la distancia desde el espectador hasta el plano de recorte lejano (siempre positivo).',
                '4.1.	Asignar al método fovy el valor de 45.0.',
                '4.2.	Asignar al método aspect el valor del ancho de la ventana dividido para el valor del largo de la ventana de Windows.',
                '4.3.	Asignar al método zNear el valor de 1.0.',
                '4.4.	Asignar al método zFar el valor de 100.0.',
                '5.	Definir una matriz de carga de datos.',
                '6.	Activar el modelo de la vista con una matriz que corresponde al mundo de la Computación Gráfica o coordenadas por pantalla.'              ]
            },
            {
              titulo: '5.10.3. Algoritmo de la Función UpdateFrame()',
              pasos: [
                '1.	Instanciar un Objeto Estado del teclado.',
                '2.	Si la tecla R esta presionada.',
                '2.1.	Incrementar el valor del ángulo de rotación en un grado.',
                '2.2.	Si el ángulo de rotación es mayor a 360 grados, entonces:',
                '2.2.1.	Asignar al ángulo de rotación lo que tiene menos 360 grados.'
              ]
            },
            {
              titulo: '5.10.4. Algoritmo de la Función RenderFrame()',
              pasos: [
                '1.	Cargar una matriz de identidad.',
                '2.	Borrar el buffer de la máscara de color o de la profundidad.',
                '3.	Aplicar una matriz de traslación al cubo con los siguientes valores en x,y,z: (0,0,-5).',
                '4.	Aplicar una matriz de rotación al cubo en el eje xyz, con los siguientes valores en x,y,z: (1,1,1).',
                '5.	Llamada a la función que dibuja un cono cone().',
                '6.	Invertir los buffers disponibles para la graficación.'
              ]
            },
            {
              titulo: '5.10.5. Declarar un Factor de conversion de alcance global para convertir grados a radianes.',
              pasos: [
                '1.	Declarar la constante c_factor (factor de conversión) de tipo double.',
                '2.	Instanciar c_factor con el resultado de la división entre el valor de PI y 180 grados',
                '2.1	c_factor=π/180'
              ]
            },
            {
              titulo: '5.10.6. Algoritmo de la Función calculate_normal() para calcular el vector Normal ',
              pasos: [
                '1.	Calcular el vector posición X=B-A',
                '2.	Calcular el vector posición Y=C-A',
                '3.	Calcular el vector normal N mediante producto cruz'
              ]
            },
            {
              titulo: '5.10.7. Algoritmo de la Función cone()',
              pasos: [
                '1.	Declarar Vertice A',
                '2.	Declarar Vertice B y C',
                '3.	Instanciar los vertices B y C ',
                '4.	Asignar a los vectores B y C el valor 0 en eje y, B(x,0,z), C(x,0,z)',
                '5.	Iniciar el modo gráfico para dibujar triangulos.',
                '6.	Graficar un un triangulo mediante un bucle finito en relación a los 360 grados.',
                '6.1.	Asignar el valor del vertice Bx y Bz en Cx y Cz  ',
                '6.2.	Calcular el nuevo valor para el vertice B',
                '6.3.	Si el angulo es distinto de 0 grados',
                '6.3.1.	Definir los tres vértices para formar la cara lateral del cono (traiangulo isósceles)',
                '6.3.1.1.	Llamar a la función calculate_normal()',
                '6.3.1.2.	Definir el vértice A del triangulo, con los valores de A',
                '6.3.1.3.	Definir el vértice B del triangulo, con los valores de B',
                '6.3.1.4.	Definir el vértice C del triangulo, con los valores de C',
                '6.4.	Repetir hasta que se complete los 360 grados de la iteración ',
                '7.	Finalizar el modo gráfico.'
              ]
            },
            {
              titulo: '5.10.8. Algoritmo de la Función Loaded()',
              pasos: [
                '1.	Borrar los colores de la ventana y colocar el color negro por defecto.',
                '2.	Habilitar el proceso del test de profundidad.',
                '3.	Habilitar iluminacion',
                '4.	Posicion luz difusa',
                '5.	Luz difusa en blanco',
                '6.	Luz de ambiente en blanco',
                '7.	Habilitar capacidades del servidor GL'
              ]
            }
          ]
        },
        D: {
          subtitulo: 'D)	Código de la Aplicación',
          listaCodigo: [
            {
              problema: 'La implementación de la clase Game, se presenta a continuación en la Tabla 5.10.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
              tablaN: 'Tabla 5.10.1. ',
              tablaDescrip: 'Código de la clase Game del programa.',
              tablaDatos:
                ` 
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */
                    using OpenTK;
                    using System;
                    using OpenTK.Input;
                    using OpenTK.Graphics.OpenGL;
                    
                    namespace OpenTk
                    {
                      public class Game
                      {
                        // Objeto de tipo GameWindow que es un Cuadro de Diálogo
                        // o una Ventana de Windows.
                        GameWindow window;
                        // Ángulo de rotación del cono.
                        double theta = 0.0;
                        // Constructor con un parámetro.
                        public Game(GameWindow window)
                        {
                          // Inicializar el tamaño de la ventana de Windows.
                          this.window = window;
                          // Llamada a la función Start.
                          Start();
                        }
                        // Función que permite arrancar una aplicación gráfica.
                        void Start()
                        {
                          // Cargar una ventana.
                          window.Load += loaded;
                          // Redimensionar la ventana cargada.
                          window.Resize += resize;
                          // Actualizar la ventana cargada, marco por marco.
                          window.UpdateFrame += updateF;
                          // Renderizar la ventana cargada, marco por marco.
                          window.RenderFrame += renderF;
                          // Correr la aplicación en un sesentavo de segundo o
                          // ejecutar 60 marcos por seg (milisegundos).
                          window.Run(1.0/60.0);
                        }
                        // Función que redimensiona una ventana.
                        void resize(object o, EventArgs e)
                        {
                          // Activar una resolución para la Ventana de 500x500.
                          GL.Viewport(0,0,window.Width,window.Height);
                          // Activar el modelo de la vista de proyección en el mundo real.
                          GL.MatrixMode(MatrixMode.Projection);
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Definir una matriz de perspectiva.
                          Matrix4 matrix = Matrix4.Perspective(45.0f,window.Width/
                                       window.Height,1.0f,100.0f);
                          // Definir una matriz de carga.
                          GL.LoadMatrix(ref matrix);
                          // Activar el modelo de la vista en el mundo de la Computación
                          // Gráfica o coordenadas por pantalla.
                          GL.MatrixMode(MatrixMode.Modelview);
                        }
                        // Función que actualiza una ventana.
                        void updateF(object o, EventArgs e)
                        {
                          //Objeto del estado del teclado
                          KeyboardState k = Keyboard.GetState();
                          //Si la tecla R esta presionada
                          if (k.IsKeyDown(Key.R))
                          {
                            // Incrementar el valor del ángulo de 
                            //rotación en un grado.
                            theta += 1.0;
                            // Si el ángulo de rotación es mayor que 360,                   
                            //entonces:
                            if (theta>360)
                              // Asignar al ángulo de rotación 
                              //lo que tiene menos 360 grados.
                              theta -= 360;
                          }
                        }
                        // Función que renderiza los frames de la aplicación gráfica.
                        void renderF(object o, EventArgs e)
                        {
                          // Cargar una matriz de identidad.
                          GL.LoadIdentity();
                          // Borrar el buffer de la máscara de color o de la 
                          //profundidad.
                          GL.Clear(ClearBufferMask.ColorBufferBit | 
                                       ClearBufferMask.DepthBufferBit);
                          // Aplicar una matriz de traslación al cubo.
                          GL.Translate(0.0,0.0,-5.0);
                          // Aplicar una matriz de rotación al cubo en el eje xyz.
                          GL.Rotate(theta,1.0,1.0,1.0);
                          //Llamada a la función que dibuja un cono.
                          cone(2.0);
                          // Invertir los buffers disponibles para la graficación.
                          window.SwapBuffers();		
                        }
                        //Factor de conversion de alcance global para convertir grados a radianes
                        double c_factor = Math.PI/180.0;
                        //Calcular el vector Normal
                        double[] calculate_normal(double[] a,double[] b,double[] c)
                                {
                                  //Calcular el vector posicion B-A
                                  double[] x={b[0]-a[0],b[1]-a[1],b[2]-a[2]};
                                  //Calcular el vector posicion C-A
                                  double[] y={c[0]-a[0],c[1]-a[1],c[2]-a[2]};
                                  //Calcular el vector normal N mediante producto cruz
                                  double[] result={x[1]*y[2]-y[1]*x[2],
                                                -(x[0]*y[2]-y[0]*x[2]),
                                                x[0]*y[1]-y[0]*x[1]};
                                   return result;
                                }
                        // Función que dibuja un cono
                        void cone(double height)
                        {
                          //Vertice A   
                                double[] a={0.0,height,0.0};
                          //Vertice B y C
                                double[] b,c;
                          //Instanciar los vertices B y C
                                b=new double[3]; c=new double[3];
                          //Asignar a los vectores B y C el valor 0 en eje y.
                                b[1]=c[1]=0;
                          //Iniciar el modo gráfico.
                          GL.Begin(BeginMode.Triangles);
                          //Ciclo para dibujar todo el cubo
                                for(double angle=0;angle<=360;angle+=10)
                                {
                            //Asignar el valor del vertice B en C
                                    c[0]=b[0];
                                    c[2]=b[2];
                                    //Calcular el nuevo valor para el vertice B
                                    b[0]=Math.Cos(angle*c_factor);
                                    b[2]=Math.Sin(angle*c_factor);
                            //Si el angulo es distinto de 0 grados
                                    if(angle!=0){
                          // Definir los tres vértices de la cara lateral del cono 
                           GL.Normal3(calculate_normal(a,b,c));
                                        GL.Vertex3(a); //A
                                        GL.Vertex3(b); //B
                                        GL.Vertex3(c); //C
                                    }
                                }
                          // Finalizar el modo gráfico.
                          GL.End();
                              }
                        // Función que inicializa la carga de la aplicación gráfica.
                        void loaded(object o, EventArgs e)
                        {
                          // Borrar los colores de la ventana y colocar 
                          // el color negro por defecto.
                          GL.ClearColor(0.0f,0.0f,0.0f,0.0f);
                          // Habilitar el proceso del test de profundidad.
                          GL.Enable(EnableCap.DepthTest);
                    
                          //Iluminacion
                          GL.Enable(EnableCap.Lighting);
                    
                          float[] light_position = {20,20,80};
                          //Luz difusa en blanco
                          float[] light_diffuse = {1.0f,1.0f,1.0f};
                          //Luz de ambiente en blanco
                          float[] light_ambient = {0.5f,0.5f,0.5f};
                          
                          GL.Light(LightName.Light0,LightParameter.Position,light_position);
                          GL.Light(LightName.Light0,LightParameter.Diffuse,light_diffuse);
                          GL.Light(LightName.Light0,LightParameter.Ambient,light_ambient);
                          GL.Enable(EnableCap.Light0);
                        }
                        
                      }
                    }                    
                    `
            },
            {
              problema: 'La implementación de la clase Program, se presenta a continuación en la Tabla 5.10.2, que es la clase que representa a la interfaz gráfica de usuario del cono rotando.',
              tablaN: 'Tabla 5.10.2. ',
              tablaDescrip: 'Código de la clase Program del programa.',
              tablaDatos:
                `
                    /*
                    * Copyright (CC) 2021 César Villacís, Margarita Zambrano,
                    * Edwin Cuichan, Kevin Sanipatín.
                    * Creative Commons: BY-NC-ND 4.0 International license.
                    * 
                    * Except where otherwise noted, content on this program is licensed 
                    * under a Creative Commons BY-NC-ND 4.0 International license. 
                    * Source Code by the developers.
                    * 
                    * Unless required by applicable law or agreed to in writing, software
                    * distributed under the License is distributed on an "AS IS" BASIS,
                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    * See the License for the specific language governing permissions and
                    * limitations under the License.
                    */          
                    using OpenTK;
                    using System;
                    
                    namespace OpenTk
                    {
                        class Program
                        {
                            static void Main(string[] args)
                            {
                                // Crear una ventana con un rectángulo cuyo tamaño (size)
                                // es de (500, 500), es decir, Width: 500; Height: 500
                                GameWindow window = new GameWindow(500, 500);
                                // Crear una instancia de la clase Game para dibujar
                                // un cubo rotando.
                                Game ObjGame = new Game(window);
                            }
                        }
                    
                    }                    
                    `
            }
          ]
        },
        E: {
          subtitulo: 'E)	Pruebas de la Aplicación',
          listaPrueba: [
            {
              problema: 'A continuación, en la Figura 5.10.9, se muestra un ejemplo de la corrida del programa:',
              fotoPath: './assets/images/Capitulos/III/media/m50.png',
              fotoN: 'Figura 5.10.9. ',
              fotoDescrip: ' Corrida del programa.'
            }
          ]
        }
      }

    ];

    this.casosPropuesto = [
      { label: 'Caso Propuesto 1.1 ', tituloN: 'Caso de Estudio 1.1: ', titulo: 'Interfaz Gráfica del Juego del Tetris.', subtitulo: 'A)   Problema', problema: 'Escriba un programa para dibujar la interfaz del Juego de Tetris, como se muestra en la Figura 1.1.1. El juego consiste en jugar con diferentes formas, cada una compuesta decuatro cuadrados. El área principal (rectángulo grande) debe tener un tamaño de 10x20 cuadrados (es decir, 10 cuadrados de ancho y 20 cuadrados de alto). El pequeño rectángulo en la derecha muestra la “siguiente forma” que pronto aparecerá en el área principal (En el ejemplo aparece una figura en “L” de color roja). Para mayor información del juego del Tetris, se puede consultar en el siguiente enlace en la Web: http://en.wikipedia.org/wiki/Tetris.', tareaDescrip: 'Las tareas de este proyecto incluyen:', tareas: [{ tarea: '•	Dibujar todo lo que se muestra en esta figura, como por ejemplo la posición de cada componente y el rectángulo mayor que contiene al resto de figuras.' }, { tarea: '•	Si el cursor del mouse se mueve dentro del área principal, aparecerá el mensaje de “PAUSA” (con una fuente grande); y si el cursor se mueve hacia afuera del área, desaparecerá el mensaje de “PAUSA”.' }, { tarea: '•	El cambio de la dimensión de la ventana solo cambiará posiblemente el tamaño, pero no la posición relativa y la relación de aspecto de cualquier componente.' }, { tarea: '•	Si se presiona el botón “SALIR”, el programa termina y se cierra (esto no debería ser la salida del menú desplegable estándar de la ventana).' }], fotoPath: './assets/images/Capitulos/I/media/image296.png', fotoN: 'Figura 1.1.1 ', fotoDescrip: 'Juego del Tetris. (Image tomada de: XYZ).' },
      { label: 'Caso Propuesto 1.2', tituloN: 'Caso de Estudio 1.2: ', titulo: 'Panal de Abejas.', subtitulo: 'A)   Problema', problema: 'Escriba un programa para dibujar un panal de abejas, como se muestra en la Figura 1.2.1. Para dibujar esta figura se debe leer el valor del lado de un hexágono como, por ejemplo: lado igual a 2. Se recomienda encerrar la figura dentro de un rectángulo y realizar los cálculos de los segmentos que encierran a la figura para poder graficarla.', fotoPath: './assets/images/Capitulos/I/media/image297.png', fotoN: 'Figura 1.2.1 ', fotoDescrip: 'Panal de Abejas. (Imagen tomada de Klipartz: https://www.klipartz.com/es/sticker-png-tigsh)' },
      { label: 'Caso Propuesto 1.3', tituloN: 'Caso de Estudio 1.3: ', titulo: 'Gema de 10 Lados y Polígonos Estrellados de 10 Puntas.', subtitulo: 'A)   Problema', problema: 'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 10 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).', fotoPath: './assets/images/Capitulos/I/media/image298.png', fotoN: 'Figura 1.3.1 ', fotoDescrip: 'Gema de 10 lados y polígonos estrellados de 10 puntas.' }
    ];

    this.praqniquePropuesto = [
      {
        label: 'Pracnique Propuesto 1.3.1', tituloN: 'Pracnique 1.3.1: ', titulo: 'Hexágono de 6 Colores.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'Dado el lado de un hexágono regular, dibujar la figura geométrica correspondiente, considerando que uno de los vértices del hexágono se encuentra sobre el eje de las ‘x’. Además, se debe rellenar la figura con 6 colores, donde cada triángulo pequeño tiene un color como el color rojo, amarillo, verde, violeta, azul y celeste. (Ver Figura 1.3.1).',
                fotoPath: './assets/images/Capitulos/III/media/p1.png',
                fotoN: 'Figura 1.3.1.  ',
                fotoDescrip: 'Hexágono de 6 colores.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.2', tituloN: 'Pracnique 1.3.2: ', titulo: 'Flor de la Margarita de 5 Pétalos.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'Dado un pentágono regular, dibujar una flor de la Margarita de 5 pétalos a base de cinco pentágonos inscritos en uno más grande, considerando que uno de los vértices de los cinco pentágonos se encuentra sobre el eje de las ‘x’. Además, se debe rellenar de color rojo cada pentágono pequeño. (Ver Figura 1.3.2).',
                fotoPath: './assets/images/Capitulos/III/media/p2.png',
                fotoN: 'Figura 1.3.2.  ',
                fotoDescrip: 'Flor de la Margarita de 5 Pétalos.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.3', tituloN: 'Pracnique 1.3.3: ', titulo: 'Sólido Geométrico de 7 Colores.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'En la Figura 1.3.3, se muestra un sólido geométrico dentro de un cubo auxiliar y las vistas de alzado, perfil y de planta. Graficar este sólido geométrico de colores rotando en el eje x y en los ejes xz, utilizando OpenTK y C#. Las caras que no son visibles se pueden pintar con el color plomo (gray). No es necesario graficar el cubo auxiliar ni tampoco las vistas.',
                fotoPath: './assets/images/Capitulos/III/media/p3.png',
                fotoN: 'Figura 1.3.3.  ',
                fotoDescrip: 'Sólido Geométrico de 7 Colores.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.4', tituloN: 'Pracnique 1.3.4: ', titulo: 'Sólido Geométrico de 7 Colores.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'En la Figura 1.3.4, se muestra un sólido geométrico dentro de un cubo auxiliar y las vistas de alzado, perfil y de planta. Graficar este sólido geométrico de colores rotando en el eje x y en los ejes xz, utilizando OpenTK y C#. Las caras que no son visibles se pueden pintar con el color plomo (gray). No es necesario graficar el cubo auxiliar ni tampoco las vistas.',
                fotoPath: './assets/images/Capitulos/III/media/p4.png',
                fotoN: 'Figura 1.3.4.  ',
                fotoDescrip: 'Sólido Geométrico de 7 Colores.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.5', tituloN: 'Pracnique 1.3.5: ', titulo: 'Cuatro Sólidos Geométricos.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'En la Figura 1.3.5, se muestran cuatro sólidos geométricos dentro de una caja auxiliar cada uno. Graficar de manera separada en cuatro archivos diferentes cada uno de estos sólidos geométricos de colores rotando en el eje x y en los ejes xz, utilizando OpenTK y C#. Las caras que no son visibles se pueden pintar con el color plomo (gray). No es necesario graficar la caja auxiliar ni tampoco las vistas.',
                fotoPathp1: './assets/images/Capitulos/III/media/p51.png',
                fotoPath: './assets/images/Capitulos/III/media/p52.png',
                fotoN: 'Figura 1.3.5.  ',
                fotoDescrip: 'Cuatro Sólidos Geométricos.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.6', tituloN: 'Pracnique 1.3.6: ', titulo: 'Seis Sólidos Geométricos.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'En la Figura 1.3.6, se muestran seis sólidos geométricos dentro de una caja auxiliar cada uno. Graficar de manera separada en cuatro archivos diferentes cada uno de estos sólidos geométricos rotando en el eje x y en los ejes xz, utilizando OpenTK y C#. Las caras de cada sólido pueden ser pintadas con cualquier color. Las caras que no son visibles se pueden pintar con el color plomo (gray). No es necesario graficar la caja auxiliar ni tampoco las vistas.',
                fotoPath: './assets/images/Capitulos/III/media/p6.png',
                fotoN: 'Figura 1.3.6.  ',
                fotoDescrip: 'Seis Sólidos Geométricos.'
              }
            ]
          }
        ]
      },
      {
        label: 'Pracnique Propuesto 1.3.7', tituloN: 'Pracnique 1.3.7: ', titulo: 'Cinco Sólidos Platónicos.', subtitulo: 'A)   Problema',
        listaGeneral: [
          {
            listaParrafoFotos: [
              {
                problema: 'En la Figura 1.3.7, se muestran cinco sólidos Platónicos dentro de una caja auxiliar cada uno. Graficar de manera separada en cinco archivos diferentes cada uno de estos sólidos Platónicos rotando en el eje x y en los ejes xz, utilizando OpenTK y C#. Las caras de cada sólido pueden ser pintadas con cualquier color. No es necesario graficar la caja auxiliar ni tampoco las vistas.',
                fotoPath: './assets/images/Capitulos/III/media/p7.png',
                fotoN: 'Figura 1.3.7.  ',
                fotoDescrip: 'Cinco Sólidos Platónicos.'
              }
            ]
          }
        ]
      }
    ];
  }

  selectTabNext() {

    if ((this.selectedIndex.value + 1) === this.numberTabs) {
      this.selectedIndex.setValue(0);
      this.positionCurrentBefore = false;
      this.positionCurrentNext = true;
      this.titleNext = 'Siguiente';
    } else {
      this.selectedIndex.setValue(this.selectedIndex.value + 1);
      this.positionCurrentBefore = true;
      this.positionCurrentNext = true;
      this.titleNext = 'Siguiente';
    }
    if ((this.selectedIndex.value + 1) === this.numberTabs) {
      this.titleNext = 'Inicio';
    }
  }
  selectTabBefore() {
    if (this.selectedIndex.value !== 0) {
      if ((this.selectedIndex.value - 1) === 0) {
        this.selectedIndex.setValue(0);
        this.positionCurrentBefore = false;
        this.positionCurrentNext = true;
        this.titleNext = 'Siguiente';
      } else {
        this.selectedIndex.setValue(this.selectedIndex.value - 1);
        this.positionCurrentBefore = true;
        this.positionCurrentNext = true;
        this.titleNext = 'Siguiente';
      }
    }
  }
  ngOnInit(): void {
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Problema 1', content: 'Caso 1' },
          { label: 'Problema 2', content: 'Caso 2' },
          { label: 'Problema 3', content: 'Caso 3' }
        ]);
      }, 1000);
    });

  }
}

