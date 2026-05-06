namespace Momy.Models.Repositories;

public interface IMemoryRepository
{
    List<MemoryItem> GetAll();
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
