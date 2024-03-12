using AutoMapper;
using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Users.Commads.CreateUserTokenCommand
{
    public class CreateUserTokenHandler : IRequestHandler<CreateUserTokenCommand, Response<UserDTO>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateUserTokenHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Response<UserDTO>> Handle(CreateUserTokenCommand request, CancellationToken cancellationToken)
        {
            var response = new Response<UserDTO>();
            var user = await _unitOfWork.Users.Authenticate(request.UserName, request.Password);

            if (user is null)
            {
                response.IsSuccess = true;
                response.Message = "User doesn't exist";
                return response;
            }

            response.Data = _mapper.Map<UserDTO>(user);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "Authenticate succeded!!";
            }

            return response;
        }
    }
}
