using AutoMapper;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.UseCases;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;
using Pacagroup.Ecommerce.Domain.Entities;
using Microsoft.Extensions.Logging;

namespace Pacagroup.Ecommerce.Application.UseCases.Customers
{
    public class CustomersApplication : ICustomersApplication
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<CustomersApplication> _logger;

        public CustomersApplication(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CustomersApplication> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }

        #region  Sync methods

        public Response<bool> Delete(string customerId)
        {
            var response = new Response<bool>();
            
            response.Data = _unitOfWork.Customers.Delete(customerId);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Delete succeded!!";
            }

            return response;
        }

        public Response<CustomerDTO> Get(string customerId)
        {
            var response = new Response<CustomerDTO>();
           
            var customer = _unitOfWork.Customers.Get(customerId);
            response.Data = _mapper.Map<CustomerDTO>(customer);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "Get succeded!!";
            }

            return response;
        }

        public Response<IEnumerable<CustomerDTO>> GetAll()
        {
            var response = new Response<IEnumerable<CustomerDTO>>();
            
            var allCustomers = _unitOfWork.Customers.GetAll();
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(allCustomers);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
            }

            return response;
        }

        public Response<bool> Insert(CustomerDTO customerDto)
        {
            var response = new Response<bool>();
            
            var customer = _mapper.Map<Customer>(customerDto);
            response.Data = _unitOfWork.Customers.Insert(customer);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Insert succeded!!";
            }

            return response;
        }

        public Response<bool> Update(CustomerDTO customerDto)
        {
            var response = new Response<bool>();

            var customer = _mapper.Map<Customer>(customerDto);
            response.Data = _unitOfWork.Customers.Update(customer);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Update succeded!!";
            }

            return response;
        }

        public ResponsePagination<IEnumerable<CustomerDTO>> GetAllWithPagination(int pageNumber, int pageSize)
        {
            var response = new ResponsePagination<IEnumerable<CustomerDTO>>();
           
            var count = _unitOfWork.Customers.Count();

            var customers = _unitOfWork.Customers.GetAllWithPagination(pageNumber, pageSize);
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(customers);

            if (response.Data != null)
            {
                response.PageNumber = pageNumber;
                response.ToatalPages = (int)Math.Ceiling(count / (double)pageSize);
                response.TotalCount = count;
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
            }

            return response;
        }

        #endregion

        #region Async methods

        public async Task<Response<bool>> DeleteAsync(string customerId)
        {
            var response = new Response<bool>();
            
            response.Data = await _unitOfWork.Customers.DeleteAsync(customerId);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Delete succeded!!";
            }

            return response;
        }

        public async Task<Response<IEnumerable<CustomerDTO>>> GetAllAsync()
        {
            var response = new Response<IEnumerable<CustomerDTO>>();
            
            var allCustomers = await _unitOfWork.Customers.GetAllAsync();
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(allCustomers);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
                _logger.LogInformation("GetAll succeded!!");
            }

            return response;
        }

        public async Task<Response<CustomerDTO>> GetAsync(string customerId)
        {
            var response = new Response<CustomerDTO>();
            
            var customer = await _unitOfWork.Customers.GetAsync(customerId);
            response.Data = _mapper.Map<CustomerDTO>(customer);

            if (response.Data != null)
            {
                response.IsSuccess = true;
                response.Message = "Get succeded!!";
            }

            return response;
        }

        public async Task<Response<bool>> InsertAsync(CustomerDTO customerDto)
        {
            var response = new Response<bool>();
            
            var customer = _mapper.Map<Customer>(customerDto);
            response.Data = await _unitOfWork.Customers.InsertAsync(customer);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Insert succeded!!";
            }

            return response;
        }

        public async Task<Response<bool>> UpdateAsync(CustomerDTO customerDto)
        {
            var response = new Response<bool>();
            
            var customer = _mapper.Map<Customer>(customerDto);
            response.Data = await _unitOfWork.Customers.UpdateAsync(customer);

            if (response.Data)
            {
                response.IsSuccess = true;
                response.Message = "Update succeded!!";
            }

            return response;
        }

        public async Task<ResponsePagination<IEnumerable<CustomerDTO>>> GetAllWithPaginationASync(int pageNumber, int pageSize)
        {
            var response = new ResponsePagination<IEnumerable<CustomerDTO>>();
            
            var count = _unitOfWork.Customers.Count();

            var customers = await _unitOfWork.Customers.GetAllWithPaginationAsync(pageNumber, pageSize);
            response.Data = _mapper.Map<IEnumerable<CustomerDTO>>(customers);

            if (response.Data != null)
            {
                response.PageNumber = pageNumber;
                response.ToatalPages = (int)Math.Ceiling(count / (double)pageSize);
                response.TotalCount = count;
                response.IsSuccess = true;
                response.Message = "GetAll succeded!!";
            }

            return response;
        }

        #endregion
    }
}
