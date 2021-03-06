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
            // Crear un pincel s??lido de relleno.
            SolidBrush blueBrush = new SolidBrush(Color.Blue);

            // Crear siete puntos que definen un pol??gono irregular.
            PointF point1 = new PointF(50.0F, 50.0F);
            PointF point2 = new PointF(100.0F, 25.0F);
            PointF point3 = new PointF(200.0F, 5.0F);
            PointF point4 = new PointF(250.0F, 50.0F);
            PointF point5 = new PointF(300.0F, 100.0F);
            PointF point6 = new PointF(350.0F, 200.0F);
            PointF point7 = new PointF(250.0F, 250.0F);
            
            // Crear un arreglo de objetos de tipo PointF para siete puntos.
            PointF[] curvePoints = {point1, point2, point3, point4, point5, point6, point7};

            // Rellenar el ??rea poligonal en la pantalla.
            e.Graphics.FillPolygon(blueBrush, curvePoints);
        }
        `,
        

    }
    ];

    this.prefTabs = [
      {
        link:'https://drive.google.com/uc?id=12KQht0YOhjqFzjuu5WgW29ZOEbCozM5U&export=download',
        label: 'Caso 1.1',
        title: 'Graficar un Rect??ngulo y Encontrar el Per??metro y su ??rea.',
        problema: 'Escribir un programa para graficar un rect??ngulo, calcular e imprimir el per??metro y su ??rea. (Ver Figura 1.1.1)',
        formulaA: ['$P=2a+2b$',
                   '$A=ab$'],
        imagen1: './assets/images/Capitulos/I/media/image8.png',
        figuraNum1: 'Figura 1.1.1. ',
        figura1: 'El rect??ngulo y sus f??rmulas.',
        analisis: 'Claramente, se puede ver que las entradas del problema son el ancho y el largo del rect??ngulo. Hay tres salidas requeridas: el per??metro, el ??rea del rect??ngulo y el gr??fico de la figura geom??trica. Partiendo de un conocimiento b??sico de geometr??a, se sabe que hay una relaci??n entre el ancho y el largo del rect??ngulo con el per??metro y con el ??rea de la figura geom??trica. Las f??rmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$width$',b:'/* ancho del rect??ngulo */'},
          {t:'',a:'$height$',b:'/* largo del rect??ngulo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* per??metro del rect??ngulo */'},
          {t:'',a:'$area$',b:'/* ??rea del rect??ngulo  */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gr??fico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'F??rmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=2a+2b$',b:'/* F??rmula del per??metro de un rect??ngulo  */'},
          {t:'',a:'$(2)A=ab$',b:'/* F??rmula del ??rea de un rect??ngulo  */'}],
        diagramaES: 'En la Figura 1.1.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: las variables ???width??? y ???height???; b) Salidas: la variable ???perimetro???, la variable ???area??? y el objeto ???graph???; c) Auxiliares: el objeto ???pen???; d) Constantes: el factor de escalamiento ???SF???.',
        imagen2: './assets/images/Capitulos/I/media/image9.png',
        figuraNum2: 'Figura 1.1.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicaci??n se muestra en la Figura 1.1.3 con notaci??n UML. En este diagrama se puede ver que la aplicaci??n est?? compuesta por seis clases, donde la clase Program se compone por la clase frmRectangle que resulta ser una clase derivada de la clase Form. La clase frmRectangle se compone de un objeto de tipo CRectangle. ',
        diagramaC2: 'La clase CRectangle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gr??fico de la aplicaci??n y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Adem??s, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geom??trica. Los otros atributos que se tienen en la clase CRectangle son el ancho, el largo, el per??metro y el ??rea representados por los datos miembros mWidth, mHeight, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image10.png',
        figuraNum3: 'Figura 1.1.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.1.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Funci??n ReadData()',a:'1.	Leer el ancho del rect??ngulo.',b:'2.	Leer el largo del rect??ngulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Funci??n PerimeterRectangle()',a:'1.	Calcular el per??metro.',b:'1.1.	Asignar el producto de dos veces el ancho por dos veces el largo a la variable ???perimeter???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Funci??n AreaRectangle()',a:'1.	Calcular el ??rea.',b:'1.1.	Asignar el producto del ancho por el largo a la variable ???area???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Funci??n PrintData()',a:'1.	Imprimir el valor de la variable ???perimeter??? y de la variable ???area???.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Funci??n PlotShape()',a:'1.	Graficar un rect??ngulo.',b:'1.1.	Utilizar el objeto ???Graph??? con la funci??n DrawRectangle para graficar con la pluma ???Pen??? un rect??ngulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: 'Para implementar la soluci??n, se deben escribir los algoritmos como una Aplicaci??n para Windows con C# .NET que contenga toda la informaci??n necesaria para completar la soluci??n de dicho problema y pueda la aplicaci??n ser ejecutada desde Visual Studio .NET.',
        implementacion2: 'Para comenzar la construcci??n de esta aplicaci??n, empiece por ejecutar el Entorno de Desarrollo Integrado (IDE ??? Integrated Development Environment) de Visual Studio 2019 y seleccione Crear un proyecto, como se muestra en la Figura 1.1.4.',
        imagen4: './assets/images/Capitulos/I/media/image11.png',
        figuraNum4: 'Figura 1.1.4. ',
        figura4: 'Creaci??n de un proyecto en C# .NET',
        implementacion3: 'A continuaci??n, en el cuadro de di??logo de Crear un proyecto se debe seleccionar la Plantilla (Template) correspondiente a la Aplicaci??n de Windows Forms (.NET Framework) con el lenguaje C# y luego presione el bot??n de Siguiente, como se muestra en la Figura 1.1.5.',
        imagen5: './assets/images/Capitulos/I/media/image12.png',
        figuraNum5: 'Figura 1.1.5. ',
        figura5: 'Creaci??n de una Aplicaci??n de Windows Forms.',
        implementacion4: 'Luego, aparece un cuadro de di??logo de Configure su nuevo proyecto, donde se debe modificar el nombre de la aplicaci??n con WinAppRectangle y se debe seleccionar una localidad para guardar en el disco duro dicho proyecto como, por ejemplo: C:\\Users\\cxvil\\source\\repos. (Ver Figura 1.1.6).',
        imagen6: './assets/images/Capitulos/I/media/image13.png',
        figuraNum6: 'Figura 1.1.6. ',
        figura6: 'Configuraci??n de un nuevo proyecto.',
        implementacion5: 'Finalmente se crea la Aplicaci??n de Windows Forms cuyo nombre es WinAppRectangle en el IDE de C# .NET. Como se puede ver en la Figura 1.1.7, el ambiente de trabajo de la aplicaci??n consta de seis partes: 1) Barra de Men??s; 2) Barra de Tareas; 3) Caja de Herramientas; 4) Explorador de Soluciones; 5) Ventana de Propiedades; 6) Formulario (Form1). (Ver Figura 1.1.7).',
        imagen7: './assets/images/Capitulos/I/media/image14.png',
        figuraNum7: 'Figura 1.1.7. ',
        figura7: 'IDE de C# .NET.',
        implementacion6: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmRectangle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicaci??n de Windows Forms con el nombre de WinAppRectangle, como se muestra en la Figura 1.1.8. Adem??s, cree la clase llamada CRectangle con la cual va a trabajar el formulario frmRectangle, aplicando el concepto de Composici??n y Agregaci??n.',
        imagen8: './assets/images/Capitulos/I/media/image15.png',
        figuraNum8: 'Figura 1.1.8. ',
        figura8: 'Modificaci??n del nombre del Formulario en la Aplicaci??n.',
        implementacion7: 'Se necesita a??adir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cuatro Etiquetas (Labels), cuatro Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene dos Etiquetas (Label) y dos Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox). Disponga los controles de tal manera que se asemeje a la Figura 1.1.9 que se muestra a continuaci??n.',
        imagen9: './assets/images/Capitulos/I/media/image16.png',
        figuraNum9: 'Figura 1.1.9. ',
        figura9: 'Disposici??n de los Controles dentro del Formulario. ',
        implementacion8: 'Utilice la Tabla 1.1.1, para modificar las propiedades restantes de cada objeto.',
        tabla1:'Tabla 1.1.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmRectangle','Rect??ngulo','CenterScreen ']},
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
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gr??fico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.1.10.',
        imagen10: './assets/images/Capitulos/I/media/image17.png',
        figuraNum10: 'Figura 1.1.10. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicaci??n aceptar?? el ingreso de valores flotantes o enteros en dos Cajas de Texto (TextBox) y desplegar?? los resultados en otras dos Cajas de Texto (TextBoxes) y el gr??fico de la figura se desplegar?? en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CRectangle tiene los siguientes datos miembro: a) mWidth , mHeight, que representan al ancho y al largo del rect??ngulo que son de tipo float; b) mPerimeter, mArea, que representan al per??metro y al ??rea del rect??ngulo que son tambi??n de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase tambi??n posee un grupo de m??todos de acuerdo a las acciones que puede hacer y que b??sicamente ser??n funciones para poder representar y operar un rect??ngulo en el plano, entre las m??s importantes est??n las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos.',a:'Este m??todo inicializa los primeros cuatro datos miembros de la clase CRectangle con el valor de cero.',
        b:`// Constructor sin par??metros.
        public CRectangle()
        {
           mWidth = 0.0f; mHeight = 0.0f;
           mPerimeter = 0.0f; mArea = 0.0f;
        }`},
        {t:'b)	Funci??n miembro ReadData. ',a:'Esta funci??n permite leer los valores del ancho y del largo del rect??ngulo ingresados en cajas de texto. En este caso es necesario realizar un casting o conversi??n de tipo de datos de String a float utilizando la funci??n float.Parse() y adem??s se utiliza la funci??n try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar n??meros ingrese letras por error.',
        b:`// Funci??n que lee los datos de entrada del rect??ngulo.
        public void ReadData(TextBox txtWidth, TextBox txtHeight)
        {
            try
            {
                mWidth = float.Parse(txtWidth.Text);
                mHeight = float.Parse(txtHeight.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no v??lido...", "Mensaje de error");
            }
         }`},
        {t:'c)	Funci??n miembro Perimeter. ',a:'Esta funci??n permite calcular el per??metro de un rect??ngulo, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:`// Funci??n que calcula el per??metro del rect??ngulo.
          public void PerimeterRectangle()
          {
              mPerimeter = 2 * mWidth + 2 * mHeight;
          }`},
          {t:'d)	Funci??n miembro Area. ',a:'Esta funci??n permite calcular el ??rea de un rect??ngulo, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:`// Funci??n que calcula el ??rea del rect??ngulo.
          public void AreaRectangle()
          {
              mArea = mWidth * mHeight;
          }`},
          {t:'e)	Funci??n miembro PrintData. ',a:'Esta funci??n permite imprimir en cajas de texto los valores del per??metro y del ??rea del rect??ngulo calculados, para lo cual es necesario realizar un casting o conversi??n de tipo float a String, utilizando la funci??n ToString().',
          b:`// Funci??n que imprime el per??metro y el ??rea del rect??ngulo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }`},
          {t:'f)	Funci??n miembro InitializeData. ',a:'Esta funci??n permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los s??mbolos de comillas dobles (??????). Para inicializar la caja de imagen (picCanvas) se utiliza la funci??n Refresh que significa refrescar o borrar.',
          b:`// Funci??n que inicializa los datos y controles del rect??ngulo.
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
          {t:'g)	Funci??n miembro PlotShape. ',a:'Esta funci??n permite graficar un rect??ngulo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gr??ficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un rect??ngulo en las coordenadas (0,0) y con los valores del ancho y del largo multiplicados por un factor de escalamiento, para que la figura no sea muy peque??a.',
          b:`// Funci??n que grafica un rect??ngulo.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
              // Graficar un rect??ngulo.
              mGraph.DrawRectangle(mPen, 0, 0, mWidth * SF, mHeight * SF);
          }`},
          {t:'h)	Funci??n miembro CloseForm. ',a:'Esta funci??n permite cerrar un formulario utilizando la funci??n Close(), que es llamada por el objeto ObjForm el cual es un par??metro de la funci??n que recibe un objeto de tipo Form.',
          b:`// Funci??n que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }`}
        ],
        tipsProgramacion:[{tip:'Se utiliza la funci??n float.Parse() para convertir un tipo de dato car??cter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la funci??n ToString() para convertir un tipo de dato num??rico a tipo car??cter o cadena.'}],
        implementacion13: 'La implementaci??n de la clase CRectangle, se presenta a continuaci??n en la Tabla 1.1.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.1.2. ',
        tabladetalle2:'C??digo de la clase CRectangle del programa.',
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
        
                // Ancho del rect??ngulo.
                private float mWidth;
                // Largo del rect??ngulo.
                private float mHeight;
                // Per??metro del rect??ngulo.
                private float mPerimeter;
                // ??rea del rect??ngulo.
                private float mArea;
                // Objeto que activa el modo gr??fico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bol??grafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                
                // Funciones Miembro (M??todos).        
                
                // Constructor sin par??metros.
                public CRectangle()
                {
                    mWidth = 0.0f; mHeight = 0.0f;
                    mPerimeter = 0.0f; mArea = 0.0f;
                }
        
                // Funci??n que lee los datos de entrada del rect??ngulo.
                public void ReadData(TextBox txtWidth, TextBox txtHeight)
                {
                    try
                    {
                        mWidth = float.Parse(txtWidth.Text);
                        mHeight = float.Parse(txtHeight.Text);
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no v??lido...",
                                        "Mensaje de error");
                    }
                }
        
                // Funci??n que calcula el per??metro del rect??ngulo.
                public void PerimeterRectangle()
                {
                    mPerimeter = 2 * mWidth + 2 * mHeight;
                }
        
                // Funci??n que calcula el ??rea del rect??ngulo.
                public void AreaRectangle()
                {
                    mArea = mWidth * mHeight;
                }
        
                // Funci??n que imprime el per??metro y el ??rea del rect??ngulo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }
        
                // Funci??n que inicializa los datos y controles del rect??ngulo.
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
        
                // Funci??n que grafica un rect??ngulo.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
                    // Graficar un rect??ngulo.
                    mGraph.DrawRectangle(mPen, 0, 0, mWidth * SF, mHeight * SF);
                }
        
                // Funci??n que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }        
            }
        `,
        implementacion14: 'La implementaci??n de la clase frmRectangle, se presenta a continuaci??n en la Tabla 1.1.3, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica conocida como Rect??ngulo.',
        tabla3:'Tabla 1.1.3. ',
        tabladetalle3:'C??digo de la clase frmRectangle del programa.',
        tablaDatos3:
        `
        public partial class frmRectangle : Form
        {
            // Definici??n de un objeto de tipo CRectangle.
            private CRectangle ObjRectangle = new CRectangle();
    
            public frmRectangle()
            {
                InitializeComponent();
            }
    
            private void frmRectangle_Load(object sender, EventArgs e)
            {
                // Inicializaci??n de los datos y controles.
                // Llamada a la funci??n InitializeData.
                ObjRectangle.InitializeData(txtWidth, txtHeight, 
                                            txtPerimeter, txtArea, 
                                            picCanvas);
            }
    
            private void btnCalculate_Click(object sender, EventArgs e)
            {
                // Lectura de datos.
                // Llamada a la funci??n ReadData.
                ObjRectangle.ReadData(txtWidth, txtHeight);
                // C??lculo del per??metro de un rect??ngulo.
                // Llamada a la funci??n PerimeterRectangle.
                ObjRectangle.PerimeterRectangle();
                // C??lculo del ??rea de un rect??ngulo.
                // Llamada a la funci??n AreaRectangle.
                ObjRectangle.AreaRectangle();
                // Impresi??n de datos.
                // Llamada a la funci??n PrintData.
                ObjRectangle.PrintData(txtPerimeter, txtArea);
                // Graficaci??n de un rect??ngulo.
                // Llamada a la funci??n PlotShape.
                ObjRectangle.PlotShape(picCanvas);
            }
    
            private void btnReset_Click(object sender, EventArgs e)
            {
                // Inicializaci??n de los datos y controles.
                // Llamada a la funci??n InitializeData.
                ObjRectangle.InitializeData(txtWidth, txtHeight,
                                            txtPerimeter, txtArea,
                                            picCanvas);
            }
    
            private void btnExit_Click(object sender, EventArgs e)
            {
                // Cierre de un formulario.
                // Llamada a la funci??n CloseForm.
                ObjRectangle.CloseForm(this);
            }
        }
        `,
        implementacion15: 'La clase frmRectangle tiene como datos miembro un objeto de tipo CRectangle llamado ObjRectangle, el cual es el encargado de acceder a las funciones p??blicas de la clase CRectangle para realizar diferentes c??lculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmRectangle_Load(), se utiliza el objeto ObjRectangle, para llamar a la funci??n p??blica InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del bot??n btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjRectangle, para llamar a las funciones p??blicas: ReadData(), PerimeterRectangle(), AreaRectangle(), PrintData() y PlotShape(). En el evento Click del bot??n btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjRectangle, para llamar a la funci??n p??blica InitializeData(). En el evento Click del bot??n btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjRectangle, para llamar a la funci??n p??blica CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicaci??n basta con presionar la tecla F5 o el bot??n Start de ejecuci??n de la barra de men??s de Visual Studio .NET. La Figura 1.1.11 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la soluci??n porque es relativamente f??cil calcular el ??rea y el per??metro manualmente o utilizando una calculadora. Para un valor de ancho de 8 y de largo de 5 se puede observar la gr??fica de la figura geom??trica en la caja de imagen (picCanvas). El per??metro deber?? ser dos veces el ancho m??s dos veces el largo, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. El ??rea deber?? ser igual al producto del ancho por el largo, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deber?? ingresar unos pocos valores de prueba correspondientes al ancho y al largo de un rect??ngulo. No se necesita probar m??s que con unos pocos casos de prueba para verificar que este programa est?? correcto. ',
        imagen13: './assets/images/Capitulos/I/media/image18.png',
        figuraNum13: 'Figura 1.1.11. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.2',
      link:'https://drive.google.com/uc?id=1H8qICjtOsGOCOI0xgblvujvO4x99YdHZ&export=download',
        title: 'Graficar un Cuadrado y Encontrar el Per??metro y su ??rea.',
        problema: 'Escribir un programa para graficar un cuadrado, calcular e imprimir el per??metro y su ??rea. (Ver Figura 1.2.1)',
        formulaA: ['$P=4l$',
                   '$A=l^2$'],
        imagen1: './assets/images/Capitulos/I/media/image19.jpeg',
        figuraNum1: 'Figura 1.2.1. ',
        figura1: 'El cuadrado y sus f??rmulas.',
        analisis: 'Claramente, se puede ver que la entrada del problema es el lado del cuadrado. Hay tres salidas requeridas: el per??metro, el ??rea del c??rculo y el gr??fico de la figura geom??trica. Partiendo de un conocimiento b??sico de geometr??a, se sabe que hay una relaci??n entre el lado del cuadrado con el per??metro y con el ??rea de la figura geom??trica. Las f??rmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$side$',b:'/* lado del cuadrado */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* per??metro del cuadrado */'},
          {t:'',a:'$area$',b:'/* ??rea del cuadrado */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gr??fico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'F??rmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=4l$',b:'/* F??rmula del per??metrode de un cuadrado */'},
          {t:'',a:'$(2)A=l^2$',b:'/* F??rmula del ??rea de un cuadrado */'}],
        diagramaES: 'En la Figura 1.2.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: las variables ???width??? y ???height???; b) Salidas: la variable ???perimetro???, la variable ???area??? y el objeto ???graph???; c) Auxiliares: el objeto ???pen???; d) Constantes: el factor de escalamiento ???SF???.',
        imagen2: './assets/images/Capitulos/I/media/image20.png',
        figuraNum2: 'Figura 1.2.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicaci??n se muestra en la Figura 1.2.3 con notaci??n UML. En este diagrama se puede ver que la aplicaci??n est?? compuesta por seis clases, donde la clase Program se compone por la clase frmSquare que resulta ser una clase derivada de la clase Form. La clase frmSquare se compone de un objeto de tipo CSquare. ',
        diagramaC2: 'La clase CSquare se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gr??fico de la aplicaci??n y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Adem??s, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geom??trica. Los otros atributos que se tienen en la clase CSquare son el lado, el per??metro y el ??rea representados por los datos miembros mSide, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image21.png',
        figuraNum3: 'Figura 1.2.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.2.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Funci??n ReadData()',a:'1.	Leer el lado del cuadrado.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Funci??n PerimeterSquare()',a:'1.	Calcular el per??metro.',b:'1.1.	Asignar el producto de cuatro veces el lado a la variable ???perimeter???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Funci??n AreaSquare()',a:'1.	Calcular el ??rea.',b:'1.1.	Asignar el cuadrado del lado a la variable ???area???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Funci??n PrintData()',a:'1.	Imprimir el valor de la variable ???perimeter??? y de la variable ???area???.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Funci??n PlotShape()',a:'1.	Graficar un cuadrado.',b:'1.1.	Utilizar el objeto ???Graph??? con la funci??n DrawRectangle para graficar con la pluma ???Pen??? un cuadrado.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la soluci??n, se deben escribir los algoritmos como una Aplicaci??n para Windows con C# .NET que contenga toda la informaci??n necesaria para completar la soluci??n de dicho problema y pueda la aplicaci??n ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcci??n de esta aplicaci??n, se debe seleccionar la opci??n de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicaci??n de Windows Forms con el lenguaje C#. En el cuadro de di??logo configure su proyecto con el nombre de WinAppSquare y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmSquare.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicaci??n de Windows Forms con el nombre de WinAppSquare, como se muestra en la Figura 1.2.4. Adem??s, cree la clase llamada CSquare con la cual va a trabajar el formulario frmSquare, aplicando el concepto de Composici??n y Agregaci??n.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image22.png',
        figuraNum8: 'Figura 1.2.4. ',
        figura8: 'Soluci??n WinAppSquare',
        implementacion7: 'Se necesita a??adir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cuatro Etiquetas (Labels), tres Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene una Etiqueta (Label) y una Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
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
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gr??fico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.2.5.',
        imagen10: './assets/images/Capitulos/I/media/image23.png',
        figuraNum10: 'Figura 1.2.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicaci??n aceptar?? el ingreso de un valor flotante o entero en una Caja de Texto (TextBox) y desplegar?? los resultados en otras dos Cajas de Texto (TextBoxes) y el gr??fico de la figura se desplegar?? en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CSquare tiene los siguientes datos miembro: a) mSide, que representa al lado del cuadrado que es de tipo float; b) mPerimeter, mArea, que representan al per??metro y al ??rea del cuadrado que son tambi??n de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase tambi??n posee un grupo de m??todos de acuerdo a las acciones que puede hacer y que b??sicamente ser??n funciones para poder representar y operar un cuadrado en el plano, entre las m??s importantes est??n las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este m??todo inicializa los primeros tres datos miembros de la clase CSquare con el valor de cero.',
        b:
        `
        // Constructor sin par??metros.
        public CSquare()
        {
            mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        }
        `
        },
        {t:'b)	Funci??n miembro ReadData. ',a:'Esta funci??n permite leer el valor del lado del cuadrado ingresado en una caja de texto. En este caso es necesario realizar un casting o conversi??n de tipo de datos de String a float utilizando la funci??n float.Parse() y adem??s se utiliza la funci??n try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar n??meros ingrese letras por error.',
        b:
        `
        // Funci??n que lee el lado del cuadrado.
        public void ReadData(TextBox txtSide)
        {
            try
            {
                mSide = float.Parse(txtSide.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no v??lido...", "Mensaje de error");
            }
         }
        `
        },
        {t:'c)	Funci??n miembro Perimeter. ',a:'Esta funci??n permite calcular el per??metro de un cuadrado, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:`
          // Funci??n que calcula el per??metro del cuadrado.
          public void PerimeterSquare()
          {
              mPerimeter = 4 * mSide;
          }
          `
          },
          {t:'d)	Funci??n miembro Area. ',a:'Esta funci??n permite calcular el ??rea de un cuadrado, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:
          `
          // Funci??n que calcula el ??rea del cuadrado.
          public void AreaSquare()
          {
              mArea = (float)Math.Pow(mSide, 2);
          }
          `
          },
          {t:'e)	Funci??n miembro PrintData. ',a:'Esta funci??n permite imprimir en cajas de texto los valores del per??metro y del ??rea del cuadrado calculados, para lo cual es necesario realizar un casting o conversi??n de tipo float a String, utilizando la funci??n ToString().',
          b:
          `
          // Funci??n que imprime el per??metro y el ??rea del cuadrado.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }
          `
          },
          {t:'f)	Funci??n miembro InitializeData. ',a:'Esta funci??n permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los s??mbolos de comillas dobles (??????). Para inicializar la caja de imagen (picCanvas) se utiliza la funci??n Refresh que significa refrescar o borrar.',
          b:
          ` 
          // Funci??n que inicializa los datos y controles del cuadrado.
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
          {t:'g)	Funci??n miembro PlotShape. ',a:'Esta funci??n permite graficar un c??rculo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gr??ficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un cuadrado en las coordenadas (0,0) y con los valores del lado asignados al ancho y al largo del rect??ngulo multiplicados por un factor de escalamiento, para que la figura no sea muy peque??a.',
          b:
          `
          // Funci??n que grafica un cuadrado.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
              // Graficar un cuadrado en funci??n de un rect??ngulo.
              mGraph.DrawRectangle(mPen, 0, 0, mSide * SF, mSide * SF);
          }
          `
          },
          {t:'h)	Funci??n miembro CloseForm. ',a:'Esta funci??n permite cerrar un formulario utilizando la funci??n Close(), que es llamada por el objeto ObjForm el cual es un par??metro de la funci??n que recibe un objeto de tipo Form.',
          b:
          `
          // Funci??n que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
            ObjForm.Close();
          }
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la funci??n float.Parse() para convertir un tipo de dato car??cter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la funci??n ToString() para convertir un tipo de dato num??rico a tipo car??cter o cadena.'}],
        implementacion13: 'La implementaci??n de la clase CSquare, se presenta a continuaci??n en la Tabla 1.3.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.2.2. ',
        tabladetalle2:'C??digo de la clase CSquare del programa.',
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
                // Per??metro del cuadrado.
                private float mPerimeter;
                // ??rea del cuadrado.
                private float mArea;
                // Objeto que activa el modo gr??fico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bol??grafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;

                // Funciones Miembro (M??todos).

                // Constructor sin par??metros.
                public CSquare()
                {
                    mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
                }

                // Funci??n que lee el lado del cuadrado.
                public void ReadData(TextBox txtSide)
                {
                    try
                    {
                        mSide = float.Parse(txtSide.Text);
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no v??lido...", "Mensaje de error");
                    }
                }

                // Funci??n que calcula el per??metro del cuadrado.
                public void PerimeterSquare()
                {
                    mPerimeter = 4 * mSide;
                }

                // Funci??n que calcula el ??rea del cuadrado.
                public void AreaSquare()
                {
                    mArea = (float)Math.Pow(mSide, 2);
                }

                // Funci??n que imprime el per??metro y el ??rea del cuadrado.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }

                // Funci??n que inicializa los datos y controles del cuadrado.
                public void InitializeData(TextBox txtSide, TextBox txtPerimeter,
                                          TextBox txtArea, PictureBox picCanvas)
                {
                    mSide = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;

                    txtSide.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtSide.Focus();
                    picCanvas.Refresh();
                }

                // Funci??n que grafica un cuadrado.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
                    // Graficar un cuadrado en funci??n de un rect??ngulo.
                    mGraph.DrawRectangle(mPen, 0, 0, mSide * SF, mSide * SF);
                }

                // Funci??n que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }
        `,
        implementacion14: 'La implementaci??n de la clase frmSquare, se presenta a continuaci??n en la Tabla 1.2.3, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica conocida como Cuadrado.',
        tabla3:'Tabla 1.2.3. ',
        tabladetalle3:'C??digo de la clase frmSquare del programa.',
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
                // Definici??n de un objeto de tipo CSquare.
                CSquare ObjSquare = new CSquare();
        
                public frmSquare()
                {
                    InitializeComponent();
                }
        
                private void frmSquare_Load(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjSquare.InitializeData(txtSide, txtPerimeter, 
                                             txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Lectura de datos.
                    // Llamada a la funci??n ReadData.
                    ObjSquare.ReadData(txtSide);
                    // C??lculo del per??metro de un cuadrado.
                    // Llamada a la funci??n PerimeterSquare.
                    ObjSquare.PerimeterSquare();
                    // C??lculo del ??rea de un cuadrado.
                    // Llamada a la funci??n AreaSquare.
                    ObjSquare.AreaSquare();
                    // Impresi??n de datos.
                    // Llamada a la funci??n PrintData.
                    ObjSquare.PrintData(txtPerimeter, txtArea);
                    // Graficaci??n de un cuadrado.
                    // Llamada a la funci??n PlotShape.
                    ObjSquare.PlotShape(picCanvas);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjSquare.InitializeData(txtSide, txtPerimeter,
                                             txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la funci??n CloseForm.
                    ObjSquare.CloseForm(this);
                }
            }
        }        
        `,
        implementacion15: 'La clase frmSquare tiene como datos miembro un objeto de tipo CSquare llamado ObjSquare, el cual es el encargado de acceder a las funciones p??blicas de la clase CSquare para realizar diferentes c??lculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmCircle_Load(), se utiliza el objeto ObjSquare, para llamar a la funci??n p??blica InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del bot??n btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjSquare, para llamar a las funciones p??blicas: ReadData(), PerimeterSquare(), AreaSquare(), PrintData() y PlotShape(). En el evento Click del bot??n btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjSquare, para llamar a la funci??n p??blica InitializeData(). En el evento Click del bot??n btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjSquare, para llamar a la funci??n p??blica CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicaci??n basta con presionar la tecla F5 o el bot??n Start de ejecuci??n de la barra de men??s de Visual Studio .NET. La Figura 1.2.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la soluci??n porque es relativamente f??cil calcular el ??rea y el per??metro manualmente o utilizando una calculadora. Para un valor de un lado igual a 7 se puede observar la gr??fica de la figura geom??trica en la caja de imagen (picCanvas). El per??metro deber?? ser cuatro veces el lado, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. El ??rea deber?? ser igual al lado elevado al cuadrado, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deber?? ingresar unos pocos valores de prueba correspondientes a los lados de algunos cuadrados. No se necesita probar m??s que con unos pocos casos de prueba para verificar que este programa est?? correcto.',
        imagen13: './assets/images/Capitulos/I/media/image24.png',
        figuraNum13: 'Figura 1.2.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.3',
      link:'https://drive.google.com/uc?id=1lPw80g-VZS1HeTShlkdSLYjqZgoLnLpb&export=download',
        title: 'Graficar un C??rculo y Encontrar el Per??metro y su ??rea.',
        problema: 'Escribir un programa para graficar un c??rculo, calcular e imprimir el per??metro y su ??rea. (Ver Figura 1.3.1)',
        formulaA: ['$P=2\\pi r$',
                   '$A=\\pi r^2$'],
        imagen1: './assets/images/Capitulos/I/media/image25.png',
        figuraNum1: 'Figura 1.3.1. ',
        figura1: 'El c??rculo y sus f??rmulas.',
        analisis: 'Claramente, se puede ver que la entrada del problema es el radio del c??rculo. Hay tres salidas requeridas: el per??metro, el ??rea del c??rculo y el gr??fico de la figura geom??trica. Partiendo de un conocimiento b??sico de geometr??a, se sabe que hay una relaci??n entre el radio del c??rculo con el per??metro y con el ??rea de la figura geom??trica. Las f??rmulas requeridas se incluyen en el requerimiento de los datos.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$radius$',b:'/* radio del c??rculo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* per??metro del c??rculo */'},
          {t:'',a:'$area$',b:'/* ??rea del c??rculo */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gr??fico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$PI = 3.141596$',b:'/* relaci??n entre la longitud de una circunferencia y su di??metro*/'},
          {t:'',a:'$SF = 20$',b:'/* factor de escalamiento  */'},
          {t:'F??rmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=2\\pi r$',b:'/* F??rmula del per??metrode de un c??rculo */'},
          {t:'',a:'$(2)A=\\pi r^2$',b:'/* F??rmula del ??rea de un c??rculo */'}],
        diagramaES: 'En la Figura 1.3.2 se muestra el Diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas, salidas y auxiliares del problema como son: a) Entradas: la variable ???radius???; b) Salidas: la variable ???perimetro???, la variable ???area??? y el objeto ???graph???; c) Auxiliares: el objeto ???pen???; d) Constantes: el factor de escalamiento ???SF??? y la constante PI.',
        imagen2: './assets/images/Capitulos/I/media/image26.png',
        figuraNum2: 'Figura 1.3.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicaci??n se muestra en la Figura 1.3.3 con notaci??n UML. En este diagrama se puede ver que la aplicaci??n est?? compuesta por seis clases, donde la clase Program se compone por la clase frmCircle que resulta ser una clase derivada de la clase Form. La clase frmCircle se compone de un objeto de tipo CCircle. ',
        diagramaC2: 'La clase CCircle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gr??fico de la aplicaci??n y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Adem??s, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geom??trica. Los otros atributos que se tienen en la clase CCircle son el radio, el per??metro y el ??rea representados por los datos miembros mRadius, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image27.png',
        figuraNum3: 'Figura 1.3.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.3.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Funci??n ReadData()',a:'1.	Leer el radio del c??rculo.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Funci??n PerimeterCircle()',a:'1.	Calcular el per??metro.',b:'1.1.	Asignar el producto de dos veces PI por el radio a la variable ???perimeter???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Funci??n AreaCircle()',a:'1.	Calcular el ??rea.',b:'1.1.	Asignar el producto de PI por el cuadrado del radio a la variable ???area???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Funci??n PrintData()',a:'1.	Imprimir el valor de la variable ???perimeter??? y de la variable ???area???.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Funci??n PlotShape()',a:'1.	Graficar un c??rculo.',b:'1.1.	Utilizar el objeto ???Graph??? con la funci??n DrawEllipse para graficar con la pluma ???Pen??? un c??rculo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la soluci??n, se deben escribir los algoritmos como una Aplicaci??n para Windows con C# .NET que contenga toda la informaci??n necesaria para completar la soluci??n de dicho problema y pueda la aplicaci??n ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcci??n de esta aplicaci??n, se debe seleccionar la opci??n de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicaci??n de Windows Forms con el lenguaje C#. En el cuadro de di??logo configure su proyecto con el nombre de WinAppCircle y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmCircle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicaci??n de Windows Forms con el nombre de WinAppCircle, como se muestra en la Figura 1.3.4. Adem??s, cree la clase llamada CCircle con la cual va a trabajar el formulario frmCircle, aplicando el concepto de Composici??n y Agregaci??n.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image28.png',
        figuraNum8: 'Figura 1.3.4. ',
        figura8: 'Soluci??n WinAppCircle.',
        implementacion7: 'Se necesita a??adir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), tres Etiquetas (Labels), tres Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene una Etiqueta (Label) y una Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.3.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.3.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmCircle','C??rculo','CenterScreen ']},
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
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gr??fico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.3.5.',
        imagen10: './assets/images/Capitulos/I/media/image29.png',
        figuraNum10: 'Figura 1.3.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicaci??n aceptar?? el ingreso de un valor flotante o entero en una Caja de Texto (TextBox) y desplegar?? los resultados en otras dos Cajas de Texto (TextBoxes) y el gr??fico de la figura se desplegar?? en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CCircle tiene los siguientes datos miembro: a) mRadius, que representa al radio del c??rculo que es de tipo float; b) mPerimeter, mArea, que representan al per??metro y al ??rea del rect??ngulo que son tambi??n de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase tambi??n posee un grupo de m??todos de acuerdo a las acciones que puede hacer y que b??sicamente ser??n funciones para poder representar y operar un c??rculo en el plano, entre las m??s importantes est??n las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este m??todo inicializa los primeros tres datos miembros de la clase CCircle con el valor de cero.',
        b:
        `
        // Constructor sin par??metros.
        public CCircle()
        {
           mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        }   
        `
        },
        {t:'b)	Funci??n miembro ReadData. ',a:'Esta funci??n permite leer el valor del radio del c??rculo ingresads en una caja de texto. En este caso es necesario realizar un casting o conversi??n de tipo de datos de String a float utilizando la funci??n float.Parse() y adem??s se utiliza la funci??n try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar n??meros ingrese letras por error.',
        b:
        `
        // Funci??n que lee el radio del c??rculo.
        public void ReadData(TextBox txtRadius)
        {
            try
            {
                mRadius = float.Parse(txtRadius.Text);
            }
            catch
            {
                MessageBox.Show("Ingreso no v??lido...", "Mensaje de error");
            }
         }
    
        `
        },
        {t:'c)	Funci??n miembro Perimeter. ',a:'Esta funci??n permite calcular el per??metro de un c??rculo, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:`
          // Funci??n que calcula el per??metro del c??rculo.
          public void PerimeterCircle()
          {
              mPerimeter = 2 * (float)Math.PI * mRadius;
          }      
          `
          },
          {t:'d)	Funci??n miembro Area. ',a:'Esta funci??n permite calcular el ??rea de un c??rculo, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:
          `
          // Funci??n que calcula el ??rea del c??rculo.
          public void AreaCircle()
          {
              mArea = (float)Math.PI * (float)Math.Pow(mRadius, 2);
          }      
          `
          },
          {t:'e)	Funci??n miembro PrintData. ',a:'Esta funci??n permite imprimir en cajas de texto los valores del per??metro y del ??rea del c??rculo calculados, para lo cual es necesario realizar un casting o conversi??n de tipo float a String, utilizando la funci??n ToString().',
          b:
          `
          // Funci??n que imprime el per??mtro y el ??rea del c??rculo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }
      
          `
          },
          {t:'f)	Funci??n miembro InitializeData. ',a:'Esta funci??n permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los s??mbolos de comillas dobles (??????). Para inicializar la caja de imagen (picCanvas) se utiliza la funci??n Refresh que significa refrescar o borrar.',
          b:
          ` 
          // Funci??n que inicializa los datos y controles del c??rculo.
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
          {t:'g)	Funci??n miembro PlotShape. ',a:'Esta funci??n permite graficar un c??rculo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gr??ficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un c??rculo en las coordenadas (0,0) y con los valores del di??metro asignados al ancho y al largo de la elipse multiplicados por un factor de escalamiento, para que la figura no sea muy peque??a.',
          b:
          `
          // Funci??n que grafica un c??rculo.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);            
              // Graficar un c??rculo en base a una elipse.
              mGraph.DrawEllipse(mPen, 0, 0, 2 * mRadius * SF, 2 * mRadius * SF);
          }
          `
          },
          {t:'h)	Funci??n miembro CloseForm. ',a:'Esta funci??n permite cerrar un formulario utilizando la funci??n Close(), que es llamada por el objeto ObjForm el cual es un par??metro de la funci??n que recibe un objeto de tipo Form.',
          b:
          `
          // Funci??n que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la funci??n float.Parse() para convertir un tipo de dato car??cter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la funci??n ToString() para convertir un tipo de dato num??rico a tipo car??cter o cadena.'},
                          {tip:'La constante PI cuyo valor es aproximadamente 3.14159, se la utiliza directamente desde la clase Math, que es una clase dedicada a las funciones matem??ticas.'}],
        implementacion13: 'La implementaci??n de la clase CCircle, se presenta a continuaci??n en la Tabla 1.3.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.3.2. ',
        tabladetalle2:'C??digo de la clase CCircle del programa.',
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
        
                // Radio del c??rculo.
                private float mRadius;        
                // Per??metro del c??rculo.
                private float mPerimeter;
                // ??rea del c??rculo.
                private float mArea;
                // Objeto que activa el modo gr??fico.
                private Graphics mGraph;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 20;
                // Objeto bol??grafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                
                // Funciones Miembro (M??todos).
        
                // Constructor sin par??metros.
                public CCircle()
                {
                    mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
                }        
        
                // Funci??n que lee el radio del c??rculo.
                public void ReadData(TextBox txtRadius)
                {
                    try
                    {
                        mRadius = float.Parse(txtRadius.Text);                
                    }
                    catch
                    {
                        MessageBox.Show("Ingreso no v??lido...",
                                        "Mensaje de error");
                    }
                }
        
                // Funci??n que calcula el per??metro del c??rculo.
                public void PerimeterCircle()
                {
                    mPerimeter = 2 * (float)Math.PI * mRadius;
                }
        
                // Funci??n que calcula el ??rea del c??rculo.
                public void AreaCircle()
                {
                    //mArea = (float)Math.PI * mRadius * mRadius;
                    mArea = (float)Math.PI * (float)Math.Pow(mRadius, 2);
                }
        
                // Funci??n que imprime el per??metro y el ??rea del c??rculo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = mPerimeter.ToString();
                    txtArea.Text = mArea.ToString();
                }
        
                // Funci??n que inicializa los datos y controles del c??rculo.
                public void InitializeData(TextBox txtRadius, TextBox txtPerimeter, 
                                           TextBox txtArea, PictureBox picCanvas)
                {
                    mRadius = 0.0f; mPerimeter = 0.0f; mArea = 0.0f;
        
                    txtRadius.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";
                    // Mantiene el cursor titilando en una caja de texto.
                    txtRadius.Focus();
                    picCanvas.Refresh();
                }
        
                // Funci??n que grafica un c??rculo.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);            
                    // Graficar un c??rculo en base a una elipse.
                    mGraph.DrawEllipse(mPen, 0, 0, 2 * mRadius * SF, 2 * mRadius * SF);
                }
        
                // Funci??n que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }        
            }
        }        
        `,
        implementacion14: 'La implementaci??n de la clase frmCircle, se presenta a continuaci??n en la Tabla 1.3.3, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica conocida como C??rculo.',
        tabla3:'Tabla 1.3.3. ',
        tabladetalle3:'C??digo de la clase frmCircle del programa.',
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
                // Definici??n de un objeto de tipo CCircle.
                private CCircle ObjCircle = new CCircle();
        
                public frmCircle()
                {
                    InitializeComponent();
                }
        
                private void frmCircle_Load(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjCircle.InitializeData(txtRadius, txtPerimeter, 
                                             txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Lectura de datos.
                    // Llamada a la funci??n ReadData.
                    ObjCircle.ReadData(txtRadius);
                    // C??lculo del per??metro de un c??rculo.
                    // Llamada a la funci??n PerimeterCircle.
                    ObjCircle.PerimeterCircle();
                    // C??lculo del ??rea de un c??rculo.
                    // Llamada a la funci??n AreaCircle.
                    ObjCircle.AreaCircle();
                    // Impresi??n de datos.
                    // Llamada a la funci??n PrintData.
                    ObjCircle.PrintData(txtPerimeter, txtArea);
                    // Graficaci??n de un c??rculo.
                    // Llamada a la funci??n PlotShape.
                    ObjCircle.PlotShape(picCanvas);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjCircle.InitializeData(txtRadius, txtPerimeter,
                                             txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la funci??n CloseForm.
                    ObjCircle.CloseForm(this);
                }
            }
        }                
        `,
        implementacion15: 'La clase frmCircle tiene como datos miembro un objeto de tipo CCircle llamado ObjCircle, el cual es el encargado de acceder a las funciones p??blicas de la clase CCircle para realizar diferentes c??lculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmCircle_Load(), se utiliza el objeto ObjCircle, para llamar a la funci??n p??blica InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del bot??n btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjCircle, para llamar a las funciones p??blicas: ReadData(), PerimeterCircle(), AreaCircle(), PrintData() y PlotShape(). En el evento Click del bot??n btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjCircle, para llamar a la funci??n p??blica InitializeData(). En el evento Click del bot??n btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjCircle, para llamar a la funci??n p??blica CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicaci??n basta con presionar la tecla F5 o el bot??n Start de ejecuci??n de la barra de men??s de Visual Studio .NET. La Figura 1.3.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la soluci??n porque es relativamente f??cil calcular el ??rea y el per??metro manualmente o utilizando una calculadora. Para un valor de radio igual a 4 se puede observar la gr??fica de la figura geom??trica en la caja de imagen (picCanvas). El per??metro deber?? ser dos veces el radio multiplicado por el valor de PI, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. El ??rea deber?? ser igual al producto de PI por el valor del radio elevado al cuadrado, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deber?? ingresar unos pocos valores de prueba correspondientes a los radios de algunos c??rculos. No se necesita probar m??s que con unos pocos casos de prueba para verificar que este programa est?? correcto. ',
        imagen13: './assets/images/Capitulos/I/media/image30.png',
        figuraNum13: 'Figura 1.3.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.4',
      link:'https://drive.google.com/uc?id=1Qbj5I3NDx8_kmQl7j8u-pjCsjxrEGy24&export=download',
        title: 'Graficar un Tri??ngulo y Encontrar el Per??metro y su ??rea.',
        problema: 'Escribir un programa para graficar un tri??ngulo, calcular e imprimir el per??metro y su ??rea en funci??n del semi-per??metro. Adem??s, validar la existencia de un tri??ngulo. (Ver Figura 1.4.1)',
        formulaA: ['$P=a+b+c$',
                   '$s=\\frac{a+b+c}{2}$',
                   '$A=\\sqrt{s\\times(s-a)\\times(s-b)\\times(s-c)}$'],
        imagen1: './assets/images/Capitulos/I/media/image31.png',
        figuraNum1: 'Figura 1.4.1. ',
        figura1: 'El Tri??ngulo y sus f??rmulas.',
        analisis: 'Claramente, se puede ver que las entradas del problema son los tres lados del tri??ngulo. Hay tres salidas requeridas: el per??metro, el ??rea del tri??ngulo y el gr??fico de la figura geom??trica. Partiendo de un conocimiento b??sico de geometr??a, se sabe que hay una relaci??n entre los tres lados del tri??ngulo con el per??metro, con el semi-per??metro y con el ??rea de la figura geom??trica. Las f??rmulas requeridas se incluyen en el requerimiento de los datos. En este programa referente al tri??ngulo se considera la validaci??n de la existencia de un tri??ngulo cuyo Teorema expresa que un tri??ngulo cualquiera existe si y s??lo si la suma de cualquiera de sus dos lados es mayor que el tercer lado: (a+b>c)???(a+c>b)???(b+c>a).',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$a$',b:'/* lado 1 del tri??ngulo */'},
          {t:'',a:'$b$',b:'/* lado 2 del tri??ngulo */'},
          {t:'',a:'$c$',b:'/* lado 3 del tri??ngulo */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$perimeter$',b:'/* per??metro del tri??ngulo */'},
          {t:'',a:'$area$',b:'/* ??rea del tri??ngulo */'},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gr??fico  */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$s$',b:'/* semi-per??metro del tri??ngulo */'},
          {t:'',a:'$pen$',b:'/* Pluma de dibujo */'},
          {t:'Constantes del Problema',a:'',b:''},
          {t:'',a:'$SF = 10$',b:'/* factor de escalamiento  */'},
          {t:'F??rmulas Relevantes',a:'',b:''},
          {t:'',a:'$(1)P=a+b+c$',b:'/* F??rmula del per??metrode de un tri??ngulo */'},
          {t:'',a:'$(2)s=\\frac{a+b+c}{2}$',b:'/* F??rmula del semi-per??metro de un tri??ngulo */'},
          {t:'',a:'$(3)A=\\sqrt{s\\times(s-a)\\times(s-b)\\times(s-c)}$',b:'/* F??rmula del ??rea de un tri??ngulo (F??rmula de Her??n) */'}],
        diagramaES: 'En la Figura 1.4.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas y salidas del problema como son: a) Entradas: la variable ???a??? (lado 1), la variable ???b??? (lado 2), la variable ???c??? (lado 3); b) Salidas: la variable ???perimetro???, la variable ???area??? y el objeto ???graph???; c) Auxiliares: la variable ???s??? (semiper??metro) y el objeto ???pen???; d) Constantes: el factor de escalamiento ???SF???.',
        imagen2: './assets/images/Capitulos/I/media/image32.png',
        figuraNum2: 'Figura 1.4.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicaci??n se muestra en la Figura 1.4.3 con notaci??n UML. En este diagrama se puede ver que la aplicaci??n est?? compuesta por seis clases, donde la clase Program se compone por la clase frmTriangle que resulta ser una clase derivada de la clase Form. La clase frmTriangle se compone de un objeto de tipo CTriangle. ',
        diagramaC2: 'La clase CTriangle se compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gr??fico de la aplicaci??n y de un objeto de tipo Pen llamado mPen, para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Adem??s, se tiene una constante llamada SF (scale factor) de tipo float que permite realizar un acercamiento (Zoom-In) y un alejamiento (Zoom-Out) sobre la figura geom??trica. Los otros atributos que se tienen en la clase CTriangle son los tres lados del tri??ngulo, el per??metro y el ??rea representados por los datos miembros a, b, c, mPerimeter y mArea que son de tipo float.',
        imagen3: './assets/images/Capitulos/I/media/image33.png',
        figuraNum3: 'Figura 1.4.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.4.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Funci??n ReadData()',a:'1.	Leer el lado 1 del tri??ngulo.',b:'2.	Leer el lado 2 del tri??ngulo.',c:'3.	Leer el lado 3 del tri??ngulo.',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Funci??n CheckTriangle()',a:'	Si la suma de cualquiera de los dos lados es mayor que el tercero, es decir, si se cumple la condici??n del teorema: (a+b>c)???(a+c>b)???(b+c>a), retornar un valor booleano con verdadero, caso contrario retornar un valor booleano con falso.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.3. Algoritmo de la Funci??n SemiperimeterTriangle()',a:'1.	Calcular el semi-per??metro.',b:'1.1.	Asignar el resultado de la divisi??n entre la suma de los tres lados dividido para dos, a la variable ???s???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.4. Algoritmo de la Funci??n PerimeterTriangle()',a:'1.	Calcular el per??metro.',b:'1.1.	Asignar el resultado del producto entre el semi-per??metro por dos a la variable ???perimetro???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.5. Algoritmo de la Funci??n AreaTriangle()',a:'1.	Calcular el ??rea.',b:'1.1.	Asignar el valor de la ra??z cuadrada del semi-per??metro multiplicado por la diferencia entre el semi-per??metro por cada uno de los lados del tri??ngulo, a la variable ???area???.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.6. Algoritmo de la Funci??n PrintData()',a:'1.	Imprimir el valor de la variable ???perimeter??? y de la variable ???area???.',b:'',c:'',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.7. Algoritmo de la Funci??n PlotShape()',a:'1.	Graficar un tri??ngulo.',b:'1.1.	Utilizar el objeto ???Graph??? con la funci??n DrawLine para graficar con la pluma ???Pen??? tres l??neas que unen los v??rtices A, B y C del tri??ngulo.',c:'',d:'',e:'',f:'',g:'',h:'',i:''},        ],
        tituloGeometria:'+)   Geometr??a del Tri??ngulo',
        geometria:[
                  {
                    p:[
                      {
                        t:'Problema:',
                        d:'Dados los tres lados de un tri??ngulo, encontrar los valores de los v??rtices en coordenadas rectangulares y graficar las l??neas del tri??ngulo, considerando que uno de sus lados se encuentra sobre el eje de las ???x??? y uno de sus v??rtices es el origen. (Ver Figura 1 y 2). ',
                        i:[
                          {
                            path:'./assets/images/Capitulos/I/media/image34.png',
                            titulo:'Figura 1. ',
                            descriptitulo:'Tri??ngulo en el mundo real.'
                          },
                          {
                            path:'./assets/images/Capitulos/I/media/image35.png',
                            titulo:'Figura 2. ',
                            descriptitulo:'Tri??ngulo en el mundo de la Computaci??n Gr??fica.'
                          }
                          ]
                      }
                      ], 
                    s:[
                      {
                        t:'Soluci??n:',
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
                                d:'Para calcular el valor del ??ngulo A, se utilizando la Ley de Cosenos:',
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
                                d:'Despejamos el valor de y3 donde obtenemos la siguiente ecuaci??n:',
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
                                d:'Reemplazamos el valor de y3 de la ecuaci??n (4) en la ecuaci??n (5) y calculamos el valor de x3:',
                                formulas:[
                                          '$b=\\sqrt{(x_{3})^{2}+(x_{3}\\times\\tan(A))^{2}}$',
                                          '$b=\\sqrt{(x_{3})^{2}+(x_{3})^{2}\\times\\tan^{2}(A)}$',
                                          '$b=\\sqrt{(x_{3})^{2}\\times(1+\\tan^{2}(A))}$',
                                          '$b=x_{3}\\times\\sqrt{1+\\tan^{2}(A)}$'
                                         ]
                              },
                              {
                                d:'Despejamos el valor de x3 y luego racionalizamos la expresi??n:',
                                formulas:[
                                          '$x_{3}=\\frac{b}{\\sqrt{1+\\tan^{2}(A)}}\\times\\frac{\\sqrt{1+\\tan^{2}(A)}}{\\sqrt{1+\\tan^{2}(A)}}$',
                                          '$x_{3}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\Rightarrow(6)$'
                                         ]
                              },
                              {
                                d:'Reemplazamos el valor de x3 de la ecuaci??n (6) en la ecuaci??n (4) y calculamos el valor de y3:',
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
                                d:'Aplicando las siguientes identidades trigonom??tricas:',
                                formulas:[
                                          '$\\sec^{2}(A)=1+\\tan^{2}(A)\\Rightarrow(9)$',
                                          '$\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}\\Rightarrow(10)$',
                                          '$\\sec(A)=\\frac{1}{\\cos(A)}\\Rightarrow(11)$'
                                         ]
                              },
                              {
                                d:'Se simplicifica la ecuaci??n (8) de la siguiente manera:',
                                formulas:[
                                          '$x_{C}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}=\\frac{b\\times\\sqrt{\\sec^{2}(A)}}{\\sec^{2}(A)}=\\frac{b\\times\\sec(A)}{\\sec^{2}(A)}=\\frac{b}{\\sec(A)}=\\frac{b}{\\frac{1}{\\cos(A)}}=b\\times\\cos(A)$',
                                          '$x_{C}=b\\times\\cos(A)\\Rightarrow(12)$',
                                          '$y_{C}=\\frac{b\\times\\sqrt{1+\\tan^{2}(A)}}{1+\\tan^{2}(A)}\\times\\tan(A)=x_{C}\\times\\tan(A)=b\\times\\cos(A)\\times\\tan(A)=b\\times\\cos(A)\\times\\frac{\\sin(A)}{\\cos(A)}=b\\times\\sin(A)$',
                                          '$y_{C}=b\\times\\sin(A)\\Rightarrow(13)$'
                                         ]
                              },
                              {
                                d:'Finalmente, se obtiene las coordenadas del punto P3 en funci??n de senos y cosenos:',
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
        implementacion3: 'Para implementar la soluci??n, se deben escribir los algoritmos como una Aplicaci??n para Windows con C# .NET que contenga toda la informaci??n necesaria para completar la soluci??n de dicho problema y pueda la aplicaci??n ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcci??n de esta aplicaci??n, se debe seleccionar la opci??n de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicaci??n de Windows Forms con el lenguaje C#. En el cuadro de di??logo configure su proyecto con el nombre de WinAppTriangle y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmTriangle.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicaci??n de Windows Forms con el nombre de WinAppTriangle, como se muestra en la Figura 1.4.4. Adem??s, cree la clase llamada CTriangle con la cual va a trabajar el formulario frmTriangle, aplicando el concepto de Composici??n y Agregaci??n.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image36.png',
        figuraNum8: 'Figura 1.4.4. ',
        figura8: 'Soluci??n WinAppTriangle.',
        implementacion7: 'Se necesita a??adir al Formulario (Form) tres Cajas de Grupo (GroupBoxes), cinco Etiquetas (Labels), cinco Cajas de Texto (TextBoxes), tres Botones (Buttons), y una Caja de Imagen (PictureBox), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene tres Etiquetas (Label) y tres Cajas de Texto (TextBox); b) La segunda Caja de Grupo (GroupBox), contiene tres Botones (Button); c) la tercera Caja de Grupo (Group Box), contiene con dos Etiquetas (Labels) y dos Cajas de Texto (TextBoxes); la cuarta Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.4.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.4.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmTriangle','Tri??ngulo','CenterScreen ']},
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
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gr??fico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.4.5.',
        imagen10: './assets/images/Capitulos/I/media/image37.png',
        figuraNum10: 'Figura 1.4.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicaci??n aceptar?? el ingreso de un valor flotante o entero en tres Cajas de Texto (TextBox) y desplegar?? los resultados en otras dos Cajas de Texto (TextBoxes) y el gr??fico de la figura se desplegar?? en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CTriangle tiene los siguientes datos miembro: a) a, b y c, que representan a los tres lados del tri??ngulo que son de tipo float; b) mPerimeter, mArea, que representan al per??metro y al ??rea del rect??ngulo que son tambi??n de tipo float; c) un objeto mGraph de tipo Graphics; d) una pluma de dibujo llamada mPen de tipo Pen; e) una constante de tipo float llamada SF definida como un factor de escalamiento (scale factor).',
        implementacion12: 'Esta clase tambi??n posee un grupo de m??todos de acuerdo a las acciones que puede hacer y que b??sicamente ser??n funciones para poder representar y operar un tri??ngulo en el plano, entre las m??s importantes est??n las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este m??todo inicializa los primeros cinco datos miembros de la clase CTriangle con el valor de cero.',
        b:
        `
        // Constructor sin par??metros.
        public CTriangle()
        {
            a = 0.0f; b = 0.0f; c = 0.0f;
            perimeter = 0.0f; area = 0.0f;
        }   
        `
        },
        {t:'b)	Funci??n miembro ReadData. ',a:'Esta funci??n permite leer los tres valores de los lados del tri??ngulo ingresados en cajas de texto. En este caso es necesario realizar un casting o conversi??n de tipo de datos de String a float utilizando la funci??n float.Parse() y adem??s se utiliza la funci??n try-catch para el manejo y control de excepciones, en caso de que el usuario en lugar de ingresar n??meros ingrese letras por error.',
        b:
        `
        // Funci??n que lee los tres lados del tri??ngulo.
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
               MessageBox.Show("Ingreso no v??lido...");
           }
         }   
        `
        },
        {t:'c)	Funci??n miembro Semiperimeter. ',a:'Esta funci??n permite calcular el semi-per??metro de un tri??ngulo, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos. Esta funci??n al ser privada no puede ser accedida por un objeto sino solo puede ser llamada por otras funciones dentro de la clase CTriangle.',
        b:
        `
        // Funci??n que calcula el semi-per??metro del tri??ngulo.
        private float SemiperimeterTriangle()
        {
            return ((a + b + c) / 2);
        } 
        `
        },
        {t:'d)	Funci??n miembro Perimeter. ',a:'Esta funci??n permite calcular el per??metro de un tri??ngulo en funci??n de su semi-per??metro, para lo cual se utiliza una f??rmula matem??tica para poder realizar de esta manera los respectivos c??lculos.',
          b:
          `
          // Funci??n que calcula el per??metro del tri??ngulo.
          public void PerimeterTriangle()
          {
              float s = SemiperimeterTriangle();
              perimeter = 2 * s;
          }     
          `
          },
          {t:'e)	Funci??n miembro Area. ',a:'Esta funci??n permite calcular el ??rea de un tri??ngulo en funci??n de su semi-per??metro, para lo cual se utiliza la f??rmula matem??tica de Her??n para poder realizar de esta manera los respectivos c??lculos.',
          b:
          `
          // Funci??n que calcula el ??rea del tri??ngulo.
          public void AreaTriangle()
          {
              float s = SemiperimeterTriangle();
              area = (float)Math.Sqrt(s * (s - a) * (s - b) * (s - c));
          }      
          `
          },
          {t:'f)	Funci??n miembro PrintData. ',a:'Esta funci??n permite imprimir en cajas de texto los valores del per??metro y del ??rea del c??rculo calculados, para lo cual es necesario realizar un casting o conversi??n de tipo float a String, utilizando la funci??n ToString()',
          b:
          `
          // Funci??n que imprime el per??metro y el ??rea del tri??ngulo.
          public void PrintData(TextBox txtPerimeter, TextBox txtArea)
          {
              txtPerimeter.Text = mPerimeter.ToString();
              txtArea.Text = mArea.ToString();
          }      
          `
          },
          {t:'g)	Funci??n miembro InitializeData. ',a:'Esta funci??n permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de las cajas de texto se inicializan con el valor de [BLANK] utilizando los s??mbolos de comillas dobles (??????). Para inicializar la caja de imagen (picCanvas) se utiliza la funci??n Refresh que significa refrescar o borrar.',
          b:
          `// Funci??n que inicializa los datos y controles del tri??ngulo.
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
          {t:'h)	Funci??n miembro CheckTriangle. ',a:'Esta funci??n permite verificar la existencia de un tri??ngulo utilizando un teorema matem??tico. La funci??n retorna un valor booleano verdadero si existe el tri??ngulo y retorna un valor booleano falso si no existe el tri??ngulo.',
          b:
          `
          // Funci??n que valida la existencia de un tri??ngulo.
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
          {t:'i)	Funci??n miembro CalculateAngleA.',a:'Esta funci??n permite calcular el ??ngulo A de un tri??ngulo cualquiera, utilizando las leyes trigonom??tricas de los cosenos.',
          b:
          `
          // Funci??n que calcula el ??ngulo A del tri??ngulo.
          private void CalculateAngleA()
          {
              angleA = (float)Math.Acos((b * b + c * c - a * a) / (2 * b * c));
          }
          `
          },
          {t:'j)	Funci??n miembro CalculateVertex.',a:'Esta funci??n permite calcular los v??rtices del tri??ngulo en funci??n del ??ngulo A y utilizando las f??rmulas geom??tricas considerando que uno de los v??rtices (A) est?? sobre el origen y otro v??rtice (B) sobre el eje de las ???x???.',
          b:
          `
          // Funci??n que calcula los valores de los tres v??rtices del tri??ngulo.  
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
          {t:'k)	Funci??n miembro PlotShape.',a:'Esta funci??n permite graficar un tri??ngulo, para lo cual en el objeto mGraph se asigna la funcionalidad de crear gr??ficos de la caja de imagen (picCanvas). Luego se crea una pluma de color azul con una punta de ancho 3 conocida como Brush. Finalmente, se dibuja un tri??ngulo en las coordenadas (0,0), utilizando tres v??rtices multiplicados por un factor de escalamiento y tres l??neas que permiten unir los v??rtices de dos en dos.',
          b:
          `
          // Funci??n que grafica un tri??ngulo en base a los tres
          // v??rtices, representados por tres puntos en un plano.
          public void PlotShape(PictureBox picCanvas)
          {
              mGraph = picCanvas.CreateGraphics();
              mPen = new Pen(Color.Blue, 3);
      
              CalculateVertex();
      
              // Graficar las tres l??neas que conforman un tri??ngulo.
              mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, B.X * SF, B.Y * SF);
              mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, C.X * SF, C.Y * SF);
              mGraph.DrawLine(mPen, B.X * SF, B.Y * SF, C.X * SF, C.Y * SF);
          }      
          `
          },
          {t:'l)	Funci??n miembro CloseForm.',a:'Esta funci??n permite cerrar un formulario utilizando la funci??n Close(), que es llamada por el objeto ObjForm el cual es un par??metro de la funci??n que recibe un objeto de tipo Form.',
          b:
          `// Funci??n que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }            
          `
          }
        ],
        tipsProgramacion:[{tip:'Se utiliza la funci??n float.Parse() para convertir un tipo de dato car??cter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la funci??n ToString() para convertir un tipo de dato num??rico a tipo car??cter o cadena.'}
                          ],
        implementacion13: 'La implementaci??n de la clase CTriangle, se presenta a continuaci??n en la Tabla 1.4.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.4.2. ',
        tabladetalle2:'C??digo de la clase CTriangle del programa.',
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
        
                // Lado 1 del tri??ngulo.
                private float a;
                // Lado 2 del tri??ngulo.
                private float b;
                // Lado 3 del tri??ngulo.
                private float c;
                // Per??metro del tri??ngulo.
                private float perimeter;
                // ??rea del tri??ngulo.
                private float area;
                // Objeto que activa el modo gr??fico.
                private Graphics mGraph;
                // Objeto bol??grafo que dibuja o escribe en un lienzo (canvas).
                private Pen mPen;
                // Constante scale factor (Zoom In/Zoom Out).
                private const float SF = 10;
                // Objeto Punto que representa al v??rtice A del tri??ngulo.
                private PointF A;
                // Objeto Punto que representa al v??rtice B del tri??ngulo.
                private PointF B;
                // Objeto Punto que representa al v??rtice C del tri??ngulo.
                private PointF C;
                // ??ngulo A del tri??ngulo.
                private float angleA;
        
                // Funciones Miembro (M??todos).
        
                // Constructor sin par??metros.
                public CTriangle()
                {
                    a = 0.0f; b = 0.0f; c = 0.0f;
                    perimeter = 0.0f; area = 0.0f;
                }
                        
                // Funci??n que lee los tres lados del tri??ngulo.
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
                        MessageBox.Show("Ingreso no v??lido...");
                    }
                }
        
                // Funci??n que calcula el semi-per??metro del tri??ngulo.
                private float SemiperimeterTriangle()
                {
                    return ((a + b + c) / 2);
                }
        
                // Funci??n que calcula el per??metro del tri??ngulo.
                public void PerimeterTriangle()
                {
                    float s = SemiperimeterTriangle();
                    perimeter = 2 * s;
                }
        
                // Funci??n que calcula el ??rea del tri??ngulo.
                public void AreaTriangle()
                {
                    float s = SemiperimeterTriangle();
                    area = (float)Math.Sqrt(s * (s - a) * (s - b) * (s - c));
                }
        
                // Funci??n que imprime el per??metro y el ??rea del tri??ngulo.
                public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                {
                    txtPerimeter.Text = perimeter.ToString();
                    txtArea.Text = area.ToString();
                }
        
                // Funci??n que inicializa los datos y controles del tri??ngulo.
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
        
                // Funci??n que valida la existencia de un tri??ngulo.
                public bool CheckTriangle()
                {
                    if ((a + b > c) && (a + c > b) && (b + c > a))
                    {
                        return (true);
                    }
                    else // !((mA + mB > mC) && (mA + mC > mB) && (mB + mC > mA))
                        return (false);
                }
        
                // Funci??n que calcula el ??ngulo A del tri??ngulo.
                private void CalculateAngleA()
                {
                    angleA = (float)Math.Acos((b * b + c * c - a * a) / (2 * b * c));
                }
        
                // Funci??n que calcula los valores de los tres v??rtices del tri??ngulo.  
                private void CalculateVertex()
                {
                    A.X = 0.0f; A.Y = 0.0f;
                    B.X = c; B.Y = 0.0f;
        
                    CalculateAngleA();
        
                    C.X = b * (float)Math.Cos(angleA);
                    C.Y = b * (float)Math.Sin(angleA);
                }
        
                // Funci??n que grafica un tri??ngulo en base a los tres
                // v??rtices, representados por tres puntos en un plano.
                public void PlotShape(PictureBox picCanvas)
                {
                    mGraph = picCanvas.CreateGraphics();
                    mPen = new Pen(Color.Blue, 3);
        
                    CalculateVertex();
        
                    // Graficar las tres l??neas que conforman un tri??ngulo.
                    mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, B.X * SF, B.Y * SF);
                    mGraph.DrawLine(mPen, A.X * SF, A.Y * SF, C.X * SF, C.Y * SF);
                    mGraph.DrawLine(mPen, B.X * SF, B.Y * SF, C.X * SF, C.Y * SF);
                }
        
                // Funci??n que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }                
        `,
        implementacion14: 'La implementaci??n de la clase frmTriangle, se presenta a continuaci??n en la Tabla 1.4.3, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica conocida como Tri??ngulo.',
        tabla3:'Tabla 1.4.3. ',
        tabladetalle3:'C??digo de la clase frmTriangle del programa.',
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
                // Definici??n de un objeto de tipo CTriangle.
                private CTriangle ObjCTriangle = new CTriangle();
        
                public frmTriangle()
                {
                    InitializeComponent();
                }
        
                private void frmTriangle_Load(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjCTriangle.InitializeData(txtSideA, txtSideB, txtSideC,
                                                txtPerimeter, txtArea, picCanvas);
                }
        
                private void btnCalculate_Click(object sender, EventArgs e)
                {
                    // Declaraci??n de una variable boolena.
                    bool Validate;
        
                    // Lectura de datos.
                    // Llamada a la funci??n ReadData.
                    ObjCTriangle.ReadData(txtSideA, txtSideB, txtSideC);
                    // Verificaci??n de la existencia de un tri??ngulo.
                    // Llamada a la funci??n CheckTriangle.
                    Validate = ObjCTriangle.CheckTriangle();
        
                    // Si el valor de la variable booleana es verdadero,
                    // entonce existe y se realizan algunos c??lculos.
                    if (Validate == true)
                    {
                        // C??lculo del per??metro de un tri??ngulo.
                        // Llamada a la funci??n PerimeterTriangle.
                        ObjCTriangle.PerimeterTriangle();
                        // C??lculo del ??rea de un tri??ngulo.
                        // Llamada a la funci??n AreaTriangle.
                        ObjCTriangle.AreaTriangle();
                        // Impresi??n de datos.
                        // Llamada a la funci??n PrintData.
                        ObjCTriangle.PrintData(txtPerimeter, txtArea);
                        // Graficaci??n de un tri??ngulo.
                        // Llamada a la funci??n PlotShape.
                        ObjCTriangle.PlotShape(picCanvas);
                    }
                    // Caso Contrario, el tri??ngulo no existe.
                    else // !(Validate == true)
                    {
                        MessageBox.Show("Error...el tri??ngulo no existe.",
                                        "Mensaje de error");
                    }
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjCTriangle.InitializeData(txtSideA, txtSideB, txtSideC,
                                                txtPerimeter, txtArea, picCanvas);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la funci??n CloseForm.
                    ObjCTriangle.CloseForm(this);
                }
            }
        }                      
        `,
        implementacion15: 'La clase frmTriangle tiene como datos miembro un objeto de tipo CTriangle llamado ObjTriangle, el cual es el encargado de acceder a las funciones p??blicas de la clase CTriangle para realizar diferentes c??lculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmTriangle_Load(), se utiliza el objeto ObjTriangle, para llamar a la funci??n p??blica InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento Click del bot??n btnCalculate, cuyo procedimiento se llama btnCalculate_Click(), se utiliza el objeto ObjTriangle, para llamar a las funciones p??blicas: ReadData(), CheckTriangle, PerimeterRectangle(), AreaRectangle(), PrintData() y PlotShape(). En el evento Click del bot??n btnReset, cuyo procedimiento se llama btnReset_Click(), se utiliza el objeto ObjTriangle, para llamar a la funci??n p??blica InitializeData(). En el evento Click del bot??n btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjTriangle, para llamar a la funci??n p??blica CloseForm(), que permite cerrar el formulario.',              
        implementacion17: '', 
        imagen11: '',
        figuraNum11: '',
        figura11: '',
        imagen12: '',
        figuraNum12: '',
        figura12: '',
        implementacion18: 'Para correr la aplicaci??n basta con presionar la tecla F5 o el bot??n Start de ejecuci??n de la barra de men??s de Visual Studio .NET. La Figura 1.4.6 muestra un ejemplo de la corrida de este programa, pero para saber que los resultados del problema son correctos, se debe examinar los resultados del programa cuidadosamente para asegurarnos que tengan sentido. El ejemplo mostrado de la salida del programa proporciona una buena prueba de la soluci??n porque es relativamente f??cil calcular el ??rea y el per??metro manualmente o utilizando una calculadora. Para los valores de los tres lados que corresponde a 19, 16 y 17, se puede observar la gr??fica de la figura geom??trica en la caja de imagen (picCanvas). El per??metro deber?? ser dos veces el semi-per??metro, que tambi??n es un valor f??cil de calcular manualmente o utilizando una calculadora. El ??rea deber?? ser igual a la fpormula de Her??n, que se puede calcular utilizando una calculadora. Para verificar que el programa funciona adecuadamente, se deber?? ingresar unos pocos valores de prueba correspondientes a los tres lados de un tri??ngulo. No se necesita probar m??s que con unos pocos casos de prueba para verificar que este programa est?? correcto.',
        imagen13: './assets/images/Capitulos/I/media/image38.png',
        figuraNum13: 'Figura 1.4.6. ',
        figura13: 'Ejemplo de la Corrida del Programa. ',           
        
      },
      { label: 'Caso 1.5',
      link:'https://drive.google.com/uc?id=17GUBj_CzW7L3A1Ib9EAJIZeaDm2R0Zva&export=download',
        title: 'Graficar un grupo de l??neas utilizando el rat??n.',
        problema: 'Escribir un programa para graficar un grupo de l??neas continuas, donde cada l??nea se dibuja en funci??n de dos puntos, utilizando el clic izquierdo del rat??n. La l??nea inicial parte desde el origen O(0,0) y la segunda l??nea comienza en donde termin?? la primera, la tercera l??nea comienza en donde termin?? la segunda y as?? sucesivamente. Adem??s, se debe considerar utilizar dos c??rculos peque??os o dos rect??ngulos peque??os para representar graficamente los dos puntos que tiene cada l??nea. (Ver Figura 1.5.1).',
        formulaA: [],
        imagenCaso5: './assets/images/Capitulos/I/media/image39.png',
        figuraNum1: 'Figura 1.5.1. ',
        figura1: 'L??neas utilizando el rat??n.',
        analisis: 'Claramente, se puede ver que las entradas del problema son los dos puntos que conforman la l??nea, es decir, el punto inicial y el punto final. Hay una sola salida requerida que es un objeto de tipo Graphics que permite dibujar una l??nea uniendo los dos puntos y dibujar un c??rculo o rect??ngulo que representan a los dos puntos que definen una l??nea. Los datos auxiliares del problema son los mismos dos puntos que se pueden reutilizar para graficar una nueva l??nea y adem??s se necesitan dos bol??grafos para dibujo.',
        requerimientosDatos: [
          {t:'Entradas del Problema',a:'',b:''},
          {t:'',a:'$StartPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$EndPoint$',b:'/* objeto de tipo Point */'},
          {t:'Salidas del Problema',a:'',b:''},
          {t:'',a:'$graph$',b:'/* objeto que activa el modo gr??fico y que se lo utiliza para dibujar una l??nea, un c??rculo o de un rect??ngulo */'},
          {t:'Auxiliares del Problema',a:'',b:''},
          {t:'',a:'$StartPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$EndPoint$',b:'/* objeto de tipo Point */'},
          {t:'',a:'$LinePen$',b:'/* bol??grafo utilizado para dibujar una l??nea */'},
          {t:'',a:'$EllipsePen$',b:'/* bol??grafo utilizado para dibujar un c??rculo o un rect??ngulo */'},
          ],
        diagramaES: 'En la Figura 1.5.2 se muestra el diagrama de Entrada-Salida del programa donde se identifican y se diagraman las entradas y salidas del problema como son: a) Entradas: los objetos StartPoint y EndPoint de tipo Point; b) Salidas: un objeto graph de tipo Graphics; c) Auxiliares: los objetos StartPoint y EndPoint de tipo Point y los bol??grafos para dibujo LinePen y EllipsePen de tipo Pen.',
        imagen2: './assets/images/Capitulos/I/media/image40.png',
        figuraNum2: 'Figura 1.5.2. ',
        figura2: 'Diagrama de Entrada-Salida del Programa.',  
        diagramaC1: 'El diagrama de clases de esta aplicaci??n se muestra en la Figura 1.3.3 con notaci??n UML. En este diagrama se puede ver que la aplicaci??n est?? compuesta por seis clases, donde la clase Program se compone por la clase frmLines que resulta ser una clase derivada de la clase Form. La clase frmLines se compone de un objeto de tipo CLine. ',
        diagramaC2: 'La clase CLinese compone de un objeto de tipo Graphics llamado mGraph, que maneja el modo gr??fico de la aplicaci??n y de dos objetos de tipo Pen llamados mLinePen, y mEllipsePen para dibujar sobre un lienzo representado por un pictureBox cuyo identificador es picCanvas. Los otros atributos que se tienen en la clase CLine son los puntos que representan a una l??nea llamados mStartPoint y mEndPoint de tipo Point. ',
        imagen3: './assets/images/Capitulos/I/media/image41.png',
        figuraNum3: 'Figura 1.5.3. ',
        figura3: 'Diagrama de clases del Caso de Estudio 1.5.',
        diseno: 'Una vez que se conoce las entradas y las salidas del problema, se deben listar los pasos necesarios para resolver el problema, es decir, el algoritmo.',
        algoritmos: [{t:'3.1.1. Algoritmo de la Funci??n InitializeData()',a:'1.	Inicializar los el punto inicial y final con el valor de cero en las coordenadas ???x??? e ???y???.',b:'2.	Borrar el contenido de la caja de imagen picCanvas.',c:'3.	Asignar con el valor booleano de false a la caja de verificaci??n chkPoint.',d:'',e:'',f:'',g:'',h:'',i:''},
        {t:'3.1.2. Algoritmo de la Funci??n DrawLineMouse()',a:'1.	Si se ha seleccionado el bot??n izquierdo del rat??n, entonces:',b:'1.1.	Asignar la funcionalidad de crear gr??ficos al objeto mGraph.',c:'1.2.	Asignar el valor del punto final al punto inicial.',d:'1.3.	Asignar al punto final el valor de las coordenadas del rat??n en ???x??? e ???y???.',e:'1.4.	Dibujar una l??nea desde el punto actual hasta el nuevo punto.',f:'',g:'',h:'',i:'1.5.	Dibujar un c??rculo para representa a un punto en el plano.',j:'1.6.	Desechar los dos objetos bol??grafo de tipo Pen.',k:'1.7. Desechar el objeto graph de tipo Graphics.'},
        ],
        implementacion1: '',
        implementacion2: '',
        imagen4: '',
        figuraNum4: '',
        figura4: '',
        implementacion3: 'Para implementar la soluci??n, se deben escribir los algoritmos como una Aplicaci??n para Windows con C# .NET que contenga toda la informaci??n necesaria para completar la soluci??n de dicho problema y pueda la aplicaci??n ser ejecutada desde Visual Studio .NET.',
        imagen5: '',
        figuraNum5: '',
        figura5: '',
        implementacion4: 'Para comenzar la construcci??n de esta aplicaci??n, se debe seleccionar la opci??n de Crear un proyecto y la Plantilla (template) correspondiente a la Aplicaci??n de Windows Forms con el lenguaje C#. En el cuadro de di??logo configure su proyecto con el nombre de WinAppLines y luego guarde el mismo en el disco duro.',
        imagen6: '',
        figuraNum6: '',
        figura6: '',
        implementacion5: 'Ahora que ya se ha guardado el proyecto, acceda al Explorador de Soluciones (Solution Explorer) y modifique el nombre del archivo del formulario a frmLines.cs, cuyo nombre por defecto es Form1.cs y que consta dentro de la Aplicaci??n de Windows Forms con el nombre de WinAppLines, como se muestra en la Figura 1.5.4. Adem??s, cree la clase llamada CLine con la cual va a trabajar el formulario frmLines, aplicando el concepto de Composici??n y Agregaci??n.',
        imagen7: '',
        figuraNum7: '',
        figura7: '',
        implementacion6: '',
        imagen8: './assets/images/Capitulos/I/media/image42.png',
        figuraNum8: 'Figura 1.5.4. ',
        figura8: 'Soluci??n WinAppLines.',
        implementacion7: 'Se necesita a??adir al Formulario (Form) dos Cajas de Grupo (GroupBoxes), dos Botones (Buttons), una Caja de Imagen (PictureBox) y una Caja de Verificaci??n (Check Box), dispuestos de la siguiente manera: a) La primera Caja de Grupo (GroupBox), contiene dos Botones (Button) y la Caja de Verificaci??n (Check Box); b) la segunda Caja de Grupo (GroupBox), contiene un Caja de Imagen (PictureBox).',
        imagen9: '',
        figuraNum9: '',
        figura9: '',
        implementacion8: 'Utilice la Tabla 1.5.1, para modificar las propiedades restantes de cada objeto. ',
        tabla1:'Tabla 1.5.1. ',
        tabladetalle1:'Objetos y sus Propiedades. ',
        tablaDatos1: [
          {Objeto:'Form',Propiedad:['Name','Text','StartUpPosition'],Valor:['frmLines','L??neas','CenterScreen ']},
          {Objeto:'GroupBox',Propiedad:['Name','Text'],Valor:['grbProcess','Proceso']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnReset','Resetear']},
          {Objeto:'Button',Propiedad:['Name','Text'],Valor:['btnExit','Salir']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Checked'],Valor:['chkPoint','Rect??ngulo','False']},
          {Objeto:'GroupBox',Propiedad:['Name','Text','Font'],Valor:['grbCanvas','Gr??fico','MS Sans Serif, Bold, 8']},
          {Objeto:'PictureBox',Propiedad:['Name'],Valor:['picCanvas']}
        ],
        implementacion9: 'Una vez modificadas las propiedades del formulario y de sus controles queda configurado de la siguiente manera, como se puede ver en la Figura 1.5.5.',
        imagen10: './assets/images/Capitulos/I/media/image43.png',
        figuraNum10: 'Figura 1.5.5. ',
        figura10: 'El Formulario y sus controles modificados sus propiedades. ',
        implementacion10: 'Esta aplicaci??n desplegar?? los gr??ficos de las l??neas consecutivas en una Caja de Imagen (PictureBox).',
        implementacion11: 'La clase CLine tiene los siguientes datos miembro: a) un objeto mGraph de tipo Graphics; b) Dos objetos de tipo Point llamados mStartPoint y mEndPoint, que representan a dos puntos en el plano; c) Dos bol??grafos de tipo Pen llamados mLinePen y mEllipsePen para graficar los dos puntos que conforman una l??nea sea con c??rculos o con rect??ngulos.',
        implementacion12: 'Esta clase tambi??n posee un grupo de m??todos de acuerdo a las acciones que puede hacer y que b??sicamente ser??n funciones para poder representar y operar un tri??ngulo en el plano, entre las m??s importantes est??n las siguientes:',
        metodos: [{t:'a)	Constructor sin argumentos',a:'Este m??todo inicializa los primeros objetos de tipo Point de la clase CLine con el valor de cero en sus coordenadas ???x??? e ???y???.',
        b:
        `
        // Constructor sin par??metros.
        public CLine()
        {
           mStartPoint = new Point(0, 0);
           mEndPoint = new Point(0, 0);
        }
   
        `
        },
        {t:'b)	Funci??n miembro InitializeData. ',a:'Esta funci??n permite inicializar los datos miembro y los controles del formulario con valores por defecto, como en el caso de la caja de verificaci??n (CheckBox) con el valor booleano de false. Para inicializar la caja de imagen (picCanvas) se utiliza la funci??n Refresh que significa refrescar o borrar.',
        b:
        `
        // Funci??n que inicializa los datos y controles de la clase.
        public void InitializeData(PictureBox picCanvas, CheckBox chkPoint)
        {
            mStartPoint.X = 0; mStartPoint.Y = 0;
            mEndPoint.X = 0; mEndPoint.Y = 0;
    
            picCanvas.Refresh();
            chkPoint.Checked = false;
        }        
        `
        },
        {t:'c)	Funci??n miembro DrawLineMouse. ',a:'Esta funci??n permite dibujar una l??nea con el clic izquierdo del rat??n (mouse), para lo cual se valida que se haya seleccionado dicho bot??n y luego se procede a crear dos bol??grafos de tipo Pen, uno de color verde para dibujar las l??neas y otro de color az??l para dibujar los c??rculos/rect??ngulos que representan a los dos puntos que conforman una l??nea. Constantemente, se actualiza el valor del punto inicial con el valor del punto final y el valor del punto final con el valor de las coordenadas ???x??? e ???y??? del rat??n, para poder graficar l??neas continuas.',
          b:
          `
          // Funci??n que permite dibujar una l??nea con el clic izquierdo
          // del rat??n.
          public void DrawLineMouse(MouseEventArgs e, PictureBox picCanvas,
                                    CheckBox chkPoint)
          {
              // Si se ha seleccionado el bot??n izquierdo del rat??n, entonces
              if (e.Button == MouseButtons.Left)
              {
                  // Asignar la funcionalidad de crear gr??ficos al objeto mGraph.
                  mGraph = picCanvas.CreateGraphics();
      
                  // Crear dos bol??grafos
                  mLinePen = new Pen(Color.Green, 1);
                  mEllipsePen = new Pen(Color.Red, 1);
      
                  // Asignar el punto final al punto inicial.
                  mStartPoint = mEndPoint;                
                  // Asignar al punto final la coordenada del rat??n.
                  mEndPoint = new Point(e.X, e.Y);
      
                  // Dibujar una l??nea desde el punto actual hasta 
                  // el nuevo punto.                
                  mGraph.DrawLine(mLinePen, mStartPoint, mEndPoint);
      
                  // Si la casilla de verificaci??n del check box est?? marcada,
                  // dibujar un rect??ngulo para representar a un punto.                
                  if (chkPoint.Checked)
                  {
                      mGraph.DrawRectangle(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                  }
                  // Dibujar un c??rculo para representar un punto.                
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
          {t:'d)	Funci??n miembro CloseForm. ',a:'Esta funci??n permite cerrar un formulario utilizando la funci??n Close(), que es llamada por el objeto ObjForm el cual es un par??metro de la funci??n que recibe un objeto de tipo Form.',
          b:
          `
          // Funci??n que cierra un formulario.
          public void CloseForm(Form ObjForm)
          {
              ObjForm.Close();
          }
      
          `}
        ],
        tipsProgramacion:[{tip:'Se utiliza la funci??n float.Parse() para convertir un tipo de dato car??cter o cadena a tipo flotante.'},
                          {tip:'Se utiliza la funci??n ToString() para convertir un tipo de dato num??rico a tipo car??cter o cadena.'},
                          ],
        implementacion13: 'La implementaci??n de la clase CLine, se presenta a continuaci??n en la Tabla 1.5.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
        tabla2:'Tabla 1.5.2. ',
        tabladetalle2:'C??digo de la clase CLine del programa.',
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
        
                // Objeto que activa el modo gr??fico.
                private Graphics mGraph;
                // Objeto Punto que representa al punto inicial de 
                // graficaci??n de una l??nea.
                private Point mStartPoint;
                // Objeto Punto que representa al punto final de 
                // graficaci??n de una l??nea.
                private Point mEndPoint;
                // Objeto bol??grafo que dibuja o escribe una l??nea.
                Pen mLinePen;
                // Objeto bol??grafo que dibuja o escribe una elipse.
                Pen mEllipsePen;
        
                // Funciones Miembro (M??todos).
        
                // Constructor sin par??metros.
                public CLine()
                {
                    mStartPoint = new Point(0, 0);
                    mEndPoint = new Point(0, 0);
                }
        
                // Funci??n que inicializa los datos y controles de la clase.
                public void InitializeData(PictureBox picCanvas, CheckBox chkPoint)
                {
                    mStartPoint.X = 0; mStartPoint.Y = 0;
                    mEndPoint.X = 0; mEndPoint.Y = 0;
        
                    picCanvas.Refresh();
                    chkPoint.Checked = false;
                }
        
                // Funci??n que permite dibujar una l??nea con el clic izquierdo
                // del rat??n.
                public void DrawLineMouse(MouseEventArgs e, PictureBox picCanvas,
                                          CheckBox chkPoint)
                {
                    // Si se ha seleccionado el bot??n izquierdo del rat??n, entonces
                    if (e.Button == MouseButtons.Left)
                    {
                        // Asignar la funcionalidad de crear gr??ficos al objeto mGraph.
                        mGraph = picCanvas.CreateGraphics();
        
                        // Crear dos bol??grafos
                        mLinePen = new Pen(Color.Green, 1);
                        mEllipsePen = new Pen(Color.Red, 1);
                    
                        // Asignar el punto final al punto inicial.
                        mStartPoint = mEndPoint;
                        // Asignar al punto final la coordenada del rat??n.
                        mEndPoint = new Point(e.X, e.Y);
        
                        // Dibujar una l??nea desde el punto actual hasta 
                        // el nuevo punto.                
                        mGraph.DrawLine(mLinePen, mStartPoint, mEndPoint);
        
                        // Si la casilla de verificaci??n del check box est?? 
                        // marcada, dibujar un rect??ngulo que representa un punto.                
                        if (chkPoint.Checked)
                        {
                            mGraph.DrawRectangle(mEllipsePen, e.X - 2, e.Y - 2, 4, 4);
                        }
                        // Dibujar un c??rculo para representar un punto.                
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
                // Funci??n que cierra un formulario.
                public void CloseForm(Form ObjForm)
                {
                    ObjForm.Close();
                }
            }
        }                
        `,
        implementacion14: 'La implementaci??n de la clase frmLines, se presenta a continuaci??n en la Tabla 1.5.3, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica conocida como Tri??ngulo.',
        tabla3:'Tabla 1.5.3. ',
        tabladetalle3:'C??digo de la clase frmLines del programa.',
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
                // Definici??n de un objeto de tipo CLine.
                private CLine ObjLine = new CLine();
        
                public frmLines()
                {
                    InitializeComponent();
                }
        
                private void frmLines_Load(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjLine.InitializeData(picCanvas, chkPoint);
                }
        
                private void picCanvas_MouseDown(object sender, MouseEventArgs e)
                {
                    // Graficaci??n de una l??nea utilizando el rat??n.
                    // Llamada a la funci??n DrawLineMouse.
                    ObjLine.DrawLineMouse(e, picCanvas, chkPoint);
                }
        
                private void btnReset_Click(object sender, EventArgs e)
                {
                    // Inicializaci??n de los datos y controles.
                    // Llamada a la funci??n InitializeData.
                    ObjLine.InitializeData(picCanvas, chkPoint);
                }
        
                private void btnExit_Click(object sender, EventArgs e)
                {
                    // Cierre de un formulario.
                    // Llamada a la funci??n CloseForm.
                    ObjLine.CloseForm(this);
                }        
            }
        }
                        
        `,
        implementacion15: 'La clase frmLines tiene como datos miembro un objeto de tipo CLine llamado ObjLine, el cual es el encargado de acceder a las funciones p??blicas de la clase CLine para realizar diferentes c??lculos y operaciones. ',
        implementacion16: 'En el evento Load del formulario, cuyo procedimiento se llama frmTriangle_Load(), se utiliza el objeto ObjLine, para llamar a la funci??n p??blica InitializeData(), que se encarga de inicializar los datos y controles del formulario. En el evento MouseDown de la Caja de Imagen picCanvas, cuyo procedimiento se llama picCanvas_MouseDown(), se utiliza el objeto ObjLine, para llamar a la funci??n p??blica DrawLineMouse(), que permite dibujar l??neas continuas. En el evento Click del bot??n btnClose, cuyo procedimiento se llama btnClose_Click(), se utiliza el objeto ObjLine, para llamar a la funci??n p??blica CloseForm(), que permite cerrar el formulario. ',              
        implementacion17: 'Finalmente, para poder trabajar con el evento MouseDown de la Caja de Imagen picCanvas, se debe activar dicho evento en la ventana de propiedades seleccionando el bot??n de Eventos y haciendo clic en el evento MouseDown (ver Figura 1), lo cual permite registrar este evento en el Designer del formulario (ver en la Figura 1) y luego puede ser utilizado para ser programado.', 
        imagen11: './assets/images/Capitulos/I/media/image44.png',
        figuraNum11: 'Figura 1.5.6. ',
        figura11: 'Activaci??n de eventos del picCanvas.',
        imagen12: './assets/images/Capitulos/I/media/image45.png',
        figuraNum12: 'Figura 1.5.7. ',
        figura12: 'Registro del evento en el Designer del formulario.',
        implementacion18: 'Para correr la aplicaci??n basta con presionar la tecla F5 o el bot??n Start de ejecuci??n de la barra de men??s de Visual Studio .NET. La Figura 1.5.8 muestra un ejemplo de la corrida de este programa. Para verificar que el programa funciona adecuadamente, se deber?? dibujar varias l??neas dentro de la Caja de Imagen (picCanvas), haciendo un clic con el bot??n izquierdo del rat??n para definir cada par de puntos que se utilizar??n para graficar una l??nea entre esos dos puntos.',
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
         titulo:'Hex??gono de 6 Colores',
         sinopsisDescrip:'Este pracnique explora la creaci??n de un programa de gr??ficos por computadora para graficar un hex??gono de 6 colores, dado el lado de un hex??gono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Dise??o de algoritmos, geometr??a computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'B??sico'}
            ],
         A:{
             subtitulo:'A)	Descripci??n del Problema',
             problema:'Dado el lado de un hex??gono regular, dibujar la figura geom??trica correspondiente, considerando que uno de los v??rtices del hex??gono se encuentra sobre el eje de las ???x???. Adem??s, se debe rellenar la figura con 6 colores, donde cada tri??ngulo peque??o tiene un color como el color rojo, amarillo, verde, violeta, azul y celeste. (Ver Figura 1.1.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image097.png',
             fotoN:'Figura 1.1.1 ',
             fotoDescrip:'Hex??gono de 6 colores.'
            },
         B:{
             subtitulo:'B)	Geometr??a de la Figura',problema:'Por construcci??n se encierra a la figura geom??trica dentro de un rect??ngulo, luego se extienden algunos v??rtices hacia los lados del rect??ngulo form??ndose los segmentos ???b???, ???Ap???, que se calculan resolviendo el tri??ngulo rect??ngulo APC. Estos dos segmentos permiten obtener los valores de los v??rtices del hex??gono regular que se utilizar??n para graficar la figura rellenada con 6 colores. (Ver Figura 1.1.2).',fotoPath:'./assets/images/Capitulos/I/media/image098.png',fotoN:'Figura 1.1.2 ',fotoDescrip:'V??rties y ??ngulos del hex??gono regular.',
             listaB:
                [
                    {
                        parrafo:'Calculamos los valores del segmento ???b??? y de la apotema ???Ap??? en el tri??ngulo rect??ngulo APC:',
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
                        parrafo:'Luego, obtenemos los siguientes puntos del hex??gono:',
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
                        parrafo:'Con los valores del segmento ???b??? y de la ???apotema??? se pueden calcular el valor del per??metro y del ??rea del hex??gono:',
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
                    titulo:'1.1.1. Algoritmo de la Funci??n ReadData()',
                    pasos:[
                        'Leer el lado del hex??gono.'
                    ]
                },
                {
                    titulo:'1.1.2. Algoritmo de la Funci??n CalculateVertex()',
                    pasos:[
                        'Convertir el ??ngulo ???1??? de grados a radianes, multiplicando el valor del ??ngulo de 60 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Calcular el valor del segmento \'b\' del contorno del hex??gono.',
                        'Calcular las coordenadas del v??rtice \'A\'.',
                        'Calcular las coordenadas del v??rtice \'B\'.',
                        'Calcular las coordenadas del v??rtice \'C\'.',
                        'Calcular las coordenadas del v??rtice \'D\'.',
                        'Calcular las coordenadas del v??rtice \'E\'.',
                        'Calcular las coordenadas del v??rtice \'F\'.',
                        'Calcular las coordenadas del v??rtice central \'O\'.'
                    ]
                },
                {
                    titulo:'1.1.3. Algoritmo de la Funci??n PlotShape()',
                    pasos:[
                        'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                        'Llamada a la funci??n CalculateVertex.',
                        'Actualizar el valor del vertice \'A\' con lo que tiene el v??rtice \'A\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'B\' con lo que tiene el v??rtice \'B\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'C\' con lo que tiene el v??rtice \'C\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'D\' con lo que tiene el v??rtice \'D\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'E\' con lo que tiene el v??rtice \'E\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'F\' con lo que tiene el v??rtice \'F\' multiplicado por un factor de escalamiento.',
                        'Actualizar el valor del vertice \'O\' con lo que tiene el v??rtice \'O\' multiplicado por un factor de escalamiento.',
                        'Crear una brocha s??lida de color rojo (Red).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: A, O, C, A.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha s??lida de color amarillo (Yellow).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: A, B, O, A.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha s??lida de color verde (Green).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: B, D, O, B.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha s??lida de color azul violeta (BlueViolet).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: C, O, E, C.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha s??lida de color azul (Blue).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: O, F, E, O.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                        'Crear una brocha s??lida de color celeste (SkyBlue).',
                        'Crear un arreglo de puntos de tipo Point con los v??rtices: O, D, F, O.',
                        'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.'
                    ]
                }
            ]
         },
         D:{
            subtitulo:'D)	C??digo de la Aplicaci??n',
            listaCodigo:[
                {
                    problema:'La implementaci??n de la clase CHexagon, se presenta a continuaci??n en la Tabla 1.1.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 1.1.2. ',
                    tablaDescrip:'C??digo de la clase CHexagon del programa.',
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

                            // Lado del hex??gono.
                            private float side;
                            // Apotema del hex??gono.
                            private float apothem;
                            // Segmento 'b' del hex??gono.
                            private float b;
                            // ??ngulo agudo del tri??ngulo rect??ngulo APC.
                            private float angle;
                            // Per??metro del hex??gono.
                            private float perimeter;
                            // ??rea del hex??gono.
                            private float area;
                            // Objeto que activa el modo gr??fico.
                            private Graphics graph;
                            // Objeto que maneja un pincel para el relleno.
                            private SolidBrush brush;
                            // Constante scale factor (Zoom In/Zoom Out).
                            private const float SF = 20;
                            // Objeto Punto que representa a los v??rtices del hex??gono.
                            private PointF A, B, C, D, E, F, O;

                            // Funciones miembro - M??todos.

                            // Constructor sin par??metros.
                            public CHexagon()
                            {
                                side = 0.0f; perimeter = 0.0f; area = 0.0f;
                            }

                            // Funci??n que lee el lado del hex??gono.
                            public void ReadData(TextBox txtSideSide)
                            {
                                try
                                {
                                    side = float.Parse(txtSideSide.Text);
                                }
                                catch
                                {
                                    MessageBox.Show("Ingreso no v??lido...");
                                }
                            }

                            // Funci??n que calcula el per??metro del hex??gono.
                            public void PerimeterHexagon()
                            {
                                perimeter = 6 * side;
                            }

                            // Funci??n que calcula el ??rea del hex??gono.
                            public void AreaHexagon()
                            {
                                angle = 60.0f * (float)Math.PI / 180.0f;
                                apothem = side * (float)Math.Sin(angle);

                                area = perimeter * apothem / 2.0f;
                            }

                            // Funci??n que imprime el per??metro y el ??rea del hex??gono.
                            public void PrintData(TextBox txtPerimeter, TextBox txtArea)
                            {
                                txtPerimeter.Text = perimeter.ToString();
                                txtArea.Text = area.ToString();
                            }

                            // Funci??n que inicializa los datos y controles del hex??gono.
                            public void InitializeData(TextBox txtSide,
                                                    TextBox txtPerimeter,
                                                    TextBox txtArea,
                                                    PictureBox picCanvas)
                            {
                                txtSide.Text = ""; txtPerimeter.Text = ""; txtArea.Text = "";            
                                txtSide.Focus(); picCanvas.Refresh();
                                side = 0.0f; perimeter = 0.0f; area = 0.0f;            
                            }

                            // Funci??n que calcula los valores de los seis v??rtices del hex??gono.
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

                            // Funci??n que grafica un hex??gono con
                            // seis tri??ngulos de diferentes colores.
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

                            // Funci??n que cierra un formulario.
                            public void CloseForm(Form ObjForm)
                            {
                                ObjForm.Close();
                            }
                        }
                    }
                    `
                },
                {
                    problema:'La implementaci??n de la clase frmHexagon, se presenta a continuaci??n en la Tabla 1.1.3, que es la clase que representa a la interfaz gr??fica de usuario del hex??gono regular de 6 colores.',
                    tablaN:'Tabla 1.1.3. ',
                    tablaDescrip:'C??digo de la clase frmHexagon del programa.',
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
                            // Definici??n de un objeto de tipo CHexagon.
                            CHexagon ObjHexagon = new CHexagon();

                            public frmHexagon()
                            {
                                InitializeComponent();
                            }

                            private void frmHexagon_Load(object sender, EventArgs e)
                            {
                                // Inicializaci??n de los datos y controles.
                                // Llamada a la funci??n InitializeData.
                                ObjHexagon.InitializeData(txtSide, txtPerimeter,
                                                        txtArea, picCanvas);
                            }

                            private void btnCalculate_Click(object sender, EventArgs e)
                            {
                                // Lectura de datos.
                                // Llamada a la funci??n ReadData.
                                ObjHexagon.ReadData(txtSide);
                                // C??lculo del per??metro del hex??gono.
                                // Llamada a la funci??n PerimeterHexagon.
                                ObjHexagon.PerimeterHexagon();
                                // C??lculo del ??rea del hex??gono.
                                // Llamada a la funci??n AreaHexagon.
                                ObjHexagon.AreaHexagon();
                                // Impresi??n del per??metro y del ??rea del hex??gono.
                                // Llamada a la funci??n PrintData.
                                ObjHexagon.PrintData(txtPerimeter, txtArea);
                                // Graficar un hex??gono relleno con seis colores diferentes.
                                // Llamada a la funci??n PlotShape.
                                ObjHexagon.PlotShape(picCanvas);
                            }

                            private void btnReset_Click(object sender, EventArgs e)
                            {
                                // Inicializaci??n de los datos y controles.
                                // Llamada a la funci??n InitializeData.
                                ObjHexagon.InitializeData(txtSide, txtPerimeter,
                                                        txtArea, picCanvas);
                            }

                            private void btnExit_Click(object sender, EventArgs e)
                            {
                                // Cierre de un formulario.
                                // Llamada a la funci??n CloseForm.
                                ObjHexagon.CloseForm(this);
                            }
                        }
                    }
                    `
                } 
            ]
         },
         E:{
            subtitulo:'E)	Pruebas de la Aplicaci??n',
            problema:'A continuaci??n, en la Figura 1.1.3, se muestra un ejemplo de la corrida del programa:',
            fotoPath:'./assets/images/Capitulos/I/media/image113.png',
            fotoN:'Figura 1.1.3 ',
            fotoDescrip:' Corrida del programa'
         }

         },
         {
        link:'https://drive.google.com/uc?id=100iRxgQ-l7y3e5B9BXQ3q5FljehtsvRt&export=download',
        label: 'Pracnique 1.2', 
         tituloN:'Pracnique 1.2: ',
         titulo:'Flor de la Margarita de 5 P??talos',
         sinopsisDescrip:'Este pracnique explora la creaci??n de un programa de gr??ficos por computadora para graficar una flor de la Margarita de 5 p??talos, dado el lado de un pent??gono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Dise??o de algoritmos, geometr??a computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Intermedio'}
            ],
         A:{
             subtitulo:'A)	Descripci??n del Problema',
             problema:'Dado un pent??gono regular, dibujar una flor de la Margarita de 5 p??talos a base de cinco pent??gonos inscritos en uno m??s grande, considerando que uno de los v??rtices de los cinco pent??gonos se encuentra sobre el eje de las ???x???. Adem??s, se debe rellenar de color rojo cada pent??gono peque??o. (Ver Figura 1.2.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image114.png',
             fotoN:'Figura 1.2.1 ',
             fotoDescrip:' Flor margarita de 5 p??talos.'
            },
        B:{
            subtitulo:'B)	Geometr??a de la Figura',problema:'Por construcci??n se completa la estrella pentagonal del pent??gono que encierra los cinco pent??gonos peque??os de la flor de la Margarita y se encuentran cinco ??ngulos para realizar los diferentes c??lculos de las coordenadas de los diferentes puntos que conforman los v??rtices de los pent??gonos peque??os. (Ver Figura 1.2.2).',fotoPath:'./assets/images/Capitulos/I/media/image115.png',fotoN:'Figura 1.2.2 ',fotoDescrip:'V??rties y ??ngulos de la flor margarita de 5 p??talos.',
            listaB:
                [
                    {
                        parrafo:'Calculamos los valores de a y b en el tri??ngulo rect??ngulo ABV:',
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
                        parrafo:'Calculamos los valores de c y d en el tri??ngulo rect??ngulo BDY:',
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
                        parrafo:'Calculamos la ecuaci??n de la recta AD:',
                        formulas:[
                            '$y-y_{A}=m_{AD}(x-x_{A})$',
                            '$y-0=m_{AD}(x-a)$',
                            '$y=x\\times m_{AD}-a\\times m_{AD}\\Rightarrow(8)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuaci??n de la recta BC:',
                        formulas:[
                            '$y-y_{B}=m_{BC}(x-x_{B})$',
                            '$y-b=0\\times (x-0)$',
                            '$y=b\\Rightarrow(9)$'
                            ]
                    },
                    {
                        parrafo:'Calculamos la ecuaci??n de la recta BE:',
                        formulas:[
                            '$y-y_{B}=m_{BE}(x-x_{B})$',
                            '$y-b=m_{BE}(x-0)$',
                            '$y-b=x\\times m_{BE}\\Rightarrow(10)$'
                            ]
                    },
                    {
                        parrafo:'Resolvemos el sistema de ecuaciones entre (8) y (9), para lo cual reemplazamos el valor de y de la ecuaci??n (9) en la ecuaci??n (8) y calculamos el valor de x:',
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
                        parrafo:'Resolvemos el sistema de ecuaciones entre (8) y (10), para lo cual reemplazamos el valor de y de la ecuaci??n (8) en la ecuaci??n (10) y calculamos el valor de x:',
                        formulas:[
                            '$x\\times m_{AD}-a\\times m_{AD}-b=x\\times m_{BE}$',
                            '$x\\times m_{AD}-x\\times m_{BE}=a\\times m_{AD}+b$',
                            '$x\\times (m_{AD}-\\times m_{BE})=a\\times m_{AD}+b$',
                            '$x=\\frac{a\\times m_{AD}+b}{m_{AD}-\\times m_{BE}}\\Rightarrow(12)$'
                            ]
                    },
                    {
                        parrafo:'En la ecuaci??n (10) reemplazamos el valor de x:',
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
                        parrafo:'Tambi??n se puede concluir que:',
                        formulas:[
                            '$FH=BL=FL=KF$'
                            ]
                    },
                    {
                        parrafo:'Resolviendo el tri??ngulo rect??ngulo BOL que forma parte del tri??ngulo is??sceles BFL, se tiene que:',
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
                        parrafo:'Resolviendo el tri??ngulo rect??ngulo ZKF se tiene que:',
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
                        parrafo:'Luego, obtenemos los siguientes puntos del pent??gono interno:',
                        formulas:[
                            '$G(x_{G},y_{G})=G(BF+FH,b)$',
                            '$I(x_{I},y_{I})=I(BF+FH+ZF,b+KZ)$',
                            '$J(x_{J},y_{J})=J(d+FH+ZF,b+c-KZ)$'
                            ]
                    },
                    {
                        parrafo:'Finalmente, obtenemos los siguientes puntos de los pent??gonos externos:',
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
                       titulo:'1.2.1. Algoritmo de la Funci??n ReadData()',
                       pasos:[
                           'Leer el lado del pent??gono.'
                       ]
                   },
                   {
                       titulo:'1.2.2. Algoritmo de la Funci??n CalculateMainVertex()',
                       pasos:[
                        'Convertir el ??ngulo ???1??? de grados a radianes, multiplicando el valor del ??ngulo de 36 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Convertir el ??ngulo ???2??? de grados a radianes, multiplicando el valor del ??ngulo de 72 grados por PI radianes y dividiendo su resultado para 180 grados.',
                        'Calcular el valor del segmento \'a\' del contorno del pent??gono.',
                        'Calcular el valor del segmento \'b\' del contorno del pent??gono.',
                        'Calcular el valor del segmento \'c\' del contorno del pent??gono.',
                        'Calcular el valor del segmento \'d\' del contorno del pent??gono.',
                        'Calcular las coordenadas del v??rtice \'A\'.',
                        'Calcular las coordenadas del v??rtice \'B\'.',
                        'Calcular las coordenadas del v??rtice \'C\'.',
                        'Calcular las coordenadas del v??rtice \'D\'.',
                        'Calcular las coordenadas del v??rtice \'E\'.'                        
                       ]
                   },
                   {
                       titulo:'1.2.3. Algoritmo de la Funci??n CalculateSlopes()',
                       pasos:[
                            'Calcular el valor de la pendiente AD.',
                            'Calcular el valor de la pendiente BE.'
                        ]
                   },
                   {
                       titulo:'1.2.4. Algoritmo de la Funci??n CalculateAuxiliarySegmentsVertex()',
                       pasos:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                            'Llamada a la funci??n CalculateMainVertex.',
                            'Llamada a la funci??n CalculateSlopes.',
                            'Calcular las coordenadas del v??rtice \'F\'.',
                            'Calcular las coordenadas del v??rtice \'H\'.',
                            'Calcular el valor del segmento \'FH\'.',
                            'Calcular el valor del segmento \'BL\'.',
                            'Calcular el valor del segmento \'KF\'.',
                            'Calcular el valor del segmento \'BO\'.',
                            'Calcular el valor del segmento \'LO\'.',
                            'Calcular el valor del segmento \'BF\'.',
                            'Calcular el valor del segmento \'ZF\'.',
                            'Calcular el valor del segmento \'KZ\'.',
                            'Calcular las coordenadas del v??rtice \'L\'.',
                            'Calcular las coordenadas del v??rtice \'M\'.',
                            'Calcular las coordenadas del v??rtice \'N\'.',
                            'Calcular las coordenadas del v??rtice \'P\'.',
                            'Calcular las coordenadas del v??rtice \'R\'.',
                            'Calcular las coordenadas del v??rtice \'Q\'.',
                            'Calcular las coordenadas del v??rtice \'S\'.',
                            'Calcular las coordenadas del v??rtice \'T\'.',
                            'Calcular las coordenadas del v??rtice \'U\'.',
                            'Calcular las coordenadas del v??rtice \'G\'.',
                            'Calcular las coordenadas del v??rtice \'I\'.',
                            'Calcular las coordenadas del v??rtice \'J\'.'                        
                       ]
                   },
                   {
                       titulo:'1.2.5. Algoritmo de la Funci??n FillPolygonPointF()',
                       pasos:[
                            'Asignar al objeto graph el valor de retorno de la funci??n Graphics llamada por el objeto \'e\'.',
                            'Actualizar el valor del vertice \'A\' con lo que tiene el v??rtice \'A\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'K\' con lo que tiene el v??rtice \'K\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'M\' con lo que tiene el v??rtice \'M\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'F\' con lo que tiene el v??rtice \'F\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'G\' con lo que tiene el v??rtice \'G\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'N\' con lo que tiene el v??rtice \'N\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'C\' con lo que tiene el v??rtice \'C\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'Q\' con lo que tiene el v??rtice \'Q\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'I\' con lo que tiene el v??rtice \'I\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'S\' con lo que tiene el v??rtice \'S\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'E\' con lo que tiene el v??rtice \'E\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'U\' con lo que tiene el v??rtice \'U\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'J\' con lo que tiene el v??rtice \'J\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'T\' con lo que tiene el v??rtice \'T\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'D\' con lo que tiene el v??rtice \'D\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'R\' con lo que tiene el v??rtice \'R\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'H\' con lo que tiene el v??rtice \'H\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'P\' con lo que tiene el v??rtice \'P\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'B\' con lo que tiene el v??rtice \'B\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'L\' con lo que tiene el v??rtice \'L\' multiplicado por un factor de escalamiento.',
                            'Crear una brocha s??lida de color rojo.',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices: A, M, G, F, K, A.',
                            'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices: N, C, Q, I, G, N.',
                            'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices: I, S, E, U, J, I.',
                            'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices: H, J, T, D, R, H.',
                            'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices: L, F, H, P, B, L.',
                            'Graficar un pol??gono relleno con la brocha y el arreglo de puntos del paso anterior.'
                       ]
                   }
               ]
            },         
            D:{
                subtitulo:'D)	C??digo de la Aplicaci??n',
                listaCodigo:[
                    {
                        problema:'La implementaci??n de la clase CDaisyFlower, se presenta a continuaci??n en la Tabla 1.2.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                        tablaN:'Tabla 1.2.2. ',
                        tablaDescrip:'C??digo de la clase CDaisyFlower del programa.',
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

                                // Lado del pent??gono.
                                private float side;
                                // Segmentos del pent??gono.
                                private float a, b, c, d;
                                // ??ngulos del pent??gono.
                                private float angle1, angle2;
                                // Pendiente o gradiente de la l??nea AD.
                                private float mAD;
                                // Pendiente o gradiente de la l??nea BE.
                                private float mBE;
                                // Objeto que activa el modo gr??fico.        
                                private Graphics graph;
                                // Objeto que maneja un pincel para el relleno.
                                private SolidBrush redBrush;
                                // Constante scale factor (Zoom In/Zoom Out).
                                private const float SF = 20;
                                // Objeto Punto que representa a los cinco v??rtices del pent??gono.
                                private PointF A, B, C, D, E;
                                // Objeto Punto que representa a los v??rtices auxiliares del pent??gono.
                                private PointF F, G, H, I, J;
                                // Objeto Punto que representa a los v??rtices auxiliares del pent??gono.
                                private PointF K, L, M, N, T, U, V, W, X, Y;

                                // Funciones Miembro - M??todos.

                                // Constructor sin par??metros.
                                public CDaisyFlower()
                                {
                                    side = 0.0f;
                                }

                                // Funci??n que lee el lado del pent??gono.
                                public void ReadData(TextBox txtSideSide)
                                {
                                    try
                                    {
                                        side = float.Parse(txtSideSide.Text);
                                    }
                                    catch
                                    {
                                        MessageBox.Show("Ingreso no v??lido...");
                                    }            
                                }

                                // Funci??n que inicializa los datos y controles del pent??gono.
                                public void InitializeData(TextBox txtSide,
                                                        PictureBox picCanvas)
                                {
                                    side = 0.0f;
                                    txtSide.Text = "";            
                                    txtSide.Focus();
                                    picCanvas.Refresh();
                                }

                                // Funci??n que calcula los valores de los cinco v??rtices del pent??gono.
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

                                // Funci??n que calcula los valores de las pendientes AD y BE.
                                private void CalculateSlopes()
                                {            
                                    mAD = (b + c) / (d - a);            
                                    mBE = c / (d + side);
                                }

                                // Funci??n que calcula los v??rtices y segmentos de una flor de la Margarita de 5 
                                // p??talos a base de cinco pent??gonos inscritos en uno m??s grande.        
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

                                // Funci??n que grafica una flor de la Margarita de 5 p??talos 
                                // a base de cinco pent??gonos rellenados de color rojo.
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

                                // Funci??n que cierra un formulario.
                                public void CloseForm(Form ObjForm)
                                {
                                    ObjForm.Close();
                                }
                            }
                        }
                        `
                    },
                    {
                        problema:'La implementaci??n de la clase frmDaisyFlower, se presenta a continuaci??n en la Tabla 1.2.3, que es la clase que representa a la interfaz gr??fica de usuario de la flor margarita de 5 p??talos.',
                        tablaN:'Tabla 1.2.3. ',
                        tablaDescrip:'C??digo de la clase frmDaisyFlower del programa.',
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
                                // Definici??n de un objeto de tipo CDaisyFlower.
                                CDaisyFlower ObjDaisyFlower = new CDaisyFlower();

                                public frmDaisyFlower()
                                {
                                    InitializeComponent();
                                }

                                private void frmDaisyFlower_Load(object sender, EventArgs e)
                                {
                                    // Inicializaci??n de los datos y controles.
                                    // Llamada a la funci??n InitializeData.
                                    ObjDaisyFlower.InitializeData(txtSide, picCanvas);
                                }

                                private void btnCalculate_Click(object sender, EventArgs e)
                                {
                                    // Lectura de datos.
                                    // Llamada a la funci??n ReadData.
                                    ObjDaisyFlower.ReadData(txtSide);
                                    // C??lculo de los segmentos y v??rtices auxiliares de la flor de la Margarita.
                                    // Llamada a la funci??n CalculateAuxiliarySegmentsVertex.
                                    ObjDaisyFlower.CalculateAuxiliarySegmentsVertex(picCanvas);
                                    // Redibujar el control picCanvas, llamando al evento Paint.
                                    // Llamada a la funci??n Invalidate.
                                    picCanvas.Invalidate();
                                }

                                private void btnReset_Click(object sender, EventArgs e)
                                {
                                    // Inicializaci??n de los datos y controles.
                                    // Llamada a la funci??n InitializeData.
                                    ObjDaisyFlower.InitializeData(txtSide, picCanvas);
                                }

                                private void btnExit_Click(object sender, EventArgs e)
                                {
                                    // Cierre de un formulario.
                                    // Llamada a la funci??n CloseForm.
                                    ObjDaisyFlower.CloseForm(this);
                                }

                                private void picCanvas_Paint(object sender, PaintEventArgs e)
                                {
                                    // Rellenar los pol??gonos peque??os de la flor de la Margarita de 5 p??talos.
                                    // Llamada a la funci??n FillPolygonPointF.
                                    ObjDaisyFlower.FillPolygonPointF(e);
                                }
                            }
                        }
                        `
                    } 
                ]
            },
            E:{
                subtitulo:'E)	Pruebas de la Aplicaci??n',
                problema:'A continuaci??n, en la Figura 1.2.3, se muestra un ejemplo de la corrida del programa:',
                fotoPath:'./assets/images/Capitulos/I/media/image189.png',
                fotoN:'Figura 1.2.3 ',
                fotoDescrip:' Corrida del programa'
             }
        },
         {        
        link:'https://drive.google.com/uc?id=1LpFnlZWVevOBnVYpL0_5z0K8JhlpiElq&export=download',
         label: 'Pracnique 1.3', 
         tituloN:'Pracnique 1.3: ',
         titulo:'Pol??gonos Estrellados de 10 y 5 Puntas',
         sinopsisDescrip:'Este pracnique explora la creaci??n de un programa de gr??ficos por computadora para graficar un pol??gono estrellado de 10 puntas que contiene otros dos pol??gonos estrellados de 5 puntas, dado el lado de un dec??gono.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Dise??o de algoritmos, geometr??a computacional, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Avanzado'}
            ],
         A:{
             subtitulo:'A)	Descripci??n del Problema',
             problema:'Dado el lado de un dec??gono regular, dibujar un pol??gono regular de 10 lados, un pol??gono estrellado de 10 puntas, un pol??gono estrellado mediano de 5 puntas ubicado con respecto al centro y otro pol??gono estrellado peque??o de 5 puntas. Se debe considerar que las figuras geom??tricas se grafican con respecto al punto O(0,0). (Ver Figura 1.3.1).',
             fotoPath:'./assets/images/Capitulos/I/media/image001.jpg',
             fotoN:'Figura 1.3.1 ',
             fotoDescrip:'Pol??gonos estrellados de 10 y 5 puntas.'
            },
         B:{
             subtitulo:'B)	Geometr??a de la Figura',problema:'Por construcci??n se encierra a la figura geom??trica dentro de un rect??ngulo, luego se extienden algunos v??rtices hacia los lados del rect??ngulo form??ndose los segmentos ???a???, ???b???, ???c???, ???d???, ???e???, que se calculan resolviendo tres tri??ngulos rect??ngulos cuyos 5 ??ngulos forman parte del dec??gono regular. Por construcci??n se obtiene tambi??n el ??ngulo ???alpha??? con el cual se calcula el valor del segmento ???a???. Todos estos segmentos permiten obtener los valores de los v??rtices del dec??gono regular que se utilizar??n para graficar el pol??gono estrellado de 10 puntas. Adem??s, se requieren calcular los valores de los v??rtices que forman los pol??gonos estrellados de 5 puntas, para lo cual es necesario calcular sus pendientes y resolver varios sistemas de ecuaciones con dos inc??gnitas. (Ver Figura 1.3.2).',fotoPath:'./assets/images/Capitulos/I/media/image190.png',fotoN:'Figura 1.3.2 ',fotoDescrip:'V??rties y ??ngulos de los pol??gonos estrellados de 10 y 5 puntas.',
             listaB:
                [
                    {
                        parrafo:'Calculamos el valor del segmento ???a??? en el tri??ngulo is??sceles HMI que contiene al tri??ngulo rect??ngulo MNI: ',
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
                        parrafo:'Calculamos los valores de los segementos ???e??? y ???b??? en el tri??ngulo rect??ngulo IJL:',
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
                        parrafo:'Calculamos los valores de los segementos ???c??? y ???d??? en el tri??ngulo rect??ngulo AJK:',
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
                        parrafo:'Con los puntos obtenidos se pueden graficar con l??neas las siguientes figuras geom??tricas: a) Un dec??gono regular grande ABCDEFGHIJ, de color azul obscuro (DarkBlue); b) un pent??gono regular ACEGI, de color verde mar claro (LightSeaGreen); c) Un pent??gono regular BDFHJ, de color verde bosque (ForestGreen); d) Las estrellas de 5 puntas de color azul violeta (BlueViolet).',
                    },
                    {
                        teorema:'Teorema 1: ',
                        formulas:[
                            'Si $P_1(x_1,y_1 )$ y $P_2 (x_2,y_2 )$ son los extremos de un segmento $P_1 P_2;$ Si $P_3(x_3,y_3 )$ y $P_4(x_4,y_4 )$ son los extremos de un segmento $P_3 P_4$ (ver Figura 1.3.3). Las coordenadas $(x_P,y_P )$ del punto P de intersecci??n de las dos rectas est??n dadas por la siguiente expresi??n:',
                            '$P(x_P,y_P)=P(\\frac{y_3-y_1+m_1\\times x_1-m_2\\times x_3}{m_1-m_2},y_1+m_1(x_P,x_1));m_1-m_2\\neq0\\Rightarrow(7)$'
                            ]
                    },
                    {
                        tabla:[{
                            fotoPath:'./assets/images/Capitulos/I/media/image226.png',
                            formulas:[
                                '$Figura 1.3.3.\\bf$ C??lculo de las coordenadas del punto P'
                                ]
                            }]
                    },
                    {
                        teorema:'Demostraci??n: ',
                        formulas:[
                            'La recta $P_1 P_2$, se cruza con la recta $P_3 P_4$ en el punto $P(x_P,y_P )$, por lo tanto, para calcular las coordenadas del punto de intersecci??n P, se requiere resolver un sistema de ecuaciones de dos inc??gnitas que contiene los puntos de las rectas y sus pendientes, como se indica a continuaci??n:'
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
                        parrafo:'Calculamos la ecuaci??n de la recta:',
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
                        parrafo:'Calculamos la ecuacici??n de la recta: ',
                        formulas:[
                            '$\\Rightarrow$ Recta: $P_3P_4$',
                            '$y-y_3=m_2(x_-x_3)$',
                            '$y=y_3+m_2\\times x-m_2\\times x_3\\Rightarrow(11)$'
                            ]
                    },
                    {
                        parrafo:'',
                        formulas:[
                            'Resolvemos el sistema de ecuaciones entre (9) y (11), para lo cual igualamos el valor de $y$ de la ecuaci??n (9) con el valor de $y$ de la ecuaci??n (11) y calculamos el valor de $ x$: ',
                            '$y_1+m_1\\times x-m_1\\times x_1=y_3+m_2\\times x-m_2\\times x_3$',
                            '$m_1\\times x-m_2\\times x=y_3-m_2\\times x_3-y_1+m_1\\times x_1$',
                            '$x(m_1-m_2)=y_3-y_1+m_1\\times x_1-m_2\\times x_3$',
                            '$x=\\frac{(y_3-y_1+m_1\\times x_1-m_2\\times x_3)}{(m_1-m_2)}; m_1-m_2\\neq0\\Rightarrow(12)$'
                            ]
                    },
                    {
                        parrafo:'En la ecuaci??n (9) reemplazamos el valor de x:',
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
                        parrafo:'Con el Teorema 1 se pueden calcular los puntos de intersecci??n entre las diferentes rectas que conforman los dos pol??gonos estrellados de 5 puntas, como sigue:'
                    },
                    {
                        parrafo:'Pol??gono estrellado grande de 5 puntas, de color azul obscuro (DarkBlue): ',
                        formulas:[
                            '$PQRST:$',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto $P$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto $T$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto $Q$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto $S$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto $R$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PS}$, para obtener el punto $P_1$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{TQ}$ y $l_{PR}$, para obtener el punto $P_2$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{QS}$, para obtener el punto $P_3$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{QS}$, para obtener el punto $P_4$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{PS}$, para obtener el punto $P_5$.',    
                        ]
                    },
                    {
                        parrafo:'Pol??gono estrellado peque??o de 5 puntas, relleno de color azur (Azure):',
                        formulas:[
                            '$P\'Q\'R\'S\'T\':$',
                            '???  El punto $P\'(x_P,y_P )= P\'(x_O,y_T )$',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{PS}$, para obtener el punto $T\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{PR}$ y $l_{CH}$, para obtener el punto $Q\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{TR}$ y $l_{BG}$, para obtener el punto $S\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{QS}$ y $l_{JE}$, para obtener el punto $R\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'S\'}$, para obtener el punto $P_6$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{T\'Q\'}$ y $l_{P\'R\'}$, para obtener el punto $P_7$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{P\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_8$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{Q\'S\'}$, para obtener el punto $P_9$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{T\'R\'}$ y $l_{P\'S\'}$, para obtener el punto $P_{10}$.'
                        ]
                    },
                    {
                        parrafo:'Dec??gono regular peque??o, de color flor de ma??z azul (CornflowerBlue):',
                        formulas:[
                            '$PB\'QD\'RF\'SH\'TJ\':$',
                            '???  Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BI}$, para obtener el punto $P.$',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{AH}$, para obtener el punto $T$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{AD}$ y $l_{CH}$, para obtener el punto $Q$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{BG}$, para obtener el punto $S$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{CF}$, para obtener el punto $R$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{JC}$ y $l_{BG}$, para obtener el punto $B\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{ID}$ y $l_{CF}$, para obtener el punto $D\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{HE}$ y $l_{DG}$, para obtener el punto $F\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{IF}$ y $l_{CH}$, para obtener el punto $H\'$.',
                            '???	Resolver el sistema de ecuaciones entre las rectas $l_{JE}$ y $l_{BI}$, para obtener el punto $J\'$.'
                        ]
                    },
                    {
                        parrafo:'Finalmente calculamos el valor del di??metro del c??rculo circunscrito al dec??gono, de color gris (Gray):',
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
                        titulo:'1.3.1. Algoritmo de la Funci??n ReadData()',
                        pasos:[
                            'Leer el lado del dec??gono.'
                        ]
                    },
                    {
                        titulo:'1.3.2. Algoritmo de la Funci??n CalculateVertexBigDecagon()',
                        pasos:[
                            'Convertir el ??ngulo ???1??? de grados a radianes, multiplicando el valor del ??ngulo de 36 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Convertir el ??ngulo ???2??? de grados a radianes, multiplicando el valor del ??ngulo de 18 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Convertir el ??ngulo ???alpha??? de grados a radianes, multiplicando el valor del ??ngulo de 10 grados por PI radianes y dividiendo su resultado para 180 grados.',
                            'Calcular el valor del segmento \'a\' del contorno del dodec??gono.',
                            'Calcular el valor del segmento \'b\' del contorno del dodec??gono.',
                            'Calcular el valor del segmento \'c\' del contorno del dodec??gono.',
                            'Calcular el valor del segmento \'d\' del contorno del dodec??gono.',
                            'Calcular el valor del segmento \'e\' del contorno del dodec??gono.',
                            'Calcular las coordenadas del v??rtice \'A\'.',
                            'Calcular las coordenadas del v??rtice \'B\'.',
                            'Calcular las coordenadas del v??rtice \'C\'.',
                            'Calcular las coordenadas del v??rtice \'D\'.',
                            'Calcular las coordenadas del v??rtice \'E\'.',
                            'Calcular las coordenadas del v??rtice \'F\'.',
                            'Calcular las coordenadas del v??rtice \'G\'.',
                            'Calcular las coordenadas del v??rtice \'H\'.',
                            'Calcular las coordenadas del v??rtice \'I\'.',
                            'Calcular las coordenadas del v??rtice \'J\'.',
                            'Calcular las coordenadas del v??rtice \'O\'.'
                        ]
                    },
                    {
                        titulo:'1.3.3. Algoritmo de la Funci??n PlotBigDecagon()',
                        pasos:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                            'Llamar a la funci??n CalculateVertexBigDecagon().',
                            'Actualizar el valor del vertice \'A\' con lo que tiene el v??rtice \'A\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'B\' con lo que tiene el v??rtice \'B\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'C\' con lo que tiene el v??rtice \'C\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'D\' con lo que tiene el v??rtice \'D\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'E\' con lo que tiene el v??rtice \'E\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'F\' con lo que tiene el v??rtice \'F\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'G\' con lo que tiene el v??rtice \'G\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'H\' con lo que tiene el v??rtice \'H\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'I\' con lo que tiene el v??rtice \'I\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'J\' con lo que tiene el v??rtice \'J\' multiplicado por un factor de escalamiento.',
                            'Crear un bol??grafo de color azul obscuro (DarkBlue).',
                            'Graficar el dec??gono grande de la figura geom??trica uniendo con l??neas los puntos: A, B, C, D, E, F, G, H, I, J.',
                            'Crear un bol??grafo de color verde mar claro (LightSeaGreen).',
                            'Graficar el primer pent??gono regular grande de la figura geom??trica uniendo con l??neas los puntos: A, C, E, G, I.',
                            'Crear un bol??grafo de color verde bosque (ForestGreen).',
                            'Graficar el segundo pent??gono regular grande de la figura geom??trica uniendo con l??neas los puntos: B, D, F, H, J.',
                            'Crear un bol??grafo de color azul violeta (BlueViolet).',
                            'Graficar estrellas de 5 puntas uniendo el punto A con D, E, F, G, H.',
                            'Graficar estrellas de 5 puntas uniendo el punto B con E, F, G, H, I.',
                            'Graficar estrellas de 5 puntas uniendo el punto C con F, G, H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto D con G, H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto E con H, I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto F con I, J.',
                            'Graficar estrellas de 5 puntas uniendo el punto G con J.'                         ]
                    },
                    {
                        titulo:'1.3.4. Algoritmo de la Funci??n CalculateIntersectionPoint()',
                        pasosFormulas:[
                            'Calcular el valor de la pendiente $m_1$.',
                            'Calcular el valor de la pendiente $m_2$.',
                            'Si el valor de la resta entre las dos pendientes es diferente de cero, entonces:',
                            '.1. Calcular el valor de ???x??? del punto de intersecci??n aplicando el Teorema 1.',
                            '.2. Calcular el valor de ???y??? del punto de intersecci??n aplicando el Teorema 1.'                      
                        ]
                    },
                    {
                        titulo:'1.3.5. Algoritmo de la Funci??n CalculateVertexFivePointedBigStar()',
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
                        titulo:'1.3.6. Algoritmo de la Funci??n PlotFivePointedBigStar()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                            'Llamada a la funci??n CalculateVertexBigDecagon.',
                            'Llamada a la funci??n CalculateVertexFivePointedBigStar.',
                            'Actualizar el valor del vertice \'P\' con lo que tiene el v??rtice \'P\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'T\' con lo que tiene el v??rtice \'T\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'Q\' con lo que tiene el v??rtice \'Q\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'S\' con lo que tiene el v??rtice \'S\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice \'R\' con lo que tiene el v??rtice \'R\' multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_1$ con lo que tiene el v??rtice $P_1$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_2$ con lo que tiene el v??rtice $P_2$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_3$ con lo que tiene el v??rtice $P_3$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_4$ con lo que tiene el v??rtice $P_4$ multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_5$ con lo que tiene el v??rtice $P_5$ multiplicado por un factor de escalamiento.',
                            'Crear un bol??grafo de color verde azul obscuro (DarkBlue).',
                            'Graficar la estrella grande de 5 puntas, uniendo con l??neas los puntos: $P, P_2, Q, P_3, R, P_4, S, P_5,T, P_1$.'
                        ]
                    },
                    {
                        titulo:'1.3.7. Algoritmo de la Funci??n CalculateVertexFivePointedSmallStar()',
                        pasosFormulas:[
                            'Asignar a la coordenada ???x??? del punto P el valor de la coordenada ???x??? del punto O.',
                            'Asignar a la coordenada ???y??? del punto P el valor de la coordenada ???y??? del punto T.',
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
                        titulo:'1.3.8. Algoritmo de la Funci??n PlotFivePointedSmallStar()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                            'Llamada a la funci??n CalculateVertexBigDecagon.',
                            'Llamada a la funci??n CalculateVertexFivePointedBigStar.',
                            'Llamada a la funci??n CalculateVertexFivePointedSmallStar.',
                            'Actualizar el valor del vertice P??? con lo que tiene el v??rtice P??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice T??? con lo que tiene el v??rtice T??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice Q??? con lo que tiene el v??rtice Q??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice S??? con lo que tiene el v??rtice S??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice R??? con lo que tiene el v??rtice R??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_6$ con lo que tiene el v??rtice P6 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_7$ con lo que tiene el v??rtice P7 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_8$ con lo que tiene el v??rtice P8 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_9$ con lo que tiene el v??rtice P9 multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice $P_{10}$ con lo que tiene el v??rtice P10 multiplicado por un factor de escalamiento.',
                            'Crear una brocha s??lida de color azur (Azure).',
                            'Crear un arreglo de puntos de tipo Point con los v??rtices:$P???, P_7, Q???, P_8, R???, P_9, S???, P_{10}, T???, P_6, P???$.',
                            'Graficar un pol??gono estrellado de cinco puntas relleno con la brocha y el arreglo de puntos del paso anterior.'
                        ]
                    },
                    {
                        titulo:'1.3.9. Algoritmo de la Funci??n CalculateVertexSmallDodecagon()',
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
                        titulo:'1.3.10. Algoritmo de la Funci??n PlotSmallDecagon()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.',
                            'Llamada a la funci??n CalculateVertexBigDecagon.',
                            'Llamada a la funci??n CalculateVertexSmallDodecagon.',
                            'Actualizar el valor del vertice P con lo que tiene el v??rtice P multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice Q con lo que tiene el v??rtice Q multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice R con lo que tiene el v??rtice R multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice S con lo que tiene el v??rtice S multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice T con lo que tiene el v??rtice T multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice B??? con lo que tiene el v??rtice B??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice D??? con lo que tiene el v??rtice D??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice F??? con lo que tiene el v??rtice F??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice H??? con lo que tiene el v??rtice H??? multiplicado por un factor de escalamiento.',
                            'Actualizar el valor del vertice J??? con lo que tiene el v??rtice J??? multiplicado por un factor de escalamiento.',
                            'Crear un bol??grafo de color ma??z azul (CornflowerBlue).',
                            'Graficar el dec??gono peque??o de la figura geom??trica uniendo con l??neas los puntos: $P, B???, Q, D???, R, F???, S, H???, T, J???$.'
                        ]
                    },
                    {
                        titulo:'1.3.11. Algoritmo de la Funci??n PlotCircle()',
                        pasosFormulas:[
                            'Asignar al objeto graph la funcionalidad de crear gr??ficos del PictureBox llamado picCanvas.', 
                            'Crear un bol??grafo de color gris (Gray).',
                            'Llamada a la funci??n CalculateVertexBigDecagon.',
                            'Asignar a la variable diameter el valor de la Ec. (15).',
                            'Graficar el c??rculo circumscrito al dec??gono de la figura geom??trica utilizando el objeto graph con la funci??n DrawEllipse y el di??metro del c??rculo.'
                        ]
                    }
                ]
             },
             D:{
                subtitulo:'D)	C??digo de la Aplicaci??n',
                listaCodigo:[
                    {
                        problema:'La implementaci??n de la clase CTenPointedStarPolygon, se presenta a continuaci??n en la Tabla 1.3.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                        tablaN:'Tabla 1.3.1. ',
                        tablaDescrip:'C??digo de la clase CTenPointedStarPolygon del programa.',
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

                                // Lado del dec??gono.
                                private float side;
                                // Segmentos del dec??gono.
                                private float a, b, c, d, e;
                                // ??ngulos del dec??gono.
                                private float angle1, angle2, alpha;
                                // Objeto que activa el modo gr??fico.
                                private Graphics graph;
                                // Objeto bol??grafo para dibujar en un lienzo.
                                private Pen pen;
                                // Constante scale factor (Zoom In/Zoom Out).
                                private const float SF = 20;
                                // Objeto Punto que representa a los diez v??rtices del 
                                // dec??gono grande.
                                private PointF A, B, C, D, E, F, G, H, I, J;
                                // Objeto Punto que representa a los v??rtices de la estrella 
                                // grande de cinco puntas.
                                private PointF P, Q, R, S, T, O;
                                private PointF P1, P2, P3, P4, P5;
                                // Objeto Punto que representa a los v??rtices de la estrella 
                                // peque??a de cinco puntas.
                                private PointF Bp, Dp, Fp, Hp, Jp;
                                private PointF P6, P7, P8, P9, P10;
                                // Objeto Punto que representa a cinco de los diez v??rtices 
                                // del dec??gono peque??o.
                                private PointF Pp, Qp, Rp, Sp, Tp;

                                // Funciones miembro - M??todos.

                                // Constructor sin par??metros.
                                public CTenPointedStarPolygon()
                                {
                                    side = 0.0f;
                                }

                                // Funci??n que lee el lado del dec??gono.
                                public void ReadData(TextBox txtSideSide)
                                {            
                                    try
                                    {
                                        side = float.Parse(txtSideSide.Text);
                                    }
                                    catch
                                    {
                                        MessageBox.Show("Ingreso no v??lido...");
                                    }
                                }

                                // Funci??n que inicializa los datos y controles de la figura.
                                public void InitializeData(TextBox txtSide,
                                                        PictureBox picCanvas)
                                {
                                    txtSide.Text = ""; txtSide.Focus();
                                    side = 0.0f; picCanvas.Refresh();
                                }

                                // Funci??n que calcula los valores de los diez v??rtices del 
                                // dec??gono grande.
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

                                // Funci??n que grafica:
                                // a) Un dec??gono grande a base de diez v??rtices
                                // y l??neas de color azul obscuro (DarkBlue).
                                // b) Un primer pent??gono regular grande de color 
                                // verde mar claro (LightSeaGreen).
                                // c) Un segundo pent??gono regular grande de color
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

                                // Funci??n que calcula el punto de intersecci??n entre dos rectas
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

                                // Funci??n que calcula los valores de los diez v??rtices de 
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

                                // Funci??n que grafica una estrella grande de cinco puntas 
                                // con un l??neas de color azul obscuro (DarkBlue).
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

                                // Funci??n que calcula los valores de los diez v??rtices de 
                                // la estrella pque??a de cinco puntas.
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

                                // Funci??n que grafica una estrella peque??a de cinco puntas 
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

                                // Funci??n que calcula los valores de los diez v??rtices del 
                                // dec??gono peque??o.
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

                                // Funci??n que grafica un dec??gono peque??o a base de diez
                                // v??rtices y l??neas de color azul ma??z azul (CornflowerBlue).
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

                                // Funci??n que grafica el c??rculo circumscrito al dec??gono grande
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

                                // Funci??n que cierra un formulario.
                                public void CloseForm(Form ObjForm)
                                {
                                    ObjForm.Close();
                                }
                            }
                        }
                        `
                    },
                    {
                        problema:'La implementaci??n de la clase frmTenPointedStarPolygon, se presenta a continuaci??n en la Tabla 1.3.2, que es la clase que representa a la interfaz gr??fica de usuario de la figura geom??trica plantada en este pracnique.',
                        tablaN:'Tabla 1.3.2. ',
                        tablaDescrip:'C??digo de la clase frmTenPointedStarPolygon del programa.',
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
                                // Definici??n de un objeto de tipo CTenPointedStarPolygon.
                                CTenPointedStarPolygon ObjTenPointedStarPolygon = new CTenPointedStarPolygon();
                                
                                public frmTenPointedStarPolygon()
                                {
                                    InitializeComponent();
                                }

                                private void frmTenPointedStarPolygon_Load(object sender, EventArgs e)
                                {
                                    // Inicializaci??n de los datos y controles.
                                    // Llamada a la funci??n InitializeData.
                                    ObjTenPointedStarPolygon.InitializeData(txtSide, picCanvas);
                                }

                                private void btnCalculate_Click(object sender, EventArgs e)
                                {
                                    // Lectura de datos.
                                    // Llamada a la funci??n ReadData.
                                    ObjTenPointedStarPolygon.ReadData(txtSide);
                                    // Gr??fica del c??rculo circumscrito al dec??gono grande.
                                    // Llamada a la funci??n PlotCircle.
                                    ObjTenPointedStarPolygon.PlotCircle(picCanvas);
                                    // Gr??fica del dec??gono grande.
                                    // Llamada a la funci??n PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotBigDecagon(picCanvas);
                                    // Gr??fica de la estrella grande de cinco puntas.
                                    // Llamada a la funci??n PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotFivePointedBigStar(picCanvas);
                                    // Gr??fica de la estrella peque??a de cinco puntas.
                                    // Llamada a la funci??n PlotBigDecagon.
                                    ObjTenPointedStarPolygon.PlotFivePointedSmallStar(picCanvas);
                                    // Gr??fica del dec??gono peque??o.
                                    // Llamada a la funci??n PlotSmallDecagon.
                                    ObjTenPointedStarPolygon.PlotSmallDecagon(picCanvas);
                                }

                                private void btnReset_Click(object sender, EventArgs e)
                                {
                                    // Inicializaci??n de los datos y controles.
                                    // Llamada a la funci??n InitializeData.
                                    ObjTenPointedStarPolygon.InitializeData(txtSide, picCanvas);
                                }

                                private void btnExit_Click(object sender, EventArgs e)
                                {
                                    // Cierre de un formulario.
                                    // Llamada a la funci??n CloseForm.
                                    ObjTenPointedStarPolygon.CloseForm(this);
                                }
                            }
                        }
                        `
                    } 
                ]
            },
            E:{
                subtitulo:'E)	Pruebas de la Aplicaci??n',
                problema:'A continuaci??n, en la Figura 1.3.4, se muestra un ejemplo de la corrida del programa:',
                fotoPath:'./assets/images/Capitulos/I/media/image295.png',
                fotoN:'Figura 1.3.4 ',
                fotoDescrip:' Corrida del programa'
             }
        }
    ];

    this.casosPropuesto=[
        {label: 'Caso Propuesto 1.1 ', tituloN:'Caso de Estudio 1.1: ',titulo:'Interfaz Gr??fica del Juego del Tetris.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar la interfaz del Juego de Tetris, como se muestra en la Figura 1.1.1. El juego consiste en jugar con diferentes formas, cada una compuesta decuatro cuadrados. El ??rea principal (rect??ngulo grande) debe tener un tama??o de 10x20 cuadrados (es decir, 10 cuadrados de ancho y 20 cuadrados de alto). El peque??o rect??ngulo en la derecha muestra la ???siguiente forma??? que pronto aparecer?? en el ??rea principal (En el ejemplo aparece una figura en ???L??? de color roja). Para mayor informaci??n del juego del Tetris, se puede consultar en el siguiente enlace en la Web: http://en.wikipedia.org/wiki/Tetris.',tareaDescrip:'Las tareas de este proyecto incluyen:',tareas:[{tarea:'???	Dibujar todo lo que se muestra en esta figura, como por ejemplo la posici??n de cada componente y el rect??ngulo mayor que contiene al resto de figuras.'},{tarea:'???	Si el cursor del mouse se mueve dentro del ??rea principal, aparecer?? el mensaje de ???PAUSA??? (con una fuente grande); y si el cursor se mueve hacia afuera del ??rea, desaparecer?? el mensaje de ???PAUSA???.'},{tarea:'???	El cambio de la dimensi??n de la ventana solo cambiar?? posiblemente el tama??o, pero no la posici??n relativa y la relaci??n de aspecto de cualquier componente.'},{tarea:'???	Si se presiona el bot??n ???SALIR???, el programa termina y se cierra (esto no deber??a ser la salida del men?? desplegable est??ndar de la ventana).'}],fotoPath:'./assets/images/Capitulos/I/media/image296.png',fotoN:'Figura 1.1.1 ',fotoDescrip:'Juego del Tetris. (Image tomada de: XYZ).'},
        {label: 'Caso Propuesto 1.2', tituloN:'Caso de Estudio 1.2: ',titulo:'Panal de Abejas.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar un panal de abejas, como se muestra en la Figura 1.2.1. Para dibujar esta figura se debe leer el valor del lado de un hex??gono como, por ejemplo: lado igual a 2. Se recomienda encerrar la figura dentro de un rect??ngulo y realizar los c??lculos de los segmentos que encierran a la figura para poder graficarla.',fotoPath:'./assets/images/Capitulos/I/media/image297.png',fotoN:'Figura 1.2.1 ',fotoDescrip:'Panal de Abejas. (Imagen tomada de Klipartz: https://www.klipartz.com/es/sticker-png-tigsh)'},
        {label: 'Caso Propuesto 1.3', tituloN:'Caso de Estudio 1.3: ',titulo:'Gema de 10 Lados y Pol??gonos Estrellados de 10 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un dec??gono, dibujar la figura geom??trica correspondiente a una gema y los diferentes pol??gonos estrellados de 10 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geom??tricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image298.png',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y pol??gonos estrellados de 10 puntas.'}
    ];

    this.praqniquePropuesto=[
        {label: 'Pracnique Propuesto 1.1', tituloN:'Pracnique 1.1: ',titulo:'Pol??gonos Estrellados de 16 y 8 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un pol??gono regular de 16 lados, dibujar la figura geom??trica correspondiente y los diferentes pol??gonos estrellados de 8 puntas, tal y como se muestra en la figura 1.1.1. Se debe considerar que las figuras geom??tricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image299.jpg',fotoN:'Figura 1.1.1 ',fotoDescrip:'Pol??gonos estrellados de 16 y 8 puntas.'},
        {label: 'Pracnique Propuesto 1.2', tituloN:'Pracnique 1.2: ',titulo:'Pent??gonos y Pol??gonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un pent??gono, dibujar la figura geom??trica correspondiente y los diferentes pol??gonos estrellados de 5 puntas, tal y como se muestra en la figura 1.2.1. Se debe considerar que las figuras geom??tricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image300.jpg',fotoN:'Figura 1.2.1 ',fotoDescrip:'Pent??gonos y pol??gonos estrellados de 5 puntas.'},
        {label: 'Pracnique Propuesto 1.3', tituloN:'Pracnique 1.3: ',titulo:'Gema de 10 Lados y Pol??gonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un dec??gono, dibujar la figura geom??trica correspondiente a una gema y los diferentes pol??gonos estrellados de 5 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geom??tricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image301.jpg',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y pol??gonos estrellados de 5 puntas.'}
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


