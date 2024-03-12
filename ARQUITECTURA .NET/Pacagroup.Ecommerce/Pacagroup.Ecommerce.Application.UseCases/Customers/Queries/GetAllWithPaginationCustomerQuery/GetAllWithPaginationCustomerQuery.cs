using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Queries.GetAllWithPaginationCustomerQuery
{
    public sealed record class GetAllWithPaginationCustomerQuery : IRequest<ResponsePagination<IEnumerable<CustomerDTO>>>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
