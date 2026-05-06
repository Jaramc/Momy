using Momy.Models;
using Momy.Models.Repositories;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Momy.Pages;

public class IndexModel : PageModel
{
    private readonly IMemoryRepository _memoryRepository;
    private readonly IQualityRepository _qualityRepository;
    private readonly ITimelineRepository _timelineRepository;

    public List<MemoryItem> Memories { get; set; } = new();
    public List<QualityItem> Qualities { get; set; } = new();
    public List<TimelineItem> TimelineItems { get; set; } = new();

    public IndexModel(
        IMemoryRepository memoryRepository,
        IQualityRepository qualityRepository,
        ITimelineRepository timelineRepository)
    {
        _memoryRepository = memoryRepository;
        _qualityRepository = qualityRepository;
        _timelineRepository = timelineRepository;
    }

    public void OnGet()
    {
        Memories = _memoryRepository.GetAll().OrderBy(m => m.Order).ToList();
        Qualities = _qualityRepository.GetAll().OrderBy(q => q.Order).ToList();
        TimelineItems = _timelineRepository.GetAll().OrderBy(t => t.Order).ToList();
    }
}
