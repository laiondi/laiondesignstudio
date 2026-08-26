/* ======================================================================
   PORTFOLIO DATA — EDITÁ SOLAMENTE ESTE ARCHIVO PARA CARGAR TRABAJOS
   ======================================================================

   1. Guardá las imágenes en tu carpeta /images.
      Recomendación:

      images/projects/nombre-del-proyecto/cover.jpg
      images/projects/nombre-del-proyecto/01.jpg
      images/projects/nombre-del-proyecto/02.jpg

   2. Duplicá un bloque de proyecto y cambiá los textos/rutas.
   3. Las categorías se convierten AUTOMÁTICAMENTE en botones de filtro.
      Podés escribir las que quieras: "Furniture", "Product", "Development",
      "Interiors", etc. No hace falta modificar el HTML.

   4. gallery acepta:
      { image: "ruta.jpg", caption: "Texto opcional" }

      Si no necesitás galería, dejá:
      gallery: []

   ====================================================================== */

window.PORTFOLIO_PROJECTS = [



    {
        id: "project-01",
        title: "Plastic injection Watter Bottle",
        category: "Product development",
        subtitle: "Plastic injection · Produc Design · Rendering",
        cover: "images/cara 1.jpg",
        year: "2022",

        description: "Designed and engineered a complete high-precision tooling system for a dual-component sports water bottle (caramañola/shaker). The project covers the full product development lifecycle, transitioning from conceptual industrial design and ergonomic 3D modeling to detailed manufacturing blueprints, utilizing injection blow molding (IBM) for the bottle body and plastic injection molding for the cap system.",

        tags: [
            "Industrial Design",
            "3D",
            "CAD",
            "Plastic injection",
            "Rendering",
            
        ],

        gallery: [
            { image: "images/cara 1.jpg", caption: "Final model" },
            { image: "images/cara.jpg", caption: "Final model" },
            { image: "images/cara2 1.jpg", caption: "Final model" },
            { image: "images/cara2 2.jpg", caption: "Final model" },
            { image: "images/cara2.jpg", caption: "Final model" },
            { image: "images/cara3.jpg", caption: "Close bottle mold" },
            { image: "images/cara4.jpg", caption: "Open bottle mold / Refrigeration map" },
            { image: "images/cara6.jpg", caption: "Explode cap mold Base" },
            { image: "images/cara7.jpg", caption: "Explode cap mold Base" },
            { image: "images/cara8.jpg", caption: "Inserts" },
            { image: "images/cara5.jpg", caption: "Explode cap mold Bas" },
            { image: "images/plano conjunto.jpg", caption: "CAD" },
            { image: "images/md.jpg", caption: "CAD" },
            { image: "images/caramañola.jpg", caption: "CAD" },
            { image: "images/sufriderasdfsdf.jpg", caption: "CAD" },
            { image: "images/sistema de molde.jpg", caption: "CAD" },
            { image: "images/postizo.jpg", caption: "CAD" },
            { image: "images/porta macho.jpg", caption: "CAD" },
            { image: "images/placa retractora 2.jpg", caption: "CAD" },
            { image: "images/placa retractora 1.jpg", caption: "CAD" },
            { image: "images/placa movil.jpg", caption: "CAD" },
            { image: "images/placa expulsora2.jpg", caption: "CAD" },
            { image: "images/paralelas.jpg", caption: "CAD" },
            { image: "images/nueva tapa.jpg", caption: "CAD" },
            { image: "images/hembra.jpg", caption: "CAD" },
            { image: "images/tapon.jpg", caption: "CAD" },
            { image: "images/columna.jpg", caption: "CAD" },
            { image: "images/buje.jpg", caption: "CAD" },
            { image: "images/tornillo.jpg", caption: "CAD" }                                  
            
        ]
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-02",
        title: "Coworking desk",
        category: "Product development",
        subtitle: "Product develompent · Furniture · Rendering",
        cover: "images/img-13 (2).jpg",
        year: "2024",description: `It is a table designed for the coworking space of a construction company. They needed tables with electrical outlets in the center for devices, as well as a power supply system connected to the ceiling, allowing each table to receive electricity from above. They also required a storage rack and another rack to house their servers.

        The power supply issue was solved by simply incorporating a power strip, eliminating the need for a permanent cable and outlet installation. The goal was to reduce costs while providing an efficient solution. In case of any issue, the extension cord could simply be removed and replaced. The system was designed to allow the element to be easily installed and removed, using 3D-printed acrylic components and custom cavities.

        For both the storage rack and the server rack, a single versatile and dynamic design was developed.

        A total of 10 tables and 8 racks were produced, featuring tubular steel frames and solid laminated Soita wood surfaces.`,


        tags: [
            "Interior Design",
            "Furniture",
            "Product develompent",
            "Rendering"
        ],


        gallery: [
            { image: "images/img-12.jpg", caption: "General view" },
            { image: "images/img-13.jpg", caption: "Furniture detail" },
            { image: "images/img-14.jpg", caption: "Material / final view" },
            { image: "images/img-15.jpg", caption: "Material / final view" },
            { image: "images/img-16.jpg", caption: "Material / final view" },            
            { image: "images/img-16 (1).jpg", caption: "Material / final view" },
            { image: "images/img-16 (2).jpg", caption: "Power detail" },
            { image: "images/img-16 (3).jpg", caption: "Power detail" },
            { image: "images/img-16 (4).jpg", caption: "CNC fabrication detail" },                       
            { image: "images/img-11 2.jpg", caption: "Exploration" },
            { image: "images/img-11 1.jpg", caption: "Parts" },
            { image: "images/img-11 11.jpg", caption: "CAD" },
            { image: "images/img-11 12.jpg", caption: "CAD" },
            { image: "images/img-16 (5).jpg", caption: "3D power box" }, 
            { image: "images/img-11 13.jpg", caption: "3D print power box" },
            { image: "images/img-11 14.jpg", caption: "3D print power box" },
            { image: "images/img-11 15.jpg", caption: "3D print power box" },
            { image: "images/img-11 16.jpg", caption: "3D print power box" },
            { image: "images/img-16 1.jpg", caption: "Assambly process" },
            { image: "images/img-16 11.jpg", caption: "Assambly process" }
            

        ]
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

    {
        id: "project-04",
        title: "Waterfall bench",
        category: "Furniture",
        subtitle: "Product Design · Form Exploration",
        cover: "images/img-2.jpg",
        year: "2025",

        description: "A mate stool designed as a tribute to the landscape and identity of Misiones, Argentina. The piece is made from CNC-cut and folded sheet metal, using a continuous bent surface to evoke the movement and vertical drop of a waterfall, inspired by the Iguazú Falls. Its red finish references the characteristic red soil of Misiones, connecting the object with the region through both form and color. The design combines local identity, digital fabrication, and simple structural logic in a compact and functional piece of furniture.",

        tags: [
            "Product Design",
            "Form Study",
            "3D Modeling"
        ],

        gallery: [
            { image: "images/img-2.jpg", caption: "Form exploration" },
            { image: "images/img-3.jpg", caption: "3D development" },
            { image: "images/img-4.jpg", caption: "3D development" },
            { image: "images/img-1 (3).jpg", caption: "Final result" },
            { image: "images/img-1 (4).jpg", caption: "CAD" }
        ]
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    {
        id: "project-05",
        title: "Augusta Chair",
        category: "Furniture",
        subtitle: "Product design · 3d model · Furniture . Rendering",
        cover: "images/img-6 1.jpg",
        year: "2025",

        description: "A chair concept that explores the combination of bent metal and wood within a simple, exposed structural system. The folded metal frame defines the chair’s profile and provides its main structural support, while the wooden seat and backrest introduce warmth and contrast against the industrial character of the metal. Visible fasteners and connection points are intentionally integrated into the design, reinforcing the relationship between structure, material, and assembly.",

        tags: [
            "Development",
            "Manufacturing",
            "Technical Detail"
        ],

        gallery: [
            { image: "images/img-6.jpg", caption: "View" },
            { image: "images/img-7 1.jpg", caption: "View" },
            { image: "images/img-7 2.jpg", caption: "View" },
            { image: "images/img-7 3.jpg", caption: "View" },
            { image: "images/img-7 4.jpg", caption: "View" },
            { image: "images/img-7.jpg", caption: "View" },
            { image: "images/img-5.jpg", caption: "View" }
            
        ]
    },

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-06",
        title: "Draw Desk",
        category: "Furniture",
        subtitle: "Furniture design · Development",
        cover: "images/img-9.jpg",
        year: "2026",

        description: "A wall-mounted drawing and work desk designed for small spaces and flexible use. The main work surface can be adjusted to multiple positions — 45°, 90°, and 180° — allowing it to adapt to drawing, sketching, writing, or general desk work. When not in use, the desk folds against the wall, minimizing its footprint and keeping the space clear. The design combines a compact folding mechanism with an upper shelf for storage or display, creating a functional workstation that can easily adapt to different activities and limited interiors.",

        tags: [
            "Industrial Design",
            "Furniture",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [

            { image: "images/img-8 1.jpg", caption: "Concept / Explore" },
            { image: "images/img-8 2.jpg", caption: "Context / Result" },
            { image: "images/img-8 3.jpg", caption: "Context / Result" },
            { image: "images/img-8.jpg", caption: "Explode" },
            { image: "images/img-9 1.jpg", caption: "Open Lateral View" },
            { image: "images/img-9 2.jpg", caption: "detail" },
            { image: "images/img-9 3.jpg", caption: "Close Lateral view" },
            { image: "images/img-9 4.jpg", caption: "Cad / Dimensions" }                         
                        
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

      {
        id: "project-07",
        title: "Center table",
        category: "Woodworking",
        subtitle: "Produc Design · Rendering",
        cover: "images/img-18.jpg",
        year: "2026",

        description: "A nesting coffee table set designed as two independent units that work together as a compact and flexible system. The smaller table slides underneath the larger one when not in use, reducing the overall footprint and allowing the furniture to adapt to different spatial needs. Both pieces are built with structural steel tube frames and melamine surfaces, combining a lightweight visual language with simple, durable construction. The design can be used as a single coffee table, separated into two support surfaces, or nested together for more efficient use of space.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-17.jpg", caption: "3D Render" },
            { image: "images/img-17 1.jpg", caption: "Explode" },
            { image: "images/img-18 (1).jpg", caption: "Viewe" },
            { image: "images/img-18 (2).jpg", caption: "View" },
            { image: "images/img-18 (3).jpg", caption: "View" },
            { image: "images/img-18.jpg", caption: "View" },
            { image: "images/img-19.jpg", caption: "View" },
            { image: "images/img-18 2.jpg", caption: "View" },
            { image: "images/img-19 1.jpg", caption: "View" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     {
        id: "project-07",
        title: "Center table",
        category: "Woodworking",
        subtitle: "Produc Design · Development",
        cover: "images/img-20.jpg",
        year: "2026",

        description: "A Japanese-inspired side table designed around the everyday ritual of drinking mate. Its slim wooden structure fits naturally beside a sofa, providing a main surface for the thermos and mate, while an integrated fold-out side tray creates additional space for a phone or small personal items. The design combines compact proportions, functionality, and a simple structural language influenced by traditional Japanese furniture.",
        
        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-20.jpg", caption: "view" },
            { image: "images/img-21.jpg", caption: "view" },
            { image: "images/img-22.jpg", caption: "view" },
            { image: "images/img-23.jpg", caption: "view" },
            { image: "images/img-20 1.jpg", caption: "view" },
            { image: "images/img-20 2.jpg", caption: "view" }
            
            
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-08",
        title: "Bar",
        category: "Woodworking",
        subtitle: "Produc Design · Development",
        cover: "images/img-25.jpg",
        year: "2026",

        description: "A Japanese-inspired home bar crafted entirely from solid wood, combining storage, preparation, and serving functions within a compact piece of furniture. The design features dedicated shelving for bottles and glassware, integrated side tables that provide additional support surfaces, and a fold-down front counter that creates a practical workspace for preparing drinks. The main structure also incorporates open shelving and concealed storage, maximizing functionality without compromising its visual balance. Integrated lighting at the top and inside the storage area enhances both usability and the display of bottles and glassware. Its proportions, exposed wooden structure, and material palette draw inspiration from traditional Japanese aesthetics, emphasizing simplicity, craftsmanship, and the natural character of wood.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-24.jpg", caption: "Exploration" },
            { image: "images/img-24 2.jpg", caption: "3D model" },
            { image: "images/img-24 1.jpg", caption: "3D explode" },
            { image: "images/img-25.jpg", caption: "View" },
            { image: "images/img-26 6.jpg", caption: "View" },
            { image: "images/img-26 5.jpg", caption: "View" },
            { image: "images/img-26 7.jpg", caption: "View" },
            { image: "images/img-26 4.jpg", caption: "View" },
            { image: "images/img-26 2.jpg", caption: "View" },
            { image: "images/img-26 3.jpg", caption: "View" },
            { image: "images/img-26.jpg", caption: "View" },                    
                        
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-09",
        title: "Side table",
        category: "Woodworking",
        subtitle: "Produc Design · Development",
        cover: "images/img-27 (2).jpg",
        year: "2026",

        description: "A compact side table handcrafted in my workshop from solid Paraíso wood. The design combines a clean, straightforward structure with traditional woodworking techniques, highlighting the natural grain and warmth of the material. The piece features a solid wood top and a slatted lower shelf that provides additional storage or display space while keeping the overall form visually light. Its construction was developed around simple proportions, structural stability, and exposed joinery, allowing the assembly logic to become part of the design. From design and detailing to fabrication and final assembly, the entire piece was produced in my workshop, combining product development with hands-on craftsmanship.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-27 3.jpg", caption: "3D Model / Render" },
            { image: "images/img-27 2.jpg", caption: "Explode" },
            { image: "images/img-27 1.jpg", caption: "Explode" },
            { image: "images/img-27 (2).jpg", caption: "View" },
            { image: "images/img-27 (5).jpg", caption: "View" },
            { image: "images/img-27 (6).jpg", caption: "View" },
            { image: "images/img-27 (4).jpg", caption: "View" },
            { image: "images/img-27 (7).jpg", caption: "View" },
            { image: "images/img-27 (8).jpg", caption: "View" },
            { image: "images/img-27 (3).jpg", caption: "View" }         
                       
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    {
        id: "project-10",
        title: "Piip Stan",
        category: "Exhibit Design",
        subtitle: "Produc Design · Development",
        cover: "images/img-28 (2).jpg",
        year: "2026",

        description: "A modular exhibition stand designed as a flexible system that can be scaled and reconfigured according to the size and requirements of each event. The structure is composed of interchangeable panels and modules that can be combined to create different layouts, including reception areas, exhibition spaces, shelving, and interactive zones. Each panel is built from a 20 × 20 mm metal frame with corrugated cardboard surfaces, connected through custom 3D-printed components that allow the system to be assembled without permanent joints. The project combines modular design, digital fabrication, lightweight materials, and a simple assembly logic to create an adaptable exhibition system capable of supporting multiple configurations and uses.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-28 (2).jpg", caption: "Concept / first stage" },
            { image: "images/img-28 3.jpg", caption: "Concept / first stage" },
            { image: "images/img-28 4.jpg", caption: "Concept / first stage" },
            { image: "images/img-28.jpg", caption: "Concept / first stage" },
            { image: "images/img-27.jpg", caption: "Concept / first stage" },
            { image: "images/img-28 5.jpg", caption: "Concept / first stage" },
            { image: "images/img-28 6.jpg", caption: "Concept / first stage" },
            { image: "images/img-28 7.jpg", caption: "Concept / first stage" },
            { image: "images/img-29.jpg", caption: "Concept / first stage" },
            { image: "images/img-30.jpg", caption: "Concept / first stage" }                 
            
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    {
        id: "project-11",
        title: "Faniot Stand",
        category: "Exhibit Design",
        subtitle: "Produc Design · Development",
        cover: "images/img-31.jpg",
        year: "2026",

        description: "A modular and scalable exhibition stand designed for an IoT sensor company. The system is built from interchangeable panels and modules that can be assembled in different configurations depending on the scale and requirements of each event. The layout integrates product display areas, demonstration points, meeting spaces, screens, and branded surfaces within a single flexible structure. Its modular construction allows the stand to be expanded, reduced, transported, and reconfigured for different exhibition formats, creating a reusable system that combines product communication, technology, and spatial design.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-32.jpg", caption: "Concept / first stage" },
            { image: "images/img-33.jpg", caption: "Concept / first stage" },
            { image: "images/img-33 3.jpg", caption: "Concept / first stage" },
            { image: "images/img-33 2.jpg", caption: "Concept / first stage" },
            { image: "images/img-33 1.jpg", caption: "Concept / first stage" },
            { image: "images/img-31.jpg", caption: "Concept / first stage" },
            { image: "images/img-31 1.jpg", caption: "Concept / first stage" },
            { image: "images/img-31 2.jpg", caption: "Concept / first stage" },
            { image: "images/img-31 3.jpg", caption: "Concept / first stage" }
                           
            
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     {
        id: "project-12",
        title: "NEA electrica Stand",
        category: "Exhibit Design",
        subtitle: "Produc Design · Development",
        cover: "images/img-35 (5).jpg",
        year: "2026",

        description: "An exhibition stand designed for a company specializing in electrical supplies, tools, and home automation systems. The project was developed around the dimensions and structural constraints of a rented event tent, using the existing enclosure as the starting point for the spatial layout. From there, the design focused on circulation, product visibility, and the creation of differentiated areas for home automation, electrical equipment, tools, product displays, demonstrations, and customer interaction. Custom furniture and exhibition elements were integrated throughout the space to organize the different product categories while maintaining a consistent visual identity and an open, accessible visitor experience.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-35 (2).jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (3).jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (4).jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (5).jpg", caption: "Concept / first stage" },            
            { image: "images/img-35 1.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 2.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 3.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 4.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 5.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 6.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 7.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 8.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 9.jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (8).jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (7).jpg", caption: "Concept / first stage" },
            { image: "images/img-35 (6).jpg", caption: "Concept / first stage" },
            { image: "images/img-18p.jpg", caption: "Concept / first stage" },
            { image: "images/img-17p.jpg", caption: "Concept / first stage" },
            { image: "images/img-16p.jpg", caption: "Concept / first stage" },
            { image: "images/img-15p.jpg", caption: "Concept / first stage" },
            { image: "images/img-14p.jpg", caption: "Concept / first stage" },
            { image: "images/img-13p.jpg", caption: "Concept / first stage" },
            { image: "images/img-12p.jpg", caption: "Concept / first stage" },
            { image: "images/img-11p.jpg", caption: "Concept / first stage" },
            { image: "images/img-10p.jpg", caption: "Concept / first stage" },
            { image: "images/img-9p.jpg", caption: "Concept / first stage" },
            { image: "images/img-8p.jpg", caption: "Concept / first stage" },
            { image: "images/img-7p.jpg", caption: "Concept / first stage" },
            { image: "images/img-6p.jpg", caption: "Concept / first stage" },
            { image: "images/img-5p.jpg", caption: "Concept / first stage" },
            { image: "images/img-4p.jpg", caption: "Concept / first stage" },
            { image: "images/img-3p.jpg", caption: "Concept / first stage" },
            { image: "images/img-2p.jpg", caption: "Concept / first stage" },
            { image: "images/img-1p.jpg", caption: "Concept / first stage" },                         
            
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     {
        id: "project-13",
        title: "Industrial Digital Twin",
        category: "Industrial VR Experience",
        subtitle: "3D Modeling · Immersive VR Environment",
        cover: "images/img2a.jpg",
        year: "2026",

        description: "Full-scale 3D digitalization and environment optimization of an existing industrial park. Responsibilities included precise 3D modeling from blueprints and setting up the real-time VR environment for immersive exploration.\n\n• Workflow: SketchUp + TwinMotion\n• Format: Interactive VR Experience (Oculus Compatible)\n• Concept: Real-time Digital Twin",

        tags: [
            "3D Modeling",
            "Digital Twin",
            "Virtual Reality (VR)",
            "TwinMotion",
            "ArchViz",
            "Environment Art"
        ],

        gallery: [

            { image: "images/img-35 (10).jpg", caption: "Concept / Explore" },
            { image: "images/img-35 (11).jpg", caption: "Context / Result" },
            { image: "images/img-35 (12).jpg", caption: "Context / Result" },
            { image: "images/img-35 (13).jpg", caption: "Explode" },
            { image: "images/img-35 (14).jpg", caption: "Open Lateral View" },
            { image: "images/img-35 (15).jpg", caption: "detail" },
            { image: "images/img-35 (16).jpg", caption: "Close Lateral view" },
            { image: "images/img1a.jpg", caption: "Concept / Explore" },
            { image: "images/img1b.jpg", caption: "Concept / Explore" },
            { image: "images/img1c.jpg", caption: "Concept / Explore" },
            { image: "images/img1d.jpg", caption: "Concept / Explore" },
            { image: "images/img1e.jpg", caption: "Concept / Explore" },
            { image: "images/img1f.jpg", caption: "Concept / Explore" },
            { image: "images/img1g.jpg", caption: "Concept / Explore" },
            { image: "images/img1h.jpg", caption: "Concept / Explore" },
            { image: "images/img1i.jpg", caption: "Concept / Explore" },
            { image: "images/img1j.jpg", caption: "Concept / Explore" },
            { image: "images/img1k.jpg", caption: "Concept / Explore" },
            { image: "images/img1l.jpg", caption: "Concept / Explore" },
            { image: "images/img1m.jpg", caption: "Concept / Explore" },
            { image: "images/img1o.jpg", caption: "Concept / Explore" },
            { image: "images/img1p.jpg", caption: "Concept / Explore" },
            { image: "images/img1q.jpg", caption: "Concept / Explore" },
            { image: "images/img1r.jpg", caption: "Concept / Explore" },
            { image: "images/img1s.jpg", caption: "Concept / Explore" },
            { image: "images/img1t.jpg", caption: "Concept / Explore" },
            { image: "images/img1w.jpg", caption: "Concept / Explore" },            
            { image: "images/img2a.jpg", caption: "Concept / Explore" },
            { image: "images/img2b.jpg", caption: "Concept / Explore" },
            { image: "images/img2c.jpg", caption: "Concept / Explore" },
            { image: "images/img2d.jpg", caption: "Concept / Explore" },
            { image: "images/img2e.jpg", caption: "Concept / Explore" },
            { image: "images/img2f.jpg", caption: "Concept / Explore" },
            { image: "images/img2g.jpg", caption: "Concept / Explore" },
            { image: "images/img2h.jpg", caption: "Concept / Explore" },
            { image: "images/img2i.jpg", caption: "Concept / Explore" },
            { image: "images/img2j.jpg", caption: "Concept / Explore" },
            { image: "images/img2k.jpg", caption: "Concept / Explore" },
            { image: "images/img2l.jpg", caption: "Concept / Explore" },
            { image: "images/img2m.jpg", caption: "Concept / Explore" },
            { image: "images/img2n.jpg", caption: "Concept / Explore" },
            { image: "images/img2o.jpg", caption: "Concept / Explore" },
            { image: "images/img2p.jpg", caption: "Concept / Explore" },
            { image: "images/img2q.jpg", caption: "Concept / Explore" },
            { image: "images/img2r.jpg", caption: "Concept / Explore" },
            { image: "images/img-35 (17).jpg", caption: "Cad / Dimensions" }

                           
            
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     {
        id: "project-14",
        title: "Face home",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq8.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq8.jpg", caption: "Concept / first stage" },
            { image: "images/arq8 1.jpg", caption: "Concept / first stage" },
            { image: "images/arq8 2.jpg", caption: "Concept / first stage" },
            { image: "images/arq8 3.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-15",
        title: "Boungalo",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq7.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq7.jpg", caption: "Concept / first stage" },
            { image: "images/arq7 1.jpg", caption: "Concept / first stage" },
            { image: "images/arq7 2.jpg", caption: "Concept / first stage" },
            { image: "images/arq7 3.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-16",
        title: "Afis",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq9.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq9.jpg", caption: "Concept / first stage" },
            { image: "images/arq9 1.jpg", caption: "Concept / first stage" },
            { image: "images/arq9 2.jpg", caption: "Concept / first stage" },
            { image: "images/arq9 3.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-17",
        title: "Rec Home",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq3.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq3.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-18",
        title: "Agualaboca (wattermouse)",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq4.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq4.jpg", caption: "Concept / first stage" },
            { image: "images/arq4 1.jpg", caption: "Concept / first stage" },
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    {
        id: "project-19",
        title: "Microhouse",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq1.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq1.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-20",
        title: "Casa cejas",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq6.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq6.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-21",
        title: "Structure",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq5.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq5.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
        id: "project-22",
        title: "Barn Loft",
        category: "Spatial design",
        subtitle: "Arq · Rendering",
        cover: "images/arq2.jpg",
        year: "2026",

        description: "Exploration arquitecture volume.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/arq2.jpg", caption: "Concept / first stage" }
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     {
        id: "project-23",
        title: "Motorhome interior",
        category: "Interior Design",
        subtitle: "Produc Design · Development",
        cover: "images/img-34 (9).png",
        year: "2026",

        description: "Interior motorhome for a Mercedes Benz Sprinter.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-34 (2).jpg", caption: "Concept / first stage" },
            { image: "images/img-34 (3).jpg", caption: "Concept / first stage" },
            { image: "images/img-34 (4).jpg", caption: "Concept / first stage" },
            { image: "images/img-34 (5).png", caption: "Concept / first stage" },
            { image: "images/img-34 (6).png", caption: "Concept / first stage" },
            { image: "images/img-34 (7).png", caption: "Concept / first stage" },
            { image: "images/img-34 (8).png", caption: "Concept / first stage" },
            { image: "images/img-34 (9).png", caption: "Concept / first stage" },
            { image: "images/img-34 (10).png", caption: "Concept / first stage" },
            { image: "images/img-34 (11).png", caption: "Concept / first stage" }      
                         
                        
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    {
        id: "project-24",
        title: "Speaker Neosound",
        category: "Product",
        subtitle: "Produc Design · Rendering",
        cover: "images/speaker.jpg",
        year: "2026",

        description: "Speaker concept.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/speaker5.jpg", caption: "Concept / first stage" },
            { image: "images/speaker6.jpg", caption: "Concept / first stage" },
            { image: "images/speaker2.jpg", caption: "Concept / first stage" },
            { image: "images/speaker3.jpg", caption: "Concept / first stage" },
            { image: "images/speaker4.jpg", caption: "Concept / first stage" }
                       
            
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    {
        id: "project-25",
        title: "Bicitaculo",
        category: "Product",
        subtitle: "Produc Design · Rendering",
        cover: "images/img-0.jpg",
        year: "2026",

        description: "This is a bikepacking module, you can sleep in the extensible bed, and cook in the upper surface.",

        tags: [
            "Industrial Design",
            "3D CAD",
            "Rendering",
            "Prototyping"
        ],

        gallery: [
            { image: "images/img-0 (1).jpg", caption: "Concept / first stage" },
            { image: "images/img-0 (2).jpg", caption: "Development" },
            // { image: "images/img-1.jpg", caption: "Detail / prototype" },
            // { image: "images/img-1 (2).jpg", caption: "Final result" }
        ]
    },

      
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        {
        id: "project-26",
        title: "AI-Powered Interior Visualization",
        category: "AI & Innovation", // O la categoría que elijas
        subtitle: "3D Modeling · AI Render Workflow",
        cover: "images/coverai.jpg", // Tu segunda imagen
        year: "2026",

        description: "An innovative workflow combining precise 3D blockout modeling with generative AI rendering. By using a SketchUp base for camera composition and furniture placement, the AI acts as a smart rendering engine, generating realistic lighting, textures, and atmospheres based on text prompts while respecting the original 3D geometry.\n\n• Workflow: SketchUp (Geometry & Composition) + AI Render Engine (Texturing & Lighting)\n• Concept: Geometry-Guided AI Rendering\n• Project Type: Residential Interior Concept",

        tags: [
            "3D Modeling",
            "AI Rendering",
            "SketchUp",
            "Interior Visualization",
            "Prompt Engineering",
            "ArchViz"
        ],

        gallery: [
            { image: "images/sketchup-view.jpg", caption: "Original SketchUp 3D Blockout & Composition" },
            { image: "images/ai-render-final.jpg", caption: "Final AI-Rendered Scene: Lighting & Textures" },
            { image: "images/ai-render-final 2.jpg", caption: "Final AI-Rendered Scene: Lighting & Textures" },
            { image: "images/ai-render-final 3.jpg", caption: "Final AI-Rendered Scene: Lighting & Textures" },
            { image: "images/ai-render-final 4.jpg", caption: "Final AI-Rendered Scene: Lighting & Textures" }
        ]
    },

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        {
        id: "project-27",
        title: "Branding",
        category: "Graphic design", // O la categoría que elijas
        subtitle: "Graphic design · Logotype",
        cover: "images/logo.jpg", // Tu segunda imagen
        year: "2026",

        description: "A curated collection of my recent logo designs and visual identities.",

        tags: [
            "Graphic design",
            "Logotype"
            
        ],

        gallery: [
            { image: "images/1l.jpg", caption: "Logo" },
            { image: "images/2l.jpg", caption: "Logo" },
            { image: "images/3l.jpg", caption: "Logo" },
            { image: "images/4l.jpg", caption: "Logo" },
            { image: "images/5l.jpg", caption: "Logo" },            
            { image: "images/6l.jpg", caption: "Logo" },
            { image: "images/7l.jpg", caption: "Logo" },
            { image: "images/8l.jpg", caption: "Logo" },
            { image: "images/9l.jpg", caption: "Logo" },
            { image: "images/10l.jpg", caption: "Logo" },
            { image: "images/11l.jpg", caption: "Logo" },
            { image: "images/12l.jpg", caption: "Logo" },
            { image: "images/13l.jpg", caption: "Logo" }
            
            
            
        ]
    }


];


/* ======================================================================
   OTHER STUFF / ARCHIVE — OPCIONAL
   Para dibujos, experimentos, renders, fotos o piezas que no ameriten
   una ficha de proyecto completa.

   Si NO querés mostrar esta sección, dejá simplemente:
   window.PORTFOLIO_ARCHIVE = [];
   ====================================================================== */

window.PORTFOLIO_ARCHIVE = [
    { image: "images/img-35.jpg", title: "Character design" },
    { image: "images/img-36.jpg", title: "Character design" },
    { image: "images/img-37.jpg", title: "Character design" },
    { image: "images/img-37 1.jpg", title: "Study 04" },
    { image: "images/img-37 2.jpg", title: "Study 04" },
    { image: "images/img-37 3.jpg", title: "Study 05" },
    // { image: "images/img-19.jpg", title: "Study 06" }
];
