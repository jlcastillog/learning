using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Queries.GetAllCustomerQuery
{
    public sealed record class GetAllCustomerQuery : IRequest<Response<IEnumerable<CustomerDTO>>>
    {
    }
}
