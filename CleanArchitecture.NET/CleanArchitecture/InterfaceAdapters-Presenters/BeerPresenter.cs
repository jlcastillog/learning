using ApplicationLayer;
using EnterpriseLayer;

namespace InterfaceAdapters_Presenters
{
    public class BeerPresenter : IPresenter<BeerEntity, BeerViewModel>
    {
        public IEnumerable<BeerViewModel> Present(IEnumerable<BeerEntity> data)
        {
            return data.Select(x => new BeerViewModel()
            {
                Id = x.Id,
                Name = x.Name,
                Alcohol = x.Alcohol + "%",
            });
        }
    }
}
