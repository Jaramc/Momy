using Momy.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddSingleton<IMemoryRepository, MemoryRepository>();
builder.Services.AddSingleton<IQualityRepository, QualityRepository>();
builder.Services.AddSingleton<ITimelineRepository, TimelineRepository>();

var app = builder.Build();

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

// Interfaces y repositorios
public interface IMemoryRepository
{
    List<MemoryItem> GetAll();
}

public interface IQualityRepository
{
    List<QualityItem> GetAll();
}

public interface ITimelineRepository
{
    List<TimelineItem> GetAll();
}

public class MemoryRepository : IMemoryRepository
{
    public List<MemoryItem> GetAll()
    {
        return new List<MemoryItem>
        {
            new() { Id = 1, Title = "Momento especial", ImageUrl = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop", Description = "Un recuerdo lleno de amor", Order = 1 },
            new() { Id = 2, Title = "Sonrisas compartidas", ImageUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop", Description = "Momentos de pura alegría", Order = 2 },
            new() { Id = 3, Title = "Manos que cuidan", ImageUrl = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop", Description = "Tu cuidado incondicional", Order = 3 }
        };
    }
}

public class QualityRepository : IQualityRepository
{
    public List<QualityItem> GetAll()
    {
        return new List<QualityItem>
        {
            new() { Id = 1, Title = "Amorosa", Description = "Tu amor nos abraza sin condiciones, incondicional y eterno.", Icon = "❤️", Order = 1 },
            new() { Id = 2, Title = "Fuerte", Description = "Como una roca ante las dificultades, siempre firme para apoyarnos.", Icon = "💪", Order = 2 },
            new() { Id = 3, Title = "Dulce", Description = "Tu ternura transforma los días en momentos especiales y memorables.", Icon = "🌸", Order = 3 },
            new() { Id = 4, Title = "Valiente", Description = "Enfrentas la vida con coraje, inspirándonos a ser mejores cada día.", Icon = "⭐", Order = 4 },
            new() { Id = 5, Title = "Única", Description = "No hay nadie como tú en el mundo, eres irreemplazable y especial.", Icon = "💎", Order = 5 },
            new() { Id = 6, Title = "Inspiración", Description = "Tu ejemplo nos guía hacia ser personas mejores y más bondadosas.", Icon = "✨", Order = 6 }
        };
    }
}

public class TimelineRepository : ITimelineRepository
{
    public List<TimelineItem> GetAll()
    {
        return new List<TimelineItem>
        {
            new() { Id = 1, Title = "El comienzo", Description = "Nuestro primer encuentro, el inicio de una historia de amor infinito que dura hasta hoy.", ImageUrl = "https://images.unsplash.com/photo-1595910350673-a4be44f132f5?w=150&h=150&fit=crop", Order = 1 },
            new() { Id = 2, Title = "Crecimiento", Description = "A través de los años aprendí del mejor ejemplo, tu fuerza y tu amor sin límites.", ImageUrl = "https://images.unsplash.com/photo-1514432324607-2e4c9c1b7e51?w=150&h=150&fit=crop", Order = 2 },
            new() { Id = 3, Title = "Hoy", Description = "Celebramos tu vida, tu esencia y todo lo que significas para mí, ahora y siempre.", ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", Order = 3 }
        };
    }
}
