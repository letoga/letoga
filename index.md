---
layout: default
title: Home
---
<!-- GLOBAL BACKGROUND BLOB -->

 <div class="bg-white">
 <header class="fixed top-0 inset-x-0 z-50 bg-white shadow">
 <nav class="flex items-center justify-between py-4 px-4 lg:py-4 lg:px-6" aria-label="Global">
  <!-- 1 ▸ LOGO -->
  <div class="flex lg:flex-1">
    <a href="#" class="-m-1.5 p-1.5">
      <span class="sr-only">Your Company</span>
      <img src="/assets/images/logo.png" alt="Site Logo" style="height:50px">
    </a>
  </div>

  <!-- 2 ▸ PHONE (mobile only – centered by justify-between) -->
  <div class="lg:hidden order-2 flex flex-col items-center">
    <a href="tel:+34604952389"
       class="rounded-md bg-[#0071BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#005b99] transition">
      &nbsp;604&nbsp;952&nbsp;389 
    </a>
    <span class="text-sm text-gray-700 mt-1 font-semibold">Valencia, España</span>
  </div>

  <!-- 3 ▸ BURGER (mobile only – flush right) -->
  <div class="flex lg:hidden order-3">
    <button type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
      <span class="sr-only">Open main menu</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>

  <!-- 4 ▸ DESKTOP LINKS -->
  <div class="hidden lg:flex lg:gap-x-12">
    <a
  href="#servicios"
  class="text-sm font-semibold text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
>
  Nuestros servicios
</a>
 <a
  href="#clientes"
  class="text-sm font-semibold text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
>
  Clientes
</a>
    <a
  href="#faqs"
  class="text-sm font-semibold text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
>
  Preguntas Frecuentes
</a>
    <a
  href="#consulta"
  class="text-sm font-semibold text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
>
  Consulta Gratis
</a>
<a
  href="#contacto"
  class="text-sm font-semibold text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
>
  Contactos
</a>
  </div>

  <!-- 5 ▸ PHONE (desktop only – text & button inline) -->
  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
    <div class="flex items-center space-x-6">
      <span class="text-sm text-gray-700 font-semibold">Valencia, España</span>
      <a href="tel:+34604952389"
         class="rounded-md bg-[#0071BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#005b99] transition">
        604&nbsp;952&nbsp;389 
      </a>
    </div>
  </div>
</nav>

    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img src="/assets/images/logo.png" alt="Site Logo" style="height: 50px;">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
             <a href="#servicios" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
  Nuestros servicios
</a>
              <a href="#clientes" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
  Clientes
</a>
              <a href="#faqs" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
  Preguntas Frecuentes
</a>
              <a href="#consulta" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
  Consulta Gratis
</a>
              <a href="#contacto" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
  Contactos
</a>
            </div>
            <!-- new: phone button -->
<div class="py-6">
  <a href="tel:+34604952389"
     class="-mx-3 block rounded-lg px-3 py-2.5 font-semibold bg-[#0071BC] text-white shadow hover:bg-[#005b99] transition text-center">
     &nbsp;604&nbsp;952&nbsp;389 
  </a>
  <span class="-mx-3 block mt-2 text-sm text-gray-700 font-semibold text-center">
    Valencia, España
  </span>
</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="relative isolate px-6 pt-2 lg:px-8">
    <!-- 1 ▸ TOP SHAPE  ────────────────────────────────────────────── -->
<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
     aria-hidden="true">
  <div class="relative left-[calc(50%-11rem)]
              aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30
              bg-gradient-to-tr           <!-- was bg-linear-to-tr -->
              from-[#0071BC]              <!-- start: brand blue   -->
              via-[#4D4D4D]               <!-- mid: grey           -->
              to-[#000000]                <!-- end: black          -->
              opacity-30
              sm:left-[calc(50%-30rem)] sm:w-288.75"
       style="clip-path: polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)">
  </div>
</div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Fontanería y reformas para cuidar tu hogar en Valencia.</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Servicios de fontanería y reformas en toda la Comunidad Valenciana: consulta gratis, atención rápida y calidad garantizada.</p>
        <!-- single centred button (keeps spacing tidy) -->
<!-- centred blue button + location text -->
<div class="mt-10 flex flex-col items-center space-y-2">
  <!-- ❶  link now dials your number -->
  <a href="tel:+34604952389"
     class="rounded-md bg-[#0071BC] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#005b99] transition">
     604 952 389
  </a>
  <!-- location label stays the same -->
  <span class="text-sm text-gray-700 font-semibold">
    Valencia, España
  </span>
</div>
      </div>
    </div>
    <!-- 2 ▸ BOTTOM SHAPE  ─────────────────────────────────────────── -->
<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl
            sm:top-[calc(100%-30rem)]"
     aria-hidden="true">
  <div class="relative left-[calc(50%+3rem)]
              aspect-1155/678 w-144.5 -translate-x-1/2
              bg-gradient-to-tr
              from-[#0071BC]
              via-[#4D4D4D]
              to-[#000000]
              opacity-30
              sm:left-[calc(50%+36rem)] sm:w-288.75"
       style="clip-path: polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)">
  </div>
</div>
  </div>
</div>

<!-- ▸ FEATURE SECTION ------------------------------------------>
<!-- ▸ SERVICIOS DESTACADOS ------------------------------------------>
<div id="servicios" class="scroll-mt-24 bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- encabezado -->
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-[#0071BC]">
        Soluciones a medida para tu hogar
      </h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
        Fontanería, reformas y más
      </p>
      <p class="mt-6 text-lg/8 text-gray-700">
        Trabajamos rápido, con garantía y materiales de primera calidad.
        Descubre todo lo que podemos hacer por ti.
      </p>
    </div>

    <!-- lista de servicios -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

       <!-- Fontanería -->
<div class="relative pl-16">
  <dt class="text-base/7 font-semibold text-gray-900">
    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
<!-- Ícono: gota de agua alargada -->
<svg class="size-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <!-- Gota larga -->
  <path d="M12 2.5c-.3 0-.58.12-.8.33C9.3 4.77 6 9 6 13a6 6 0 0 0 12 0c0-4-3.3-8.23-5.2-10.17a1.1 1.1 0 0 0-.8-.33z"/>
</svg>
    </div>
    Fontanería
  </dt>

  <dd class="mt-2 text-base/7 text-gray-600">
    Instalamos y reparamos tuberías, sanitarios y sistemas de agua.
  </dd>
</div>

        <!-- Desatascos -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Desatascos – Solid Plunger silhouette -->
<svg
  class="size-6 text-white"
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- handle -->
  <path d="M11 2h2v12h-2z" />

  <!-- collar between handle and cup -->
  <path d="M9 14h6v2H9z" />

  <!-- domed rubber cup -->
  <path d="M6 16a6 6 0 0 1 12 0v3H6v-3z" />

  <!-- flat rim / base -->
  <path d="M4 19h16v2H4z" />
</svg>
            </div>
            Desatascos
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Limpieza de tuberías y bajantes con hidrojet y equipos de alta presión.
          </dd>
        </div>

        <!-- Electricidad -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            Electricidad
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Instalamos y reparamos sistemas eléctricos con total seguridad.
          </dd>
        </div>

        <!-- Albañilería -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Ícono: paleta invertida (upsidedown) -->
<svg class="size-6 text-white" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <g transform="rotate(180 12 12)">
    <!-- mango -->
    <rect x="10" y="1" width="4" height="6" rx="1" />
    <!-- unión mango–hoja -->
    <path d="M12 7v2" />
    <!-- hoja de paleta (triángulo invertido) -->
    <polygon points="12,9 20,23 4,23" />
  </g>
</svg>
            </div>
            Albañilería
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Construcción, reformas y acabados para todo tipo de espacios.
          </dd>
        </div>

        <!-- Pintura -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Ícono: rodillo de pintura -->
<svg class="size-6 text-white" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- rodillo (rectángulo) -->
  <rect x="3" y="5" width="14" height="6" rx="1" />
  <!-- pieza en L que une rodillo y mango -->
  <path d="M17 8h2a2 2 0 0 1 0 4h-2m0 0v2" />
  <!-- mango -->
  <path d="M15 14l-2 6" />
</svg>
            </div>
            Pintura
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Trabajos de pintura para interiores y exteriores, adaptados a cada espacio.
          </dd>
        </div>

        <!-- Trabajos verticales -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
             <!-- Trabajos Verticales – Ladder icon -->
<svg
  class="size-6 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
>
  <!-- side rails -->
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 3v18M16 3v18" />
  <!-- rungs -->
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 11h8M8 15h8M8 19h8" />
</svg>
            </div>
            Trabajos verticales
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Reparaciones y mantenimiento en altura con total seguridad.
          </dd>
        </div>

        <!-- Instalaciones -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Ícono: destornillador punta Phillips -->
<svg class="size-6 text-white" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- 1. Mango ergonómico -->
  <rect x="2" y="9" width="6" height="6" rx="1.2" />
  <!-- 2. Eje -->
  <path d="M8 12h7" />
  <!-- 3. Punta Phillips (cruz) -->
  <path d="M18 11.25v1.5" />
  <path d="M19.25 12h-2.5" />
</svg>
            </div>
            Instalaciones
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Montaje de grifería, muebles, electrodomésticos y pequeñas reformas de bricolaje.
          </dd>
        </div>

        <!-- Impermeabilización -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Impermeabilización – Shield Protection icon -->
<svg
  class="size-6 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
>
  <!-- shield outline -->
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 3l8 4v4c0 5.25-3.72 9.74-8 11-4.28-1.26-8-5.75-8-11V7l8-4z"
  />
  <!-- check mark -->
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m9 12 2.25 2.25L15 10.5"
  />
</svg>
            </div>
            Impermeabilización
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Soluciones para proteger cubiertas, terrazas y fachadas de filtraciones y humedad.
          </dd>
        </div>

        <!-- Reformas generales -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <!-- Ícono: martillo horizontal -->
<svg class="size-6 text-white" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- cabeza del martillo (verticalmente alineada) -->
  <path d="M2 10h8v4H2z" />
  <!-- mango horizontal -->
  <path d="M10 12h12" />
</svg>
            </div>
            Reformas generales
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Proyectos llave en mano para renovar tu vivienda o negocio.
          </dd>
        </div>

        <!-- Reparaciones en Valencia -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#0071BC]">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            Reparaciones en Valencia
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Servicio urgente 24/7 en toda la Comunidad Valenciana.
          </dd>
        </div>

      </dl>
    </div>
  </div>
</div>


<!--   Testimonios -->
<section
  id="clientes"
  class="scroll-mt-24 bg-white px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-32 lg:px-12"
>
  <!-- Encabezado de Testimonios -->
  <div class="mx-auto max-w-2xl lg:text-center">
    <h2 class="text-base/7 font-semibold text-[#0071BC]">
      Lo que dicen nuestros clientes
    </h2>
    <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
      Opiniones de nuestros clientes
    </p>
    <p class="mt-6 text-lg/8 text-gray-700">
      Conoce las experiencias de quienes ya han confiado en nuestros servicios.
    </p>
  </div>

  <!-- Testimonial -->
  <div class="mx-auto max-w-2xl lg:max-w-4xl mt-16">
    <figure>
      <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>
          “Vinieron a poner silicona alrededor de la ducha y no solo lo dejaron todo limpio, sino que también revisaron que estuviera bien sellado. Muy majos y profesionales. ¡Los recomiendo!”
        </p>
      </blockquote>
      <figcaption class="mt-10">
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900"> Ana G.</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">Puerto De Sagunto</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>





<!-- FAQ  -->
<section
  id="faqs"
  class="scroll-mt-24 bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">

  <div class="mx-auto max-w-4xl">
    <!-- Section header -->
    <div class="text-center mb-12">
      <!-- Subtítulo en azul, estilo “Lo que dicen nuestros clientes”, pero para FAQ -->
      <h2 class="text-base/7 font-semibold text-[#0071BC]">
        ¿Tienes dudas? Estamos aquí para ayudarte.
      </h2>

      <!-- Título principal de la sección -->
      <h3 class="mt-2 text-3xl font-extrabold text-gray-900">
        Preguntas Frecuentes
      </h3>

      <p class="mt-2 text-lg text-gray-600">
        Encuentra respuestas rápidas a las dudas más comunes.
      </p>
    </div>


    <!-- FAQ list: always single-column -->
    <div class="space-y-6">
      <!-- Q1 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Cuáles son los servicios que ofrecen?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          Ofrecemos una amplia gama de servicios profesionales en Valencia, incluyendo fontanería, electricidad, desatascos, albañilería y pintura. Realizamos toda clase de reparaciones ya que somos una empresa de multiservicios, garantizando calidad y rapidez en cada trabajo.
        </div>
      </details>

      <!-- Q2 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Cómo puedo solicitar un servicio?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          Puedes solicitar nuestros servicios a través de nuestra página web, por teléfono o por correo electrónico. Estaremos encantados de darte un presupuesto personalizado y coordinar una visita a tu domicilio.
        </div>
      </details>

      <!-- Q3 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Trabajamos en toda Valencia?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          Sí, nuestros servicios están disponibles en toda la Comunidad Valenciana, incluyendo Valencia y sus alrededores. Si no estás seguro de si cubrimos tu área, no dudes en contactarnos para confirmarlo.
        </div>
      </details>

      <!-- Q4 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Qué horarios tienen para realizar reparaciones?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          Ofrecemos horarios flexibles para adaptarnos a tus necesidades. Estamos disponibles de lunes a viernes y también podemos ofrecer atención en fines de semana en caso de urgencias.
        </div>
      </details>

      <!-- Q5 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Qué tipos de pago aceptan?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de crédito/débito. Para más detalles, consulta con nuestro equipo durante la solicitud del servicio.
        </div>
      </details>

      <!-- Q6 -->
      <details class="group rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <summary class="flex items-center justify-between p-5 cursor-pointer select-none">
          <span class="flex items-center space-x-2 text-gray-900 font-medium">
            <div class="p-2 bg-[#0071BC]/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0071BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>¿Cuánto tiempo tardan en realizar una reparación?</span>
          </span>
          <svg class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100">
          El tiempo depende del tipo de servicio requerido. Sin embargo, siempre buscamos ofrecer la solución más rápida sin sacrificar la calidad. Durante la solicitud, te informaremos sobre el tiempo estimado de la reparación.
        </div>
      </details>
    </div>
  </div>
</section>

 <!-- CTA Section (White Background) -->
<section
  id="consulta"
  class="scroll-mt-24 bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">

  <div class="text-center max-w-3xl mx-auto">
    <!-- Sub-label -->
    <h6 class="text-[#0071BC] font-semibold text-sm uppercase tracking-wide mb-2">
      Consulta gratis — contáctanos hoy.
    </h6>
    <!-- Main headline -->
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Deja tu hogar en buenas manos
    </h2>
    <!-- Supporting copy -->
    <p class="text-lg sm:text-xl text-gray-600 font-medium mb-8">
      Consulta gratis con solo una llamada — atención rápida en toda la Comunidad Valenciana.
    </p>
    <!-- Button + Location -->
    <div class="flex flex-col items-center">
      <a href="tel:+34604952389"
         class="bg-[#0071BC] hover:bg-[#005b99] text-white font-semibold px-6 py-3 rounded-md shadow transition">
        604 952 389
      </a>
      <span class="mt-2 text-sm text-gray-700 font-semibold">
        Valencia, España
      </span>
    </div>
  </div>
</section>


<!-- Contáctanos (sin logo) -->
<section
  id="contacto"
  class="scroll-mt-24 bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
  <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
    
    <!-- IZQUIERDA: Encabezado sin logo -->
    <div class="flex flex-col justify-center text-center lg:text-left">
      <h6 class="text-[#0071BC] font-semibold text-sm uppercase tracking-wide mb-2">
        Contáctanos
      </h6>
      <h2 class="text-4xl font-bold text-gray-900 mb-4">
        Estamos aquí para ayudarte
      </h2>
      <p class="text-lg text-gray-600">
        ¿Tienes una urgencia o una consulta? Llámanos o escríbenos y te responderemos al instante.
      </p>
    </div>

    <!-- DERECHA: 3 tarjetas en fila -->
    <div class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 lg:items-stretch">
      <!-- Teléfono -->
      <div class="flex-1 bg-slate-50 p-6 rounded-2xl shadow flex flex-col h-full">
        <h3 class="text-base font-semibold text-gray-900 mb-2">Teléfono</h3>
        <a href="tel:+34604952389"
           class="mt-auto text-[#0071BC] font-medium text-lg hover:underline">
          +34 604 952 389
        </a>
      </div>

      <!-- WhatsApp -->
      <div class="flex-1 bg-slate-50 p-6 rounded-2xl shadow flex flex-col h-full">
        <h3 class="text-base font-semibold text-gray-900 mb-2">WhatsApp</h3>
        <a href="https://wa.me/34604952389"
           class="mt-auto text-[#0071BC] font-medium text-lg hover:underline">
          +34 604 952 389
        </a>
      </div>

      <!-- Correo electrónico -->
      <div class="flex-1 bg-slate-50 p-6 rounded-2xl shadow flex flex-col h-full">
        <h3 class="text-base font-semibold text-gray-900 mb-2">Correo electrónico</h3>
        <a href="mailto:info@tuempresa.com"
           class="mt-auto text-[#0071BC] font-medium text-lg hover:underline">
          info@letoga.com
        </a>
      </div>
    </div>

  </div>
</section>


<!-- footer -->
<footer class="bg-white border-t border-gray-200 shadow-sm mt-12">
  <div class="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-start text-xs text-gray-500 gap-3">
    <!-- Logo -->
    <a href="#" class="-m-1.5 p-1.5">
      <span class="sr-only">Your Company</span>
      <img src="/assets/images/logo.png" alt="Site Logo" style="height:50px">
    </a>

    <!-- Copyright -->
    <span class="text-left">
      © 2025 <span class="font-semibold text-gray-900">Letoga</span>. Todos los derechos reservados.
    </span>
  </div>
</footer>


