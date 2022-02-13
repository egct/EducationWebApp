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
  selector: 'app-chapter-i',
  templateUrl: './chapter-i.component.html',
  styleUrls: ['./chapter-i.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChapterIComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
  prefTabs: any;
  introduccion: any;
  praqnique: any;
  praqniquePropuesto: any; 
  casosPropuesto: any;
  selectedIndex = new FormControl(0); // define a FormControl with value 0. Value means index.
  numberTabs = 12;
  positionCurrentNext: boolean = true;
  positionCurrentBefore: boolean = false;
  titleNext: string = 'Siguiente';
  num_capitulo = 1;

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
    this.introduccion=[{
        f1:
        `
        SolidBrush mySolidBrush = new SolidBrush(Color.Blue);
        myGraphics.FillRectangle(mySolidBrush, 0, 0, 70, 20);
        `,
        f2:
        `
        HatchBrush myHatchBrush = new HatchBrush(HatchStyle.Vertical, Color.Blue, Color.Green);
        `,
        f3:
        `
        Image myImage = Image.FromFile("MyTexture.bmp");
        TextureBrush myTextureBrush = new TextureBrush(myImage);
        myGraphics.FillEllipse(myTextureBrush, 0, 0, 100, 50);
        `,
        f4:
        `
        LinearGradientBrush myLinearGradientBrush = new LinearGradientBrush(
            myRectangle,
            Color.Blue,
            Color.Green,
            LinearGradientMode.Horizontal);
         myGraphics.FillEllipse(myLinearGradientBrush, myRectangle);         
        `,
        f5:
        `
        public void FillPolygonPointF(PaintEventArgs e)
        {
            // Crear un pincel sólido de relleno.
            SolidBrush blueBrush = new SolidBrush(Color.Blue);

            // Crear siete puntos que definen un polígono irregular.
            PointF point1 = new PointF(50.0F, 50.0F);
            PointF point2 = new PointF(100.0F, 25.0F);
            PointF point3 = new PointF(200.0F, 5.0F);
            PointF point4 = new PointF(250.0F, 50.0F);
            PointF point5 = new PointF(300.0F, 100.0F);
            PointF point6 = new PointF(350.0F, 200.0F);
            PointF point7 = new PointF(250.0F, 250.0F);
            
            // Crear un arreglo de objetos de tipo PointF para siete puntos.
            PointF[] curvePoints = {point1, point2, point3, point4, point5, point6, point7};

            // Rellenar el área poligonal en la pantalla.
            e.Graphics.FillPolygon(blueBrush, curvePoints);
        }
        `,
        

    }
    ];

    this.prefTabs = [
      {
        link:'https://drive.google.com/uc?id=12KQht0YOhjqFzjuu5WgW29ZOEbCozM5U&export=download',
        label: 'Caso 1.1',
        title: 'Graficar un Rectángulo y Encontrar el Perímetro y su Área.',
        problema: 'Escribir un programa para graficar un rectángulo, calcular e imprimir el perímetro y su área. (Ver Figura 1.1.1)',
        formulaA: ['$P=2a+2b$',
                   '$A=ab$'],
        imagen1: './assets/images/Capitulos/I/media/image8.png',
        figuraNum1: 'Figura 1.1.1. ',
        figura1: 'El rectángulo y sus fórmulas.',
        analisis: 'Claramente, se puede ver que las entradas del problema son el ancho y el largo del rectángulo. Hay tres salidas requeridas: el perímetro, el área del rectángulo y el gráfico de la figura geométrica. Partiendo de un conocimiento básico de geometría, se sabe que hay una relación entre el ancho y el largo del rectángulo con el perímetro y con el área de la figura geométrica. Las fórmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$width$',b:'/* ancho del rectángulo */'},
          {t:'',a:'$height$',b:'/* largo del rectángulo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* perímetro del rectángulo */'},
          {t:'',a:'$area$',b:'/* área del rectángulo  */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gráfico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'Fórmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=2a+2b$',b:'/* Fórmula del perímetro de un rectángulo  */'},
          {t:'',a:'$(2)A=ab$',b:'/* Fórmula del área de un rectángulo  */'}],
        diagramaES: 'En la Figura 1.1.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: las variables ‘width’ y ‘height’; b) Salidas: la variable ‘perimetro’, la variable ‘area’ y el objeto ‘graph’; c) Auxiliares: el objeto ‘pen’; d) Constantes: el factor de escalamiento ‘SF’.',
        imagen2: './assets/images/Capitulos/I/media/image9.png',
        figuraNum2: 'Figura 1.1.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicación se muestra en la Figura 1.1.3 con notación UML. En este diagrama se puede ver que la aplicación está compuesta por seis clases, donde la clase Program se compone por la clase frmRectangle que resulta ser una clase derivada de la clase Form. La clase frmRectangle se compone de un objeto de tipo CRectangle. ',
        diagramaC2: 'La clase CRectangle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gráfico de la aplicación y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Además, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geométrica. Los otros atributos que se tienen en la clase CRectangle son el ancho, el largo, el perímetro y el área representados por los datos miembros mWidth, mHeight, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image10.png',
        figuraNum3: 'Figura 1.1.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.1.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Función ReadData()',a:'1.	Leer el ancho del rectángulo.',b:'2.	Leer el largo del rectángulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Función PerimeterRectangle()',a:'1.	Calcular el perímetro.',b:'1.1.	Asignar el producto de dos veces el ancho por dos veces el largo a la variable ‘perimeter’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Función AreaRectangle()',a:'1.	Calcular el área.',b:'1.1.	Asignar el producto del ancho por el largo a la variable ‘area’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Función PrintData()',a:'1.	Imprimir el valor de la variable ‘perimeter’ y de la variable ‘area’.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Función PlotShape()',a:'1.	Graficar un rectángulo.',b:'1.1.	Utilizar el objeto ‘Graph’ con la función DrawRectangle para graficar con la pluma ‘Pen’ un rectángulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: 'Para implementar la solución, se deben escribir los algoritmos como una Aplicación para Windows con C# .NET que contenga toda la información necesaria para completar la solución de dicho problema y pueda la aplicación ser ejecutada desde Visual Studio .NET.',
        implementacion2: 'Para comenzar la construcción de esta aplicación, empiece por ejecutar el Entorno de Desarrollo Integrado (IDE – Integrated Development Environment) de Visual Studio 2019 y seleccione Crear un proyecto, como se muestra en la Figura 1.1.4.',
        imagen4: './assets/images/Capitulos/I/media/image11.png',
        figuraNum4: 'Figura 1.1.4. ',
        figura4: 'Creación de un proyecto en C# .NET',
        implementacion3: 'A continuación, en el cuadro de diálogo de Crear un proyecto se debe seleccionar la Plantilla (Template) correspondiente a la Aplicación de Windows Forms (.NET Framework) con el lenguaje C# y luego presione el botón de Siguiente, como se muestra en la Figura 1.1.5.',
        imagen5: './assets/images/Capitulos/I/media/image12.png',
        figuraNum5: 'Figura 1.1.5. ',
        figura5: 'Creación de una Aplicación de Windows Forms.',
        implementacion4: 'Luego, aparece un cuadro de diálogo de Configure su nuevo proyecto, donde se debe modificar el nombre de la aplicación con WinAppRectangle y se debe seleccionar una localidad para guardar en el disco duro dicho proyecto como, por ejemplo: C:\\Users\\cxvil\\source\\repos. (Ver Figura 1.1.6).',
        imagen6: './assets/images/Capitulos/I/media/image13.png',
        figuraNum6: 'Figura 1.1.6. ',
        figura6: 'Configuración de un nuevo proyecto.',
        implementacion5: 'Finalmente se crea la Aplicación de Windows Forms cuyo nombre es WinAppRectangle en el IDE de C# .NET. Como se puede ver en la Figura 1.1.7, el ambiente de trabajo de la aplicación consta de seis partes: 1) Barra de Menús; 2) Barra de Tareas; 3) Caja de Herramientas; 4) Explorador de Soluciones; 5) Ventana de Propiedades; 6) Formulario (Form1). (Ver Figura 1.1.7).',
        imagen7: './assets/images/Capitulos/I/media/image14.png',
        figuraNum7: 'Figura 1.1.7. ',
        figura7: 'IDE de C# .NET.',
        implementacion6: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmRectangle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicación de Windows Forms con el nombre de WinAppRectangle, como se muestra en la Figura 1.1.8. Además, cree la clase llamada CRectangle con la cual va a trabajar el formulario frmRectangle, aplicando el concepto de Composición y Agregación.',
        imagen8: './assets/images/Capitulos/I/media/image15.png',
        figuraNum8: 'Figura 1.1.8. ',
        figura8: 'Modificación del nombre del Formulario en la Aplicación.',
        implementacion7: 'Se necesita añadir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cuatro Etiquetas (Labels), cuatro Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene dos Etiquetas (Label) y dos Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox). Disponga los controles de tal manera que se asemeje a la Figura 1.1.9 que se muestra a continuación.',
        imagen9: './assets/images/Capitulos/I/media/image16.png',
        figuraNum9: 'Figura 1.1.9. ',
        figura9: 'Disposición de los Controles dentro del Formulario. ',
        implementacion8: 'Utilice la Tabla 1.1.1, para modificar las propiedades restantes de cada objeto.',
        tabla1:'Tabla 1.1.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmRectangle','Rectángulo','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbInputs','Entradas','MS Sans Serif, Bold, 8 ']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblWidth','True','Ancho(a):']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblHeight','True','Largo(b):']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtWidth','Blank']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtHeight','Blank']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Blank']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnCalculate','Calcular']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbOutputs','Salidas','MS Sans Serif, Bold, 8']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblPerimeter','True','Perimetro:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblarea','True','Area:']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled'],Valor:['txtPerimetro','Blank','False']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtArea','Blank','False','True']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gráfico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.1.10.',
        imagen10: './assets/images/Capitulos/I/media/image17.png',
        figuraNum10: 'Figura 1.1.10. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicación aceptará el ingreso de valores flotantes o enteros en dos Cajas de Texto (TextBox) y desplegará los resultados en otras dos Cajas de Texto (TextBoxes) y el gráfico de la figura se desplegará en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CRectangle tiene los siguientes datos miembro: a) mWidth , mHeight, que representan al ancho y al largo del rectángulo que son de tipo float; b) mPerimeter, mArea, que representan al perímetro y al área del rectángulo que son también de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase también posee un grupo de métodos de acuerdo a las acciones que puede hacer y que básicamente serán funciones para poder representar y operar un rectángulo en el plano, entre las más importantes están las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos.',a:'Este método inicializa los primeros cuatro datos miembros de la clase CRectangle con el valor de cero.',
        b:`// Constructor sin parámetros.
        public CRectangle()
        {
           mWidth = 0.0f; mHeight = 0.0f;
           mPerimeter = 0.0f; mArea = 0.0f;
        }`},
        {t:'b)	Función miembro ReadData. ',a:'Esta función permite leer los valores del ancho y del largo del rectángulo ingresados en cajas de texto. En este caso es necesario realizar un casting o conversión de tipo de datos de String a float utilizando la función float.Parse() y además se utiliza la función try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar números ingrese letras por error.',
        b:`// Función que lee los datos de entrada del rectángulo.
        public void ReadData(TextBox txtWidth, TextBox txtHeight)
        {
            try
            {
                mWidth = float.Parse(txtWidth.Text);
                mHeight = float.Parse(txtHeight.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no válido...", "Mensaje de error");
            }
         }`},
        {t:'c)	Función miembro Perimeter. ',a:'Esta función permite calcular el perímetro de un rectángulo, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:`// Función que calcula el perímetro del rectángulo.
          public void PerimeterRectangle()
          {
              mPerimeter = 2 * mWidth + 2 * mHeight;
          }`},
          {t:'d)	Función miembro Area. ',a:'Esta función permite calcular el área de un rectángulo, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:`// Función que calcula el área del rectángulo.
          public void AreaRectangle()
          {
              mArea = mWidth * mHeight;
          }`},
          {t:'e)	Función miembro PrintData. ',a:'Esta función permite imprimir en cajas de texto los valores del perímetro y del área del rectángulo calculados, para lo cual es necesario realizar un casting o conversión de tipo float a String, utilizando la función ToString().',
          b:`// Función que imprime el perímetro y el área del rectángulo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }`},
          {t:'f)	Función miembro InitializeData. ',a:'Esta función permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los símbolos de comillas dobles (“”). Para inicializar la caja de imagen (picCanvas) se utiliza la función Refresh que significa refrescar o borrar.',
          b:`// Función que inicializa los datos y controles del rectángulo.
          public void InitializeData(TextBox txtWidth, TextBox txtHeight,
                                     TextBox txtPerimeter, TextBox txtArea,
                                     PictureBox picCanvas)
          {
              mWidth = 0.0f; mHeight = 0.0f;
              mPerimeter = 0.0f; mArea = 0.0f;
      
              txtWidth.Text = ""; txtHeight.Text = "";
              txtPerimeter.Text = ""; txtArea.Text = "";
              // Mantiene el cursor titilando en una caja de texto.
              txtWidth.Focus();
              picCanvas.Refresh();
           }`},
          {t:'g)	Función miembro PlotShape. ',a:'Esta función permite graficar un rectángulo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gráficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un rectángulo en las coordenadas (0,0) y con los valores del ancho y del largo multiplicados por un factor de escalamiento, para que la figura no sea muy pequeña.',
          b:`// Función que grafica un rectángulo.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
              // Graficar un rectángulo.
              mGraph.DrawRectangle(mPen, 0, 0, mWidth * SF, mHeight * SF);
          }`},
          {t:'h)	Función miembro CloseForm. ',a:'Esta función permite cerrar un formulario utilizando la función Close(), que es llamada por el objeto ObjForm el cual es un parámetro de la función que recibe un objeto de tipo Form.',
          b:`// Función que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }`}
        ],
        tipsProgramacion:[{tip:'Se utiliza la función float.Parse() para convertir un tipo de dato carácter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la función ToString() para convertir un tipo de dato numérico a tipo carácter o cadena.'}],
        implementacion13: 'La implementación de la clase CRectangle, se presenta a continuación en la Tabla 1.1.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.1.2. ',
        tabladetalle2:'Código de la clase CRectangle del programa.',
        tablaDatos2:
        `
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Drawing;
        using System.Windows.Forms;
        
        namespace WinAppRectangle
        {
            class CRectangle
            {
                // Datos Miembro (Atributos).
        
                // Ancho del rectángulo.
                private float mWidth;
                // Largo del rectángulo.
                private float mHeight;
                // Perímetro del rectángulo.
                private float mPerimeter;
                // Área del rectángulo.
                private float mArea;
                // Objeto que activa el modo gráfico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bolígrafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                
                // Funciones Miembro (Métodos).        
                
                // Constructor sin parámetros.
                public CRectangle()
                {
                    mWidth = 0.0f; mHeight = 0.0f;
                    mPerimeter = 0.0f; mArea = 0.0f;
                }
        
                // Función que lee los datos de entrada del rectángulo.
                public void ReadData(TextBox txtWidth, TextBox txtHeight)
                {
                    try
                    {
                        mWidth = float.Parse(txtWidth.Text);
                        mHeight = float.Parse(txtHeight.Text);
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no válido...",
                                        "Mensaje de error");
                    }
                }
        
                // Función que calcula el perímetro del rectángulo.
                public void PerimeterRectangle()
                {
                    mPerimeter = 2 * mWidth + 2 * mHeight;
                }
        
                // Función que calcula el área del rectángulo.
                public void AreaRectangle()
                {
                    mArea = mWidth * mHeight;
                }
        
                // Función que imprime el perímetro y el área del rectángulo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }
        
                // Función que inicializa los datos y controles del rectángulo.
                public void InitializeData(TextBox txtWidth, TextBox txtHeight,
                                            TextBox txtPerimeter, TextBox txtArea,
                                            PictureBox picCanvas)
                {
                    mWidth = 0.0f; mHeight = 0.0f;
                    mPerimeter = 0.0f; mArea = 0.0f;
        
                    txtWidth.Text = ""; txtHeight.Text = "";
                    txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtWidth.Focus();
                    picCanvas.Refresh();
                }
        
                // Función que grafica un rectángulo.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
                    // Graficar un rectángulo.
                    mGraph.DrawRectangle(mPen, 0, 0, mWidth * SF, mHeight * SF);
                }
        
                // Función que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }        
            }
        `,
        implementacion14: 'La implementación de la clase frmRectangle, se presenta a continuación en la Tabla 1.1.3, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica conocida como Rectángulo.',
        tabla3:'Tabla 1.1.3. ',
        tabladetalle3:'Código de la clase frmRectangle del programa.',
        tablaDatos3:
        `
        public partial class frmRectangle : Form
        {
            // Definición de un objeto de tipo CRectangle.
            private CRectangle ObjRectangle = new CRectangle();
    
            public frmRectangle()
            {
                InitializeComponent();
            }
    
            private void frmRectangle_Load(object sender, EventArgs e)
            {
                // Inicialización de los datos y controles.
                // Llamada a la función InitializeData.
                ObjRectangle.InitializeData(txtWidth, txtHeight, 
                                            txtPerimeter, txtArea, 
                                            picCanvas);
            }
    
            private void btnCalculate_Click(object sender, EventArgs e)
            {
                // Lectura de datos.
                // Llamada a la función ReadData.
                ObjRectangle.ReadData(txtWidth, txtHeight);
                // Cálculo del perímetro de un rectángulo.
                // Llamada a la función PerimeterRectangle.
                ObjRectangle.PerimeterRectangle();
                // Cálculo del área de un rectángulo.
                // Llamada a la función AreaRectangle.
                ObjRectangle.AreaRectangle();
                // Impresión de datos.
                // Llamada a la función PrintData.
                ObjRectangle.PrintData(txtPerimeter, txtArea);
                // Graficación de un rectángulo.
                // Llamada a la función PlotShape.
                ObjRectangle.PlotShape(picCanvas);
            }
    
            private void btnReset_Click(object sender, EventArgs e)
            {
                // Inicialización de los datos y controles.
                // Llamada a la función InitializeData.
                ObjRectangle.InitializeData(txtWidth, txtHeight,
                                            txtPerimeter, txtArea,
                                            picCanvas);
            }
    
            private void btnExit_Click(object sender, EventArgs e)
            {
                // Cierre de un formulario.
                // Llamada a la función CloseForm.
                ObjRectangle.CloseForm(this);
            }
        }
        `,
        implementacion15: 'La clase frmRectangle tiene como datos miembro un objeto de tipo CRectangle llamado ObjRectangle, el cual es el encargado de acceder a las funciones públicas de la clase CRectangle para realizar diferentes cálculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmRectangle_Load(), se utiliza el objeto ObjRectangle, para llamar a la función pública InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del botón btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjRectangle, para llamar a las funciones públicas: ReadData(), PerimeterRectangle(), AreaRectangle(), PrintData() y PlotShape(). En el evento Click del botón btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjRectangle, para llamar a la función pública InitializeData(). En el evento Click del botón btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjRectangle, para llamar a la función pública CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicación basta con presionar la tecla F5 o el botón Start de ejecución de la barra de menús de Visual Studio .NET. La Figura 1.1.11 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la solución porque es relativamente fácil calcular el área y el perímetro manualmente o utilizando una calculadora. Para un valor de ancho de 8 y de largo de 5 se puede observar la gráfica de la figura geométrica en la caja de imagen (picCanvas). El perímetro deberá ser dos veces el ancho más dos veces el largo, que también es un valor fácil de calcular manualmente o utilizando una calculadora. El área deberá ser igual al producto del ancho por el largo, que también es un valor fácil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deberá ingresar unos pocos valores de prueba correspondientes al ancho y al largo de un rectángulo. No se necesita probar más que con unos pocos casos de prueba para verificar que este programa está correcto. ',
        imagen13: './assets/images/Capitulos/I/media/image18.png',
        figuraNum13: 'Figura 1.1.11. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.2',
      link:'https://drive.google.com/uc?id=1H8qICjtOsGOCOI0xgblvujvO4x99YdHZ&export=download',
        title: 'Graficar un Cuadrado y Encontrar el Perímetro y su Área.',
        problema: 'Escribir un programa para graficar un cuadrado, calcular e imprimir el perímetro y su área. (Ver Figura 1.2.1)',
        formulaA: ['$P=4l$',
                   '$A=l^2$'],
        imagen1: './assets/images/Capitulos/I/media/image19.jpeg',
        figuraNum1: 'Figura 1.2.1. ',
        figura1: 'El cuadrado y sus fórmulas.',
        analisis: 'Claramente, se puede ver que la entrada del problema es el lado del cuadrado. Hay tres salidas requeridas: el perímetro, el área del círculo y el gráfico de la figura geométrica. Partiendo de un conocimiento básico de geometría, se sabe que hay una relación entre el lado del cuadrado con el perímetro y con el área de la figura geométrica. Las fórmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$side$',b:'/* lado del cuadrado */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* perímetro del cuadrado */'},
          {t:'',a:'$area$',b:'/* área del cuadrado */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gráfico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'Fórmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=4l$',b:'/* Fórmula del perímetrode de un cuadrado */'},
          {t:'',a:'$(2)A=l^2$',b:'/* Fórmula del área de un cuadrado */'}],
        diagramaES: 'En la Figura 1.2.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: las variables ‘width’ y ‘height’; b) Salidas: la variable ‘perimetro’, la variable ‘area’ y el objeto ‘graph’; c) Auxiliares: el objeto ‘pen’; d) Constantes: el factor de escalamiento ‘SF’.',
        imagen2: './assets/images/Capitulos/I/media/image20.png',
        figuraNum2: 'Figura 1.2.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicación se muestra en la Figura 1.2.3 con notación UML. En este diagrama se puede ver que la aplicación está compuesta por seis clases, donde la clase Program se compone por la clase frmSquare que resulta ser una clase derivada de la clase Form. La clase frmSquare se compone de un objeto de tipo CSquare. ',
        diagramaC2: 'La clase CSquare se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gráfico de la aplicación y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Además, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geométrica. Los otros atributos que se tienen en la clase CSquare son el lado, el perímetro y el área representados por los datos miembros mSide, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image21.png',
        figuraNum3: 'Figura 1.2.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.2.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Función ReadData()',a:'1.	Leer el lado del cuadrado.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Función PerimeterSquare()',a:'1.	Calcular el perímetro.',b:'1.1.	Asignar el producto de cuatro veces el lado a la variable ‘perimeter’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Función AreaSquare()',a:'1.	Calcular el área.',b:'1.1.	Asignar el cuadrado del lado a la variable ‘area’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Función PrintData()',a:'1.	Imprimir el valor de la variable ‘perimeter’ y de la variable ‘area’.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Función PlotShape()',a:'1.	Graficar un cuadrado.',b:'1.1.	Utilizar el objeto ‘Graph’ con la función DrawRectangle para graficar con la pluma ‘Pen’ un cuadrado.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la solución, se deben escribir los algoritmos como una Aplicación para Windows con C# .NET que contenga toda la información necesaria para completar la solución de dicho problema y pueda la aplicación ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcción de esta aplicación, se debe seleccionar la opción de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicación de Windows Forms con el lenguaje C#. En el cuadro de diálogo configure su proyecto con el nombre de WinAppSquare y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmSquare.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicación de Windows Forms con el nombre de WinAppSquare, como se muestra en la Figura 1.2.4. Además, cree la clase llamada CSquare con la cual va a trabajar el formulario frmSquare, aplicando el concepto de Composición y Agregación.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image22.png',
        figuraNum8: 'Figura 1.2.4. ',
        figura8: 'Solución WinAppSquare',
        implementacion7: 'Se necesita añadir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cuatro Etiquetas (Labels), tres Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene una Etiqueta (Label) y una Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.2.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.2.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmSquare','Cuadradado','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbInputs','Entradas','MS Sans Serif, Bold, 8 ']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblSide','True','Ancho(a):']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtSide','Blank']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Blank']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnCalculate','Calcular']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbOutputs','Salidas','MS Sans Serif, Bold, 8']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblPerimeter','True','Perimetro:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblArea','True','Area:']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtPerimetro','Blank','False','True']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtArea','Blank','False','True']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gráfico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.2.5.',
        imagen10: './assets/images/Capitulos/I/media/image23.png',
        figuraNum10: 'Figura 1.2.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicación aceptará el ingreso de un valor flotante o entero en una Caja de Texto (TextBox) y desplegará los resultados en otras dos Cajas de Texto (TextBoxes) y el gráfico de la figura se desplegará en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CSquare tiene los siguientes datos miembro: a) mSide, que representa al lado del cuadrado que es de tipo float; b) mPerimeter, mArea, que representan al perímetro y al área del cuadrado que son también de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase también posee un grupo de métodos de acuerdo a las acciones que puede hacer y que básicamente serán funciones para poder representar y operar un cuadrado en el plano, entre las más importantes están las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este método inicializa los primeros tres datos miembros de la clase CSquare con el valor de cero.',
        b:
        `
        // Constructor sin parámetros.
        public CSquare()
        {
            mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        }
        `
        },
        {t:'b)	Función miembro ReadData. ',a:'Esta función permite leer el valor del lado del cuadrado ingresado en una caja de texto. En este caso es necesario realizar un casting o conversión de tipo de datos de String a float utilizando la función float.Parse() y además se utiliza la función try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar números ingrese letras por error.',
        b:
        `
        // Función que lee el lado del cuadrado.
        public void ReadData(TextBox txtSide)
        {
            try
            {
                mSide = float.Parse(txtSide.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no válido...", "Mensaje de error");
            }
         }
        `
        },
        {t:'c)	Función miembro Perimeter. ',a:'Esta función permite calcular el perímetro de un cuadrado, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:`
          // Función que calcula el perímetro del cuadrado.
          public void PerimeterSquare()
          {
              mPerimeter = 4 * mSide;
          }
          `
          },
          {t:'d)	Función miembro Area. ',a:'Esta función permite calcular el área de un cuadrado, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:
          `
          // Función que calcula el área del cuadrado.
          public void AreaSquare()
          {
              mArea = (float)Math.Pow(mSide, 2);
          }
          `
          },
          {t:'e)	Función miembro PrintData. ',a:'Esta función permite imprimir en cajas de texto los valores del perímetro y del área del cuadrado calculados, para lo cual es necesario realizar un casting o conversión de tipo float a String, utilizando la función ToString().',
          b:
          `
          // Función que imprime el perímetro y el área del cuadrado.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }
          `
          },
          {t:'f)	Función miembro InitializeData. ',a:'Esta función permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los símbolos de comillas dobles (“”). Para inicializar la caja de imagen (picCanvas) se utiliza la función Refresh que significa refrescar o borrar.',
          b:
          ` 
          // Función que inicializa los datos y controles del cuadrado.
          public void InitializeData(TextBox txtSide, TextBox txtPerimeter,
                                     TextBox txtArea, PictureBox picCanvas)
          {
              mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
      
              txtSide.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
              // Mantiene el cursor titilando en una caja de texto.
              txtSide.Focus();
              picCanvas.Refresh();
          }
          `
          },
          {t:'g)	Función miembro PlotShape. ',a:'Esta función permite graficar un círculo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gráficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un cuadrado en las coordenadas (0,0) y con los valores del lado asignados al ancho y al largo del rectángulo multiplicados por un factor de escalamiento, para que la figura no sea muy pequeña.',
          b:
          `
          // Función que grafica un cuadrado.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
              // Graficar un cuadrado en función de un rectángulo.
              mGraph.DrawRectangle(mPen, 0, 0, mSide * SF, mSide * SF);
          }
          `
          },
          {t:'h)	Función miembro CloseForm. ',a:'Esta función permite cerrar un formulario utilizando la función Close(), que es llamada por el objeto ObjForm el cual es un parámetro de la función que recibe un objeto de tipo Form.',
          b:
          `
          // Función que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
            ObjForm.Close();
          }
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la función float.Parse() para convertir un tipo de dato carácter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la función ToString() para convertir un tipo de dato numérico a tipo carácter o cadena.'}],
        implementacion13: 'La implementación de la clase CSquare, se presenta a continuación en la Tabla 1.3.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.2.2. ',
        tabladetalle2:'Código de la clase CSquare del programa.',
        tablaDatos2:
        `
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Drawing;
        using System.Windows.Forms;

        namespace WinAppSquare
        {
            class CSquare
            {
                // Datos Miembro (Atributos).    
                
                // Lado del cuadrado.
                private float mSide;        
                // Perímetro del cuadrado.
                private float mPerimeter;
                // Área del cuadrado.
                private float mArea;
                // Objeto que activa el modo gráfico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bolígrafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;

                // Funciones Miembro (Métodos).

                // Constructor sin parámetros.
                public CSquare()
                {
                    mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
                }

                // Función que lee el lado del cuadrado.
                public void ReadData(TextBox txtSide)
                {
                    try
                    {
                        mSide = float.Parse(txtSide.Text);
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no válido...", "Mensaje de error");
                    }
                }

                // Función que calcula el perímetro del cuadrado.
                public void PerimeterSquare()
                {
                    mPerimeter = 4 * mSide;
                }

                // Función que calcula el área del cuadrado.
                public void AreaSquare()
                {
                    mArea = (float)Math.Pow(mSide, 2);
                }

                // Función que imprime el perímetro y el área del cuadrado.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }

                // Función que inicializa los datos y controles del cuadrado.
                public void InitializeData(TextBox txtSide, TextBox txtPerimeter,
                                          TextBox txtArea, PictureBox picCanvas)
                {
                    mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;

                    txtSide.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtSide.Focus();
                    picCanvas.Refresh();
                }

                // Función que grafica un cuadrado.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
                    // Graficar un cuadrado en función de un rectángulo.
                    mGraph.DrawRectangle(mPen, 0, 0, mSide * SF, mSide * SF);
                }

                // Función que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }
        `,
        implementacion14: 'La implementación de la clase frmSquare, se presenta a continuación en la Tabla 1.2.3, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica conocida como Cuadrado.',
        tabla3:'Tabla 1.2.3. ',
        tabladetalle3:'Código de la clase frmSquare del programa.',
        tablaDatos3:
        `
        using System;
        using System.Collections.Generic;
        using System.ComponentModel;
        using System.Data;
        using System.Drawing;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Windows.Forms;
        
        namespace WinAppSquare
        {
            public partial class frmSquare : Form
            {
                // Definición de un objeto de tipo CSquare.
                CSquare ObjSquare = new CSquare();
        
                public frmSquare()
                {
                    InitializeComponent();
                }
        
                private void frmSquare_Load(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjSquare.InitializeData(txtSide, txtPerimeter, 
                                             txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Lectura de datos.
                    // Llamada a la función ReadData.
                    ObjSquare.ReadData(txtSide);
                    // Cálculo del perímetro de un cuadrado.
                    // Llamada a la función PerimeterSquare.
                    ObjSquare.PerimeterSquare();
                    // Cálculo del área de un cuadrado.
                    // Llamada a la función AreaSquare.
                    ObjSquare.AreaSquare();
                    // Impresión de datos.
                    // Llamada a la función PrintData.
                    ObjSquare.PrintData(txtPerimeter, txtArea);
                    // Graficación de un cuadrado.
                    // Llamada a la función PlotShape.
                    ObjSquare.PlotShape(picCanvas);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjSquare.InitializeData(txtSide, txtPerimeter,
                                             txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la función CloseForm.
                    ObjSquare.CloseForm(this);
                }
            }
        }        
        `,
        implementacion15: 'La clase frmSquare tiene como datos miembro un objeto de tipo CSquare llamado ObjSquare, el cual es el encargado de acceder a las funciones públicas de la clase CSquare para realizar diferentes cálculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmCircle_Load(), se utiliza el objeto ObjSquare, para llamar a la función pública InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del botón btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjSquare, para llamar a las funciones públicas: ReadData(), PerimeterSquare(), AreaSquare(), PrintData() y PlotShape(). En el evento Click del botón btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjSquare, para llamar a la función pública InitializeData(). En el evento Click del botón btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjSquare, para llamar a la función pública CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicación basta con presionar la tecla F5 o el botón Start de ejecución de la barra de menús de Visual Studio .NET. La Figura 1.2.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la solución porque es relativamente fácil calcular el área y el perímetro manualmente o utilizando una calculadora. Para un valor de un lado igual a 7 se puede observar la gráfica de la figura geométrica en la caja de imagen (picCanvas). El perímetro deberá ser cuatro veces el lado, que también es un valor fácil de calcular manualmente o utilizando una calculadora. El área deberá ser igual al lado elevado al cuadrado, que también es un valor fácil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deberá ingresar unos pocos valores de prueba correspondientes a los lados de algunos cuadrados. No se necesita probar más que con unos pocos casos de prueba para verificar que este programa está correcto.',
        imagen13: './assets/images/Capitulos/I/media/image24.png',
        figuraNum13: 'Figura 1.2.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.3',
      link:'https://drive.google.com/uc?id=1lPw80g-VZS1HeTShlkdSLYjqZgoLnLpb&export=download',
        title: 'Graficar un Círculo y Encontrar el Perímetro y su Área.',
        problema: 'Escribir un programa para graficar un círculo, calcular e imprimir el perímetro y su área. (Ver Figura 1.3.1)',
        formulaA: ['$P=2\\pi r$',
                   '$A=\\pi r^2$'],
        imagen1: './assets/images/Capitulos/I/media/image25.png',
        figuraNum1: 'Figura 1.3.1. ',
        figura1: 'El círculo y sus fórmulas.',
        analisis: 'Claramente, se puede ver que la entrada del problema es el radio del círculo. Hay tres salidas requeridas: el perímetro, el área del círculo y el gráfico de la figura geométrica. Partiendo de un conocimiento básico de geometría, se sabe que hay una relación entre el radio del círculo con el perímetro y con el área de la figura geométrica. Las fórmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$radius$',b:'/* radio del círculo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* perímetro del círculo */'},
          {t:'',a:'$area$',b:'/* área del círculo */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gráfico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$PI = 3.141596$',b:'/* relación entre la longitud de una circunferencia y su diámetro*/'},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'Fórmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=2\\pi r$',b:'/* Fórmula del perímetrode de un círculo */'},
          {t:'',a:'$(2)A=\\pi r^2$',b:'/* Fórmula del área de un círculo */'}],
        diagramaES: 'En la Figura 1.3.2 se muestra el Diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: la variable ‘radius’; b) Salidas: la variable ‘perimetro’, la variable ‘area’ y el objeto ‘graph’; c) Auxiliares: el objeto ‘pen’; d) Constantes: el factor de escalamiento ‘SF’ y la constante PI.',
        imagen2: './assets/images/Capitulos/I/media/image26.png',
        figuraNum2: 'Figura 1.3.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicación se muestra en la Figura 1.3.3 con notación UML. En este diagrama se puede ver que la aplicación está compuesta por seis clases, donde la clase Program se compone por la clase frmCircle que resulta ser una clase derivada de la clase Form. La clase frmCircle se compone de un objeto de tipo CCircle. ',
        diagramaC2: 'La clase CCircle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gráfico de la aplicación y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Además, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geométrica. Los otros atributos que se tienen en la clase CCircle son el radio, el perímetro y el área representados por los datos miembros mRadius, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image27.png',
        figuraNum3: 'Figura 1.3.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.3.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Función ReadData()',a:'1.	Leer el radio del círculo.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Función PerimeterCircle()',a:'1.	Calcular el perímetro.',b:'1.1.	Asignar el producto de dos veces PI por el radio a la variable ‘perimeter’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Función AreaCircle()',a:'1.	Calcular el área.',b:'1.1.	Asignar el producto de PI por el cuadrado del radio a la variable ‘area’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Función PrintData()',a:'1.	Imprimir el valor de la variable ‘perimeter’ y de la variable ‘area’.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Función PlotShape()',a:'1.	Graficar un círculo.',b:'1.1.	Utilizar el objeto ‘Graph’ con la función DrawEllipse para graficar con la pluma ‘Pen’ un círculo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la solución, se deben escribir los algoritmos como una Aplicación para Windows con C# .NET que contenga toda la información necesaria para completar la solución de dicho problema y pueda la aplicación ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcción de esta aplicación, se debe seleccionar la opción de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicación de Windows Forms con el lenguaje C#. En el cuadro de diálogo configure su proyecto con el nombre de WinAppCircle y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmCircle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicación de Windows Forms con el nombre de WinAppCircle, como se muestra en la Figura 1.3.4. Además, cree la clase llamada CCircle con la cual va a trabajar el formulario frmCircle, aplicando el concepto de Composición y Agregación.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image28.png',
        figuraNum8: 'Figura 1.3.4. ',
        figura8: 'Solución WinAppCircle.',
        implementacion7: 'Se necesita añadir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), tres Etiquetas (Labels), tres Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene una Etiqueta (Label) y una Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.3.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.3.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmCircle','Círculo','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbInputs','Entradas','MS Sans Serif, Bold, 8 ']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblRadius','True','Radio:']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtRadius','Blank']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Blank']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnCalculate','Calcular']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbOutputs','Salidas','MS Sans Serif, Bold, 8']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblPerimeter','True','Perimetro:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblArea','True','Area:']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtPerimetro','Blank','False','True']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtArea','Blank','False','True']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gráfico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.3.5.',
        imagen10: './assets/images/Capitulos/I/media/image29.png',
        figuraNum10: 'Figura 1.3.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicación aceptará el ingreso de un valor flotante o entero en una Caja de Texto (TextBox) y desplegará los resultados en otras dos Cajas de Texto (TextBoxes) y el gráfico de la figura se desplegará en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CCircle tiene los siguientes datos miembro: a) mRadius, que representa al radio del círculo que es de tipo float; b) mPerimeter, mArea, que representan al perímetro y al área del rectángulo que son también de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase también posee un grupo de métodos de acuerdo a las acciones que puede hacer y que básicamente serán funciones para poder representar y operar un círculo en el plano, entre las más importantes están las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este método inicializa los primeros tres datos miembros de la clase CCircle con el valor de cero.',
        b:
        `
        // Constructor sin parámetros.
        public CCircle()
        {
           mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        }   
        `
        },
        {t:'b)	Función miembro ReadData. ',a:'Esta función permite leer el valor del radio del círculo ingresads en una caja de texto. En este caso es necesario realizar un casting o conversión de tipo de datos de String a float utilizando la función float.Parse() y además se utiliza la función try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar números ingrese letras por error.',
        b:
        `
        // Función que lee el radio del círculo.
        public void ReadData(TextBox txtRadius)
        {
            try
            {
                mRadius = float.Parse(txtRadius.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no válido...", "Mensaje de error");
            }
         }
    
        `
        },
        {t:'c)	Función miembro Perimeter. ',a:'Esta función permite calcular el perímetro de un círculo, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:`
          // Función que calcula el perímetro del círculo.
          public void PerimeterCircle()
          {
              mPerimeter = 2 * (float)Math.PI * mRadius;
          }      
          `
          },
          {t:'d)	Función miembro Area. ',a:'Esta función permite calcular el área de un círculo, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:
          `
          // Función que calcula el área del círculo.
          public void AreaCircle()
          {
              mArea = (float)Math.PI * (float)Math.Pow(mRadius, 2);
          }      
          `
          },
          {t:'e)	Función miembro PrintData. ',a:'Esta función permite imprimir en cajas de texto los valores del perímetro y del área del círculo calculados, para lo cual es necesario realizar un casting o conversión de tipo float a String, utilizando la función ToString().',
          b:
          `
          // Función que imprime el perímtro y el área del círculo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }
      
          `
          },
          {t:'f)	Función miembro InitializeData. ',a:'Esta función permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los símbolos de comillas dobles (“”). Para inicializar la caja de imagen (picCanvas) se utiliza la función Refresh que significa refrescar o borrar.',
          b:
          ` 
          // Función que inicializa los datos y controles del círculo.
          public void InitializeData(TextBox txtRadius, TextBox txtPerimeter, 
                                     TextBox txtArea, PictureBox picCanvas)
          {
              mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
      
              txtRadius.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
              // Mantiene el cursor titilando en una caja de texto.
              txtRadius.Focus();
              picCanvas.Refresh();
          }
      
          `
          },
          {t:'g)	Función miembro PlotShape. ',a:'Esta función permite graficar un círculo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gráficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un círculo en las coordenadas (0,0) y con los valores del diámetro asignados al ancho y al largo de la elipse multiplicados por un factor de escalamiento, para que la figura no sea muy pequeña.',
          b:
          `
          // Función que grafica un círculo.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);            
              // Graficar un círculo en base a una elipse.
              mGraph.DrawEllipse(mPen, 0, 0, 2 * mRadius * SF, 2 * mRadius * SF);
          }
          `
          },
          {t:'h)	Función miembro CloseForm. ',a:'Esta función permite cerrar un formulario utilizando la función Close(), que es llamada por el objeto ObjForm el cual es un parámetro de la función que recibe un objeto de tipo Form.',
          b:
          `
          // Función que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la función float.Parse() para convertir un tipo de dato carácter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la función ToString() para convertir un tipo de dato numérico a tipo carácter o cadena.'},
                          {tip:'La constante PI cuyo valor es aproximadamente 3.14159, se la utiliza directamente desde la clase Math, que es una clase dedicada a las funciones matemáticas.'}],
        implementacion13: 'La implementación de la clase CCircle, se presenta a continuación en la Tabla 1.3.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.3.2. ',
        tabladetalle2:'Código de la clase CCircle del programa.',
        tablaDatos2:
        `
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Drawing;
        using System.Windows.Forms;
        
        namespace WinAppCircle
        {
            class CCircle
            {
                // Datos Miembro (Atributos).
        
                // Radio del círculo.
                private float mRadius;        
                // Perímetro del círculo.
                private float mPerimeter;
                // Área del círculo.
                private float mArea;
                // Objeto que activa el modo gráfico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bolígrafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                
                // Funciones Miembro (Métodos).
        
                // Constructor sin parámetros.
                public CCircle()
                {
                    mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
                }        
        
                // Función que lee el radio del círculo.
                public void ReadData(TextBox txtRadius)
                {
                    try
                    {
                        mRadius = float.Parse(txtRadius.Text);                
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no válido...",
                                        "Mensaje de error");
                    }
                }
        
                // Función que calcula el perímetro del círculo.
                public void PerimeterCircle()
                {
                    mPerimeter = 2 * (float)Math.PI * mRadius;
                }
        
                // Función que calcula el área del círculo.
                public void AreaCircle()
                {
                    //mArea = (float)Math.PI * mRadius * mRadius;
                    mArea = (float)Math.PI * (float)Math.Pow(mRadius, 2);
                }
        
                // Función que imprime el perímetro y el área del círculo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }
        
                // Función que inicializa los datos y controles del círculo.
                public void InitializeData(TextBox txtRadius, TextBox txtPerimeter, 
                                           TextBox txtArea, PictureBox picCanvas)
                {
                    mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        
                    txtRadius.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtRadius.Focus();
                    picCanvas.Refresh();
                }
        
                // Función que grafica un círculo.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);            
                    // Graficar un círculo en base a una elipse.
                    mGraph.DrawEllipse(mPen, 0, 0, 2 * mRadius * SF, 2 * mRadius * SF);
                }
        
                // Función que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }        
            }
        }        
        `,
        implementacion14: 'La implementación de la clase frmCircle, se presenta a continuación en la Tabla 1.3.3, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica conocida como Círculo.',
        tabla3:'Tabla 1.3.3. ',
        tabladetalle3:'Código de la clase frmCircle del programa.',
        tablaDatos3:
        `
        using System;
        using System.Collections.Generic;
        using System.ComponentModel;
        using System.Data;
        using System.Drawing;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Windows.Forms;
        
        namespace WinAppCircle
        {
            public partial class frmCircle : Form
            {
                // Definición de un objeto de tipo CCircle.
                private CCircle ObjCircle = new CCircle();
        
                public frmCircle()
                {
                    InitializeComponent();
                }
        
                private void frmCircle_Load(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjCircle.InitializeData(txtRadius, txtPerimeter, 
                                             txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Lectura de datos.
                    // Llamada a la función ReadData.
                    ObjCircle.ReadData(txtRadius);
                    // Cálculo del perímetro de un círculo.
                    // Llamada a la función PerimeterCircle.
                    ObjCircle.PerimeterCircle();
                    // Cálculo del área de un círculo.
                    // Llamada a la función AreaCircle.
                    ObjCircle.AreaCircle();
                    // Impresión de datos.
                    // Llamada a la función PrintData.
                    ObjCircle.PrintData(txtPerimeter, txtArea);
                    // Graficación de un círculo.
                    // Llamada a la función PlotShape.
                    ObjCircle.PlotShape(picCanvas);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjCircle.InitializeData(txtRadius, txtPerimeter,
                                             txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la función CloseForm.
                    ObjCircle.CloseForm(this);
                }
            }
        }                
        `,
        implementacion15: 'La clase frmCircle tiene como datos miembro un objeto de tipo CCircle llamado ObjCircle, el cual es el encargado de acceder a las funciones públicas de la clase CCircle para realizar diferentes cálculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmCircle_Load(), se utiliza el objeto ObjCircle, para llamar a la función pública InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del botón btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjCircle, para llamar a las funciones públicas: ReadData(), PerimeterCircle(), AreaCircle(), PrintData() y PlotShape(). En el evento Click del botón btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjCircle, para llamar a la función pública InitializeData(). En el evento Click del botón btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjCircle, para llamar a la función pública CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicación basta con presionar la tecla F5 o el botón Start de ejecución de la barra de menús de Visual Studio .NET. La Figura 1.3.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la solución porque es relativamente fácil calcular el área y el perímetro manualmente o utilizando una calculadora. Para un valor de radio igual a 4 se puede observar la gráfica de la figura geométrica en la caja de imagen (picCanvas). El perímetro deberá ser dos veces el radio multiplicado por el valor de PI, que también es un valor fácil de calcular manualmente o utilizando una calculadora. El área deberá ser igual al producto de PI por el valor del radio elevado al cuadrado, que también es un valor fácil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deberá ingresar unos pocos valores de prueba correspondientes a los radios de algunos círculos. No se necesita probar más que con unos pocos casos de prueba para verificar que este programa está correcto. ',
        imagen13: './assets/images/Capitulos/I/media/image30.png',
        figuraNum13: 'Figura 1.3.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.4',
      link:'https://drive.google.com/uc?id=1Qbj5I3NDx8_kmQl7j8u-pjCsjxrEGy24&export=download',
        title: 'Graficar un Triángulo y Encontrar el Perímetro y su Área.',
        problema: 'Escribir un programa para graficar un triángulo, calcular e imprimir el perímetro y su área en función del semi-perímetro. Además, validar la existencia de un triángulo. (Ver Figura 1.4.1)',
        formulaA: ['$P=a+b+c$',
                   '$s=\\frac{a+b+c}{2}$',
                   '$A=\\sqrt{s\\times(s-a)\\times(s-b)\\times(s-c)}$'],
        imagen1: './assets/images/Capitulos/I/media/image31.png',
        figuraNum1: 'Figura 1.4.1. ',
        figura1: 'El Triángulo y sus fórmulas.',
        analisis: 'Claramente, se puede ver que las entradas del problema son los tres lados del triángulo. Hay tres salidas requeridas: el perímetro, el área del triángulo y el gráfico de la figura geométrica. Partiendo de un conocimiento básico de geometría, se sabe que hay una relación entre los tres lados del triángulo con el perímetro, con el semi-perímetro y con el área de la figura geométrica. Las fórmulas requeridas se incluyen en el requerimiento de los datos. En este programa referente al triángulo se considera la validación de la existencia de un triángulo cuyo Teorema expresa que un triángulo cualquiera existe si y sólo si la suma de cualquiera de sus dos lados es mayor que el tercer lado: (a+b>c)∧(a+c>b)∧(b+c>a).',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$a$',b:'/* lado 1 del triángulo */'},
          {t:'',a:'$b$',b:'/* lado 2 del triángulo */'},
          {t:'',a:'$c$',b:'/* lado 3 del triángulo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* perímetro del triángulo */'},
          {t:'',a:'$area$',b:'/* área del triángulo */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gráfico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$s$',b:'/* semi-perímetro del triángulo */'},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 10$',b:'/* factor de escalamiento  */'},
          {t:'Fórmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=a+b+c$',b:'/* Fórmula del perímetrode de un triángulo */'},
          {t:'',a:'$(2)s=\\frac{a+b+c}{2}$',b:'/* Fórmula del semi-perímetro de un triángulo */'},
          {t:'',a:'$(3)A=\\sqrt{s\\times(s-a)\\times(s-b)\\times(s-c)}$',b:'/* Fórmula del área de un triángulo (Fórmula de Herón) */'}],
        diagramaES: 'En la Figura 1.4.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas y salidas del problema como son: a) Entradas: la variable ‘a’ (lado 1), la variable ‘b’ (lado 2), la variable ‘c’ (lado 3); b) Salidas: la variable ‘perimetro’, la variable ‘area’ y el objeto ‘graph’; c) Auxiliares: la variable ‘s’ (semiperímetro) y el objeto ‘pen’; d) Constantes: el factor de escalamiento ‘SF’.',
        imagen2: './assets/images/Capitulos/I/media/image32.png',
        figuraNum2: 'Figura 1.4.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicación se muestra en la Figura 1.4.3 con notación UML. En este diagrama se puede ver que la aplicación está compuesta por seis clases, donde la clase Program se compone por la clase frmTriangle que resulta ser una clase derivada de la clase Form. La clase frmTriangle se compone de un objeto de tipo CTriangle. ',
        diagramaC2: 'La clase CTriangle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gráfico de la aplicación y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Además, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geométrica. Los otros atributos que se tienen en la clase CTriangle son los tres lados del triángulo, el perímetro y el área representados por los datos miembros a, b, c, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image33.png',
        figuraNum3: 'Figura 1.4.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.4.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Función ReadData()',a:'1.	Leer el lado 1 del triángulo.',b:'2.	Leer el lado 2 del triángulo.',c:'3.	Leer el lado 3 del triángulo.',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Función CheckTriangle()',a:'	Si la suma de cualquiera de los dos lados es mayor que el tercero, es decir, si se cumple la condición del teorema: (a+b>c)∧(a+c>b)∧(b+c>a), retornar un valor booleano con verdadero, caso contrario retornar un valor booleano con falso.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Función SemiperimeterTriangle()',a:'1.	Calcular el semi-perímetro.',b:'1.1.	Asignar el resultado de la división entre la suma de los tres lados dividido para dos, a la variable ‘s’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Función PerimeterTriangle()',a:'1.	Calcular el perímetro.',b:'1.1.	Asignar el resultado del producto entre el semi-perímetro por dos a la variable ‘perimetro’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Función AreaTriangle()',a:'1.	Calcular el área.',b:'1.1.	Asignar el valor de la raíz cuadrada del semi-perímetro multiplicado por la diferencia entre el semi-perímetro por cada uno de los lados del triángulo, a la variable ‘area’.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.6. Algoritmo de la Función PrintData()',a:'1.	Imprimir el valor de la variable ‘perimeter’ y de la variable ‘area’.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.7. Algoritmo de la Función PlotShape()',a:'1.	Graficar un triángulo.',b:'1.1.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ tres líneas que unen los vértices A, B y C del triángulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},        ],
        tituloGeometria:'+)   Geometría del Triángulo',
        geometria:[
                  {
                    p:[
                      {
                        t:'Problema:',
                        d:'Dados los tres lados de un triángulo, encontrar los valores de los vértices en coordenadas rectangulares y graficar las líneas del triángulo, considerando que uno de sus lados se encuentra sobre el eje de las ‘x’ y uno de sus vértices es el origen. (Ver Figura 1 y 2). ',
                        i:[
                          {
                            path:'./assets/images/Capitulos/I/media/image34.png',
                            titulo:'Figura 1. ',
                            descriptitulo:'Triángulo en el mundo real.'
                          },
                          {
                            path:'./assets/images/Capitulos/I/media/image35.png',
                            titulo:'Figura 2. ',
                            descriptitulo:'Triángulo en el mundo de la Computación Gráfica.'
                          }
                          ]
                      }
                      ], 
                    s:[
                      {
                        t:'Solución:',
                        pasos:[
                              {
                                d:'Dados los siguientes puntos:',
                                formulas:[
                                          '$A(0,0)=P_{1}(x_{1},y_{1})$',
                                          '$B(x_{B},0)=P_{2}(x_{2},y_{2})$',
                                          '$C(x_{C},y_{C})=P_{3}(x_{3},y_{3})$'
                                         ]
                              },
                              {
                                d:'Calculamos la distancia AB:',
                                formulas:[
                                          '$d_{AB}=d_{P_{1}P_{2}}=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}=c$',
                                          '$c=\\sqrt{(x_{2}-0)^{2}+(0-0)^{2}}$',
                                          '$c=\\sqrt{(x_{2})^{2}}$',
                                          '$c=x_{2}\\Rightarrow(1)$'
                                         ]
                              },
                              {
                                d:'Por lo tanto, las coordenadas del punto P1 y P2 son:',
                                formulas:[
                                          '$A(0,0)=P_{1}(0,0)\\Rightarrow(2)$',
                                          '$B(x_{B},0)=P_{2}(c,0)\\Rightarrow(3)$'
                                         ]
                              },
                              {
                                d:'Para calcular el valor del ángulo A, se utilizando la Ley de Cosenos:',
                                formulas:[
                                          '$\\cos(A)=\\frac{b^{2}+c^{2}-a^{2}}{2bc}$',
                                          '$A=\\arccos\\left(\\frac{b^{2}+c^{2}-a^{2}}{2bc}\\right)$'
                                         ]
                              },
                              {
                                d:'Calculamos el valor de la pendiente AC:',
                                formulas:[
                                          '$m_{AC}=\\frac{y_{3}-y_{1}}{x_{3}-x_{1}}=\\tan(A)$',
                                          '$\\tan(A)=\\frac{y_{3}-0}{x_{3}-0}$',
                                          '$\\tan(A)=\\frac{y_{3}}{x_{3}}$'
                                         ]
                              },
                              {
                                d:'Despejamos el valor de y3 donde obtenemos la siguiente ecuación:',
                                formulas:[
                                          '$y_{3}=x_{3}\\times\\tan(A)\\Rightarrow(4)$'
                                         ]
                              },
                              {
                                d:'Calculamos la distancia AC:',
                                formulas:[
                                          '$d_{AC}=d_{P_{1}P_{2}}=\\sqrt{(x_{3}-x_{1})^{2}+(y_{3}-y_{1})^{2}}=b$',
                                          '$b=\\sqrt{(x_{3}-0)^{2}+(y_{3}-0)^{2}}$',
                                          '$b=\\sqrt{(x_{3})^{2}+(y_{3})^{2}}\\Rightarrow(5)$'
                                         ]
                              },
                              {
                                d:'Reemplazamos el valor de y3 de la ecuación (4) en la ecuación (5) y calculamos el valor de x3:',
                                formulas:[
                                          '$b=\\sqrt{(x_{3})^{2}+(x_{3}\\times\\tan(A))^{2}}$',
                                          '$b=\\sqrt{(x_{3})^{2}+(x_{3})^{2}\\times\\tan^{2}(A)}$',
                                          '$b=\\sqrt{(x_{3})^{2}\\times(1+\\tan^{2}(A))}$',
                                          '$b=x_{3}\\times\\sqrt{1+\\tan^{2}(A)}$'
                                         ]
                              },
                              {
                                d:'Despejamos el valor de x3 y luego racionalizamos la expresión:',
                                formulas:[
                                          '$x_{3}=\\frac{b}{\\sqrt{1+\\tan^{2}(A)}}\\times\\frac{\\sqrt{1+\\tan^{2}(A)}}{\\sqrt{1+\\tan^{2}(A)}}$',
                                          '$x_{3}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\Rightarrow(6)$'
                                         ]
                              },
                              {
                                d:'Reemplazamos el valor de x3 de la ecuación (6) en la ecuación (4) y calculamos el valor de y3:',
                                formulas:[
                                          '$y_{3}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\times\\tan(A)\\Rightarrow(7)$'
                                         ]
                              },
                              {
                                d:'Por lo tanto, las coordenadas del punto P3 son:',
                                formulas:[
                                          '$C(x_{C},y_{C})=P_{3}\\left(\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)},\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\times\\tan(A)\\right)\\Rightarrow(8)$'
                                         ]
                              },
                              {
                                d:'Aplicando las siguientes identidades trigonométricas:',
                                formulas:[
                                          '$\\sec^{2}(A)=1+\\tan^{2}(A)\\Rightarrow(9)$',
                                          '$\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}\\Rightarrow(10)$',
                                          '$\\sec(A)=\\frac{1}{\\cos(A)}\\Rightarrow(11)$'
                                         ]
                              },
                              {
                                d:'Se simplicifica la ecuación (8) de la siguiente manera:',
                                formulas:[
                                          '$x_{C}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}=\\frac{b\\times\\sqrt{\\sec^{2}(A)}}{\\sec^{2}(A)}=\\frac{b\\times\\sec(A)}{\\sec^{2}(A)}=\\frac{b}{\\sec(A)}=\\frac{b}{\\frac{1}{\\cos(A)}}=b\\times\\cos(A)$',
                                          '$x_{C}=b\\times\\cos(A)\\Rightarrow(12)$',
                                          '$y_{C}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\times\\tan(A)=x_{C}\\times\\tan(A)=b\\times\\cos(A)\\times\\tan(A)=b\\times\\cos(A)\\times\\frac{\\sin(A)}{\\cos(A)}=b\\times\\sin(A)$',
                                          '$y_{C}=b\\times\\sin(A)\\Rightarrow(13)$'
                                         ]
                              },
                              {
                                d:'Finalmente, se obtiene las coordenadas del punto P3 en función de senos y cosenos:',
                                formulas:[
                                          '$C(x_{C},y_{C})=P_{3}(b\\times\\cos(A),b\\times\\sin(A))\\Rightarrow(14)$'
                                         ]
                              }
                              ]
                      }
                      ]
                  }
                  ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la solución, se deben escribir los algoritmos como una Aplicación para Windows con C# .NET que contenga toda la información necesaria para completar la solución de dicho problema y pueda la aplicación ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcción de esta aplicación, se debe seleccionar la opción de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicación de Windows Forms con el lenguaje C#. En el cuadro de diálogo configure su proyecto con el nombre de WinAppTriangle y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmTriangle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicación de Windows Forms con el nombre de WinAppTriangle, como se muestra en la Figura 1.4.4. Además, cree la clase llamada CTriangle con la cual va a trabajar el formulario frmTriangle, aplicando el concepto de Composición y Agregación.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image36.png',
        figuraNum8: 'Figura 1.4.4. ',
        figura8: 'Solución WinAppTriangle.',
        implementacion7: 'Se necesita añadir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cinco Etiquetas (Labels), cinco Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene tres Etiquetas (Label) y tres Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.4.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.4.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmTriangle','Triángulo','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbInputs','Entradas','MS Sans Serif, Bold, 8 ']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblSideA','True','Lado a:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblSideB','True','Lado b:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblSideC','True','Lado c:']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtSideA','Blank']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtSideB','Blank']},
          {Objeto:'TextBox',Propiedad:['Name','Text'],Valor:['txtSideC','Blank']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Blank']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnCalculate','Calcular']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbOutputs','Salidas','MS Sans Serif, Bold, 8']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblPerimeter','True','Perimetro:']},
          {Objeto:'Label',Propiedad:['Name','AutoSize','Text'],Valor:['lblArea','True','Area:']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtPerimetro','Blank','False','True']},
          {Objeto:'TextBox',Propiedad:['Name','Text','Enabled','Locked'],Valor:['txtArea','Blank','False','True']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gráfico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.4.5.',
        imagen10: './assets/images/Capitulos/I/media/image37.png',
        figuraNum10: 'Figura 1.4.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicación aceptará el ingreso de un valor flotante o entero en tres Cajas de Texto (TextBox) y desplegará los resultados en otras dos Cajas de Texto (TextBoxes) y el gráfico de la figura se desplegará en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CTriangle tiene los siguientes datos miembro: a) a, b y c, que representan a los tres lados del triángulo que son de tipo float; b) mPerimeter, mArea, que representan al perímetro y al área del rectángulo que son también de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase también posee un grupo de métodos de acuerdo a las acciones que puede hacer y que básicamente serán funciones para poder representar y operar un triángulo en el plano, entre las más importantes están las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este método inicializa los primeros cinco datos miembros de la clase CTriangle con el valor de cero.',
        b:
        `
        // Constructor sin parámetros.
        public CTriangle()
        {
            a = 0.0f; b = 0.0f; c = 0.0f;
            perimeter = 0.0f; area = 0.0f;
        }   
        `
        },
        {t:'b)	Función miembro ReadData. ',a:'Esta función permite leer los tres valores de los lados del triángulo ingresados en cajas de texto. En este caso es necesario realizar un casting o conversión de tipo de datos de String a float utilizando la función float.Parse() y además se utiliza la función try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar números ingrese letras por error.',
        b:
        `
        // Función que lee los tres lados del triángulo.
        public void ReadData(TextBox txtSideA,
                             TextBox txtSideB,
                             TextBox txtSideC)
        {
           try
           {
               a = float.Parse(txtSideA.Text);
               b = float.Parse(txtSideB.Text);
               c = float.Parse(txtSideC.Text);
           }
           catch
           {
               MessageBox.Show("Ingreso no válido...");
           }
         }   
        `
        },
        {t:'c)	Función miembro Semiperimeter. ',a:'Esta función permite calcular el semi-perímetro de un triángulo, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos. Esta función al ser privada no puede ser accedida por un objeto sino solo puede ser llamada por otras funciones dentro de la clase CTriangle.',
        b:
        `
        // Función que calcula el semi-perímetro del triángulo.
        private float SemiperimeterTriangle()
        {
            return ((a + b + c) / 2);
        } 
        `
        },
        {t:'d)	Función miembro Perimeter. ',a:'Esta función permite calcular el perímetro de un triángulo en función de su semi-perímetro, para lo cual se utiliza una fórmula matemática para poder realizar de esta manera los respectivos cálculos.',
          b:
          `
          // Función que calcula el perímetro del triángulo.
          public void PerimeterTriangle()
          {
              float s = SemiperimeterTriangle();
              perimeter = 2 * s;
          }     
          `
          },
          {t:'e)	Función miembro Area. ',a:'Esta función permite calcular el área de un triángulo en función de su semi-perímetro, para lo cual se utiliza la fórmula matemática de Herón para poder realizar de esta manera los respectivos cálculos.',
          b:
          `
          // Función que calcula el área del triángulo.
          public void AreaTriangle()
          {
              float s = SemiperimeterTriangle();
              area = (float)Math.Sqrt(s * (s - a) * (s - b) * (s - c));
          }      
          `
          },
          {t:'f)	Función miembro PrintData. ',a:'Esta función permite imprimir en cajas de texto los valores del perímetro y del área del círculo calculados, para lo cual es necesario realizar un casting o conversión de tipo float a String, utilizando la función ToString()',
          b:
          `
          // Función que imprime el perímetro y el área del triángulo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }      
          `
          },
          {t:'g)	Función miembro InitializeData. ',a:'Esta función permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los símbolos de comillas dobles (“”). Para inicializar la caja de imagen (picCanvas) se utiliza la función Refresh que significa refrescar o borrar.',
          b:
          `// Función que inicializa los datos y controles del triángulo.
          public void InitializeData(TextBox txtSideA, TextBox txtSideB,
                                     TextBox txtSideC, TextBox txtPerimeter,
                                     TextBox txtArea, PictureBox picCanvas)
          {
              a = 0.0f; b = 0.0f; c = 0.0f;
              perimeter = 0.0f; area = 0.0f;
              txtSideA.Text = ""; txtSideB.Text = ""; txtSideC.Text = "";
              txtPerimeter.Text = ""; txtArea.Text = "";
              // Mantiene el cursor titilando en una caja de texto.
              txtSideA.Focus();            
              picCanvas.Refresh();
          }     
          `
          },
          {t:'h)	Función miembro CheckTriangle. ',a:'Esta función permite verificar la existencia de un triángulo utilizando un teorema matemático. La función retorna un valor booleano verdadero si existe el triángulo y retorna un valor booleano falso si no existe el triángulo.',
          b:
          `
          // Función que valida la existencia de un triángulo.
          public bool CheckTriangle()
          {
              if ((a + b > c) && (a + c > b) && (b + c > a))
              {
                  return (true);
              }
              else // !((mA + mB > mC) && (mA + mC > mB) && (mB + mC > mA))
                  return (false);
          }      
          `
          },
          {t:'i)	Función miembro CalculateAngleA.',a:'Esta función permite calcular el ángulo A de un triángulo cualquiera, utilizando las leyes trigonométricas de los cosenos.',
          b:
          `
          // Función que calcula el ángulo A del triángulo.
          private void CalculateAngleA()
          {
              angleA = (float)Math.Acos((b * b + c * c - a * a) / (2 * b * c));
          }
          `
          },
          {t:'j)	Función miembro CalculateVertex.',a:'Esta función permite calcular los vértices del triángulo en función del ángulo A y utilizando las fórmulas geométricas considerando que uno de los vértices (A) está sobre el origen y otro vértice (B) sobre el eje de las ‘x’.',
          b:
          `
          // Función que calcula los valores de los tres vértices del triángulo.  
          private void CalculateVertex()
          {
              A.X = 0.0f; A.Y = 0.0f;
              B.X = c; B.Y = 0.0f;
      
              CalculateAngleA();
      
              C.X = b * (float)Math.Cos(angleA);
              C.Y = b * (float)Math.Sin(angleA);
          }      
          `
          },
          {t:'k)	Función miembro PlotShape.',a:'Esta función permite graficar un triángulo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gráficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un triángulo en las coordenadas (0,0), utilizando tres vértices multiplicados por un factor de escalamiento y tres líneas que permiten unir los vértices de dos en dos.',
          b:
          `
          // Función que grafica un triángulo en base a los tres
          // vértices, representados por tres puntos en un plano.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
      
              CalculateVertex();
      
              // Graficar las tres líneas que conforman un triángulo.
              mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, B.X * SF, B.Y * SF);
              mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, C.X * SF, C.Y * SF);
              mGraph.DrawLine(mPen, B.X * SF, B.Y * SF, C.X * SF, C.Y * SF);
          }      
          `
          },
          {t:'l)	Función miembro CloseForm.',a:'Esta función permite cerrar un formulario utilizando la función Close(), que es llamada por el objeto ObjForm el cual es un parámetro de la función que recibe un objeto de tipo Form.',
          b:
          `// Función que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }            
          `
          }
        ],
        tipsProgramacion:[{tip:'Se utiliza la función float.Parse() para convertir un tipo de dato carácter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la función ToString() para convertir un tipo de dato numérico a tipo carácter o cadena.'}
                          ],
        implementacion13: 'La implementación de la clase CTriangle, se presenta a continuación en la Tabla 1.4.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.4.2. ',
        tabladetalle2:'Código de la clase CTriangle del programa.',
        tablaDatos2:
        `
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Drawing;
        using System.Windows.Forms;
        
        namespace WinAppTriangle
        {
            class CTriangle
            {
                // Datos Miembro (Atributos).
        
                // Lado 1 del triángulo.
                private float a;
                // Lado 2 del triángulo.
                private float b;
                // Lado 3 del triángulo.
                private float c;
                // Perímetro del triángulo.
                private float perimeter;
                // Área del triángulo.
                private float area;
                // Objeto que activa el modo gráfico.
                private Graphics mGraph;
                // Objeto bolígrafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 10;
                // Objeto Punto que representa al vértice A del triángulo.
                private PointF A;
                // Objeto Punto que representa al vértice B del triángulo.
                private PointF B;
                // Objeto Punto que representa al vértice C del triángulo.
                private PointF C;
                // Ángulo A del triángulo.
                private float angleA;
        
                // Funciones Miembro (Métodos).
        
                // Constructor sin parámetros.
                public CTriangle()
                {
                    a = 0.0f; b = 0.0f; c = 0.0f;
                    perimeter = 0.0f; area = 0.0f;
                }
                        
                // Función que lee los tres lados del triángulo.
                public void ReadData(TextBox txtSideA,
                                     TextBox txtSideB,
                                     TextBox txtSideC)
                {
                    try
                    {
                        a = float.Parse(txtSideA.Text);
                        b = float.Parse(txtSideB.Text);
                        c = float.Parse(txtSideC.Text);
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no válido...");
                    }
                }
        
                // Función que calcula el semi-perímetro del triángulo.
                private float SemiperimeterTriangle()
                {
                    return ((a + b + c) / 2);
                }
        
                // Función que calcula el perímetro del triángulo.
                public void PerimeterTriangle()
                {
                    float s = SemiperimeterTriangle();
                    perimeter = 2 * s;
                }
        
                // Función que calcula el área del triángulo.
                public void AreaTriangle()
                {
                    float s = SemiperimeterTriangle();
                    area = (float)Math.Sqrt(s * (s - a) * (s - b) * (s - c));
                }
        
                // Función que imprime el perímetro y el área del triángulo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = perimeter.ToString();
                    txtArea.Text = area.ToString();
                }
        
                // Función que inicializa los datos y controles del triángulo.
                public void InitializeData(TextBox txtSideA, TextBox txtSideB,
                                           TextBox txtSideC, TextBox txtPerimeter,
                                           TextBox txtArea, PictureBox picCanvas)
                {
                    a = 0.0f; b = 0.0f; c = 0.0f;
                    perimeter = 0.0f; area = 0.0f;
                    txtSideA.Text = ""; txtSideB.Text = ""; txtSideC.Text = "";
                    txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtSideA.Focus();            
                    picCanvas.Refresh();
                }
        
                // Función que valida la existencia de un triángulo.
                public bool CheckTriangle()
                {
                    if ((a + b > c) && (a + c > b) && (b + c > a))
                    {
                        return (true);
                    }
                    else // !((mA + mB > mC) && (mA + mC > mB) && (mB + mC > mA))
                        return (false);
                }
        
                // Función que calcula el ángulo A del triángulo.
                private void CalculateAngleA()
                {
                    angleA = (float)Math.Acos((b * b + c * c - a * a) / (2 * b * c));
                }
        
                // Función que calcula los valores de los tres vértices del triángulo.  
                private void CalculateVertex()
                {
                    A.X = 0.0f; A.Y = 0.0f;
                    B.X = c; B.Y = 0.0f;
        
                    CalculateAngleA();
        
                    C.X = b * (float)Math.Cos(angleA);
                    C.Y = b * (float)Math.Sin(angleA);
                }
        
                // Función que grafica un triángulo en base a los tres
                // vértices, representados por tres puntos en un plano.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
        
                    CalculateVertex();
        
                    // Graficar las tres líneas que conforman un triángulo.
                    mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, B.X * SF, B.Y * SF);
                    mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, C.X * SF, C.Y * SF);
                    mGraph.DrawLine(mPen, B.X * SF, B.Y * SF, C.X * SF, C.Y * SF);
                }
        
                // Función que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }                
        `,
        implementacion14: 'La implementación de la clase frmTriangle, se presenta a continuación en la Tabla 1.4.3, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica conocida como Triángulo.',
        tabla3:'Tabla 1.4.3. ',
        tabladetalle3:'Código de la clase frmTriangle del programa.',
        tablaDatos3:
        `
        using System;
        using System.Collections.Generic;
        using System.ComponentModel;
        using System.Data;
        using System.Drawing;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Windows.Forms;
        
        namespace WinAppTriangle
        {
            public partial class frmTriangle : Form
            {
                // Definición de un objeto de tipo CTriangle.
                private CTriangle ObjCTriangle = new CTriangle();
        
                public frmTriangle()
                {
                    InitializeComponent();
                }
        
                private void frmTriangle_Load(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjCTriangle.InitializeData(txtSideA, txtSideB, txtSideC,
                                                txtPerimeter, txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Declaración de una variable boolena.
                    bool Validate;
        
                    // Lectura de datos.
                    // Llamada a la función ReadData.
                    ObjCTriangle.ReadData(txtSideA, txtSideB, txtSideC);
                    // Verificación de la existencia de un triángulo.
                    // Llamada a la función CheckTriangle.
                    Validate = ObjCTriangle.CheckTriangle();
        
                    // Si el valor de la variable booleana es verdadero,
                    // entonce existe y se realizan algunos cálculos.
                    if (Validate == true)
                    {
                        // Cálculo del perímetro de un triángulo.
                        // Llamada a la función PerimeterTriangle.
                        ObjCTriangle.PerimeterTriangle();
                        // Cálculo del área de un triángulo.
                        // Llamada a la función AreaTriangle.
                        ObjCTriangle.AreaTriangle();
                        // Impresión de datos.
                        // Llamada a la función PrintData.
                        ObjCTriangle.PrintData(txtPerimeter, txtArea);
                        // Graficación de un triángulo.
                        // Llamada a la función PlotShape.
                        ObjCTriangle.PlotShape(picCanvas);
                    }
                    // Caso Contrario, el triángulo no existe.
                    else // !(Validate == true)
                    {
                        MessageBox.Show("Error...el triángulo no existe.",
                                        "Mensaje de error");
                    }
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjCTriangle.InitializeData(txtSideA, txtSideB, txtSideC,
                                                txtPerimeter, txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la función CloseForm.
                    ObjCTriangle.CloseForm(this);
                }
            }
        }                      
        `,
        implementacion15: 'La clase frmTriangle tiene como datos miembro un objeto de tipo CTriangle llamado ObjTriangle, el cual es el encargado de acceder a las funciones públicas de la clase CTriangle para realizar diferentes cálculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmTriangle_Load(), se utiliza el objeto ObjTriangle, para llamar a la función pública InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del botón btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjTriangle, para llamar a las funciones públicas: ReadData(), CheckTriangle, PerimeterRectangle(), AreaRectangle(), PrintData() y PlotShape(). En el evento Click del botón btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjTriangle, para llamar a la función pública InitializeData(). En el evento Click del botón btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjTriangle, para llamar a la función pública CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicación basta con presionar la tecla F5 o el botón Start de ejecución de la barra de menús de Visual Studio .NET. La Figura 1.4.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la solución porque es relativamente fácil calcular el área y el perímetro manualmente o utilizando una calculadora. Para los valores de los tres lados que corresponde a 19, 16 y 17, se puede observar la gráfica de la figura geométrica en la caja de imagen (picCanvas). El perímetro deberá ser dos veces el semi-perímetro, que también es un valor fácil de calcular manualmente o utilizando una calculadora. El área deberá ser igual a la fpormula de Herón, que se puede calcular utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deberá ingresar unos pocos valores de prueba correspondientes a los tres lados de un triángulo. No se necesita probar más que con unos pocos casos de prueba para verificar que este programa está correcto.',
        imagen13: './assets/images/Capitulos/I/media/image38.png',
        figuraNum13: 'Figura 1.4.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.5',
      link:'https://drive.google.com/uc?id=17GUBj_CzW7L3A1Ib9EAJIZeaDm2R0Zva&export=download',
        title: 'Graficar un grupo de líneas utilizando el ratón.',
        problema: 'Escribir un programa para graficar un grupo de líneas continuas, donde cada línea se dibuja en función de dos puntos, utilizando el clic izquierdo del ratón. La línea inicial parte desde el origen O(0,0) y la segunda línea comienza en donde terminó la primera, la tercera línea comienza en donde terminó la segunda y así sucesivamente. Además, se debe considerar utilizar dos círculos pequeños o dos rectángulos pequeños para representar graficamente los dos puntos que tiene cada línea. (Ver Figura 1.5.1).',
        formulaA: [],
        imagenCaso5: './assets/images/Capitulos/I/media/image39.png',
        figuraNum1: 'Figura 1.5.1. ',
        figura1: 'Líneas utilizando el ratón.',
        analisis: 'Claramente, se puede ver que las entradas del problema son los dos puntos que conforman la línea, es decir, el punto inicial y el punto final. Hay una sola salida requerida que es un objeto de tipo Graphics que permite dibujar una línea uniendo los dos puntos y dibujar un círculo o rectángulo que representan a los dos puntos que definen una línea. Los datos auxiliares del problema son los mismos dos puntos que se pueden reutilizar para graficar una nueva línea y además se necesitan dos bolígrafos para dibujo.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$StartPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$EndPoint$',b:'/* objeto de tipo Point */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gráfico y que se lo utiliza para dibujar una línea, un círculo o de un rectángulo */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$StartPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$EndPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$LinePen$',b:'/* bolígrafo utilizado para dibujar una línea */'},
          {t:'',a:'$EllipsePen$',b:'/* bolígrafo utilizado para dibujar un círculo o un rectángulo */'},
          ],
        diagramaES: 'En la Figura 1.5.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas y salidas del problema como son: a) Entradas: los objetos StartPoint y EndPoint de tipo Point; b) Salidas: un objeto graph de tipo Graphics; c) Auxiliares: los objetos StartPoint y EndPoint de tipo Point y los bolígrafos para dibujo LinePen y EllipsePen de tipo Pen.',
        imagen2: './assets/images/Capitulos/I/media/image40.png',
        figuraNum2: 'Figura 1.5.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicación se muestra en la Figura 1.3.3 con notación UML. En este diagrama se puede ver que la aplicación está compuesta por seis clases, donde la clase Program se compone por la clase frmLines que resulta ser una clase derivada de la clase Form. La clase frmLines se compone de un objeto de tipo CLine. ',
        diagramaC2: 'La clase CLinese compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gráfico de la aplicación y de dos objetos de tipo Pen llamados mLinePen, y mEllipsePen para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Los otros atributos que se tienen en la clase CLine son los puntos que representan a una línea llamados mStartPoint y mEndPoint de tipo Point. ',
        imagen3: './assets/images/Capitulos/I/media/image41.png',
        figuraNum3: 'Figura 1.5.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.5.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Función InitializeData()',a:'1.	Inicializar los el punto inicial y final con el valor de cero en las coordenadas ‘x’ e ‘y’.',b:'2.	Borrar el contenido de la caja de imagen picCanvas.',c:'3.	Asignar con el valor booleano de false a la caja de verificación chkPoint.',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Función DrawLineMouse()',a:'1.	Si se ha seleccionado el botón izquierdo del ratón, entonces:',b:'1.1.	Asignar la funcionalidad de crear gráficos al objeto mGraph.',c:'1.2.	Asignar el valor del punto final al punto inicial.',d:'1.3.	Asignar al punto final el valor de las coordenadas del ratón en ‘x’ e ‘y’.',e:'1.4.	Dibujar una línea desde el punto actual hasta el nuevo punto.',f:'',g:'',h:'',i:'1.5.	Dibujar un círculo para representa a un punto en el plano.',j:'1.6.	Desechar los dos objetos bolígrafo de tipo Pen.',k:'1.7. Desechar el objeto graph de tipo Graphics.'},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la solución, se deben escribir los algoritmos como una Aplicación para Windows con C# .NET que contenga toda la información necesaria para completar la solución de dicho problema y pueda la aplicación ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcción de esta aplicación, se debe seleccionar la opción de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicación de Windows Forms con el lenguaje C#. En el cuadro de diálogo configure su proyecto con el nombre de WinAppLines y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmLines.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicación de Windows Forms con el nombre de WinAppLines, como se muestra en la Figura 1.5.4. Además, cree la clase llamada CLine con la cual va a trabajar el formulario frmLines, aplicando el concepto de Composición y Agregación.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image42.png',
        figuraNum8: 'Figura 1.5.4. ',
        figura8: 'Solución WinAppLines.',
        implementacion7: 'Se necesita añadir al Formulario (Form) dos Cajas de Grupo (GroupBoxes), dos Botones (Buttons), una Caja de Imagen (PictureBox) y una Caja de Verificación (Check Box), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene dos Botones (Button) y la Caja de Verificación (Check Box); b) la segunda Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.5.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.5.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmLines','Líneas','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Proceso']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Checked'],Valor:['chkPoint','Rectángulo','False']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gráfico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.5.5.',
        imagen10: './assets/images/Capitulos/I/media/image43.png',
        figuraNum10: 'Figura 1.5.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicación desplegará los gráficos de las líneas consecutivas en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CLine tiene los siguientes datos miembro: a) un objeto mGraph de tipo Graphics; b) Dos objetos de tipo Point llamados mStartPoint y mEndPoint, que representan a dos puntos en el plano; c) Dos bolígrafos de tipo Pen llamados mLinePen y mEllipsePen para graficar los dos puntos que conforman una línea sea con círculos o con rectángulos.',
        implementacion12: 'Esta clase también posee un grupo de métodos de acuerdo a las acciones que puede hacer y que básicamente serán funciones para poder representar y operar un triángulo en el plano, entre las más importantes están las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este método inicializa los primeros objetos de tipo Point de la clase CLine con el valor de cero en sus coordenadas ‘x’ e ‘y’.',
        b:
        `
        // Constructor sin parámetros.
        public CLine()
        {
           mStartPoint = new Point(0, 0);
           mEndPoint = new Point(0, 0);
        }
   
        `
        },
        {t:'b)	Función miembro InitializeData. ',a:'Esta función permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de la caja de verificación (CheckBox) con el valor booleano de false. Para inicializar la caja de imagen (picCanvas) se utiliza la función Refresh que significa refrescar o borrar.',
        b:
        `
        // Función que inicializa los datos y controles de la clase.
        public void InitializeData(PictureBox picCanvas, CheckBox chkPoint)
        {
            mStartPoint.X = 0; mStartPoint.Y = 0;
            mEndPoint.X = 0; mEndPoint.Y = 0;
    
            picCanvas.Refresh();
            chkPoint.Checked = false;
        }        
        `
        },
        {t:'c)	Función miembro DrawLineMouse. ',a:'Esta función permite dibujar una línea con el clic izquierdo del ratón (mouse), para lo cual se valida que se haya seleccionado dicho botón y luego se procede a crear dos bolígrafos de tipo Pen, uno de color verde para dibujar las líneas y otro de color azúl para dibujar los círculos/rectángulos que representan a los dos puntos que conforman una línea. Constantemente, se actualiza el valor del punto inicial con el valor del punto final y el valor del punto final con el valor de las coordenadas ‘x’ e ‘y’ del ratón, para poder graficar líneas continuas.',
          b:
          `
          // Función que permite dibujar una línea con el clic izquierdo
          // del ratón.
          public void DrawLineMouse(MouseEventArgs e, PictureBox picCanvas,
                                    CheckBox chkPoint)
          {
              // Si se ha seleccionado el botón izquierdo del ratón, entonces
              if (e.Button == MouseButtons.Left)
              {
                  // Asignar la funcionalidad de crear gráficos al objeto mGraph.
                  mGraph = picCanvas.CreateGraphics();
      
                  // Crear dos bolígrafos
                  mLinePen = new Pen(Color.Green, 1);
                  mEllipsePen = new Pen(Color.Red, 1);
      
                  // Asignar el punto final al punto inicial.
                  mStartPoint = mEndPoint;                
                  // Asignar al punto final la coordenada del ratón.
                  mEndPoint = new Point(e.X, e.Y);
      
                  // Dibujar una línea desde el punto actual hasta 
                  // el nuevo punto.                
                  mGraph.DrawLine(mLinePen, mStartPoint, mEndPoint);
      
                  // Si la casilla de verificación del check box está marcada,
                  // dibujar un rectángulo para representar a un punto.                
                  if (chkPoint.Checked)
                  {
                      mGraph.DrawRectangle(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                  }
                  // Dibujar un círculo para representar un punto.                
                  else
                  {
                      mGraph.DrawEllipse(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                  }
                  // Desechar los objetos
                  mLinePen.Dispose();
                  mEllipsePen.Dispose();
                  mGraph.Dispose();
              }
          }
          `
          },
          {t:'d)	Función miembro CloseForm. ',a:'Esta función permite cerrar un formulario utilizando la función Close(), que es llamada por el objeto ObjForm el cual es un parámetro de la función que recibe un objeto de tipo Form.',
          b:
          `
          // Función que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }
      
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la función float.Parse() para convertir un tipo de dato carácter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la función ToString() para convertir un tipo de dato numérico a tipo carácter o cadena.'},
                          ],
        implementacion13: 'La implementación de la clase CLine, se presenta a continuación en la Tabla 1.5.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.5.2. ',
        tabladetalle2:'Código de la clase CLine del programa.',
        tablaDatos2:
        `using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Drawing;
        using System.Windows.Forms;
        
        namespace WinAppLines
        {
            class CLine
            {
                // Datos Miembro (Atributos).
        
                // Objeto que activa el modo gráfico.
                private Graphics mGraph;
                // Objeto Punto que representa al punto inicial de 
                // graficación de una línea.
                private Point mStartPoint;
                // Objeto Punto que representa al punto final de 
                // graficación de una línea.
                private Point mEndPoint;
                // Objeto bolígrafo que dibuja o escribe una línea.
                Pen mLinePen;
                // Objeto bolígrafo que dibuja o escribe una elipse.
                Pen mEllipsePen;
        
                // Funciones Miembro (Métodos).
        
                // Constructor sin parámetros.
                public CLine()
                {
                    mStartPoint = new Point(0, 0);
                    mEndPoint = new Point(0, 0);
                }
        
                // Función que inicializa los datos y controles de la clase.
                public void InitializeData(PictureBox picCanvas, CheckBox chkPoint)
                {
                    mStartPoint.X = 0; mStartPoint.Y = 0;
                    mEndPoint.X = 0; mEndPoint.Y = 0;
        
                    picCanvas.Refresh();
                    chkPoint.Checked = false;
                }
        
                // Función que permite dibujar una línea con el clic izquierdo
                // del ratón.
                public void DrawLineMouse(MouseEventArgs e, PictureBox picCanvas,
                                          CheckBox chkPoint)
                {
                    // Si se ha seleccionado el botón izquierdo del ratón, entonces
                    if (e.Button == MouseButtons.Left)
                    {
                        // Asignar la funcionalidad de crear gráficos al objeto mGraph.
                        mGraph = picCanvas.CreateGraphics();
        
                        // Crear dos bolígrafos
                        mLinePen = new Pen(Color.Green, 1);
                        mEllipsePen = new Pen(Color.Red, 1);
                    
                        // Asignar el punto final al punto inicial.
                        mStartPoint = mEndPoint;
                        // Asignar al punto final la coordenada del ratón.
                        mEndPoint = new Point(e.X, e.Y);
        
                        // Dibujar una línea desde el punto actual hasta 
                        // el nuevo punto.                
                        mGraph.DrawLine(mLinePen, mStartPoint, mEndPoint);
        
                        // Si la casilla de verificación del check box está 
                        // marcada, dibujar un rectángulo que representa un punto.                
                        if (chkPoint.Checked)
                        {
                            mGraph.DrawRectangle(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                        }
                        // Dibujar un círculo para representar un punto.                
                        else
                        {
                            mGraph.DrawEllipse(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                        }
                        // Desechar los objetos
                        mLinePen.Dispose();
                        mEllipsePen.Dispose();
                        mGraph.Dispose();
                    }
                }
                // Función que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }                
        `,
        implementacion14: 'La implementación de la clase frmLines, se presenta a continuación en la Tabla 1.5.3, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica conocida como Triángulo.',
        tabla3:'Tabla 1.5.3. ',
        tabladetalle3:'Código de la clase frmLines del programa.',
        tablaDatos3:
        `
        using System;
        using System.Collections.Generic;
        using System.ComponentModel;
        using System.Data;
        using System.Drawing;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;
        using System.Windows.Forms;
        
        namespace WinAppLines
        {
            public partial class frmLines : Form
            {
                // Definición de un objeto de tipo CLine.
                private CLine ObjLine = new CLine();
        
                public frmLines()
                {
                    InitializeComponent();
                }
        
                private void frmLines_Load(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjLine.InitializeData(picCanvas, chkPoint);
                }
        
                private void picCanvas_MouseDown(object sender, MouseEventArgs e)
                {
                    // Graficación de una línea utilizando el ratón.
                    // Llamada a la función DrawLineMouse.
                    ObjLine.DrawLineMouse(e, picCanvas, chkPoint);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicialización de los datos y controles.
                    // Llamada a la función InitializeData.
                    ObjLine.InitializeData(picCanvas, chkPoint);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la función CloseForm.
                    ObjLine.CloseForm(this);
                }        
            }
        }
                        
        `,
        implementacion15: 'La clase frmLines tiene como datos miembro un objeto de tipo CLine llamado ObjLine, el cual es el encargado de acceder a las funciones públicas de la clase CLine para realizar diferentes cálculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmTriangle_Load(), se utiliza el objeto ObjLine, para llamar a la función pública InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento MouseDown de la Caja de Imagen picCanvas, cuyo procedimiento se llama picCanvas_MouseDown(), se utiliza el objeto ObjLine, para llamar a la función pública DrawLineMouse(), que permite dibujar líneas continuas. En el evento Click del botón btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjLine, para llamar a la función pública CloseForm(), que permite cerrar el formulario. ',              
        implementacion17: 'Finalmente, para poder trabajar con el evento MouseDown de la Caja de Imagen picCanvas, se debe activar dicho evento en la ventana de propiedades seleccionando el botón de Eventos y haciendo clic en el evento MouseDown (ver Figura 1), lo cual permite registrar este evento en el Designer del formulario (ver en la Figura 1) y luego puede ser utilizado para ser programado.', 
        imagen11: './assets/images/Capitulos/I/media/image44.png',
        figuraNum11: 'Figura 1.5.6. ',
        figura11: 'Activación de eventos del picCanvas.',
        imagen12: './assets/images/Capitulos/I/media/image45.png',
        figuraNum12: 'Figura 1.5.7. ',
        figura12: 'Registro del evento en el Designer del formulario.',
        implementacion18: 'Para correr la aplicación basta con presionar la tecla F5 o el botón Start de ejecución de la barra de menús de Visual Studio .NET. La Figura 1.5.8 muestra un ejemplo de la corrida de este programa. Para verificar que el programa funciona adecuadamente, se deberá dibujar varias líneas dentro de la Caja de Imagen (picCanvas), haciendo un clic con el botón izquierdo del ratón para definir cada par de puntos que se utilizarán para graficar una línea entre esos dos puntos.',
        imagen13: './assets/images/Capitulos/I/media/image46.png',
        figuraNum13: 'Figura 1.5.8. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      }

    ];

    this.praqnique=[
        {
         link:'https://drive.google.com/uc?id=1qzWvOr4zObJAnqTutsf8s1Txog-R8JpS&export=download',
         label: 'Pracnique 1.1', 
         tituloN:'Pracnique 1.1: ',
         titulo:'Hexágono de 6 Colores',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un hexágono de 6 colores, dado el lado de un hexágono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Básico'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Dado el lado de un hexágono regular, dibujar la figura geométrica correspondiente, considerando que uno de los vértices del hexágono se encuentra sobre el eje de las ‘x’. Además, se debe rellenar la figura con 6 colores, donde cada triángulo pequeño tiene un color como el color rojo, amarillo, verde, violeta, azul y celeste. (Ver Figura 1.1.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image097.png',
             fotoN:'Figura 1.1.1 ',
             fotoDescrip:'Hexágono de 6 colores.'
            },
         B:{
             subtitulo:'B)	Geometría de la Figura',problema:'Por construcción se encierra a la figura geométrica dentro de un rectángulo, luego se extienden algunos vértices hacia los lados del rectángulo formándose los segmentos ‘b’, ‘Ap’, que se calculan resolviendo el triángulo rectángulo APC. Estos dos segmentos permiten obtener los valores de los vértices del hexágono regular que se utilizarán para graficar la figura rellenada con 6 colores. (Ver Figura 1.1.2).',fotoPath:'./assets/images/Capitulos/I/media/image098.png',fotoN:'Figura 1.1.2 ',fotoDescrip:'Vérties y ángulos del hexágono regular.',
             listaB:
                [
                    {
                        parrafo:'Calculamos los valores del segmento ‘b’ y de la apotema ‘Ap’ en el triángulo rectángulo APC:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image099.png',
                            formulas:[
                                '$\\cos(60)=\\frac{b}{l}$',
                                '$b=l\\times\\cos(60)\\Rightarrow(1)$',
                                '$\\sin(60)=\\frac{Ap}{l}$',
                                '$Ap=l\\times\\sin(60)\\Rightarrow(2)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Luego, obtenemos los siguientes puntos del hexágono:',
                        formulas:[
                            '$A(x_{A},y_{A})=A(b,0)$',
                            '$B(x_{B},y_{B})=B(b+l,0)$',
                            '$C(x_{C},y_{C})=C(0,Ap)$',
                            '$D(x_{D},y_{D})=D(2\\times b+l,Ap)$',
                            '$E(x_{E},y_{E})=E(b,2\\times Ap)$',
                            '$F(x_{F},y_{F})=F(b+l,2\\times Ap)$',
                            '$O(x_{O},y_{O})=F(b+\\frac{l}{2},Ap)$',
                            ]
                    },
                    {
                        parrafo:'Con los valores del segmento ‘b’ y de la ‘apotema’ se pueden calcular el valor del perímetro y del área del hexágono:',
                        formulas:[
                            '$p=6\\times l \\Rightarrow(3)$',
                            '$area=\\frac{p\\times Ap}{2}\\Rightarrow(4)$',
                            ]
                    }
                ]                          
           },
         C:{
            subtitulo:'C)	Algoritmos',
            algoritmosC:[
                {
                    titulo:'1.1.1. Algoritmo de la Función ReadData()',
                    pasos:[
                        'Leer el lado del hexágono.'
                    ]
                },
                {
                    titulo:'1.1.2. Algoritmo de la Función CalculateVertex()',
                    pasos:[
                        'Convertir el ángulo ‘1’ de grados a radianes, multiplicando el valor del ángulo de 60 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Calcular el valor del segmento \'b\' del contorno del hexágono.',
                        'Calcular las coordenadas del vértice \'A\'.',
                        'Calcular las coordenadas del vértice \'B\'.',
                        'Calcular las coordenadas del vértice \'C\'.',
                        'Calcular las coordenadas del vértice \'D\'.',
                        'Calcular las coordenadas del vértice \'E\'.',
                        'Calcular las coordenadas del vértice \'F\'.',
                        'Calcular las coordenadas del vértice central \'O\'.'
                    ]
                },
                {
                    titulo:'1.1.3. Algoritmo de la Función PlotShape()',
                    pasos:[
                        'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                        'Llamada a la función CalculateVertex.',
                        'Actualizar el valor del vertice \'A\' con lo que tiene el vértice \'A\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'B\' con lo que tiene el vértice \'B\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'C\' con lo que tiene el vértice \'C\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'D\' con lo que tiene el vértice \'D\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'E\' con lo que tiene el vértice \'E\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'F\' con lo que tiene el vértice \'F\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'O\' con lo que tiene el vértice \'O\' multiplicado por un factor de escalamiento.',
                        'Crear una brocha sólida de color rojo (Red).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: A, O, C, A.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha sólida de color amarillo (Yellow).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: A, B, O, A.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha sólida de color verde (Green).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: B, D, O, B.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha sólida de color azul violeta (BlueViolet).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: C, O, E, C.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha sólida de color azul (Blue).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: O, F, E, O.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha sólida de color celeste (SkyBlue).',
                        'Crear un arreglo de puntos de tipo Point con los vértices: O, D, F, O.',
                        'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.'
                    ]
                }
            ]
         },
         D:{
            subtitulo:'D)	Código de la Aplicación',
            listaCodigo:[
                {
                    problema:'La implementación de la clase CHexagon, se presenta a continuación en la Tabla 1.1.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 1.1.2. ',
                    tablaDescrip:'Código de la clase CHexagon del programa.',
                    tablaDatos:
                    ` 
                    using System;
                    using System.Collections.Generic;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using System.Drawing;
                    using System.Windows.Forms;

                    namespace WinAppHexagon
                    {
                        class CHexagon
                        {
                            // Datos Miembro (Atributos).

                            // Lado del hexágono.
                            private float side;
                            // Apotema del hexágono.
                            private float apothem;
                            // Segmento 'b' del hexágono.
                            private float b;
                            // Ángulo agudo del triángulo rectángulo APC.
                            private float angle;
                            // Perímetro del hexágono.
                            private float perimeter;
                            // Área del hexágono.
                            private float area;
                            // Objeto que activa el modo gráfico.
                            private Graphics graph;
                            // Objeto que maneja un pincel para el relleno.
                            private SolidBrush brush;
                            // Constante scale factor (Zoom In/Zoom Out).
                            private const float SF = 20;
                            // Objeto Punto que representa a los vértices del hexágono.
                            private PointF A, B, C, D, E, F, O;

                            // Funciones miembro - Métodos.

                            // Constructor sin parámetros.
                            public CHexagon()
                            {
                                side = 0.0f; perimeter = 0.0f; area = 0.0f;
                            }

                            // Función que lee el lado del hexágono.
                            public void ReadData(TextBox txtSideSide)
                            {
                                try
                                {
                                    side = float.Parse(txtSideSide.Text);
                                }
                                catch
                                {
                                    MessageBox.Show("Ingreso no válido...");
                                }
                            }

                            // Función que calcula el perímetro del hexágono.
                            public void PerimeterHexagon()
                            {
                                perimeter = 6 * side;
                            }

                            // Función que calcula el área del hexágono.
                            public void AreaHexagon()
                            {
                                angle = 60.0f * (float)Math.PI / 180.0f;
                                apothem = side * (float)Math.Sin(angle);

                                area = perimeter * apothem / 2.0f;
                            }

                            // Función que imprime el perímetro y el área del hexágono.
                            public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                            {
                                txtPerimeter.Text = perimeter.ToString();
                                txtArea.Text = area.ToString();
                            }

                            // Función que inicializa los datos y controles del hexágono.
                            public void InitializeData(TextBox txtSide,
                                                    TextBox txtPerimeter,
                                                    TextBox txtArea,
                                                    PictureBox picCanvas)
                            {
                                txtSide.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";            
                                txtSide.Focus(); picCanvas.Refresh();
                                side = 0.0f; perimeter = 0.0f; area = 0.0f;            
                            }

                            // Función que calcula los valores de los seis vértices del hexágono.
                            private void CalculateVertex()
                            {
                                angle = 60.0f * (float)Math.PI / 180.0f;
                                b = side * (float)Math.Cos(angle);
                                apothem = side * (float)Math.Sin(angle);

                                A.X = b; A.Y = 0;
                                B.X = side + b; B.Y = 0;
                                C.X = 0; C.Y = apothem;
                                D.X = side + 2.0f * b; D.Y = apothem;
                                E.X = b; E.Y = 2.0f * apothem;
                                F.X = side + b; F.Y = 2.0f * apothem;
                                O.X = b + side / 2; O.Y = apothem;
                            }

                            // Función que grafica un hexágono con
                            // seis triángulos de diferentes colores.
                            public void PlotShape(PictureBox picCanvas)
                            {
                                graph = picCanvas.CreateGraphics();

                                CalculateVertex();

                                A.X = A.X * SF; A.Y = A.Y * SF;
                                B.X = B.X * SF; B.Y = B.Y * SF;
                                C.X = C.X * SF; C.Y = C.Y * SF;
                                D.X = D.X * SF; D.Y = D.Y * SF;
                                E.X = E.X * SF; E.Y = E.Y * SF;
                                F.X = F.X * SF; F.Y = F.Y * SF;
                                O.X = O.X * SF; O.Y = O.Y * SF;

                                brush = new SolidBrush(Color.Red);
                                PointF[] polPoints1 = { A, O, C, A };
                                graph.FillPolygon(brush, polPoints1);

                                brush = new SolidBrush(Color.Yellow);
                                PointF[] polPoints2 = { A, B, O, A };
                                graph.FillPolygon(brush, polPoints2);

                                brush = new SolidBrush(Color.Green);
                                PointF[] polPoints3 = { B, D, O, B };
                                graph.FillPolygon(brush, polPoints3);

                                brush = new SolidBrush(Color.BlueViolet);
                                PointF[] polPoints4 = { C, O, E, C };
                                graph.FillPolygon(brush, polPoints4);

                                brush = new SolidBrush(Color.Blue);
                                PointF[] polPoints5 = { O, F, E, O };
                                graph.FillPolygon(brush, polPoints5);

                                brush = new SolidBrush(Color.SkyBlue);
                                PointF[] polPoints6 = { O, D, F, O };
                                graph.FillPolygon(brush, polPoints6);            
                            }

                            // Función que cierra un formulario.
                            public void CloseForm(Form ObjForm)
                            {
                                ObjForm.Close();
                            }
                        }
                    }
                    `
                },
                {
                    problema:'La implementación de la clase frmHexagon, se presenta a continuación en la Tabla 1.1.3, que es la clase que representa a la interfaz gráfica de usuario del hexágono regular de 6 colores.',
                    tablaN:'Tabla 1.1.3. ',
                    tablaDescrip:'Código de la clase frmHexagon del programa.',
                    tablaDatos:
                    `
                    using System;
                    using System.Collections.Generic;
                    using System.ComponentModel;
                    using System.Data;
                    using System.Drawing;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using System.Windows.Forms;

                    namespace WinAppHexagon
                    {
                        public partial class frmHexagon : Form
                        {
                            // Definición de un objeto de tipo CHexagon.
                            CHexagon ObjHexagon = new CHexagon();

                            public frmHexagon()
                            {
                                InitializeComponent();
                            }

                            private void frmHexagon_Load(object sender, EventArgs e)
                            {
                                // Inicialización de los datos y controles.
                                // Llamada a la función InitializeData.
                                ObjHexagon.InitializeData(txtSide, txtPerimeter,
                                                        txtArea, picCanvas);
                            }

                            private void btnCalculate_Click(object sender, EventArgs e)
                            {
                                // Lectura de datos.
                                // Llamada a la función ReadData.
                                ObjHexagon.ReadData(txtSide);
                                // Cálculo del perímetro del hexágono.
                                // Llamada a la función PerimeterHexagon.
                                ObjHexagon.PerimeterHexagon();
                                // Cálculo del área del hexágono.
                                // Llamada a la función AreaHexagon.
                                ObjHexagon.AreaHexagon();
                                // Impresión del perímetro y del área del hexágono.
                                // Llamada a la función PrintData.
                                ObjHexagon.PrintData(txtPerimeter, txtArea);
                                // Graficar un hexágono relleno con seis colores diferentes.
                                // Llamada a la función PlotShape.
                                ObjHexagon.PlotShape(picCanvas);
                            }

                            private void btnReset_Click(object sender, EventArgs e)
                            {
                                // Inicialización de los datos y controles.
                                // Llamada a la función InitializeData.
                                ObjHexagon.InitializeData(txtSide, txtPerimeter,
                                                        txtArea, picCanvas);
                            }

                            private void btnExit_Click(object sender, EventArgs e)
                            {
                                // Cierre de un formulario.
                                // Llamada a la función CloseForm.
                                ObjHexagon.CloseForm(this);
                            }
                        }
                    }
                    `
                } 
            ]
         },
         E:{
            subtitulo:'E)	Pruebas de la Aplicación',
            problema:'A continuación, en la Figura 1.1.3, se muestra un ejemplo de la corrida del programa:',
            fotoPath:'./assets/images/Capitulos/I/media/image113.png',
            fotoN:'Figura 1.1.3 ',
            fotoDescrip:' Corrida del programa'
         }

         },
         {
        link:'https://drive.google.com/uc?id=100iRxgQ-l7y3e5B9BXQ3q5FljehtsvRt&export=download',
        label: 'Pracnique 1.2', 
         tituloN:'Pracnique 1.2: ',
         titulo:'Flor de la Margarita de 5 Pétalos',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar una flor de la Margarita de 5 pétalos, dado el lado de un pentágono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Intermedio'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Dado un pentágono regular, dibujar una flor de la Margarita de 5 pétalos a base de cinco pentágonos inscritos en uno más grande, considerando que uno de los vértices de los cinco pentágonos se encuentra sobre el eje de las ‘x’. Además, se debe rellenar de color rojo cada pentágono pequeño. (Ver Figura 1.2.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image114.png',
             fotoN:'Figura 1.2.1 ',
             fotoDescrip:' Flor margarita de 5 pétalos.'
            },
        B:{
            subtitulo:'B)	Geometría de la Figura',problema:'Por construcción se completa la estrella pentagonal del pentágono que encierra los cinco pentágonos pequeños de la flor de la Margarita y se encuentran cinco ángulos para realizar los diferentes cálculos de las coordenadas de los diferentes puntos que conforman los vértices de los pentágonos pequeños. (Ver Figura 1.2.2).',fotoPath:'./assets/images/Capitulos/I/media/image115.png',fotoN:'Figura 1.2.2 ',fotoDescrip:'Vérties y ángulos de la flor margarita de 5 pétalos.',
            listaB:
                [
                    {
                        parrafo:'Calculamos los valores de a y b en el triángulo rectángulo ABV:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image116.png',
                            formulas:[
                                '$\\cos(36)=\\frac{a}{l}$',
                                '$a=l\\times\\cos(36)\\Rightarrow(1)$',
                                '$\\sin(36)=\\frac{b}{l}$',
                                '$b=l\\times\\sin(36)\\Rightarrow(2)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Calculamos los valores de c y d en el triángulo rectángulo BDY:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image121.png',
                            formulas:[
                                '$\\sin(72)=\\frac{c}{l}$',
                                '$c=l\\times\\sin(72)\\Rightarrow(3)$',
                                '$\\cos(72)=\\frac{d}{l}$',
                                '$d=l\\times\\cos(72)\\Rightarrow(4)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Obtenemos los siguientes puntos:',
                        formulas:[
                            '$A(x_{A},y_{A})=A(a,0)$',
                            '$B(x_{B},y_{B})=B(0,b)$',
                            '$C(x_{C},y_{C})=C(2a,b)$',
                            '$D(x_{D},y_{D})=D(d,b+c)$',
                            '$E(x_{E},y_{E})=E(d+l,b+c)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos el valor de la pendiente AD:',
                        formulas:[
                            '$m_{AD}=\\frac{y_{D}-y_{A}}{x_{D}-x_{A}}$',
                            '$m_{AD}=\\frac{(b+c)-0}{d-a}$',
                            '$m_{AD}=\\frac{b+c}{d-a}\\Rightarrow(5)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos el valor de la pendiente BC:',
                        formulas:[
                            '$m_{BC}=\\frac{y_{C}-y_{B}}{x_{C}-x_{B}}$',
                            '$m_{BC}=\\frac{b-b}{2a-0}$',
                            '$m_{BC}=\\frac{0}{2a}$',
                            '$m_{BC}=0\\Rightarrow(6)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos el valor de la pendiente BE:',
                        formulas:[
                            '$m_{BE}=\\frac{y_{E}-y_{B}}{x_{E}-x_{B}}$',
                            '$m_{BE}=\\frac{(b+c)-b}{(d+l)-0}$',
                            '$m_{BE}=\\frac{c}{d+l}\\Rightarrow(7)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuación de la recta AD:',
                        formulas:[
                            '$y-y_{A}=m_{AD}(x-x_{A})$',
                            '$y-0=m_{AD}(x-a)$',
                            '$y=x\\times m_{AD}-a\\times m_{AD}\\Rightarrow(8)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuación de la recta BC:',
                        formulas:[
                            '$y-y_{B}=m_{BC}(x-x_{B})$',
                            '$y-b=0\\times (x-0)$',
                            '$y=b\\Rightarrow(9)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuación de la recta BE:',
                        formulas:[
                            '$y-y_{B}=m_{BE}(x-x_{B})$',
                            '$y-b=m_{BE}(x-0)$',
                            '$y-b=x\\times m_{BE}\\Rightarrow(10)$'
                            ]
                    },
                    {
                        parrafo:'Resolvemos el sistema de ecuaciones entre (8) y (9), para lo cual reemplazamos el valor de y de la ecuación (9) en la ecuación (8) y calculamos el valor de x:',
                        formulas:[
                            '$b=x\\times m_{AD}-a\\times m_{AD}$',
                            '$x\\times m_{AD}=b+a\\times m_{AD}$',
                            '$x=\\frac{b+a\\times m_{AD}}{m_{AD}}\\Rightarrow(11)$'
                            ]
                    },
                    {
                        parrafo:'De las ecuaciones (9) y (11) obtenemos las coordenadas del punto F:',
                        formulas:[
                            '$F(x_{F},y_{F})=F(\\frac{b+a\\times m_{AD}}{m_{AD}},b)$',
                            ]
                    },
                    {
                        parrafo:'Resolvemos el sistema de ecuaciones entre (8) y (10), para lo cual reemplazamos el valor de y de la ecuación (8) en la ecuación (10) y calculamos el valor de x:',
                        formulas:[
                            '$x\\times m_{AD}-a\\times m_{AD}-b=x\\times m_{BE}$',
                            '$x\\times m_{AD}-x\\times m_{BE}=a\\times m_{AD}+b$',
                            '$x\\times (m_{AD}-\\times m_{BE})=a\\times m_{AD}+b$',
                            '$x=\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}\\Rightarrow(12)$'
                            ]
                    },
                    {
                        parrafo:'En la ecuación (10) reemplazamos el valor de x:',
                        formulas:[
                            '$y-b=\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}\\times m_{BE}$',
                            '$y=\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}\\times m_{BE}+b\\Rightarrow(13)$'
                            ]
                    },
                    {
                        parrafo:'De las ecuaciones (12) y (13) obtenemos las coordenadas del punto H:',
                        formulas:[
                            '$H(x_{H},y_{H})=H(\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}, x_{H}\\times m_{BE}+b)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la distancia FH:',
                        formulas:[
                            '$d_{FH}=\\sqrt{(x_{H}-x_{F})^{2}+(y_{H}-y_{F})^{2}}$',
                            '$d_{FH}=\\sqrt{(\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}-\\frac{b+\\times m_{AD}}{m_{AD}})^{2}+((x_{H}\\times m_{BE}+b)-b)^{2}}$'
                            ]
                    },
                    {
                        parrafo:'Por lo tanto:',
                        formulas:[
                            '$FH=FG=GI=IJ=HJ$'
                            ]
                    },
                    {
                        parrafo:'También se puede concluir que:',
                        formulas:[
                            '$FH=BL=FL=KF$'
                            ]
                    },
                    {
                        parrafo:'Resolviendo el triángulo rectángulo BOL que forma parte del triángulo isósceles BFL, se tiene que:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image165.png',
                            formulas:[
                                '$\\cos(36)=\\frac{BO}{BL}$',
                                '$BO=BL\\times\\cos(36)=OF\\Rightarrow(14)$',
                                '$BF=2\\times BO\\Rightarrow(15)$',
                                '$\\sin(36)=\\frac{LO}{BL}$',
                                '$LO=BL\\times\\sin(36)\\Rightarrow(16)$'
                                ]
                            }]    
                    },
                    {
                        parrafo:'Resolviendo el triángulo rectángulo ZKF se tiene que:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image171.png',
                            formulas:[
                                '$\\cos(72)=\\frac{ZF}{KF}$',
                                '$ZF=KF\\times\\cos(72)\\Rightarrow(17)$',
                                '$\\sin(72)=\\frac{KZ}{KF}$',
                                '$KZ=KF\\times\\sin(72)\\Rightarrow(18)$'
                                ]
                            }]    
                    },
                    {
                        parrafo:'Luego, obtenemos los siguientes puntos del pentágono interno:',
                        formulas:[
                            '$G(x_{G},y_{G})=G(BF+FH,b)$',
                            '$I(x_{I},y_{I})=I(BF+FH+ZF,b+KZ)$',
                            '$J(x_{J},y_{J})=J(d+FH+ZF,b+c-KZ)$'
                            ]
                    },
                    {
                        parrafo:'Finalmente, obtenemos los siguientes puntos de los pentágonos externos:',
                        formulas:[
                            '$L(x_{L},y_{L})=L(BO,b-LO)$',
                            '$K(x_{K},y_{K})=K(BF-ZF,b-KZ)$',
                            '$M(x_{M},y_{M})=M(BF+FH+ZF,b-KZ)$',
                            '$N(x_{N},y_{N})=N(BF+FH+BO,b-LO)$',
                            '$P(x_{P},y_{P})=P(ZF,b+KZ)$',
                            '$R(x_{R},y_{R})=R(d-ZF,b+c-KZ)$',
                            '$Q(x_{Q},y_{Q})=Q(ZF+2\\times FH+BF,b+KZ)$',
                            '$S(x_{S},y_{S})=S(d+l+ZF,b+c-KZ)$',
                            '$T(x_{T},y_{T})=T(d+FH,b+c)$',
                            '$U(x_{U},y_{U})=U(d+FH+2\\times ZF,b+c)$'
                            ]
                    }
                ]                          
            },
            C:{
               subtitulo:'C)	Algoritmos',
               algoritmosC:[
                   {
                       titulo:'1.2.1. Algoritmo de la Función ReadData()',
                       pasos:[
                           'Leer el lado del pentágono.'
                       ]
                   },
                   {
                       titulo:'1.2.2. Algoritmo de la Función CalculateMainVertex()',
                       pasos:[
                        'Convertir el ángulo ‘1’ de grados a radianes, multiplicando el valor del ángulo de 36 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Convertir el ángulo ‘2’ de grados a radianes, multiplicando el valor del ángulo de 72 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Calcular el valor del segmento \'a\' del contorno del pentágono.',
                        'Calcular el valor del segmento \'b\' del contorno del pentágono.',
                        'Calcular el valor del segmento \'c\' del contorno del pentágono.',
                        'Calcular el valor del segmento \'d\' del contorno del pentágono.',
                        'Calcular las coordenadas del vértice \'A\'.',
                        'Calcular las coordenadas del vértice \'B\'.',
                        'Calcular las coordenadas del vértice \'C\'.',
                        'Calcular las coordenadas del vértice \'D\'.',
                        'Calcular las coordenadas del vértice \'E\'.'                        
                       ]
                   },
                   {
                       titulo:'1.2.3. Algoritmo de la Función CalculateSlopes()',
                       pasos:[
                            'Calcular el valor de la pendiente AD.',
                            'Calcular el valor de la pendiente BE.'
                        ]
                   },
                   {
                       titulo:'1.2.4. Algoritmo de la Función CalculateAuxiliarySegmentsVertex()',
                       pasos:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                            'Llamada a la función CalculateMainVertex.',
                            'Llamada a la función CalculateSlopes.',
                            'Calcular las coordenadas del vértice \'F\'.',
                            'Calcular las coordenadas del vértice \'H\'.',
                            'Calcular el valor del segmento \'FH\'.',
                            'Calcular el valor del segmento \'BL\'.',
                            'Calcular el valor del segmento \'KF\'.',
                            'Calcular el valor del segmento \'BO\'.',
                            'Calcular el valor del segmento \'LO\'.',
                            'Calcular el valor del segmento \'BF\'.',
                            'Calcular el valor del segmento \'ZF\'.',
                            'Calcular el valor del segmento \'KZ\'.',
                            'Calcular las coordenadas del vértice \'L\'.',
                            'Calcular las coordenadas del vértice \'M\'.',
                            'Calcular las coordenadas del vértice \'N\'.',
                            'Calcular las coordenadas del vértice \'P\'.',
                            'Calcular las coordenadas del vértice \'R\'.',
                            'Calcular las coordenadas del vértice \'Q\'.',
                            'Calcular las coordenadas del vértice \'S\'.',
                            'Calcular las coordenadas del vértice \'T\'.',
                            'Calcular las coordenadas del vértice \'U\'.',
                            'Calcular las coordenadas del vértice \'G\'.',
                            'Calcular las coordenadas del vértice \'I\'.',
                            'Calcular las coordenadas del vértice \'J\'.'                        
                       ]
                   },
                   {
                       titulo:'1.2.5. Algoritmo de la Función FillPolygonPointF()',
                       pasos:[
                            'Asignar al objeto graph el valor de retorno de la función Graphics llamada por el objeto \'e\'.',
                            'Actualizar el valor del vertice \'A\' con lo que tiene el vértice \'A\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'K\' con lo que tiene el vértice \'K\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'M\' con lo que tiene el vértice \'M\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'F\' con lo que tiene el vértice \'F\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'G\' con lo que tiene el vértice \'G\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'N\' con lo que tiene el vértice \'N\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'C\' con lo que tiene el vértice \'C\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'Q\' con lo que tiene el vértice \'Q\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'I\' con lo que tiene el vértice \'I\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'S\' con lo que tiene el vértice \'S\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'E\' con lo que tiene el vértice \'E\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'U\' con lo que tiene el vértice \'U\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'J\' con lo que tiene el vértice \'J\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'T\' con lo que tiene el vértice \'T\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'D\' con lo que tiene el vértice \'D\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'R\' con lo que tiene el vértice \'R\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'H\' con lo que tiene el vértice \'H\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'P\' con lo que tiene el vértice \'P\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'B\' con lo que tiene el vértice \'B\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'L\' con lo que tiene el vértice \'L\' multiplicado por un factor de escalamiento.',
                            'Crear una brocha sólida de color rojo.',
                            'Crear un arreglo de puntos de tipo Point con los vértices: A, M, G, F, K, A.',
                            'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los vértices: N, C, Q, I, G, N.',
                            'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los vértices: I, S, E, U, J, I.',
                            'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los vértices: H, J, T, D, R, H.',
                            'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los vértices: L, F, H, P, B, L.',
                            'Graficar un polígono relleno con la brocha y el arreglo de puntos del paso anterior.'
                       ]
                   }
               ]
            },         
            D:{
                subtitulo:'D)	Código de la Aplicación',
                listaCodigo:[
                    {
                        problema:'La implementación de la clase CDaisyFlower, se presenta a continuación en la Tabla 1.2.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                        tablaN:'Tabla 1.2.2. ',
                        tablaDescrip:'Código de la clase CDaisyFlower del programa.',
                        tablaDatos:
                        `
                        using System;
                        using System.Collections.Generic;
                        using System.Linq;
                        using System.Text;
                        using System.Threading.Tasks;
                        using System.Drawing;
                        using System.Windows.Forms;

                        namespace WinAppDaisyFlower
                        {
                            class CDaisyFlower
                            {
                                // Datos Miembro (Atributos).

                                // Lado del pentágono.
                                private float side;
                                // Segmentos del pentágono.
                                private float a, b, c, d;
                                // Ángulos del pentágono.
                                private float angle1, angle2;
                                // Pendiente o gradiente de la línea AD.
                                private float mAD;
                                // Pendiente o gradiente de la línea BE.
                                private float mBE;
                                // Objeto que activa el modo gráfico.        
                                private Graphics graph;
                                // Objeto que maneja un pincel para el relleno.
                                private SolidBrush redBrush;
                                // Constante scale factor (Zoom In/Zoom Out).
                                private const float SF = 20;
                                // Objeto Punto que representa a los cinco vértices del pentágono.
                                private PointF A, B, C, D, E;
                                // Objeto Punto que representa a los vértices auxiliares del pentágono.
                                private PointF F, G, H, I, J;
                                // Objeto Punto que representa a los vértices auxiliares del pentágono.
                                private PointF K, L, M, N, T, U, V, W, X, Y;

                                // Funciones Miembro - Métodos.

                                // Constructor sin parámetros.
                                public CDaisyFlower()
                                {
                                    side = 0.0f;
                                }

                                // Función que lee el lado del pentágono.
                                public void ReadData(TextBox txtSideSide)
                                {
                                    try
                                    {
                                        side = float.Parse(txtSideSide.Text);
                                    }
                                    catch
                                    {
                                        MessageBox.Show("Ingreso no válido...");
                                    }            
                                }

                                // Función que inicializa los datos y controles del pentágono.
                                public void InitializeData(TextBox txtSide,
                                                        PictureBox picCanvas)
                                {
                                    side = 0.0f;
                                    txtSide.Text = "";            
                                    txtSide.Focus();
                                    picCanvas.Refresh();
                                }

                                // Función que calcula los valores de los cinco vértices del pentágono.
                                private void CalculateMainVertex()
                                {            
                                    angle1 = 36.0f * (float)Math.PI / 180.0f;            
                                    angle2 = 72.0f * (float)Math.PI / 180.0f;
                                    
                                    a = side * (float)Math.Cos(angle1);            
                                    b = side * (float)Math.Sin(angle1);            
                                    c = side * (float)Math.Sin(angle2);            
                                    d = side * (float)Math.Cos(angle2);
                                    
                                    A.X = a; A.Y = 0;
                                    B.X = 0; B.Y = b;            
                                    C.X = 2 * a; C.Y = b;            
                                    D.X = d; D.Y = b + c;            
                                    E.X = d + side; E.Y = b + c;
                                }

                                // Función que calcula los valores de las pendientes AD y BE.
                                private void CalculateSlopes()
                                {            
                                    mAD = (b + c) / (d - a);            
                                    mBE = c / (d + side);
                                }

                                // Función que calcula los vértices y segmentos de una flor de la Margarita de 5 
                                // pétalos a base de cinco pentágonos inscritos en uno más grande.        
                                public void CalculateAuxiliarySegmentsVertex(PictureBox picCanvas)
                                {            
                                    graph = picCanvas.CreateGraphics();
                                    
                                    CalculateMainVertex();
                                    CalculateSlopes();
                                    
                                    F.X = (b + a * mAD) / mAD; F.Y = b;            
                                    H.X = (a * mAD + b) / (mAD - mBE); H.Y = H.X * mBE + b;
                                    
                                    float FH = (float)Math.Sqrt((float)Math.Pow(H.X - F.X, 2) 
                                            + (float)Math.Pow(H.Y - F.Y, 2));            
                                    float BL = FH;            
                                    float KF = FH;            
                                    float BO = BL * (float)Math.Cos(angle1);            
                                    float LO = BL * (float)Math.Sin(angle1);            
                                    float BF = 2 * BO;            
                                    float ZF = KF * (float)Math.Cos(angle2);            
                                    float KZ = KF * (float)Math.Sin(angle2);
                                    
                                    L.X = BO; L.Y = b - LO; K.X = BF - ZF; K.Y = b - KZ;            
                                    M.X = BF + FH + ZF; M.Y = b - KZ;            
                                    N.X = BF + FH + BO; N.Y = b - LO;            
                                    P.X = ZF; P.Y = b + KZ;            
                                    R.X = d - ZF; R.Y = b + c - KZ;            
                                    Q.X = ZF + 2 * FH + BF; Q.Y = b + KZ;            
                                    S.X = d + side + ZF; S.Y = b + c - KZ;            
                                    T.X = d + FH; T.Y = b + c;            
                                    U.X = d + FH + 2 * ZF; U.Y = b + c;
                                    
                                    G.X = BF + FH; G.Y = b;            
                                    I.X = BF + FH + ZF; I.Y = b + KZ;            
                                    J.X = d + FH + ZF; J.Y = b + c - KZ;
                                }

                                // Función que grafica una flor de la Margarita de 5 pétalos 
                                // a base de cinco pentágonos rellenados de color rojo.
                                public void FillPolygonPointF(PaintEventArgs e)
                                {
                                    graph = e.Graphics;
                                    
                                    A.X = A.X * SF; A.Y = A.Y * SF;            
                                    K.X = K.X * SF; K.Y = K.Y * SF;
                                    M.X = M.X * SF; M.Y = M.Y * SF;
                                    F.X = F.X * SF; F.Y = F.Y * SF;
                                    G.X = G.X * SF; G.Y = G.Y * SF;
                                    
                                    N.X = N.X * SF; N.Y = N.Y * SF;
                                    C.X = C.X * SF; C.Y = C.Y * SF;            
                                    Q.X = Q.X * SF; Q.Y = Q.Y * SF;
                                    I.X = I.X * SF; I.Y = I.Y * SF;            
                                    
                                    S.X = S.X * SF; S.Y = S.Y * SF;
                                    E.X = E.X * SF; E.Y = E.Y * SF;
                                    U.X = U.X * SF; U.Y = U.Y * SF;
                                    J.X = J.X * SF; J.Y = J.Y * SF;
                                    
                                    T.X = T.X * SF; T.Y = T.Y * SF;
                                    D.X = D.X * SF; D.Y = D.Y * SF;
                                    R.X = R.X * SF; R.Y = R.Y * SF;           
                                    H.X = H.X * SF; H.Y = H.Y * SF;
                                    
                                    P.X = P.X * SF; P.Y = P.Y * SF;            
                                    B.X = B.X * SF; B.Y = B.Y * SF;
                                    L.X = L.X * SF; L.Y = L.Y * SF;
                                    
                                    redBrush = new SolidBrush(Color.Red);
                                    
                                    PointF[] polPoints1 = { A, M, G, F, K, A };            
                                    graph.FillPolygon(redBrush, polPoints1);
                                    
                                    PointF[] polPoints2 = { N, C, Q, I, G, N };            
                                    graph.FillPolygon(redBrush, polPoints2);
                                    
                                    PointF[] polPoints3 = { I, S, E, U, J, I };            
                                    graph.FillPolygon(redBrush, polPoints3);
                                    
                                    PointF[] polPoints4 = { H, J, T, D, R, H };            
                                    graph.FillPolygon(redBrush, polPoints4);
                                    
                                    PointF[] polPoints5 = { L, F, H, P, B, L };            
                                    graph.FillPolygon(redBrush, polPoints5);
                                }

                                // Función que cierra un formulario.
                                public void CloseForm(Form ObjForm)
                                {
                                    ObjForm.Close();
                                }
                            }
                        }
                        `
                    },
                    {
                        problema:'La implementación de la clase frmDaisyFlower, se presenta a continuación en la Tabla 1.2.3, que es la clase que representa a la interfaz gráfica de usuario de la flor margarita de 5 pétalos.',
                        tablaN:'Tabla 1.2.3. ',
                        tablaDescrip:'Código de la clase frmDaisyFlower del programa.',
                        tablaDatos:
                        `
                        using System;
                        using System.Collections.Generic;
                        using System.ComponentModel;
                        using System.Data;
                        using System.Drawing;
                        using System.Linq;
                        using System.Text;
                        using System.Threading.Tasks;
                        using System.Windows.Forms;

                        namespace WinAppDaisyFlower
                        {
                            public partial class frmDaisyFlower : Form
                            {
                                // Definición de un objeto de tipo CDaisyFlower.
                                CDaisyFlower ObjDaisyFlower = new CDaisyFlower();

                                public frmDaisyFlower()
                                {
                                    InitializeComponent();
                                }

                                private void frmDaisyFlower_Load(object sender, EventArgs e)
                                {
                                    // Inicialización de los datos y controles.
                                    // Llamada a la función InitializeData.
                                    ObjDaisyFlower.InitializeData(txtSide, picCanvas);
                                }

                                private void btnCalculate_Click(object sender, EventArgs e)
                                {
                                    // Lectura de datos.
                                    // Llamada a la función ReadData.
                                    ObjDaisyFlower.ReadData(txtSide);
                                    // Cálculo de los segmentos y vértices auxiliares de la flor de la Margarita.
                                    // Llamada a la función CalculateAuxiliarySegmentsVertex.
                                    ObjDaisyFlower.CalculateAuxiliarySegmentsVertex(picCanvas);
                                    // Redibujar el control picCanvas, llamando al evento Paint.
                                    // Llamada a la función Invalidate.
                                    picCanvas.Invalidate();
                                }

                                private void btnReset_Click(object sender, EventArgs e)
                                {
                                    // Inicialización de los datos y controles.
                                    // Llamada a la función InitializeData.
                                    ObjDaisyFlower.InitializeData(txtSide, picCanvas);
                                }

                                private void btnExit_Click(object sender, EventArgs e)
                                {
                                    // Cierre de un formulario.
                                    // Llamada a la función CloseForm.
                                    ObjDaisyFlower.CloseForm(this);
                                }

                                private void picCanvas_Paint(object sender, PaintEventArgs e)
                                {
                                    // Rellenar los polígonos pequeños de la flor de la Margarita de 5 pétalos.
                                    // Llamada a la función FillPolygonPointF.
                                    ObjDaisyFlower.FillPolygonPointF(e);
                                }
                            }
                        }
                        `
                    } 
                ]
            },
            E:{
                subtitulo:'E)	Pruebas de la Aplicación',
                problema:'A continuación, en la Figura 1.2.3, se muestra un ejemplo de la corrida del programa:',
                fotoPath:'./assets/images/Capitulos/I/media/image189.png',
                fotoN:'Figura 1.2.3 ',
                fotoDescrip:' Corrida del programa'
             }
        },
         {        
        link:'https://drive.google.com/uc?id=1LpFnlZWVevOBnVYpL0_5z0K8JhlpiElq&export=download',
         label: 'Pracnique 1.3', 
         tituloN:'Pracnique 1.3: ',
         titulo:'Polígonos Estrellados de 10 y 5 Puntas',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un polígono estrellado de 10 puntas que contiene otros dos polígonos estrellados de 5 puntas, dado el lado de un decágono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Avanzado'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Dado el lado de un decágono regular, dibujar un polígono regular de 10 lados, un polígono estrellado de 10 puntas, un polígono estrellado mediano de 5 puntas ubicado con respecto al centro y otro polígono estrellado pequeño de 5 puntas. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0). (Ver Figura 1.3.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image001.jpg',
             fotoN:'Figura 1.3.1 ',
             fotoDescrip:'Polígonos estrellados de 10 y 5 puntas.'
            },
         B:{
             subtitulo:'B)	Geometría de la Figura',problema:'Por construcción se encierra a la figura geométrica dentro de un rectángulo, luego se extienden algunos vértices hacia los lados del rectángulo formándose los segmentos ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, que se calculan resolviendo tres triángulos rectángulos cuyos 5 ángulos forman parte del decágono regular. Por construcción se obtiene también el ángulo ‘alpha’ con el cual se calcula el valor del segmento ‘a’. Todos estos segmentos permiten obtener los valores de los vértices del decágono regular que se utilizarán para graficar el polígono estrellado de 10 puntas. Además, se requieren calcular los valores de los vértices que forman los polígonos estrellados de 5 puntas, para lo cual es necesario calcular sus pendientes y resolver varios sistemas de ecuaciones con dos incógnitas. (Ver Figura 1.3.2).',fotoPath:'./assets/images/Capitulos/I/media/image190.png',fotoN:'Figura 1.3.2 ',fotoDescrip:'Vérties y ángulos de los polígonos estrellados de 10 y 5 puntas.',
             listaB:
                [
                    {
                        parrafo:'Calculamos el valor del segmento ‘a’ en el triángulo isósceles HMI que contiene al triángulo rectángulo MNI: ',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image191.png',
                            formulas:[
                                '$HI=l; NI=\\frac{l}{2}; MN=a\\Rightarrow(1)$',
                                '$\\tan(10)=\\frac{MN}{NI}$',
                                '$a=\\frac{l}{2}\\times\\tan(10)\\Rightarrow(2)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Calculamos los valores de los segementos ‘e’ y ‘b’ en el triángulo rectángulo IJL:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image195.png',
                            formulas:[
                                '$IJ=l; LI=e; LJ=b$',
                                '$\\cos(36)=\\frac{LI}{l}$',
                                '$e=l\\times\\cos(36)\\Rightarrow(3)$',
                                '$\\sin(36)=\\frac{LJ}{l}$',
                                '$b=l\\times\\sin(36)\\Rightarrow(4)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Calculamos los valores de los segementos ‘c’ y ‘d’ en el triángulo rectángulo AJK:',
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image200.png',
                            formulas:[
                                '$AJ=l; AK=c; JK=d$',
                                '$\\sin(18)=\\frac{JK}{l}$',
                                '$d=l\\times\\sin(18)\\Rightarrow(5)$',
                                '$\\cos(18)=\\frac{AK}{l}$',
                                '$c=l\\times\\cos(18)\\Rightarrow(6)$'
                                ]
                            }]
                    },
                    {
                        parrafo:'Obtenemos los siguientes puntos:',
                        formulas:[
                            '$A(x_{A},y_{A})=A(a+b+c,0)$',
                            '$B(x_{B},y_{B})=B(a+b+2c,d)$',
                            '$C(x_{C},y_{C})=C(a+2b+2c,d+e )$',
                            '$D(x_{D},y_{D})=D(a+2b+2c,d+e+l)$',
                            '$E(x_{E},y_{E})=E(a+b+2c,d+2e+l )$',
                            '$F(x_{F},y_{F})=F(a+b+c,2d+2e+l )$',
                            '$G(x_{G},y_{G})=G(a+b,d+2e+l )$',
                            '$H(x_{H},y_{H})=H(a,d+e+l )$',
                            '$I(x_{I},y_{I})=I(a,d+e )$',
                            '$J(x_{J},y_{J})=J(a+b,d )$',
                            '$O(x_{O},y_{O})=O(a+b+c,d+e+l/2 )$'
                            ]
                    },
                    {
                        parrafo:'Con los puntos obtenidos se pueden graficar con líneas las siguientes figuras geométricas: a) Un decágono regular grande ABCDEFGHIJ, de color azul obscuro (DarkBlue); b) un pentágono regular ACEGI, de color verde mar claro (LightSeaGreen); c) Un pentágono regular BDFHJ, de color verde bosque (ForestGreen); d) Las estrellas de 5 puntas de color azul violeta (BlueViolet).',
                    },
                    {
                        teorema:'Teorema 1: ',
                        formulas:[
                            'Si $P_1(x_1,y_1 )$ y $P_2 (x_2,y_2 )$ son los extremos de un segmento $P_1 P_2;$ Si $P_3(x_3,y_3 )$ y $P_4(x_4,y_4 )$ son los extremos de un segmento $P_3 P_4$ (ver Figura 1.3.3). Las coordenadas $(x_P,y_P )$ del punto P de intersección de las dos rectas están dadas por la siguiente expresión:',
                            '$P(x_P,y_P)=P(\\frac{y_3-y_1+m_1\\times x_1-m_2\\times x_3}{m_1-m_2},y_1+m_1(x_P,x_1));m_1-m_2\\neq0\\Rightarrow(7)$'
                            ]
                    },
                    {
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image226.png',
                            formulas:[
                                '$Figura 1.3.3.\\bf$ Cálculo de las coordenadas del punto P'
                                ]
                            }]
                    },
                    {
                        teorema:'Demostración: ',
                        formulas:[
                            'La recta $P_1 P_2$, se cruza con la recta $P_3 P_4$ en el punto $P(x_P,y_P )$, por lo tanto, para calcular las coordenadas del punto de intersección P, se requiere resolver un sistema de ecuaciones de dos incógnitas que contiene los puntos de las rectas y sus pendientes, como se indica a continuación:'
                            ]
                    },
                    {
                        parrafo:'Calculamos el valor de la pendiente:',
                        formulas:[
                            '$\\Rightarrow$ Pendiente: $P_1P_2=m_1$',
                            '$m_{P_1P_2}=\\frac{y_2-y_1}{x_2-x_1}=m_1\\Rightarrow(8)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuación de la recta:',
                        formulas:[
                            '$\\Rightarrow$ Recta: $P_1P_2$',
                            '$y-y_1=m_1(x-x_1)$',
                            '$y=y_1+m_1\\times x-m_1\\times x_1\\Rightarrow(9)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos el valor de la pendiente:',
                        formulas:[
                            '$\\Rightarrow$ Pendiente: $P_3P_4=m_2$',
                            '$m_{P_3P_4}=\\frac{y_4-y_3}{x_4-x_3}=m_2\\Rightarrow(10)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuacición de la recta: ',
                        formulas:[
                            '$\\Rightarrow$ Recta: $P_3P_4$',
                            '$y-y_3=m_2(x_-x_3)$',
                            '$y=y_3+m_2\\times x-m_2\\times x_3\\Rightarrow(11)$'
                            ]
                    },
                    {
                        parrafo:'',
                        formulas:[
                            'Resolvemos el sistema de ecuaciones entre (9) y (11), para lo cual igualamos el valor de $y$ de la ecuación (9) con el valor de $y$ de la ecuación (11) y calculamos el valor de $ x$: ',
                            '$y_1+m_1\\times x-m_1\\times x_1=y_3+m_2\\times x-m_2\\times x_3$',
                            '$m_1\\times x-m_2\\times x=y_3-m_2\\times x_3-y_1+m_1\\times x_1$',
                            '$x(m_1-m_2)=y_3-y_1+m_1\\times x_1-m_2\\times x_3$',
                            '$x=\\frac{(y_3-y_1+m_1\\times x_1-m_2\\times x_3)}{(m_1-m_2)}; m_1-m_2\\neq0\\Rightarrow(12)$'
                            ]
                    },
                    {
                        parrafo:'En la ecuación (9) reemplazamos el valor de x:',
                        formulas:[
                            '$y=y_1-m_1\\times x_1+m_1(\\frac{(y_3-y_1+m_1\\times x_1-m_2\\times x_3)}{(m_1-m_2 )})\\Rightarrow(13)$'
                            ]
                    },
                    {
                        parrafo:'De las ecuaciones (12) y (13) obtenemos las coordenadas del punto P:',
                        formulas:[
                            '$P(x_P,y_P)=P(\\frac{y_3-y_1+m_1\\times x_1-m_2\\times x_3}{m_1-m_2},y_1-m_1\\times x_1+m_1\\times x_P)$',
                            '$P(x_P,y_P)=P(\\frac{y_3-y_1+m_1\\times x_1-m_2\\times x_3}{m_1-m_2},y_1+m_1\\times x_P-m_1\\times x_1)$',
                            '$P(x_P,y_P)=P(\\frac{y_3-y_1+m_1\\times x_1-m_2\\times x_3}{m_1-m_2},y_1+m_1(x_P-x_1)); m_1-m_2\\neq0\\Rightarrow(14)$'
                            ]
                    },
                    {
                        parrafo:'Con el Teorema 1 se pueden calcular los puntos de intersección entre las diferentes rectas que conforman los dos polígonos estrellados de 5 puntas, como sigue:'
                    },
                    {
                        parrafo:'Polígono estrellado grande de 5 puntas, de color azul obscuro (DarkBlue): ',
                        formulas:[
                            '$PQRST:$',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto $P$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto $T$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto $Q$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto $S$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto $R$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PS}$, para obtener el punto $P_1$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PR}$, para obtener el punto $P_2$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{QS}$, para obtener el punto $P_3$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{QS}$, para obtener el punto $P_4$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{PS}$, para obtener el punto $P_5$.',    
                        ]
                    },
                    {
                        parrafo:'Polígono estrellado pequeño de 5 puntas, relleno de color azur (Azure):',
                        formulas:[
                            '$P\'Q\'R\'S\'T\':$',
                            '⊛  El punto $P\'(x_P,y_P )= P\'(x_O,y_T )$',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{PS}$, para obtener el punto $T\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{CH}$, para obtener el punto $Q\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{BG}$, para obtener el punto $S\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{QS}$ y $l_{JE}$, para obtener el punto $R\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'S\'}$, para obtener el punto $P_6$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'R\'}$, para obtener el punto $P_7$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{P\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_8$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_9$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{P\'S\'}$, para obtener el punto $P_{10}$.'
                        ]
                    },
                    {
                        parrafo:'Decágono regular pequeño, de color flor de maíz azul (CornflowerBlue):',
                        formulas:[
                            '$PB\'QD\'RF\'SH\'TJ\':$',
                            '⊛  Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto $P.$',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto $T$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto $Q$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto $S$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto $R$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BG}$, para obtener el punto $B\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{CF}$, para obtener el punto $D\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{HE}$ y $l_{DG}$, para obtener el punto $F\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{CH}$, para obtener el punto $H\'$.',
                            '⊛	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{BI}$, para obtener el punto $J\'$.'
                        ]
                    },
                    {
                        parrafo:'Finalmente calculamos el valor del diámetro del círculo circunscrito al decágono, de color gris (Gray):',
                        formulas:[
                            '$D=AF=\\sqrt{(x_F-x_A)^2+(y_F-y_A)^2}\\Rightarrow(15)$'
                        ]
                    }
                    
                ]
            },            
            C:{
                subtitulo:'C)	Algoritmos',
                algoritmosC:[
                    {
                        titulo:'1.3.1. Algoritmo de la Función ReadData()',
                        pasos:[
                            'Leer el lado del decágono.'
                        ]
                    },
                    {
                        titulo:'1.3.2. Algoritmo de la Función CalculateVertexBigDecagon()',
                        pasos:[
                            'Convertir el ángulo ‘1’ de grados a radianes, multiplicando el valor del ángulo de 36 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Convertir el ángulo ‘2’ de grados a radianes, multiplicando el valor del ángulo de 18 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Convertir el ángulo ‘alpha’ de grados a radianes, multiplicando el valor del ángulo de 10 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Calcular el valor del segmento \'a\' del contorno del dodecágono.',
                            'Calcular el valor del segmento \'b\' del contorno del dodecágono.',
                            'Calcular el valor del segmento \'c\' del contorno del dodecágono.',
                            'Calcular el valor del segmento \'d\' del contorno del dodecágono.',
                            'Calcular el valor del segmento \'e\' del contorno del dodecágono.',
                            'Calcular las coordenadas del vértice \'A\'.',
                            'Calcular las coordenadas del vértice \'B\'.',
                            'Calcular las coordenadas del vértice \'C\'.',
                            'Calcular las coordenadas del vértice \'D\'.',
                            'Calcular las coordenadas del vértice \'E\'.',
                            'Calcular las coordenadas del vértice \'F\'.',
                            'Calcular las coordenadas del vértice \'G\'.',
                            'Calcular las coordenadas del vértice \'H\'.',
                            'Calcular las coordenadas del vértice \'I\'.',
                            'Calcular las coordenadas del vértice \'J\'.',
                            'Calcular las coordenadas del vértice \'O\'.'
                        ]
                    },
                    {
                        titulo:'1.3.3. Algoritmo de la Función PlotBigDecagon()',
                        pasos:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                            'Llamar a la función CalculateVertexBigDecagon().',
                            'Actualizar el valor del vertice \'A\' con lo que tiene el vértice \'A\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'B\' con lo que tiene el vértice \'B\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'C\' con lo que tiene el vértice \'C\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'D\' con lo que tiene el vértice \'D\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'E\' con lo que tiene el vértice \'E\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'F\' con lo que tiene el vértice \'F\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'G\' con lo que tiene el vértice \'G\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'H\' con lo que tiene el vértice \'H\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'I\' con lo que tiene el vértice \'I\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'J\' con lo que tiene el vértice \'J\' multiplicado por un factor de escalamiento.',
                            'Crear un bolígrafo de color azul obscuro (DarkBlue).',
                            'Graficar el decágono grande de la figura geométrica uniendo con líneas los puntos: A, B, C, D, E, F, G, H, I, J.',
                            'Crear un bolígrafo de color verde mar claro (LightSeaGreen).',
                            'Graficar el primer pentágono regular grande de la figura geométrica uniendo con líneas los puntos: A, C, E, G, I.',
                            'Crear un bolígrafo de color verde bosque (ForestGreen).',
                            'Graficar el segundo pentágono regular grande de la figura geométrica uniendo con líneas los puntos: B, D, F, H, J.',
                            'Crear un bolígrafo de color azul violeta (BlueViolet).',
                            'Graficar estrellas de 5 puntas uniendo el punto A con D, E, F, G, H.',
                            'Graficar estrellas de 5 puntas uniendo el punto B con E, F, G, H, I.',
                            'Graficar estrellas de 5 puntas uniendo el punto C con F, G, H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto D con G, H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto E con H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto F con I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto G con J.'                         ]
                    },
                    {
                        titulo:'1.3.4. Algoritmo de la Función CalculateIntersectionPoint()',
                        pasosFormulas:[
                            'Calcular el valor de la pendiente $m_1$.',
                            'Calcular el valor de la pendiente $m_2$.',
                            'Si el valor de la resta entre las dos pendientes es diferente de cero, entonces:',
                            '.1. Calcular el valor de ‘x’ del punto de intersección aplicando el Teorema 1.',
                            '.2. Calcular el valor de ‘y’ del punto de intersección aplicando el Teorema 1.'                      
                        ]
                    },
                    {
                        titulo:'1.3.5. Algoritmo de la Función CalculateVertexFivePointedBigStar()',
                        pasosFormulas:[
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto $P$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto $T$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto $Q$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto $S$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto $R$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PS}$, para obtener el punto $P_1$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PR}$, para obtener el punto $P_2$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{QS}$, para obtener el punto $P_3$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{QS}$, para obtener el punto $P_4$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{PS}$, para obtener el punto $P_5$.'
                        ]
                    },
                    {
                        titulo:'1.3.6. Algoritmo de la Función PlotFivePointedBigStar()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                            'Llamada a la función CalculateVertexBigDecagon.',
                            'Llamada a la función CalculateVertexFivePointedBigStar.',
                            'Actualizar el valor del vertice \'P\' con lo que tiene el vértice \'P\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'T\' con lo que tiene el vértice \'T\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'Q\' con lo que tiene el vértice \'Q\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'S\' con lo que tiene el vértice \'S\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'R\' con lo que tiene el vértice \'R\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_1$ con lo que tiene el vértice $P_1$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_2$ con lo que tiene el vértice $P_2$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_3$ con lo que tiene el vértice $P_3$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_4$ con lo que tiene el vértice $P_4$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_5$ con lo que tiene el vértice $P_5$ multiplicado por un factor de escalamiento.',
                            'Crear un bolígrafo de color verde azul obscuro (DarkBlue).',
                            'Graficar la estrella grande de 5 puntas, uniendo con líneas los puntos: $P, P_2, Q, P_3, R, P_4, S, P_5,T, P_1$.'
                        ]
                    },
                    {
                        titulo:'1.3.7. Algoritmo de la Función CalculateVertexFivePointedSmallStar()',
                        pasosFormulas:[
                            'Asignar a la coordenada ‘x’ del punto P el valor de la coordenada ‘x’ del punto O.',
                            'Asignar a la coordenada ‘y’ del punto P el valor de la coordenada ‘y’ del punto T.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{PS}$, para obtener el punto T\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{CH}$, para obtener el punto Q\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{BG}$, para obtener el punto S\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{QS}$ y $l_{JE}$, para obtener el punto R\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'S\'}$, para obtener el punto $P_6$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'R\'}$, para obtener el punto $P_7$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{P\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_8$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_9$.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{P\'S\'}$, para obtener el punto $P_{10}$.'
                        ]
                    },
                    {
                        titulo:'1.3.8. Algoritmo de la Función PlotFivePointedSmallStar()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                            'Llamada a la función CalculateVertexBigDecagon.',
                            'Llamada a la función CalculateVertexFivePointedBigStar.',
                            'Llamada a la función CalculateVertexFivePointedSmallStar.',
                            'Actualizar el valor del vertice P’ con lo que tiene el vértice P’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice T’ con lo que tiene el vértice T’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice Q’ con lo que tiene el vértice Q’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice S’ con lo que tiene el vértice S’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice R’ con lo que tiene el vértice R’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_6$ con lo que tiene el vértice P6 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_7$ con lo que tiene el vértice P7 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_8$ con lo que tiene el vértice P8 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_9$ con lo que tiene el vértice P9 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_{10}$ con lo que tiene el vértice P10 multiplicado por un factor de escalamiento.',
                            'Crear una brocha sólida de color azur (Azure).',
                            'Crear un arreglo de puntos de tipo Point con los vértices:$P’, P_7, Q’, P_8, R’, P_9, S’, P_{10}, T’, P_6, P’$.',
                            'Graficar un polígono estrellado de cinco puntas relleno con la brocha y el arreglo de puntos del paso anterior.'
                        ]
                    },
                    {
                        titulo:'1.3.9. Algoritmo de la Función CalculateVertexSmallDodecagon()',
                        pasosFormulas:[
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto P.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto T.', 
                            'Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto Q.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto S.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto R.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BG}$, para obtener el punto B\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{CF}$, para obtener el punto D\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{HE}$ y $l_{DG}$, para obtener el punto F\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{CH}$, para obtener el punto H\'.',
                            'Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{BI}$, para obtener el punto J\'.'
                        ]
                    },
                    {
                        titulo:'1.3.10. Algoritmo de la Función PlotSmallDecagon()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.',
                            'Llamada a la función CalculateVertexBigDecagon.',
                            'Llamada a la función CalculateVertexSmallDodecagon.',
                            'Actualizar el valor del vertice P con lo que tiene el vértice P multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice Q con lo que tiene el vértice Q multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice R con lo que tiene el vértice R multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice S con lo que tiene el vértice S multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice T con lo que tiene el vértice T multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice B’ con lo que tiene el vértice B’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice D’ con lo que tiene el vértice D’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice F’ con lo que tiene el vértice F’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice H’ con lo que tiene el vértice H’ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice J’ con lo que tiene el vértice J’ multiplicado por un factor de escalamiento.',
                            'Crear un bolígrafo de color maíz azul (CornflowerBlue).',
                            'Graficar el decágono pequeño de la figura geométrica uniendo con líneas los puntos: $P, B’, Q, D’, R, F’, S, H’, T, J’$.'
                        ]
                    },
                    {
                        titulo:'1.3.11. Algoritmo de la Función PlotCircle()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gráficos del PictureBox llamado picCanvas.', 
                            'Crear un bolígrafo de color gris (Gray).',
                            'Llamada a la función CalculateVertexBigDecagon.',
                            'Asignar a la variable diameter el valor de la Ec. (15).',
                            'Graficar el círculo circumscrito al decágono de la figura geométrica utilizando el objeto graph con la función DrawEllipse y el diámetro del círculo.'
                        ]
                    }
                ]
             },
             D:{
                subtitulo:'D)	Código de la Aplicación',
                listaCodigo:[
                    {
                        problema:'La implementación de la clase CTenPointedStarPolygon, se presenta a continuación en la Tabla 1.3.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                        tablaN:'Tabla 1.3.1. ',
                        tablaDescrip:'Código de la clase CTenPointedStarPolygon del programa.',
                        tablaDatos:
                        `
                        using System;
                        using System.Collections.Generic;
                        using System.Linq;
                        using System.Text;
                        using System.Threading.Tasks;
                        using System.Drawing;
                        using System.Windows.Forms;

                        namespace WinAppGeometricFiguresV2
                        {
                            class CTenPointedStarPolygon
                            {
                                // Datos Miembro (Atributos).

                                // Lado del decágono.
                                private float side;
                                // Segmentos del decágono.
                                private float a, b, c, d, e;
                                // Ángulos del decágono.
                                private float angle1, angle2, alpha;
                                // Objeto que activa el modo gráfico.
                                private Graphics graph;
                                // Objeto bolígrafo para dibujar en un lienzo.
                                private Pen pen;
                                // Constante scale factor (Zoom In/Zoom Out).
                                private const float SF = 20;
                                // Objeto Punto que representa a los diez vértices del 
                                // decágono grande.
                                private PointF A, B, C, D, E, F, G, H, I, J;
                                // Objeto Punto que representa a los vértices de la estrella 
                                // grande de cinco puntas.
                                private PointF P, Q, R, S, T, O;
                                private PointF P1, P2, P3, P4, P5;
                                // Objeto Punto que representa a los vértices de la estrella 
                                // pequeña de cinco puntas.
                                private PointF Bp, Dp, Fp, Hp, Jp;
                                private PointF P6, P7, P8, P9, P10;
                                // Objeto Punto que representa a cinco de los diez vértices 
                                // del decágono pequeño.
                                private PointF Pp, Qp, Rp, Sp, Tp;

                                // Funciones miembro - Métodos.

                                // Constructor sin parámetros.
                                public CTenPointedStarPolygon()
                                {
                                    side = 0.0f;
                                }

                                // Función que lee el lado del decágono.
                                public void ReadData(TextBox txtSideSide)
                                {            
                                    try
                                    {
                                        side = float.Parse(txtSideSide.Text);
                                    }
                                    catch
                                    {
                                        MessageBox.Show("Ingreso no válido...");
                                    }
                                }

                                // Función que inicializa los datos y controles de la figura.
                                public void InitializeData(TextBox txtSide,
                                                        PictureBox picCanvas)
                                {
                                    txtSide.Text = ""; txtSide.Focus();
                                    side = 0.0f; picCanvas.Refresh();
                                }

                                // Función que calcula los valores de los diez vértices del 
                                // decágono grande.
                                private void CalculateVertexBigDecagon()
                                {            
                                    angle1 = 36.0f * (float)Math.PI / 180.0f;
                                    angle2 = 18.0f * (float)Math.PI / 180.0f;
                                    alpha = 10.0f * (float)Math.PI / 180.0f;

                                    a = (side/2.0f) * (float)Math.Tan(alpha);
                                    b = side * (float)Math.Sin(angle1);
                                    e = side * (float)Math.Cos(angle1);
                                    c = side * (float)Math.Cos(angle2);
                                    d = side * (float)Math.Sin(angle2);           

                                    A.X = a + b + c; A.Y = 0;
                                    B.X = a +b + 2 * c; B.Y = d;
                                    C.X = a + 2 * b + 2 * c; C.Y = d + e;
                                    D.X = a + 2 * b + 2 * c; D.Y = d + e + side;
                                    E.X = a + b + 2 * c; E.Y = d + 2 * e + side;
                                    F.X = a + b + c; F.Y = 2 * d + 2 * e + side;
                                    G.X = a + b; G.Y = d + 2 * e + side;
                                    H.X = a; H.Y = d + e + side;
                                    I.X = a; I.Y = d + e;
                                    J.X = a + b; J.Y = d;

                                    O.X = a + b + c; O.Y = d + e + side / 2.0f;
                                }

                                // Función que grafica:
                                // a) Un decágono grande a base de diez vértices
                                // y líneas de color azul obscuro (DarkBlue).
                                // b) Un primer pentágono regular grande de color 
                                // verde mar claro (LightSeaGreen).
                                // c) Un segundo pentágono regular grande de color
                                // color verde bosque (ForestGreen).
                                // d) Estrellas de 5 puntas de color azul violeta 
                                // (BlueViolet).
                                public void PlotBigDecagon(PictureBox picCanvas)
                                {
                                    graph = picCanvas.CreateGraphics();
                                    CalculateVertexBigDecagon();

                                    A.X = A.X * SF; A.Y = A.Y * SF;
                                    B.X = B.X * SF; B.Y = B.Y * SF;
                                    C.X = C.X * SF; C.Y = C.Y * SF;
                                    D.X = D.X * SF; D.Y = D.Y * SF;
                                    E.X = E.X * SF; E.Y = E.Y * SF;
                                    F.X = F.X * SF; F.Y = F.Y * SF;
                                    G.X = G.X * SF; G.Y = G.Y * SF;
                                    H.X = H.X * SF; H.Y = H.Y * SF;
                                    I.X = I.X * SF; I.Y = I.Y * SF;
                                    J.X = J.X * SF; J.Y = J.Y * SF;

                                    pen = new Pen(Color.DarkBlue, 3);
                                    graph.DrawLine(pen, A.X, A.Y, B.X, B.Y);
                                    graph.DrawLine(pen, B.X, B.Y, C.X, C.Y);
                                    graph.DrawLine(pen, C.X, C.Y, D.X, D.Y);
                                    graph.DrawLine(pen, D.X, D.Y, E.X, E.Y);
                                    graph.DrawLine(pen, E.X, E.Y, F.X, F.Y);
                                    graph.DrawLine(pen, F.X, F.Y, G.X, G.Y);
                                    graph.DrawLine(pen, G.X, G.Y, H.X, H.Y);
                                    graph.DrawLine(pen, H.X, H.Y, I.X, I.Y);
                                    graph.DrawLine(pen, I.X, I.Y, J.X, J.Y);
                                    graph.DrawLine(pen, A.X, A.Y, J.X, J.Y);

                                    pen = new Pen(Color.LightSeaGreen, 3);
                                    graph.DrawLine(pen, A.X, A.Y, I.X, I.Y);
                                    graph.DrawLine(pen, A.X, A.Y, C.X, C.Y);
                                    graph.DrawLine(pen, C.X, C.Y, E.X, E.Y);
                                    graph.DrawLine(pen, G.X, G.Y, I.X, I.Y);
                                    graph.DrawLine(pen, E.X, E.Y, G.X, G.Y);
                                    
                                    pen = new Pen(Color.ForestGreen, 3);
                                    graph.DrawLine(pen, B.X, B.Y, J.X, J.Y);
                                    graph.DrawLine(pen, H.X, H.Y, J.X, J.Y);
                                    graph.DrawLine(pen, B.X, B.Y, D.X, D.Y);
                                    graph.DrawLine(pen, F.X, F.Y, H.X, H.Y);
                                    graph.DrawLine(pen, D.X, D.Y, F.X, F.Y);

                                    pen = new Pen(Color.BlueViolet, 3);            
                                    graph.DrawLine(pen, A.X, A.Y, D.X, D.Y);
                                    graph.DrawLine(pen, A.X, A.Y, E.X, E.Y);
                                    graph.DrawLine(pen, A.X, A.Y, F.X, F.Y);
                                    graph.DrawLine(pen, A.X, A.Y, G.X, G.Y);
                                    graph.DrawLine(pen, A.X, A.Y, H.X, H.Y);           
                                    
                                    graph.DrawLine(pen, B.X, B.Y, E.X, E.Y);
                                    graph.DrawLine(pen, B.X, B.Y, F.X, F.Y);
                                    graph.DrawLine(pen, B.X, B.Y, G.X, G.Y);
                                    graph.DrawLine(pen, B.X, B.Y, H.X, H.Y);
                                    graph.DrawLine(pen, B.X, B.Y, I.X, I.Y);           
                                    
                                    graph.DrawLine(pen, C.X, C.Y, F.X, F.Y);
                                    graph.DrawLine(pen, C.X, C.Y, G.X, G.Y);
                                    graph.DrawLine(pen, C.X, C.Y, H.X, H.Y);
                                    graph.DrawLine(pen, C.X, C.Y, I.X, I.Y);
                                    graph.DrawLine(pen, C.X, C.Y, J.X, J.Y);           
                                    
                                    graph.DrawLine(pen, D.X, D.Y, G.X, G.Y);
                                    graph.DrawLine(pen, D.X, D.Y, H.X, H.Y);
                                    graph.DrawLine(pen, D.X, D.Y, I.X, I.Y);
                                    graph.DrawLine(pen, D.X, D.Y, J.X, J.Y);            
                                    
                                    graph.DrawLine(pen, E.X, E.Y, H.X, H.Y);
                                    graph.DrawLine(pen, E.X, E.Y, I.X, I.Y);
                                    graph.DrawLine(pen, E.X, E.Y, J.X, J.Y);            
                                    
                                    graph.DrawLine(pen, F.X, F.Y, I.X, I.Y);
                                    graph.DrawLine(pen, F.X, F.Y, J.X, J.Y);            
                                    
                                    graph.DrawLine(pen, G.X, G.Y, J.X, J.Y);                        
                                }

                                // Función que calcula el punto de intersección entre dos rectas
                                // utilizando el Teorema 1.
                                private PointF CalculateIntersectionPoint(PointF P1, PointF P2,
                                                                        PointF P3, PointF P4)
                                {
                                    PointF P = new PointF();
                                    float m1 = (P2.Y - P1.Y) / (P2.X - P1.X);
                                    float m2 = (P4.Y - P3.Y) / (P4.X - P3.X);

                                    if((m1 - m2) != 0)
                                    {
                                        P.X = (P3.Y - P1.Y + m1 * P1.X - m2 * P3.X) / (m1 - m2);
                                        P.Y = P1.Y + m1 * (P.X - P1.X);                
                                    }
                                    return (P);
                                }

                                // Función que calcula los valores de los diez vértices de 
                                // la estrella grande de cinco puntas.
                                private void CalculateVertexFivePointedBigStar()
                                {
                                    P = CalculateIntersectionPoint(J, C, B, I);
                                    T = CalculateIntersectionPoint(I, D, A, H);
                                    Q = CalculateIntersectionPoint(A, D, C, H);
                                    S = CalculateIntersectionPoint(I, F, B, G);
                                    R = CalculateIntersectionPoint(J, E, C, F);

                                    P1 = CalculateIntersectionPoint(T, Q, P, S);
                                    P2 = CalculateIntersectionPoint(T, Q, P, R);
                                    P3 = CalculateIntersectionPoint(P, R, Q, S);
                                    P4 = CalculateIntersectionPoint(T, R, Q, S);
                                    P5 = CalculateIntersectionPoint(T, R, P, S);
                                }

                                // Función que grafica una estrella grande de cinco puntas 
                                // con un líneas de color azul obscuro (DarkBlue).
                                public void PlotFivePointedBigStar(PictureBox picCanvas)
                                {
                                    graph = picCanvas.CreateGraphics();

                                    CalculateVertexBigDecagon();
                                    CalculateVertexFivePointedBigStar();

                                    P.X = P.X * SF; P.Y = P.Y * SF;
                                    T.X = T.X * SF; T.Y = T.Y * SF;
                                    Q.X = Q.X * SF; Q.Y = Q.Y * SF;
                                    S.X = S.X * SF; S.Y = S.Y * SF;
                                    R.X = R.X * SF; R.Y = R.Y * SF;

                                    P1.X = P1.X * SF; P1.Y = P1.Y * SF;
                                    P2.X = P2.X * SF; P2.Y = P2.Y * SF;
                                    P3.X = P3.X * SF; P3.Y = P3.Y * SF;
                                    P4.X = P4.X * SF; P4.Y = P4.Y * SF;
                                    P5.X = P5.X * SF; P5.Y = P5.Y * SF;

                                    pen = new Pen(Color.DarkBlue, 3);            

                                    graph.DrawLine(pen, P.X, P.Y, P2.X, P2.Y);
                                    graph.DrawLine(pen, P2.X, P2.Y, Q.X, Q.Y);
                                    graph.DrawLine(pen, Q.X, Q.Y, P3.X, P3.Y);
                                    graph.DrawLine(pen, P3.X, P3.Y, R.X, R.Y);
                                    graph.DrawLine(pen, R.X, R.Y, P4.X, P4.Y);
                                    graph.DrawLine(pen, P4.X, P4.Y, S.X, S.Y);
                                    graph.DrawLine(pen, S.X, S.Y, P5.X, P5.Y);
                                    graph.DrawLine(pen, P5.X, P5.Y, T.X, T.Y);
                                    graph.DrawLine(pen, T.X, T.Y, P1.X, P1.Y);
                                    graph.DrawLine(pen, P1.X, P1.Y, P.X, P.Y);
                                }

                                // Función que calcula los valores de los diez vértices de 
                                // la estrella pqueña de cinco puntas.
                                private void CalculateVertexFivePointedSmallStar()
                                {
                                    Pp.X = O.X; Pp.Y = T.Y;            
                                    Tp = CalculateIntersectionPoint(I, D, P, S);
                                    Qp = CalculateIntersectionPoint(P, R, C, H);
                                    Sp = CalculateIntersectionPoint(T, R, B, G);
                                    Rp = CalculateIntersectionPoint(J, E, Q, S);

                                    P6 = CalculateIntersectionPoint(Tp, Qp, Pp, Sp);
                                    P7 = CalculateIntersectionPoint(Tp, Qp, Pp, Rp);
                                    P8 = CalculateIntersectionPoint(Pp, Rp, Qp, Sp);
                                    P9 = CalculateIntersectionPoint(Tp, Rp, Qp, Sp);
                                    P10 = CalculateIntersectionPoint(Tp, Rp, Pp, Sp);
                                }

                                // Función que grafica una estrella pequeña de cinco puntas 
                                // con un relleno de color azur (Azure).
                                public void PlotFivePointedSmallStar(PictureBox picCanvas)
                                {
                                    graph = picCanvas.CreateGraphics();

                                    CalculateVertexBigDecagon();
                                    CalculateVertexFivePointedBigStar();
                                    CalculateVertexFivePointedSmallStar();

                                    Pp.X = Pp.X * SF; Pp.Y = Pp.Y * SF;
                                    Tp.X = Tp.X * SF; Tp.Y = Tp.Y * SF;
                                    Qp.X = Qp.X * SF; Qp.Y = Qp.Y * SF;
                                    Sp.X = Sp.X * SF; Sp.Y = Sp.Y * SF;
                                    Rp.X = Rp.X * SF; Rp.Y = Rp.Y * SF;

                                    P6.X = P6.X * SF; P6.Y = P6.Y * SF;
                                    P7.X = P7.X * SF; P7.Y = P7.Y * SF;
                                    P8.X = P8.X * SF; P8.Y = P8.Y * SF;
                                    P9.X = P9.X * SF; P9.Y = P9.Y * SF;
                                    P10.X = P10.X * SF; P10.Y = P10.Y * SF;
                                    
                                    SolidBrush brush = new SolidBrush(Color.Azure);
                                    PointF[] polPoints1 = { Pp, P7, Qp, P8, Rp, P9,
                                                            Sp, P10, Tp, P6, Pp };
                                    graph.FillPolygon(brush, polPoints1);            
                                }

                                // Función que calcula los valores de los diez vértices del 
                                // decágono pequeño.
                                private void CalculateVertexSmallDodecagon()
                                {
                                    P = CalculateIntersectionPoint(J, C, B, I);
                                    T = CalculateIntersectionPoint(I, D, A, H);
                                    Q = CalculateIntersectionPoint(A, D, C, H);
                                    S = CalculateIntersectionPoint(I, F, B, G);
                                    R = CalculateIntersectionPoint(J, E, C, F);

                                    Bp = CalculateIntersectionPoint(J, C, B, G);
                                    Dp = CalculateIntersectionPoint(I, D, C, F);
                                    Fp = CalculateIntersectionPoint(H, E, D, G);
                                    Hp = CalculateIntersectionPoint(I,F, C, H);
                                    Jp = CalculateIntersectionPoint(J, E, B, I);            
                                }

                                // Función que grafica un decágono pequeño a base de diez
                                // vértices y líneas de color azul maíz azul (CornflowerBlue).
                                public void PlotSmallDecagon(PictureBox picCanvas)
                                {
                                    graph = picCanvas.CreateGraphics();

                                    CalculateVertexBigDecagon();
                                    CalculateVertexSmallDodecagon();

                                    P.X = P.X * SF; P.Y = P.Y * SF;
                                    Q.X = Q.X * SF; Q.Y = Q.Y * SF;
                                    R.X = R.X * SF; R.Y = R.Y * SF;
                                    S.X = S.X * SF; S.Y = S.Y * SF;
                                    T.X = T.X * SF; T.Y = T.Y * SF;

                                    Bp.X = Bp.X * SF; Bp.Y = Bp.Y * SF;
                                    Dp.X = Dp.X * SF; Dp.Y = Dp.Y * SF;
                                    Fp.X = Fp.X * SF; Fp.Y = Fp.Y * SF;
                                    Hp.X = Hp.X * SF; Hp.Y = Hp.Y * SF;
                                    Jp.X = Jp.X * SF; Jp.Y = Jp.Y * SF;
                                    
                                    pen = new Pen(Color.CornflowerBlue, 3);
                                    graph.DrawLine(pen, P.X, P.Y, Bp.X, Bp.Y);
                                    graph.DrawLine(pen, Bp.X, Bp.Y, Q.X, Q.Y);
                                    graph.DrawLine(pen, Q.X, Q.Y, Dp.X, Dp.Y);
                                    graph.DrawLine(pen, Dp.X, Dp.Y, R.X, R.Y);
                                    graph.DrawLine(pen, R.X, R.Y, Fp.X, Fp.Y);
                                    graph.DrawLine(pen, Fp.X, Fp.Y, S.X, S.Y);
                                    graph.DrawLine(pen, S.X, S.Y, Hp.X, Hp.Y);
                                    graph.DrawLine(pen, Hp.X, Hp.Y, T.X, T.Y);
                                    graph.DrawLine(pen, T.X, T.Y, Jp.X, Jp.Y);
                                    graph.DrawLine(pen, Jp.X, Jp.Y, P.X, P.Y);
                                }

                                // Función que grafica el círculo circumscrito al decágono grande
                                // de color gris (Gray).
                                public void PlotCircle(PictureBox picCanvas)
                                {
                                    float diameter;
                                    graph = picCanvas.CreateGraphics();
                                    pen = new Pen(Color.Gray, 3);            

                                    CalculateVertexBigDecagon();
                                    diameter = (float)Math.Sqrt((F.X - A.X) * (F.X - A.X) + 
                                                                (F.Y - A.Y) * (F.Y - A.Y));
                                                
                                    graph.DrawEllipse(pen, 0, 0, diameter * SF, diameter * SF);
                                }

                                // Función que cierra un formulario.
                                public void CloseForm(Form ObjForm)
                                {
                                    ObjForm.Close();
                                }
                            }
                        }
                        `
                    },
                    {
                        problema:'La implementación de la clase frmTenPointedStarPolygon, se presenta a continuación en la Tabla 1.3.2, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica plantada en este pracnique.',
                        tablaN:'Tabla 1.3.2. ',
                        tablaDescrip:'Código de la clase frmTenPointedStarPolygon del programa.',
                        tablaDatos:
                        `
                        using System;
                        using System.Collections.Generic;
                        using System.ComponentModel;
                        using System.Data;
                        using System.Drawing;
                        using System.Linq;
                        using System.Text;
                        using System.Threading.Tasks;
                        using System.Windows.Forms;

                        namespace WinAppGeometricFiguresV2
                        {
                            public partial class frmTenPointedStarPolygon : Form
                            {
                                // Definición de un objeto de tipo CTenPointedStarPolygon.
                                CTenPointedStarPolygon ObjTenPointedStarPolygon = new CTenPointedStarPolygon();
                                
                                public frmTenPointedStarPolygon()
                                {
                                    InitializeComponent();
                                }

                                private void frmTenPointedStarPolygon_Load(object sender, EventArgs e)
                                {
                                    // Inicialización de los datos y controles.
                                    // Llamada a la función InitializeData.
                                    ObjTenPointedStarPolygon.InitializeData(txtSide, picCanvas);
                                }

                                private void btnCalculate_Click(object sender, EventArgs e)
                                {
                                    // Lectura de datos.
                                    // Llamada a la función ReadData.
                                    ObjTenPointedStarPolygon.ReadData(txtSide);
                                    // Gráfica del círculo circumscrito al decágono grande.
                                    // Llamada a la función PlotCircle.
                                    ObjTenPointedStarPolygon.PlotCircle(picCanvas);
                                    // Gráfica del decágono grande.
                                    // Llamada a la función PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotBigDecagon(picCanvas);
                                    // Gráfica de la estrella grande de cinco puntas.
                                    // Llamada a la función PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotFivePointedBigStar(picCanvas);
                                    // Gráfica de la estrella pequeña de cinco puntas.
                                    // Llamada a la función PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotFivePointedSmallStar(picCanvas);
                                    // Gráfica del decágono pequeño.
                                    // Llamada a la función PlotSmallDecagon.
                                    ObjTenPointedStarPolygon.PlotSmallDecagon(picCanvas);
                                }

                                private void btnReset_Click(object sender, EventArgs e)
                                {
                                    // Inicialización de los datos y controles.
                                    // Llamada a la función InitializeData.
                                    ObjTenPointedStarPolygon.InitializeData(txtSide, picCanvas);
                                }

                                private void btnExit_Click(object sender, EventArgs e)
                                {
                                    // Cierre de un formulario.
                                    // Llamada a la función CloseForm.
                                    ObjTenPointedStarPolygon.CloseForm(this);
                                }
                            }
                        }
                        `
                    } 
                ]
            },
            E:{
                subtitulo:'E)	Pruebas de la Aplicación',
                problema:'A continuación, en la Figura 1.3.4, se muestra un ejemplo de la corrida del programa:',
                fotoPath:'./assets/images/Capitulos/I/media/image295.png',
                fotoN:'Figura 1.3.4 ',
                fotoDescrip:' Corrida del programa'
             }
        }
    ];

    this.casosPropuesto=[
        {label: 'Caso Propuesto 1.1 ', tituloN:'Caso de Estudio 1.1: ',titulo:'Interfaz Gráfica del Juego del Tetris.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar la interfaz del Juego de Tetris, como se muestra en la Figura 1.1.1. El juego consiste en jugar con diferentes formas, cada una compuesta decuatro cuadrados. El área principal (rectángulo grande) debe tener un tamaño de 10x20 cuadrados (es decir, 10 cuadrados de ancho y 20 cuadrados de alto). El pequeño rectángulo en la derecha muestra la “siguiente forma” que pronto aparecerá en el área principal (En el ejemplo aparece una figura en “L” de color roja). Para mayor información del juego del Tetris, se puede consultar en el siguiente enlace en la Web: http://en.wikipedia.org/wiki/Tetris.',tareaDescrip:'Las tareas de este proyecto incluyen:',tareas:[{tarea:'•	Dibujar todo lo que se muestra en esta figura, como por ejemplo la posición de cada componente y el rectángulo mayor que contiene al resto de figuras.'},{tarea:'•	Si el cursor del mouse se mueve dentro del área principal, aparecerá el mensaje de “PAUSA” (con una fuente grande); y si el cursor se mueve hacia afuera del área, desaparecerá el mensaje de “PAUSA”.'},{tarea:'•	El cambio de la dimensión de la ventana solo cambiará posiblemente el tamaño, pero no la posición relativa y la relación de aspecto de cualquier componente.'},{tarea:'•	Si se presiona el botón “SALIR”, el programa termina y se cierra (esto no debería ser la salida del menú desplegable estándar de la ventana).'}],fotoPath:'./assets/images/Capitulos/I/media/image296.png',fotoN:'Figura 1.1.1 ',fotoDescrip:'Juego del Tetris. (Image tomada de: XYZ).'},
        {label: 'Caso Propuesto 1.2', tituloN:'Caso de Estudio 1.2: ',titulo:'Panal de Abejas.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar un panal de abejas, como se muestra en la Figura 1.2.1. Para dibujar esta figura se debe leer el valor del lado de un hexágono como, por ejemplo: lado igual a 2. Se recomienda encerrar la figura dentro de un rectángulo y realizar los cálculos de los segmentos que encierran a la figura para poder graficarla.',fotoPath:'./assets/images/Capitulos/I/media/image297.png',fotoN:'Figura 1.2.1 ',fotoDescrip:'Panal de Abejas. (Imagen tomada de Klipartz: https://www.klipartz.com/es/sticker-png-tigsh)'},
        {label: 'Caso Propuesto 1.3', tituloN:'Caso de Estudio 1.3: ',titulo:'Gema de 10 Lados y Polígonos Estrellados de 10 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 10 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image298.png',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y polígonos estrellados de 10 puntas.'}
    ];

    this.praqniquePropuesto=[
        {label: 'Pracnique Propuesto 1.1', tituloN:'Pracnique 1.1: ',titulo:'Polígonos Estrellados de 16 y 8 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un polígono regular de 16 lados, dibujar la figura geométrica correspondiente y los diferentes polígonos estrellados de 8 puntas, tal y como se muestra en la figura 1.1.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image299.jpg',fotoN:'Figura 1.1.1 ',fotoDescrip:'Polígonos estrellados de 16 y 8 puntas.'},
        {label: 'Pracnique Propuesto 1.2', tituloN:'Pracnique 1.2: ',titulo:'Pentágonos y Polígonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un pentágono, dibujar la figura geométrica correspondiente y los diferentes polígonos estrellados de 5 puntas, tal y como se muestra en la figura 1.2.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image300.jpg',fotoN:'Figura 1.2.1 ',fotoDescrip:'Pentágonos y polígonos estrellados de 5 puntas.'},
        {label: 'Pracnique Propuesto 1.3', tituloN:'Pracnique 1.3: ',titulo:'Gema de 10 Lados y Polígonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 5 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image301.jpg',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y polígonos estrellados de 5 puntas.'}
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
          { label: 'Problema 1', content: 'Caso 1'},
          { label: 'Problema 2', content: 'Caso 2'},
          { label: 'Problema 3', content: 'Caso 3'}
        ]);
      }, 1000);
    });

  }
}


