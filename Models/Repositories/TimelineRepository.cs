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
			new() { Id = 1, Title = "", Description = "", ImageUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop", Order = 1 },
			new() { Id = 2, Title = "", Description = "", ImageUrl = "https://images.unsplash.com/photo-1515548211763-7f4f4b2f9f6b?w=600&h=400&fit=crop", Order = 2 },
			new() { Id = 3, Title = "", Description = "Momentos que iluminan el día", ImageUrl = "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=600&h=400&fit=crop", Order = 3 }
		};
	}
}

