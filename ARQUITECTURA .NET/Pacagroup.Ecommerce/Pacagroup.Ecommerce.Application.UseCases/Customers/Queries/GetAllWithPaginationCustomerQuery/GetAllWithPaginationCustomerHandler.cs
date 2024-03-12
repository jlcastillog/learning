using AutoMapper;
using MediatR;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers.Queries.GetAllWithPaginationCustomerQuery
{
    public class GetAllWithPaginationCustomerHandler : IRequestHandler<GetAllWithPaginationCustomerQuery, ResponsePagination<IEnumerable<CustomerDTO>>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetAllWithPaginationCustomerHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ResponsePagination<IEnumerable<CustomerDTO>>> Handle(GetAllWithPaginationCustomerQuery request, CancellationToken cancellationToken)
        {
            var response = new ResponsePagination<IEnumerable<CustomerDTO>>();

            var count = _unitOfWork.Customers.Count();

            var customers = await _unitOfWork.Customers.GetAllWithPaginationAsync(request.PageNumber, request.PageSize);
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(customers);

            if (response.Data != null)
            {
                response.PageNumber = request.PageNumber;
                response.ToatalPages = (int)Math.Ceiling(count / (double)request.PageSize);
                response.TotalCount = count;
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
            }

            return response;
        }
    }
}
