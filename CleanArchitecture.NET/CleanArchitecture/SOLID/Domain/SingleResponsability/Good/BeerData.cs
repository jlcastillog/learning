namespace SOLID.Domain.SingleResponsability.Good
{
    public class BeerData : IRepository<string>
    {
        protected List<string> _beers;

        public BeerData()
        {
            _beers = new List<string>();
        }

        public virtual void Add(string beer) => _beers.Add(beer);

        public List<string> Get() => _beers;

    }
}
