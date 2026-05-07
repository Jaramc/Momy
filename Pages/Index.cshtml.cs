using Momy.Models;
using Momy.Models.Repositories;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Momy.Pages;

public class IndexModel : PageModel
{
    private readonly IQualityRepository _qualityRepository;

    public List<QualityItem> Qualities { get; set; } = new();

    public IndexModel(IQualityRepository qualityRepository)
    {
        _qualityRepository = qualityRepository;
    }

    public void OnGet()
    {
        Qualities = _qualityRepository.GetAll().OrderBy(q => q.Order).ToList();
    }
}
