using AutoMapper;
using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Queries.GetAllCustomerQuery
{
    public class GetAllCustomerQueryHandler : IRequestHandler<GetAllCustomerQuery, Response<IEnumerable<CustomerDTO>>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetAllCustomerQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Response<IEnumerable<CustomerDTO>>> Handle(GetAllCustomerQuery request, CancellationToken cancellationToken)
        {
            var response = new Response<IEnumerable<CustomerDTO>>();

            var allCustomers = await _unitOfWork.Customers.GetAllAsync();
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(allCustomers);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
            }

            return response;
        }
    }
}
