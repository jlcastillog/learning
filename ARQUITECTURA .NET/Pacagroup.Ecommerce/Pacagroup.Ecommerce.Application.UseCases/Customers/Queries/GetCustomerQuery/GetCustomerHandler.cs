using AutoMapper;
using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Queries.GetCustomerQuery
{
    public class GetCustomerHandler : IRequestHandler<GetCusomerQuery, Response<CustomerDTO>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetCustomerHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Response<CustomerDTO>> Handle(GetCusomerQuery request, CancellationToken cancellationToken)
        {
            var response = new Response<CustomerDTO>();

            var customer = await _unitOfWork.Customers.GetAsync(request.CustomerId);
            response.Data = _mapper.Map<CustomerDTO>(customer);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "Get succeded!!";
            }

            return response;
        }
    }
}
