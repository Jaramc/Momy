namespace Momy.Models;

public abstract class BaseEntity
{
    public int Id { get; set; }
    public int Order { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
