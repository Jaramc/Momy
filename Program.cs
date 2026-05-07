using Momy.Models;
using Momy.Models.Repositories;
using Microsoft.Extensions.FileProviders;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddSingleton<IMemoryRepository, MemoryRepository>();
builder.Services.AddSingleton<IQualityRepository, QualityRepository>();

var app = builder.Build();

// Serve files from the project 'Imagenes' folder at request path '/Imagenes'
var imagesPath = Path.Combine(builder.Environment.ContentRootPath, "Imagenes");
if (Directory.Exists(imagesPath))
{
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(imagesPath),
        RequestPath = "/Imagenes"
    });
}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapRazorPages();

app.Run();
