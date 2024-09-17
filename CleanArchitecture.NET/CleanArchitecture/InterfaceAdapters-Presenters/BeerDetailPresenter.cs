using ApplicationLayer;
using EnterpriseLayer;

namespace InterfaceAdapters_Presenters
{
    public class BeerDetailPresenter : IPresenter<BeerEntity, BeerDetailViewModel>
    {
        public IEnumerable<BeerDetailViewModel> Present(IEnumerable<BeerEntity> data)
        {
            return data.Select(x => new BeerDetailViewModel()
            {
                Id = x.Id,
                Name = x.Name,
                Alcohol = x.Alcohol + "%",
                Style = x.Type,
                Color = x.IsStrongBeer() ? "Red" : "Green",
                Message = x.Description
            });
        }
    }
}
