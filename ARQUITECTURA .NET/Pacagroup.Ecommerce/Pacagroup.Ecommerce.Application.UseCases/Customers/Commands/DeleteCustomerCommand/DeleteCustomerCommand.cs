using MediatR;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Commands.DeleteCustomerCommand
{
    public sealed record class DeleteCustomerCommand: IRequest<Response<bool>>
    {
        public string CustomerId { get; set; }
    }
}
