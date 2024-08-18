namespace SOLID.Domain.SingleResponsability.Good
{
    public class LimitedBeerData2
    {
        private IRepository<string> _beerData;
        private int _limit;
        private int _count = 0;

        public LimitedBeerData2(int limit, IRepository<string> beerData)
        {
            _limit = limit;
            _beerData = beerData;
        }

        public void Add(string beer)
        {
            if (_count >= _limit)
            {
                throw new InvalidOperationException("Límite de cervezas alcanzado");
            }
            _beerData.Add(beer);
            _count++;
        }

    }
}
