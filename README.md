# 💕 Mamá - Landing Page Especial

Una página web elegante, romántica y delicada dedicada a una madre, con estilo visual de cumpleaños y Día de la Madre.

## 🎯 Características

- **Diseño Elegante**: Paleta de colores suave (crema, rosa pastel, rosado empolvado, vino, dorado)
- **Totalmente Responsivo**: Optimizado para desktop, tablet y móvil
- **Interactivo**: Animaciones suaves, scroll suave y efectos hover
- **Semántico**: HTML5 semántico y accesible
- **Moderno**: Tailwind CSS + CSS personalizado
- **Dinámico**: Datos renderizados desde C# con modelos

## 📁 Estructura del Proyecto

```
Momy/
├── Models/
│   ├── MemoryItem.cs          # Modelo para momentos de galería
│   ├── QualityItem.cs         # Modelo para cualidades
│   └── TimelineItem.cs        # Modelo para línea de tiempo
├── Pages/
│   ├── Index.cshtml           # Página principal
│   ├── Index.cshtml.cs        # Code-behind
│   └── _ViewStart.cshtml      # Vista inicial
├── Properties/
│   └── launchSettings.json     # Configuración de lanzamiento
├── wwwroot/
│   ├── css/
│   │   └── site.css           # Estilos personalizados
│   └── js/
│       └── site.js            # Interacciones JavaScript
├── Program.cs                 # Punto de entrada
├── appsettings.json          # Configuración de la aplicación
├── Momy.csproj               # Archivo de proyecto
└── README.md                 # Este archivo
```

## 🚀 Cómo Ejecutar

### Prerequisitos
- .NET 8.0 SDK o superior
- Visual Studio, Visual Studio Code o Rider

### Pasos

1. **Clonar o descargar el proyecto**
   ```bash
   cd Momy
   ```

2. **Restaurar dependencias**
   ```bash
   dotnet restore
   ```

3. **Ejecutar la aplicación**
   ```bash
   dotnet run
   ```
   O si usas Visual Studio/Rider, presiona `F5` o haz clic en el botón "Run"

4. **Acceder a la página**
   - La página se abrirá automáticamente en `https://localhost:7001`
   - Si no se abre, ingresa manualmente la URL en tu navegador

## 🎨 Personalizaciones

### Cambiar Imágenes
En `Program.cs`, modifica las URLs en los repositorios:

```csharp
new() { 
    ImageUrl = "tu-url-de-imagen.jpg",
    // ... resto de propiedades
}
```

### Cambiar Colores
En `wwwroot/css/site.css`, modifica las variables CSS:

```css
:root {
    --cream: #FFF8F3;
    --rose-pastel: #F8D4D4;
    /* ... etc */
}
```

### Cambiar Textos
- En `Pages/Index.cshtml` puedes cambiar los textos fijos
- En `Program.cs` (repositorios) puedes cambiar los datos dinámicos

## 📱 Secciones de la Página

1. **Navbar** - Navegación sticky con enlaces y botón destacado
2. **Hero** - Título principal con flores decorativas
3. **Tarjeta de Mensaje** - Mensaje emotivo personalizado
4. **Galería** - Grid responsivo de imágenes
5. **Banner Emocional** - Imagen panorámica con overlay
6. **Cualidades** - 6 tarjetas con cualidades admirables
7. **Nuestra Historia** - Línea de tiempo vertical elegante
8. **Sección Final** - Mensaje de cierre con flores decorativas

## ✨ Interacciones JavaScript

- ✅ Scroll suave en enlaces del menú
- ✅ Animaciones al aparecer secciones
- ✅ Efectos hover en botones y tarjetas
- ✅ Corazones flotantes (botón Enviar amor)
- ✅ Pétalos animados en el fondo
- ✅ Toast notifications
- ✅ Botón "Volver al inicio" funcional

## 🎭 Paleta de Colores

```
Crema:           #FFF8F3
Rosa Pastel:     #F8D4D4
Rosa Empolvado:  #E8C5D8
Vino Suave:      #8B4A6D
Dorado Claro:    #D4AF8F
Blanco Cálido:   #FFFBF7
```

## 📚 Tecnologías Utilizadas

- **Backend**: C# + ASP.NET Core Razor Pages
- **Frontend**: HTML5 Semántico + Tailwind CSS + CSS Personalizado
- **Interactividad**: JavaScript Vanilla
- **Tipografía**: Cormorant Garamond (serif) + Inter (sans-serif)
- **Imágenes**: Unsplash API (placeholders)

## 🔧 Desarrollo

Para desarrollar y hacer cambios:

1. Abre el proyecto en tu IDE
2. Realiza los cambios en los archivos
3. La aplicación recargará automáticamente (hot reload)
4. Verifica los cambios en el navegador

## 📖 Estructura de Datos

### MemoryItem
```csharp
{
    Id: int,
    Title: string,
    ImageUrl: string,
    Description: string,
    Order: int
}
```

### QualityItem
```csharp
{
    Id: int,
    Title: string,
    Description: string,
    Icon: string,
    Order: int
}
```

### TimelineItem
```csharp
{
    Id: int,
    Title: string,
    Description: string,
    ImageUrl: string,
    Order: int
}
```

## 💡 Tips para Personalización

1. **Agregar más momentos a la galería**: Edita el método `GetAll()` en `MemoryRepository`
2. **Cambiar cualidades**: Modifica la lista en `QualityRepository`
3. **Agregar eventos a la línea de tiempo**: Edita `TimelineRepository`
4. **Cambiar el nombre**: Reemplaza "Mamá" en la navbar y footer

## 🌐 Deploy

Para publicar la aplicación:

```bash
dotnet publish -c Release -o ./publish
```

Los archivos publicados estarán en la carpeta `publish/`

## 📝 Licencia

Este proyecto es de código abierto y puede ser utilizado libremente para propósitos personales y educativos.

## 🎁 Nota Especial

Esta página fue creada con ❤️ como un regalo especial. Personalízala con tus propios textos, imágenes y detalles para hacerla aún más especial.

---

**¡Que disfrutes este regalo especial para alguien importante en tu vida!** 🌹✨
