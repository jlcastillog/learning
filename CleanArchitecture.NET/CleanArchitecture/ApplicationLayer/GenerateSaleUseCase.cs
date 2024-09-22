using ApplicationLayer.Exceptions;
using EnterpriseLayer;

namespace ApplicationLayer
{
    public class GenerateSaleUseCase<TDto>
    {
        private readonly IRepository<SaleEntity> _saleRepository;
        private readonly IMapper<TDto, SaleEntity> _mapper;

        public GenerateSaleUseCase(IRepository<SaleEntity> saleRepository, IMapper<TDto, SaleEntity> mapper)
        {
            _saleRepository = saleRepository;
            _mapper = mapper;
        }

        public async Task ExecuteAsync(TDto saleDto)
        {
            var sale = _mapper.ToEntity(saleDto);

            if (sale.Concepts.Count == 0)
            {
                throw new ValidationException("Una venta debe de tener conceptos");
            }
            if (sale.Total < 0)
            {
                throw new ValidationException("Una venta debe tener más de $ 0.00 en total");
            }

            await _saleRepository.AddAsync(sale);
        }
    }
}
