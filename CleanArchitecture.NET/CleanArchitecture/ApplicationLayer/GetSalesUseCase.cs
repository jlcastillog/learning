using EnterpriseLayer;
using System.ComponentModel.DataAnnotations;

namespace ApplicationLayer
{
    public class GetSalesUseCase<TDto>
    {
        private readonly IRepository<SaleEntity> _saleRepository;
        private readonly IMapper<TDto, SaleEntity> _mapper;

        public GetSalesUseCase(IRepository<SaleEntity> saleRepository, IMapper<TDto, SaleEntity> mapper)
        {
            _saleRepository = saleRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<SaleEntity>> ExecuteAsync()
        {
            return await _saleRepository.GetAllAsync();
        }
    }
}
