using ApplicationLayer.Exceptions;
using EnterpriseLayer;

namespace ApplicationLayer
{
    public class AddBeerUseCase<TDTO>
    {
        private readonly IRepository<BeerEntity> _beerRepository;
        private readonly IMapper<TDTO, BeerEntity> _mapper;

        public AddBeerUseCase(IRepository<BeerEntity> beerRepository, IMapper<TDTO, BeerEntity> mapper)
        {
            _beerRepository = beerRepository;
            _mapper = mapper;
        }

        public async Task ExecuteAsync(TDTO beerDto)
        {
            var beerEntity = _mapper.ToEntity(beerDto);

            if (string.IsNullOrEmpty(beerEntity.Name))
                throw new ValidationException("El nombre de la cerveza es obligatorio");

            await _beerRepository.AddAsync(beerEntity);
        }
    }
}
