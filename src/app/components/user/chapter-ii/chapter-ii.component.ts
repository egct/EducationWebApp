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
  selector: 'app-chapter-ii',
  templateUrl: './chapter-ii.component.html',
  styleUrls: ['./chapter-ii.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChapterIIComponent implements OnInit {
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
  num_capitulo = 2;

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
        Point O;
        O.X = xCenter; O.X = yCenter;
        `,
        f2:
        `
        PointF C;
        C.X = b * (float)Math.Cos(angleA);
        C.Y = b * (float)Math.Sin(angleA);
        `,
        f3:
        `
        // Función que inicializa los valores del centro del lienzo o canvas. 
        public void InitializeData(PictureBox picCanvas)
        {
            d = new Rectangle();
            d.X = picCanvas.Width;
            d.Y = picCanvas.Height;

            maxX = d.X - 1; maxY = d.Y - 1;
            xCenter = maxX / 2; yCenter = maxY / 2;            
        }
        `,
        formuA: ['$x^´=x+x_T\\Rightarrow(1)$',
                '$y^´=y+y_T\\Rightarrow(2)$'],      
        formuB: ['$x^´=x*SF+x_T\\Rightarrow(3)$',
                '$y^´=(-1)y*SF+y_T\\Rightarrow(4)$'],
        vectores2D:[
        {
          numero:'3.1.2.1',
          parrafo:[
            'Concepto de Vector: Un vector es un ente matemático que tiene módulo (magnitud), dirección y sentido.'
          ],
          formulas:[]
        },
        {
          numero:'3.1.2.2',
          parrafo:[
            'Vector en función de sus componentes rectangulares y unitarios:'
          ],
          formulas:[
            '$(1)V_x=V_x i$',
            '$(2)V_y=V_y j$',
            '$(3)\\overrightarrow{V}=(V_x,V_y)$',
            '$(4)\\overrightarrow{V}=V_x+V_y$',
            '$(5)\\overrightarrow{V}=(V_x i,V_y j)$',
            '$(6)\\overrightarrow{V}=V_x i+V_y j$'
          ]
        },
        {
          numero:'3.1.2.3',
          parrafo:[
            'Componentes escalares de un Vector V:',
          ],
          formulas:[
            '$(7)V_x=V\\cos(θ)$',
            '$(8)V_x=V\\sin(θ)$',
            '$(9)\\overrightarrow{V}=(V\\cos(θ),V\\sin(θ))$',
            '$(10)\\overrightarrow{V}=V\\cos(θ)+ V\\sin(θ)$',
            '$(11)\\overrightarrow{V}=(V\\cos(θ)i,V\\sin(θ)j)$',
            '$(12)\\overrightarrow{V}=V\\cos(θ)i+ V\\sin(θ)j$'
          ]
        },
        {
          numero:'3.1.2.4',
          parrafo:[
            'Módulo o Magnitud de un Vector:'
          ],
          formulas:[
            '$(13)|\\overrightarrow{V}|=V=\\sqrt{V_{x}^{2}+V_{y}^{2}}$'
          ]
        },
        {
          numero:'3.1.2.5',
          parrafo:[
            'Ángulo que define la dirección de un Vector:'
          ],
          formulas:[
            '$(14)\\tan(θ)=\\frac{V_y}{V_x}$',
            '$(15)θ=\\arctan(\\frac{V_y}{V_x})$',
            '$(16)θ=\\tan^{-1}(\\frac{V_y}{V_x})$',
          ]
        },
        {
          numero:'3.1.2.6',
          parrafo:[
            'Cosenos Directores: Ángulos con respecto a los ejes coordenados.'
          ],
          formulas:[
            '$(17)\\cos(θ_x)=\\frac{V_x}{V}$',
            '$(18)\\cos(θ_y)=\\frac{V_y}{V}$',
            'Identidad Trigonométrica',
            '$(19)\\cos^2(θ_x)+\\cos^2(θ_y)=1$',
          ]
        },
        {
          numero:'3.1.2.7',
          parrafo:[
            'Vector en función de sus cosenos directores:'
          ],
          formulas:[
            '$(20)\\overrightarrow{V}=[\\cos(θ_x),\\cos(θ_y)]$',
            '$(21)\\overrightarrow{V}=[\\cos(θ_x)i+\\cos(θ_y)j]$'
          ]
        },
        {
          numero:'3.1.2.8',
          parrafo:[
            'Vector Unitario de un Vector o Vector Normalizado'
          ],
          formulas:[
            '$(22)\\overrightarrow{u}_V=\\frac{\\overrightarrow{V}}{|\\overrightarrow{V}|} $',
            '$(23)λ=\\overrightarrow{V}_n=\\overrightarrow{u}_V$',
            '$(24)λ=\\frac{\\overrightarrow{V}}{V}$',
            '$(25)\\overrightarrow{V}_n=\\frac{\\overrightarrow{V}}{|\\overrightarrow{V}|} $',
            '$(26)\\overrightarrow{V}_n=(\\frac{V_x}{|\\overrightarrow{V}|} ,\\frac{V_y}{|\\overrightarrow{V}|})$',
            '$(27)\\overrightarrow{V}=|\\overrightarrow{V}| \\overrightarrow{u}_V$',
            '$(28)\\overrightarrow{V}=Vλ$',
            '$(29)\\overrightarrow{V}=|\\overrightarrow{V}| \\overrightarrow{V}_n$' 
          ]
        },
        {
          numero:'3.1.2.9',
          parrafo:[
            'Fuerza Definida en Términos de su Magnitud y Dos Puntos sobre su Línea de Acción:'
          ],
          formulas:[
            '$(30)\\overrightarrow{F}=Fλ$',
            '$(31)\\overrightarrow{F}=\\frac{F}{d}(d_x i+d_y j)$',
            '$(32)\\overrightarrow{F}=F\\overrightarrow{u}_F$',
            '$(33)\\overrightarrow{F}=\\frac{F}{d}(d_x,d_y )$',
            '$(34)F_x=\\frac{Fdx}{d}$',
            '$(35)F_y=\\frac{Fdy}{d}$',
            '$(36)d=\\sqrt{{dx}^2+{dy}^2}$',
            '$(37)\\cos(θ_x)=\\frac{dx}{d}$',
            '$(38)\\cos(θ_y)=\\frac{dy}{d}$',
            '$(39)\\cos(θ_x)=\\frac{F_x}{F}$',
            '$(40)\\cos(θ_y)=\\frac{F_y}{F}$'
          ]
        },
        {
          numero:'3.1.2.10',
          parrafo:[
            'Aplicaciones de Trigonometría Plana. Dado un triángulo ABC cualquiera:'
          ],
          formulas:[
            'Ley de Cosenos',
            '$(41)a^2=b^2+c^2-(2bc)\\cos(α)$',
            '$(42)b^2=a^2+c^2-(2ac)\\cos(β)$',
            '$(43)c^2=a^2+b^2-(2ab)\\cos(θ)$',
            'Ley de Senos:',
            '$(44)\\frac{a}{\\sin(α)} =\\frac{b}{\\sin(β)} =\\frac{c}{\\sin(θ)} $',
            '$(45)\\frac{a}{\\sin(A)} =\\frac{b}{\\sin(B)} =\\frac{c}{\\sin(C)} $',
            'Donde:$α=\\widehat{A} ; β=\\widehat{B} ; θ=\\widehat{C} ̂$'
          ]
        },
        {
          numero:'3.1.2.11',
          parrafo:[
            'Suma de Vectores. Solución Gráfica y Trigonométrica.'
          ],
          formulas:[
            '11.1.	Método del Paralelogramo:',
            '$(46)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}$',
            '$(47)C^2=A^2+B^2-(2AB)\\cos(θ)$',
            '11.2.	Método del Triángulo:',
            '$(48)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}$',
            '$(49)C^2=A^2+B^2-(2AB)\\cos(θ)$',
          ]
        },
        {
          numero:'3.1.2.12',
          parrafo:[
            'Resta de Vectores. Solución Gráfica y Trigonométrica.'
          ],
          formulas:[
            '11.3.	Método del Paralelogramo:',
            '$(50)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}$',
            '$(51)C^2=A^2+B^2-(2AB)\\cos(θ)$',
            '11.4.	Método del Triángulo:',
            '$(52)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}$',
            '$(53)C^2=A^2+B^2-(2AB)\\cos(θ)$',
          ]
        },
        {
          numero:'3.1.2.13',
          parrafo:[
            'Suma de Vectores utilizando una Solución Vectorial:'
          ],
          formulas:[
            '$(54)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}=(A_x,B_x )+(A_y,B_y )$',
            '$(55)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}=(A_x+B_x )i+(A_y+B_y )j$',
            '$(56)\\overrightarrow{R}=\\overrightarrow{P}+\\overrightarrow{Q}=(P_x,Q_x )+(P_y,Q_y )$',
            '$(57)\\overrightarrow{R}=\\overrightarrow{P}+\\overrightarrow{Q}=(P_x+Q_x )i+(P_y+Q_y )j$'
          ]
        },
        {
          numero:'3.1.2.14',
          parrafo:[
            'Resta de Vectores. Solución Vectorial:'
          ],
          formulas:[
            '$(58)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}=(A_x,B_x )-(A_y,B_y )$',
            '$(59)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}=(A_x-B_x )i+(A_y-B_y )j$',
            '$(60)\\overrightarrow{R}=\\overrightarrow{P}-\\overrightarrow{Q}=(P_x,Q_x )-(P_y,Q_y )$',
            '$(61)\\overrightarrow{R}=\\overrightarrow{P}-\\overrightarrow{Q}=(P_x-Q_x )i+(P_y-Q_y )j$'
          ]
        },
        {
          numero:'3.1.2.15',
          parrafo:[
            'En la representación gráfica de la Suma y de la Resta de dos Vectores, se forman dos paralelogramos unidos entre sí, '
          ],
          formulas:[
            '	donde el Vector $\\overrightarrow{B}$ es opuesto al Vector $\\overrightarrow{-B}$, que es igual al Vector $\\overrightarrow{D}$'
          ]
        },
        {
          numero:'3.1.2.16',
          parrafo:[
            '3.1.2.16.	Producto Punto a partir de las componentes de dos Vectores'
          ],
          formulas:[
            '(Producto Escalar $R^2$ en $2D$):',
            '$(62)\\overrightarrow{A}∙\\overrightarrow{B}=(A_x,A_y )∙(B_x,B_y )$',
            '$(63)\\overrightarrow{A}∙\\overrightarrow{B}=A_x∙B_x+A_y∙B_y$',
            'El resultado del producto punto es un escalar que es un valor real.'
          ]
        },
        {
          numero:'3.1.2.17',
          parrafo:[
            'Producto Punto a partir de los Módulos de dos Vectores y del Ángulo entre ellos:'
          ],
          formulas:[
            '$(64)\\overrightarrow{A}∙\\overrightarrow{B}=|\\overrightarrow{A}||\\overrightarrow{B}|\\cos(θ)$'
          ]
        },
        {
          numero:'3.1.2.18',
          parrafo:[
            'Ángulo entre dos Vectores:'
          ],
          formulas:[
            '$(65)\\cos(θ)=\\frac{(\\overrightarrow{A}∙\\overrightarrow{B})}{|\\overrightarrow{A}||\\overrightarrow{B}|}$',
            '$(66)θ=\\arccos(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}||\\overrightarrow{B}|})$',
            '$(67)θ=\\cos^{-1}(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}||\\overrightarrow{B}|})$',
            'Donde: $0≤θ≤180°(π rad)$'
          ]
        },
        {
          numero:'3.1.2.19',
          parrafo:[
            'Vector Proyección del '
          ],
          formulas:[
            'Vector $\\overrightarrow{A}$ sobre el Vector $\\overrightarrow{A}$:',
            '$(68)\\overrightarrow{V}_{A/B}=\\overrightarrow{B}_n (\\overrightarrow{A}∙\\overrightarrow{B}_n )$',
            '$(69)\\overrightarrow{Proy}_\\overrightarrow{A}(\\overrightarrow{B})=(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{\\overrightarrow{A}∙\\overrightarrow{A}})\\overrightarrow{A}$',
            '$(70)\\overrightarrow{Proy}_\\overrightarrow{A}(\\overrightarrow{B})=(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{A^2})\\overrightarrow{A}$'
          ]
        },
        {
          numero:'3.1.2.20',
          parrafo:[
            'Vector Perpendicular o Vector Ortogonal a otro Vector:'
          ],
          formulas:[
            '$(71)\\overrightarrow{V}_P=\\overrightarrow{A}-\\overrightarrow{V}_{A/B}$',
            '$(72)\\overrightarrow{Perp}=\\overrightarrow{A}-\\overrightarrow{Proy}_\\overrightarrow{A} (\\overrightarrow{B} )$'
          ]
        }],
        vectores3D:[
          {
            numero:'3.1.3.1.',
            parrafo:[
              'Concepto de Vector: Un vector es un ente matemático que tiene módulo (magnitud), dirección y sentido.'
            ],
            formulas:[]
          },
          {
            numero:'3.1.3.2.',
            parrafo:[
              'Vector en función de sus componentes rectangulares y unitarios:'
            ],
            formulas:[
              '$(1)V_x=V_x i$',
              '$(2)V_y=V_y j$',
              '$(3)V_z=V_z k$',
              '$(4)\\overrightarrow{V}=(V_x,V_y,V_z )$',
              '$(5)\\overrightarrow{V}=V_x+V_y+V_z $',
              '$(6)\\overrightarrow{V}=(V_x i,V_y j,V_z k)$',
              '$(7)\\overrightarrow{V}=V_x i + V_y j + V_z k$'
            ]
          },
          {
            numero:'3.1.3.3.',
            parrafo:[
              'Componentes escalares de un '
            ],
            formulas:[
              'Vector $\\overrightarrow{V}$:',
              '$(8)V_y=V\\cos(θ_y )$',
              '$(9)V_h=V\\sin(θ_y )$',
              '$(10)V_x=V_h \\cos(φ)$',
              '$(11)V_x=V\\sin(θ_y )cos(φ)$',
              '$(12)V_z=V_h \\sin(φ)$',
              '$(13)V_z=V\\sin(θ_y )\\sin(φ)$',
              '$(14)\\overrightarrow{V}=(V\\sin(θ_y )\\cos(φ),V\\cos(θ_y ),V\\sin(θ_y )\\sin(φ))$',
              '$(15)\\overrightarrow{V}=(V\\sin(θ_y )\\cos(φ)i,V\\cos(θ_y )j,V\\sin(θ_y )\\sin(φ)k)$',
              '$(16)\\overrightarrow{V}=(V\\sin(θ_y )\\cos(φ)+V\\cos(θ_y )+V\\sin(θ_y )\\sin(φ))$',
              '$(17)\\overrightarrow{V}=(V\\sin(θ_y )\\cos(φ)i+V\\cos(θ_y )j+V\\sin(θ_y )\\sin(φ)k)$'              
            ]
          },
          {
            numero:'3.1.3.4.	',
            parrafo:[
              'Módulo o Magnitud de un Vector:'
            ],
            formulas:[
              '$(18)|\\overrightarrow{V}|=V=\\sqrt{V_x^2+V_y^2+V_z^2}$'
            ]
          },
          {
            numero:'3.1.3.5.	',
            parrafo:[
              'Ángulo que define la dirección de un Vector:'
            ],
            formulas:[
              '$(19)\\tan(θ)=\\frac{V_y}{V_x }$',
              '$(20)θ=\\arctan⁡(\\frac{V_y}{V_x} )$',
              '$(21)θ=\\tan^{-1}⁡(\\frac{V_y}{V_x})$'
            ]
          },
          {
            numero:'3.1.3.6.',
            parrafo:[
              'Cosenos Directores: Ángulos con respecto a los ejes coordenados.'
            ],
            formulas:[
              '$(22)\\cos(θ_x )=\\frac{V_x}{V}$',
              '$(23)\\cos(θ_y )=\\frac{V_y}{V}$',
              '$(24)\\cos(θ_z )=\\frac{V_z}{V}$',
              'Identidad Trigonométrica',
              '$(25)\\cos^2(θ_x )+\\cos^2(θ_y )+\\cos^2(θ_z )=1$'
            ]
          },
          {
            numero:'3.1.3.7.	',
            parrafo:[
              'Vector en función de sus cosenos directores:'
            ],
            formulas:[
              '$(26)\\overrightarrow{V}=[cos(θ_x ),cos(θ_y ),cos(θ_z )]$',
              '$(27)\\overrightarrow{V}=[cos(θ_x )i+cos(θ_y )j+cos(θ_z )k]$'
            ]
          },
          {
            numero:'3.1.3.8.	',
            parrafo:[
              'Vector Unitario de un Vector o Vector Normalizado:'
            ],
            formulas:[
              '$(28)\\overrightarrow{u}_V=\\frac{\\overrightarrow{V}}{|\\overrightarrow{V}|}$',
              '$(29)λ=\\overrightarrow{V}_n=\\overrightarrow{u}_V$',
              '$(30)λ=\\frac{\\overrightarrow{V}}{V}$',
              '$(31)\\overrightarrow{V}_n=\\frac{\\overrightarrow{V}}{|\\overrightarrow{V} |} $',
              '$(32)\\overrightarrow{V}_n=(\\frac{V_x}{|\\overrightarrow{V}|} ,\\frac{V_y}{|\\overrightarrow{V}|} ,\\frac{V_z}{|\\overrightarrow{V}|} )$',
              '$(33)\\overrightarrow{V}=|\\overrightarrow{V}| \\overrightarrow{u}_V$',
              '$(34)\\overrightarrow{V}=Vλ$',
              '$(35)\\overrightarrow{V}=|\\overrightarrow{V}| \\overrightarrow{V}_n$',
            ]
          },
          {
            numero:'3.1.3.9.	',
            parrafo:[
              'Fuerza Definida en Términos de su Magnitud y Dos Puntos sobre su Línea de Acción:'
            ],
            formulas:[
              '$(36)\\overrightarrow{F}=Fλ$',
              '$(37)\\overrightarrow{F}=\\frac{F}{d}(d_x i+d_y j+d_z k)$',
              '$(38)\\overrightarrow{F}=F\\overrightarrow{u}_F$',
              '$(39)\\overrightarrow{F}=\\frac{F}{d} (d_x,d_y,d_z )$',
              '$(40)F_x=\\frac{Fdx}{d}$',
              '$(41)F_y=\\frac{Fdy}{d}$',
              '$(42)F_z=\\frac{Fdz}{d}$',
              '$(43)d=\\sqrt{dx^2+dy^2+dz^2}$',
              '$(44)\\cos(θ_x )=\\frac{dx}{d}$',
              '$(45)\\cos(θ_y )=\\frac{dy}{d}$',
              '$(46)\\cos(θ_z )=\\frac{dz}{d}$',
              '$(47)\\cos(θ_x )=\\frac{F_x}{F}$',
              '$(48)\\cos(θ_y )=\\frac{F_y}{F}$',
              '$(49)\\cos(θ_z )=\\frac{F_z}{F}$',
            ]
          },
          {
            numero:'3.1.3.10.	',
            parrafo:[
              'Suma de Vectores. Solución Vectorial:'
            ],
            formulas:[
              '$(50)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}=(A_x,B_x )+(A_y,B_y )+(A_z,B_z )$',
              '$(51)\\overrightarrow{C}=\\overrightarrow{A}+\\overrightarrow{B}=(A_x+B_x )i+(A_y+B_y )j+(A_z+B_z )k$',
              '$(52)\\overrightarrow{R}=\\overrightarrow{P}+\\overrightarrow{Q}=(P_x,Q_x )+(P_y,Q_y )+(P_z,Q_z )$',
              '$(53)\\overrightarrow{R}=\\overrightarrow{P}+\\overrightarrow{Q}=(P_x+Q_x )i+(P_y+Q_y )j+(P_z+Q_z )k$'
            ]
          },
          {
            numero:'3.1.3.11.',
            parrafo:[
              '	Resta de Vectores. Solución Vectorial:'
            ],
            formulas:[
              '$(54)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}=(A_x,B_x )-(A_y,B_y )-(A_z,B_z )$',
              '$(55)\\overrightarrow{C}=\\overrightarrow{A}-\\overrightarrow{B}=(A_x-B_x )i+(A_y-B_y )j+(A_z-B_z )k$',
              '$(56)\\overrightarrow{R}=\\overrightarrow{P}-\\overrightarrow{Q}=(P_x,Q_x )-(P_y,Q_y )-(P_z,Q_z )$',
              '$(57)\\overrightarrow{R}=\\overrightarrow{P}-\\overrightarrow{Q}=(P_x-Q_x )i+(P_y-Q_y )j+(P_z-Q_z )k$'
            ]
          },
          {
            numero:'3.1.3.12.	',
            parrafo:[
              'En la representación gráfica de la Suma y de la Resta de dos Vectores, se forman dos paralelogramos unidos entre sí, '
            ],
            formulas:[
              'donde el Vector $\\overrightarrow{B}$ es opuesto al Vector $\\overrightarrow{-B}$, que es igual al Vector $\\overrightarrow{D}$.'
            ]
          },
          {
            numero:'3.1.3.13.	',
            parrafo:[
              'Producto Punto a partir de las componentes de dos Vectores '
            ],
            formulas:[
              '(Producto Escalar $R^2$ en $2D$):',
              '$(58)\\overrightarrow{A}∙\\overrightarrow{B}=(A_x,A_y )∙(B_x,B_y )∙(B_z,B_z )$',
              '$(59)\\overrightarrow{A}∙\\overrightarrow{B}=A_x∙B_x+A_y∙B_y+A_z∙B_z$',
              'El resultado del producto punto es un escalar que es un valor real.'
            ]
          },
          {
            numero:'3.1.3.14.	',
            parrafo:[
              'Producto Punto a partir de los Módulos de dos Vectores y del Ángulo entre ellos:'
            ],
            formulas:[
              '$(60)\\overrightarrow{A}∙\\overrightarrow{B}=|\\overrightarrow{A}||\\overrightarrow{B}|\\cos(θ)$'
            ]
          },
          {
            numero:'3.1.3.15.	',
            parrafo:[
              'Ángulo entre dos Vectores:'
            ],
            formulas:[
              '$(61)\\cos(θ)=\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}||\\overrightarrow{B}|} $',
              '$(62)θ=\\arccos(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}||\\overrightarrow{B}|})$',
              '$(63)θ=\\cos^{-1}(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}||\\overrightarrow{B}|})$',
              'Donde: $0≤θ≤180°(π rad)$'
            ]
          },
          {
            numero:'3.1.3.16.	',
            parrafo:[
              'Producto Cruz a partir de las componentes de dos Vectores '
            ],
            formulas:[
              '(Producto Vectorial $R^3$ en $3D$):',
              'Sean $U$, $V$ y $W$ tres vectores de $R^3$: ',
              '$(64)U=U_x i+U_y j+U_z k$',
              '$(65)V=V_x i+V_y j+V_z k$',
              '$(66)W=W_x i+W_y j+W_z k$',
              'Donde $W$ es el produto vectorial de $U$ y $V$, definido así:',
              '$(67)W=U×V=(U_y V_z-U_z V_y )i+(U_z V_x-U_x V_z )j+(U_x V_y-U_y V_x )k$',
              'Esto es:',
              '$(68)W_x=U_y V_z-U_z V_y$',
              '$(69)W_y=U_z V_x-U_x V_z$',
              '$(70)W_z=U_x V_y-U_y V_x$',
              'Usando una notación basada en determinantes queda:',
              '$W=U×V=\\begin{bmatrix}i & j & k \\\\ U_x & U_y & U_z \\\\ V_x & V_y & V_z\\end{bmatrix} = \\begin{bmatrix} U_y & U_z \\\\ V_y & V_z\\end{bmatrix}i-\\begin{bmatrix} U_x & U_z \\\\ V_x & V_z\\end{bmatrix}j+\\begin{bmatrix} U_x & U_y \\\\ V_x & V_y\\end{bmatrix}k$',
              'Que da origen a la llamada regla de la Mano Derecha, girando el primer vector hacia el segundo por el ángulo más pequeño. El resultado del producto cruz es un vector que es perpendicular a los otros dos vectores que se multiplican.'
            ]
          },
          {
            numero:'3.1.3.17.	',
            parrafo:[
              'Vector Proyección de '
            ],
            formulas:[
              'Vector $\\overrightarrow{A}$ sobre el Vector $\\overrightarrow{B}$:',
              '$(71)\\overrightarrow{V}_{A/B}=\\overrightarrow{B}_n (\\overrightarrow{A}∙\\overrightarrow{B}_n )$',
              '$(72)\\overrightarrow{Proy}_\\overrightarrow{A}  (\\overrightarrow{B})=(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{\\overrightarrow{A}∙\\overrightarrow{A}}) \\overrightarrow{A}$',
              '$(73)\\overrightarrow{Proy}_\\overrightarrow{A}  (\\overrightarrow{B})=(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{A^2}) \\overrightarrow{A}$',
              '$(74)\\overrightarrow{Proy}_\\overrightarrow{A}  (\\overrightarrow{B})=(\\frac{\\overrightarrow{A}∙\\overrightarrow{B}}{|\\overrightarrow{A}|^2}) \\overrightarrow{A}$'
            ]
          },
          {
            numero:'3.1.3.18.	',
            parrafo:[
              'Vector Perpendicular o Vector Ortogonal a otro Vector:'
            ],
            formulas:[
              '$(75)\\overrightarrow{V}_P=\\overrightarrow{A}-\\overrightarrow{V}_{A/B}$',
              '$(76)\\overrightarrow{Perp}=\\overrightarrow{A}-\\overrightarrow{Proy}_\\overrightarrow{A} (\\overrightarrow{B})$'
            ]
          }
        ]}
    ];

    this.praqnique=[
        {
          link:'https://drive.google.com/uc?id=1egwN2u9pFA5YksGGot1bBMFel3bpc8I6&export=download',
          label: 'Pracnique 3.1', 
         tituloN:'Pracnique 3.1: ',
         titulo:'Líneas y Puntos Notables de un Triángulo',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar un triángulo cualquiera y sus puntos y líneas notables.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional aplicada, translación lineal, clases y objetos, GUIs.'},
            {titulo:'Nivel de experiencia:',descrip:'Avanzado'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Escribir un programa donde primeramente se grafique un triángulo, se calcule y se imprima el perímetro y su área en función del semi-perímetro, considerando que se debe validar también la existencia de un triángulo. (Ver Figura 3.1.1)',
             fotoPath:'./assets/images/Capitulos/II/media/i1.png',
             fotoN:'Figura 3.1.1. ',
             fotoDescrip:'El Triángulo y sus fórmulas.',
             problema1:'Luego se deben calcular y graficar los siguientes puntos y líneas notables del triángulo:',
             problemalist:[
               'a.	Baricentro y Medianas.',
               'b.	Circuncentro y Mediatrices.',
               'c.	Alturas, Ortocentro y el Triángulo Órtico incluido su Círculo Inscrito.',
               'd.	Bisectrices, Círculo Inscrito, Círculos Exinscritos y el Triángulo que une los centros de los Círculos Exinscritos.',
               'e.	Recta de Euler con dos Medianas, dos Mediatrices y dos Alturas.'
             ]
            },
         B:{
             subtitulo:'B)	Geometría de la Figura',
             pasosB:[
               {
                subtitulo2:'B.1.) Triángulo ABC',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo, encontrar los valores de los vértices en coordenadas rectangulares y graficar las líneas del triángulo, considerando que uno de sus lados se encuentra sobre el eje de las ‘x’ y uno de sus vértices es el origen. (Ver Figura 3.1.2 y 3.1.3). ',
                fotoPath:'./assets/images/Capitulos/II/media/i2.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i3.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $AB$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i4.png',    
                  },
                  {
                    parrafo:'Por lo tanto, las coordenadas del punto $P_1$ y $P_2$ son:',
                    fotoPath:'./assets/images/Capitulos/II/media/i5.png',    
                  },
                  {
                    parrafo:'Para calcular el valor del ángulo $A$, se utilizando la Ley de Cosenos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i6.png',    
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $AC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i7.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $y_3$ donde obtenemos la siguiente ecuación:',
                    fotoPath:'./assets/images/Capitulos/II/media/i8.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $AC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i9.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de $y_3$ de la ecuación (4) en la ecuación (5) y calculamos el valor de $x_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i10.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $x_3$ y luego racionalizamos la expresión:',
                    fotoPath:'./assets/images/Capitulos/II/media/i11.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de $x_3$ de la ecuación (6) en la ecuación (4) y calculamos el valor de $y_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i12.png',    
                  },
                  {
                    parrafo:'Por lo tanto, las coordenadas del punto $P_3$ son:',
                    fotoPath:'./assets/images/Capitulos/II/media/i13.png',    
                  },
                  {
                    parrafo:'Aplicando las siguientes identidades trigonométricas:',
                    fotoPath:'./assets/images/Capitulos/II/media/i14.png',    
                  },
                  {
                    parrafo:'Se simplicifica la ecuación (8) de la siguiente manera:',
                    fotoPath:'./assets/images/Capitulos/II/media/i15.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtiene las coordenadas del punto $P_3$ en función de senos y cosenos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i16.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.2.) Medianas',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo ABC cualquiera, calcular los valores de los vértices de las medianas. (Ver Figura 2.1.4). ',
                fotoPath:'./assets/images/Capitulos/II/media/i17.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i18.png',    
                  },
                  {
                    parrafo:'El baricentro (centroide) de un triángulo G es el punto donde concurren las tres medianas del triángulo. Además, el baricentro es la media aritmética de las coordenadas del triángulo, por lo tanto, sus valores son:',
                    fotoPath:'./assets/images/Capitulos/II/media/i19.png',    
                  },
                  {
                    parrafo:'Las medianas: $m_a$, $m_b$, $m_c$, son los segmentos que unen uno de los vértices del triángulo con el centro del lado opuesto. Cada mediana divide a un lado en dos partes iguales, por lo tanto, utilizamos la fórmula del punto medio para calcular el valor de las coordenadas de las medianas:',
                    fotoPath:'./assets/images/Capitulos/II/media/i20.png',    
                  },
                  {
                    parrafo:'Entonces, las ecuaciones de las coordenadas de cada una de las medianas son:',
                    fotoPath:'./assets/images/Capitulos/II/media/i21.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.3.) Mediatrices',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo ABC cualquiera, calcular los valores de los vértices de las mediatrices. (Ver Figura 2.1.5). ',
                fotoPath:'./assets/images/Capitulos/II/media/i22.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i23.png',    
                  },
                  {
                    parrafo:'El circuncentro de un triángulo P es el punto donde concurren las tres mediatrices del triángulo. Además, el circuncentro es el valor del radio del círculo circunscrito al triángulo, ya que la distancia desde cada uno de los vértices al circuncentro son iguales entre sí:',
                    fotoPath:'./assets/images/Capitulos/II/media/i24.png',    
                  },
                  {
                    parrafo:'Considerando la ecuación (4) se puede calcular el valor del circuncentro $O(x_O,y_O )=P_4 (x_4,y_4)$, de la siguiente manera:'
                  },
                  {
                    parrafo:'1.	Se calcula la distancia $AP$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i25.png',    
                  },
                  {
                    parrafo:'2.	Se calcula la distancia $BP$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i26.png',    
                  },
                  {
                    parrafo:'3.	Se igualan las ecuaciones (5) y (6):',
                    fotoPath:'./assets/images/Capitulos/II/media/i27.png',    
                  },
                  {
                    parrafo:'4.	Se calcula la distancia $CP$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i28.png',    
                  },
                  {
                    parrafo:'5.	Se igualan las ecuaciones (5) y (8):',
                    fotoPath:'./assets/images/Capitulos/II/media/i29.png',    
                  },
                  {
                    parrafo:'6.	Se reemplaza el valor de $x_4$ de la ecuación (7) en la ecuación (9):',
                    fotoPath:'./assets/images/Capitulos/II/media/i30.png',    
                  },
                  {
                    parrafo:'Finalmente se obtiene el valor del circuncentro $O(x_O,y_O )=P_4 (x_4,y_4)$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i31.png',    
                  },
                  {
                    parrafo:'	Para calcular el valor del radio del círculo circunscrito R al triángulo, utilizamos la ecuación (5), donde $P_4 (x_4,y_4 )=O(x_O,y_O )$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i32.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.4.) Alturas',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo ABC cualquiera, calcular los valores de los vértices de las alturas, el triángulo órtico el radio del círculo inscrito al mismo. (Ver Figura 2.1.6). ',
                fotoPath:'./assets/images/Capitulos/II/media/i33.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i34.png',    
                  },
                  {
                    parrafo:'El ortocentro de un triángulo H es el punto donde concurren las tres alturas del triángulo. Además, el ortocentro es el valor del radio del círculo inscrito del triángulo órtico, que se forma uniendo con líneas los vértices de las tres alturas.'
                  },
                  {
                    parrafo:'Calculamos el valor del ángulo A del triángulo, utilizando la Ley de Cosenos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i35.png',    
                  },
                  {
                    parrafo:'Vértice $H_3$'
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $AB$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i36.png',    
                  },
                  {
                    parrafo:'Donde, el valor de la pendiente $CH_3$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i37.png',    
                  },
                  {
                    parrafo:'Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/i38.png',    
                  },
                  {
                    parrafo:'Por lo tanto, el valor del vértice $H_3$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i39.png',    
                  },
                  {
                    parrafo:'Finalmente, la ecuación de la altura ${CH}_3$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i40.png',    
                  },
                  {
                    parrafo:'Vértice $H_2$'
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $AC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i41.png',    
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $BH_2$, que es perpendicular a la pendiente $AC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i42.png',    
                  },
                  {
                    parrafo:'Luego, calculamos la ecuación de la recta $AC$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i43.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de la pendiente $AC$ de la ecuación (7) en la ecuación (9) para obtener la ecuación de la recta $AC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i44.png',    
                  },
                  {
                    parrafo:'Luego, calculamos la ecuación de la recta $BH_2$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i45.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de la pendiente $BH_2$ de la ecuación (8) en la ecuación (11) para obtener la ecuación de la recta $BH_2$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i46.png',    
                  },
                  {
                    parrafo:'Luego igualamos las ecuaciones (9) y (11) para calcular las coordenadas del vértice $H_2$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i47.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de x de la ecuación (13) en la ecuación (10) y calculamos el valor de $y$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i48.png',    
                  },
                  {
                    parrafo:'Aplicando la siguiente identidad trigonométrica:',
                    fotoPath:'./assets/images/Capitulos/II/media/i49.png',    
                  },
                  {
                    parrafo:'Se simplicifica la ecuación (15) de la siguiente manera:',
                    fotoPath:'./assets/images/Capitulos/II/media/i50.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtiene las coordenadas del vértice $H_2$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i51.png',    
                  },
                  {
                    parrafo:'Vértice $H$'
                  },
                  {
                    parrafo:'Reemplazamos el valor de x de la ecuación (6) en la ecuación (12) y calculamos el valor de $y$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i52.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtiene las coordenadas del vértice $H$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i53.png',    
                  },
                  {
                    parrafo:'Vértice $H_1$'
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $BC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i54.png',    
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $AH_1$, que es perpendicular a la pendiente $BC$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i55.png',    
                  },
                  {
                    parrafo:'Calculamos la ecuación de la recta $BC$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i56.png',    
                  },
                  {
                    parrafo:'Calculamos la ecuación de la recta $AH_1$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i57.png',    
                  },
                  {
                    parrafo:'Luego igualamos las ecuaciones (20) y (21) para calcular las coordenadas del vértice $H_1$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i58.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de $x$ de la ecuación (22) en la ecuación (21) y calculamos el valor de $y$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i59.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtiene las coordenadas del vértice $H_1$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i60.png',    
                  },
                  {
                    parrafo:'Triángulo $Órtico$'
                  },
                  {
                    parrafo:'El triángulo órtico es un triángulo que tiene como vértices los pies de las alturas, es decir, las proyecciones de los vértices sobre los lados.'
                  },
                  {
                    parrafo:'Vértice $T_1$'
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $H_2H_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i61.png',    
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente $HT_1$, que es perpendicular a la pendiente $H_2H_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i62.png',    
                  },
                  {
                    parrafo:'Calculamos la ecuación de la recta $H_2H_3$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i63.png',    
                  },
                  {
                    parrafo:'Calculamos la ecuación de la recta $HT_1$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i64.png',    
                  },
                  {
                    parrafo:'Luego igualamos las ecuaciones (27) y (28) para calcular las coordenadas del vértice $T_1$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i65.png',    
                  },
                  {
                    parrafo:'De la ecuación (27) se obtiene que y_(T_1 ) es igual a:',
                    fotoPath:'./assets/images/Capitulos/II/media/i66.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtiene las coordenadas del vértice $T_1$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i67.png',    
                  },
                  {
                    parrafo:'Para calcular el valor del radio $r_O$ del círculo del triángulo órtico, utilizamos la ecuación de la distancia entre el punto $T_1 (x_(T_1 );y_(T_1 ) )$ de la ecuación (17) y el punto $H(x_H;y_H )$ de la ecuación (30):',
                    fotoPath:'./assets/images/Capitulos/II/media/i68.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.5.) Círculo Inscrito y círculos exinscritos a un triángulo',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo, encontrar los valores de los vértices en coordenadas rectangulares y graficar las líneas del triángulo, considerando que uno de sus lados se encuentra sobre el eje de las ‘x’ y uno de sus vértices es el origen. (Ver Figura 3.1.2 y 3.1.3). ',
                fotoPath:'./assets/images/Capitulos/II/media/i69.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i70.png',    
                  },
                  {
                    parrafo:'Las coordenadas cartesianas del incentro a partir de las de los tres vértices del triángulo A, B y C son:',
                    fotoPath:'./assets/images/Capitulos/II/media/i71.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del semiperímetro del triangulo:',
                    fotoPath:'./assets/images/Capitulos/II/media/i72.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del radio $r_a$ del primer círculo exinscrito:',
                    fotoPath:'./assets/images/Capitulos/II/media/i73.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del radio $r_b$ del segundo círculo exinscrito:',
                    fotoPath:'./assets/images/Capitulos/II/media/i74.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del radio $r_c$ del tercer círculo exinscrito:',
                    fotoPath:'./assets/images/Capitulos/II/media/i75.png',    
                  },
                  {
                    parrafo:'Calculamos los valores de los ángulos del triángulo, utilizando las Leyes de Cosenos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i76.png',    
                  },
                  {
                    parrafo:'Calculamos los valores de los ángulos externos del triángulo:',
                    fotoPath:'./assets/images/Capitulos/II/media/i77.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del segmento $LA$ en el triángulo rectángulo $ELA$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i78.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del segmento $BQ$ en el triángulo rectángulo $BQD$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i79.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del segmento $AK$ en el triángulo rectángulo $AKF$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i80.png',    
                  },
                  {
                    parrafo:'Finalmente, obtenemos los vértices D, E y F del triángulo DEF que pasa por los vértices del triángulo ABC y une los radios de los tres círculos exinscritos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i81.png',    
                  },
                  {
                    parrafo:'Para calcular el valor del radio r del círculo inscrito al triángulo, se debe:'
                  },
                  {
                    parrafo:'a.	Calcular las coordenadas del punto de tangencia $T_3$ del círculo inscrito con el lado $AB$ del triángulo: $T_3 (x_(T_3 );y_(T_3 ) )$.'                  },
                  {
                    parrafo:'b.	Como el punto $T_3$ está sobre el lado $AB$ del triángulo, la coordenada $y_(T_3 )$ es igual a cero: $y_(T_3 )=0.$'
                  },
                  {
                    parrafo:'c.	La coordenada $x_(T_3 )$ del punto $T_3$ está a la misma altura que la coordenada $x_I$ del incentro $I$, siendo igual a $x_I: x_(T_3 )=x_I$'
                  },
                  {
                    parrafo:'d.	Por lo tanto, el punto $T_3$ es:',
                    fotoPath:'./assets/images/Capitulos/II/media/i82.png',    
                  },
                  {
                    parrafo:'e.	Luego calculamos la distancia entre el incento $I$ y el punto de tangencia $T_3$, para encontrar el radio $r$ del círculo inscrito al triángulo:',
                    fotoPath:'./assets/images/Capitulos/II/media/i83.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.6.) La Recta de Euler',
                tituloproblema:'Problema:',
                parrafo:'Dados los tres lados de un triángulo ABC cualquiera, calcular los tres puntos notables por donde pasa la recta de Euler y graficarla. (Ver Figura 2.1.8). ',
                fotoPath:'./assets/images/Capitulos/II/media/i84.png',
                parrafo2:'La recta de Euler es una recta que pasa por el Ortocentro (H), el Baricentro (G) y el Circuncentro. Esta recta fue descubierta en 1765 por Leonhard Euler quien demostró la colinealidad de estos tres puntos notables de un triángulo. Además, esta recta pasa por el punto de Exeter y por el centro de la circunferencia de los bueve puntos notables de un triángulo escaleno, conocida como la circunferencia de Feuerbach (Fauring, P., et al., 2000).',
                parrafo3:'Fauring, P., Gutiérrez, F., Pedraza, J., 2000. Problemas de Entrenamiento 1. Red Olímpica, Buenos Aires. ISBN 987-9072-31-6.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los tres lados de un triángulo cualquiera, se obtienen los siguientes tres puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/i85.png',    
                  },
                  {
                    parrafo:'Luego se utilizan las fórmulas de los puntos del baricentro, circuncentro y ortocentro ya calculadas anteriormente para unir esos puntos con líneas:',
                    fotoPath:'./assets/images/Capitulos/II/media/i86.png',    
                  },
                  {
                    parrafo:'Luego, se grafican dos de las tres medianas del triángulo, en función de los puntos $G_1$ y $G_3$: ',
                    fotoPath:'./assets/images/Capitulos/II/media/i87.png',    
                  },
                  {
                    parrafo:'Después, se grafican dos de las tres mediatrices del triángulo, en función de los puntos $G_1$, $G_3$ y $O$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i88.png',    
                  },
                  {
                    parrafo:'Finalmente, se grafican dos de las tres alturas del triángulo, en función de los puntos $H_1$ y $H_3$; y también en función de las pendientes $m_BC$ y $m_(AH_1 )$:',
                    fotoPath:'./assets/images/Capitulos/II/media/i89.png',    
                  }
                ]
               }

             ]               
           },
         C:{
            subtitulo:'C)	Algoritmos',
            algoritmosC:[
                {
                    titulo:'3.1.1. Algoritmo de la Función ReadData()',
                    pasos:[
                      '1.	Leer el lado 1 del triángulo.',
                      '2.	Leer el lado 2 del triángulo.',
                      '3.	Leer el lado 3 del triángulo.'                      
                    ]
                },
                {
                    titulo:'3.1.2. Algoritmo de la Función CheckTriangle()',
                    pasos:[
                        '1.	Si la suma de cualquiera de los dos lados es mayor que el tercero, es decir, si se cumple la condición del teorema: (a+b>c)∧(a+c>b)∧(b+c>a), retornar un valor booleano con verdadero, caso contrario retornar un valor booleano con falso.'
                    ]
                },
                {
                    titulo:'3.1.3. Algoritmo de la Función SemiperimeterTriangle()',
                    pasos:[
                      '1.	Calcular el semi-perímetro.',
                      '1.1.	Asignar el resultado de la división entre la suma de los tres lados dividido para dos, a la variable ‘s’.'
                    ]
                },
                {
                    titulo:'3.1.4. Algoritmo de la Función PerimeterTriangle()',
                    pasos:[
                      '1.	Calcular el perímetro.',
                      '1.1.	Asignar el resultado del producto entre el semi-perímetro por dos a la variable ‘perimetro’.'
                    ]
                },
                {
                    titulo:'3.1.5. Algoritmo de la Función AreaTriangle()',
                    pasos:[
                      '1.	Calcular el área.',
                      '1.1.	Asignar el valor de la raíz cuadrada del semi-perímetro multiplicado por la diferencia entre el semi-perímetro por cada uno de los lados del triángulo, a la variable ‘area’.'                    
                    ]
                },
                {
                    titulo:'3.1.6. Algoritmo de la Función PrintData()',
                    pasos:[
                      '1.	Imprimir el valor de la variable ‘perimeter’ y de la variable ‘area’.'
                    ]
                },
                {
                    titulo:'3.1.7. Algoritmo de la Función InitializeData()',
                    pasos:['1.	Obtener el valor del ancho y del largo del lienzo (picCanvas).',
                    '1.1.	Crear un objeto de tipo Rectangle.',
                    '1.2.	Asignar a la componente X del rectángulo el valor del ancho del lienzo.',
                    '1.3.	Asignar a la componente Y del rectángulo el valor del largo del lienzo.',
                    '2.	Calcular el valor máximo de la resolución de X y de Y del lienzo.',
                    '2.1.	Asignar al valor máximo de la resolución de X representado por la variable maxX, el valor de la componente X del rectángulo disminuida en uno.',
                    '2.2.	Asignar al valor máximo de la resolución de Y representado por la variable maxY, el valor de la componente Y del rectángulo disminuida en uno.',
                    '3.	Calcular el centro del lienzo (picCanvas).',
                    '3.1.	Asignar a la variable ‘x’ del centro trasladado cuyo nombre es xCenter el valor de la división entre el valor máximo de la resolución de X con el valor de dos.',
                    '3.2.	Asignar a la variable ‘y’ del centro trasladado cuyo nombre es yCenter el valor de la división entre el valor máximo de la resolución de Y con el valor de dos.'
                    ]
                },
                {
                    titulo:'3.1.8. Algoritmo de la Función PlotAxis()',
                    pasos:['1.	Dibujar el eje horizontal (x).',
                    '1.1.	Asignar a la componente X del punto P1 el valor de cero.',
                    '1.2.	Asignar a la componente Y del punto P1 el valor de yCenter.',
                    '1.3.	Asignar a la componente X del punto P2 el valor de maxX.',
                    '1.4.	Asignar a la componente Y del punto P2 el valor de yCenter.',
                    '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice P1 con el vértice P2.',
                    '2.	Dibujar el eje vertical (y).',
                    '2.1.	Asignar a la componente X del punto P1 el valor de xCenter.',
                    '2.2.	Asignar a la componente Y del punto P1 el valor de cero.',
                    '2.3.	Asignar a la componente X del punto P2 el valor de xCenter.',
                    '2.4.	Asignar a la componente Y del punto P2 el valor de maxY.',
                    '2.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice P1 con el vértice P2.'
                    ]
                },
                {
                    titulo:'3.1.9. Algoritmo de la Función CalculateAngles()',
                    pasos:[
                      '1.	Calcular el valor del ángulo A del triángulo utilizando la Ley de Cosenos.',
                      '2.	Calcular el valor del ángulo B del triángulo utilizando la Ley de Cosenos.'
                    ]
                },
                {
                    titulo:'3.1.10. Algoritmo de la Función CalculateVertex()',
                    pasos:[
                      '1.	Calcular el valor del vértice A del triángulo.',
                      '2.	Calcular el valor del vértice B del triángulo.',
                      '3.	Llamada a la función CalculateAngles(), para calcular los ángulos A y B del triángulo.',
                      '4.	Calcular el valor del vértice C del triángulo, en función del ángulo A.'
                    ]
                },
                {
                    titulo:'3.1.11. Algoritmo de la Función PlotShape()',
                    pasos:[
                      '1.	Graficar un triángulo.',
                      '1.1.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ tres líneas que unen los vértices A, B y C del triángulo.'
                    ]
                },
                {
                    titulo:'3.1.12. Algoritmo de la Función CalculateBarycenter()',
                    pasos:[
                      '1.	Calcular el valor del Baricentro G del triángulo con la ecuación (4) de la sección B.2.'
                    ]
                },
                {
                    titulo:'3.1.13. Algoritmo de la Función PlotMedians()',
                    pasos:[
                      '1.	Graficar las medianas del triángulo.',
                      '1.1.	Calcular las coordenadas de la mediana G1, utilizando la ecuación (8) de la sección B.2.',
                      '1.2.	Calcular las coordenadas de la mediana G2, utilizando la ecuación (7) de la sección B.2.',
                      '1.3.	Calcular las coordenadas de la mediana G3, utilizando la ecuación (6) de la sección B.2.',
                      '1.4.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G1 con el vértice A del triángulo.',
                      '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G2 con el vértice B del triángulo.',
                      '1.6.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G3 con el vértice C del triángulo.'
                    ]
                },
                {
                    titulo:'3.1.14. Algoritmo de la Función CalculateCircumcenter()',
                    pasos:[
                      '1.	Calcular el valor del Circuncentro O del triángulo con la ecuación (11) de la sección B.3.'
                    ]
                },
                {
                    titulo:'3.1.15. Algoritmo de la Función PlotPerpendicularBisectors()',
                    pasos:[
                      '1.	Graficar las mediatrices del triángulo.',
                      '1.1.	Llamada a la función CalculateCircumcenter().',
                      '1.2.	Calcular las coordenadas de la mediana G1, utilizando la ecuación (8) de la sección B.2.',
                      '1.3.	Calcular las coordenadas de la mediana G2, utilizando la ecuación (7) de la sección B.2.',
                      '1.4.	Calcular las coordenadas de la mediana G3, utilizando la ecuación (6) de la sección B.2.',
                      '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G1 con el vértice O del triángulo.',
                      '1.6.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G2 con el vértice O del triángulo.',
                      '1.7.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G3 con el vértice O del triángulo.',
                      '1.8.	Calcular el radio R del círculo circunscrito al triángulo, utilizando la ecuación (12) de la sección B.3.',
                      '1.9.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar un círculo, en función del radio R y del vértice O.',
                      '1.10.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice O con el vértice A del triángulo, que representa al radio del círculo circunscrito al triángulo ABC.'
                    ]
                },
                {
                    titulo:'3.1.16. Algoritmo de la Función CalculateOrthocenter()',
                    pasos:[
                      '1.	Calcular el valor del Ortocentro H del triángulo con la ecuación (17) de la sección B.4.'
                    ]
                },
                {
                    titulo:'3.1.17. Algoritmo de la Función PlotAltitudes()',
                    pasos:[
                      '1.	Graficar las alturas del triángulo.',
                      '1.1.	Calcular las pendientes BC y AH1 que es perpendicular a la pendiente BC.',
                      '1.2.	Calcular las coordenadas de la altura H1, utilizando la ecuación (24) de la sección B.4.',
                      '1.3.	Calcular las coordenadas de la altura H2, utilizando la ecuación (17) de la sección B.4.',
                      '1.4.	Calcular las coordenadas de la altura H3, utilizando la ecuación (5) de la sección B.4.',
                      '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H1 con el vértice A del triángulo.',
                      '1.6.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H2 con el vértice B del triángulo.',
                      '1.7.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H3 con el vértice C del triángulo.',
                      '2.	Graficar el triángulo órtico.',
                      '2.1.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H1 con el vértice H2 del triángulo.',
                      '2.2.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H1 con el vértice H3 del triángulo.',
                      '2.3.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H2 con el vértice H3 del triángulo.',
                      '2.4.	Llamada a la función CalculateOrthocenter().',
                      '2.5.	Calcular las pendientes H2H3 y HT1 que es perpendicular a la pendiente H2H3.',
                      '2.6.	Calcular las coordenadas del punto de tangencia T1, utilizando la ecuación (30) de la sección B.4.',
                      '2.7.	Calcular el radio ro del triángulo órtico, utilizando la ecuación (31) de la sección B.4.',
                      '2.8.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar un círculo, en función del radio ro y del vértice H.',
                      '2.9.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice H con el vértice T1 del triángulo órtico, que representa al radio del círculo inscrito a ese triángulo.'
                    ]
                },
                {
                    titulo:'3.1.18. Algoritmo de la Función CalculateIncenter()',
                    pasos:[
                      '1.	Calcular el valor del Incentro I del triángulo con la ecuación (4) de la sección B.5.'
                    ]
                },
                {
                    titulo:'3.1.19. Algoritmo de la Función PlotBisectors()',
                    pasos:[
                      '1.	Graficar las bisectrices del triángulo y los círculos exinscritos e inscrito al triángulo ABC.',
                      '1.1.	Llamada a la función CalculateIncenter().',
                      '1.2.	Calcular el radio r del círculo inscrito al triángulo, utilizando la ecuación (22) de la sección B.5.',
                      '1.3.	Calcular las coordenadas del punto de tangencia T3, utilizando la ecuación (21) de la sección B.5.',
                      '1.4.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar un círculo, en función del radio r y del vértice I.',
                      '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice I con el vértice T3 del triángulo ABC, que representa al radio del círculo inscrito al triángulo.',
                      '1.6.	Llamada a la función PerimeterTriangle().',
                      '1.7.	Llamada a la función SemiperimeterTriangle().',
                      '1.8.	Calcular el radio de cada uno de los tres círculos exinscritos al triángulo, utilizando las ecuaciones (6), (7) y (8) de la sección B.5.',
                      '1.9.	Calcular los valores de los vértices del triángulo DEF.',
                      '1.9.1.	Llamada a la función CalculateAngles().',
                      '1.9.2.	Calcular los valores de los ángulos alpha y beta que son externos del triángulo, utilizando las ecuaciones (12) y (13) de la sección B.5.',
                      '1.9.3.	Calcular los segmentos LA, BQ y AK del triángulo ABC, utilizando las ecuaciones (15), (16) y (17) de la sección B.5.',
                      '1.9.4.	Calcular los vértices del triángulo DEF, utilizando las utilizando las ecuaciones (18), (19) y (20) de la sección B.5.',
                      '1.9.5.	Graficar el triángulo DEF.',
                      '1.9.5.1.	Utilizar el objeto \'Graph\' con la función DrawLine para graficar con la pluma \'Pen\' tres líneas que unen los vértices D, E y F del triángulo.',
                      '1.10.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar uno de los círculos exinscritos, en función del radio Ra y del vértice D.',
                      '1.11.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar uno de los círculos exinscritos, en función del radio Rb y del vértice E.',
                      '1.12.	Llamada a la función PlotCircle(), utilizando el objeto ObjCircle, para graficar uno de los círculos exinscritos, en función del radio Rc y del vértice F.',
                      '1.13.	Graficar las bisectrices del triángulo ABC.',
                      '1.13.1.	Utilizar el objeto \'Graph\' con la función DrawLine para graficar con la pluma \'Pen\' una de las bisectrices que une los vértices A y D.',
                      '1.13.2.	Utilizar el objeto \'Graph\' con la función DrawLine para graficar con la pluma \'Pen\' una de las bisectrices que une los vértices B y E.',
                      '1.13.3.	Utilizar el objeto \'Graph\' con la función DrawLine para graficar con la pluma \'Pen\' una de las bisectrices que une los vértices C y F.',
                      '1.14.	Calcular los valores de las pendientes AB, AC y BC.',
                      '1.15.	Graficar las líneas de tangencia entre el triángulo ABC y los círculos exinscritos.',
                      '1.15.1.	Llamada a la función PlotLine(), utilizando el objeto ObjLine, para graficar una de las líneas de tangencia entre el triángulo ABC y uno de los círculos exinscritos, en función de la pendiente AB.',
                      '1.15.2.	Llamada a la función PlotLine(), utilizando el objeto ObjLine, para graficar una de las líneas de tangencia entre el triángulo ABC y uno de los círculos exinscritos, en función de la pendiente AC.',
                      '1.15.3.	Llamada a la función PlotLine(), utilizando el objeto ObjLine, para graficar una de las líneas de tangencia entre el triángulo ABC y uno de los círculos exinscritos, en función de la pendiente BC.'
                    ]
                },
                {
                    titulo:'3.1.20. Algoritmo de la Función PlotEulersLine()',
                    pasos:[
                      '1.1.	Llamada a la función CalculateBarycenter().',
                      '1.2.	Llamada a la función CalculateCircumcenter().',
                      '1.3.	Llamada a la función CalculateOrthocenter().',
                      '1.4.	Graficar la recta de Euler.',
                      '1.4.1.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G con el vértice O del triángulo.',
                      '1.4.2.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que une el vértice G con el vértice H del triángulo.'
                    ]
                }
            ]
         },
         D:{
            subtitulo:'D)	Código de la Aplicación',
            listaCodigo:[
                {
                    problema:'La implementación de la clase CTriangle, se presenta a continuación en la Tabla 3.1.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 3.1.1. ',
                    tablaDescrip:'Código de la clase CTriangle del programa.',
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

                    using System.Drawing;
                    using System.Windows.Forms;

                    namespace WinAppTriangle
                    {
                        class CTriangle
                        {
                            #region Atributes of the class        
                            /// <summary>
                            /// Member Data
                            /// </summary>

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
                            // Objeto bolígrafo que dibuja o escribe en un lienzo o canvas (PictureBox).
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
                            // Ángulo B del triángulo.
                            private float angleB;
                            // Ángulo C del triángulo.
                            //private float angleC;
                            // Objeto que permite obtener el tamaño de un lienzo o canvas (PictureBox).
                            private Rectangle d;
                            // Dato que representa al valor máximo en el eje de las abcisas (x) del lienzo.
                            private int maxX;
                            // Dato que representa al valor máximo en el eje de las ordenadas (y) del lienzo.
                            private int maxY;
                            // Dato que representa al valor de x del centro del lienzo.
                            private int xCenter;
                            // Dato que representa al valor de y del centro del lienzo.
                            private int yCenter;
                            // Objeto Punto que representa a un punto cualquiera P1.
                            private PointF P1;
                            // Objeto Punto que representa al Baricentro G del triángulo.
                            private PointF G;
                            // Objeto Punto que representa al Circuncentro O del triángulo.
                            private PointF O;
                            // Objeto Punto que representa a un punto cualquiera P2.
                            private PointF P2;
                            // Objeto Punto que representa a la mediana del lado BC del triángulo.
                            private PointF G1;
                            // Objeto Punto que representa a la mediana del lado AC del triángulo.
                            private PointF G2;
                            // Objeto Punto que representa a la mediana del lado AB del triángulo.
                            private PointF G3;
                            // Objeto Punto que representa al Ortocentro H del triángulo.
                            private PointF H;
                            // Objeto Punto que representa a la altura del lado BC del triángulo.
                            private PointF H1;
                            // Objeto Punto que representa a la altura del lado AC del triángulo.
                            private PointF H2;
                            // Objeto Punto que representa a la altura del lado AB del triángulo.
                            private PointF H3;
                            // Objeto Punto que representa al punto de tangencia del triángulo órtico.
                            private PointF T1;
                            // Objeto Punto que representa al punto de tangencia del círculo inscrito,
                            // con el lado AB del triángulo.
                            private PointF T3;
                            // Objeto Punto que representa al vértice D que corresponde al centro de uno
                            // de los círculos exinscritos de radio Ra.
                            private PointF D;
                            // Objeto Punto que representa al vértice D que corresponde al centro de uno
                            // de los círculos exinscritos de radio Rb.
                            private PointF E;
                            // Objeto Punto que representa al vértice D que corresponde al centro de uno
                            // de los círculos exinscritos de radio Rc.
                            private PointF F;
                            // Objeto Punto que representa al incentro I del triángulo.
                            private PointF I;
                            // Ángulo externo del triángulo ABC.
                            private float Alpha;
                            // Ángulo externo del triángulo ABC.
                            private float Beta;
                            // Pendiente del lado AB del triángulo ABC.
                            private float mAB;
                            // Pendiente del lado AC del triángulo ABC.
                            private float mAC;
                            // Pendiente del lado BC del triángulo ABC.
                            private float mBC;
                            // Radio Ra del primer círculo exinscrito.
                            private float Ra;
                            // Radio Rb del segundo círculo exinscrito.
                            private float Rb;
                            // Radio Rc del tercer círculo exinscrito.
                            private float Rc;
                            // Objeto de tipo CCircle para graficar un círculo cualquiera.
                            private CCircle ObjCircle = new CCircle();
                            // Objeto de tipo CLine para graficar una línea cualquiera.
                            private CLine ObjLine = new CLine();
                            #endregion

                            #region Constructors of the class
                            ///<summary>
                            /// Constructor Functions.
                            ///</summary>

                            // Constructor sin parámetros.
                            public CTriangle()
                            {
                                a = 0.0f; b = 0.0f; c = 0.0f;
                                perimeter = 0.0f; area = 0.0f;
                            }

                            #endregion

                            #region Methods of the class
                            ///<summary>
                            /// Funciones Miembro (Métodos).
                            ///</summary>

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

                            // Función que valida la existencia de un triángulo.
                            public bool CheckTriangle()
                            {
                                if ((a + b > c) && (a + c > b) && (b + c > a))
                                {
                                    return (true);
                                }
                                else // !((a + b > c) && (a + c > b) && (b + c > a))
                                    return (false);
                            }

                            // // Función que calcula el semi-perímetro del triángulo..
                            private float SemiperimeterTriangle()
                            {
                                return ((a + b + c) / 2.0f);
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

                            // Función que inicializa los valores del centro del lienzo o canvas. 
                            public void InitializeData(PictureBox picCanvas)
                            {
                                d = new Rectangle();
                                d.X = picCanvas.Width;
                                d.Y = picCanvas.Height;

                                maxX = d.X - 1; maxY = d.Y - 1;
                                xCenter = maxX / 2; yCenter = maxY / 2;            
                            }

                            // Función que grafica los ejes coordenados 'x' e 'y'.
                            public void PlotAxis(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Black);

                                //Dibujar el eje horizontal (x).
                                P1.X = 0; P1.Y = yCenter;
                                P2.X = maxX; P2.Y = yCenter;
                                mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);

                                // Dibujar el eje vertical (y).            
                                P1.X = xCenter; P1.Y = 0;
                                P2.X = xCenter; P2.Y = maxY;

                                mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);
                            }

                            // Función que calcula el ángulo A, B y C del triángulo, 
                            // utilizando la Ley de Cosenos para cada ángulo.
                            private void CalculateAngles()
                            {
                                angleA = (float)Math.Acos((b * b + c * c - a * a) / (2 * b * c));
                                angleB = (float)Math.Acos((a * a + c * c - b * b) / (2 * a * c));
                                //angleC = (float)Math.Acos((a * a + b * b - c * c) / (2 * a * b));
                            }

                            // Función que calcula los valores de los tres vértices del triángulo.
                            private void CalculateVertex()
                            {
                                A.X = 0.0f; A.Y = 0.0f;
                                B.X = c; B.Y = 0.0f;

                                CalculateAngles();

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

                                mGraph.DrawLine(mPen, A.X * SF + xCenter, yCenter + (-1) * A.Y * SF, 
                                                      B.X * SF + xCenter, yCenter + (-1) * B.Y * SF);
                                mGraph.DrawLine(mPen, A.X * SF + xCenter, yCenter + (-1) * A.Y * SF, 
                                                      C.X * SF + xCenter, yCenter + (-1) * C.Y * SF);
                                mGraph.DrawLine(mPen, B.X * SF + xCenter, yCenter + (-1) * B.Y * SF, 
                                                      C.X * SF + xCenter, yCenter + (-1) * C.Y * SF);            
                            }

                            // Función que calcula el valor del Baricentro G de un triángulo.
                            private void CalculateBarycenter()
                            {
                                G.X = (A.X + B.X + C.X) / 3.0f; G.Y = (A.Y + B.Y + C.Y) / 3.0f;
                            }

                            // Función que grafica las medianas de un triángulo.
                            public void PlotMedians(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Red, 3);

                                G1.X = (c + b * (float)Math.Cos(angleA)) / 2.0f;
                                G1.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G2.X = b * (float)Math.Cos(angleA) / 2.0f;
                                G2.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G3.X = c / 2.0f;
                                G3.Y = 0.0f;

                                mGraph.DrawLine(mPen, G1.X * SF + xCenter, yCenter + (-1) * G1.Y * SF, 
                                                      A.X * SF + xCenter, yCenter + (-1) * A.Y * SF);
                                mGraph.DrawLine(mPen, G2.X * SF + xCenter, yCenter + (-1) * G2.Y * SF, 
                                                      B.X * SF + xCenter, yCenter + (-1) * B.Y * SF);
                                mGraph.DrawLine(mPen, G3.X * SF + xCenter, yCenter + (-1) * G3.Y * SF, 
                                                      C.X * SF + xCenter, yCenter + (-1) * C.Y * SF);
                            }

                            // Función que calcula el valor del Circuncentro O de un triángulo.
                            private void CalculateCircumcenter()
                            {
                                float Num, Den;

                                O.X = c / 2.0f;
                                Num = (float)Math.Pow(b, 2) - 2 * b * (float)Math.Cos(angleA) * O.X;
                                Den = 2 * b * (float)Math.Sin(angleA);
                                O.Y = Num / Den;
                            }

                            // Función que grafica las mediatrices de un triángulo.
                            public void PlotPerpendicularBisectors(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Gray, 3);

                                CalculateCircumcenter();

                                G1.X = (c + b * (float)Math.Cos(angleA)) / 2.0f;
                                G1.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G2.X = b * (float)Math.Cos(angleA) / 2.0f;
                                G2.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G3.X = c / 2.0f;
                                G3.Y = 0.0f;            

                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF, 
                                                      G1.X * SF + xCenter, yCenter + (-1) * G1.Y * SF);
                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF, 
                                                      G2.X * SF + xCenter, yCenter + (-1) * G2.Y * SF);
                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF, 
                                                      G3.X * SF + xCenter, yCenter + (-1) * G3.Y * SF);
                                
                                // Calcular el radio R del círculo circunscrito al triángulo.
                                float R = (float)Math.Sqrt(O.X * O.X + O.Y * O.Y);

                                ObjCircle.PlotCircle(picCanvas, Color.Red, R, O.X * SF + xCenter,
                                                    (-1) * O.Y * SF + yCenter);
                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF, 
                                                A.X * SF + xCenter, yCenter + (-1) * A.Y * SF);
                            }

                            // Función que calcula el valor del Ortocentro H de un triángulo.
                            private void CalculateOrthocenter()
                            {
                                H.X = b * (float)Math.Cos(angleA);
                                H.Y = c * (1.0f / (float)Math.Tan(angleA)) - b 
                                        * (float)Math.Cos(angleA) * (1.0f / (float)Math.Tan(angleA));
                            }

                            // Función que grafica las alturas de un triángulo.
                            public void PlotAltitudes(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Green, 3);

                                mBC = (b * (float)Math.Sin(angleA)) / (b * (float)Math.Cos(angleA) - c);
                                float mAH1 = (-1.0f) * (b * (float)Math.Cos(angleA) - c) / 
                                            (b * (float)Math.Sin(angleA));

                                H1.X = c * mBC / (mBC - mAH1); H1.Y = mAH1 * c * mBC / (mBC - mAH1);
                                H2.X = (c * (1.0f / (float)Math.Tan(angleA))) / 
                                      ((float)Math.Tan(angleA) + (1.0f / (float)Math.Tan(angleA)));
                                H2.Y = c / ((float)Math.Tan(angleA) + (1.0f / (float)Math.Tan(angleA)));
                                H3.X = b * (float)Math.Cos(angleA); H3.Y = 0.0f;

                                mGraph.DrawLine(mPen, A.X * SF + xCenter, yCenter + (-1) * A.Y * SF, 
                                                H1.X * SF + xCenter, yCenter + (-1) * H1.Y * SF);
                                mGraph.DrawLine(mPen, B.X * SF + xCenter, yCenter + (-1) * B.Y * SF, 
                                                H2.X * SF + xCenter, yCenter + (-1) * H2.Y * SF);
                                mGraph.DrawLine(mPen, C.X * SF + xCenter, yCenter + (-1) * C.Y * SF, 
                                                H3.X * SF + xCenter, yCenter + (-1) * H3.Y * SF);

                                // Graficar el triángulo órtico.
                                mPen = new Pen(Color.Coral, 3);
                                mGraph.DrawLine(mPen, H1.X * SF + xCenter, yCenter + (-1) * H1.Y * SF, 
                                                H2.X * SF + xCenter, yCenter + (-1) * H2.Y * SF);
                                mGraph.DrawLine(mPen, H1.X * SF + xCenter, yCenter + (-1) * H1.Y * SF, 
                                                H3.X * SF + xCenter, yCenter + (-1) * H3.Y * SF);
                                mGraph.DrawLine(mPen, H2.X * SF + xCenter, yCenter + (-1) * H2.Y * SF, 
                                                H3.X * SF + xCenter, yCenter + (-1) * H3.Y * SF);

                                H.X = b * (float)Math.Cos(angleA);
                                H.Y = c * (1.0f / (float)Math.Tan(angleA)) - b * (float)Math.Cos(angleA) 
                                        * (1.0f / (float)Math.Tan(angleA));
                                
                                float mH2H3 = (H3.Y - H2.Y) / (H3.X - H2.X);
                                float mHT1 = -(H3.X - H2.X) / (H3.Y - H2.Y);            

                                T1.X = (b * (float)Math.Cos(angleA) * (mH2H3 - mHT1) 
                                    + c * (1.0f / (float)Math.Tan(angleA))
                                    - b * (float)Math.Cos(angleA) * (1.0f / (float)Math.Tan(angleA)))
                                    / (mH2H3 - mHT1);
                                            
                                T1.Y = mH2H3 * T1.X - mH2H3 * b * (float)Math.Cos(angleA);
                                
                                // Calcular el radio ro del triángulo órtico.
                                float ro = (float)Math.Sqrt((float)Math.Pow((T1.X - H.X), 2) 
                                        + (float)Math.Pow((T1.Y - H.Y), 2));

                                ObjCircle.PlotCircle(picCanvas, Color.Red, ro, H.X * SF + xCenter, 
                                                    yCenter + (-1) * H.Y * SF);
                                mPen = new Pen(Color.Red, 3);
                                mGraph.DrawLine(mPen, H.X * SF + xCenter, yCenter + (-1) * H.Y * SF, 
                                                T1.X * SF + xCenter, yCenter + (-1) * T1.Y * SF);
                            }

                            // Función que calcula el valor del Incentro I de un triángulo.
                            private void CalculateIncenter()
                            {
                                CalculateVertex();
                                I.X = (a * A.X + b * B.X + c * C.X) / (a + b + c);
                                I.Y = (a * A.Y + b * B.Y + c * C.Y) / (a + b + c);
                            }

                            // Función que grafica las bisectrices de un triángulo, el círculo
                            // inscrito y los tres círculos exinscritos del triángulo.
                            public void PlotBisectors(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();            

                                CalculateIncenter();

                                // Calcular el radio r del círculo inscrito al triángulo.
                                float r = (a * A.Y + b * B.Y + c * C.Y) / (a + b + c);            
                                
                                T3.X = (a * A.X + b * B.X + c * C.X) / (a + b + c);
                                T3.Y = 0;

                                ObjCircle.PlotCircle(picCanvas, Color.Red, r, I.X * SF + xCenter,
                                                    yCenter + (-1) * I.Y * SF);
                                mPen = new Pen(Color.Red, 3);
                                mGraph.DrawLine(mPen, I.X * SF + xCenter, yCenter + (-1) * I.Y * SF, 
                                                T3.X * SF + xCenter, yCenter + (-1) * T3.Y * SF);
                                                        
                                PerimeterTriangle();
                                float p = perimeter;
                                float s = SemiperimeterTriangle();

                                // Calcular el radio de cada uno de los círculos exinscritos al triángulo.
                                Ra = (float)Math.Sqrt((s * (s - b) * (s - c)) / (s - a));
                                Rb = (float)Math.Sqrt((s * (s - a) * (s - c)) / (s - b));
                                Rc = (float)Math.Sqrt((s * (s - b) * (s - a)) / (s - c));

                                // Calcular los valores de los vértices del triángulo DEF.
                                CalculateAngles();
                                Alpha = ((float)Math.PI - angleA) / 2.0f;
                                Beta = ((float)Math.PI - angleB) / 2.0f;

                                float LA, BQ, AK;
                                BQ = Ra / (float)Math.Tan(Beta);
                                LA = Rb / (float)Math.Tan(Alpha);
                                AK = Rc / (float)Math.Tan(Alpha);
                                
                                D.X = c + BQ; D.Y = Ra;
                                E.X = (-1) * LA; E.Y = Rb;
                                F.X = AK; F.Y = (-1) * Rc;

                                // Graficar el triángulo DEF.
                                mPen = new Pen(Color.Maroon, 3);
                                mGraph.DrawLine(mPen, D.X * SF + xCenter, yCenter + (-1) * D.Y * SF, 
                                                E.X * SF + xCenter, yCenter + (-1) * E.Y * SF);
                                mGraph.DrawLine(mPen, D.X * SF + xCenter, yCenter + (-1) * D.Y * SF, 
                                                F.X * SF + xCenter, yCenter + (-1) * F.Y * SF);
                                mGraph.DrawLine(mPen, E.X * SF + xCenter, yCenter + (-1) * E.Y * SF, 
                                                F.X * SF + xCenter, yCenter + (-1) * F.Y * SF);

                                ObjCircle.PlotCircle(picCanvas, Color.DarkMagenta, Ra, D.X * SF + xCenter, 
                                                    yCenter + (-1) * D.Y * SF);
                                ObjCircle.PlotCircle(picCanvas, Color.DarkMagenta, Rb, E.X * SF + xCenter, 
                                                    yCenter + (-1) * E.Y * SF);
                                ObjCircle.PlotCircle(picCanvas, Color.DarkMagenta, Rc, F.X * SF + xCenter, 
                                                    yCenter + (-1) * F.Y * SF);

                                // Graficar las bisectrices del triángulo ABC.
                                mPen = new Pen(Color.DarkSalmon, 3);
                                mGraph.DrawLine(mPen, A.X * SF + xCenter, yCenter + (-1) * A.Y * SF, 
                                                D.X * SF + xCenter, yCenter + (-1) * D.Y * SF);
                                mGraph.DrawLine(mPen, B.X * SF + xCenter, yCenter + (-1) * B.Y * SF, 
                                                E.X * SF + xCenter, yCenter + (-1) * E.Y * SF);
                                mGraph.DrawLine(mPen, C.X * SF + xCenter, yCenter + (-1) * C.Y * SF, 
                                                F.X * SF + xCenter, yCenter + (-1) * F.Y * SF);
                                                      
                                float X1, Y1;
                                mAB = 0.0f; mAC = (float)Math.Tan(angleA);
                                mBC = (b * (float)Math.Sin(angleA)) / (b * (float)Math.Cos(angleA) - c);

                                X1 = 0.0f; Y1 = 0.0f;
                                ObjLine.PlotLine(picCanvas, Color.CadetBlue, mAB, X1, Y1, xCenter, yCenter);
                                X1 = 0.0f; Y1 = 0.0f;
                                ObjLine.PlotLine(picCanvas, Color.CadetBlue, mAC, X1, Y1, xCenter, yCenter);
                                X1 = c; Y1 = 0.0f;
                                ObjLine.PlotLine(picCanvas, Color.CadetBlue, mBC, X1, Y1, xCenter, yCenter);
                            }

                            // Función que calcula y grafica la recta de Euler.
                            public void PlotEulersLine(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.BlueViolet, 3);

                                CalculateBarycenter();
                                CalculateCircumcenter();
                                CalculateOrthocenter();

                                mGraph.DrawLine(mPen, G.X * SF + xCenter, yCenter + (-1) * G.Y * SF, 
                                                O.X * SF + xCenter, yCenter + (-1) * O.Y * SF);
                                mGraph.DrawLine(mPen, G.X * SF + xCenter, yCenter + (-1) * G.Y * SF, 
                                                H.X * SF + xCenter, yCenter + (-1) * H.Y * SF);
                            }

                            // Función que calcula y grafica dos medianas del triángulo ABC.
                            public void PlotTwoMedians(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Red, 3);

                                G1.X = (c + b * (float)Math.Cos(angleA)) / 2.0f;
                                G1.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G3.X = c / 2.0f;
                                G3.Y = 0.0f;

                                mGraph.DrawLine(mPen, G1.X * SF + xCenter, yCenter + (-1) * G1.Y * SF,
                                                A.X * SF + xCenter, yCenter + (-1) * A.Y * SF);
                                mGraph.DrawLine(mPen, G3.X * SF + xCenter, yCenter + (-1) * G3.Y * SF,
                                                C.X * SF + xCenter, yCenter + (-1) * C.Y * SF);
                            }

                            // Función que calcula y grafica dos mediatrices del triángulo ABC.
                            public void PlotTwoPerpendicularBisectors(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Gray, 3);

                                CalculateCircumcenter();

                                G1.X = (c + b * (float)Math.Cos(angleA)) / 2.0f;
                                G1.Y = b * (float)Math.Sin(angleA) / 2.0f;

                                G3.X = c / 2.0f;
                                G3.Y = 0.0f;

                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF,
                                                G1.X * SF + xCenter, yCenter + (-1) * G1.Y * SF);
                                mGraph.DrawLine(mPen, O.X * SF + xCenter, yCenter + (-1) * O.Y * SF,
                                                G3.X * SF + xCenter, yCenter + (-1) * G3.Y * SF);
                            }

                            // Función que calcula y grafica dos alturas del triángulo ABC.
                            public void PlotTwoAltitudes(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Green, 3);

                                mBC = (b * (float)Math.Sin(angleA)) / (b * (float)Math.Cos(angleA) - c);
                                float mAH1 = (-1.0f) * (b * (float)Math.Cos(angleA) - c) /
                                            (b * (float)Math.Sin(angleA));

                                H1.X = c * mBC / (mBC - mAH1); H1.Y = mAH1 * c * mBC / (mBC - mAH1);
                                H3.X = b * (float)Math.Cos(angleA); H3.Y = 0.0f;

                                mGraph.DrawLine(mPen, A.X * SF + xCenter, yCenter + (-1) * A.Y * SF,
                                                H1.X * SF + xCenter, yCenter + (-1) * H1.Y * SF);
                                mGraph.DrawLine(mPen, C.X * SF + xCenter, yCenter + (-1) * C.Y * SF,
                                                H3.X * SF + xCenter, yCenter + (-1) * H3.Y * SF);
                            }

                            // Función que cierra un formulario.
                            public void CloseForm(Form ObjForm)
                            {            
                                ObjForm.Close();
                            }

                            #endregion

                        }
                    }
                    `
                },
                {
                    problema:'La implementación de la clase CCircle, se presenta a continuación en la Tabla 1.1.2, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 1.1.2. ',
                    tablaDescrip:'Código de la clase CCircle del programa.',
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
                    
                    using System.Drawing;
                    using System.Windows.Forms;
                    
                    namespace WinAppTriangle
                    {
                        class CCircle
                        {
                            #region Atributes of the class        
                            /// <summary>
                            /// Member Data
                            /// </summary>         
                            
                            // Activar el modo gráfico de Windows con GDI+ 
                            // GDI+ (Graphic Device Interface with COM+ Technology).
                            private Graphics mGraph;
                            // Factor de escalamiento para hacer un Zoom In/Zoom Out.
                            private const float SF = 10;
                            // Pluma para graficar en el lienzo (canvas).
                            private Pen ObjPen;
                            // Arreglo de puntos (pixeles) de tipo Estructura Punto Plotante.
                            private PointF[] mP = new PointF[361];
                            // Valores de 'x' y de 'y'.
                            private float mX, mY;
                            // Valores de 'xp' y 'yp'.
                            private float mXp, mYp;
                            // Intervalos de la función (Dominio-x).
                            private float I1, I2;
                            #endregion
                    
                            #region Constructors of the class
                            ///<summary>
                            /// Constructor Functions.
                            ///</summary>
                    
                            // Constructor sin parámetros.
                            public CCircle()
                            {
                                mX = 0.0f; mY = 0.0f;
                                mXp = 0.0f; mYp = 0.0f;
                            }
                    
                            #endregion
                    
                            #region Methods of the class
                            ///<summary>
                            /// Funciones Miembro (Métodos).
                            ///</summary>        
                    
                            //Función para evaluar la función en coordenadas rectangulares 
                            // del círculo, con cinco parámetros.
                            public void EvaluateFunction(float r, float xCenter, float yCenter,
                                                         float iX, float iY)
                            {
                                float i; // Contador para controlar el valor del ángulo theta de la función.
                                int j;   // Contador para controlar el arreglo de puntos.
                                // Dominio (theta) de la función: [0, 360]
                                // Tamaño de paso o delta theta: h = 1 grado = (1*PI/180) rad            
                                I1 = 0.0f; I2 = 2 * (float)Math.PI;
                                for (i = I1, j = 0; i <= I2; i += (float)Math.PI / 180.0f, j++)
                                {
                                    // Tabla de valores del mundo real.                
                                    // Fórmulas de transformación de coordenadas polares a rectangulares.
                                    mX = r * (float)Math.Cos(i);
                                    mY = r * (float)Math.Sin(i);
                                    // Tabla de valores del mundo de la computación gráfica.
                                    mXp = (float)(mX * SF + xCenter);
                                    mXp = (float)(mXp + iX * SF);
                                    mYp = (float)((-1) * mY * SF + yCenter);
                                    mYp = (float)(mYp + (-1) * iY * SF);
                                    // Arreglo de puntos de  tipo flotante.
                                    mP[j] = new PointF(mXp, mYp);
                                }
                            }
                    
                            //Función para evaluar la función en coordenadas rectangulares 
                            // del círculo, con tres parámetros.
                            public void EvaluateFunction(float r, float xCenter, float yCenter)
                            {
                                float i; // Contador para controlar el valor del ángulo theta de la función.
                                int j;   // Contador para controlar el arreglo de puntos.
                                // Dominio (theta) de la función: [0, 360]
                                // Tamaño de paso o delta theta: h = 1 grado = (1*PI/180) rad            
                                I1 = 0.0f; I2 = 2 * (float)Math.PI;
                                for (i = I1, j = 0; i <= I2; i += (float)Math.PI / 180.0f, j++)
                                {
                                    // Tabla de valores del mundo real.                
                                    // Fórmulas de transformación de coordenadas polares a rectangulares.
                                    mX = r * (float)Math.Cos(i);
                                    mY = r * (float)Math.Sin(i);
                                    // Tabla de valores del mundo de la computación gráfica.
                                    mXp = (float)(mX * SF + xCenter);
                                    mYp = (float)((-1) * mY * SF + yCenter);
                                    // Arreglo de puntos de  tipo flotante.
                                    mP[j] = new PointF(mXp, mYp);
                                }
                            }
                    
                            // Función para graficar la curva.
                            public void PlotCircle(PictureBox picCanvas, Color color,
                                                   float r, float xCenter, float yCenter)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                ObjPen = new Pen(color, 3);
                                mP = new PointF[361];
                    
                                EvaluateFunction(r, xCenter, yCenter);
                    
                                mGraph.DrawCurve(ObjPen, mP);
                            }
                    
                            // Función para graficar la curva.
                            public void PlotCircle(PictureBox picCanvas, Color color,
                                                   float r, float xCenter, float yCenter,
                                                   float iX, float iY)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                ObjPen = new Pen(color, 3);
                                mP = new PointF[361];
                    
                                EvaluateFunction(r, xCenter, yCenter, iX, iY);
                    
                                mGraph.DrawCurve(ObjPen, mP);
                            }
                    
                            // Función para inicializar los datos miembro de la clase.
                            public void InitializeData()
                            {
                                mX = 0.0f; mY = 0.0f;
                                mXp = 0.0f; mYp = 0.0f;
                            }
                    
                            #endregion
                        }
                    }                    
                    `
                },
                {
                    problema:'La implementación de la clase CLine, se presenta a continuación en la Tabla 1.1.3, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 1.1.3. ',
                    tablaDescrip:'Código de la clase CLine del programa.',
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
                    
                    using System.Drawing;
                    using System.Windows.Forms;
                    
                    namespace WinAppTriangle
                    {
                        class CLine
                        {
                            #region Atributes of the class        
                            /// <summary>
                            /// Member Data
                            /// </summary>  
                    
                            // Activar el modo gráfico de Windows con GDI+ 
                            // GDI+ (Graphic Device Interface with COM+ Technology).
                            private Graphics mGraph;
                            // Factor de escalamiento para hacer un Zoom In/Zoom Out.
                            private const float SF = 10;
                            // Pluma para graficar en el lienzo (canvas).
                            private Pen ObjPen;
                            // Arreglo de puntos (pixeles) de tipo Estructura Punto Plotante.
                            private PointF[] mP = new PointF[61];
                            // Valores de 'x' y de 'y'.
                            private float mX, mY;
                            // Valores de 'xp' y 'yp'.
                            private float mXp, mYp;
                            // Intervalos de la función (Dominio-x).
                            private float I1, I2;
                    
                            #endregion
                    
                            #region Constructors of the class
                            ///<summary>
                            /// Constructor Functions.
                            ///</summary>
                    
                            // Constructor sin parámetros.        
                            public CLine()
                            {            
                                mX = 0.0f; mY = 0.0f; mXp = 0.0f; mYp = 0.0f;
                            }
                    
                            #endregion
                    
                            #region Methods of the class
                            ///<summary>
                            /// Funciones Miembro (Métodos).
                            ///</summary>
                    
                            //Función para evaluar una función lineal.        
                            public void EvaluateFunction(float m, float X1, float Y1,
                                                         float xCenter, float yCenter)
                            {
                                float i; // Contador para controlar el valor de x de la función.
                                int j;   // Contador para controlar el arreglo de puntos.  
                                // Dominio (x) de la función D:[-10, 10]
                                // Tamaño de paso o delta x: h = 1           
                                I1 = -30; I2 = 30;
                                for (i = I1, j = 0; i <= I2; i++, j++)
                                {
                                    // Tabla de valores del mundo real.
                                    mX = i;
                                    mY = m * (mX - X1) + Y1;
                                    // Tabla de valores del mundo de la computación gráfica.
                                    mXp = (float)(mX * SF + xCenter);
                                    mYp = (float)((-1) * mY * SF + yCenter);
                                    // Arreglo de puntos de  tipo flotante.
                                    mP[j] = new PointF(mXp, mYp);
                                }
                            }
                    
                            // Función para graficar la curva.
                            public void PlotLine(PictureBox picCanvas, Color color, float m, 
                                                 float X1, float Y1, float xCenter, float yCenter)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                ObjPen = new Pen(color, 3);
                    
                                mP = new PointF[61];
                    
                                EvaluateFunction(m, X1, Y1, xCenter, yCenter);
                    
                                mGraph.DrawCurve(ObjPen, mP);
                            }
                    
                            // Función para inicializar los datos miembro de la clase.
                            public void InitializeData()
                            {
                                mX = 0.0f; mY = 0.0f; mXp = 0.0f; mYp = 0.0f;
                            }
                    
                            #endregion
                        }
                    }                    
                    `
                },
                {
                    problema:'La implementación de la clase frmTriangle, se presenta a continuación en la Tabla 1.1.4, que es la clase que representa a la interfaz gráfica de usuario del triángulo, sus líneas y puntos notables.',
                    tablaN:'Tabla 1.1.4. ',
                    tablaDescrip:'Código de la clase frmTriangle del programa.',
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
                                // Inicialización de los valores del centro del lienzo.
                                // Llamada a la función InitializeData.
                                ObjCTriangle.InitializeData(picCanvas);
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
                                    // Borrar el lienzo o canvas.
                                    picCanvas.Refresh();
                                    // Cálculo del perímetro de un triángulo.
                                    // Llamada a la función PerimeterTriangle.
                                    ObjCTriangle.PerimeterTriangle();
                                    // Cálculo del área de un triángulo.
                                    // Llamada a la función AreaTriangle.
                                    ObjCTriangle.AreaTriangle();
                                    // Impresión de datos.
                                    // Llamada a la función PrintData.
                                    ObjCTriangle.PrintData(txtPerimeter, txtArea);
                                    // Graficación de los ejes coordenados.
                                    // Llamada a la función PlotAxis.
                                    ObjCTriangle.PlotAxis(picCanvas);
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
                    
                            private void btnMedians_Click(object sender, EventArgs e)
                            {
                                // Borrar el lienzo o canvas.
                                picCanvas.Refresh();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                ObjCTriangle.PlotAxis(picCanvas);
                                // Graficación de un triángulo.
                                // Llamada a la función PlotShape.
                                ObjCTriangle.PlotShape(picCanvas);
                                // Graficación de las medianas de un triángulo.
                                // Llamada a la función PlotMedians.
                                ObjCTriangle.PlotMedians(picCanvas);
                            }
                    
                            private void btnPerpendicularBisectors_Click(object sender, EventArgs e)
                            {
                                // Borrar el lienzo o canvas.
                                picCanvas.Refresh();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                ObjCTriangle.PlotAxis(picCanvas);
                                // Graficación de un triángulo.
                                // Llamada a la función PlotShape.
                                ObjCTriangle.PlotShape(picCanvas);
                                // Graficación de las mediatrices de un triángulo.
                                // Llamada a la función PlotPerpendicularBisectors.
                                ObjCTriangle.PlotPerpendicularBisectors(picCanvas);
                            }
                    
                            private void btnAltitudes_Click(object sender, EventArgs e)
                            {
                                // Borrar el lienzo o canvas.
                                picCanvas.Refresh();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                ObjCTriangle.PlotAxis(picCanvas);
                                // Graficación de un triángulo.
                                // Llamada a la función PlotShape.
                                ObjCTriangle.PlotShape(picCanvas);
                                // Graficación de las alturas de un triángulo.
                                // Llamada a la función PlotAltitudes.
                                ObjCTriangle.PlotAltitudes(picCanvas);
                            }
                    
                            private void btnBisectors_Click(object sender, EventArgs e)
                            {
                                // Borrar el lienzo o canvas.
                                picCanvas.Refresh();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                ObjCTriangle.PlotAxis(picCanvas);            
                                // Graficación de las bisectrices y de los círculos 
                                // exinscritos e inscrito de un triángulo.
                                // Llamada a la función PlotBisectors.
                                ObjCTriangle.PlotBisectors(picCanvas);
                                // Graficación de un triángulo.
                                // Llamada a la función PlotShape.
                                ObjCTriangle.PlotShape(picCanvas);
                            }
                    
                            private void btnEulersLine_Click(object sender, EventArgs e)
                            {
                                // Borrar el lienzo o canvas.
                                picCanvas.Refresh();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                ObjCTriangle.PlotAxis(picCanvas);
                                // Graficación de un triángulo.
                                // Llamada a la función PlotShape.
                                ObjCTriangle.PlotShape(picCanvas);
                                // Graficación de dos medianas de un triángulo.
                                // Llamada a la función PlotTwoMedians.
                                ObjCTriangle.PlotTwoMedians(picCanvas);
                                // Graficación de dos mediatrices de un triángulo.
                                // Llamada a la función PlotTwoPerpendicularBisectors.
                                ObjCTriangle.PlotTwoPerpendicularBisectors(picCanvas);
                                // Graficación de dos alturas de un triángulo.
                                // Llamada a la función PlotTwoAltitudes.
                                ObjCTriangle.PlotTwoAltitudes(picCanvas);
                                // Graficación de recta de Euler.
                                // Llamada a la función PlotEulersLine.
                                ObjCTriangle.PlotEulersLine(picCanvas);
                            }
                        }
                    }                    
                    `
                } 
            ]
         },
          E:{
            subtitulo:'E)	Pruebas de la Aplicación',
            listaPrueba:[
              {
              problema:'A continuación, en la Figura 2.1.9, se muestra un ejemplo de la corrida del programa, donde se calcula el perímetro y el área de un triángulo ABC y además se grafica la figura en el primer cuadrante:',
              fotoPath:'./assets/images/Capitulos/II/media/7.png',
              fotoN:'Figura 2.1.9. ',
              fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 2.1.10, se muestra un ejemplo de la corrida del programa, donde se presentan las medianas y el baricentro de un triángulo ABC:',
                fotoPath:'./assets/images/Capitulos/II/media/8.png',
                fotoN:'Figura 2.1.10.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 2.1.11, se muestra un ejemplo de la corrida del programa, donde se presentan las mediatrices y el circuncentro de un triángulo ABC:',
                fotoPath:'./assets/images/Capitulos/II/media/9.png',
                fotoN:'Figura 2.1.11.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 2.1.13, se muestra un ejemplo de la corrida del programa, donde se presentan las alturas de un triángulo ABC, el triángulo órtico y su círculo inscrito:',
                fotoPath:'./assets/images/Capitulos/II/media/10.png',
                fotoN:'Figura 2.1.13. ',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 2.1.14, se muestra un ejemplo de la corrida del programa, donde se presentan las bisectrices de un triángulo ABC, el círculo inscrito, los círculos exinscritos y el triángulo que une los centros de los círculos exinscritos:',
                fotoPath:'./assets/images/Capitulos/II/media/11.png',
                fotoN:'Figura 2.1.14.  ',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 2.1.15, se muestra un ejemplo de la corrida del programa, donde se presentan dos medianas, dos mediatrices, dos alturas y la Recta de Euler que pasa por el baricentro, el circuncentro y el ortocentro de un triángulo ABC:',
                fotoPath:'./assets/images/Capitulos/II/media/12.png',
                fotoN:'Figura 2.1.15',
                fotoDescrip:' Corrida del programa'
              }
            ]
          }
         },
         {
          link:'https://drive.google.com/uc?id=1rqz2QCg86nSAIM0XqNLV2Sd63zl6ZLBh&export=download',
          label: 'Pracnique 3.2', 
         tituloN:'Pracnique 3.2: ',
         titulo:'Operaciones entre Vectores 2D',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar vectores 2D y realizar diferentes operaciones entre ellos.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional aplicada, translación lineal, vectores 2D, GUIs, clases y objetos.'},
            {titulo:'Nivel de experiencia:',descrip:'Intermedio'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Escribir un programa para realizar diferentes operaciones entre vectores 2D como: a) Sumar dos Vectores; b) Restar dos Vectores; c) Proyección de un Vector sobre otro; d) Vector Perpendicular. Además, se deben graficar los vectores de las diferentes operaciones realizadas entre ellos. En la Figura 3.2.1, se muestra la representación del vector V en el plano 2D.',
             fotoPath:'./assets/images/Capitulos/II/media/cap2i1.png',
             fotoN:'Figura 3.2.1. ',
             fotoDescrip:'Vector V en el plano 2D.'
            },
         B:{
             subtitulo:'B)	Geometría Vectorial',
             pasosB:[
               {
                subtitulo2:'B.1.) Suma de Vectores',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 2D en el plano, calcular y graficar el vector resultante de la suma entre ellos. Utilizar el método del paralelogramo para realizar la representación gráfica de los tres vectores 2D en el plano.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el plano:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i2.png',    
                  },
                  {
                    parrafo:'La suma entre los vectores A y B se obtiene utilizando la ecuación (54) de la sección 2.1.2.13:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i3.png',    
                  },
                  {
                    parrafo:'En la representación gráfica de la Suma de dos Vectores, se forma un paralelogramo, donde el Vector $\\overrightarrow{C}$ es el Vector Resultante $\\overrightarrow{R}$. La Figura 3.2.2 muestra estos vectores en el plano del mundo real.',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i4.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos vectores en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i5.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i6.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i7.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de los vértices de los extremos de los vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i8.png',    
                  },
                  {
                    parrafo:'Entonces los valores de los vértices de los extremos de los vectores en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i9.png',    
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.3:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i10.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.2.) Resta de Vectores',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 2D en el plano, calcular y graficar el vector resultante de la resta entre ellos. Utilizar el método del paralelogramo para realizar la representación gráfica de los tres vectores 2D en el plano.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el plano:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i11.png',    
                  },
                  {
                    parrafo:'La resta entre los vectores A y B se obtiene utilizando la ecuación (58) de la sección 2.1.2.13:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i12.png',    
                  },
                  {
                    parrafo:'En la representación gráfica de la Resta de dos Vectores, se forma un paralelogramo, donde el Vector \\overrightarrow{B} es opuesto al Vector \\overrightarrow{-B}, que es igual al Vector \\overrightarrow{D}, osea:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i13.png',    
                  },
                  {
                    parrafo:'La Figura 3.2.4 muestra estos vectores en el plano del mundo real.',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i14.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos vectores en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i15.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i16.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i17.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de los vértices de los extremos de los vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i18.png',    
                  },
                  {
                    parrafo:'Entonces los valores de los vértices de los extremos de los vectores en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos vectores A, -B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i19.png',    
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, -B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.5:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i20.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.3.) Proyección de un Vector sobre otro Vector',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 2D en el plano, calcular y graficar el vector proyección del Vector A sobre el Vector B y el Vector Perpendicular entre ellos. Utilizar las ecuaciones de la sección 3.1.2.19 y 3.1.2.20.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el plano:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i21.png',    
                  },
                  {
                    parrafo:'La proyección del vector A sobre el vector B se obtiene utilizando la ecuación (68) de la sección 3.1.2.19:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i22.png',    
                  },
                  {
                    parrafo:'Primero se calcula el módulo o magnitud del vector B con la ecuación (13) de la sección 3.1.2.4:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i23.png',    
                  },
                  {
                    parrafo:'Como segundo paso, se calcula el vector unitario o normalizado del vector B, utilizando la ecuación (26) de la sección 3.1.2.8:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i24.png',    
                  },
                  {
                    parrafo:'Como tercer paso, se calcula el producto punto entre el vector A con el vector unitario o normalizado del vector B:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i25.png',    
                  },
                  {
                    parrafo:'Finalmente, se calcula el producto entre un vector por un escalar, donde el vector representa al vector unitario de B y el escalar representa al producto punto calculado en el paso anterior:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i26.png',    
                  },
                  {
                    parrafo:'Entonces, el vector proyección de A sobre el vector B es el vector C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i27.png',    
                  },
                  {
                    parrafo:'La Figura 3.2.6 muestra la proyección del vector A sobre el vector B.'
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos vectores en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 3.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i28.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i29.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i30.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de los vértices de los extremos de los vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i31.png',    
                  },
                  {
                    parrafo:'Entonces los valores de los vértices de los extremos de los vectores en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i32.png',    
                  },
                  {
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i33.png',    
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.7:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i34.png',    
                  },
                  {
                    parrafo:'El vector perpendicular formado por la proyección del vector A sobre el vector B se obtiene utilizando la ecuación (71) de la sección 3.1.2.20:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i35.png',    
                  },
                  {
                    parrafo:'En esta ecuación se realiza una resta de vectores entre el vector A con el vector proyección de A sobre el vector B:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i36.png',    
                  },
                  {
                    parrafo:'Entonces, el vector perpendicular resultante es D:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i37.png',    
                  },
                  {
                    parrafo:'La Figura 3.2.8 muestra el vector perpendicular a otro vector.'
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos vectores en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 3.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i38.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i39.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i40.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de los vértices de los extremos de los vectores A, B, C y D:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i41.png',    
                  },
                  {
                    parrafo:'Entonces los valores de los vértices de los extremos de los vectores en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos vectores A, B y C:',
                    fotoPath:'./assets/images/Capitulos/II/media/cap2i42.png',    
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B, C y D en el mundo de la Computación Gráfica se muestra en la Figura 3.2.9.'
                  }
                ]
               }
             ]               
           },
         C:{
            subtitulo:'C)	Algoritmos',
            algoritmosC:[
                {
                    titulo:'3.2.1. Algoritmo de la Función ReadData()',
                    pasos:[
                      '1.	Leer el valor de la componente ‘X’ del vector 2D.',
                      '2.	Leer el valor de la componente ‘Y’ del vector 2D.'  
                    ]
                },
                {
                    titulo:'3.2.2. Algoritmo de la Función PrintData()',
                    pasos:[
                        '1.	Imprimir el valor de la componente ‘X’ y de la componente ‘Y’ del vector 2D.'
                    ]
                },
                {
                    titulo:'3.2.3. Algoritmo de la Función Addition()',
                    pasos:[
                      '1.	Crear un objeto temporal de tipo CVector2D llamado Temp.',
                      '2.	Calcular la suma entre dos vectores.',
                      '2.1.	Asignar al campo mX del objeto Temp el resultado de la suma entre la componente ‘X’ del objeto U con la componente ‘X’ del objeto V.',
                      '2.2.	Asignar al campo mY del objeto Temp el resultado de la suma entre la componente ‘Y’ del objeto U con la componente ‘Y’ del objeto V.',
                      '3.	Retornar el valor del objeto Temp a la llamada de la función.'
                    ]
                },
                {
                    titulo:'3.2.4. Algoritmo de la Función Subtraction()',
                    pasos:[
                      '1.	Crear un objeto temporal de tipo CVector2D llamado Temp.',
                      '2.	Calcular la resta entre dos vectores.',
                      '2.1.	Asignar al campo mX del objeto Temp el resultado de la resta entre la componente ‘X’ del objeto U con la componente ‘X’ del objeto V.',
                      '2.2.	Asignar al campo mY del objeto Temp el resultado de la resta entre la componente ‘Y’ del objeto U con la componente ‘Y’ del objeto V.',
                      '3.	Retornar el valor del objeto Temp a la llamada de la función.'
                    ]
                },
                {
                    titulo:'3.2.5. Algoritmo de la Función InitializeData()',
                    pasos:[
                      '1.	Borrar el contenido del objeto picCanvas que representa al lienzo de dibujo.',
                      '2.	Obtener el valor del ancho y del largo del lienzo (picCanvas).',
                      '2.1.	Crear un objeto de tipo Rectangle.',
                      '2.2.	Asignar a la componente X del rectángulo el valor del ancho del lienzo.',
                      '2.3.	Asignar a la componente Y del rectángulo el valor del largo del lienzo.',
                      '3.	Calcular el valor máximo de la resolución de X y de Y del lienzo.',
                      '3.1.	Asignar al valor máximo de la resolución de X representado por la variable maxX, el valor de la componente X del rectángulo disminuida en uno.',
                      '3.2.	Asignar al valor máximo de la resolución de Y representado por la variable maxY, el valor de la componente Y del rectángulo disminuida en uno.',
                      '4.	Calcular el centro del lienzo (picCanvas).',
                      '4.1.	Asignar a la variable ‘x’ del centro trasladado cuyo nombre es xCenter el valor de la división entre el valor máximo de la resolución de X con el valor de dos.',
                      '4.2.	Asignar a la variable ‘y’ del centro trasladado cuyo nombre es yCenter el valor de la división entre el valor máximo de la resolución de Y con el valor de dos.'
                    ]
                },
                {
                    titulo:'3.2.6. Algoritmo de la Función PlotAxis()',
                    pasos:[
                      '1.	Dibujar el eje horizontal (x).',
                      '1.1.	Asignar a la componente X del punto P1 el valor de cero.',
                      '1.2.	Asignar a la componente Y del punto P1 el valor de yCenter.',
                      '1.3.	Asignar a la componente X del punto P2 el valor de maxX.',
                      '1.4.	Asignar a la componente Y del punto P2 el valor de yCenter.',
                      '1.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice P1 con el vértice P2.',
                      '2.	Dibujar el eje vertical (y).',
                      '2.1.	Asignar a la componente X del punto P1 el valor de xCenter.',
                      '2.2.	Asignar a la componente Y del punto P1 el valor de cero.',
                      '2.3.	Asignar a la componente X del punto P2 el valor de xCenter.',
                      '2.4.	Asignar a la componente Y del punto P2 el valor de maxY.',
                      '2.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice P1 con el vértice P2.'
                    ]
                },
                {
                    titulo:'3.2.7. Algoritmo de la Función VectorToPointF()',
                    pasos:[
                      '1.	Retornar un objeto de tipo pointF con la conversión de coordenadas del mundo real a coordenadas por pantalla.',
                      '1.1.	Asignar al campo ‘X’ de la estructura PointF el valor calculado con la ecuación (3) de la sección 3.1.1.2 referente a la traslación de un punto.',
                      '1.2.	Asignar al campo ‘Y’ de la estructura PointF el valor calculado con la ecuación (4 de la sección 3.1.1.2 referente a la traslación de un punto.'
                    ]
                },
                {
                    titulo:'3.2.8. Algoritmo de la Función DrawVector(), con un objeto de tipo CVector2D como parámetro',
                    pasos:[
                      '1.	Asignar al objeto mGraph la funcionalidad de crear gráficos del pictureBox llamado picCanvas.',
                      '2.	Creación de un esferográfico o pluma de dibujo de un color establecido en el parámetro de la función.',
                      '2.1.	Setear el esferográfico o pluma con un ancla redonda al inicio del dibujo de una línea.',
                      '2.2.	Setear el esferográfico o pluma con un ancla de flecha al final del dibujo de una línea.',
                      '3.	Llamada a la función VectorToPointF, enviando al parámetro de la función un vértice con las coordenadas del mundo real que va a ser convertido a un vértice con coordenadas por pantalla, cuyo valor de retorno se asigna al objeto origin de tipo PointF.',
                      '4.	Llamada a la función VectorToPointF, enviando al parámetro de la función un vértice con las coordenadas del mundo real que va a ser convertido a un vértice con coordenadas por pantalla, cuyo valor de retorno se asigna al objeto end de tipo PointF.',
                      '5.	Bibujar una línea entre un punto inicial (origin) y un punto final (end).',
                      '5.1.	 Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice origin con el vértice end.'
                    ]
                },
                {
                    titulo:'3.2.9. Algoritmo de la Función DrawVector(), con dos objetos de tipo CVector2D como parámetros',
                    pasos:[
                      '1.	Crear un arreglo de flotantes para almacenar un patrón de puntos y líneas entrecortadas.',
                      '2.	Asignar al objeto mGraph la funcionalidad de crear gráficos del pictureBox llamado picCanvas.',
                      '3.	Creación de un esferográfico o pluma de dibujo de un color establecido en el parámetro de la función.',
                      '3.1.	Setear el esferográfico o pluma con un patrón de puntos y líneas entrecortadas, utilizando un arreglo.',
                      '4.	Llamada a la función VectorToPointF, enviando al parámetro de la función un vértice con las coordenadas del mundo real que va a ser convertido a un vértice con coordenadas por pantalla, cuyo valor de retorno se asigna al objeto origin de tipo PointF.',
                      '5.	Llamada a la función VectorToPointF, enviando al parámetro de la función un vértice con las coordenadas del mundo real que va a ser convertido a un vértice con coordenadas por pantalla, cuyo valor de retorno se asigna al objeto end de tipo PointF.',
                      '6.	Bibujar una línea entre un punto inicial (origin) y un punto final (end).',
                      '6.1.	 Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice origin con el vértice end.'
                    ]
                },
                {
                    titulo:'3.2.10. Algoritmo de la Función Magnitude()',
                    pasos:[
                      '1.	Retornar un valor que corresponde al módulo de un vector 2D en base a la ecuación (13) de la sección 3.1.2.4.'
                    ]
                },
                {
                    titulo:'3.2.11. Algoritmo de la Función Normalize()',
                    pasos:[
                      '1.	Retornar un valor que corresponde al vector unitario o normalizado de un vector 2D en base a la ecuación (26) de la sección 3.1.2.8.'
                    ]
                },
                {
                    titulo:'3.2.12. Algoritmo de la Función DotProduct (), con dos objetos de tipo CVector2D como parámetros',
                    pasos:[
                      '1.	Retornar un valor que corresponde al producto punto entre dos vectores en base a la ecuación (63) de la sección 3.1.2.16.'
                    ]
                },
                {
                    titulo:'3.2.13. Algoritmo de la Función VectorEscalarProduct(), con un objeto de tipo CVector2D y una variable de tipo flotante como parámetros.',
                    pasos:[
                      '1.	Crear un objeto temporal de tipo CVector2D llamado Temp.',
                      '2.	Calcular la multiplicación entre un vector por un escalar.',
                      '2.1.	Asignar al campo mX del objeto Temp el resultado de la multiplicación entre la componente ‘X’ del objeto V con un valor escalar.',
                      '2.2.	Asignar al campo mY del objeto Temp el resultado de la multiplicación entre la componente ‘Y’ del objeto V con un valor escalar.',
                      '3.	Retornar el valor del objeto Temp a la llamada de la función.'
                    ]
                },
                {
                    titulo:'3.2.14. Algoritmo de la Función Projection(), con dos objetos de tipo CVector2D como parámetros',
                    pasos:[
                      '1.	Crear un objeto temporal de tipo CVector2D llamado Proj.',
                      '2.	Crear otro objeto temporal de tipo CVector2D llamado Nv.',
                      '3.	Declarar una variable llamada escalar de tipo flotante.',
                      '4.	Asignar al vector Nv el valor de retorno de la función Normalize invocada por el objeto V, para calcular el vector unitario del vector V.',
                      '5.	Asignar a la variable escalar el valor de retorno de la función VectorEscalarProduct, para calcular el producto punto entre el vector U y el vector unitario de V, es decir, Nv.',
                      '6.	Asignar al vector Proj el valor de retorno de la función VectorEscalarProduct, para calcular el producto de un vector por un escalar, representado por el vector Nv y la variable escalar.',
                      '7.	Retornar el valor del objeto Proj a la llamada de la función.'
                    ]
                },
                {
                    titulo:'3.2.15. Algoritmo de la Función Perpendicular(), con dos objetos de tipo CVector2D como parámetros',
                    pasos:[
                      '1.	Crear un objeto temporal de tipo CVector2D llamado W.',
                      '2.	Asignar al vector W el valor de retorno de la función Subtraction invocada por el objeto W, para calcular la resta de vectores entre el vector U y V.',
                      '3.	Retornar el valor del objeto W a la llamada de la función.'
                    ]
                }
            ]
         },
         D:{
            subtitulo:'D)	Código de la Aplicación',
            listaCodigo:[
                {
                    problema:'La implementación de la clase CVector2D, se presenta a continuación en la Tabla 3.2.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 3.2.1. ',
                    tablaDescrip:'Código de la clase CVector2D del programa.',
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
                    using System.Drawing;
                    using System.Drawing.Drawing2D;
                    using System.Windows.Forms;

                    namespace WinAppVectors2D
                    {
                        class CVector2D
                        {
                            #region Atributes of the class        
                            /// <summary>
                            /// Member Data
                            /// </summary>

                            // Componente 'X' del Vector 2D.
                            private float mX;
                            // Componente 'Y' del Vector 2D.
                            private float mY;
                            // Objeto que activa el modo gráfico.
                            private Graphics mGraph;
                            // Objeto bolígrafo que dibuja o escribe en un lienzo o canvas (PictureBox).
                            private Pen mPen;
                            // Constante scale factor (Zoom In/Zoom Out).
                            private const float SF = 20;
                            // Objeto que permite obtener el tamaño de un lienzo o canvas (PictureBox).
                            private Rectangle d;
                            // Dato que representa al valor máximo en el eje de las abcisas (x) del lienzo.
                            private int maxX;
                            // Dato que representa al valor máximo en el eje de las ordenadas (y) del lienzo.
                            private int maxY;
                            // Dato que representa al valor de x del centro del lienzo.
                            private int xCenter;
                            // Dato que representa al valor de y del centro del lienzo.
                            private int yCenter;
                            // Objeto Punto que representa a un punto cualquiera P1.
                            private PointF P1;        
                            // Objeto Punto que representa a un punto cualquiera P2.
                            private PointF P2;

                            #endregion

                            #region Properties
                            ///<summary>
                            /// Getters and Setters.
                            ///</summary>

                            // Descriptores de acceso get/set de la Componente X del Vector 2D.
                            public float X
                            {
                                get { return mX; }
                                set { mX = value; }
                            }

                            // Descriptores de acceso get/set de la Componente Y del Vector 2D.
                            public float Y
                            {
                                get { return mY; }
                                set { mY = value; }
                            }

                            #endregion

                            #region Constructors of the class
                            ///<summary>
                            /// Constructor Functions.
                            ///</summary>
                            
                            // Constructor sin parámetros.
                            public CVector2D()
                            {
                                mX = 0.0f; mY = 0.0f;
                            }        

                            // Constructor con dos parámetros.
                            public CVector2D(float x, float y)
                            {            
                                mX = x; mY = y;
                            }       

                            // Constructor copia.
                            public CVector2D(CVector2D V)
                            {           
                                mX = V.X; mY = V.Y;            
                            }

                            #endregion

                            #region Methods of the class
                            ///<summary>
                            /// Funciones Miembro (Métodos).
                            ///</summary>

                            // Función que lee las componentes 'X' e 'Y' del vector 2D.
                            public void ReadData(NumericUpDown nudXVectorV, 
                                                NumericUpDown nudYVectorV)
                            {            
                                mX = (float)(nudXVectorV.Value);
                                mY = (float)(nudYVectorV.Value);
                            }

                            // Función que imprime las componentes 'X' e 'Y' del vector 2D.
                            public void PrintData(TextBox txtXVectorV, TextBox txtYVectorV)
                            {            
                                txtXVectorV.Text = mX.ToString();            
                                txtYVectorV.Text = mY.ToString();
                            }

                            // Función que suma dos vectores, utilizando dos parámetros
                            // que representan a los dos vectores.
                            public CVector2D Addition(CVector2D U, CVector2D V)
                            {
                                CVector2D Temp = new CVector2D();

                                Temp.mX = U.mX + V.mX;
                                Temp.mY = U.mY + V.mY;

                                return (Temp);
                            }

                            // Función optimizada que suma dos vectores, utilizando un parámetro,
                            // donde uno de los vectores se representa por el objeto this.
                            public CVector2D Addition(CVector2D V)
                            {
                                return (new CVector2D(mX + V.mX, mY + V.mY));
                            }

                            // Función que resta dos vectores, utilizando dos parámetros
                            // que representan a los dos vectores.
                            public CVector2D Subtraction(CVector2D U, CVector2D V)
                            {
                                CVector2D Temp = new CVector2D();

                                Temp.mX = U.mX - V.mX;
                                Temp.mY = U.mY - V.mY;

                                return (Temp);
                            }


                            // Función optimizada que resta dos vectores, utilizando un parámetro,
                            // donde uno de los vectores se representa por el objeto this.
                            public CVector2D Subtraction(CVector2D V)
                            {
                                return (new CVector2D(mX - V.mX, mY - V.mY));
                            }

                            // Función que inicializa los valores del centro del lienzo o canvas. 
                            public void InitializeData(PictureBox picCanvas)
                            {
                                picCanvas.Refresh();

                                d = new Rectangle();
                                d.X = picCanvas.Width;
                                d.Y = picCanvas.Height;

                                maxX = d.X - 1; maxY = d.Y - 1;
                                xCenter = maxX / 2; yCenter = maxY / 2;            
                            }

                            // Función que grafica los ejes coordenados 'x' e 'y'.
                            public void PlotAxis(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Black);

                                // Dibujar el eje horizontal (x).
                                P1.X = 0; P1.Y = yCenter;
                                P2.X = maxX; P2.Y = yCenter;
                                mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);

                                // Dibujar el eje vertical (y).            
                                P1.X = xCenter; P1.Y = 0;
                                P2.X = xCenter; P2.Y = maxY;

                                mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);
                            }
                                                
                            // Función que convierte un punto del mundo real a un punto de coordenadas en
                            // pantalla (mundo de la Computación Gráfica), utilizando un parámetro.
                            public PointF VectorToPointF(CVector2D V)
                            {
                                return new PointF((float)V.X * SF + xCenter, (-1) * (float)V.Y * SF + yCenter);
                            }

                            // Función que grafica un vector definido con un color específico, que tiene
                            // como parámetros el vector y el color del mismo.
                            public void DrawVector(CVector2D V, Color color, PictureBox picCanvas)
                            {            
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(color, 4);
                                mPen.StartCap = LineCap.RoundAnchor;
                                mPen.EndCap = LineCap.ArrowAnchor; 
                                
                                PointF origin = VectorToPointF(new CVector2D(0, 0));            
                                PointF end = VectorToPointF(V);

                                mGraph.DrawLine(mPen, origin, end);
                            }

                            // Función que grafica un vector definido con un color específico, que tiene
                            // como parámetros el color del vector. 
                            public void DrawVector(Color color, PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(color, 4);
                                mPen.StartCap = LineCap.RoundAnchor;
                                mPen.EndCap = LineCap.ArrowAnchor;            
                                
                                PointF origin = VectorToPointF(new CVector2D(0, 0));            
                                PointF end = VectorToPointF(this);

                                mGraph.DrawLine(mPen, origin, end);
                            }

                            // Función que grafica un vector auxiliar con un color específico en base
                            // a otros dos vectores.
                            public void DrawVector(CVector2D U, CVector2D V, Color color, PictureBox picCanvas)
                            {
                                float[] dashValues = { 2,1,2,1 };
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(color, 4);
                                mPen.DashPattern = dashValues;            

                                PointF origin = VectorToPointF(U);
                                PointF end = VectorToPointF(V);
                                mGraph.DrawLine(mPen, origin, end);            
                            }       

                            // Función que calcula el módulo o la magnitud de un vector 2D.
                            public float Magnitude()
                            {
                                return ((float)Math.Sqrt(mX * mX + mY * mY));
                            }

                            // Función que calcula el vector unitario o normalizado de un vector 2D.
                            public CVector2D Normalize()
                            {
                                return (new CVector2D(mX / Magnitude(), mY / Magnitude()));
                            }

                            // Función que calcula el Producto Punto entre dos vectores, 
                            // utilizando dos parámetros.
                            public float DotProduct(CVector2D U, CVector2D V)
                            {
                                return (U.mX * V.mX + U.mY * V.mY);
                            }

                            // Función que calcula el Producto Punto entre dos vectores, 
                            // utilizando un parámetro.
                            public float DotProduct(CVector2D V)
                            {
                                return (mX * V.mX + mY * V.mY);
                            }

                            // Función que calcula el producto entre un vector y un escalar,
                            // utilizando dos parámetros.
                            public CVector2D VectorEscalarProduct(CVector2D V, float escalar)
                            {
                                CVector2D Temp = new CVector2D();

                                Temp.mX = V.mX * escalar;
                                Temp.mY = V.mY * escalar;

                                return (Temp);
                            }

                            // Función que calcula el producto entre un vector y un escalar,
                            // utilizando un parámetro y el objeto this.
                            public CVector2D VectorEscalarProduct(float escalar)
                            {            
                                return (new CVector2D(mX * escalar, mY * escalar));            
                            }

                            // Función que calcula el vector Proyección de un vector sobre otro,
                            // utilizando dos parámetros.
                            public CVector2D Projection(CVector2D U, CVector2D V)
                            {            
                                CVector2D Proj = new CVector2D();
                                CVector2D Nv = new CVector2D();
                                float escalar;

                                Nv = V.Normalize();
                                escalar = DotProduct(U, Nv);            
                                Proj = VectorEscalarProduct(Nv, escalar);            

                                return (Proj);
                            }

                            // Función que calcula el vector Proyección de un vector sobre otro,
                            // utilizando un parámetro y el objeto this.
                            public CVector2D Projection(CVector2D V)
                            {            
                                CVector2D Nv = new CVector2D(V.Normalize());
                                float escalar = this.DotProduct(Nv);
                                //float escalar = DotProduct(Nv);
                                return (new CVector2D(Nv.VectorEscalarProduct(escalar)));
                            }
                            // Función que calcula el vector perpendicular o vector ortogonal
                            // a otro vector, utilizando dos parámetros.
                            public CVector2D Perpendicular(CVector2D U, CVector2D V)
                            {
                                CVector2D W = new CVector2D();
                                W = W.Subtraction(U, V);
                                return (W);
                            }

                            // Función que calcula el vector perpendicular o vector ortogonal
                            // a otro vector, utilizando un parámetro y el objeto this.
                            public CVector2D Perpendicular(CVector2D V)
                            {
                                return (new CVector2D(this.Subtraction(V)));         
                            }

                            #endregion
                        }
                    }

                    `
                },
                {
                    problema:'La implementación de la clase frmVectors2D, se presenta a continuación en la Tabla 3.2.2, que es la clase que representa a la interfaz gráfica de usuario de los vectores en 2D.',
                    tablaN:'Tabla 3.2.2. ',
                    tablaDescrip:'Código de la clase frmVectors2D del programa.',
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
                    using System.ComponentModel;
                    using System.Data;
                    using System.Drawing;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using System.Windows.Forms;

                    namespace WinAppVectors2D
                    {
                        public partial class frmVectors2D : Form
                        {
                            // Definición de cuatro objetos de tipo CVector2D.        
                            CVector2D A = new CVector2D();
                            CVector2D B = new CVector2D();
                            CVector2D C = new CVector2D();
                            CVector2D D = new CVector2D();        

                            // Constructor del formulario frmVector2D.
                            public frmVectors2D()
                            {
                                InitializeComponent();
                            }

                            // Función que inicializa los datos de graficación de
                            // los cuatro objetos de tipo CVector2D.
                            private void InitializeData()
                            {
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Inicialización de los datos de graficación del objeto D.
                                // Llamada a la función InitializeData.
                                D.InitializeData(picCanvas);
                            }

                            // Función de carga del formulario frmVectors2D.
                            private void frmVectors2D_Load(object sender, EventArgs e)
                            {
                                // Llamada a la función InitializeData.
                                InitializeData();
                            }

                            // Función del evento Click del botón btnAddition.
                            private void btnAddition_Click(object sender, EventArgs e)
                            {
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A y B.
                                A.ReadData(nudXVectorA, nudYVectorA);
                                B.ReadData(nudXVectorB, nudYVectorB);
                                // Cálculo de la suma de dos vectores.
                                // Llamada a la función Addition.
                                C = A.Addition(B);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC);            
                                // Llamada a la función InitializeData.
                                InitializeData();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                C.PlotAxis(picCanvas);
                                // Graficación del vector A.
                                // Llamada a la función DrawVector.
                                A.DrawVector(A, Color.Red, picCanvas);
                                // Graficación del vector B.
                                // Llamada a la función DrawVector.
                                B.DrawVector(B, Color.Blue, picCanvas);
                                // Graficación del vector C.
                                // Llamada a la función DrawVector.
                                C.DrawVector(C, Color.Green, picCanvas);
                                // Graficación del vector A' (auxiliar).
                                // Llamada a la función DrawVector.
                                A.DrawVector(B, C, Color.Red, picCanvas);
                                // Graficación del vector B' (auxiliar).
                                // Llamada a la función DrawVector.
                                B.DrawVector(A, C, Color.Blue, picCanvas);
                            }

                            // Función del evento Click del botón btnSubtraction.
                            private void btnSubtraction_Click(object sender, EventArgs e)
                            {
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A y B.
                                A.ReadData(nudXVectorA, nudYVectorA);
                                B.ReadData(nudXVectorB, nudYVectorB);
                                // Cálculo de la resta de dos vectores.
                                // Llamada a la función Subtraction.
                                C = A.Subtraction(B);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC);
                                // Llamada a la función InitializeData.
                                InitializeData();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                C.PlotAxis(picCanvas);
                                // Graficación del vector A.
                                // Llamada a la función DrawVector.
                                A.DrawVector(A, Color.Red, picCanvas);
                                // Obtentión del vector -B.
                                // Llamada a las propiedades (get/set) de la clase CVector2D.
                                B.X = B.X * (-1.0f); B.Y = B.Y * (-1.0f);
                                // Graficación del vector -B.
                                // Llamada a la función DrawVector.
                                B.DrawVector(B, Color.Blue, picCanvas);
                                // Graficación del vector C.
                                // Llamada a la función DrawVector.
                                C.DrawVector(C, Color.Green, picCanvas);
                                // Graficación del vector A' (auxiliar).
                                // Llamada a la función DrawVector.
                                A.DrawVector(B, C, Color.Red, picCanvas);
                                // Graficación del vector B' (auxiliar).
                                // Llamada a la función DrawVector.
                                B.DrawVector(A, C, Color.Blue, picCanvas);
                            }

                            // Función del evento Click del botón btnProjection.
                            private void btnProjection_Click(object sender, EventArgs e)
                            {
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A y B.
                                A.ReadData(nudXVectorA, nudYVectorA);
                                B.ReadData(nudXVectorB, nudYVectorB);
                                // Cálculo del vector proyección.
                                // Llamada a la función Projection.
                                C = C.Projection(A, B);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorPro, txtYVectorPro);
                                // Cálculo del vector perpendicular.
                                // Llamada a la función Perpendicular.
                                D = D.Perpendicular(A, C);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto D.
                                D.PrintData(txtXVectorPer, txtYVectorPer);            
                                // Llamada a la función InitializeData.
                                InitializeData();
                                // Graficación de los ejes coordenados.
                                // Llamada a la función PlotAxis.
                                C.PlotAxis(picCanvas);
                                // Graficación del vector A.
                                // Llamada a la función DrawVector.
                                A.DrawVector(A, Color.Red, picCanvas);
                                // Graficación del vector B.
                                // Llamada a la función DrawVector.
                                B.DrawVector(B, Color.Blue, picCanvas);
                                // Graficación del vector proyección.
                                // Llamada a la función DrawVector.            
                                C.DrawVector(C, Color.ForestGreen, picCanvas);
                                // Graficación del vector perpendicular.
                                // Llamada a la función DrawVector.
                                D.DrawVector(C, A, Color.BlueViolet, picCanvas);
                            }

                            // Función del evento Click del botón btnExit.
                            private void btnExit_Click(object sender, EventArgs e)
                            {
                                // Cierre de un formulario.
                                // Llamada a la función Close.
                                Close();
                            }
                        }
                    }

                    `
                } 
            ]
         },
          E:{
            subtitulo:'E)	Pruebas de la Aplicación',
            listaPrueba:[
              {
              problema:'A continuación, en la Figura 3.2.10, se muestra un ejemplo de la corrida del programa, donde se calcula la suma entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo:',
              fotoPath:'./assets/images/Capitulos/II/media/13.png',
              fotoN:'Figura 3.2.10. ',
              fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.2.11, se muestra un ejemplo de la corrida del programa, donde se calcula la resta entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo:',
                fotoPath:'./assets/images/Capitulos/II/media/14.png',
                fotoN:'Figura 3.2.11.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.2.12, se muestra un ejemplo de la corrida del programa, donde se calcula la proyección del vector A sobre B y el vector perpendicular a otro vector. Además, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos:',
                fotoPath:'./assets/images/Capitulos/II/media/15.png',
                fotoN:'Figura 3.2.12.',
                fotoDescrip:' Corrida del programa'
              }
            ]
          }
         },
         {
          link:'https://drive.google.com/uc?id=1qXzTyckEquZYTH26v_pTbBulHIqBKxd0&export=download',
          label: 'Pracnique 3.3', 
         tituloN:'Pracnique 3.3: ',
         titulo:'Operaciones entre Vectores 3D',
         sinopsisDescrip:'Este pracnique explora la creación de un programa de gráficos por computadora para graficar vectores 3D y realizar diferentes operaciones entre ellos.',
         sinopsis:[
            {titulo:'Lenguaje:',descrip:'C#'},
            {titulo:'Compilador:',descrip:'Visual Studio .NET'},
            {titulo:'Habilidades:',descrip:'Diseño de algoritmos, geometría computacional aplicada, translación lineal, vectores 3D, GUIs, clases y objetos.'},
            {titulo:'Nivel de experiencia:',descrip:'Avanzado'}
            ],
         A:{
             subtitulo:'A)	Descripción del Problema',
             problema:'Escribir un programa para realizar diferentes operaciones entre vectores 3D como: a) Sumar dos Vectores; b) Restar dos Vectores; c) Proyección de un Vector sobre otro; d) Vector Perpendicular. Además, se deben graficar los vectores de las diferentes operaciones realizadas entre ellos. En la Figura 3.2.1, se muestra la representación de la suma de dos vectores 3D en el espacio, aplicando el método del paralelogramo.',
             fotoPath:'./assets/images/Capitulos/II/media/+1.png',
             fotoN:'Figura 3.2.1. ',
             fotoDescrip:'Suma de dos vectores 3D en el espacio.'
            },
         B:{
             subtitulo:'B)	Geometría Vectorial',
             pasosB:[
              {
                subtitulo2:'B.1.) Inicialización del Punto Central',
                solucion:[                  
                  {
                    parrafo:'Dado el punto $O$ que representa al centro de los ejes coordenados de un plano en el mundo real:',
                    fotoPath:'./assets/images/Capitulos/II/media/+2.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas representado por un rectángulo de 400x300, donde el ancho (width) del rectángulo es igual a 400 y el largo (height) es igual a 300, entonces el punto $O$ se calcula diviendo para dos tanto el ancho como el largo del rectángulo:',
                    fotoPath:'./assets/images/Capitulos/II/media/+3.png',    
                  },
                  {
                    parrafo:'Estos valores permiten representar al punto $O$ como el nuevo centro trasladado en un sistema de coordenadas cartesianas en el plano, de acuerdo al mundo de la Computación Gráfica:',
                    fotoPath:'./assets/images/Capitulos/II/media/+4.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.1.) Graficación de un sistema de coordenadas cartesianas en el espacio',
                tituloproblema:'Problema:',
                parrafo:'Problema: Graficar un sistema de coordenadas cartesianas en el espacio formado por los siguientes elementos: a) tres ejes concurrentes en un punto O (origen de coordenadas); b) eje ‘x’; c) eje ‘y’; d) eje ‘z’, como se muestra en la Figura 3.2.2. ',
                fotoPath:'./assets/images/Capitulos/II/media/+5.png',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Para graficar un sistema de coordenadas cartesianas en el espacio, se va a utilizar una proyección isométrica, que es un dibujo tridimensional con los ejes inclinados formando un ángulo de 30° con la horizontal. (Ver Figura 3.2.3).',
                    fotoPath:'./assets/images/Capitulos/II/media/+6.png',    
                  },
                  {
                    parrafo:'Considerando este sistema de coordenadas cartesianas en el espacio, se construyen los tres ejes (x, y, z) y considerando el valor del ángulo central igual a 30°, se construye el triángulo rectángulo AGO, como se muestra en la Figura 3.2.4.',
                    fotoPath:'./assets/images/Capitulos/II/media/+7.png',    
                  },
                  {
                    parrafo:'Calculamos el valor del segmento ‘a’, sabiendo que el segmento ‘b’ es igual a 8u, en el triángulo rectángulo AGO:',
                    fotoPath:'./assets/images/Capitulos/II/media/+8.png',    
                  },
                  {
                    parrafo:'Luego obtenemos los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+9.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos puntos en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+10.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+11.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de las coordenadas de los puntos A, B, C y D:',
                    fotoPath:'./assets/images/Capitulos/II/media/#12.png',    
                  },
                  {
                    parrafo:'Entonces los valores de las coordenadas de los puntos en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos puntos A, B, C y D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+13.png',    
                  },
                  {
                    parrafo:'Finalmente se unen con una línea los puntos A y D y también se unen con una línea los puntos B y C, para obtener el sistema de coordenadas en el espacio de acuerdo al mundo de la Computación Gráfica, como se muestra en la Figura 3.2.5.',
                    fotoPath:'./assets/images/Capitulos/II/media/+14.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.2.) Graficación de un plano en el espacio',
                solucion:[                  
                  {
                    parrafo:'Para graficar un plano en el espacio de acuerdo a una proyección isométrica se debe considerar que la figura que representa al plano es un rombo ABCD cuyos cuatro lados son de igual longitud y dos de sus ángulos son menores que los otros dos.'
                  },
                  {
                    parrafo:'Para encontrar los vértices del rombo se divide esta figura en cuatro triángulos rectángulos congruentes, como se muestra en la Figura 3.2.4.',
                    fotoPath:'./assets/images/Capitulos/II/media/+15.png',    
                  },
                  {
                    parrafo:'Luego calculamos el valor del segmento ‘a’, sabiendo que el segmento ‘b’ es igual a 4u, en el triángulo rectángulo AOB:',
                    fotoPath:'./assets/images/Capitulos/II/media/+16.png',    
                  },
                  {
                    parrafo:'Luego obtenemos los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+17.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos puntos en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+18.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+19.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de las coordenadas de los puntos A, B, C y D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+20.png',    
                  },
                  {
                    parrafo:'Entonces los valores de las coordenadas de los puntos en el mundo de la Computación Gráfica se calculan de la siguiente manera, para obtener los nuevos puntos A, B, C y D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+21.png',    
                  },
                  {
                    parrafo:'Finalmente se unen con una línea: a) los puntos A y B; b) los puntos A y D; c) los puntos B y C; d) los puntos C y D; para obtener el plano en el espacio representado por el rombo ABCD de acuerdo al mundo de la Computación Gráfica, como se muestra en la Figura 3.2.5.',
                    fotoPath:'./assets/images/Capitulos/II/media/+22.png',    
                  },
                  {
                    parrafo:'Para dibujar los segmentos del rombo ABCD, se toma como base uno de sus rombos pequeños, como por ejemplo el rombo AIJK. Para encontrar los vértices del rombo pequeño AIJK, se divide esta figura en cuatro triángulos rectángulos congruentes, como se muestra en la Figura 3.2.4.',
                    fotoPath:'./assets/images/Capitulos/II/media/+23.png',    
                  },
                  {
                    parrafo:'Luego calculamos el valor del segmento ‘q’, sabiendo que el segmento ‘p’ es igual a 0.25u, en el triángulo rectángulo ALI:',
                    fotoPath:'./assets/images/Capitulos/II/media/+24.png',    
                  },
                  {
                    parrafo:'Con los valores de los segmentos a, b, p, q, que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+25.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los 15 puntos que forman parte del lado BA del rombo ABCD, utilizando las siguientes ecuaciones y el arreglo de puntos P[15], para almacenar los valores de las coordenadas:',
                    fotoPath:'./assets/images/Capitulos/II/media/+26.png',    
                  },
                  {
                    parrafo:'Luego, se calculan los valores de los 15 puntos que forman parte del lado DC del rombo ABCD, utilizando las siguientes ecuaciones y el arreglo de puntos Q[15], para almacenar los valores de las coordenadas:',
                    fotoPath:'./assets/images/Capitulos/II/media/+27.png',    
                  },
                  {
                    parrafo:'Con estas ecuaciones se obtienen los siguientes puntos que forman parte del arreglo de puntos P[15] y Q[15] del mundo real, que se muestra en la Figura 3.2.5.',
                    fotoPath:'./assets/images/Capitulos/II/media/+28.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos puntos en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+29.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+30.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de las coordenadas de los arreglos de puntos P[15] y Q[15] del mundo real, se obtienen dos nuevos arreglos de puntos P[15] y Q[15] del mundo de la Computación Gráfica, como se muestra en la Figura 3.2.6.',
                    fotoPath:'./assets/images/Capitulos/II/media/+31.png',    
                  },
                  {
                    parrafo:'Luego, se unen con líneas los arreglos de puntos P[15] y Q[15] del mundo de la Computación Gráfica. Para unir los puntos con líneas se sigue el siguiente procedimiento: a) El primer punto P[0] del arreglo de puntos se une con el último punto Q[14] del otro arreglo de puntos; b) El segundo punto P[1] del arreglo de puntos se une con el penúltimo punto Q[13] del otro arreglo de puntos; c) El tercer punto P[2] del arreglo de puntos se une con el antepenúltimo punto Q[12] del otro arreglo de puntos; d) Este procedimiento continúa hasta que el último punto P[14] del arreglo de puntos se une con el primer punto Q[0] del otro arreglo de puntos. '
                  },
                  {
                    parrafo:'El proceso de cálculo de los puntos del arreglo P[] que cruzan por el segmento BA sigue el siguiente principio: a) La coordenada \'x\' va desde la derecha hacia el centro; b) La coordenada \'y\' va desde abajo hacia arriba. (Ver Figura 3.2.7).'
                  },
                  {
                    parrafo:'El proceso de cálculo de los puntos del arreglo Q[] que cruzan por el segmento DC sigue el siguiente principio: a) La coordenada \'x\' va desde la izquierda hacia el centro; b) La coordenada \'y\' va desde arriba hacia abajo. (Ver Figura 3.2.7).'
                  },
                  {
                    parrafo:'Finalmente, se puede concluir que este primer grupo de 15 líneas graficadas en base a los puntos P[15] y Q[15], son paralelas entre sí y también son paralelas con los segmentos DA y CB del rombo ABCD, como se muestra en la Figura 3.2.7.     ',
                    fotoPath:'./assets/images/Capitulos/II/media/+32.png',    
                  },
                  {
                    parrafo:'Con los valores de los segmentos a, b, p, q, que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+33.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los 15 puntos que forman parte del lado DA del rombo ABCD, utilizando las siguientes ecuaciones y el arreglo de puntos P[15], para almacenar los valores de las coordenadas:',
                    fotoPath:'./assets/images/Capitulos/II/media/+34.png',    
                  },
                  {
                    parrafo:'Luego, se calculan los valores de los 15 puntos que forman parte del lado BC del rombo ABCD, utilizando las siguientes ecuaciones y el arreglo de puntos Q[15], para almacenar los valores de las coordenadas:',
                    fotoPath:'./assets/images/Capitulos/II/media/+35.png',    
                  },
                  {
                    parrafo:'Con estas ecuaciones se obtienen los siguientes puntos que forman parte del arreglo de puntos P[15] y Q[15] del mundo real, que se muestra en la Figura 3.2.5.',
                    fotoPath:'./assets/images/Capitulos/II/media/+36.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente estos puntos en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+37.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+38.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando los valores de las coordenadas de los arreglos de puntos P[15] y Q[15] del mundo real, se obtienen dos nuevos arreglos de puntos P[15] y Q[15] del mundo de la Computación Gráfica, como se muestra en la Figura 3.2.6.',
                    fotoPath:'./assets/images/Capitulos/II/media/+39.png',    
                  },
                  {
                    parrafo:'Luego, se unen con líneas los arreglos de puntos P[15] y Q[15] del mundo de la Computación Gráfica. Para unir los puntos con líneas se sigue el siguiente procedimiento: a) El primer punto P[0] del arreglo de puntos se une con el último punto Q[14] del otro arreglo de puntos; b) El segundo punto P[1] del arreglo de puntos se une con el penúltimo punto Q[13] del otro arreglo de puntos; c) El tercer punto P[2] del arreglo de puntos se une con el antepenúltimo punto Q[12] del otro arreglo de puntos; d) Este procedimiento continúa hasta que el último punto P[14] del arreglo de puntos se une con el primer punto Q[0] del otro arreglo de puntos. '
                  },
                  {
                    parrafo:'El proceso de cálculo de los puntos del arreglo P[] que cruzan por el segmento DA sigue el siguiente principio: a) La coordenada \'x\' va desde la izquierda hacia el centro; b) La coordenada \'y\' va desde abajo hacia arriba. (Ver Figura 3.2.7).'
                  },
                  {
                    parrafo:'El proceso de cálculo de los puntos del arreglo Q[] que cruzan por el segmento BC sigue el siguiente principio: a) La coordenada \'x\' va desde la derecha hacia el centro; b) La coordenada \'y\' va desde arriba hacia abajo. (Ver Figura 3.2.7).'
                  },
                  {
                    parrafo:'Finalmente, se puede concluir que este primer grupo de 15 líneas graficadas en base a los puntos P[15] y Q[15], son paralelas entre sí y también son paralelas con los segmentos DC y AB del rombo ABCD, como se muestra en la Figura 3.2.7.     ',
                    fotoPath:'./assets/images/Capitulos/II/media/+40.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.3.) Representación de un Vector en el Espacio dentro de una Caja',
                tituloproblema:'Problema:',
                parrafo:'Dado un vector 3D en el espacio, dibujar el vector y la caja que encierra al vector.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dado el siguiente vector en el espacio:',
                    fotoPath:'./assets/images/Capitulos/II/media/+41.png',    
                  },
                  {
                    parrafo:'Dado el punto $O$ que representa al centro de los ejes coordenados de un plano en el mundo real:',
                    fotoPath:'./assets/images/Capitulos/II/media/+42.png',    
                  },
                  {
                    parrafo:'Lo primero que se hace es cambiar la escala del vector V de 1u a 0.5 u, de acuerdo a los valores del plano, para lo cual se divide a cada una de las componentes del vector para dos y se obtienen las siguientes ecuaciones:',
                    fotoPath:'./assets/images/Capitulos/II/media/+43.png',    
                  },
                  {
                    parrafo:'Los segmentos ‘a’, ‘b’, ‘c’, representan a las componentes ‘x’, ‘y’, ‘z’ del vector V respectivamente. Para calcular las coordenadas de los vértices A, B y C se aplica una solución geométrica, como se muestra en la Figura 3.2.7.',
                    fotoPath:'./assets/images/Capitulos/II/media/+44.png',    
                  },
                  {
                    parrafo:'Dados los siguientes puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+45.png',    
                  },
                  {
                    parrafo:'Dado el valor del ángulo A, por ejemplo: A=30°'  
                  },
                  {
                    parrafo:'Calculamos el valor de la pendiente OB que en este caso es negativa, debido a que el segmento de la recta OB se encuentra en el cuarto cuadrante:',
                    fotoPath:'./assets/images/Capitulos/II/media/+46.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $y_2$ donde obtenemos la siguiente ecuación:',
                    fotoPath:'./assets/images/Capitulos/II/media/+47.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $OB$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+48.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de $y_2$  de la ecuación (6) en la ecuación (7) y calculamos el valor de $x_2$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+49.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $x_2$ y luego racionalizamos la expresión:',
                    fotoPath:'./assets/images/Capitulos/II/media/+50.png',    
                  },
                  {
                    parrafo:'Reemplazamos el valor de $x_2$ de la ecuación (8) en la ecuación (6) y calculamos el valor de $y_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+51.png',    
                  },
                  {
                    parrafo:'Por lo tanto, las coordenadas del punto $P_3$ son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+52.png',    
                  },
                  {
                    parrafo:'Aplicando las siguientes identidades trigonométricas:',
                    fotoPath:'./assets/images/Capitulos/II/media/+53.png',    
                  },
                  {
                    parrafo:'Se simplicifica la ecuación (10) de la siguiente manera:',
                    fotoPath:'./assets/images/Capitulos/II/media/+54.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto $P_2$ en función de senos y cosenos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+55.png',    
                  },
                  {
                    parrafo:'Luego, se calculan las coordenadas del punto $P_1$ en función del punto $P_2$, donde analizando el gráfico se puede observar que la coordenada $x_1=x_2$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+56.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $BA$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+57.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $y_1$ y obtenemos la expresión:',
                    fotoPath:'./assets/images/Capitulos/II/media/+58.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto $P_1=A$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+59.png',    
                  },
                  {
                    parrafo:'Por construcción, obtenemos los puntos M, N y P que permiten formar los triángulos rectángulos BMO, OND y APD. Además, se forma el trapecio OMPD. (Ver Figura 3.2.7).',
                    fotoPath:'./assets/images/Capitulos/II/media/+60.png',    
                  },
                  {
                    parrafo:'Luego resolvemos el triángulo rectángulo BMO, para calcular el valor de los segmentos BM y OM.',
                    fotoPath:'./assets/images/Capitulos/II/media/+61.png',    
                  },
                  {
                    parrafo:'Después, resolvemos el triángulo rectángulo DPA, para calcular el valor de los segmentos AP y DP.',
                    fotoPath:'./assets/images/Capitulos/II/media/+62.png',    
                  },
                  {
                    parrafo:'Finalmente, calculamos los valores de los segmentos PM, NM y ON del trapecio OMPD:',
                    fotoPath:'./assets/images/Capitulos/II/media/+63.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto $P_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+64.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto O y el Punto D, ya se puede dibujar el vector V, utilizando una línea.'
                  },
                  {
                    parrafo:'Para dibujar la caja completa que contiene al vector V es necesario calcular los valores de las coordenadas de los puntos (ver Figura 3.2.8):',
                    fotoPath:'./assets/images/Capitulos/II/media/+65.png',    
                  },
                  {
                    parrafo:'',
                    fotoPath:'./assets/images/Capitulos/II/media/+66.png',    
                  },
                  {
                    parrafo:'A continuación, se calculan las coordenadas del punto $P_4$ en función del punto $P_3$, donde analizando el gráfico se puede observar que la coordenada $x_4=x_3$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+67.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $CD$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+68.png',    
                  },
                  {
                    parrafo:'Despejamos el valor de $y_4$ y obtenemos la expresión:',
                    fotoPath:'./assets/images/Capitulos/II/media/+69.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto $P_4=C$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+70.png',    
                  },
                  {
                    parrafo:'Luego resolvemos el triángulo rectángulo OJK, para calcular el valor de los segmentos OJ y KJ.',
                    fotoPath:'./assets/images/Capitulos/II/media/+71.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del vértice K:',
                    fotoPath:'./assets/images/Capitulos/II/media/+72.png',    
                  },
                  {
                    parrafo:'Considerando que los triángulos rectángulos OJK y EHO son iguales y además el triángulo rectángulo EHO se encuentra ubicado en el tercer cuadrante, debido a que la recta l auxiliar construida, atraviesa por el centro de todos los ejes coordenados (x, y, z). (Ver Figura 3.2.8).',
                    fotoPath:'./assets/images/Capitulos/II/media/+73.png',    
                  },
                  {
                    parrafo:'Entonces, los valores de los segmentos DP y AP son negativos, es decir: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+74.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtienen las coordenadas del punto $P_5=E$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+75.png',    
                  },
                  {
                    parrafo:'Luego resolvemos el triángulo rectángulo FIG, para calcular el valor de los segmentos FI y GI.',
                    fotoPath:'./assets/images/Capitulos/II/media/+76.png',    
                  },
                  {
                    parrafo:'Considerando que los triángulos rectángulos EOH y FGI son iguales y además el triángulo rectángulo FGI se encuentra ubicado en el segundo cuadrante, debido a que la recta l auxiliar construida, atraviesa por el centro de todos los ejes coordenados (x, y, z). (Ver Figura 3.2.8).',
                    fotoPath:'./assets/images/Capitulos/II/media/+77.png',    
                  },
                  {
                    parrafo:'Entonces, el valor del segmento DP es negativo y el valor del segmento AP es positivo, es decir: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+78.png',    
                  },
                  {
                    parrafo:'Finalmente, se obtienen las coordenadas del punto $P_6=F$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+79.png',    
                  },
                  {
                    parrafo:'A continuación, se calculan las coordenadas del punto $P_7$ en función del punto $P_0$, donde analizando el gráfico se puede observar que la coordenada $x_7=x_0$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+80.png',    
                  },
                  {
                    parrafo:'Calculamos la distancia $OG$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+81.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto $P_7=G$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+82.png',    
                  },
                  {
                    parrafo:'Finalmente, se unen con líneas entre cortadas los puntos OB, AB, AD, CD, BC, OE, CE, OG, AG, FG, FD, EF. Además, se grafica con línea continua el vector V uniendo los puntos OD. '
                  }
                ]
               },
               {
                subtitulo2:'B.4.) Suma de Vectores',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 3D en el espacio, calcular y graficar el vector resultante de la suma entre ellos. Utilizar el método del paralelogramo para realizar la representación gráfica de los tres vectores 3D en el espacio.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el espacio:',
                    fotoPath:'./assets/images/Capitulos/II/media/+83.png',    
                  },
                  {
                    parrafo:'La suma entre los vectores A y B se obtiene utilizando la ecuación (51) de la sección 3.1.3.10:',
                    fotoPath:'./assets/images/Capitulos/II/media/+84.png',    
                  },
                  {
                    parrafo:'En la representación gráfica de la Suma de dos Vectores, se forma un paralelogramo en el espacio, donde el Vector $\\overrightarrow{C}$ es el Vector Resultante $\\overrightarrow{R}$. La Figura 3.2.2 muestra estos vectores en el espacio 3D del mundo real.',
                    fotoPath:'./assets/images/Capitulos/II/media/+85.png',    
                  },
                  {
                    parrafo:'1.	Representación Geométrica del Vector A:'
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+86.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+87.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+88.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+89.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+90.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+91.png',
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+92.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(-6.5,5.75)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+93.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'2.	Representación Geométrica del Vector B:'    
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+94.png',     
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+95.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+96.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+97.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+98.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+99.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+100.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(-4.76,3.25)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+101.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'3.	Representación Geométrica del Vector C:'    
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+102.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+103.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+104.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+105.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+106.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+107.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+108.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(-11.25,9)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+109.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.3:',
                    fotoPath:'./assets/images/Capitulos/II/media/+110.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.5.) Resta de Vectores',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 3D en el espacio, calcular y graficar el vector resultante de la resta entre ellos. Utilizar el método del paralelogramo para realizar la representación gráfica de los tres vectores 3D en el espacio.',                
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el espacio:',
                    fotoPath:'./assets/images/Capitulos/II/media/+111.png',    
                  },
                  {
                    parrafo:'La resta entre los vectores A y B se obtiene utilizando la ecuación (51) de la sección 3.1.3.10:',
                    fotoPath:'./assets/images/Capitulos/II/media/+112.png',    
                  },
                  {
                    parrafo:'En la representación gráfica de la Resta de dos Vectores, se forma un paralelogramo en el espacio, donde el Vector $\\overrightarrow{B}$ es opuesto al Vector $\\overrightarrow{-B}$, que es igual al Vector $\\overrightarrow{E}, es decir:',
                    fotoPath:'./assets/images/Capitulos/II/media/+113.png',    
                  },
                  {
                    parrafo:'La Figura 3.2.4 muestra estos vectores en el espacio 3D del mundo real.',
                    fotoPath:'./assets/images/Capitulos/II/media/+114.png',    
                  },
                  {
                    parrafo:'1.	Representación Geométrica del Vector A:'   
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+115.png',    
                  },
                  {
                    parrafo:'Se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+116.png',    
                  },
                  {
                    parrafo:'Considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+117.png',    
                  },
                  {
                    parrafo:'Conociendo el punto D, se puede calcular el punto $D^{\'}$, aplicando las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro:',
                    fotoPath:'./assets/images/Capitulos/II/media/+118.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'2.	Representación Geométrica del Vector $\\overrightarrow{E }=\\overrightarrow{-B }$:'
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+119.png',    
                  },
                  {
                    parrafo:'Se calculan las coordenadas del punto $E$ que corresponde al vector opuesto $\\overrightarrow{E }$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+120.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+121.png',        
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+122.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+123.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+124.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+125.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+126.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(4.76,-3.25)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$: ',
                    fotoPath:'./assets/images/Capitulos/II/media/+127.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'3.	Representación Geométrica del Vector C:'    
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+128.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+129.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+130.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+131.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+132.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+133.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+134.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(-1.74,2.5)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+135.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, -B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.3:',
                    fotoPath:'./assets/images/Capitulos/II/media/+136.png',    
                  }
                ]
               },
               {
                subtitulo2:'B.6.) Proyección de un Vector sobre otro Vector',
                tituloproblema:'Problema:',
                parrafo:'Dados dos vectores 3D en el espacio, calcular y graficar el vector proyección del Vector A  sobre el Vector B  y el Vector Perpendicular entre ellos. Utilizar las ecuaciones de la sección 3.1.3.17 y 3.1.3.18.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dados los siguientes vectores en el espacio:',
                    fotoPath:'./assets/images/Capitulos/II/media/+137.png',    
                  },
                  {
                    parrafo:'La proyección del vector A sobre el vector B se obtiene utilizando la ecuación (71) de la sección 3.1.3.17:',
                    fotoPath:'./assets/images/Capitulos/II/media/+138.png',    
                  },
                  {
                    parrafo:'Primero se calcula el módulo o magnitud del vector B con la ecuación (18) de la sección 3.1.3.4:',
                    fotoPath:'./assets/images/Capitulos/II/media/+139.png',    
                  },
                  {
                    parrafo:'Como segundo paso, se calcula el vector unitario o normalizado del vector B, utilizando la ecuación (32) de la sección 3.1.3.8:',
                    fotoPath:'./assets/images/Capitulos/II/media/+140.png',    
                  },
                  {
                    parrafo:'Como tercer paso, se calcula el producto punto entre el vector A con el vector unitario o normalizado del vector B:',
                    fotoPath:'./assets/images/Capitulos/II/media/+141.png',    
                  },
                  {
                    parrafo:'Finalmente, se calcula el producto entre un vector por un escalar, donde el vector representa al vector unitario de B y el escalar representa al producto punto calculado en el paso anterior:',
                    fotoPath:'./assets/images/Capitulos/II/media/+142.png',    
                  },
                  {
                    parrafo:'Entonces, el vector proyección de A sobre el vector B es el vector C:',
                    fotoPath:'./assets/images/Capitulos/II/media/+143.png',    
                  },
                  {
                    parrafo:'La Figura 3.2.6 muestra la proyección del vector A sobre el vector B.',
                    fotoPath:'./assets/images/Capitulos/II/media/+144.png',    
                  },
                  {
                    parrafo:'4.	Representación Geométrica del Vector A:'    
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+145.png',    
                  },
                  {
                    parrafo:'Se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+146.png',    
                  },
                  {
                    parrafo:'Considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+147.png',    
                  },
                  {
                    parrafo:'Conociendo el punto D, se puede calcular el punto $D^{\'}$, aplicando las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro:',
                    fotoPath:'./assets/images/Capitulos/II/media/+148.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'1.	Representación Geométrica del Vector B:'   
                  },
                  {
                    parrafo:'Dados los puntos:',
                    fotoPath:'./assets/images/Capitulos/II/media/+149.png',    
                  },
                  {
                    parrafo:'Se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+150.png',    
                  },
                  {
                    parrafo:'Considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+151.png',    
                  },
                  {
                    parrafo:'Conociendo el punto $D$, se puede calcular el punto $D^{\'}$, aplicando las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro:',
                    fotoPath:'./assets/images/Capitulos/II/media/+152.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'2.	Representación Geométrica del Vector $\\overrightarrow{C}=\\overrightarrow{V_{A/B}}$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+153.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos a, b, c:',
                    fotoPath:'./assets/images/Capitulos/II/media/+154.png',    
                  },
                  {
                    parrafo:'Se calculan los valores de los segmentos BM, OM, DP, AP, PM, NM y ON:',
                    fotoPath:'./assets/images/Capitulos/II/media/+155.png',    
                  },
                  {
                    parrafo:'Entonces, se obtienen las coordenadas del punto D:',
                    fotoPath:'./assets/images/Capitulos/II/media/+156.png',    
                  },
                  {
                    parrafo:'Para poder representar gráficamente este vector en el mundo de la Computación Gráfica es necesario utilizar las ecuaciones (3) y (4) de la sección 2.1.1.2 referentes a la traslación de un punto a otro que son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+157.png',    
                  },
                  {
                    parrafo:'Si se considera un lienzo o canvas de 400x300, entonces el centro de esta área en análisis es:',
                    fotoPath:'./assets/images/Capitulos/II/media/+158.png',    
                  },
                  {
                    parrafo:'Donde, este valor obtenido corresponde al nuevo centro trasladado. Entonces:',
                    fotoPath:'./assets/images/Capitulos/II/media/+159.png',    
                  },
                  {
                    parrafo:'Si se aplica un factor de escalamiento (SF) igual a 20 y considerando el valor del vértice del extremo del vector A, que es el punto $D(-7.01,4.78)$, se obtiene $D^{\'}(x_{D^{\'}},y_{D^{\'}})$:',
                    fotoPath:'./assets/images/Capitulos/II/media/+160.png',    
                  },
                  {
                    parrafo:'Conociendo el Punto $O^{\'}$ y el Punto $D^{\'}$, ya se puede dibujar el vector V en el espacio, utilizando una línea.'
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B y C en el mundo de la Computación Gráfica se muestra en la Figura 3.2.3:',
                    fotoPath:'./assets/images/Capitulos/II/media/+161.png',    
                  },
                  {
                    parrafo:'El vector perpendicular formado por la proyección del vector A sobre el vector B se obtiene utilizando la ecuación (75) de la sección 3.1.3.18:',
                    fotoPath:'./assets/images/Capitulos/II/media/+162.png',    
                  },
                  {
                    parrafo:'En esta ecuación se realiza una resta de vectores entre el vector A con el vector proyección de A sobre el vector B:',
                    fotoPath:'./assets/images/Capitulos/II/media/+163.png',    
                  },
                  {
                    parrafo:'Entonces, el vector perpendicular resultante es $\\overrightarrow{D} $:',
                    fotoPath:'./assets/images/Capitulos/II/media/+164.png',    
                  },
                  {
                    parrafo:'La representación geométrica del punto D en coordenadas por pantalla no es necesario realizar puesto que este vector perpendicular se grafica uniendo con una línea los puntos C y D.'
                  },
                  {
                    parrafo:'Finalmente, la gráfica de los vectores A, B, C y D en el mundo de la Computación Gráfica se muestra en la Figura 3.2.9'
                  }
                ]
               },
               {
                subtitulo2:'B.7.) Reflexiones sobre los ejes y Vectores Opuestos',
                tituloproblema:'Problema:',
                parrafo:'Dado un vector 3D en el espacio, calcular y graficar las reflexiones del vector en los tres planos y obtener los vectores opuestos de cada reflexión en los cuatro planos.',
                titulosolucion:'Solución:',  
                solucion:[                  
                  {
                    parrafo:'Dado el siguiente vector en el espacio:',
                    fotoPath:'./assets/images/Capitulos/II/media/+165.png',    
                  },
                  {
                    parrafo:'Las reflexiones del vector A en los tres planos son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+166.png',    
                  },
                  {
                    parrafo:'Entonces las fórmulas para encontrar las reflexiones de un vector V cualquiera son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+167.png',    
                  },
                  {
                    parrafo:'Los vectores opuestos de cada reflexión y el vector opuesto del vector original son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+168.png',    
                  },
                  {
                    parrafo:'Entonces las fórmulas para encontrar los vectores opuestos de las reflexiones de un vector V cualquiera y el vector opuesto del vector original son:',
                    fotoPath:'./assets/images/Capitulos/II/media/+169.png',    
                  },
                  {
                    parrafo:'$\\color{red} {\\bf{Conjetura Vectorial de Villacís-Zambrano}}$: Considerando un espacio vectorial $R^2$, se puede aseverar que hay una reflexión de un vector y 2 vectores opuestos formados. Considerando un espacio vectorial $R^3$, se puede aseverar que hay 3 reflexiones de un vector y 4 vectores opuestos formados. Entonces en un espacio vectorial $R^n$, habría $2^{n-1}-1$ reflexiones de un vector y $2^{n-1}$ vectores opuestos formados. Así, por ejemplo, en un espacio vectorial $R^4$, habría 7 reflexiones de un vector y 8 vectores opuestos formados, donde: $7=2^{4-1}-1.$'
                  }
                ]
               }

             ]               
           },
         C:{
            subtitulo:'C)	Algoritmos',
            algoritmosC:[
                {
                    titulo:'3.3.1. Algoritmo de la Función ReadData()',
                    pasos:[
                        '1.	Leer el valor de la componente ‘X’ del vector 3D. ',
                        '2.	Leer el valor de la componente ‘Y’ del vector 3D. ',
                        '3.	Leer el valor de la componente ‘Z’ del vector 3D. '
                    ]
                },
                {
                    titulo:'3.3.2. Algoritmo de la Función PrintData()',
                    pasos:[
                        '1.	Imprimir el valor de la componente ‘X’, de la compoente ‘Y’ y de la componente ‘Z’ del vector 3D.'
                    ]
                },
                {
                    titulo:'3.3.3. Algoritmo de la Función InitializeData()',
                    pasos:[
                        '1.	Obtener el valor del ancho y del largo del lienzo (picCanvas).',
                        '1.1.	Crear un objeto de tipo Rectangle.',
                        '1.2.	Asignar a la componente X del rectángulo el valor del ancho del lienzo.',
                        '1.3.	Asignar a la componente Y del rectángulo el valor del largo del lienzo.',
                        '2.	Calcular el valor máximo de la resolución de X y de Y del lienzo.',
                        '2.1.	Asignar al valor máximo de la resolución de X representado por la variable maxX, el valor de la componente X del rectángulo disminuida en uno.',
                        '2.2.	Asignar al valor máximo de la resolución de Y representado por la variable maxY, el valor de la componente Y del rectángulo disminuida en uno.',
                        '3.	Calcular el centro del lienzo (picCanvas).',
                        '3.1.	Asignar a la variable ‘xCenter’ el valor de la división entre el valor máximo de la resolución de ‘X’ (maxX) para el valor de dos.',
                        '3.2.	Asignar a la variable ‘yCenter’ el valor de la división entre el valor máximo de la resolución de ‘Y’ (maxY) para el valor de dos.',
                        '4.	Asignar a la componente ‘X’ del punto O el valor de ‘x’ del centro trasladado (xCenter).',
                        '5.	Asignar a la componente ‘Y’ del punto O el valor de ‘y’ del centro trasladado (yCenter).'
                    ]
                },
                {
                    titulo:'3.3.4. Algoritmo de la Función PlotAxis()',
                    pasos:[
                        '1.	Borrar el contenido del objeto picCanvas que representa al lienzo de dibujo.',
                        '2.	Dibujar el eje vertical (y).',
                        '2.1.	Asignar a la componente X del punto P1 el valor de xCenter.',
                        '2.2.	Asignar a la componente Y del punto P1 el valor de cero.',
                        '2.3.	Asignar a la componente X del punto P2 el valor de xCenter.',
                        '2.4.	Asignar a la componente Y del punto P2 el valor de maxY.',
                        '2.5.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el punto P1 con el punto P2.',
                        '3.	Calcular el punto central de los ejes coordenados.',
                        '3.1.	Asignar a la componente ‘X’ del punto O el valor de ‘x’ del centro trasladado (xCenter).',
                        '3.2.	Asignar a la componente ‘Y’ del punto O el valor de ‘y’ del centro trasladado (yCenter).',
                        '4.	Resolver el triángulo rectángulo AOG del rectángulo ABCD.',
                        '4.1.	Asignar a la variable ‘b’ el valor de 8.0f.',
                        '4.2.	Asignar a la variable ‘a’ el resultado de la división entre ‘b’ para la tangente del ángulo central.',
                        '5.	Calcular las coordenadas de los puntos del Rectángulo que encierra al dibujo, en función de los segmentos a y b del Triángulo Rectángulo AOG.',
                        '5.1.	Asignar a la componente X del punto A el valor de -a y asignar a la componente Y del punto A el valor de b.',
                        '5.2.	Convertir el punto A en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '5.3.	Asignar a la componente X del punto B el valor de a y asignar a la componente Y del punto B el valor de b.',
                        '5.4.	Convertir el punto B en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '5.5.	Asignar a la componente X del punto C el valor de -a y asignar a la componente Y del punto C el valor de -b.',
                        '5.6.	Convertir el punto C en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '5.7.	Asignar a la componente X del punto D el valor de a y asignar a la componente Y del punto D el valor de -b.',
                        '5.8.	Convertir el punto D en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '6.	Dibujar el eje (x).',
                        '6.1.	Definir un bolígrafo de color rojo.',
                        '6.2.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice A con el vértice D.',
                        '7.	Dibujar el eje (z).',
                        '7.1.	Definir un bolígrafo de color verde.',
                        '7.2.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice B con el vértice C.'
                    ]
                },
                {
                    titulo:'3.3.5. Algoritmo de la Función PlotPlane()',
                    pasos:[
                        '1.	Asignar al objeto mGraph la funcionalidad de crear gráficos del pictureBox picCanvas.',
                        '2.	Dibujar el contorno del rombo ABCD.',
                        '2.1.	Definir un bolígrafo de color gris.',
                        '2.2.	Asignar a la componente ‘X’ del punto O el valor de ‘x’ del centro trasladado (xCenter).',
                        '2.3.	Asignar a la componente ‘Y’ del punto O el valor de ‘y’ del centro trasladado (yCenter).',
                        '2.4.	Calcular los segmentos \'a\' y \'b\' del triángulo rectángulo ABO del Rombo ABCD.',
                        '2.4.1.	Asignar a la variable ‘b’ el valor de 4.0f.',
                        '2.4.2.	Asignar a la variable ‘a’ el resultado de la división entre ‘b’ para la tangente del ángulo central.',
                        '2.5.	Calcular las coordenadas de los cuatro puntos del Rombo que encierra al plano, en función de los lados del triángulo ABO.',
                        '2.5.1.	Asignar a la componente X del punto A el valor de 0 y asignar a la componente Y del punto A el valor de b.',
                        '2.5.2.	Convertir el punto A en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '2.5.3.	Asignar a la componente X del punto B el valor de a y asignar a la componente Y del punto B el valor de 0.',
                        '2.5.4.	Convertir el punto B en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '2.5.5.	Asignar a la componente X del punto C el valor de 0 y asignar a la componente Y del punto C el valor de -b.',
                        '2.5.6.	Convertir el punto C en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '2.5.7.	Asignar a la componente X del punto D el valor de -a y asignar a la componente Y del punto D el valor de 0.',
                        '2.5.8.	Convertir el punto D en coordenadas por pantalla utilizando las fórmulas de traslación de ejes.',
                        '2.5.9.	Dibujar las cuatro líneas del rombo ABCD.',
                        '2.5.9.1.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice A con el vértice B.',
                        '2.5.9.2.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice A con el vértice D.',
                        '2.5.9.3.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice B con el vértice C.',
                        '2.5.9.4.	Utilizar el objeto ‘Graph’ con la función DrawLine para graficar con la pluma ‘Pen’ una línea que una el vértice C con el vértice D.',
                        '2.6.	Dibujar los segmentos internos del rombo ABCD.',
                        '2.6.1.	Calcular los segmentos \'p\' y \'q\' del triángulo rectángulo AIL del rombo ABCD.',
                        '2.6.1.1.	Asignar a la variable ‘p’ el valor de 0.25f.',
                        '2.6.1.2.	Asignar a la variable ‘q’ el resultado de la división entre ‘p’ para la tangente del ángulo central.',
                        '2.6.2.	Utilizando un bucle for(), calcular los puntos del arreglo P[] que cruzan por el segmento BA. El cálculo de la coordenada \'x\' va desde la derecha hacia el centro. Mientras que el cálculo de la coordenada \'y\' va desde abajo hacia arriba.',
                        '2.6.3.	Utilizando un bucle for(), calcular los puntos del arreglo Q[] que cruzan por el segmento DC. El cálculo de la coordenada \'x\' va desde la izquierda hacia el centro. Mientras que el cálculo de la coordenada \'y\' va desde arriba hacia abajo.',
                        '2.6.4.	Utilizando un bucle for(), dibujar una línea que permite unir el primer punto del arreglo P[] con el último punto del arreglo Q[], hasta unir el último punto del arreglo P[] con el primer punto del arreglo Q[].',
                        '2.6.5.	Utilizando un bucle for(), calcular los puntos del arreglo P[] que cruzan por el segmento DA. El cálculo de la coordenada \'x\' va desde la izquierda hacia el centro. Mientras que el cálculo de la coordenada \'y\' va desde abajo hacia arriba.',
                        '2.6.6.	Utilizando un bucle for(), calcular los puntos del arreglo Q[] que cruzan por el segmento BC. El cálculo de la coordenada \'x\' va desde la derecha hacia el centro. Mientras que el cálculo de la coordenada \'y\' va desde arriba hacia abajo.',
                        '2.6.7.	Utilizando un bucle for(), dibujar una línea que permite unir el primer punto del arreglo P[] con el último punto del arreglo Q[], hasta unir el último punto del arreglo P[] con el primer punto del arreglo Q[].'
                    ]
                },
                {
                    titulo:'3.3.6. Algoritmo de la Función PlotBox()',
                    pasos:[
                        '1.	Asignar al objeto mGraph la funcionalidad de crear gráficos del pictureBox picCanvas.',
                        '2.	Definir un patrón de línea de puntos para dibujarlo con un esferográfico.',
                        '3.	Escalar al vector V a la mitad.',
                        '3.1.	Asignar a la variable ‘a’ el valor de la componente ‘X’ dividido para dos.',
                        '3.2.	Asignar a la variable ‘b’ el valor de la componente ‘Y’ dividido para dos.',
                        '3.3.	Asignar a la variable ‘c’ el valor de la componente ‘Z’ dividido para dos.',
                        '4.	Calcular el valor del vértice B y del vértice A en el mundo real.',
                        '4.1.	Calcular el valor del vértice B en el mundo real utilizando la ecuación (16) de la sección B.1.',
                        '4.2.	Calcular el valor del vértice A en el mundo real utilizando la ecuación (19) de la sección B.1.',
                        '5.	Calcular las coordenadas de los puntos A y B que forman parte de la caja que encierra al vector V, utilizando las fórmulas de traslación de un punto a otro en el mundo de la Computación Gráfica.',
                        '6.	Dibujar una línea que una el punto O con el punto B.',
                        '7.	Dibujar una línea que una el punto A con el punto B.',
                        '8.	Calcular los segmentos BM y OM del triángulo rectángulo BMO.',
                        '9.	Calcular los segmentos DP y AP del triángulo rectángulo DPA.',
                        '10.	Calcular los segmentos PM, NM y ON del trapecio OMPD.',
                        '11.	Calcular las coordenadas de los puntos D, C, E, G y F que forman parte de la caja que encierra al vector V, utilizando las fórmulas de traslación de un punto a otro en el mundo de la Computación Gráfica y dibujar las líneas que unen dichos puntos.',
                        '11.1.	Dibujar una línea que una el punto A con el punto D.',
                        '11.2.	Dibujar una línea que una el punto C con el punto D.',
                        '11.3.	Dibujar una línea que una el punto B con el punto C.',
                        '11.4.	Dibujar una línea que una el punto O con el punto E.',
                        '11.5.	Dibujar una línea que una el punto C con el punto E.',
                        '11.6.	Dibujar una línea que una el punto O con el punto G.',
                        '11.7.	Dibujar una línea que una el punto A con el punto G.',
                        '11.8.	Dibujar una línea que una el punto F con el punto G.',
                        '11.9.	Dibujar una línea que una el punto F con el punto D.',
                        '11.10.	Dibujar una línea que una el punto E con el punto F.',
                        '12.	Dibujar el vector OD que representa al vector V que está proyectado dentro de una caja.',
                        '12.1.	Crear una línea con flecha y base redondeada para dibujarla con un esferográfico.',
                        '12.2.	Dibujar una línea que una el punto O con el punto D, que representa al vector V.'
                    ]
                },
                {
                    titulo:'3.3.7. Algoritmo de la Función PlotVector()',
                    pasos:[
                      '1.	Asignar al objeto mGraph la funcionalidad de crear gráficos del pictureBox picCanvas.',
                      '2.	Definir un patrón de línea de puntos para dibujarlo con un esferográfico.',
                      '3.	Escalar al vector V a la mitad.',
                      '3.1.	Asignar a la variable ‘a’ el valor de la componente ‘X’ dividido para dos.',
                      '3.2.	Asignar a la variable ‘b’ el valor de la componente ‘Y’ dividido para dos.',
                      '3.3.	Asignar a la variable ‘c’ el valor de la componente ‘Z’ dividido para dos.',
                      '4.	Calcular los segmentos BM y OM del triángulo rectángulo BMO.',
                      '5.	Calcular los segmentos DP y AP del triángulo rectángulo DPA.',
                      '6.	Calcular los segmentos PM, NM y ON del trapecio OMPD.',
                      '7.	Calcular las coordenadas de los puntos D que forman parte de la caja que encierra al vector V, utilizando las fórmulas de traslación de un punto a otro en el mundo de la Computación Gráfica.',
                      '8.	Dibujar el vector OD que representa al vector V que está proyectado dentro de una caja.',
                      '8.1.	Crear una línea con flecha y base redondeada para dibujarla con un esferográfico.',
                      '8.2.	Dibujar una línea que una el punto O con el punto D, que representa al vector V.'
                    ]
                }
            ]
         },
         D:{
            subtitulo:'D)	Código de la Aplicación',
            listaCodigo:[
                {
                    problema:'La implementación de la clase CVector3D, se presenta a continuación en la Tabla 3.2.1, que contiene datos miembro y funciones miembro que realizan diferentes operaciones.',
                    tablaN:'Tabla 3.2.1. ',
                    tablaDescrip:'Código de la clase CVector3D del programa.',
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
                    using System.Drawing;
                    using System.Drawing.Drawing2D;
                    using System.Windows.Forms;

                    namespace WinAppVectors3D
                    {
                        class CVector3D
                        {
                            #region Atributes of the class        
                            /// <summary>
                            /// Member Data
                            /// </summary>

                            // Componente 'X' del Vector 3D.
                            private float mX;
                            // Componente 'Y' del Vector 3D.
                            private float mY;
                            // Componente 'Z' del Vector 3D.
                            private float mZ;
                            // Objeto que activa el modo gráfico.
                            private Graphics mGraph;
                            // Objeto bolígrafo que dibuja o escribe en un lienzo o canvas (PictureBox).
                            private Pen mPen;
                            // Constante scale factor (Zoom In/Zoom Out).
                            private const float SF = 20;
                            // Objeto que permite obtener el tamaño de un lienzo o canvas (PictureBox).
                            private Rectangle d;
                            // Dato que representa al valor máximo en el eje de las abcisas (x) del lienzo.
                            private int maxX;
                            // Dato que representa al valor máximo en el eje de las ordenadas (y) del lienzo.
                            private int maxY;
                            // Dato que representa al valor de x del centro del lienzo.
                            private int xCenter;
                            // Dato que representa al valor de y del centro del lienzo.
                            private int yCenter;
                            // Objeto Punto que representa al punto central de los ejes coordenados.
                            PointF O;
                            // Objeto Punto que representa a un punto cualquiera P1.
                            PointF P1;
                            // Objeto Punto que representa a un punto cualquiera P2.
                            PointF P2;
                            // Objetos de tipo Punto que representan a los vértices de la caja, donde
                            // el punto D representa al punto final del vector V.
                            PointF A, B, C, D, E, F, G;
                            // Ángulo de inclinación de los ejes 'x' y 'z'.
                            float mAngle;
                            // Segmentos 'a' y 'b' de los ejes coordenados.
                            float a, b;
                            // Segmentos 'p' y 'q' del rombo AIJK.
                            float p, q;
                            // Coordenadas 'x' e 'y' del mundo real.
                            float x, y;
                            // Coordenadas de pantalla 'xp' e 'yp'.
                            float Xp, Yp;
                            // Arreglo de puntos para representar las líneas del rombo ABCD.
                            PointF[] P = new PointF[15];
                            // Arreglo de puntos para representar las líneas del rombo ABCD.
                            PointF[] Q = new PointF[15];

                            #endregion

                            #region Properties
                            ///<summary>
                            /// Getters and Setters.
                            ///</summary>
                                    
                            // Descriptores de acceso get/set del punto D que define a un Vector 3D.
                            public PointF R { get => D; set => D = value; }
                            // Descriptores de acceso get/set de la Componente X del Vector 3D.
                            public float X { get => mX; set => mX = value; }
                            // Descriptores de acceso get/set de la Componente Y del Vector 3D.
                            public float Y { get => mY; set => mY = value; }
                            // Descriptores de acceso get/set de la Componente Z del Vector 3D.
                            public float Z { get => mZ; set => mZ = value; }

                            #endregion

                            #region Constructors of the class
                            ///<summary>
                            /// Constructor Functions.
                            ///</summary>

                            // Constructor sin parámetros.
                            public CVector3D()
                            {
                                mX = 0.0f; mY = 0.0f; mZ = 0.0f;
                                mAngle = 30.0f * (float)Math.PI / 180.0f;
                                // 10<=mAngle<=40 (proyección isométrica)
                                // slider
                            }

                            #endregion

                            #region Methods of the class
                            ///<summary>
                            /// Funciones Miembro (Métodos).
                            ///</summary>

                            // Función que lee las componentes 'X' e 'Y' del vector 2D.
                            public void ReadData(NumericUpDown nudXVectorV,
                                                NumericUpDown nudYVectorV,
                                                NumericUpDown nudZVectorV)
                            {            
                                mX = (float)(nudXVectorV.Value);
                                mY = (float)(nudYVectorV.Value);
                                mZ = (float)(nudZVectorV.Value);
                            }

                            // Función que inicializa los valores del centro del lienzo o canvas.
                            public void InitializeData(PictureBox picCanvas)
                            {
                                d = new Rectangle();
                                d.X = picCanvas.Width;
                                d.Y = picCanvas.Height;
                                
                                maxX = d.X - 1; maxY = d.Y - 1;            
                                xCenter = maxX / 2; yCenter = maxY / 2;            
                                O.X = xCenter; O.Y = yCenter;
                            }

                            // Función que grafica los ejes coordenados 'x','y' y 'z'.
                            public void PlotAxis(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();

                                //mPen = new Pen(Color.Gray);
                                //P1.X = 0; P1.Y = yCenter;
                                //P2.X = maxX; P2.Y = yCenter;
                                //mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);

                                // Dibujar el eje (y).
                                mPen = new Pen(Color.Blue);
                                P1.X = xCenter; P1.Y = 0;
                                P2.X = xCenter; P2.Y = maxY;
                                mGraph.DrawLine(mPen, P1.X, P1.Y, P2.X, P2.Y);
                                // Ubicar el punto central de los ejes coordenados.
                                O.X = xCenter; O.Y = yCenter;                     

                                // Resolver el Triángulo Rectángulo AOG del Rectángulo ABCD.
                                b = 8.0f;
                                a = b / (float)Math.Tan(mAngle);
                                // Ubicar las coordenadas de los puntos del Rectángulo que abarca el
                                // dibujo, en función de los lados del triángulo ABC.
                                A.X = (-a) * SF + xCenter; A.Y = (-1) * b * SF + yCenter;
                                B.X = a * SF + xCenter; B.Y = (-1) * b * SF + yCenter;
                                C.X = (-a) * SF + xCenter; C.Y = b * SF + yCenter;
                                D.X = a * SF + xCenter; D.Y = b * SF + yCenter;
                                // Dibujar el eje (x).
                                mPen = new Pen(Color.Red);
                                mGraph.DrawLine(mPen, A, D);
                                // Dibujar el eje (z).
                                mPen = new Pen(Color.Green);
                                mGraph.DrawLine(mPen, B, C);
                            }

                            // Función que dibuja el Rombo ABCD que representa al plano.
                            public void PlotPlane(PictureBox picCanvas)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                ///////////////////////////////////////
                                // Dibujar el contorno del Rombo ABCD.
                                ///////////////////////////////////////
                                mPen = new Pen(Color.Gray);            
                                O.X = xCenter; O.Y = yCenter;
                                // Calcular los segmentos 'a' y 'b' del Triángulo Rectángulo ABO 
                                // del Rombo ABCD.
                                b = 4.0f;
                                a = b / (float)Math.Tan(mAngle);
                                // Calcular las coordenadas de los cuatro puntos del Rombo que
                                // encierra al plano, en función de los lados del triángulo ABO.
                                A.X = xCenter; A.Y = ((-1) * b * SF) + yCenter;
                                B.X = a * SF + xCenter; B.Y = yCenter;
                                C.X = xCenter; C.Y = ((-1) * -b * SF) + yCenter;
                                D.X = -a * SF + xCenter; D.Y = yCenter;
                                // Dibujar las cuatro líneas del rombo ABCD.
                                mGraph.DrawLine(mPen, A, B);
                                mGraph.DrawLine(mPen, A, D);
                                mGraph.DrawLine(mPen, B, C);
                                mGraph.DrawLine(mPen, C, D);
                                //////////////////////////////////////////////////
                                // Dibujar los segmentos internos del Rombo ABCD.
                                //////////////////////////////////////////////////
                                mPen = new Pen(Color.Gray);
                                // Calcular los segmentos 'p' y 'q' del Triángulo Rectángulo AIL 
                                // del Rombo ABCD.
                                p = 0.25f;
                                q = p / (float)Math.Tan(mAngle);            
                                int i, j;
                                // Calcular los puntos del arreglo P[] que cruzan por el segmento BA            
                                // El cálculo de la coordenada 'x' va desde la derecha hacia el
                                // centro. Mientras que el cálculo de la coordenada 'y' va desde
                                // abajo hacia arriba.            
                                for (i = 1, j = 0; i <= 15; i++, j++)
                                {
                                    x = (float)(a - i * q);
                                    y = (float)(i * p);
                                    Xp = (float)(x * SF + xCenter);
                                    Yp = (float)((-1) * y * SF + yCenter);               
                                    P[j] = new PointF(Xp, Yp);
                                }
                                // Calcular los puntos del arreglo Q[] que cruzan por el segmento DC            
                                // El cálculo de la coordenada 'x' va desde la izquierda hacia el
                                // centro. Mientras que el cálculo de la coordenada 'y' va desde
                                // arriba hacia abajo.            
                                for (i = 1, j = 0; i <= 15; i++, j++)
                                {
                                    x = (float)((-1) * (a - i * q));
                                    y = (float)(-1)*((i * p));
                                    Xp = (float)(x * SF + xCenter);
                                    Yp = (float)((-1) * y * SF + yCenter);                
                                    Q[j] = new PointF(Xp, Yp);
                                }
                                // Dibujar una línea que permite unir el primer punto del arreglo P[] 
                                // con el último punto del arreglo Q[], hasta unir el último punto del
                                // arreglo P[] con el primer punto del arreglo Q[].
                                for (i = 0, j = 14; i < 15; i++, j--)
                                {
                                    mGraph.DrawLine(mPen, P[i], Q[j]);
                                }
                                // Calcular los puntos del arreglo P[] que cruzan por el segmento DA            
                                // El cálculo de la coordenada 'x' va desde la izquierda hacia el
                                // centro. Mientras que el cálculo de la coordenada 'y' va desde
                                // abajo hacia arriba.              
                                for (i = 1, j = 0; i <= 15; i++, j++)
                                {
                                    x = (float)((-1) * (a - i * q));
                                    y = (float)((i * p));
                                    Xp = (float)(x * SF + xCenter);
                                    Yp = (float)((-1) * y * SF + yCenter);                
                                    P[j] = new PointF(Xp, Yp);
                                }
                                // Calcular los puntos del arreglo Q[] que cruzan por el segmento BC            
                                // El cálculo de la coordenada 'x' va desde la derecha hacia el
                                // centro. Mientras que el cálculo de la coordenada 'y' va desde
                                // arriba hacia abajo.  
                                for (i = 1, j = 0; i <= 15; i++, j++)
                                {
                                    x = (float)(a - i * q);
                                    y = (float)((-1) * i * p);
                                    Xp = (float)(x * SF + xCenter);
                                    Yp = (float)((-1) * y * SF + yCenter);                
                                    Q[j] = new PointF(Xp, Yp);
                                }
                                // Dibujar una línea que permite unir el primer punto del arreglo P[] 
                                // con el último punto del arreglo Q[], hasta unir el último punto del
                                // arreglo P[] con el primer punto del arreglo Q[].
                                for (i = 0, j = 14; i < 15; i++, j--)
                                {
                                    mGraph.DrawLine(mPen, P[i], Q[j]);
                                }
                            }

                            // Función que dibuja un vector 3D y la caja que encierra al vector.
                            public void PlotBox(PictureBox picCanvas, Color colorVector, Color colorBox)
                            {            
                                // Asignar la funcionalidad de crear gráficos del picCanvas 
                                // al objeto mGraph.
                                mGraph = picCanvas.CreateGraphics();
                                // Crear un patrón de línea de puntos para dibujarlo con un esferográfico.
                                float[] dashValues = { 2, 1, 2, 1 };
                                mPen = new Pen(colorBox, 2);
                                mPen.DashPattern = dashValues;
                                // Escalar al vector V a la mitad.
                                float a = mX / 2.0f;
                                float b = mY / 2.0f;
                                float c = mZ / 2.0f;                        
                                // Calcular el valor del vértice B y del vértice A, utilizando 
                                // fórmulas de Geometría Analítica y Trigonometría.
                                B.X = a * (float)Math.Cos(mAngle);
                                B.Y = (-1) * a * (float)Math.Sin(mAngle);
                                A.X = a * (float)Math.Cos(mAngle);
                                A.Y = (b - a * (float)Math.Sin(mAngle));
                                // Calcular las coordenadas de los puntos A y B que forman parte
                                // de la caja que encierra al vector V, utilizando las fórmulas de
                                // traslación de un punto a otro en el mundo de la Computación Gráfica.
                                B.X = B.X * SF + xCenter; B.Y = yCenter + ((-1) * B.Y * SF);
                                A.X = A.X * SF + xCenter; A.Y = yCenter + ((-1) * A.Y * SF); 
                                // Dibujar una línea que una el punto O con el punto B.
                                mGraph.DrawLine(mPen, O, B);
                                // Dibujar una línea que una el punto A con el punto B.
                                mGraph.DrawLine(mPen, A, B);
                                // Calcular los segmentos BM y OM del triángulo rectángulo BMO.
                                float BM = a * (float)Math.Sin(mAngle);
                                float OM = a * (float)Math.Cos(mAngle);
                                // Calcular los segmentos DP y AP del triángulo rectángulo DPA.
                                float DP = c * (float)Math.Cos(mAngle);
                                float AP = c * (float)Math.Sin(mAngle);
                                // Calcular los segmentos PM, NM y ON del trapecio OMPD.
                                float PM = b - BM - AP;
                                float NM = DP;
                                float ON = OM - DP;
                                // Calcular las coordenadas de los puntos D, C, E, G y F que forman 
                                // parte de la caja que encierra al vector V, utilizando las fórmulas 
                                // de traslación de un punto a otro en el mundo de la Computación 
                                // Gráfica y dibujar las líneas que unen dichos puntos.
                                D.X = ON * SF + xCenter; D.Y = yCenter + ((-1) * PM * SF);            
                                mGraph.DrawLine(mPen, A, D);
                                C.X = ON * SF + xCenter; C.Y = yCenter + ((-1) * (PM - b) * SF);            
                                mGraph.DrawLine(mPen, C, D);
                                mGraph.DrawLine(mPen, B, C);
                                E.X = (-1) * DP * SF + xCenter; E.Y = yCenter + ((-1) * (-1) * AP * SF);            
                                mGraph.DrawLine(mPen, O, E);
                                mGraph.DrawLine(mPen, C, E);
                                G.X = 0 * SF + xCenter; G.Y = yCenter + ((-1) * b * SF);            
                                mGraph.DrawLine(mPen, O, G);
                                mGraph.DrawLine(mPen, A, G);
                                F.X = (-1) * DP * SF + xCenter; F.Y = yCenter + ((-1) * (b - AP) * SF);            
                                mGraph.DrawLine(mPen, F, G);
                                mGraph.DrawLine(mPen, F, D);
                                mGraph.DrawLine(mPen, E, F);
                                // Crear una línea con flecha y base redondeada para dibujarla con un 
                                // esferográfico.
                                mPen = new Pen(colorVector, 2);
                                mPen.StartCap = LineCap.RoundAnchor;
                                mPen.EndCap = LineCap.ArrowAnchor;
                                // Dibujar una línea que una el punto O con el punto D, que representa
                                // al vector V.
                                mGraph.DrawLine(mPen, O, D);                      
                            }

                            // Función que dibuja un vector 3D.
                            public void PlotVector(PictureBox picCanvas, Color colorVector, Color colorBox)
                            {
                                // Asignar la funcionalidad de crear gráficos del picCanvas 
                                // al objeto mGraph.
                                mGraph = picCanvas.CreateGraphics();            
                                // Escalar al vector V a la mitad.
                                float a = mX / 2.0f;
                                float b = mY / 2.0f;
                                float c = mZ / 2.0f;
                                // Calcular los segmentos BM y OM del triángulo rectángulo BMO.
                                float BM = a * (float)Math.Sin(mAngle);
                                float OM = a * (float)Math.Cos(mAngle);
                                // Calcular los segmentos DP y AP del triángulo rectángulo DPA.
                                float DP = c * (float)Math.Cos(mAngle);
                                float AP = c * (float)Math.Sin(mAngle);
                                // Calcular los segmentos PM, NM y ON del trapecio OMPD.
                                float PM = b - BM - AP;
                                float NM = DP;
                                float ON = OM - DP;
                                // Calcular las coordenadas del punto D que define al vector V, 
                                // utilizando las fórmulas de traslación de un punto a otro en el 
                                // mundo de la Computación Gráfica.
                                D.X = ON * SF + xCenter; D.Y = yCenter + ((-1) * PM * SF);
                                // Crear una línea con flecha y base redondeada para dibujarla con un 
                                // esferográfico.
                                mPen = new Pen(colorVector, 2);
                                mPen.StartCap = LineCap.RoundAnchor;
                                mPen.EndCap = LineCap.ArrowAnchor;
                                // Dibujar una línea que una el punto O con el punto D, que representa
                                // al vector V.
                                mGraph.DrawLine(mPen, O, D);                       
                            }

                            // Función que grafica el vector Proyección de un vector sobre otro.
                            public void PlotProjection(PictureBox picCanvas,
                                          CVector3D U, CVector3D V)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Violet, 2);            
                                mGraph.DrawLine(mPen, U.R, V.R);            
                            }

                            // Función que grafica el paralelogramo correspondiente a la suma
                            // o resta entre dos vectores 3D.
                            public void PlotParallelogram(PictureBox picCanvas,
                                          CVector3D U, CVector3D V, CVector3D W)
                            {
                                mGraph = picCanvas.CreateGraphics();
                                mPen = new Pen(Color.Red, 2);            
                                mGraph.DrawLine(mPen, V.R, W.R);
                                mPen = new Pen(Color.DarkBlue, 2);            
                                mGraph.DrawLine(mPen, U.R, W.R);
                            }

                            // Función que suma dos vectores, utilizando dos parámetros
                            // que representan a los dos vectores 3D.
                            public CVector3D Addition(CVector3D U, CVector3D V)
                            {
                                CVector3D Temp = new CVector3D();
                                Temp.mX = U.mX + V.mX;
                                Temp.mY = U.mY + V.mY; 
                                Temp.mZ = U.mZ + V.mZ;
                                return (Temp);
                            }

                            // Función que resta dos vectores, utilizando dos parámetros
                            // que representan a los dos vectores 3D.
                            public CVector3D Subtraction(CVector3D U, CVector3D V)
                            {
                                CVector3D Temp = new CVector3D();
                                Temp.mX = U.mX - V.mX;
                                Temp.mY = U.mY - V.mY;
                                Temp.mZ = U.mZ - V.mZ;
                                return (Temp);
                            }

                            // Función que imprime las componentes 'X', 'Y' y 'Z' del vector 3D.
                            public void PrintData(TextBox txtXVectorV, 
                                                  TextBox txtYVectorV,
                                                  TextBox txtZVectorV)
                            {            
                                txtXVectorV.Text = mX.ToString();
                                txtYVectorV.Text = mY.ToString();
                                txtZVectorV.Text = mZ.ToString();
                            }

                            // Función que calcula el módulo o la magnitud de un vector 3D.
                            public float Magnitude()
                            {
                                return ((float)Math.Sqrt(mX * mX + mY * mY + mZ * mZ));
                            }

                            // Función que calcula el vector unitario o normalizado de un vector 3D.
                            public CVector3D Normalize()
                            {
                                CVector3D Temp = new CVector3D();
                                Temp.mX = mX / Magnitude();
                                Temp.mY = mY / Magnitude();
                                Temp.mZ = mZ / Magnitude();
                                return (Temp);
                            }

                            // Función que calcula el Producto Punto entre dos vectores, 
                            // utilizando dos parámetros.
                            public float DotProduct(CVector3D U, CVector3D V)
                            {
                                return (U.mX * V.mX + U.mY * V.mY + U.mZ * V.mZ);
                            }

                            // Función que calcula el producto entre un vector y un escalar,
                            // utilizando un parámetro.
                            public CVector3D VectorEscalarProduct(float escalar)
                            {
                                CVector3D Temp = new CVector3D();
                                Temp.mX = mX * escalar;
                                Temp.mY = mY * escalar;
                                Temp.mZ = mZ * escalar;
                                return (Temp);
                            }

                            // Función que calcula el vector Proyección de un vector sobre otro,
                            // utilizando dos parámetros.
                            public CVector3D Projection(CVector3D U, CVector3D V)
                            {
                                CVector3D Proj = new CVector3D();
                                CVector3D Nv = new CVector3D();
                                float escalar;
                                Nv = V.Normalize();
                                escalar = DotProduct(U, Nv);                      
                                Proj = Nv.VectorEscalarProduct(escalar);
                                return (Proj);
                            }

                            // Función que calcula el vector perpendicular o vector ortogonal
                            // a otro vector, utilizando dos parámetros.
                            public CVector3D Perpendicular(CVector3D U, CVector3D V)
                            {
                                CVector3D W = new CVector3D();
                                W = W.Subtraction(U, V);
                                return (W);
                            }

                            // Función que calcula los tres vectores reflejados cada uno en un plano
                            // y el vector original en otro plano.
                            public void ReflectionsOverAxis(CVector3D V, CVector3D[] VR,
                                                            List<TextBox> mListTextBoxVectorRef)
                            {
                                VR[0].X = V.X; VR[0].Y = V.Y; VR[0].Z = V.Z;
                                VR[1].X = (-1) * V.X; VR[1].Y = V.Y; VR[1].Z = V.Z;
                                VR[2].X = V.X; VR[2].Y = V.Y; VR[2].Z = (-1) * V.Z;
                                VR[3].X = (-1) * V.X; VR[3].Y = V.Y; VR[3].Z = (-1) * V.Z;
                                int i, j;
                                for (i = 0, j = 0; i < mListTextBoxVectorRef.Count; i+=3, j++)
                                {
                                    mListTextBoxVectorRef[i].Text = VR[j].X.ToString();
                                    mListTextBoxVectorRef[i + 1].Text = VR[j].Y.ToString();
                                    mListTextBoxVectorRef[i + 2].Text = VR[j].Z.ToString();                
                                }
                            }

                            // Función que calcula los tres vectores opuestos de cada uno de tres vectores 
                            // reflejados y el vector opuesto del original en otro plano.
                            public void OppositeVectors(CVector3D[] VR, CVector3D[] VO,
                                                        List<TextBox> mListTextBoxVectorOpp)
                            {
                                VO[0].X = (-1) * VR[0].X; VO[0].Y = (-1) * VR[0].Y; VO[0].Z = (-1) * VR[0].Z;
                                VO[1].X = (-1) * VR[1].X; VO[1].Y = (-1) * VR[1].Y; VO[1].Z = (-1) * VR[1].Z;
                                VO[2].X = (-1) * VR[2].X; VO[2].Y = (-1) * VR[2].Y; VO[2].Z = (-1) * VR[2].Z;
                                VO[3].X = (-1) * VR[3].X; VO[3].Y = (-1) * VR[3].Y; VO[3].Z = (-1) * VR[3].Z;
                                int i, j;
                                for (i = 0, j = 0; i < mListTextBoxVectorOpp.Count; i += 3, j++)
                                {
                                    mListTextBoxVectorOpp[i].Text = VO[j].X.ToString();
                                    mListTextBoxVectorOpp[i + 1].Text = VO[j].Y.ToString();
                                    mListTextBoxVectorOpp[i + 2].Text = VO[j].Z.ToString();
                                }
                            }

                            #endregion
                        }
                    }
                    `
                },
                {
                    problema:'La implementación de la clase frmVectors3D, se presenta a continuación en la Tabla 3.2.2, que es la clase que representa a la interfaz gráfica de usuario de los vectores en 2D.',
                    tablaN:'Tabla 3.2.2. ',
                    tablaDescrip:'Código de la clase frmVectors3D del programa.',
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
                    using System.ComponentModel;
                    using System.Data;
                    using System.Drawing;
                    using System.Linq;
                    using System.Text;
                    using System.Threading.Tasks;
                    using System.Windows.Forms;

                    namespace WinAppVectors3D
                    {
                        public partial class frmVectors3D : Form
                        {
                            // Definición de cuatro objetos de tipo CVector3D.
                            CVector3D A = new CVector3D();
                            CVector3D B = new CVector3D();
                            CVector3D C = new CVector3D();
                            CVector3D D = new CVector3D();
                            // Definición de dos arreglos de objetos de tipo CVector3D.
                            CVector3D[] VR = new CVector3D[4];
                            CVector3D[] VO = new CVector3D[4];
                            // Definición de una collección de cajas de texto (lista de objetos),
                            // para almacenar los cuatro valores de los vectores reflejados.
                            private List<TextBox> mListTextBoxVectorRef = new List<TextBox>();
                            // Definición de una collección de cajas de texto (lista de objetos),
                            // para almacenar los cuatro valores de los vectores opuestos.
                            private List<TextBox> mListTextBoxVectorOpp = new List<TextBox>();

                            // Constructor del formulario frmVector3D.
                            public frmVectors3D()
                            {
                                InitializeComponent();
                                // Inserción de las ocho cajas de texto a las listas de objetos
                                // de los vectores reflejados y de los vectores opuestos.
                                // Llamada a la función InsertDataList.
                                InsertDataList();
                            }

                            // Función que inserta ocho cajas de texto a las listas de objetos
                            // de los vectores reflejados y de los vectores opuestos.
                            private void InsertDataList()
                            {
                                mListTextBoxVectorRef.Add(txtXVectorVR1); 
                                mListTextBoxVectorRef.Add(txtYVectorVR1); 
                                mListTextBoxVectorRef.Add(txtZVectorVR1);
                                mListTextBoxVectorRef.Add(txtXVectorVR2); 
                                mListTextBoxVectorRef.Add(txtYVectorVR2); 
                                mListTextBoxVectorRef.Add(txtZVectorVR2);
                                mListTextBoxVectorRef.Add(txtXVectorVR3); 
                                mListTextBoxVectorRef.Add(txtYVectorVR3); 
                                mListTextBoxVectorRef.Add(txtZVectorVR3);
                                mListTextBoxVectorRef.Add(txtXVectorVR4); 
                                mListTextBoxVectorRef.Add(txtYVectorVR4); 
                                mListTextBoxVectorRef.Add(txtZVectorVR4);

                                mListTextBoxVectorOpp.Add(txtXVectorVO1); 
                                mListTextBoxVectorOpp.Add(txtYVectorVO1); 
                                mListTextBoxVectorOpp.Add(txtZVectorVO1);
                                mListTextBoxVectorOpp.Add(txtXVectorVO2); 
                                mListTextBoxVectorOpp.Add(txtYVectorVO2); 
                                mListTextBoxVectorOpp.Add(txtZVectorVO2);
                                mListTextBoxVectorOpp.Add(txtXVectorVO3); 
                                mListTextBoxVectorOpp.Add(txtYVectorVO3); 
                                mListTextBoxVectorOpp.Add(txtZVectorVO3);
                                mListTextBoxVectorOpp.Add(txtXVectorVO4); 
                                mListTextBoxVectorOpp.Add(txtYVectorVO4); 
                                mListTextBoxVectorOpp.Add(txtZVectorVO4);
                            }        

                            // Función del evento de carga del formulario frmVectors3D.
                            private void frmVectors3D_Load(object sender, EventArgs e)
                            {
                                
                            }

                            // Función del evento Click del botón btnAddition.
                            private void btnAddition_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A en 3D.
                                // Llamada a la función PlotVector con el objeto A.
                                A.PlotVector(picCanvas, Color.Red, Color.Maroon);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Graficación del vector B en 3D.
                                // Llamada a la función PlotVector con el objeto B.
                                B.PlotVector(picCanvas, Color.DarkBlue, Color.Blue);
                                // Cálculo de la suma de dos vectores en el espacio.
                                // Llamada a la función Addition.
                                C = C.Addition(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC, txtZVectorC);
                                // Graficación del vector C en 3D.
                                // Llamada a la función PlotVector con el objeto C.
                                C.PlotVector(picCanvas, Color.DarkGreen, Color.Green);
                                // Graficación del paralelogramo que representa la suma
                                // entre dos vectores en el espacio y el vector resultante.
                                // Llamada a la función PlotParallelogram con el objeto C.
                                C.PlotParallelogram(picCanvas, A, B, C);
                            }

                            // Función del evento Click del botón btnBoxAddition.
                            private void btnBoxAddition_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotVector con el objeto A.
                                A.PlotBox(picCanvas, Color.Red, Color.Maroon);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Graficación del vector B y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto B.
                                B.PlotBox(picCanvas, Color.DarkBlue, Color.Blue);
                                // Cálculo de la suma de dos vectores en el espacio.
                                // Llamada a la función Addition.
                                C = C.Addition(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC, txtZVectorC);
                                // Graficación del vector C y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotVector con el objeto C.
                                C.PlotBox(picCanvas, Color.DarkGreen, Color.Green);
                                // Graficación del paralelogramo que representa la suma
                                // entre dos vectores en el espacio y el vector resultante.
                                // Llamada a la función PlotParallelogram con el objeto C.
                                C.PlotParallelogram(picCanvas, A, B, C);
                            }

                            // Función del evento Click del botón btnSubtraction.
                            private void btnSubtraction_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A en 3D.
                                // Llamada a la función PlotVector con el objeto A.
                                A.PlotVector(picCanvas, Color.Red, Color.Maroon);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Cálculo de la resta de dos vectores en el espacio.
                                // Llamada a la función Addition.
                                C = C.Subtraction(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Obtentión del vector -B.
                                // Llamada a las propiedades (get/set) de la clase CVector3D.
                                B.X = -B.X; B.Y = -B.Y; B.Z = -B.Z;
                                // Graficación del vector B en 3D.
                                // Llamada a la función PlotVector con el objeto B.
                                B.PlotVector(picCanvas, Color.DarkBlue, Color.Blue);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC, txtZVectorC);
                                // Graficación del vector C en 3D.
                                // Llamada a la función PlotVector con el objeto C.
                                C.PlotVector(picCanvas, Color.DarkGreen, Color.Green);
                                // Graficación del paralelogramo que representa la resta
                                // entre dos vectores en el espacio y el vector resultante.
                                // Llamada a la función PlotParallelogram con el objeto C.
                                C.PlotParallelogram(picCanvas, A, B, C);
                            }

                            // Función del evento Click del botón btnBoxSubtraction.
                            private void btnBoxSubtraction_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto A.
                                A.PlotBox(picCanvas, Color.Red, Color.Maroon);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Cálculo de la resta de dos vectores en el espacio.
                                // Llamada a la función Addition.
                                C = C.Subtraction(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Obtentión del vector -B.
                                // Llamada a las propiedades (get/set) de la clase CVector3D.
                                B.X = -B.X; B.Y = -B.Y; B.Z = -B.Z;
                                // Graficación del vector B y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto B.
                                B.PlotBox(picCanvas, Color.DarkBlue, Color.Blue);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorC, txtYVectorC, txtZVectorC);
                                // Graficación del vector C y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto C.
                                C.PlotBox(picCanvas, Color.DarkGreen, Color.Green);
                                // Graficación del paralelogramo que representa la resta
                                // entre dos vectores en el espacio y el vector resultante.
                                // Llamada a la función PlotParallelogram con el objeto C.
                                C.PlotParallelogram(picCanvas, A, B, C);
                            }

                            // Función del evento Click del botón btnProjection.
                            private void btnProjection_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A en 3D.
                                // Llamada a la función PlotVector con el objeto A.
                                A.PlotVector(picCanvas, Color.Red, Color.Maroon);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Graficación del vector B en 3D.
                                // Llamada a la función PlotVector con el objeto B.
                                B.PlotVector(picCanvas, Color.DarkBlue, Color.Blue);
                                // Cálculo del vector proyección.
                                // Llamada a la función Projection.
                                C = C.Projection(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorPro, txtYVectorPro, txtZVectorPro);
                                // Graficación del vector proyección C en 3D.
                                // Llamada a la función PlotVector con el objeto C.
                                C.PlotVector(picCanvas, Color.DarkGreen, Color.Green);
                                // Cálculo del vector perpendicular.
                                // Llamada a la función Perpendicular.
                                D = D.Perpendicular(A, C);
                                // Inicialización de los datos de graficación del objeto D.
                                // Llamada a la función InitializeData.
                                D.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto D.
                                D.PrintData(txtXVectorPer, txtYVectorPer, txtZVectorPer);
                                // Graficación del vector perpendicular D en 3D.
                                // Llamada a la función PlotProjection con el objeto D.
                                D.PlotProjection(picCanvas, C, A);           
                            }

                            // Función del evento Click del botón btnBoxProjection.
                            private void btnBoxProjection_Click(object sender, EventArgs e)
                            {
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Inicialización de los datos de graficación del objeto A.
                                // Llamada a la función InitializeData.
                                A.InitializeData(picCanvas);
                                // Graficación del plano auxiliar de los cuadrantes.
                                // Llamada a la función PlotPlane.
                                A.PlotPlane(picCanvas);
                                // Graficación de los tres ejes coordenados del espacio.
                                // Llamada a la función PlotAxis.
                                A.PlotAxis(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Graficación del vector A y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto A.
                                A.PlotBox(picCanvas, Color.Red, Color.Maroon);
                                // Inicialización de los datos de graficación del objeto B.
                                // Llamada a la función InitializeData.
                                B.InitializeData(picCanvas);
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Graficación del vector B y la caja que encierra al vector en 3D.
                                // Llamada a la función PlotBox con el objeto B.
                                B.PlotBox(picCanvas, Color.DarkBlue, Color.Blue);
                                // Cálculo del vector proyección.
                                // Llamada a la función Projection.
                                C = C.Projection(A, B);
                                // Inicialización de los datos de graficación del objeto C.
                                // Llamada a la función InitializeData.
                                C.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto C.
                                C.PrintData(txtXVectorPro, txtYVectorPro, txtZVectorPro);
                                // Graficación del vector proyección C y la caja que encierra al
                                // vector en 3D.
                                // Llamada a la función PlotBox con el objeto C.
                                C.PlotBox(picCanvas, Color.DarkGreen, Color.Green);
                                // Cálculo del vector perpendicular.
                                // Llamada a la función Perpendicular.
                                D = D.Perpendicular(A, C);
                                // Inicialización de los datos de graficación del objeto D.
                                // Llamada a la función InitializeData.
                                D.InitializeData(picCanvas);
                                // Impresión de datos.
                                // Llamada a la función PrintData con el objeto D.
                                D.PrintData(txtXVectorPer, txtYVectorPer, txtZVectorPer);
                                // Graficación del vector perpendicular D en 3D.
                                // Llamada a la función PlotProjection con el objeto D.
                                D.PlotProjection(picCanvas, C, A);
                            }

                            // Función del evento Click del botón btnSetVectorsA.
                            private void btnSetVectorsA_Click(object sender, EventArgs e)
                            {
                                int i;
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Bucle que permite crear los objetos internos de cada uno de 
                                // los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i] = new CVector3D();
                                    VO[i] = new CVector3D();
                                }
                                // Bucle que permite inicializar los objetos internos de cada 
                                // uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].InitializeData(picCanvas);
                                    VO[i].InitializeData(picCanvas);
                                }
                                // Bucle que permite graficar los planos y los ejes coordenados de los
                                // objetos internos de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {                
                                    VR[i].PlotPlane(picCanvas);
                                    VR[i].PlotAxis(picCanvas);                
                                    VO[i].PlotPlane(picCanvas);
                                    VO[i].PlotAxis(picCanvas);
                                }
                                // Calcular los vectores reflejados.
                                // Llamada a la función ReflectionsOverAxis con el objeto A.
                                A.ReflectionsOverAxis(A, VR, mListTextBoxVectorRef);
                                // Calcular los vectores opuestos.
                                // Llamada a la función OppositeVectors con el objeto A.
                                A.OppositeVectors(VR, VO, mListTextBoxVectorOpp);            
                                // Bucle que permite graficar los vectores de los objetos internos 
                                // de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].PlotVector(picCanvas, Color.Red, Color.Maroon);
                                    VO[i].PlotVector(picCanvas, Color.Red, Color.Maroon);
                                }            
                            }

                            // Función del evento Click del botón btnBoxSetVectorsA.
                            private void btnBoxSetVectorsA_Click(object sender, EventArgs e)
                            {
                                int i;
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                A.ReadData(nudXVectorA, nudYVectorA, nudZVectorA);
                                // Bucle que permite crear los objetos internos de cada uno de 
                                // los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i] = new CVector3D();
                                    VO[i] = new CVector3D();
                                }
                                // Bucle que permite inicializar los objetos internos de cada 
                                // uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].InitializeData(picCanvas);
                                    VO[i].InitializeData(picCanvas);
                                }
                                // Bucle que permite graficar los planos y los ejes coordenados de los
                                // objetos internos de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {                
                                    VR[i].PlotPlane(picCanvas);
                                    VR[i].PlotAxis(picCanvas);                
                                    VO[i].PlotPlane(picCanvas);
                                    VO[i].PlotAxis(picCanvas);
                                }
                                // Calcular los vectores reflejados.
                                // Llamada a la función ReflectionsOverAxis con el objeto A.
                                A.ReflectionsOverAxis(A, VR, mListTextBoxVectorRef);
                                // Calcular los vectores opuestos.
                                // Llamada a la función OppositeVectors con el objeto A.
                                A.OppositeVectors(VR, VO, mListTextBoxVectorOpp);
                                // Bucle que permite graficar los vectores y las cajas que encierran
                                // a los vectores 3D de los objetos internos, de cada uno de los 
                                // arreglos de objetos VR y VO.            
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].PlotBox(picCanvas, Color.Red, Color.Maroon);
                                    VO[i].PlotBox(picCanvas, Color.Red, Color.Maroon);
                                }
                            }

                            // Función del evento Click del botón btnSetVectorsB.
                            private void btnSetVectorsB_Click(object sender, EventArgs e)
                            {
                                int i;
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto B.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Bucle que permite crear los objetos internos de cada uno de 
                                // los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i] = new CVector3D();
                                    VO[i] = new CVector3D();
                                }
                                // Bucle que permite inicializar los objetos internos de cada 
                                // uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].InitializeData(picCanvas);
                                    VO[i].InitializeData(picCanvas);
                                }
                                // Bucle que permite graficar los planos y los ejes coordenados de los
                                // objetos internos de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {                
                                    VR[i].PlotPlane(picCanvas);
                                    VR[i].PlotAxis(picCanvas);                
                                    VO[i].PlotPlane(picCanvas);
                                    VO[i].PlotAxis(picCanvas);
                                }
                                // Calcular los vectores reflejados.
                                // Llamada a la función ReflectionsOverAxis con el objeto B.
                                B.ReflectionsOverAxis(B, VR, mListTextBoxVectorRef);
                                // Calcular los vectores opuestos.
                                // Llamada a la función OppositeVectors con el objeto B.
                                B.OppositeVectors(VR, VO, mListTextBoxVectorOpp);
                                // Bucle que permite graficar los vectores de los objetos internos 
                                // de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].PlotVector(picCanvas, Color.DarkBlue, Color.Blue);
                                    VO[i].PlotVector(picCanvas, Color.DarkBlue, Color.Blue);
                                }            
                            }

                            // Función del evento Click del botón btnBoxSetVectorsB.
                            private void btnBoxSetVectorsB_Click(object sender, EventArgs e)
                            {
                                int i;
                                // Borrar el contenido del lienzo (canvas).
                                picCanvas.Refresh();
                                // Lectura de datos.
                                // Llamada a la función ReadData con el objeto A.
                                B.ReadData(nudXVectorB, nudYVectorB, nudZVectorB);
                                // Bucle que permite crear los objetos internos de cada uno de 
                                // los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i] = new CVector3D();
                                    VO[i] = new CVector3D();
                                }
                                // Bucle que permite inicializar los objetos internos de cada 
                                // uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].InitializeData(picCanvas);
                                    VO[i].InitializeData(picCanvas);
                                }
                                // Bucle que permite graficar los planos y los ejes coordenados de los
                                // objetos internos de cada uno de los arreglos de objetos VR y VO.
                                for (i = 0; i < VR.Length; i++)
                                {                
                                    VR[i].PlotPlane(picCanvas);
                                    VR[i].PlotAxis(picCanvas);                
                                    VO[i].PlotPlane(picCanvas);
                                    VO[i].PlotAxis(picCanvas);
                                }
                                // Calcular los vectores reflejados.
                                // Llamada a la función ReflectionsOverAxis con el objeto B.
                                B.ReflectionsOverAxis(B, VR, mListTextBoxVectorRef);
                                // Calcular los vectores opuestos.
                                // Llamada a la función OppositeVectors con el objeto B.
                                B.OppositeVectors(VR, VO, mListTextBoxVectorOpp);
                                // Bucle que permite graficar los vectores y las cajas que encierran
                                // a los vectores 3D de los objetos internos, de cada uno de los 
                                // arreglos de objetos VR y VO.  
                                for (i = 0; i < VR.Length; i++)
                                {
                                    VR[i].PlotBox(picCanvas, Color.DarkBlue, Color.Blue);
                                    VO[i].PlotBox(picCanvas, Color.DarkBlue, Color.Blue);
                                }
                            }

                            // Función del evento Click del botón btnExit.
                            private void btnExit_Click(object sender, EventArgs e)
                            {
                                Close();
                            }
                        }
                    }
                    `
                } 
            ]
         },
          E:{
            subtitulo:'E)	Pruebas de la Aplicación',
            listaPrueba:[
              {
              problema:'A continuación, en la Figura 3.3.26, se muestra un ejemplo de la corrida del programa, donde se calcula la suma entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo:',
              fotoPath:'./assets/images/Capitulos/II/media/+170.png',
              fotoN:'Figura 3.3.26.  ',
              fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.27, se muestra un ejemplo de la corrida del programa, donde se calcula la suma entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo. También, se grafican las cajas que encierran a cada uno de los tres vectores:',
                fotoPath:'./assets/images/Capitulos/II/media/+171.png',
                fotoN:'Figura 3.2.27.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.28, se muestra un ejemplo de la corrida del programa, donde se calcula la resta entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo:',
                fotoPath:'./assets/images/Capitulos/II/media/+172.png',
                fotoN:'Figura 3.1.28.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.29, se muestra un ejemplo de la corrida del programa, donde se calcula la resta entre dos vectores y además se grafica el resultado obtenido de acuerdo al método del Paralelogramo. También, se grafican las cajas que encierran a cada uno de los tres vectores:',
                fotoPath:'./assets/images/Capitulos/II/media/+173.png',
                fotoN:'Figura 3.1.29.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.30, se muestra un ejemplo de la corrida del programa, donde se calcula la proyección del vector A sobre B y el vector perpendicular a otro vector. Además, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos:',
                fotoPath:'./assets/images/Capitulos/II/media/+174.png',
                fotoN:'Figura 3.1.30.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.31, se muestra un ejemplo de la corrida del programa, donde se calcula la proyección del vector A sobre B y el vector perpendicular a otro vector. Luego, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos. Además, se grafican las cajas que encierran a cada uno de los tres vectores (A, B y V_(A/B)), así como también el vector perpendicular D:',
                fotoPath:'./assets/images/Capitulos/II/media/+175.png',
                fotoN:'Figura 3.1.31.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.32, se muestra un ejemplo de la corrida del programa, donde se calculan los vectores reflejados en los cuatro planos y los vectores opuestos del vector A. Además, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos:',
                fotoPath:'./assets/images/Capitulos/II/media/+176.png',
                fotoN:'Figura 3.1.32.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.33, se muestra un ejemplo de la corrida del programa, donde se calculan los vectores reflejados en los cuatro planos y los vectores opuestos del vector A. Luego, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos. Además, se grafican las cajas que encierran a cada uno de los ocho vectores:',
                fotoPath:'./assets/images/Capitulos/II/media/+177.png',
                fotoN:'Figura 3.1.33.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.34, se muestra un ejemplo de la corrida del programa, donde se calculan los vectores reflejados en los cuatro planos y los vectores opuestos del vector B. Además, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos:',
                fotoPath:'./assets/images/Capitulos/II/media/+178.png',
                fotoN:'Figura 3.1.34.',
                fotoDescrip:' Corrida del programa'
              },
              {
                problema:'A continuación, en la Figura 3.3.35, se muestra un ejemplo de la corrida del programa, donde se calculan los vectores reflejados en los cuatro planos y los vectores opuestos del vector B. Luego, se grafica el resultado obtenido de acuerdo a las ecuaciones utilizadas en estos cálculos. Además, se grafican las cajas que encierran a cada uno de los ocho vectores:',
                fotoPath:'./assets/images/Capitulos/II/media/+179.png',
                fotoN:'Figura 3.1.35.',
                fotoDescrip:' Corrida del programa'
              }
            ]
          }
         }
    ];

    this.casosPropuesto=[
        {label: 'Caso Propuesto 1.1 ', tituloN:'Caso de Estudio 1.1: ',titulo:'Interfaz Gráfica del Juego del Tetris.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar la interfaz del Juego de Tetris, como se muestra en la Figura 1.1.1. El juego consiste en jugar con diferentes formas, cada una compuesta decuatro cuadrados. El área principal (rectángulo grande) debe tener un tamaño de 10x20 cuadrados (es decir, 10 cuadrados de ancho y 20 cuadrados de alto). El pequeño rectángulo en la derecha muestra la “siguiente forma” que pronto aparecerá en el área principal (En el ejemplo aparece una figura en “L” de color roja). Para mayor información del juego del Tetris, se puede consultar en el siguiente enlace en la Web: http://en.wikipedia.org/wiki/Tetris.',tareaDescrip:'Las tareas de este proyecto incluyen:',tareas:[{tarea:'•	Dibujar todo lo que se muestra en esta figura, como por ejemplo la posición de cada componente y el rectángulo mayor que contiene al resto de figuras.'},{tarea:'•	Si el cursor del mouse se mueve dentro del área principal, aparecerá el mensaje de “PAUSA” (con una fuente grande); y si el cursor se mueve hacia afuera del área, desaparecerá el mensaje de “PAUSA”.'},{tarea:'•	El cambio de la dimensión de la ventana solo cambiará posiblemente el tamaño, pero no la posición relativa y la relación de aspecto de cualquier componente.'},{tarea:'•	Si se presiona el botón “SALIR”, el programa termina y se cierra (esto no debería ser la salida del menú desplegable estándar de la ventana).'}],fotoPath:'./assets/images/Capitulos/I/media/image296.png',fotoN:'Figura 1.1.1 ',fotoDescrip:'Juego del Tetris. (Image tomada de: XYZ).'},
        {label: 'Caso Propuesto 1.2', tituloN:'Caso de Estudio 1.2: ',titulo:'Panal de Abejas.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar un panal de abejas, como se muestra en la Figura 1.2.1. Para dibujar esta figura se debe leer el valor del lado de un hexágono como, por ejemplo: lado igual a 2. Se recomienda encerrar la figura dentro de un rectángulo y realizar los cálculos de los segmentos que encierran a la figura para poder graficarla.',fotoPath:'./assets/images/Capitulos/I/media/image297.png',fotoN:'Figura 1.2.1 ',fotoDescrip:'Panal de Abejas. (Imagen tomada de Klipartz: https://www.klipartz.com/es/sticker-png-tigsh)'},
        {label: 'Caso Propuesto 1.3', tituloN:'Caso de Estudio 1.3: ',titulo:'Gema de 10 Lados y Polígonos Estrellados de 10 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 10 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image298.png',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y polígonos estrellados de 10 puntas.'}
    ];

    this.praqniquePropuesto=[
        {label: 'Pracnique Propuesto 3.4', tituloN:'Pracnique 3.4: ',titulo:'Puntos y Líneas Notables del Triángulo.',subtitulo:'A)   Problema',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Escribir un programa donde primeramente se grafique un triángulo, se calcule y se imprima el perímetro y su área en función del semi-perímetro, considerando que se debe validar también la existencia de un triángulo. (Ver Figura 3.4.1)',
            fotoPath:'./assets/images/Capitulos/II/media/+180.png',
            fotoN:'Figura 3.4.1.  ',
            fotoDescrip:'El Triángulo y sus fórmulas.'
            }
            ],
            listaParrafos:[
            {
              problema:'a.	Punto de Exeter: El punto de Exeter es un punto especial que está presente en cualquier triángulo (ver Figura 3.4.2). Es uno de los puntos característicos o “centros” de un triángulo, designado como centro X(22) en la Enciclopedia Clark Kimberling de Puntos Notables del Triángulo (Kimberling, C., 1994). Este punto notable fue descubierto en un taller de matemáticas por computadora en la Academia Phillips Exeter en 1986 (Exeter, New Hampshire).',
            },
            {
              problema:'b.	Circunferencia de los nueve puntos o de Feuerbach: Es una circunferencia especial presente en cualquier triángulo y fue descubierta por Karl Feuerbach (ver Figura 3.4.3). Esta circunferencia pasa por los siguientes nueve puntos notables:',
            },
            {
              problema:'1.-	Los puntos medios de los tres lados del triángulo.',
            },
            {
              problema:'2.-	Los pies de las alturas de tal triángulo.',
            },
            {
              problema:'3.-	Los puntos medios de los segmentos que unen los tres vértices con el Ortocentro del triángulo.',
            },
            {
              problema:'4.-	Es tangente exterior a los círculos exinscritos e inscrito al triángulo.',
            }],
            listaFotos:[
            {
              fotoPath:'./assets/images/Capitulos/II/media/+181.png',
              fotoN:'Figura 3.4.2.  ',
              fotoDescrip:'Punto de Exeter y los Triángulos Externos.'
            },
            {
              fotoPath:'./assets/images/Capitulos/II/media/+182.png',
              fotoN:'Figura 3.4.3.  ',
              fotoDescrip:'Circunferencia de los Nueve Puntos.'
            }
            ]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.5', tituloN:'Pracnique 3.5: ',titulo:'Aplicación de Vectores y Dos Fuerzas en el Plano.',subtitulo:'A)   Problema', linkAnexo:'https://drive.google.com/uc?id=...&export=download',tituloAnexo:'Descargar Anexo 1.pdf',iconodescarga:'save_alt',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'La resultante de las fuerzas ejercidas por $\\overrightarrow{T_{1}}$ y $\\overrightarrow{T_{2}}$ es una fuerza $\\overrightarrow{T_{R}}$  dirigida a lo largo del eje $x$. Determine la tensión de las fuerzas $\\overrightarrow{T_{1}}$ y $\\overrightarrow{T_{2}}$, sabiendo que se conocen los valores de los ángulos $ θ $ y $ α$, como se muestra en la Figura 3.5.1, que representa a la solución gráfica por el Método del Paralelogramo dentro de los ejes coordenados (Beer, F., et al., 2010). Diseñar un programa que realice lo siguiente: a) Calcular los valores de la tensión $T_1$ y $T_2$; b) Graficar el Método del Paralelogramo para la tensión resultante.',
            fotoPath:'./assets/images/Capitulos/II/media/+183.png',
            fotoN:'Figura 3.5.1.  ',
            fotoDescrip:'Método del Paralelogramo dentro de los ejes coordenados.'
            }
            ],
            listaParrafos:[
            {
              problema:'Dados los ángulos: $α$ y $θ$',
            },
            {
              problema:'En el paralelogramo se calcula el ángulo $φ$ y el ángulo $β$:',
            },
            {
              problema:'$φ= 360-α (1)$',
            },
            {
              problema:'$β =180-θ-α	(2)$',
            },
            {
              problema:'Luego se calcula el valor de la tensión $T_1$ y $T_2$:',
            },
            {
              problema:'$T_1=-\\frac{T_R sin(φ)}{sin(θ-φ)} (3)$',
            },
            {
              problema:'$T_2=-\\frac{T_R sin(θ)}{sin(θ-φ)} (4)$',
            },
            {
              problema:'La demostración y obtención de las ecuaciones (3) y (4) utilizando Física y Matemáticas, se muestra en el Anexo 1. Además, se presenta un ejercicio resuelto aplicando estas fórmulas.',
            }]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.6', tituloN:'Pracnique 3.6: ',titulo:'Aplicación de Vectores y Varias Fuerzas en el Plano.',subtitulo:'A)   Problema', linkAnexo:'https://drive.google.com/uc?id=...&export=download',tituloAnexo:'Descargar Anexo 2.pdf',iconodescarga:'save_alt',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Cuatro fuerzas ubicadas en cualquier cuadrante, actúan sobre un perno $O$. Determinar la resultante de las fuerzas sobre el perno y la dirección del ángulo de esta fuerza. Diseñar un Programa que realice lo siguiente: a) Determinar la fuerza definida en términos de su magnitud y dos puntos sobre su línea de acción, para calcular las componentes $F_{1_x}$ y $ F_{1_y} $ de la fuerza $ F_1$ en cualquier cuadrante; b) Determinar la fuerza definida en términos de su magnitud y dos puntos sobre su línea de acción, para calcular las componentes $ F_{2_x} $ y $ F_{2_y}$ de la fuerza $ F_2 $ en cualquier cuadrante; c) Determinar la fuerza definida en términos de su magnitud y dos puntos sobre su línea de acción, para calcular las componentes $ F_{3_x} $ y $ F_{3_y} $ de la fuerza $ F_3 $ en cualquier cuadrante; d) Determinar la resultante de las fuerzas sobre el perno y la dirección del ángulo de esta fuerza; e) Graficar las tres fuerzas con sus componentes representados por líneas de puntos, las mismas que intervienen en el perno representado por el punto $O$; f) Graficar la fuerza resultante con sus componentes representados por líneas de puntos. Un ejemplo específico con tres fuerzas se muestra en la Figura 3.6.1 (Beer, F., et al., 2010).',
            fotoPath:'./assets/images/Capitulos/II/media/+184.png',
            fotoN:'Figura 3.6.1.  ',
            fotoDescrip:'Varias fuerzas en el plano.'
            }
            ],
            listaParrafos:[
            {
              problema:'La solución utilizando Física y Matemáticas del ejemplo de la Figura 3.6.1, se muestra en el Anexo 2.',
            }
           ]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.7', tituloN:'Pracnique 3.7: ',titulo:'Aplicación de Vectores y Fuerzas Coplanares.',subtitulo:'A)   Problema',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Con el empleo de software, grafique las fuerzas, determine la magnitud y la dirección de la resultante de $n$ fuerzas aplicadas en el punto $A$ (Beer, F., et al., 2010). Utilice este software para resolver los siguientes problemas (ver Figura 3.7.1): ',
            fotoPath:'./assets/images/Capitulos/II/media/+185.png',
            fotoN:'Figura 3.7.1.  ',
            fotoDescrip:' Varias fuerzas coplanares.'
            },
            {
              problema:'$\\bf{Ejercicio 1:}$ Determine las componentes $x$ e $y$ de cada una de las fuerzas de la Figura 3.7.2 (Beer, F., et al., 2010). Además, determine la resultante de las tres fuerzas del problema. (Resp. 251 N;85.3°).',
              fotoPath:'./assets/images/Capitulos/II/media/+186.png',
              fotoN:'Figura 3.7.2.  ',
              fotoDescrip:'Tres fuerzas coplanares.'
            },
            {
              problema:'$\\bf{Ejercicio 2:}$ Si se sabe que $α=35°$, determine la resultante de las tres fuerzas mostradas en la Figura 3.7.3 (Beer, F., et al., 2010). (Resp. 309 N;86.6°).',
              fotoPath:'./assets/images/Capitulos/II/media/+187.png',
              fotoN:'Figura 3.7.3.  ',
              fotoDescrip:' Tres fuerzas coplanares.'
              }
            ]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.8', tituloN:'Pracnique 3.8: ',titulo:'Aplicación de Vectores y Tensiones.',subtitulo:'A)   Problema',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Una carga P está sostenida por dos cables como se muestra en la Figura 3.8.1. Determine, empleando software, la tensión en cada cable para cualquiera de los valores $P$ y $θ$ que se encuentra desde $θ_1=β-90$ hasta $ θ_2=90-α$, con incrementos dados $∆θ $(Beer, F., et al., 2010). Con el software determine para los siguientes tres conjuntos de números: a) la tensión en cada cable para valores de $θ$ que van de $θ_1$ a $θ_2$; b) el valor de $θ$ para el cual la tensión en los dos cables es la mínima posible; c) el valor correspondiente de la tensión.',
            fotoPath:'./assets/images/Capitulos/II/media/+188.png',
            fotoN:'Figura 3.8.1.  ',
            fotoDescrip:'Tensiones en cables.'
            }
            ]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.9', tituloN:'Pracnique 3.9: ',titulo:'Aplicación de Vectores y Fuerzas en el Espacio.',subtitulo:'A)   Problema',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Utilice software para determinar la magnitud y la dirección de la resultante de $n $ fuerzas $F_i$, donde $i=1,2,3,…,n$, que se aplican en el punto $A_0$ con coordenadas $x_0$, $ y_0$ y $z_0$ (ver Figura 3.9.1), si se sabe que la línea de acción de $F_i$ pasa a través del punto $A_i$ con coordenadas $x_i$, $y_i$ y $z_i$, (Beer, F., et al., 2010). Use este software para graficar y resolver los problemas siguientes:',
            fotoPath:'./assets/images/Capitulos/II/media/+189.png',
            fotoN:'Figura 3.9.1.  ',
            fotoDescrip:'Fuerzas en el espacio.'
            },
            {
              problema:'$\\bf{Ejercicio 1:}$ Si se sabe que las tensiones en los cables $AB $ y $AC$ son de $ 510 lb$ y de $425 lb$ respectivamente (ver Figura 3.9.2), determine la magnitud y la dirección de la resultante de las fuerzas ejercidas en A por los dos cables (Beer, F., et al., 2010). $(Resp. 913 lb;θ_x=50.6°;θ_y=117.6°;θ_z=51.8°)$.',
              fotoPath:'./assets/images/Capitulos/II/media/+190.png',
              fotoN:'Figura 3.9.2.  ',
              fotoDescrip:'Tensiones en cables y marcos.'
            },
            {
              problema:'$\\bf{Ejercicio 2: }$ Para el marco de la Figura 3.9.3, determine la magnitud y la dirección de la resultante de las fuerzas ejercidas por el cable en $B$ si la tensión en el cable es de $385 N$. Si se sabe que este marco $ABC$ está sostendio por el cable $DBE$, el cual pasa a través de un anillo sin fricción en $B$ (Beer, F., et al., 2010). $(Resp. 748 N;θ_x=120.1°;θ_y=52.5°;θ_z=128.0°)$.',
              fotoPath:'./assets/images/Capitulos/II/media/+191.png',
              fotoN:'Figura 3.9.3.  ',
              fotoDescrip:'Tensiones en cables y marcos.'
            },
            {
              problema:'$\\bf{Ejercicio 3:}$ $A$ fin de mover un camión volcado, se atan dos cables en $ A$ y se jalan mediante las grúas $B$ y $C$ como se muestra en la Figura 3.9.4. Si se sabe que la tensión en el cable $AB$ es de $10 kN$ y en el cable $AC$ es de $7.5 kN$, determine la magnitud y la dirección de la resultante de las fuerzas ejercidas en $A$ por los dos cables (Beer, F., et al., 2010). $(Resp. 15.13 kN;θ_x=133.4°;θ_y=43.6°;θ_z=86.6°)$.',
              fotoPath:'./assets/images/Capitulos/II/media/+192.png',
              fotoN:'Figura 3.9.4.  ',
              fotoDescrip:'Tensiones en cables en un camión volcado.'
            }
            ]
          }
         ]
        },
        {label: 'Pracnique Propuesto 3.10', tituloN:'Pracnique 3.10: ',titulo:'Aplicación de Vectores y Tensiones en el Espacio.',subtitulo:'A)   Problema',
        listaGeneral:[
          {
            listaParrafoFotos:[
            {
            problema:'Tres cables se unen en los puntos $A_1, A_2$ y $A_3$, respectivamente, y están conectados en el punto $A_0$, al cual se le aplica una carga $P$ como se muestra en la Figura 3.10.1. Utilice software para graficar y determinar la tensión en cada uno de los cables (Beer, F., et al., 2010). Use este software para graficar y resolver los problemas siguientes:',
            fotoPath:'./assets/images/Capitulos/II/media/+193.png',
            fotoN:'Figura 3.10.1.  ',
            fotoDescrip:'Tensiones en el espacio.'
            },
            {
              problema:'$\\bf{Ejercicio 1: }$Tres cables están conectados en $A$, donde se aplican las fuerzas $P$ y $Q$, como se muestra en la Figura 3.10.2. Si se sabe que $Q=0$, encuentre el valor de $P$ para el cual la tensión en el cable $AD$ es de $305 N$ (Beer, F., et al., 2010). $(Resp. 960 N)$',
              fotoPath:'./assets/images/Capitulos/II/media/+194.png',
              fotoN:'Figura 3.10.2.  ',
              fotoDescrip:'Tensiones en cables en 3D.'
              },
              {
                problema:'$\\bf{Ejercicio 2:}$ Para la placa rectangular de la Figura 3.10.3, determine la tensión en cada uno de los tres cables, si se sabe que el peso de la placa es de $792 N$ (Beer, F., et al., 2010). $(Resp. T_AB=510 N;T_AC=56.2 N; T_AD=536 N).$',
                fotoPath:'./assets/images/Capitulos/II/media/+195.png',
                fotoN:'Figura 3.10.3.  ',
                fotoDescrip:'Tensiones en cables y placas.'
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
          { label: 'Problema 1', content: 'Caso 1'},
          { label: 'Problema 2', content: 'Caso 2'},
          { label: 'Problema 3', content: 'Caso 3'}
        ]);
      }, 1000);
    });

  }
}
