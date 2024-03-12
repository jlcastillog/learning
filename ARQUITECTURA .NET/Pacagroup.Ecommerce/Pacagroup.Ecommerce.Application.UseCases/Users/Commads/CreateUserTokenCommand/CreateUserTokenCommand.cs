using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Users.Commads.CreateUserTokenCommand
{
    public sealed record class CreateUserTokenCommand : IRequest<Response<UserDTO>>
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
