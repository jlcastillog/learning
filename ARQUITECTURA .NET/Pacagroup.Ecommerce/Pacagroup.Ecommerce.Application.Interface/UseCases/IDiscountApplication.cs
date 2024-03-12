using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Domain.Entities;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.Interface.UseCases
{
    public interface IDiscountApplication
    {
        Task<Response<bool>> Create(DiscountDTO discountDTO, CancellationToken cancellationToken = default);
        Task<Response<bool>> Update(DiscountDTO discountDTO, CancellationToken cancellationToken = default);
        Task<Response<bool>> Delete(DiscountDTO discountDTO, CancellationToken cancellationToken = default);
        Task<Response<DiscountDTO>> Get(int id, CancellationToken cancellationToken = default);
        Task<Response<List<DiscountDTO>>> GetAll(CancellationToken cancellationToken = default);
        Task<ResponsePagination<IEnumerable<DiscountDTO>>> GetAllWithPagination(int pageNumber, int pageSize);
    }
}
