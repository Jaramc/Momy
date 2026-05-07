using Momy.Models;
using Momy.Models.Repositories;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Momy.Pages;

public class IndexModel : PageModel
{
    private readonly IMemoryRepository _memoryRepository;
    private readonly IQualityRepository _qualityRepository;

    public List<MemoryItem> Memories { get; set; } = new();
    public List<QualityItem> Qualities { get; set; } = new();

    public IndexModel(
        IMemoryRepository memoryRepository,
        IQualityRepository qualityRepository)
    {
        _memoryRepository = memoryRepository;
        _qualityRepository = qualityRepository;
    }

    public void OnGet()
    {
        Memories = _memoryRepository.GetAll().OrderBy(m => m.Order).ToList();
        Qualities = _qualityRepository.GetAll().OrderBy(q => q.Order).ToList();
        // Timeline removed per request
    }
}
