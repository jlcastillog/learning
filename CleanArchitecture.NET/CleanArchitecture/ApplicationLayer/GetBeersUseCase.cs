namespace ApplicationLayer
{
    public class GetBeersUseCase<TEntity, TOutput>
    {
        private readonly IRepository<TEntity> _beerRepository;
        private readonly IPresenter<TEntity, TOutput> _presenter;

        public GetBeersUseCase(IRepository<TEntity> beerRepository, IPresenter<TEntity, TOutput> presenter)
        {
            _beerRepository = beerRepository;
            _presenter = presenter;
        }

        public async Task<IEnumerable<TOutput>> ExecuteAsync()
        {
            var beers = await _beerRepository.GetAllAsync();
            return _presenter.Present(beers);
        }
    }
}
