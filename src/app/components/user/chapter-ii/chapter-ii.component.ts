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
        {label: 'Praqnique 3.1', 
         tituloN:'Praqnique 3.1: ',
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
         }/*,
         {label: 'Praqnique 1.2', 
         tituloN:'Praqnique 1.2: ',
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
         {label: 'Praqnique 1.3', 
         tituloN:'Praqnique 1.3: ',
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
                        problema:'La implementación de la clase frmTenPointedStarPolygon, se presenta a continuación en la Tabla 1.3.2, que es la clase que representa a la interfaz gráfica de usuario de la figura geométrica plantada en este praqnique.',
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
              listaPrueba:[
                {
                problema:'A continuación, en la Figura 1.3.4, se muestra un ejemplo de la corrida del programa:',
                fotoPath:'./assets/images/Capitulos/II/media/7.png',
                fotoN:'Figura 1.3.4 ',
                fotoDescrip:' Corrida del programa'
                }
              ]
            }
        }*/
    ];

    this.casosPropuesto=[
        {label: 'Caso Propuesto 1.1 ', tituloN:'Caso de Estudio 1.1: ',titulo:'Interfaz Gráfica del Juego del Tetris.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar la interfaz del Juego de Tetris, como se muestra en la Figura 1.1.1. El juego consiste en jugar con diferentes formas, cada una compuesta decuatro cuadrados. El área principal (rectángulo grande) debe tener un tamaño de 10x20 cuadrados (es decir, 10 cuadrados de ancho y 20 cuadrados de alto). El pequeño rectángulo en la derecha muestra la “siguiente forma” que pronto aparecerá en el área principal (En el ejemplo aparece una figura en “L” de color roja). Para mayor información del juego del Tetris, se puede consultar en el siguiente enlace en la Web: http://en.wikipedia.org/wiki/Tetris.',tareaDescrip:'Las tareas de este proyecto incluyen:',tareas:[{tarea:'•	Dibujar todo lo que se muestra en esta figura, como por ejemplo la posición de cada componente y el rectángulo mayor que contiene al resto de figuras.'},{tarea:'•	Si el cursor del mouse se mueve dentro del área principal, aparecerá el mensaje de “PAUSA” (con una fuente grande); y si el cursor se mueve hacia afuera del área, desaparecerá el mensaje de “PAUSA”.'},{tarea:'•	El cambio de la dimensión de la ventana solo cambiará posiblemente el tamaño, pero no la posición relativa y la relación de aspecto de cualquier componente.'},{tarea:'•	Si se presiona el botón “SALIR”, el programa termina y se cierra (esto no debería ser la salida del menú desplegable estándar de la ventana).'}],fotoPath:'./assets/images/Capitulos/I/media/image296.png',fotoN:'Figura 1.1.1 ',fotoDescrip:'Juego del Tetris. (Image tomada de: XYZ).'},
        {label: 'Caso Propuesto 1.2', tituloN:'Caso de Estudio 1.2: ',titulo:'Panal de Abejas.',subtitulo:'A)   Problema',problema:'Escriba un programa para dibujar un panal de abejas, como se muestra en la Figura 1.2.1. Para dibujar esta figura se debe leer el valor del lado de un hexágono como, por ejemplo: lado igual a 2. Se recomienda encerrar la figura dentro de un rectángulo y realizar los cálculos de los segmentos que encierran a la figura para poder graficarla.',fotoPath:'./assets/images/Capitulos/I/media/image297.png',fotoN:'Figura 1.2.1 ',fotoDescrip:'Panal de Abejas. (Imagen tomada de Klipartz: https://www.klipartz.com/es/sticker-png-tigsh)'},
        {label: 'Caso Propuesto 1.3', tituloN:'Caso de Estudio 1.3: ',titulo:'Gema de 10 Lados y Polígonos Estrellados de 10 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 10 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image298.png',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y polígonos estrellados de 10 puntas.'}
    ];

    this.praqniquePropuesto=[
        {label: 'Praqnique Propuesto 1.1', tituloN:'Praqnique 1.1: ',titulo:'Polígonos Estrellados de 16 y 8 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un polígono regular de 16 lados, dibujar la figura geométrica correspondiente y los diferentes polígonos estrellados de 8 puntas, tal y como se muestra en la figura 1.1.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image299.jpg',fotoN:'Figura 1.1.1 ',fotoDescrip:'Polígonos estrellados de 16 y 8 puntas.'},
        {label: 'Praqnique Propuesto 1.2', tituloN:'Praqnique 1.2: ',titulo:'Pentágonos y Polígonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un pentágono, dibujar la figura geométrica correspondiente y los diferentes polígonos estrellados de 5 puntas, tal y como se muestra en la figura 1.2.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image300.jpg',fotoN:'Figura 1.2.1 ',fotoDescrip:'Pentágonos y polígonos estrellados de 5 puntas.'},
        {label: 'Praqnique Propuesto 1.3', tituloN:'Praqnique 1.3: ',titulo:'Gema de 10 Lados y Polígonos Estrellados de 5 Puntas.',subtitulo:'A)   Problema',problema:'Dado el lado de un decágono, dibujar la figura geométrica correspondiente a una gema y los diferentes polígonos estrellados de 5 puntas, tal y como se muestra en la figura 1.3.1. Se debe considerar que las figuras geométricas se grafican con respecto al punto O(0,0).',fotoPath:'./assets/images/Capitulos/I/media/image301.jpg',fotoN:'Figura 1.3.1 ',fotoDescrip:'Gema de 10 lados y polígonos estrellados de 5 puntas.'}
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
