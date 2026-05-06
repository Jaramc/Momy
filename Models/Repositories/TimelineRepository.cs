namespace Momy.Models.Repositories;

public interface ITimelineRepository
{
    List<TimelineItem> GetAll();
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
