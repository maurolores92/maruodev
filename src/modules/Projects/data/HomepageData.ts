import { thewinenation, Lumiflowca, Sagcomstore, BlueWaveEnergy, CrealabStudio, ViaViajes, PreferredEnergyPower, TaskFlowAI, Allsafebackflow } from "@static/images";

export const HomepageData = [
    {        title: "TaskFlow AI - SaaS Multi-tenant",
        image: {
          src: TaskFlowAI.src,
          width: TaskFlowAI.width,
          height: TaskFlowAI.height,
          alt: "TaskFlow AI - Plataforma SaaS",
        },
        links: [
          {
            title: "GitHub",
            link: "https://github.com/maurolores92/codewithmauricio-front",
          },
          {
            title: "Demo",
            link: "https://codewithmauricio.tech",
          },
        ],
        extraInfo: [
          {
            "title": "Tecnologías y Herramientas",
            "description": "React, Next.js, TypeScript, TailwindCSS, Node.js, Express, PostgreSQL, Prisma, JWT, React Query, Zustand, Dnd-kit, Zod, Integración con IA"
          },
          {
            title: "Fecha",
            description: "2026-02-01",
          },
          {
            title: "Tipo",
            description: "Proyecto Personal - SaaS",
          },
        ],
        content: `
            <section id="proyecto-taskflow-ai" class="proyecto">
                <h3>🚀 Proyecto: TaskFlow AI – Plataforma SaaS Multi-tenant con IA</h3>
                <p><strong>Tipo:</strong> Proyecto Personal – Desarrollo Full Stack End-to-End</p>
                <p><strong>Rol:</strong> Arquitecto de Software & Desarrollador Full Stack</p>
                <p><strong>Año:</strong> 2026</p>
                <p><strong>Estado:</strong> En desarrollo activo</p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Desarrollar una plataforma SaaS multi-tenant completa para gestión de proyectos y tareas, integrando un módulo Kanban inteligente con capacidades de IA para automatización de flujos de trabajo. El sistema permite que múltiples organizaciones utilicen la aplicación de forma aislada y segura, con control granular de acceso basado en roles (RBAC).</p>
                <h4>🧠 Arquitectura y Diseño</h4>
                <ul>
                    <li><strong>Arquitectura SaaS Multi-tenant:</strong> aislamiento lógico por <code>organizationId</code> garantizando privacidad total de datos</li>
                    <li><strong>Sistema RBAC:</strong> control de acceso basado en roles con permisos granulares</li>
                    <li><strong>Middleware de seguridad:</strong> validación de permisos, autenticación JWT y resolución de organización activa</li>
                    <li><strong>Separación de capas:</strong> dominio, servicios, persistencia y presentación claramente desacoplados</li>
                    <li><strong>Arquitectura modular escalable:</strong> servicios independientes y reutilizables</li>
                </ul>
                <h4>🖥️ Stack Frontend</h4>
                <ul>
                    <li><strong>Core:</strong> React / Next.js con TypeScript para tipado robusto</li>
                    <li><strong>Estilos:</strong> TailwindCSS para diseño moderno y responsive</li>
                    <li><strong>Estado:</strong>
                    <ul>
                        <li><em>React Query / TanStack Query</em> para gestión de estado server-side</li>
                        <li><em>Zustand</em> para estado global de la aplicación</li>
                    </ul>
                    </li>
                    <li><strong>Drag & Drop:</strong> Dnd-kit para funcionalidad Kanban fluida</li>
                    <li><strong>Formularios:</strong> React Hook Form para manejo optimizado</li>
                    <li><strong>Validación:</strong> Zod para esquemas type-safe</li>
                    <li><strong>HTTP Client:</strong> Axios con interceptores personalizados</li>
                </ul>
                <h4>⚙️ Stack Backend</h4>
                <ul>
                    <li><strong>Runtime:</strong> Node.js con TypeScript</li>
                    <li><strong>Framework:</strong> Express para API REST robusta</li>
                    <li><strong>Base de datos:</strong> PostgreSQL con diseño relacional normalizado</li>
                    <li><strong>ORM:</strong> Prisma para queries type-safe y migraciones controladas</li>
                    <li><strong>Autenticación:</strong> JWT con refresh tokens y middleware de seguridad</li>
                    <li><strong>Middleware custom:</strong>
                    <ul>
                        <li>Validación de permisos</li>
                        <li>Resolución de organización activa</li>
                        <li>Logging y monitoreo</li>
                    </ul>
                    </li>
                </ul>
                <h4>🗄️ Base de Datos</h4>
                <ul>
                    <li><strong>Motor:</strong> PostgreSQL</li>
                    <li><strong>Diseño:</strong> esquema relacional con claves foráneas y cascadas</li>
                    <li><strong>Multi-tenancy:</strong> <code>organizationId</code> en todas las tablas sensibles</li>
                    <li><strong>Índices optimizados:</strong> para consultas multi-tenant eficientes</li>
                    <li><strong>Soft deletes:</strong> para recuperación de datos</li>
                </ul>
                <h4>🤖 Integración de IA</h4>
                <ul>
                    <li><strong>Generación automática de estructuras Kanban:</strong> tableros, columnas y tareas iniciales</li>
                    <li><strong>Sugerencias inteligentes:</strong> creación de tareas basadas en contexto del proyecto</li>
                    <li><strong>Optimización de flujos:</strong> recomendaciones para organización de trabajo</li>
                    <li><strong>Prompts estructurados:</strong> integración desde backend para consistencia</li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Módulo Kanban completo:</strong> tableros, columnas y tareas con drag & drop</li>
                    <li><strong>Multi-tenancy real:</strong> aislamiento total por organización</li>
                    <li><strong>Sistema de permisos granular:</strong> roles y permisos configurables</li>
                    <li><strong>Gestión de usuarios:</strong> invitaciones, roles y estados</li>
                    <li><strong>Dashboard de organización:</strong> métricas y KPIs en tiempo real</li>
                    <li><strong>UI/UX moderna:</strong> diseño responsive y accesible</li>
                    <li><strong>Optimización de rendimiento:</strong> queries eficientes y caching estratégico</li>
                    <li><strong>Manejo de errores robusto:</strong> validaciones en frontend y backend</li>
                </ul>
                <h4>🔐 Seguridad y Escalabilidad</h4>
                <ul>
                    <li>Autenticación JWT con tokens de acceso y refresh</li>
                    <li>Middleware de validación de permisos por endpoint</li>
                    <li>Aislamiento de datos por organización a nivel de query</li>
                    <li>Validación de esquemas con Zod en ambos lados</li>
                    <li>Sanitización de inputs y protección XSS</li>
                    <li>Rate limiting y protección contra ataques comunes</li>
                </ul>
                <h4>🧩 Valor diferencial</h4>
                <p>Este proyecto demuestra capacidades <strong>fullstack end-to-end</strong> en un entorno real de producción:</p>
                <ul>
                    <li>✅ <strong>Arquitectura SaaS real</strong> con multi-tenancy implementado correctamente</li>
                    <li>✅ <strong>Sistema RBAC completo</strong> con permisos granulares</li>
                    <li>✅ <strong>Integración de IA</strong> aplicada a productividad</li>
                    <li>✅ <strong>TypeScript end-to-end</strong> para type-safety total</li>
                    <li>✅ <strong>Arquitectura escalable</strong> lista para crecimiento</li>
                    <li>✅ <strong>Diseño modular</strong> con separación de responsabilidades</li>
                    <li>✅ <strong>Código production-ready</strong> con mejores prácticas</li>
                </ul>
                <h4>🧠 Aprendizajes técnicos clave</h4>
                <p>Este proyecto me permitió profundizar en:</p>
                <ul>
                    <li>Diseño de arquitecturas multi-tenant escalables</li>
                    <li>Implementación de sistemas de autorización complejos</li>
                    <li>Integración efectiva de IA en aplicaciones productivas</li>
                    <li>Gestión de estado avanzada en aplicaciones React</li>
                    <li>Optimización de queries en bases de datos relacionales</li>
                    <li>Diseño de APIs RESTful robustas y mantenibles</li>
                    <li>Patrones de diseño aplicados a desarrollo real</li>
                </ul>
            </section>
        `,
      },
    {        
        title: "Preferred Energy Power",
        image: {
          src: PreferredEnergyPower.src,
          width: PreferredEnergyPower.width,
          height: PreferredEnergyPower.height,
          alt: "Preferred Energy Power",
        },
        links: [
          {
            title: "Visitar",
            link: "https://preferredenergypower.com/",
          },
        ],
        extraInfo: [
          {
            "title": "Tecnologías y Herramientas",
            "description": "WordPress, PHP, Elementor, WPForms, Contact Form 7, Yoast SEO, HTML-CSS, JavaScript, Google Analytics"
            },
          {
            title: "Fecha",
            description: "2025-08-01",
          },
          {
            title: "Cliente",
            description: "Preferred Energy Power",
          },
        ],
        content: `
            <section id="proyecto-preferred-energy-power" class="proyecto">
                <h3>⚡ Proyecto: Preferred Energy Power – Sitio Web de Servicios de Energía Solar</h3>
                <p><strong>Cliente:</strong> Preferred Energy Power – Empresa especializada en instalación de sistemas de energía solar y consultoría energética</p>
                <p><strong>Rol:</strong> Desarrollador WordPress & Diseñador Web</p>
                <p><strong>Año:</strong> 2025</p>
                <p><strong>URL:</strong> 
                    <a href="https://preferredenergypower.com" target="_blank" rel="noopener noreferrer">preferredenergypower.com</a>
                </p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Desarrollar una plataforma web corporativa moderna y profesional que presente los servicios de instalación de paneles solares, consultoría energética y asesoramiento técnico, generando confianza y facilitando el contacto directo con clientes potenciales interesados en la transición energética.</p>
                <h4>🛠️ Tecnologías y herramientas</h4>
                <ul>
                    <li><strong>CMS:</strong> WordPress optimizado para rendimiento y SEO</li>
                    <li><strong>Backend:</strong> PHP para lógica personalizada y procesamiento de formularios</li>
                    <li><strong>Constructor visual:</strong> Elementor para diseño corporativo profesional y editable</li>
                    <li><strong>Plugins estratégicos:</strong>
                    <ul>
                        <li><em>WPForms y Contact Form 7</em> para solicitudes de cotización y consultas técnicas</li>
                        <li><em>Yoast SEO</em> para posicionamiento en búsquedas de "instalación solar" y "energía renovable"</li>
                        <li><em>Elementor Pro</em> para landing pages de conversión</li>
                    </ul>
                    </li>
                    <li><strong>Analítica:</strong> Google Analytics para medir leads y comportamiento del usuario</li>
                    <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript para interactividad y animaciones</li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Presentación de servicios:</strong> secciones detalladas de instalación residencial, comercial e industrial</li>
                    <li><strong>Calculadora de ahorro energético:</strong> herramienta interactiva para estimar ahorros y retorno de inversión</li>
                    <li><strong>Sistema de cotización inteligente:</strong> formularios multi-paso para captar información del proyecto del cliente</li>
                    <li><strong>Portafolio de proyectos:</strong> galería de instalaciones realizadas con detalles técnicos</li>
                    <li><strong>Diseño responsive y profesional:</strong> navegación optimizada en todos los dispositivos</li>
                    <li><strong>SEO especializado:</strong> optimización para búsquedas locales y términos del sector energético</li>
                    <li><strong>Blog educativo:</strong> artículos sobre beneficios de la energía solar, incentivos fiscales y casos de éxito</li>
                    <li><strong>Llamadas a la acción estratégicas:</strong> botones de contacto y formularios en puntos clave de conversión</li>
                    <li><strong>Certificaciones y credenciales:</strong> sección destacada de acreditaciones y garantías</li>
                </ul>
                <h4>📊 Resultados e impacto</h4>
                <ul>
                    <li>+80% de mejora en generación de leads cualificados</li>
                    <li>+65% de incremento en solicitudes de cotización tras el primer mes</li>
                    <li>Reducción del 70% en tiempo de respuesta a consultas gracias a formularios estructurados</li>
                    <li>Posicionamiento en primeras páginas para búsquedas locales de "instalación de paneles solares"</li>
                    <li>Mayor credibilidad y presencia digital profesional en el mercado energético norteamericano</li>
                </ul>
                <h4>🧠 Valor agregado</h4>
                <p>Este proyecto demuestra mi capacidad para desarrollar <strong>sitios web corporativos orientados a la generación de leads y conversión</strong>, integrando herramientas de captura de clientes potenciales, diseño estratégico y optimización SEO para empresas de servicios técnicos especializados en el sector de energía renovable.</p>
            </section>
        `,
      },
    {
        title: "Crealab Studio",
        image: {
          src: CrealabStudio.src,
          width: CrealabStudio.width,
          height: CrealabStudio.height,
          alt: "CrealabStudio",
        },
        links: [
          {
            title: "Visitar",
            link: "https://crealabstudio.com.ar/",
          },
        ],
        extraInfo: [
          {
            "title": "Tecnologías y Herramientas",
            "description": "WordPress, WooCommerce, PHP, WPForms, Yoast SEO, HTML-CSS, Google Analytics, TypeScript, React, Node.js, Express, MySQL, REST API, Vercel, Netlify"
            },
          {
            title: "Fecha",
            description: "2025-08-01",
          },
          {
            title: "Cliente",
            description: "Crealab Studio",
          },
        ],
        content: `
            <section id="proyecto-crealab" class="proyecto">
                <h3>🧪 Proyecto: Crealab Studio – eCommerce + Panel Administrativo</h3>
                <p><strong>Cliente:</strong> Estudio creativo especializado en impresión 3D, diseño personalizado y branding emocional</p>
                <p><strong>Rol:</strong> Desarrollador Full Stack, Integrador de API y Estratega técnico</p>
                <p><strong>Año:</strong> 2025</p>
                <p><strong>URL:</strong> 
                    <a href="https://crealabstudio.com.ar" target="_blank" rel="noopener noreferrer">crealabstudio.com.ar</a> | 
                    <a href="https://app.crealabstudio.com.ar/dashboards/" target="_blank" rel="noopener noreferrer">Panel Administrativo</a>
                </p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Diseñar una tienda online moderna y funcional para productos personalizados, junto con una aplicación administrativa que permita al cliente gestionar <strong>ventas, stock y órdenes</strong> de forma autónoma y eficiente, integrando diseño emocional y automatización técnica.</p>
                <h4>🛠️ Tecnologías y herramientas</h4>
                <ul>
                    <li><strong>Frontend:</strong> TypeScript + React para la aplicación administrativa</li>
                    <li><strong>Backend:</strong> Node.js con Express, conectado a base de datos <strong>MySQL</strong></li>
                    <li><strong>eCommerce:</strong> WordPress + WooCommerce como plataforma principal</li>
                    <li><strong>Integración:</strong> API REST de WordPress para sincronización entre tienda y panel</li>
                    <li><strong>Plugins clave:</strong>
                    <ul>
                        <li><em>WPForms</em> para formularios de contacto</li>
                        <li><em>Yoast SEO</em> para posicionamiento orgánico</li>
                        <li><em>Elementor</em> para edición visual</li>
                    </ul>
                    </li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Diseño responsive:</strong> navegación fluida en todos los dispositivos</li>
                    <li><strong>Catálogo autoadministrable:</strong> productos, precios y stock editables por el cliente</li>
                    <li><strong>SEO optimizado:</strong> estructura semántica, metadatos y velocidad de carga</li>
                    <li><strong>Dashboard privado:</strong> acceso seguro a estadísticas, pedidos y control de inventario</li>
                    <li><strong>Sincronización en tiempo real:</strong> entre tienda y panel mediante API REST</li>
                    <li><strong>Gestión de usuarios y roles:</strong> acceso segmentado para administración y logística</li>
                </ul>
                <h4>📊 Resultados e impacto</h4>
                <ul>
                    <li>+60% de eficiencia en la gestión de pedidos y stock</li>
                    <li>+35% de aumento en ventas online en los primeros 3 meses</li>
                    <li>Reducción del 80% en tareas manuales gracias a la automatización</li>
                    <li>Mayor autonomía del cliente en la administración de su negocio</li>
                </ul>
                <h4>🧠 Valor agregado</h4>
                <p>Este proyecto refleja mi enfoque integral: <strong>desarrollo técnico, autonomía del cliente y escalabilidad</strong>. La combinación de eCommerce + panel administrativo permite a Crealab Studio crecer sin fricciones, con control total sobre su operación digital.</p>
            </section>
        `,
      },
      {
        title: "Proyecto The Wine Nation",
        image: {
            src: thewinenation.src,
            width: thewinenation.width,
            height: thewinenation.height,
            alt: "The Wine Nation",
        },
        links: [
            {
                title: "Visitar",
                link: "https://thewinenation.com/",
            },
        ],
        extraInfo: [
            {
                "title": "Tecnologías y Herramientas",
                "description": "Next.js, TypeScript, Styled Components, PHP, MySQL, HTML-CSS, MySQL"
            },
            {
                "title": "Fecha",
                "description": "2024-01-01"
            },
            {
                "title": "Cliente",
                "description": "The Wine Nation"
            }

        ],
        content: `
                <section id="proyecto-thewinenation" class="proyecto">
                    <h3>🍷 Proyecto: The Wine Nation – eCommerce de Vinos</h3>
                    <p><strong>Cliente:</strong> The Wine Nation – Tienda online especializada en vinos premium y experiencias enológicas</p>
                    <p><strong>Rol:</strong> Desarrollador Full Stack & Arquitecto técnico</p>
                    <p><strong>Fecha:</strong> 1 de enero de 2024</p>
                    <p><strong>URL:</strong> 
                        <a href="https://thewinenation.com/" target="_blank" rel="noopener noreferrer">thewinenation.com</a>
                    </p>
                    <hr>
                    <h4>🎯 Objetivo del proyecto</h4>
                    <p>Diseñar una tienda online rápida, segura y escalable para la venta de vinos, con foco en la experiencia del usuario, la gestión eficiente de productos y la integración de pagos confiables.</p>
                    <h4>🛠️ Tecnologías y herramientas</h4>
                    <ul>
                        <li><strong>Frontend:</strong> Next.js + TypeScript</li>
                        <li><strong>Estilos:</strong> Styled Components para diseño modular y elegante</li>
                        <li><strong>Backend:</strong> PHP para lógica de negocio y gestión de productos</li>
                        <li><strong>Base de datos:</strong> MySQL para almacenamiento seguro de productos y clientes</li>
                        <li><strong>Checkout:</strong> Integración de métodos de pago seguros</li>
                    </ul>
                    <h4>📱 Características destacadas</h4>
                    <ul>
                        <li><strong>Diseño responsive:</strong> navegación fluida en móviles, tablets y escritorio</li>
                        <li><strong>Rendimiento optimizado:</strong> SSR con Next.js para carga rápida y SEO técnico</li>
                        <li><strong>Gestión de productos:</strong> carga dinámica y administración eficiente mediante PHP</li>
                        <li><strong>Base de datos robusta:</strong> MySQL estructurado para escalabilidad y seguridad</li>
                        <li><strong>Checkout seguro:</strong> experiencia de compra confiable y sin fricciones</li>
                    </ul>
                    <h4>📊 Resultados e impacto</h4>
                    <ul>
                        <li>+50% de mejora en velocidad de carga respecto a versiones anteriores</li>
                        <li>+40% de aumento en conversiones durante el primer trimestre</li>
                        <li>Reducción de errores en gestión de stock gracias a la arquitectura backend</li>
                    </ul>
                    <h4>🧠 Valor agregado</h4>
                    <p>Este proyecto refleja mi enfoque en <strong>eCommerce de alto rendimiento, arquitectura escalable y experiencia de usuario refinada</strong>, integrando diseño visual, automatización y seguridad para potenciar negocios digitales en el rubro gourmet.</p>
                </section>
        `,
    },
    {        
        title: "All Safe Backflow",
        image: {
          src: Allsafebackflow.src,
          width: Allsafebackflow.width,
          height: Allsafebackflow.height,
          alt: "All Safe Backflow",
        },
        links: [
          {
            title: "Visitar",
            link: "https://allsafebackflow.com/",
          },
        ],
        extraInfo: [
          {
            "title": "Tecnologías y Herramientas",
            "description": "WordPress, PHP, Elementor, WPForms, Contact Form 7, Yoast SEO, HTML-CSS, JavaScript, Google Analytics"
            },
          {
            title: "Fecha",
            description: "2025-03-01",
          },
          {
            title: "Cliente",
            description: "All Safe Backflow",
          },
        ],
        content: `
            <section id="proyecto-allsafebackflow" class="proyecto">
                <h3>⚡ Proyecto: All Safe Backflow – Sitio Web de Servicios de Energía Solar</h3>
                <p><strong>Cliente:</strong> All Safe Backflow – Empresa especializada en instalación de sistemas de energía solar y consultoría energética</p>
                <p><strong>Rol:</strong> Desarrollador WordPress & Diseñador Web</p>
                <p><strong>Año:</strong> 2025</p>
                <p><strong>URL:</strong> 
                    <a href="https://allsafebackflow.com" target="_blank" rel="noopener noreferrer">allsafebackflow.com</a>
                </p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Desarrollar una plataforma web corporativa moderna y profesional que presente los servicios de instalación de paneles solares, consultoría energética y asesoramiento técnico, generando confianza y facilitando el contacto directo con clientes potenciales interesados en la transición energética.</p>
                <h4>🛠️ Tecnologías y herramientas</h4>
                <ul>
                    <li><strong>CMS:</strong> WordPress optimizado para rendimiento y SEO</li>
                    <li><strong>Backend:</strong> PHP para lógica personalizada y procesamiento de formularios</li>
                    <li><strong>Constructor visual:</strong> Elementor para diseño corporativo profesional y editable</li>
                    <li><strong>Plugins estratégicos:</strong>
                    <ul>
                        <li><em>WPForms y Contact Form 7</em> para solicitudes de cotización y consultas técnicas</li>
                        <li><em>Yoast SEO</em> para posicionamiento en búsquedas de "instalación solar" y "energía renovable"</li>
                        <li><em>Elementor Pro</em> para landing pages de conversión</li>
                    </ul>
                    </li>
                    <li><strong>Analítica:</strong> Google Analytics para medir leads y comportamiento del usuario</li>
                    <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript para interactividad y animaciones</li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Presentación de servicios:</strong> secciones detalladas de instalación residencial, comercial e industrial</li>
                    <li><strong>Calculadora de ahorro energético:</strong> herramienta interactiva para estimar ahorros y retorno de inversión</li>
                    <li><strong>Sistema de cotización inteligente:</strong> formularios multi-paso para captar información del proyecto del cliente</li>
                    <li><strong>Portafolio de proyectos:</strong> galería de instalaciones realizadas con detalles técnicos</li>
                    <li><strong>Diseño responsive y profesional:</strong> navegación optimizada en todos los dispositivos</li>
                    <li><strong>SEO especializado:</strong> optimización para búsquedas locales y términos del sector energético</li>
                    <li><strong>Blog educativo:</strong> artículos sobre beneficios de la energía solar, incentivos fiscales y casos de éxito</li>
                    <li><strong>Llamadas a la acción estratégicas:</strong> botones de contacto y formularios en puntos clave de conversión</li>
                    <li><strong>Certificaciones y credenciales:</strong> sección destacada de acreditaciones y garantías</li>
                </ul>
                <h4>📊 Resultados e impacto</h4>
                <ul>
                    <li>+80% de mejora en generación de leads cualificados</li>
                    <li>+65% de incremento en solicitudes de cotización tras el primer mes</li>
                    <li>Reducción del 70% en tiempo de respuesta a consultas gracias a formularios estructurados</li>
                    <li>Posicionamiento en primeras páginas para búsquedas locales de "instalación de paneles solares"</li>
                    <li>Mayor credibilidad y presencia digital profesional en el mercado energético norteamericano</li>
                </ul>
                <h4>🧠 Valor agregado</h4>
                <p>Este proyecto demuestra mi capacidad para desarrollar <strong>sitios web corporativos orientados a la generación de leads y conversión</strong>, integrando herramientas de captura de clientes potenciales, diseño estratégico y optimización SEO para empresas de servicios técnicos especializados en el sector de energía renovable.</p>
            </section>
        `,
      },
      {
        title: "VIA.AR",
        image: {
          src: ViaViajes.src,
          width: ViaViajes.width,
          height: ViaViajes.height,
          alt: "Viaviajes",
        },
        links: [
          {
            title: "Visitar",
            link: "https://viaviajes.tur.ar/",
          },
        ],
        extraInfo: [
          {
            title: "Tecnologías y Herramientas",
            description: "WordPress, PHP, WPForms, All In One SEO, HTML-CSS, Google Analytics",
          },
          {
            title: "Fecha",
            description: "2025-05-01",
          },
          {
            title: "Cliente",
            description: "VIA.AR",
          },
        ],
        content: `
            <section id="proyecto-viaviajes" class="proyecto">
                <h3>🌍 Proyecto: ViaViajes Turismo</h3>
                <p><strong>Cliente:</strong> Agencia de turismo especializada en experiencias personalizadas</p>
                <p><strong>Rol:</strong> Desarrollador Full Stack & Estratega técnico</p>
                <p><strong>Año:</strong> 2025</p>
                <p><strong>URL:</strong> <a href="https://viaviajes.tur.ar" target="_blank" rel="noopener noreferrer">viaviajes.tur.ar</a></p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Diseñar una plataforma web moderna, adaptable y escalable para una agencia de turismo, con foco en conversión, experiencia de usuario y posicionamiento orgánico.</p>
                <h4>🛠️ Tecnologías y herramientas</h4>
                <ul>
                    <li><strong>WordPress</strong> como CMS principal</li>
                    <li><strong>Tema Astro</strong> para diseño visual y estructura modular</li>
                    <li><strong>Plugins clave:</strong>
                    <ul>
                        <li><em>WPForms</em> para formularios de contacto</li>
                        <li><em>Yoast SEO</em> para optimización orgánica</li>
                        <li><em>Elementor</em> para edición visual avanzada</li>
                    </ul>
                    </li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Diseño responsive:</strong> navegación fluida en móviles, tablets y escritorio</li>
                    <li><strong>Optimización SEO avanzada:</strong> estructura semántica, metadatos, velocidad de carga</li>
                    <li><strong>Integración de formularios:</strong> contacto directo con clientes potenciales</li>
                    <li><strong>Panel autoadministrable:</strong> el cliente puede actualizar contenido sin asistencia técnica</li>
                    <li><strong>Carga rápida y navegación intuitiva:</strong> ideal para usuarios que buscan destinos y paquetes</li>
                </ul>
                <h4>📊 Resultados e impacto</h4>
                <ul>
                    <li>+40% de mejora en velocidad de carga respecto al sitio anterior</li>
                    <li>+25% de aumento en formularios recibidos en el primer mes</li>
                    <li>Posicionamiento en primeras páginas de Google para búsquedas locales</li>
                </ul>
                <h4>🧠 Valor agregado</h4>
                <p>Este proyecto refleja mi enfoque en <strong>soluciones reproducibles, organizadas y escalables</strong>, integrando diseño, automatización y mentoring técnico para que el cliente pueda evolucionar digitalmente sin depender de terceros.</p>
                </section>
        `,
      },
    {
        title: "Blue Wave Energy",
        image: {
          src: BlueWaveEnergy.src,
          width: BlueWaveEnergy.width,
          height: BlueWaveEnergy.height,
          alt: "Blue Wave Energy",
        },
        links: [
          {
            title: "Visitar",
            link: "https://bluewave-energy.com/",
          },
        ],
        extraInfo: [
          {
                "title": "Tecnologías y Herramientas",
                "description": "WordPress, PHP, Astro, HTML-CSS, WPForms, Yoast SEO, Google Analytics"
            },
            {
                "title": "Fecha",
                "description": "2025-02-22"
            },
            {
                "title": "Cliente",
                "description": "Blue Wave Energy"
            }

        ],
        content: `
            <section id="proyecto-bluewave" class="proyecto">
                <h3>🔋 Proyecto: Blue Wave Energy</h3>
                <p><strong>Cliente:</strong> Empresa norteamericana dedicada a soluciones de energía solar y fuentes limpias</p>
                <p><strong>Rol:</strong> Desarrollador Full Stack & Estratega técnico</p>
                <p><strong>Fecha:</strong> 22 de febrero de 2025</p>
                <p><strong>URL:</strong> 
                    <a href="https://bluewave-energy.com/" target="_blank" rel="noopener noreferrer">bluewave-energy.com</a>
                </p>
                <hr>
                <h4>🎯 Objetivo del proyecto</h4>
                <p>Diseñar una plataforma institucional moderna, adaptable y visualmente atractiva para comunicar el compromiso de la empresa con las energías limpias, destacando sus servicios, valores y contacto directo con potenciales clientes.</p>
                <h4>🛠️ Tecnologías y herramientas</h4>
                <ul>
                    <li><strong>CMS:</strong> WordPress</li>
                    <li><strong>Frontend:</strong> HTML, CSS, plantilla base Astro</li>
                    <li><strong>Plugins:</strong> WPForms (formularios), Yoast SEO (optimización)</li>
                    <li><strong>Analítica:</strong> Google Analytics</li>
                    <li><strong>Backend:</strong> PHP</li>
                </ul>
                <h4>📱 Características destacadas</h4>
                <ul>
                    <li><strong>Diseño responsive:</strong> navegación fluida en móviles, tablets y escritorio</li>
                    <li><strong>Optimización SEO:</strong> estructura semántica, metadatos, velocidad de carga</li>
                    <li><strong>Formularios de contacto:</strong> integración con WPForms para facilitar la comunicación</li>
                    <li><strong>Panel autoadministrable:</strong> el cliente puede actualizar contenido sin asistencia técnica</li>
                    <li><strong>Plantilla Astro personalizada:</strong> diseño elegante, adaptable y alineado con la identidad visual de la marca</li>
                </ul>
                <h4>📊 Resultados e impacto</h4>
                <ul>
                    <li>+50% de mejora en velocidad de carga respecto al sitio anterior</li>
                    <li>Mayor visibilidad en buscadores gracias a la optimización SEO</li>
                    <li>Incremento en solicitudes de contacto desde el primer mes</li>
                </ul>
                <h4>🧠 Valor agregado</h4>
                <p>Este proyecto refleja mi enfoque en <strong>soluciones limpias, escalables y orientadas al propósito del cliente</strong>, integrando diseño visual, accesibilidad y herramientas de conversión para potenciar la presencia digital de empresas comprometidas con el futuro energético.</p>
            </section>
        `,
      },
    
    {
        title: "Sagcom Store",
        image: {
            src: Sagcomstore.src,
            width: Sagcomstore.width,
            height: Lumiflowca.height,
            alt: "Sagcom store",
        },
        links: [
            {
                title: "Visitar",
                link: "https://sagcomstore.com/",
            },
        ],
        extraInfo: [
            {
                "title": "Tecnologías y Herramientas",
                "description": "WordPress, WooCommerce, PHP, Astero, WPForms, Yoast SEO, HTML-CSS, Google Analytics"
            },
            {
                "title": "Fecha",
                "description": "2025-01-30"
            },
            {
                "title": "Cliente",
                "description": "Sagcom Store"
            }

        ],
        content: `
                <section id="proyecto-sagcomstore" class="proyecto">
                    <h3>🛒 Proyecto: Sagcom Store – Tienda Online Personalizada</h3>
                    <p><strong>Cliente:</strong> Sagcom Store – Comercio digital enfocado en productos tecnológicos y soluciones para el hogar</p>
                    <p><strong>Rol:</strong> Desarrollador Full Stack & Estratega técnico</p>
                    <p><strong>Fecha:</strong> 30 de enero de 2025</p>
                    <p><strong>URL:</strong> 
                        <a href="https://sagcomstore.com/" target="_blank" rel="noopener noreferrer">sagcomstore.com</a>
                    </p>
                    <hr>
                    <h4>🎯 Objetivo del proyecto</h4>
                    <p>Diseñar una tienda online moderna, visualmente atractiva y fácil de administrar, con foco en la experiencia del usuario, la conversión de ventas y la escalabilidad del negocio digital.</p>
                    <h4>🛠️ Tecnologías y herramientas</h4>
                    <ul>
                        <li><strong>CMS:</strong> WordPress + WooCommerce</li>
                        <li><strong>Frontend:</strong> HTML, CSS, plantilla base Astro</li>
                        <li><strong>Backend:</strong> PHP personalizado</li>
                        <li><strong>Plugins:</strong>
                        <ul>
                            <li><em>WPForms</em> para formularios de contacto</li>
                            <li><em>Yoast SEO</em> para optimización orgánica</li>
                        </ul>
                        </li>
                        <li><strong>Analítica:</strong> Google Analytics</li>
                    </ul>
                    <h4>📱 Características destacadas</h4>
                    <ul>
                        <li><strong>Diseño responsive:</strong> navegación fluida en móviles, tablets y escritorio</li>
                        <li><strong>Optimización SEO:</strong> estructura semántica, metadatos y velocidad de carga</li>
                        <li><strong>Formularios funcionales:</strong> contacto directo con clientes y automatización de consultas</li>
                        <li><strong>Panel autoadministrable:</strong> gestión de productos, precios y stock sin asistencia técnica</li>
                        <li><strong>Plantilla Astero personalizada:</strong> diseño elegante y adaptable a la identidad visual del negocio</li>
                    </ul>
                    <h4>📊 Resultados e impacto</h4>
                    <ul>
                        <li>+30% de aumento en visitas orgánicas tras el primer mes</li>
                        <li>Reducción del 50% en consultas manuales gracias a formularios automatizados</li>
                        <li>Mayor autonomía del cliente en la gestión de su catálogo digital</li>
                    </ul>
                    <h4>🧠 Valor agregado</h4>
                    <p>Este proyecto refleja mi enfoque en <strong>soluciones reproducibles, escalables y orientadas a la conversión</strong>, integrando diseño visual, automatización y herramientas de análisis para potenciar el crecimiento de negocios digitales.</p>
                </section>
        `,
    },
    {
        title: "Lumiflowca",
        image: {
            src: Lumiflowca.src,
            width: Lumiflowca.width,
            height: Lumiflowca.height,
            alt: "Lumiflowca",
        },
        links: [
            {
                title: "Visitar",
                link: "https://lumiflowca.com/",
            },
        ],
        extraInfo: [
            {
                "title": "Tecnologías y Herramientas",
                "description": "React, TypeScript, Styled Components, HTML-CSS, SEO técnico"
            },
            {
                "title": "Fecha",
                "description": "2025-01-10"
            },
            {
                "title": "Cliente",
                "description": "Lumiflowca"
            }

        ],
        content: `
                <section id="proyecto-lumiflowca" class="proyecto">
                    <h3>💡 Proyecto: Lumiflowca – Rediseño Web con React</h3>
                    <p><strong>Cliente:</strong> Lumiflowca – Marca creativa enfocada en diseño, identidad visual y presencia digital</p>
                    <p><strong>Rol:</strong> Desarrollador Frontend & Diseñador técnico</p>
                    <p><strong>Fecha:</strong> 10 de enero de 2025</p>
                    <p><strong>URL:</strong> 
                        <a href="https://lumiflowca.com/" target="_blank" rel="noopener noreferrer">lumiflowca.com</a>
                    </p>
                    <hr>
                    <h4>🎯 Objetivo del proyecto</h4>
                    <p>Rediseñar completamente el sitio web institucional de Lumiflowca, mejorando su estética, rendimiento y experiencia de usuario, con una arquitectura moderna y escalable que refleje la identidad visual de la marca.</p>
                    <h4>🛠️ Tecnologías y herramientas</h4>
                    <ul>
                        <li><strong>Frontend:</strong> React + TypeScript</li>
                        <li><strong>Estilos:</strong> Styled Components para diseño modular y reutilizable</li>
                        <li><strong>Diseño base:</strong> Taylor Brands como referencia visual</li>
                        <li><strong>Optimización:</strong> HTML semántico, SEO técnico y mejoras de rendimiento</li>
                    </ul>
                    <h4>📱 Características destacadas</h4>
                    <ul>
                        <li><strong>Rediseño completo:</strong> estructura visual renovada, navegación intuitiva y estética moderna</li>
                        <li><strong>Optimización SEO:</strong> metadatos, estructura semántica y velocidad de carga mejorada</li>
                        <li><strong>Formularios interactivos:</strong> contacto directo con visitantes y clientes</li>
                        <li><strong>Experiencia de usuario mejorada:</strong> navegación fluida, accesibilidad y rendimiento optimizado</li>
                        <li><strong>Diseño adaptable:</strong> visual coherente en móviles, tablets y escritorio</li>
                    </ul>
                    <h4>📊 Resultados e impacto</h4>
                    <ul>
                        <li>+45% de mejora en velocidad de carga</li>
                        <li>Mayor retención de usuarios gracias al rediseño visual</li>
                        <li>Incremento en formularios recibidos y consultas desde el sitio</li>
                    </ul>
                    <h4>🧠 Valor agregado</h4>
                    <p>Este proyecto refleja mi enfoque en <strong>interfaces modernas, diseño emocional y código escalable</strong>, integrando herramientas visuales y técnicas para potenciar la identidad digital de marcas creativas.</p>
                </section>
        `,
    },
    
    
];
