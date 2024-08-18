namespace SOLID.Domain.SingleResponsability.Good
{
    public class LimitedBeerData : BeerData
    {
        private int _limit;

        public LimitedBeerData(int limit)
        {
            _limit = limit;
        }

        public override void Add(string beer)
        {
            if (_beers.Count >= _limit)
            {
                throw new InvalidOperationException("Límite de cervezas alcanzado");
            }
            base.Add(beer);
        }
    }
}
