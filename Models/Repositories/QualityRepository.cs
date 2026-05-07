namespace Momy.Models.Repositories;

public interface IQualityRepository
{
    List<QualityItem> GetAll();
}

public class QualityRepository : IQualityRepository
{
    public List<QualityItem> GetAll()
    {
        return new List<QualityItem>
        {
            new() { Id = 1, Title = "Amorosa", Description = "Tu amor nos abraza sin condiciones, incondicional y eterno.", Order = 1 },
            new() { Id = 2, Title = "Fuerte", Description = "Como una roca ante las dificultades, siempre firme para apoyarnos.", Order = 2 },
            new() { Id = 3, Title = "Dulce", Description = "Tu ternura transforma los días en momentos especiales y memorables.", Order = 3 },
            new() { Id = 4, Title = "Valiente", Description = "Enfrentas la vida con coraje, inspirándonos a ser mejores cada día.", Order = 4 },
            new() { Id = 5, Title = "Única", Description = "No hay nadie como tú en el mundo, eres irreemplazable y especial.", Order = 5 },
            new() { Id = 6, Title = "Inspiración", Description = "Tu ejemplo nos guía hacia ser personas mejores y más bondadosas.", Order = 6 }
        };
    }
}
